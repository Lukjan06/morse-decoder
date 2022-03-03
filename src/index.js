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
};

function decode(expr) {
    let arrFromExpr = [];
    let wordLength = 10;
    let curStr= ""; // объявляем переменную с пустой строкой
    let arrDecoded=[]
    
    
    for(let i = 0; i < expr.length; i++) {
curStr +=expr[i]; //перебираем строку expr посимвольно и добавляем в curStr

if(curStr.length === wordLength) { //когда длина становится необходимой в 10 символовб пушим в arr
    arrFromExpr.push(curStr);
    curStr = ""; //обнуляем строки и все заново
  
}
}

console.log(arrFromExpr)


let element = arrFromExpr[0];
console.log(typeof(element))


//let smT = '**********';

let arrDec = []
arrFromExpr.map(function(el) {
    //if(el === smT) {
       // arrDec.push('')
 //   }
   arrDec.push(el.replace(/^0+/, '').replace(/10/gi, '.').replace(/11/gi,'-'))
   
})
console.log(arrDec)

let keys = Object.keys(MORSE_TABLE);
console.log(keys);

let arrRes = [];
 arrDec.map(function(el) {
     if(Object.keys(MORSE_TABLE).includes(el)) {
         arrRes.push(MORSE_TABLE[el]);
     } else{ arrRes.push(' ')}
})
console.log(arrRes)
let result = arrRes.join('');
console.log(result);
return result;

}


module.exports = {
    decode
}