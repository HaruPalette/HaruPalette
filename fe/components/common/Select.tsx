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
          year={true}
          type="button"
          onClick={() => {
            setOpenYear(!openYear);
          }}
        >
          {year}년
        </SelectButton>
        <OptionList theme={theme} click={openYear}>
          {openYear &&
            yearArr.map(item => {
              return (
                <OptionButton
                  theme={theme}
                  click={year === item ? true : false}
                  year={true}
                  key={item}
                  type="button"
                  onClick={() => {
                    setYear(item);
                    setOpenYear(false);
                  }}
                >
                  {item}
                </OptionButton>
              );
            })}
        </OptionList>
      </div>
      <div>
        <SelectButton
          theme={theme}
          click={openMonth}
          year={false}
          type="button"
          onClick={() => {
            setOpenMonth(!openMonth);
          }}
        >
          {month}월
        </SelectButton>
        <OptionList theme={theme} click={openMonth}>
          {openMonth &&
            monthArr.map(item => {
              return (
                <OptionButton
                  theme={theme}
                  click={month === item ? true : false}
                  year={false}
                  key={item}
                  type="button"
                  onClick={() => {
                    setMonth(item);
                    setOpenMonth(false);
                  }}
                >
                  {item}
                </OptionButton>
              );
            })}
        </OptionList>
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
  width: 15rem;
  height: 2rem;
  z-index: 9;

  @media all and (max-width: 960px) {
    margin: auto;
  }
  @media all and (max-width: 480px) {
    margin-left: 11rem;
  }
`;

const SelectButton = styled.button<{
  theme: ColorTypes;
  click: boolean;
  year: boolean;
}>`
  width: ${props => (props.year ? '5rem' : '3rem')};
  padding: 0.5rem 1.2rem;
  text-align: center;
  border: 1px solid
    ${props => (props.click ? props.theme.main : common.colors.disable)};
  border-radius: 1rem;
  background: ${props => props.theme.background};
  font-size: ${common.fontSize.fs20};
  color: ${props => (props.click ? props.theme.main : common.colors.secondary)};
`;

const OptionButton = styled.button<{
  theme: ColorTypes;
  click: boolean;
  year: boolean;
}>`
  width: ${props => (props.year ? '5rem' : '3rem')};
  padding: 0.5rem 1.2rem;
  font-size: ${common.fontSize.fs20};
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 9;
  background: ${props => props.theme.background};
  color: ${props => (props.click ? props.theme.main : common.colors.secondary)};
`;

const OptionList = styled.div<{
  theme: ColorTypes;
  click: boolean;
}>`
  margin-top: 0.5rem;
  max-height: 10rem;
  overflow-y: overlay;
  border: ${props => (props.click ? '1px' : '0px')} solid
    ${props => (props.click ? props.theme.main : common.colors.disable)};
  border-radius: 1rem;
  background: ${props => props.theme.background};

  ::-webkit-scrollbar {
    width: 1.5rem; /* 스크롤바의 너비 */
  }

  ::-webkit-scrollbar-thumb {
    height: 10%; /* 스크롤바의 길이 */
    background: ${props => props.theme.primary20}; /* 스크롤바의 색상 */
    background-clip: padding-box;
    border: 0.5rem solid transparent;
    border-radius: 2rem;
  }
`;
