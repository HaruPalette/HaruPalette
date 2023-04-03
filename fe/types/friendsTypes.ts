export interface FriendsData {
  friendList: {
    friendId: number;
    friendKname: string;
    friendEname: string;
    contents: string;
    tag: string;
    price: number;
    isBuy: boolean;
  }[];
  currentPoint: number;
}

export interface FriendsSelectData {
  currentPoint: number;
}

export interface FriendsAddData {
  currentPoint: number;
}

export interface FriendsResponse {
  friendsData: FriendsData;
}

export interface FriendsSelectResponse {
  friendsSelectData: FriendsSelectData;
}

export interface FriendsAddResponse {
  friendsAddData: FriendsAddData;
}
