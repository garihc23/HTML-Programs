/* Create a function called evenNumbers that takes in an array of numbers
 and returns a new array with only the even numbers. For example, given
  the array [1, 2, 3, 4, 5, 6], the function should return [2, 4, 6].
 */

function EvenNumbers(a){
    var c=[];
    for(var i=0,j=0;i<a.length;i++){
        if(a[i]%2==0){
            c[j]=a[i];
            j++;
        }
    }
    return c;
}
var a=[1,4,2,5,6,2,7,8,12,43,6,2];
var b=EvenNumbers(a);
 console.log("Even array: ");
 for(var i=0;i<b.length;i++){
    console.log(b[i]+" ");
 }