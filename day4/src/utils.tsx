export const makeMonth = (standardDate: Date) => {
  let tmp1 = Array(7).fill(0);
  const tmp2 = [];
  const newDate = new Date(standardDate);
  newDate.setDate(1);
  while (standardDate.getMonth() === newDate.getMonth()) {
    const idx = newDate.getDay();
    const date = newDate.getDate();
    tmp1[idx] = date;
    if (idx === 6) {
      tmp2.push(tmp1);
      tmp1 = Array(7).fill(0);
    }
    newDate.setDate(newDate.getDate() + 1);
  }

  if (tmp1.join('').match(/[1-9]/g)) {
    tmp2.push(tmp1);
  }

  return tmp2;
};
