/* This exercise was designed so that the user can complete the order only when they buy a glue stick, allowing them to buy the notebook, and the result of a successful purchase will be displayed on the screen. If one of the purchases is not completed, the error will be displayed on the screen too.*/ 

const inventory = {
  glueSticks: 10,
  notebooks: 15,
  pencils: 0
}
let purchaseGlueSticks = false;
let purchaseNotebooks = false;
function orderGlueSticks() {
  return new Promise((resolve, reject) => {
    if (inventory.glueSticks > 0) {
      purchaseGlueSticks = true;
      resolve(purchaseGlueSticks);
    } else {
      const errorMessage = 'The glue Stick is sold out.';
      reject(errorMessage);
    }
  });
}
function orderNotebooks(glueSticksPurchased) {
  return new Promise((resolve, reject) => {
    if (glueSticksPurchased && inventory.notebooks > 0) {
      purchaseNotebooks = true;
      resolve(purchaseNotebooks);
    }else {
      const errorMessage = 'That Notebooks is sold out.';
      reject(errorMessage); 
    }
  });
}
function completeOrder(){
  return orderGlueSticks()
  .then(function (glueSticksPurchased) {
    return orderNotebooks(glueSticksPurchased)
    .then(function (result) {
      if (result) {
        console.log('Great! You purchased glue sticks and notebooks.');
      }
    })
  })
  .catch(function (error) {
    console.log(error);
})
}
completeOrder();