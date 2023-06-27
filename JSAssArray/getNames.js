/* Create a function called getNames that takes 
in an array of objects and returns an array of only the names of
 those objects. Each object has a name property. For example, given 
 the array [{name: "Alice", age: 25}, {name: "Bob", age: 30}, 
 {name: "Charlie", age: 35}], 
the function should return ["Alice", "Bob", "Charlie"]. */

/* 
Create a function called averageAge that takes in an array of 
objects and returns the average age of those objects. Each object 
has an age property. For example, given the array [{name: "Alice", age: 25}, 
{name: "Bob", age: 30}, 
{name: "Charlie", age: 35}], the function should return 30. */

function getNames(arr) {
    var names = [];
    for(var i=0; i<arr.length; i++) {
      names.push(arr[i].name);
    }
    return names;
  }
function averageAge(arr){
    var age=[];
    var sum=0;
    for(var i=0; i<arr.length; i++) {
        age.push(arr[i].age);
        sum=sum+age[i];
      }
      return (sum/age.length);
}

  var arr = [
    {name: "Alice", age: 25},
    {name: "Bob", age: 30},
    {name: "Charlie", age: 35}
  ];
  
  var names = getNames(arr);
  console.log(names); 
  var avgAge=averageAge(arr);
  console.log("Average Age="+avgAge);