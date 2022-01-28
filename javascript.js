



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

 console.log(oddOrEven([-2,-2]));


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
      return value1 + value2;
      case '-':
      return value1 - value2;
      case '*':
      return value1 * value2;
      case '/':
      return value1 / value2;
  }
}


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


  const myStr = "I am a \"double quoted\" string inside \"double quotes\"."; // Change this lineconst myStr = "I am a \"double quoted\" string inside \"double quotes\"."; // Change this line

  // Setup
let lastNameLength = 0;
const lastName = "Lovelace";

// Only change code below this line
lastNameLength = lastName.length;
