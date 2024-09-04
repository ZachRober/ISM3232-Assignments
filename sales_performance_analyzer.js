function calculateAverageSales(x) {
let length = x.length;
let sum = 0;//initializes the sum value
for (let i=0; i<length; i++){//continues to iterate as long as i is less than length of array
    sum += x[i];//sums each value of the array
}
return sum/length;

}
let salesFigures = [1000,3000,2200,2600];
console.log(calculateAverageSales(salesFigures));

function determinePerformanceRating(x)
{
let avg = calculateAverageSales(x)//defining our average by referencing function
if (avg > 10000) {
    return "Excellent";//returning values if one is true
}
else if (avg > 7000){
    return "Good";
}
else if (avg > 4000){
    return "Satisfactory";
}
else if (avg < 4000){
    return "Needs improvement";
}
}
let rating = determinePerformanceRating(salesFigures);
console.log(rating);