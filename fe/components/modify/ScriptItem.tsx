import styled from '@emotion/styled';
import { useSelector } from 'react-redux';
import { selectScript } from '../../store/modules/script';

const Container = styled.div``;
const Script = styled.textarea``;

function ScriptItem(props: { index: number }) {
  const { index } = props;
  //   const [isLoad, setLoad] = useState(false);

  // axios요청 후 내용을 전달 받았을 때
  console.log(
    index,
    // scriptArr.length,
    useSelector(selectScript).curScriptIndex,
  );
  const script = `${index} 번째 스크립트입니다.`;
  //   if (scriptArr.length < useSelector(selectScript).curScriptIndex) {
  //     console.log('스크립트 수정');
  //     scriptData.splice(index, 0, script);
  //   }
  //   useEffect(() => {
  //     setScriptData(scriptData.splice(index, 0, script));
  //     // if (isLoad) {
  //     //   setLoad(false);
  //     // }
  //   }, []);
  return (
    <Container>
      {/* {isLoad && <div>로딩 중 ...</div>} */}
      {/* {!isLoad && } */}
      <Script>{script}</Script>
    </Container>
  );
}

export default ScriptItem;
