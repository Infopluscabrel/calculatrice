var signed = false
var print = document.querySelector(".resultat");


var sign = document.querySelector(".afficheur .sign");

function number(value) {
   print.innerHTML += value;
}

function reset() {
   print.innerHTML = '0';
   sign.innerHTML = '';
}

function signing() {
   if (signed == false) {
      sign.innerHTML = '-';
      signed = true;
   } else {
      sign.innerHTML = '';
      signed = false;
   }
   console.log(signed)
}

function percent() {
   print.innerHTML = print.innerHTML / 100
}

var number_boutons = document.querySelectorAll('.left_side .number li');

var temp=0,print_value;


function calcul(signe) {
   
   if(signed){
      print_value = parseInt(print.innerHTML)* -1
   }
   else{
       print_value = parseInt(print.innerHTML)
   }
  
   switch (signe) {
      case '+':
         
         print_value = parseInt(print.innerHTML)
         

          var s = addition(temp,print_value);
  
         break;
      case '-':
         soustraction(temp,print_value);
         break;
      case '*':
         multiplication(temp,print_value);
         break;
      case '/':
         division(temp,print_value);
         break;
      case '=':
         print.innerHTML = temp
         break;

      default:
         break;
   }
}

function addition(val1,val2){
   
   var add=val1+val2;
   return add;
}
function soustraction(val1,val2){
   var sous=val1-val2;
 return sous;}
function multiplication(val1,val2){
   var mult=val1*val2;
   return mult;
}
function division(val1,val2){
   var div=val1/val2;
    return div;
}

