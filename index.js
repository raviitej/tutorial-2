const addDays = require("date-fns/addDays");
const getDays = (num) => {
  const result = addDays(new Date(2020, 7, 22), num);
  return `${result.getDate()}-${result.getMonth() + 1}-${result.getFullYear()}`;
};
module.exports = getDays;
