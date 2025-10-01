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