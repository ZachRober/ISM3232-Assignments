// Task 1: Variables and Data Types
let employeeName = "John Baxter";
const employeeID = 4655;
var isActive = true;
console.log(employeeName, typeof(employeeName));
console.log(employeeID, typeof(employeeID));
console.log(isActive, typeof(isActive));

//Task 2: Compound Data Types
let products = ["Milk", "Fruit Loops", "Ground Beef"];
const productDetails = {
    name1:products, 
    price:10.99, 
    stock:true, 
    
}

console.log(products, productDetails);

//Task 3 Assignment Operators
let accountBalance = 2400;
accountBalance += 3200;
console.log(accountBalance);
accountBalance *= 1.07;
console.log(accountBalance);
accountBalance -= 3000;
console.log(accountBalance);
accountBalance /= 4;
console.log(accountBalance);
accountBalance %= 100;
console.log(accountBalance);

//Comparison Operators
let employeeScore1 = 87;
let employeeScore2 = 94;
console.log(employeeScore1 > employeeScore2);
console.log(employeeScore1 < employeeScore2);
console.log(employeeScore1 >= employeeScore2);
console.log(employeeScore1 <= employeeScore2);
console.log(employeeScore1 !== employeeScore2);
console.log(employeeScore1 === employeeScore2);

//Logical Operators
let hasKeyCard = true;
let hasPermission = false;
let allAccess = hasKeyCard && hasPermission;
let visitorAccess = hasKeyCard || hasPermission;
let noAccess = !visitorAccess && !allAccess;
console.log("has all access", allAccess,"has visitor access", visitorAccess,"has no access", noAccess); 



