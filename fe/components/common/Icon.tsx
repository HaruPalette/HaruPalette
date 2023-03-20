import styled from '@emotion/styled'
import Image from 'next/image'

function Icon() {
  const iconItem = {
    facebook: {
      light:'assets/img/common/light/light_facebook.svg',
      dark:'assets/img/common/dark/dark_facebook.svg',
      url:'https://lab.ssafy.com/s08-ai-speech-sub2/S08P22B303/-/tree/main',
    },
    linkedin: {
      light:'assets/img/common/light/light_Linkedin.svg',
      dark:'assets/img/common/dark/dark_Linkedin.svg',
      url:'https://ssafy.atlassian.net/jira/software/c/projects/S08P22B303/boards/1698',
    },
    twitter: {
      light:'assets/img/common/light/light_Twitter.svg',
      dark:'assets/img/common/dark/dark_Twitter.svg',
      url:'https://chat.openai.com/chat',
    },
  }
  return (
    <IconList>
      {Object.entries(iconItem).map((item, idx) => (
        <IconItem key={idx}>
          <a href={item[1].url} target="_blank">
          <Image src={item[1].dark} width={40} height={40} alt={item[0]}/>
          </a>
        </IconItem>
        ))}
    </IconList>
  )
}

export default Icon

const IconList = styled.div`
  list-style: none;
  width: 20rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const IconItem = styled.li`
  cursor: pointer;
`