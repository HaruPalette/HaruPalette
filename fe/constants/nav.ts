import { NavList, ShopNavList } from '../types/commonTypes';

export const NAV_LIST: NavList = [
  {
    title: '일기 작성',
    link: '/create',
  },
  {
    title: '달력 보기',
    link: '/calendar',
  },
  {
    title: '상점 가기',
    link: '/shop',
  },
];
export const SHOP_NAV_LIST: ShopNavList = [
  {
    title: '챌린지',
    etitle: 'challenge',
    index: 0,
  },
  {
    title: '포인트',
    etitle: 'point',
    index: 1,
  },
  {
    title: '캐릭터',
    etitle: 'character',
    index: 2,
  },
];

export const SHOP_FILTER_CATORIGY_LIST: ShopNavList = [
  {
    title: '전체',
    etitle: 'all',
    index: 0,
  },
  {
    title: '획득',
    etitle: 'earn',
    index: 1,
  },
  {
    title: '사용',
    etitle: 'use',
    index: 2,
  },
];
