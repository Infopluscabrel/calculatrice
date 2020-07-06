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
               signes = "10^"
               break;
         
         case "*":
            var resultat=nombre1*nombre2;
            printe.textContent=resultat;
            break;
         case "/":
            var resultat=nombre1/nombre2;
            printe.textContent=resultat;
            break;
            case "^":
               var resultat=nombre1*Math.pow(10,nombre2);
               printe.textContent=resultat;
         default:
            break;
            }
   signee.textContent=nombre1+signes+nombre2;
         }

}

function reset() {
   printe.textContent = '0';
   sign.textContent = ',';
   signee.textContent="0";
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


function cosinus(){
var angle;   
  var  x=printe.textContent
    x=parseFloat(x);
   var angles=x*Math.PI/180;
   angles=Math.cos(angles);
   angles=Math.fround(angles);
   printe.textContent=angles;
}
function arccosninus(){
  var x=printe.textContent
    x=parseFloat(x);
   var angles=x*Math.PI/180;
   angles=Math.acos(angles);
   angles=Math.fround(angles);
   printe.textContent=angles;

}function arcsinus(){
   angle=parseFloat(printe.textcontent)
   var angles=angle*Math.PI/180;
   angles=Math.asin(angles);
   angles=Math.fround(angles);
   printe.textContent=angles;
   
}
function artangente(){
   var x=printe.textContent
    x=parseFloat(x);
   var angles=x*Math.PI/180;
   angles=Math.atan(angles);
   angles=Math.fround(angles);
   printe.textContent=angles;

}

function sinus(){
  var x=printe.textContent
    x=parseFloat(x);
   var angles=x*Math.PI/180;
   angles=Math.sin(angles);
   angles=Math.fround(angles);
   printe.textContent=angles;

   
}

function cosinushyp(){
  var x=printe.textContent
    x=parseFloat(x);
   var angles=x*Math.PI/180;
   angles=Math.cosh(angles);
   angles=Math.fround(angles);
   printe.textContent=angles;

}
function logarithme(){
  var x=printe.textContent
  x=parseFloat(x);
  var result=Math.log(x)
  printe.textContent=result;
}
function exponentielle(){
   var x=printe.textContent
    x=parseFloat(x);

   var angles=Math.exp(x);
   printe.textContent=angles
}

function sinushyp(){
   x=printe.textContent
    x=parseFloat(x);
   var angles=x*Math.PI/180;
   angles=Math.sinh(angles);
   angles=Math.fround(angles);
   printe.textContent=angles;

   
}
function tangente(){
  var x=printe.textContent
    x=parseFloat(x);
   var angles=x*Math.PI/180;
   angles=Math.tan(angles);
   angles=Math.fround(angles);
   printe.textContent=angles;

}
function tangentehyp(){
  var x=printe.textContent
   x=parseFloat(x);
  var angles=x*Math.PI/180;
  angles=Math.tanh(angles);
  angles=Math.fround(angles);
  printe.textContent=angles;

}
function exposant(){
   var add=printe.textContent;
   signe="^";
   sign.textContent=signe;
   signee.textContent=add;
   printe.textContent=""
}
function factoriel(){
   var x=printe.textContent;
   x=parseInt(x);
  
  
   var f=1;
   

  for(var i=1;i<=x;i++){
      f=f*i;
    
   }
   printe.textContent=f;
}

function addition(){
   var add=printe.textContent;
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
function display(){
   sign.textContent="";
   signee.textContent="";
}