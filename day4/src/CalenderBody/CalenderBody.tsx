import React, { useRef, useEffect } from 'react';

interface PropsType {
  standarDate: Date;
}

const CalenderBody: React.FC<PropsType> = ({ standarDate }) => {
  const dates = useRef<number[][]>([]);

  useEffect(() => {
    const arr1 = [];
    let arr = Array(7).fill(0);
    const newDate = new Date(standarDate);
    newDate.setDate(1);
    while (standarDate.getMonth() === newDate.getMonth()) {
      const idx = newDate.getDay();
      const date = newDate.getDate();
      arr[idx] = date;
      if (idx === 6) {
        arr1.push(arr);
        arr = Array(7).fill(0);
      }
      newDate.setDate(newDate.getDate() + 1);
    }
    if (arr.join('').match(/[1-9]/g)) {
      console.log(arr.join(''));
      arr1.push(arr);
    }

    dates.current = [...arr1];
    console.log(dates.current);
  }, [standarDate]);

  return <div>캘린더 바디</div>;
};

export default CalenderBody;
