



function oddOrEven(array) {
    let sum = 0;
    for(let i =0 ; i<array.length; i++ ) {
        sum+= array[i];
    }
    console.log(sum);

    /* if (sum.length % 2 == 0 ) {
        return sum % 2 === 0 ? "Even" : "Odd"
    }  */
 }

 console.log(oddOrEven([2,4,6]));

 function even_or_odd(number) {
    return number % 2 === 0 ? "Even" : "Odd"
}

console.log(even_or_odd(3));


function oddOrEven(array) {
    return array.map(i=>x+=i, x=0).reverse()[0] % 2 === 0 ? "Even" : "Odd"
 }

 console.log(oddOrEven([-3,-3]));




 function XO(str) {
    str = str.toLowerCase();
    c1 =  str.split('x').length;
    c2 = str.split('o').length;
    if (c1 == c2 ) {
        return true;
    } else {
        return false;
    }
}

console.log(XO('XOXOXOXOx'));



function noSpace(x){
    return x.split(' ').join('');
  }




  function century(year) {
    if (year <= 100 ) {
        return 1;
    } else if (year <= 200 ) {
        return 2;
    } else if (year <= 300 ) {
        return 3;
    } else if (year <= 400 ) {
        return 4;
    } else if (year <= 500 ) {
        return 5;
    } else if (year <= 600 ) {
        return 6;
    } else if (year <= 700 ) {
        return 7;
    } else if (year <= 800 ) {
        return 8;
    } else if (year <= 900 ) {
        return 9;
    } else if (year <= 1000 ) {
        return 10;
    } else if (year <= 1100 ) {
        return 11;
    } else if (year <= 1200 ) {
        return 12;
    } else if (year <= 1300 ) {
        return 13;
    }  else if (year <= 1400 ) {
        return 14;
    } else if (year <= 1500 ) {
        return 15;
    } else if (year <= 1600 ) {
        return 16;
    } else if (year <= 1700 ) {
        return 17;
    } else if (year <= 1800 ) {
        return 18;
    } else if (year <= 1900 ) {
        return 19;
    } else if (year <= 2000 ) {
        return 20;
    } else if (year <= 2100 ) {
        return 21;
    } else if (year <= 2200 ) {
        return 22;
    } else if (year <= 2300 ) {
        return 23;
    } else if (year <= 2400 ) {
        return 24;
    } 
}


function removeChar(str){
    return str.slice(1,-1);
  };


  function numberToString(num) {
    return String(num);
  }


  function boolToWord( bool ){
    if (bool == true) {
      return "Yes"
    } else if ( bool == false ) {
      return "No";
    }
  }


  var stringToNumber = function(str){
    return +str;
  }

  function basicOp(operation, value1, value2)
{
  switch(operation){
      case '+':
      return (+value1 + +value2);
      case '-':
      return (value1 - value2);
      case '*':
      return (value1 * value2);
      case '/':
      return (value1 / value2);
  }
}

console.log(basicOp('+','10','20'));


function simpleMultiplication(number) {
    return number % 2 === 0 ? number * 8 : number * 9;
}

function solution(str){
    let asd = str.split('').reverse('').join('');
    return asd;
  }


  function removeExclamationMarks(s) {
    return s.replace(/!/g,'');
  }

  function findNeedle(haystack) {
       
         return `found the needle at position ${haystack.indexOf('needle')}`;
     
}

console.log(findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
);

function repeatStr (n, s) {
    return s.repeat(n);
  }

console.log(repeatStr(10));


  const myStr = "I am a \"double quoted\" string inside \"double quotes\"."; // Change this lineconst myStr = "I am a \"double quoted\" string inside \"double quotes\"."; // Change this line

  // Setup
let lastNameLength = 0;
const lastName = "Lovelace";

// Only change code below this line
lastNameLength = lastName.length;



// Setup
const lastName = "Lovelace";

