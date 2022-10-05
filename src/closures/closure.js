function greeting(){
    let username = 'Jorge';

    function displayUsername() {
        return `Hello ${username}`;
    }
    return displayUsername();
}

const g = greeting();
console.log(g);
console.log(g());//me lanza error
