import { ColorTypes } from '@emotion/react';
import styled from '@emotion/styled';
import { Dispatch, SetStateAction, useState } from 'react';
import { useDate } from '../../hooks/useDate';
import useTheme from '../../hooks/useTheme';
import { common } from '../../styles/theme';

function Select(props: {
  setYear: Dispatch<SetStateAction<number>>;
  year: number;
  setMonth: Dispatch<SetStateAction<number>>;
  month: number;
}) {
  const { setYear, year, setMonth, month } = props;
  const [openYear, setOpenYear] = useState(false);
  const [openMonth, setOpenMonth] = useState(false);
  let yearArr: number[] = [];
  let monthArr: number[] = [];
  for (let i = 2020; i <= useDate().year; i++) {
    yearArr.push(i);
  }
  for (let i = 1; i <= 12; i++) {
    monthArr.push(i);
  }
  const theme = useTheme();
  return (
    <Container>
      <div>
        <SelectButton
          theme={theme}
          click={openYear}
          type="button"
          onClick={() => {
            setOpenYear(!openYear);
          }}
        >
          {year}년
        </SelectButton>
        {openYear &&
          yearArr.map(item => {
            return (
              <OptionButton
                theme={theme}
                click={year === item ? true : false}
                key={item}
                type="button"
                onClick={() => {
                  setYear(item);
                  setOpenYear(false);
                }}
              >
                {item}년
              </OptionButton>
            );
          })}
      </div>
      <div>
        <SelectButton
          theme={theme}
          click={openMonth}
          type="button"
          onClick={() => {
            setOpenMonth(!openMonth);
          }}
        >
          {month}월
        </SelectButton>
        {openMonth &&
          monthArr.map(item => {
            return (
              <OptionButton
                theme={theme}
                click={month === item ? true : false}
                key={item}
                type="button"
                onClick={() => {
                  setMonth(item);
                  setOpenMonth(false);
                }}
              >
                {item}월
              </OptionButton>
            );
          })}
      </div>
    </Container>
  );
}

export default Select;

const Container = styled.div`
  margin: 1rem 10rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 13rem;
  height: 2rem;

  @media all and (max-width: 960px) {
    margin: auto;
  }
  @media all and (max-width: 480px) {
    margin-left: 11rem;
  }
`;

const SelectButton = styled.button<{ theme: ColorTypes; click: boolean }>`
  padding: 0.5rem 1.2rem;
  border: 1px solid
    ${props => (props.click ? props.theme.main : common.colors.disable)};
  border-radius: 1rem;
  background: ${props => props.theme.background};
  font-size: ${common.fontSize.fs20};
  color: ${props => (props.click ? props.theme.main : common.colors.secondary)};
`;

const OptionButton = styled.button<{ theme: ColorTypes; click: boolean }>`
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 9;
  background: ${props => props.theme.background};
  color: ${props => (props.click ? props.theme.main : common.colors.secondary)};
  padding: 0.5rem 1.2rem;
`;
