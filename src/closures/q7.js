function multiply(num1, num2) {
    if(typeof num2 == 'undefined'){
        return function(num) {
            console.log(num1*num)
        }
    }
    return console.log(num1*num2)
}

multiply(4, 5); // => 20
multiply(3, 3); // => 9
const double = multiply(2);
double(5);  // => 10
double(11); // => 22