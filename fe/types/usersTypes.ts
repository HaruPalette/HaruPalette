export interface UserData {
  image: string;
  ename: string;
  characterId: number;
}

export interface UsersResponse {
  userData: UserData;
}

export interface RemindResponse {
  diaryId: number;
}
