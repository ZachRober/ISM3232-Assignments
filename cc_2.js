//ternary operator to calculate tip 
let bill = 250;
let tip = (50 <= bill <= 300) ? (0.15*bill) : (0.2*bill);

let total = (tip+bill);
console.log("The bill was $"+ bill, "the tip was $"+ tip, "and the total value was $"+ total);//display all 3 calcs





