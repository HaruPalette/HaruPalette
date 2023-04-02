export interface UserData {
  image: string;
  friendEname: string;
  friendId: number;
}

export interface UsersResponse {
  userData: UserData;
}

export interface RemindResponse {
  diaryId: number;
}
