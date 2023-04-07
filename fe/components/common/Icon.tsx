import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';
import { useAppSelector } from '../../hooks/reduxHook';
import { selectTheme } from '../../store/modules/theme';

const IconList = styled.ul`
  list-style: none;
  width: calc(50% - 20vw);
  min-width: 120px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const IconItem = styled.li`
  cursor: pointer;
`;

function Icon() {
  const isDark = useAppSelector(selectTheme);
  const iconItem = {
    facebook: {
      icon: `/assets/img/common/${isDark ? 'dark' : 'light'}/${
        isDark ? 'dark' : 'light'
      }_facebook.svg`,
      url: 'https://www.youtube.com/watch?v=2YAJpYqgL7Y',
    },
    linkedin: {
      icon: `/assets/img/common/${isDark ? 'dark' : 'light'}/${
        isDark ? 'dark' : 'light'
      }_Linkedin.svg`,
      url: 'https://few-sociology-01b.notion.site/README-cff0bc300fbd4ecb8ee7d1b31e831710',
    },
    twitter: {
      icon: `/assets/img/common/${isDark ? 'dark' : 'light'}/${
        isDark ? 'dark' : 'light'
      }_Twitter.svg`,
      url: 'https://forms.gle/kNVwKtnizZCkbEob7',
    },
  };
  return (
    <IconList>
      {Object.entries(iconItem).map(item => (
        <IconItem key={item[0]}>
          <Link href={item[1].url} target="_blank">
            <Image src={item[1].icon} width={40} height={40} alt={item[0]} />
          </Link>
        </IconItem>
      ))}
    </IconList>
  );
}

export default Icon;
