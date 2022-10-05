//Hoisting con var
//Primero el llamado y luego la asignacion de la variable
console.log(nameofDog);
var nameofDog = 'Elmo';

//Realmente lo que pasa aqui es:
var nameofDog;
console.log(nameofDog);
var nameofDog = 'Elmo';


//Hoisting con funciones
saymyname("Heisenberg"); //se imprime

function saymyname(name){
    console.log(name);
}

saymyname(name); //En este caso sería undefined

function saymyname(name){
    console.log(name);
} 
var name = 'Heisenberg';