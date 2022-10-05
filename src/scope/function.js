//Cada funcion tiene su propio alcance
//Las variables declaradas dentro de esta funcion son accesibles solamente dentro de esta funcion
function greeting(){
    let userName = 'Ana';
    console.log(userName);

    if(userName==='Ana'){
        console.log(`Hello ${userName}!`);
    }
}

greeting();