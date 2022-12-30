

/*
function plus(){
    let number1=parseInt(document.getElementById("number1").value);
    let number2=parseInt(document.getElementById("number2").value);
    var total =number1+number2; 
    let result=parseInt(document.getElementById("result").value=total);
}
function minus(){
    let number1=parseInt(document.getElementById("number1").value);
    let number2=parseInt(document.getElementById("number2").value);
    var total =number1-number2; 
    let result=parseInt(document.getElementById("result").value=total);
}


function plus(){
    let number=parseInt(document.getElementById("number").value);
    
}
function minus(){
    
    let number=parseInt(document.getElementById("number").value=decrement);
    var decrement=number-1;
}
*/
let btn=document.getElementById("decrese");
btn.addEventListener("click",function(){
  var text1=parseInt(document.getElementById("num").value);
  text1--;
  document.getElementById("num").value=text1;
  
 })

let btn1=document.getElementById("increse");
btn1.addEventListener("click",function(text1){
  text1=parseInt(document.getElementById("num").value);
  text1++;  
  document.getElementById("num").value=text1;
    
   
  })
