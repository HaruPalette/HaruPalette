import styled from '@emotion/styled';
import Image from 'next/image';
import { useAppSelector } from '../../hooks/reduxHook';
import { selectTheme } from '../../store/modules/theme';

function Icon() {
  const isDark = useAppSelector(selectTheme);
  const iconItem = {
    facebook: {
      icon: `assets/img/common/${isDark ? 'dark' : 'light'}/${
        isDark ? 'dark' : 'light'
      }_facebook.svg`,
      url: 'https://lab.ssafy.com/s08-ai-speech-sub2/S08P22B303/-/tree/main',
    },
    linkedin: {
      icon: `assets/img/common/${isDark ? 'dark' : 'light'}/${
        isDark ? 'dark' : 'light'
      }_Linkedin.svg`,
      url: 'https://ssafy.atlassian.net/jira/software/c/projects/S08P22B303/boards/1698',
    },
    twitter: {
      icon: `assets/img/common/${isDark ? 'dark' : 'light'}/${
        isDark ? 'dark' : 'light'
      }_Twitter.svg`,
      url: 'https://chat.openai.com/chat',
    },
  };
  return (
    <IconList>
      {Object.entries(iconItem).map((item, idx) => (
        <IconItem key={idx}>
          <a href={item[1].url} target="_blank">
            <Image src={item[1].icon} width={40} height={40} alt={item[0]} />
          </a>
        </IconItem>
      ))}
    </IconList>
  );
}

export default Icon;

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
