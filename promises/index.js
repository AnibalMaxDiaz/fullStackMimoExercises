const deserts = {
  chessCake : {
    amount: 10,
    price: 10,
  },
  iceCream : {
    amount: 50,
    price: 5,      
  }
};

const budget = 20;
function isAvailable() {
  return new Promise((resolve, reject) => {
    if (deserts.chessCake.amount > 0 ) {
      resolve(true);
    } else {
      reject(false);
    }
  });
}
function checkPrice(){
  return new Promise((resolve, reject)=> {
    if (deserts.chessCake.price <= budget){
      resolve("Purchasing desert..");
    } else {
      reject("Budget is not enough, canceling the order...");
    }
  })
}
function handleIsAvailable(isAvailable) {
  return checkPrice(isAvailable);
}
function handlePrice(successValue) {
  console.log(successValue)
}
const checkAvailability = isAvailable();
checkAvailability
  .then(handleIsAvailable)
  .then(handlePrice)
  .catch((rejectionValue) => {
    console.log(rejectionValue);
  });

// Write your code here


