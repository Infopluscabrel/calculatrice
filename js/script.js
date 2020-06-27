var printe=document.querySelector(".sign");
var signee = document.querySelector(".temp");
var sign=document.querySelector(".signe");




function number(value){
   var nombre1=parseFloat(signee.textContent);
   var signes=sign.textContent;
   if(signes==","){
      printe.textContent+=value;
   }else{
      printe.textContent+=value;
      var nombre2=value;
      switch(signes){
         case "+":
            var resultat=nombre1+nombre2;
            printe.textContent=resultat;
            break;
         case "-":
               var resultat=nombre1-nombre2;
               printe.textContent=resultat;
               
               break;
         
         case "*":
            var resultat=nombre1*nombre2;
            printe.textContent=resultat;
            break;
         case "/":
            var resultat=nombre1/nombre2;
            printe.textContent=resultat;
            break;
         default:
            break;
            }
   signee.textContent=nombre1+signes+nombre2;
         }

}

function reset() {
   printe.textContent = '0';
   sign.textContent = ',';
}

function signing() {
   var x=parseFloat(printe.textContent)*-1;
printe.textContent=x;
}

function percent() {
   printe.textContent = printe.textContent / 100;
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
         
         temp = addition(temp,print_value)
         break;
      case '-':
         addition(temp,print_value)
         break;
      case '*':
         addition(temp,print_value)
         break;
      case '/':
         addition(temp,print_value)
         break;
      case '=':
         print.innerHTML = temp
         break;

      default:
         break;
   }
}
function cosinus(){
   var angle=parseFloat(printe.textcontent);
   var angles=angle*Math.PI/180;
   angles=Math.cos(angles);
   angles=Math.fround(angles);
   printe.textContent=angles;

}
function arccosninus(){
   var angle=parseFloat(printe.textcontent);
   var angles=angle*Math.PI/180;
   angles=Math.acos(angles);
   angles=Math.fround(angles);
   printe.textContent=angles;
   
}function arcsinus(){
   var angle=parseFloat(printe.textcontent);
   var angles=angle*Math.PI/180;
   angles=Math.asin(angles);
   angles=Math.fround(angles);
   printe.textContent=angles;
   
}
function artangente(){
   var angle=parseFloat(printe.textcontent);
   var angles=angle*Math.PI/180;
   angles=Math.atan(angles);
   angles=Math.fround(angles);
   printe.textContent=angles;
   
}

function sinus(){
   var angle=parseFloat(printe.textcontent);
   var angles=angle*Math.PI/180;
   angles=Math.sin(angles);
   angles=Math.fround(angles);
   printe.textContent=angles;
   
}

function cosinushyp(){
   var angle=parseFloat(printe.textcontent);
   var angles=angle*Math.PI/180;
   angles=Math.cosh(angles);
   angles=Math.fround(angles);
   printe.textContent=angles;
   
}
function logarithme(){
   var angle=parseFloat(printe.textcontent);
   angle= Math.logarithme(angle);
   printe.textContent=angles;
   
}
function exponentielle(){
   var angle=parseFloat(printe.textcontent);
        angle=Math.exp(angle);
}

function sinushyp(){
   var angle=parseFloat(printe.textcontent);
   var angles=angle*Math.PI/180;
   angles=Math.sinh(angles);
   angles=Math.fround(angles);
   printe.textContent=angles;
   
}
function tangente(){
   var angle=parseFloat(printe.textcontent);
   var angles=angle*Math.PI/180;
   angles=Math.tan(angles);
   angles=Math.fround(angles);
   printe.textContent=angles;
   
}
function tangentehyp(){
   var angle=parseFloat(printe.textcontent);
   var angles=angle*Math.PI/180;
   angles=Math.tanh(angles);
   angles=Math.fround(angles);
   printe.textContent=angles;
   
}
function addition(){
   var add=printe.textContent;
   alert(add);
   signe="+";
   sign.textContent=signe;
   signee.textContent=add;
   printe.textContent="";
}
function soustraction(){
   var add=printe.textContent;
   signe="-";
   sign.textContent=signe;
   signee.textContent=add;
   printe.textContent="";
}
function multiplication(){
   var add=printe.textContent;
   signe="*";
   sign.textContent=signe;
   signee.textContent=add;
   printe.textContent="";
}
function division(){
   var add=printe.textContent;
   signe="+";
   sign.textContent=signe;
   signee.textContent=add;
   printe.textContent="";
}