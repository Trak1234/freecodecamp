



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
