const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {

  encrypt(mes, key) {
    if (!mes || !key) throw Error("Incorrect arguments!");
    key = key.toUpperCase().repeat(mes.length).slice(0, mes.length) //привожу шифр к длине строки
    mes = mes.toUpperCase();

    let alph = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let res = '';

    for (let i = 0, j = 0; i < mes.length; i++) {
      let symb = mes[i];

      if (symb.charCodeAt() > 64 && symb.charCodeAt() < 91) {
        symb = alph[(alph.length + alph.indexOf(mes[i]) + alph.indexOf(key[j])) % alph.length];
        j++;
      } else {
        symb = mes[i];
      }

      res += symb;
    }

    return res; // вернуть строку результата    
  }
  decrypt(mes, key) {
    if (!mes || !key) throw Error("Incorrect arguments!");
  }
}

module.exports = {
  VigenereCipheringMachine
};
