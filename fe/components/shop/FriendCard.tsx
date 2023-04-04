import styled from '@emotion/styled';
import Image from 'next/image';
import { ColorTypes } from '@emotion/react';
import { useMutation } from 'react-query';
import { AxiosError, AxiosResponse } from 'axios';
import {
  common,
  gomiDark,
  gomiLight,
  haruDark,
  haruLight,
  toriDark,
  toriLight,
} from '../../styles/theme';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHook';
import { selectTheme } from '../../store/modules/theme';
import Model from '../common/ModelCharacter';
import { setCharName } from '../../store/modules/profile';
import { FRIEND } from '../../constants/api';
import { usePatchFriends } from '../../apis/friends';
import { ErrorResponse } from '../../types/commonTypes';
import { FriendList } from '../../types/friendsTypes';

const Section = styled.section`
  position: relative;
  width: 300px;
  height: 300px;
  perspective: 600px;
`;

const Card = styled.div<{ theme: ColorTypes }>`
  position: relative;
  width: 280px;
  height: 350px;
  transform: translate(-50%, -50%);
  transition: all 1s;
  left: 50%;
  top: 50%;
  transform-style: preserve-3d;
  &:hover {
    transform: translate(-50%, -50%) rotateY(180deg);
  }
  /* border: 3px solid ${props => props.theme.sub}; */
  z-index: 200;
  white-space: pre-wrap;
  /* -webkit-box-reflect: below 35px
    linear-gradient(transparent 45%, rgba(255, 255, 255, 0.4)); */
`;

const Front = styled.div<{ theme: ColorTypes }>`
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
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
  border-radius: 8px;
  left: 0;
  top: 0;
  background: ${props => props.theme.diaryBackground};
  backface-visibility: hidden;
  transform: rotateY(180deg);
  flex-direction: column;
`;
const NameDiv = styled.div<{ theme: ColorTypes }>`
  width: 240px;
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
  font-size: ${common.fontSize.fs12};
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
  line-height: 24px;
  color: ${props => props.theme.color};
`;
const BtnDivBack = styled.div<{ theme: ColorTypes }>`
  width: 140px;
  height: 40px;
  text-align: center;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: ${common.fontSize.fs12};
  background: ${props => props.theme.background};
`;

const BtnImgDivBack = styled(Image)`
  width: 25px;
  height: 25px;
  margin-left: 15px;
`;

const BtnNotFriendBack = styled.button<{ theme: ColorTypes }>`
  width: 80px;
  height: 30px;
  text-align: center;
  font-size: 18px;
  color: ${props => props.theme.main};
  cursor: pointer;
  font-weight: bold;
  line-height: 32px;
  margin-right: 10px;
`;
const BtnYesFriendBack = styled.button<{ theme: ColorTypes }>`
  width: 80px;
  height: 30px;
  text-align: center;
  font-size: 18px;
  color: ${props => props.theme.main};
  cursor: pointer;
  font-weight: bold;
  line-height: 32px;
  margin-right: 10px;
`;

