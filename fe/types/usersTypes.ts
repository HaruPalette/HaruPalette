export interface UserData {
  image: string;
  friendEname: string;
  friendId: number;
}

export interface ChallengeList {
  challengeId: number;
  contents: string;
  point: number;
}

export interface ChallengeData {
  weekCnt: number;
  monthCnt: number;
  currentPoint: number;
  challengeList: ChallengeList[];
}

export interface PointData {
  pointList: [
    {
      point: number;
      date: string;
      contents: string;
    },
  ];
  currentPoint: number;
}

export interface UsersResponse {
  userData: UserData;
}

export interface RemindResponse {
  diaryId: number;
}

export interface ChallengeResponse {
  challengeData: ChallengeData;
}

export interface PointResponse {
  pointData: PointData;
}
