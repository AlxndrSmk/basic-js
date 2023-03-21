const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
 function getSeason(date) {
  let seasons = ['winter', 'spring', 'summer', 'autumn'];
  let m = date.getMonth() + 1;

  if (m > 2 & m < 6) {
      return seasons[1];
  } else if (m > 5 & m < 9) {
      return seasons[2];
  } else if (m > 8 & m < 12) {
      return seasons[3];
  } else {
      return seasons[0];
  }
}

module.exports = {
  getSeason
};
