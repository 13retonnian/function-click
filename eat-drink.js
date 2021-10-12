// Set prices
const beerCost = 6.25;
const burgerCost = 4.75;
const popCost = 3.00;

// Define and output account balance
let accountBalance = 150.75;
const outputBalance = document.querySelector('.balance');
outputBalance.textContent = accountBalance.toFixed(2);

// Drink beer
const subtractBeerFunds = function() {
  accountBalance = accountBalance - beerCost;  
  updateFunds();
}

// Eat burger
const subtractBurgerFunds = function() {
  accountBalance = accountBalance - burgerCost;  
  updateFunds();
}

// Drink pop
const subtractPopFunds = function() {
  accountBalance = accountBalance - popCost;  
  updateFunds();
}

//update available funds
const updateFunds = function() {  
  if(accountBalance <= 0) {
    outputBalance.textContent = "YOU\'RE BROKE!";
    console.log("YOU\'RE BROKE!");
  }
  else {
    outputBalance.textContent = accountBalance;
    console.log(accountBalance);
  }
  
}

// document.querySelector("span").textContent = accountBalance;
const buttonList = document.querySelectorAll("button");
buttonList[0].addEventListener('click', subtractBeerFunds);
buttonList[1].addEventListener('click', subtractBurgerFunds);
buttonList[2].addEventListener('click', subtractPopFunds);
