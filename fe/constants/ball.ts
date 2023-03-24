import useTheme from '../hooks/useTheme';
import { BallData } from '../types/commonTypes';

const theme = useTheme();

export let ballDate: BallData[] = [];
ballDate.push({
  width: '25rem',
  height: '25rem',
  top: '-15rem',
  left: '-15.5rem',
  color: `${theme.primary20}`,
  opacity: 0.2,
  delay: 2,
  start: 0.1,
});
ballDate.push({
  width: '30rem',
  height: '30rem',
  top: '35rem',
  left: '55rem',
  color: `${theme.primary20}`,
  opacity: 0.4,
  delay: 3,
  start: 0.1,
});
ballDate.push({
  width: '18rem',
  height: '18rem',
  top: '46rem',
  left: '-2rem',
  color: `${theme.primary40}`,
  opacity: 1,
  delay: 4,
  start: 0.1,
});
ballDate.push({
  width: '30rem',
  height: '30rem',
  top: '-20rem',
  left: '68rem',
  color: `${theme.primary40}`,
  opacity: 1,
  delay: 2,
  start: 0,
});
