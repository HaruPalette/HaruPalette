export interface FriendList {
  friendId: number;
  kname: string;
  ename: string;
  contents: string;
  tag: string;
  price: number;
  isBuy: boolean;
}

export interface FriendsData {
  friendList: FriendList[];
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
