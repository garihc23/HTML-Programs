function listcheck() {
    var li = document.getElementsByClassName("listitem");
    console.log(li);
    
    var i;
    temp=i+1;
    for (i = 0; i <li.length; i++) {
        li[i].classList.toggle("checked");
    }
 }
// Create a new list item when clicking on the "Add" button
function newElement() {
    // Create a new list item element
    var li = document.createElement("li");
    // Get the input value entered by the user

    // Adding classes while creating list item
    
    li.classList.add(
        "listitem"
    );  

    /* var index;
    temp=index+1;
    for(index=0;index<temp;index++){
        li.setAttribute("id", index);
        console.log("index");
    } */
    li.setAttribute("onclick","listcheck();"); 

    var inputValue = document.getElementById("myInput").value;
    // Create a text node containing the input value
    var t = document.createTextNode(inputValue);
    // Append the text node to the list item element
    li.appendChild(t);
    // Check if the input value is empty
    if (inputValue === '') {
      // Show an alert message if input value is empty
      alert("You must write something!");
    } else {
      // Append the list item element to the unordered list element with id "myUL"
      document.getElementById("myUL").appendChild(li);
    }
   // Create a span element to show the creation time
    var timestamp = document.createElement("span");
    var currentDate = new Date();
    var date = currentDate.getDate();
    var month = currentDate.getMonth() + 1;
    var year = currentDate.getFullYear();
    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();
    var timestampText = document.createTextNode(date + "/" + month + "/" + year + "   " + hours + ":" + minutes + ":" + seconds);
    timestamp.appendChild(timestampText);
    timestamp.classList.add(
        "time-stamp"
        );
    li.appendChild(timestamp);
    
    // Clear the input field after adding the new list item
    document.getElementById("myInput").value = "";
  
    // Create a delete button for the new list item
    var deleteBtn = document.createElement("BUTTON");
    // Create a text node containing the "×" symbol
    var txt = document.createTextNode("×");
    // Add the "delete" class to the delete button
    deleteBtn.className = "delete";
    // Append the "×" text node to the delete button
    deleteBtn.appendChild(txt);
    // Append the delete button to the new list item element
    li.appendChild(deleteBtn);
  
    // Add event listener for the delete button
    deleteBtn.onclick = function() {
      // Get the parent element of the delete button (which is the list item element)
      var div = this.parentElement;
      // Hide the list item element by setting its display property to "none"

      //Confirmation box to warn the user about task deletion.
      var response = confirm("Are you sure you want to do that?");
        //console.log(response);
      if(response==true)
      {
        div.style.display = "none";
        alert("Task Item Deleted.")
      }
      else{
        alert("Task Item Not Deleted.")
      }
    }

  

/* // Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul'); // Get the first "ul" element in the document using the "querySelector" method and store it in "list" variable
list.addEventListener('click', function(ev) { // Add a "click" event listener to the "list" element
  if (ev.target.tagName == "li") { // Check if the clicked element is a list item
    ev.target.classList.toggle('checked'); // Toggle the "checked" class on the clicked list item
  }
}, false); */



}
