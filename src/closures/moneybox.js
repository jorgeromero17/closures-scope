//Realizamos el ejercicio de la alcancia con la sintxis normal
/*function moneyBox(coins) {
    let saveCoins = 0;
    saveCoins +=coins;
    console.log(`MoneyBox: $${saveCoins}`);
}*/
//No nos permite recordar que tiene la variable
//moneyBox(5);
//moneyBox(5);

//CON CLOSURE
function moneyBox(){
  let saveCoins = 0;
  
  function countCoins(coins) {
    saveCoins += coins;
    console.log(`MoneyBox: $${saveCoins}`);
  }

  return countCoins;
}

const myMoneyBox = moneyBox();
myMoneyBox(5);
myMoneyBox(5);
myMoneyBox(15);

const moneyBoxAna = moneyBox();
console.log(`\nMoneyBox de Ana`);
moneyBoxAna(10);
moneyBoxAna(20);
