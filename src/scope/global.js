//variables

var a; //declarando
var b = 'b'; //declaramos y asignamos o inicializamos
b = 'bb'; //reasignacion
var a = 'aa'; //redeclaracion

//Global Scope
//Cualquier variable que se encuentre en el documento pasan a ser variables globales y se instacian en el objeto windows.
var fruit = 'Apple';

function bestFruit(){
    console.log(fruit);
}

bestFruit();

//Cuando no tenemos cuidado al declarar una variable, cuando no se declara una variable y nada mas se asigna, por defecto pasa a ser global.
function contries(){
    country = 'Colombia'; //asignamos pero no declaramos
    console.log(country);
}
contries();
console.log(country);