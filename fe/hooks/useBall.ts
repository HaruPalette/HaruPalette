import useTheme from './useTheme';
import { BallData } from '../types/commonTypes';

export function useBall() {
  const theme = useTheme();
  const ballData: BallData[] = [];
  ballData.push({
    width: '25rem',
    height: '25rem',
    top: '-15rem',
    left: '-15.5rem',
    color: `${theme.primary20}`,
    opacity: 0.2,
    delay: 2,
    start: 0.1,
  });
  ballData.push({
    width: '30rem',
    height: '30rem',
    top: '35rem',
    left: '55rem',
    color: `${theme.primary20}`,
    opacity: 0.4,
    delay: 3,
    start: 0.1,
  });
  ballData.push({
    width: '18rem',
    height: '18rem',
    top: '46rem',
    left: '-2rem',
    color: `${theme.primary40}`,
    opacity: 1,
    delay: 4,
    start: 0.1,
  });
  ballData.push({
    width: '30rem',
    height: '30rem',
    top: '-20rem',
    left: '68rem',
    color: `${theme.primary40}`,
    opacity: 1,
    delay: 2,
    start: 0,
  });
  return ballData;
}

export function useSectionOneBall() {
  const ballData: BallData[] = [];
  ballData.push({
    width: '25rem',
    height: '25rem',
    top: '15rem',
    left: '15rem',
    color: '#E3FDFD',
    opacity: 0.2,
    delay: 2,
    start: 0.1,
  });
  ballData.push({
    width: '30rem',
    height: '30rem',
    top: '35rem',
    left: '55rem',
    color: '#FFD7A6',
    opacity: 0.4,
    delay: 3,
    start: 0.1,
  });
  ballData.push({
    width: '18rem',
    height: '18rem',
    top: '46rem',
    left: '-2rem',
    color: '#FF6F6F',
    opacity: 1,
    delay: 4,
    start: 0.1,
  });
  ballData.push({
    width: '30rem',
    height: '30rem',
    top: '-20rem',
    left: '68rem',
    color: '#F62F5F',
    opacity: 1,
    delay: 2,
    start: 0,
  });
  return ballData;
}

export function useSectionTwoBall() {
  const ballData: BallData[] = [];
  ballData.push({
    width: '28rem',
    height: '28rem',
    top: '10rem',
    left: '40rem',
    color: '#005582',
    opacity: 0.8,
    delay: 2,
    start: 0.1,
  });
  ballData.push({
    width: '30rem',
    height: '30rem',
    top: '40rem',
    left: '10rem',
    color: '#00c2c7',
    opacity: 0.6,
    delay: 3,
    start: 0.1,
  });
  ballData.push({
    width: '24rem',
    height: '24rem',
    top: '50rem',
    left: '70rem',
    color: '#97ebdb',
    opacity: 0.8,
    delay: 4,
    start: 0.1,
  });
  ballData.push({
    width: '30rem',
    height: '30rem',
    top: '-20rem',
    left: '80rem',
    color: '#daf8e3',
    opacity: 1,
    delay: 2,
    start: 0,
  });
  return ballData;
}
