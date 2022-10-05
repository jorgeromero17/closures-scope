//Fue incorporado en es5, nos permite ejecutar de forma estricta reglas particulares
//para tener mejor control de la asignación de las variables y otros elementos clave
//Para que cumpla standares.

//sin el estric mode JS permite esto
//Internamente este crearia var pi = undefined;
pi = 3.14159;
console.log(pi);

'use strict';
pi = 3.14159;
console.log(pi);
//Esto causaria error

//En una funcion, pasa lo mismo.
function myFunction(){
    'use strict';
    return pi = 3.14159;
}

console.log(myFunction());

