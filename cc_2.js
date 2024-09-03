//ternary operator to calculate tip 
let bill = 250;
let tip = (50 <= bill <= 300) ? (0.15*bill) : (0.2*bill);

let total = (tip+bill);
console.log("The bill was $"+ bill, "the tip was $"+ tip, "and the total value was $"+ total);//display all 3 calcs

function calculateTip(x) {
if (x>=50 && x<=300) {
   return x*0.15 
}
else {return x*0.2}//if else statement to make conditional
}

console.log(calculateTip(100));//output 15









