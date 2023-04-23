function dateCorrect(date) {
  const arrayOfDate = date.split("");
  arrayOfDate.splice(10, Infinity);
  const year = arrayOfDate.splice(0, 4);
  const month = arrayOfDate.splice(1, 2);
  const day = arrayOfDate.splice(2, 2);

  return day.concat("-").concat(month).concat("-").concat(year).join(``);
}

export default dateCorrect;
