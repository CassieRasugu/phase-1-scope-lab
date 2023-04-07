// Define function overwriteBestCustomer()
function overwriteBestCustomer() {
    bestCustomer = "new value";
}

// Declare constant leastFavoriteCustomer using const
const leastFavoriteCustomer = "Nigel";

// Define function changeLeastFavoriteCustomer()//
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = "Cassie"; 
}
console.log("Initial customerName:", customerName);
upperCaseCustomerName();
console.log("After calling upperCaseCustomerName():", customerName);

console.log("Initial bestCustomer:", bestCustomer);  
setBestCustomer();
console.log("After calling setBestCustomer():", bestCustomer);

console.log("Initial leastFavoriteCustomer:", leastFavoriteCustomer);
changeLeastFavoriteCustomer(); 
console.log("After calling changeLeastFavoriteCustomer():", leastFavoriteCustomer);
