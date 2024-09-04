function calculateAverageSales(x) {
let length = x.length;
let sum = 0;//initializes the sum value
for (let i=0; i<length; i++){//continues to iterate as long as i is less than length of array
    sum += x[i];//sums each value of the array

    
    
}
return sum/length;
}
let salesFigures = [45,12,85,23,9];
console.log(calculateAverageSales(salesFigures));