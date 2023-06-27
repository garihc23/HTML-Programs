/* Create a function called doubleNumbers that takes in an array of numbers and 
returns a new array where every number is doubled. For example, given the array 
[2, 4, 6, 8], the function should return [4, 8, 12, 16]. */

/* function DoubleNumber(a){
    
    let b=[];

    for(let i=0;i<a.length;i++){
        b[i]=a[i]*2;
    }

    return b;
}
let a=[1,4,5,6,2];
let b=DoubleNumber(a);

console.log("new array: ");
for(let i=0;i<b.length;i++){
    console.log(b[i]+" ");
} */

const arr=[1,2,3,4,5,2];
const numdouble =arr.map(c=>c*2);

const b=numdouble(arr);
console.log(b);

