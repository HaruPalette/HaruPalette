import styled from '@emotion/styled';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const CustomDiv = styled.canvas`
  position: relative;
  width: 375px;
`;

function Model(props: any) {
  const temp = props;
  const currModel = temp.data;
  const refDiv = useRef<HTMLCanvasElement>(null);
  let rendererPrev: any;
  let cameraPrev: any;
  let scenePrev: any;
  // let texture: any;
  // let framebuffer: any;

  useEffect(() => {
    const group = new THREE.Group();
    const customdiv = refDiv.current;

    if (customdiv && !rendererPrev) {
      const sizes = {
        width: window.innerWidth,
        height: window.innerHeight,
        aspect: window.innerWidth / window.innerHeight,
      };

      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        canvas: customdiv,
        alpha: true,
      });

      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      renderer.setPixelRatio(window.devicePixelRatio);
      if (sizes.width > 500) {
        renderer.setSize(486, 400);
      } else {
        renderer.setSize(375, 308);
      }

      rendererPrev = renderer;

      const scene = new THREE.Scene();
      scene.background = null;
      scenePrev = scene;

      // window.addEventListener('mousedown·mouseup', onWindowReset, false);
      // window.onresize = resize.bind(customdiv);
      // resize();

      // requestAnimationFrame(render.bind(refDiv));

      // 그림자 설정
      const textureLoader = new THREE.TextureLoader();
      const alphaShadow = textureLoader.load(
        '/assets/img/common/textures/simpleShadow.jpg',
      );

      const sphereShadow = new THREE.Mesh(
        new THREE.PlaneGeometry(2, 2),
        new THREE.MeshBasicMaterial({
          transparent: true,
          color: 0x000000,
          opacity: 0.9,
          alphaMap: alphaShadow,
        }),
      );

      sphereShadow.position.x = 0.1;
      sphereShadow.position.y = -0.95;
      sphereShadow.rotation.x = -Math.PI * 0.5;
      sphereShadow.scale.set(0.7, 0.7, 0.7);

      group.add(sphereShadow);

      let width = customdiv ? customdiv.clientWidth : 0;
      let height = customdiv ? customdiv.clientHeight : 0;
      const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 100);

      // OrbitControls 적용이 되지 않았을 때 내가 맞춘값
      // camera.position.x = 0;
      // camera.position.y = 0.35;
      // camera.position.z = 1.8;

      camera.position.x = 0;
      camera.position.y = 0.35;
      camera.position.z = 2;
      // controls.update();
      cameraPrev = camera;

      const controls = new OrbitControls(camera, customdiv);
      // controls.saveState();
      // controls.minDistance = 1.8;
      // controls.maxDistance = 1.8;
      controls.minPolarAngle = 1.5; // 윗각도 제한
      controls.maxPolarAngle = 1.5; // 아래각도 제한(MATH.PI/2의 경우 바닥까지만 보여줌)
      controls.enableDamping = true;
      controls.enableZoom = false;
      controls.screenSpacePanning = false;

      const onWindowResize = function (): void {
        width = window.innerWidth;
        height = window.innerHeight;

        /**
         * case1
         * 창최대(or 전체화면)를 할때
         */
        // case2: 아이패드
        // case3: 모바일
        console.log(sizes.width, width);
        // rendererPrev.setPixelRatio(window.devicePixelRatio);
        // if (sizes.width === width) {
        cameraPrev.aspect = 1.415; // canvas비율을 카메라에 적용
        if (sizes.width > 500) {
          rendererPrev.setSize(486, 400, true);
        } else {
          renderer.setSize(375, 308);
          rendererPrev.setSize(375, 308, true);
        }

        // cameraPrev.updateProjectionMatrix(); // 변경된 값을 카메라에 적용
        // controls.reset();
      };

      window.addEventListener('resize', onWindowResize, false);

      // 빛 설정
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.65);
      group.add(ambientLight);

      const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
      directionalLight.position.set(2, 1.3, 5);
      directionalLight.castShadow = true;
      group.add(directionalLight);

      // 캐릭터 설정
      const glftLoader = new GLTFLoader();
      glftLoader.load(`/assets/img/${temp.data}/${temp.data}.gltf`, el => {
        const temp6 = el;
        temp6.scene.position.x = 0.35;
        temp6.scene.position.y = 1;
        temp6.scene.position.z = 1.1;

        temp6.scene.rotation.x = 0.3;
        // 옆면: -0.7 정면: -0.4
        temp6.scene.rotation.y = -0.9;

        // scene.add(el.scene);
        group.add(temp6.scene);

        // 부모 요소에는 castShadow가 true이지만 자식요소의 그림자옵션 false -> true로 변경
        el.scene.traverse(function (child) {
          const temp2 = child;
          if (temp2 instanceof THREE.Mesh) {
            temp2.castShadow = true;
          }
        });

        let step = 0;

        const animate = () => {
          if (temp6) {
            step += 0.02; // 움직임 속도
            temp6.scene.scale.set(0.9, 0.9, 0.9);
            temp6.scene.position.y = -0.4 + 0.4 * Math.abs(Math.sin(step));
            // el.scene.position.y = Math.sin(elapsedTime * .5) * .1 - 0.1
            sphereShadow.material.opacity =
              (1 - Math.abs(temp6.scene.position.y + 0.4)) * 0.5;
          }
          // requestAnimationFrame: 애니메이션을 무한 반복 되도록 하는 메서드
          requestAnimationFrame(animate);
          controls.update();

          rendererPrev.render(scenePrev, cameraPrev);
        };
        animate();
      });
      const glftLoaderSub = new GLTFLoader();
      glftLoaderSub.load(
        `/assets/img/${temp.data}/${temp.data}_item.gltf`,
        ele => {
          const temp3 = ele;
          temp3.scene.position.x = -1.2;
          temp3.scene.position.y = 0.7;
          temp3.scene.position.z = 0.1;
          temp3.scene.rotation.y = 1.8;
          temp3.scene.rotation.x = 0.3;
          group.add(temp3.scene);

          // scene.add(el.scene);
          ele.scene.scale.set(0.1, 0.1, 0.1);
        },
      );

      scenePrev.add(group);
    }
  }, [refDiv, currModel]);

  return <CustomDiv className="canva" ref={refDiv} />;
}
export default Model;
