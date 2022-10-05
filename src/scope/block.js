//Block scope fue introducido en es6
//Las variables definidas dentro de un bloque solo pueden ser utilizadas dentro de un bloque
//let y cons para este concepto
//Es mas recomendable dejar de utilizar var
function fruits(){
    if(true) { //este es un bloque
        var fruit1 = 'apple'; //function scope
        
        let fruit2 = 'kiwi'; //block scope
        const fruit3 = 'banana'; //block scope

        console.log(fruit2);
        console.log(fruit3);
    }
    console.log(fruit1);
}

fruits();