// Only change code below this line
const lastLetterOfLastName = lastName[lastName.length - 1]; // Change this line



let stringToNumber = function(str){
    return parseInt(str);
  }


function abbrevName(name){
    var nam = name.split(' ');
    return (nam[0][0]+'.' + nam[1][0]).toUpperCase();
}

console.log(abbrevName('Asd Asd'));


function validatePIN (pin) {
    const pinMatch = /^[0-9]/g
    if (pin.length === 4 && pin.length === 6 && pin == pinMatch  ) {
      return true;
    } else { 
    return false;
    }
  }

console.log(pin(1234));


function even_or_odd(number) {
    if ( number % 2 === 0 ) { 
      return "Even";
    } else if ( number % 2 != 0){
      return "Odd";
    }
  }

  function bmi(weight, height) {
    let cfg  = weight/Math.pow(height,2);
  if (cfg <= 18.5 ) {
    return "Underweight";
  } else if ( cfg <= 25.0 ) {
    return "Normal";
  } else if ( cfg <= 30.0 ) {
    return "Overweight";
  } else if (cfg > 30 ) {
    return "Obese";
  }
}


function bmi(weight, height) {
    let b = weight / height**2;
    return b <= 18.5 ? 'Underweight' : b <= 25.0 ? 'Normal' : b <= 30.0 ? 'Overweight' : 'Obese';
  }
  


console.log(bmi(102,190));


function check(a, x) {
    if( a.includes(x) === true ) {
      return true;
    } else {
      return false;
    }
}

console.log(check([1231,312,'312','dfasf'], '312'));



function areYouPlayingBanjo(name) {
    if ( name[0] === 'R' || name[0] === 'r' ) {
      return name +  " plays banjo" 
    } else {
      return name +  " does not play banjo"
    }
    
  }

console.log(areYouPlayingBanjo('Adam'));


function countBy(x, n) {
    let z = [];
        for(i=1; i<=x; i++) {
            z.push(n*i);
        }
    return z;
  }

console.log(countBy(10,5));



function sum (x){
  let arr = x.join(' ')
  let arr = str.split(' ');
  for (let i =0; i<arr.length; i++) {
    sun += Number(arr[i]);
  }
  return sun;
}
console.log(sum([1,'2','3']));



function opposite(number) {
  return -number;
}


function makeUpperCase(str) {
  return str.toUpperCase();
}


function isDivideBy(number, a, b) {
  if ( number % a === 0 && number % b === 0  ) {
    return true;
  } else {
    return false;
  }
}

let awe = 'Assfas';
console.log(awe.slice(0,1));
console.log(awe.slice(-1));

function feast(beast, dish) {
  if (beast.slice(0,1) == dish.slice(0,1) && 
      beast.slice(-1) == dish.slice(-1) ) {
    return true;
  } else {
    return false;
  } 
 }

 console.log(feast('asd','asd'));


 function doubleInteger(i) {
  return i*2;
}


function digitize(n) {
  if (n <= 0 ) {
    return 0
  } else if(n > 0 ) {
    let asd =  n.split(' ').reverse();
  }
 }


 let n = 12335;

 let asd =  String(n).split('').reverse();
console.log(asd);

function openOrSenior(data){
  if ( data[0] > 55 && data[1] > 7 ) {
      return 'Senior';   
  } else if (data[0] < 55 && data[1] < 7 ) {
     return 'Open';
  }
}



function litres(time) {
  var voda = Math.floor(time * 0.5);
  return voda;
}


function booleanToString(b){
  if ( b === true) { 
  return 'true';
  } else if ( b === false) { 
  return 'false';
  }
}


function addBinary(a,b) {
  let c = +a + +b;
  return(c).toString(2);
}


function validate(password) {
  return /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])[A-Za-z0-9]{6,}$/.test(password);
  }

  function digital_root(n) {
    return (n - 1) % 9 + 1;
    }