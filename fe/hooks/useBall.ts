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
    color: '#CBF1F5',
    opacity: 0.4,
    delay: 3,
    start: 0.1,
  });
  ballData.push({
    width: '18rem',
    height: '18rem',
    top: '46rem',
    left: '-2rem',
    color: '#A6E3E9',
    opacity: 1,
    delay: 4,
    start: 0.1,
  });
  ballData.push({
    width: '30rem',
    height: '30rem',
    top: '-20rem',
    left: '68rem',
    color: '#71C9CE',
    opacity: 1,
    delay: 2,
    start: 0,
  });
  return ballData;
}

export function useSectionTwoBall() {
  const ballData: BallData[] = [];
  ballData.push({
    width: '25rem',
    height: '25rem',
    top: '20rem',
    left: '50rem',
    color: '#9A208C',
    opacity: 0.2,
    delay: 2,
    start: 0.1,
  });
  ballData.push({
    width: '30rem',
    height: '30rem',
    top: '25rem',
    left: '10rem',
    color: '#E11299',
    opacity: 0.4,
    delay: 3,
    start: 0.1,
  });
  ballData.push({
    width: '18rem',
    height: '18rem',
    top: '10rem',
    left: '11rem',
    color: '#F5C6EC',
    opacity: 1,
    delay: 4,
    start: 0.1,
  });
  ballData.push({
    width: '30rem',
    height: '30rem',
    top: '-20rem',
    left: '80rem',
    color: '#FFEAEA',
    opacity: 1,
    delay: 2,
    start: 0,
  });
  return ballData;
}
