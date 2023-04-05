type Face = {
  idx: number;
  url: string;
  height: number;
  top: string;
  left: string;
  alt: string;
};

interface Emoji {
  smile: Face;
  sadness: Face;
  soso: Face;
  surprise: Face;
  neutral: Face;
  happy: Face;
  disgust: Face;
}

const EMOJI: Emoji = {
  smile: {
    idx: 0,
    url: '/assets/img/common/smile.svg',
    height: 450,
    top: '20%',
    left: '30%',
    alt: 'smile',
  },
  sadness: {
    idx: 1,
    url: '/assets/img/common/sadness.svg',
    height: 350,
    top: '60%',
    left: '20%',
    alt: 'sadness',
  },
  soso: {
    idx: 2,
    url: '/assets/img/common/soso.svg',
    height: 275,
    top: '90%',
    left: '40%',
    alt: 'soso',
  },
  surprise: {
    idx: 3,
    url: '/assets/img/common/surprise.svg',
    height: 425,
    top: '30%',
    left: '70%',
    alt: 'surprise',
  },
  neutral: {
    idx: 4,
    url: '/assets/img/common/neutral.svg',
    height: 400,
    top: '40%',
    left: '50%',
    alt: 'neutral',
  },
  happy: {
    idx: 5,
    url: '/assets/img/common/happy.svg',
    height: 325,
    top: '70%',
    left: '80%',
    alt: 'happy',
  },
  disgust: {
    idx: 6,
    url: '/assets/img/common/disgust.svg',
    height: 300,
    top: '80%',
    left: '60%',
    alt: 'disgust',
  },
};

export default EMOJI;