function FriendCard(props: { friend: FriendList }) {
  const { friend } = props;
  const dispatch = useAppDispatch();
  // const theme1 = useTheme();
  const isDark = useAppSelector(selectTheme) ? 'Dark' : 'Light';
  // const isFriendShip = useAppSelector(selectShop).friendShipList[friend.];
  const customTheme = friend.ename + isDark;

  const imgSrc = `/assets/img/${friend.ename}/2d.svg`;
  const backBtnImg = `/assets/img/common/coin2.svg`;
  const getTheme = () => {
    if (customTheme === 'haruDark') return haruDark;
    if (customTheme === 'haruLight') return haruLight;
    if (customTheme === 'toriDark') return toriDark;
    if (customTheme === 'toriLight') return toriLight;
    if (customTheme === 'gomiDark') return gomiDark;
    return gomiLight;
  };

  // const getCharPoint = useQuery<
  //   AxiosResponse<FriendsResponse>,
  //   AxiosError<ErrorResponse>,
  //   FriendsData
  // >([FRIEND], () => useGetFriends(), {
  //   keepPreviousData: true,
  //   staleTime: STALE_TIME,
  //   cacheTime: CACHE_TIME,
  // });

  const friendId = 2;
  // 캐릭터 선택 axios(이미 구매한 것, def = 1)
  const mutationCharChoice = useMutation<
    AxiosResponse<any>,
    AxiosError<ErrorResponse>
  >([FRIEND, friendId], usePatchFriends(friendId), {
    onSuccess: () => {
      // const a = useGetFriends();
      console.log('선택 axios 성공');
    },
  });
  // 캐릭터 구매 axios(구매를 안했을 시)
  const mutationCharBuying = useMutation<
    AxiosResponse<any>,
    AxiosError<ErrorResponse>
  >([FRIEND, friendId], usePatchFriends(friendId), {
    onSuccess: () => {
      mutationCharChoice.mutate();
    },
  });

  /**
   * 친해지기: 캐릭터 구매를 진행하지 않은 캐릭터 선택 시
   */
  const handleDoFriendShip = () => {
    // 포인트 선택을 진행함 ( 돈이 없을 때는 바로 리턴 )
    // if()

    // return alert("돈이 부족합니다.")
    mutationCharBuying.mutate();

    // alert 띄우고 확인 시
    const isConfirm = window.confirm(
      `${friend.kname}와 친구를 맺으시겠어요?\n${friend.price}가 포인트에서 차감됩니다.`,
    );
    if (isConfirm) {
      // store에 포인트 저장해 놓고, 가져와야 함
      // 포인트 차감해야 함
      // dispatch(setFriendShip(friend.index));
      dispatch(setCharName(friend.ename));
      alert(`${friend.kname}와 친구가 되었어요:)`);
    }
  };

  /**
   * 선택하기: 구매한 캐릭터 선택 시
   */
  const handleCurrFriendShip = () => {
    const isConfirm = window.confirm(`${friend.kname}을 선택하시겠어요?`);
    if (isConfirm) {
      mutationCharChoice.mutate();
      dispatch(setCharName(friend.ename));
    }
  };

  const handleCharacteristic = () => {
    const CharacteristicArr = friend.tag.split(' ').map((el: string) => {
      return (
        <Characteristic theme={getTheme()} key={el}>
          {el}
        </Characteristic>
      );
    });
    return CharacteristicArr;
  };

  // console.log(data);

  // 캐릭터 구매 axios(구매하지 않은 것, def: 1 제외)
  // const { data } = useQuery<
  // AxiosResponse<FriendsSelectData>,
  //   AxiosError<ErrorResponse>
  // >([FRIEND], () => usePostFriends(friendId), {
  //   keepPreviousData: true,
  //   staleTime: STALE_TIME,
  //   cacheTime: CACHE_TIME,
  // });

  return (
    <Section>
      <Card theme={getTheme()}>
        <Front theme={getTheme()}>
          <NameDiv theme={getTheme()}>
            <NameTitle>{friend.kname}</NameTitle>
            <ENameTitle>{friend.ename}</ENameTitle>
          </NameDiv>
          <CharacterDiv>
            <Model data={friend.ename} />
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
          <DescDivBack theme={getTheme()}>{friend.contents}</DescDivBack>
          {/* <BtnDivBack theme={getTheme()}> */}
          {friend.isBuy ? (
            <BtnDivBack theme={getTheme()}>
              <BtnImgDivBack
                src={backBtnImg}
                width={16}
                height={16}
                alt="PrevIcon"
              />
              <BtnYesFriendBack
                theme={getTheme()}
                onClick={() => {
                  handleCurrFriendShip();
                }}
              >
                선택하기
              </BtnYesFriendBack>
            </BtnDivBack>
          ) : (
            <BtnDivBack theme={getTheme()}>
              <BtnImgDivBack
                src={backBtnImg}
                width={16}
                height={16}
                alt="PrevIcon"
              />
              <BtnNotFriendBack
                theme={getTheme()}
                onClick={() => {
                  handleDoFriendShip();
                }}
              >
                {friend.price} P
              </BtnNotFriendBack>
            </BtnDivBack>
          )}
          {/* </BtnDivBack> */}
        </Back>
      </Card>
    </Section>
  );
}

export default FriendCard;
