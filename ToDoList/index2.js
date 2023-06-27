/* var myNodelist = document.getElementsByTagName("LI");

function newElement(){
    var li=document.createElement("li");
    var inputValue=document.getElementById("myInput").value;
    var temp = document.createTextNode(inputValue);
    li.appendChild(temp);
    if (inputValue === '') {
        alert("You must write something!");
      } 
    else {
        document.getElementById("myUL").appendChild(li);
      }
    document.getElementById("myUL").valu="";
    var button=document.createElement("BUTTON");
    button.onclick = function(){
        delElement();
    };

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    
}


function delElement(){
    var li=document.createElement("li");
    var inputValue=document.getElementById("myInput").value;
    var temp = document.createTextNode(inputValue);
}
 */


// Create a "delete" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "delete";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a delete button to remove the current list item
var deleteBtns = document.getElementsByClassName("delete");
for (i = 0; i < deleteBtns.length; i++) {
  deleteBtns[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button

function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
    alert("You must write something!");
    } else {
    document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";

    // Create a span element to show the creation time
    var timeSpan = document.createElement("span");
    var time = new Date().toLocaleString();
    var timeText = document.createTextNode(time);
    timeSpan.appendChild(timeText);
    li.appendChild(timeSpan);

    var deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.classList.add("delete");
    deleteButton.onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
    }
    li.appendChild(deleteButton);
}