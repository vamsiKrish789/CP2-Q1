const addDays = require("date-fns/addDays");

const getDateAfterXDays = (days) => {
  const newdate = addDays(new Date(2020, 7, 22), days);
  console.log(`${newdate.getDate()}-${newdate.getMonth() + 1}-${newdate.getFullYear()}`);
};

module.exports = getDateAfterXDays(2);
