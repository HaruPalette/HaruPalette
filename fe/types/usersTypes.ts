export interface UserData {
  image: string | null;
  ename: string;
  characterId: number;
}

export interface UsersResponse {
  userData: UserData;
}

export interface RemindResponse {
  diaryId: number;
}
