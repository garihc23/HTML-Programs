var input_box=document.getElementById("calculation");
input_box.value="";

function UserClickButton(input){
    var old_input=input_box.value;
    var new_input=old_input+""+input;
    input_box.value=new_input;
}
function CalculateValue(){
    var input=input_box.value;
    
    var result=eval(input);
    input_box.value=result;
}
function ClearDataValue(){
    input_box.value="";
}