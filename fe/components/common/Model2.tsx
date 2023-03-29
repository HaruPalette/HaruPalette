import styled from '@emotion/styled';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
/**
 * 동동 뛰는 애니매이션
 * 위치: shop-캐릭터-카드front
 */
const CustomDiv = styled.div`
  top: 88px;
  left: 0px;
  width: 280px;
  height: 180px;
`;

function Model2(props: any) {
  const refDiv = useRef<HTMLDivElement>(null);
  let rendererPrev: any;
  let cameraPrev: any;
  let scenePrev: any;
  let buddyEname = props.data;

  useEffect(() => {
    const { current: customdiv } = refDiv;

    if (customdiv && !rendererPrev) {
      const group = new THREE.Group();

      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      });

      customdiv?.appendChild(renderer.domElement);

      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(280, 180);
      rendererPrev = renderer;

      // 씬 && 카메라 설정
      const scene = new THREE.Scene();
      scene.background = null;
      scenePrev = scene;

      let width = customdiv ? customdiv.clientWidth : 0;
      let height = customdiv ? customdiv.clientHeight : 0;
      const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 100);
      cameraPrev = camera;
      cameraPrev.position.x = 0;
      cameraPrev.position.y = 0.6;
      cameraPrev.position.z = 2;

      // 빛 설정
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.65);
      group.add(ambientLight);

      const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
      directionalLight.position.set(0, 1, 4);
      directionalLight.castShadow = true;
      group.add(directionalLight);

      // 캐릭터 설정
      // ${buddyEname}/${buddyEname}
      // tori/tori_update
      const glftLoader = new GLTFLoader();
      glftLoader.load(`assets/img/${buddyEname}/${buddyEname}.gltf`, el => {
        const temp = el;
        temp.scene.position.x = 0.35;
        temp.scene.position.y = 0;
        temp.scene.position.z = 1;
        temp.scene.rotation.y = -0.92;
        temp.scene.rotation.x = 0.3;

        group.add(temp.scene);

        let step = 0;

        const animate = () => {
          if (temp) {
            step += 0.02;
            temp.scene.scale.set(1.2, 1.2, 1.2);
            temp.scene.position.y = 0.5 * Math.abs(Math.sin(step));
          }
          requestAnimationFrame(animate); // 애니메이션을 무한 반복 되도록 하는 메서드

          rendererPrev.render(scenePrev, cameraPrev);
        };
        animate();
      });
      const glftLoaderSub = new GLTFLoader();
      glftLoaderSub.load(
        `assets/img/${buddyEname}/${buddyEname}_item.gltf`,
        ele => {
          const temp3 = ele;
          temp3.scene.position.x = -2.3;
          temp3.scene.position.y = 0.9;
          temp3.scene.position.z = -1.8;
          temp3.scene.rotation.y = 2;
          temp3.scene.rotation.x = 0.3;
          group.add(ele.scene);

          ele.scene.scale.set(0.4, 0.4, 0.4);
        },
      );

      scenePrev.add(group);
    }
  }, [refDiv]);

  return <CustomDiv ref={refDiv} />;
}
export default Model2;
