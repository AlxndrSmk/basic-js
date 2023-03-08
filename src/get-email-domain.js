const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let res = '';
  for (let i = email.length - 1; i > 0; i--) {
      res += email[i];
      if (email[i] == '@') break;
  }

  return res.split('').reverse().join('').slice(1, res.length);
}

module.exports = {
  getEmailDomain
};
