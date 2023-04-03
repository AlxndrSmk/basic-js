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

  encrypt(mes, key, mode) {
      key = key.toUpperCase(); // подгон ключа по высоте
      mes = mes.toUpperCase(); // подгон сообщения по высоте
      let alph = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";		// Строка алфавита

      if (arguments.length < 2 || !arguments.length || Object.values(arguments).includes(undefined)) throw Error('Incorrect arguments!');

      let maxlength = Math.max(mes.length, key.length);
      let res = '';

      key = key.repeat(3).slice(0, mes.length) //привожу шифр к длине строки

      for (let i = 0; i < maxlength; i++) {
          console.log(key, mes)

          let mesIndex = alph.indexOf(mes[((i >= mes.length) ?
              i % mes.length :
              i)]);	// если сообщение короче ключа

          let keyIndexChar = key[((i >= key.length) ?
              i % key.length :
              i)]; // если ключ короче сообщения

          let keyIndex = (typeof mode !== 'undefined') ?
              parseInt(keyIndexChar) :
              alph.indexOf(keyIndexChar);
          // вычитание при дешифровании, либо сложение.
          // console.log('mesIndex - ', mesIndex, 'keyIndexChar - ', keyIndexChar, 'keyIndex - ', keyIndex)

          let char = '';
          if (mesIndex === -1) {
              char = ' ';
              mesIndex++;
          } else {
              char = alph[(((alph.length + (mesIndex + keyIndex)) % alph.length))];
          }

          // char = alph.split('').find((e) => e == mesIndex) || alph.split('').find((e) => e == keyIndex) ?
          //     alph[(((alph.length + (mesIndex + keyIndex)) % alph.length))] :
          //     char;

          // if (mesIndex === -1) {
          //     char = ' ';
          //     console.log(mesIndex)
          // } else {
          //     char = char;
          // }

          res += char; // добавить символ к результату.
      }

      return res.slice(0, mes.length); // вернуть строку результата    
  }
  decrypt() {

  }
}
module.exports = {
  VigenereCipheringMachine
};
