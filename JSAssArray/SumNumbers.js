/* Create a function called sumNumbers that takes
 in an array of numbers and returns the sum of all the numbers 
 in the array. For example, given the array [1, 2, 3, 4], the 
function should return 10. */

function SumNumbers(a){
    var sum=0;
    for(var i=0;i<a.length;i++){
    sum=sum+a[i];
    }  
    return sum;  
}

var a=[1,2,3,4,3,6,3,7,8,2,8];
var b=SumNumbers(a);

console.log("Sum of elements in array ="+b);