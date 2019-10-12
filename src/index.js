const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    '**********': ' ',
};

function decode(expr) {
    let strOneChar = expr.match(/.{10}/g);
    let arrDotAndDash = [];
    let arrWords = [];

    for (let i = 0; i < strOneChar.length; i++) {
        let q = strOneChar[i];
        arrDotAndDash.push(q.replace(/0{2}/g, '').replace(/10/g, '.').replace(/11/g, '-'));
    }

    for (let i = 0; i < arrDotAndDash.length; i++) {
        let q = arrDotAndDash[i];

        for (let key in MORSE_TABLE) { // получить значение по ключу
            if (key == q) { arrWords.push(MORSE_TABLE[key])}
        }
    }
    
    return arrWords.join``;
}

module.exports = {
    decode
}