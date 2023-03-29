import styled from '@emotion/styled';
import Image from 'next/image';
import { ColorTypes } from '@emotion/react';
import { IFriendData } from './BuyingBuddy';
import {
  gomiDark,
  gomiLight,
  haruDark,
  haruLight,
  toriDark,
  toriLight,
} from '../../styles/theme';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHook';
import { selectTheme } from '../../store/modules/theme';
import Model2 from '../common/Model2';
import { setCharName } from '../../store/modules/profile';
import { selectShop, setFriendShip } from '../../store/modules/shop';

const Section = styled.section`
  width: 80vw;
  height: 300px;
  position: relative;
  perspective: 600px;
`;

const Card = styled.div<{ theme: ColorTypes }>`
  position: relative;
  width: 280px;
  height: 290px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transition: all 1s;
  transform-style: preserve-3d;
  &:hover {
    transform: translate(-50%, -50%) rotateY(180deg);
  }
  border: 3px solid ${props => props.theme.sub};
  border-radius: 16px;
  z-index: 200;
  white-space: pre-wrap;
`;

const Front = styled.div<{ theme: ColorTypes }>`
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  left: 0;
  top: 0;
  background: ${props => props.theme.diaryBackground};
  backface-visibility: hidden;
  z-index: 9999;
  flex-direction: column;
`;
const Back = styled.div<{ theme: ColorTypes }>`
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  left: 0;
  top: 0;
  background: ${props => props.theme.diaryBackground};
  backface-visibility: hidden;
  transform: rotateY(180deg);
  flex-direction: column;
`;
const NameDiv = styled.div<{ theme: ColorTypes }>`
  width: 280px;
  height: 90px;
  top: 0px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 20px;
  color: ${props => props.theme.main};
`;

const NameTitle = styled.div`
  width: 100px;
  height: 30px;
  font-weight: bold;
  font-size: 20px;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
`;
const ENameTitle = styled.div`
  width: 100px;
  height: 30px;
  font-size: 13px;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

const CharacterDiv = styled.div`
  width: 280px;
  height: 180px;
  z-index: 3;
`;

const CharacteristicDiv = styled.div`
  width: 280px;
  height: 40px;
  top: 180px;
  text-align: center;
  font-size: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;
const Characteristic = styled.div<{ theme: ColorTypes }>`
  width: 70px;
  height: 25px;
  top: 180px;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  font-size: 10px;
  margin: 0 10px;
  border-radius: 16px;
  background: ${props => props.theme.background};
  color: ${props => props.theme.main};
  border: 1px solid #e5e5e5;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.25);
  font-weight: bold;
`;

const CharacterDivBack = styled.div`
  width: 280px;
  height: 140px;
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CharacterBack = styled(Image)`
  width: 120px;
  height: 120px;
`;
const DescDivBack = styled.div<{ theme: ColorTypes }>`
  width: 280px;
  height: 140px;
  text-align: center;
  font-size: 14px;
  color: ${props => props.theme.color};
`;
const BtnDivBack = styled.div`
  width: 280px;
  height: 40px;
  text-align: center;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const BtnNotFriendBack = styled.button<{ theme: ColorTypes }>`
  width: 100px;
  height: 30px;
  text-align: center;
  font-size: 18px;
  color: ${props => props.theme.main};
  cursor: pointer;
  font-weight: bold;
`;
const BtnYesFriendBack = styled.button<{ theme: ColorTypes }>`
  width: 100px;
  height: 30px;
  text-align: center;
  font-size: 18px;
  color: ${props => props.theme.main};
  cursor: pointer;
  font-weight: bold;
`;

function FriendCard(props: { data: IFriendData }) {
  const { data } = props;
  const dispatch = useAppDispatch();
  const isDark = useAppSelector(selectTheme) ? 'Dark' : 'Light';
  const isFriendShip = useAppSelector(selectShop).friendShipList[data.index];
  const customTheme = data.ename + isDark;

  const imgSrc = `assets/img/${data.ename}/2d.svg`;

  const getTheme = () => {
    if (customTheme === 'haruDark') return haruDark;
    if (customTheme === 'haruLight') return haruLight;
    if (customTheme === 'toriDark') return toriDark;
    if (customTheme === 'toriLight') return toriLight;
    if (customTheme === 'gomiDark') return gomiDark;
    return gomiLight;
  };

  const handleDoFriendShip = () => {
    // alert 띄우고 확인 시
    const isConfirm = window.confirm(
      `${data.name}와 친구를 맺으시겠어요?\n${data.amount}가 포인트에서 차감됩니다.`,
    );
    if (isConfirm) {
      // store에 포인트 저장해 놓고, 가져와야 함
      // 포인트 차감해야 함
      dispatch(setFriendShip(data.index));
      dispatch(setCharName(data.ename));
      alert(`${data.name}와 친구가 되었어요:)`);
    }
  };

  const handleCurrFriendShip = () => {
    const isConfirm = window.confirm(`${data.name}을 선택하시겠어요?`);
    if (isConfirm) {
      // store에서 현재 선택한 친구 변경해 주어야 함
      dispatch(setCharName(data.ename));
    }
  };

  const handleCharacteristic = () => {
    const CharacteristicArr = data.characteristic.map((el: string) => {
      return (
        <Characteristic theme={getTheme()} key={el}>
          {el}
        </Characteristic>
      );
    });
    return CharacteristicArr;
  };

  return (
    <Section>
      <Card theme={getTheme()}>
        <Front theme={getTheme()}>
          <NameDiv theme={getTheme()}>
            <NameTitle>{data.name}</NameTitle>
            <ENameTitle>{data.ename}</ENameTitle>
          </NameDiv>
          <CharacterDiv>
            <Model2 data={data.ename} />
          </CharacterDiv>
          <CharacteristicDiv>{handleCharacteristic()}</CharacteristicDiv>
        </Front>
        <Back theme={getTheme()}>
          <CharacterDivBack>
            <CharacterBack
              src={imgSrc}
              width={70}
              height={70}
              alt="CharacterBackImg"
            />
          </CharacterDivBack>
          <DescDivBack theme={getTheme()}>{data.desc}</DescDivBack>
          <BtnDivBack>
            {isFriendShip ? (
              <BtnYesFriendBack
                theme={getTheme()}
                onClick={() => {
                  handleCurrFriendShip();
                }}
              >
                선택하기
              </BtnYesFriendBack>
            ) : (
              <BtnNotFriendBack
                theme={getTheme()}
                onClick={() => {
                  handleDoFriendShip();
                }}
              >
                친해지기
              </BtnNotFriendBack>
            )}
          </BtnDivBack>
        </Back>
      </Card>
    </Section>
  );
}

export default FriendCard;
