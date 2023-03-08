const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let redo = (line, separator, count) => {
    return line.concat(separator).repeat(count).slice(0, - separator.length);
  }
  let line = String(str);

  let add = '';
  if (!options) return line;
  if (typeof options.addition !== 'undefined') {
    add = redo(String(options.addition), options.additionSeparator || '|', options.additionRepeatTimes || 1)
  }
  return redo(line.concat(add), options.separator || '+', options.repeatTimes || 1);
}

module.exports = {
  repeater
};
