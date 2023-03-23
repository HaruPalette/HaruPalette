import { useState } from 'react';
import { useDate } from '../../hooks/useDate';

function Select(props: {
  setYear: any;
  year: number;
  setMonth: any;
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
  return (
    <>
      <div>
        <button
          type="button"
          onClick={() => {
            setOpenYear(!openYear);
          }}
        >
          {year}
        </button>
        {openYear &&
          yearArr.map(item => {
            return (
              <button type="button" onClick={setYear(item)}>
                {item}
              </button>
            );
          })}
      </div>
      <div>
        <button
          type="button"
          onClick={() => {
            setOpenMonth(!openMonth);
          }}
        >
          {month}
        </button>
        {openMonth &&
          monthArr.map(item => {
            return (
              <button type="button" onClick={setYear(item)}>
                {item}
              </button>
            );
          })}
      </div>
    </>
  );
}

export default Select;
