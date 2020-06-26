
    function ajouter_un(){
        var x=1;
        
        document.querySelector('#espace').value+=x; 
     
    }
function ajouter_cos(){
var n =document.querySelector('#espace').value;
 var z= n*Math.PI/180;   
var x=Math.cos(z);
x=Math.fround(x);            
document.querySelector('#espace').value=x;
}

            function ajouter_deux(){
                var a=2;
        document.querySelector('#espace').value+=a; 

            }
            function ajouter_trois(){
                var a=3;
        document.querySelector('#espace').value+=a; 

            }
            function ajouter_quatre(){
                var a=4;
        document.querySelector('#espace').value+=a; 

            }
            function ajouter_cinq(){
                var a=5;
        document.querySelector('#espace').value+=a; 

            }
            function ajouter_six(){
                var a=6;
        document.querySelector('#espace').value+=a; 

            }
            function ajouter_sept(){
                var a=7;
        document.querySelector('#espace').value+=a; 

            }
            function ajouter_huit(){
                var a=8;
        document.querySelector('#espace').value+=a;
         

            }
            function ajouter_neuf(){
                var a=9;
        document.querySelector('#espace').value+=a; 

            }
            
            function ajouter_plus(){
               var r=document.getElementById('espace').value;
                   r=parseFloat(r);
                   document.querySelector('#second_aide').value=r;
                   document.querySelector('#espace').value="";
                   document.querySelector('#aide').value="                +";

                  }
      
        
    function ajouter_moins(){
        var r=document.getElementById('espace').value;
        r=parseFloat(r);
               document.querySelector('#espace').value="";
               document.querySelector('#second_aide').value=r;
               document.querySelector('#aide').value="                -";
    }

    function ajouter_multiplier(){
        var r=document.getElementById('espace').value;
        r=parseFloat(r);
               document.querySelector('#espace').value="";
               document.querySelector('#second_aide').value=r;
               document.querySelector('#aide').value="                x";
    }


    function ajouter_diviser(){
        var r=document.getElementById('espace').value;
        r=parseFloat(r);
               document.querySelector('#espace').value="";
               document.querySelector('#second_aide').value=r;
               document.querySelector('#aide').value="                /";
    }
    function ajouter_egal(){
           var final, nombre1,nombre2,solution;
           nombre1=document.querySelector('#espace').value;
           nombre2=document.querySelector('#second_aide').value;
           nombre1=parseFloat(nombre1);
           nombre2=parseFloat(nombre2);
           final=document.querySelector('#aide').value;
           document.querySelector('#espace').value="";
           if(final=="                +"){
              solution=nombre1+nombre2;
              document.querySelector('#aide').value+=nombre1;
              document.querySelector('#espace').value=solution;

           }else if (final=="                -") {
            solution=nombre2-nombre1;
            document.querySelector('#aide').value+=nombre1;
              document.querySelector('#espace').value=solution;
              }else if (final=="                x") {
            solution=nombre2*nombre1;
            document.querySelector('#aide').value+=nombre1;
              document.querySelector('#espace').value=solution;
              }
                  else{
            solution=nombre2/nombre1;
              document.querySelector('#aide').value+="  "+nombre1;
              document.querySelector('#espace').value=solution;
           } 
    }

    function reinitialiser(){
        document.querySelector('#espace').value="";
               document.querySelector('#second_aide').value="";
               document.querySelector('#aide').value="";
    }

    function ajouter_plusmoins(){
        var x=document.querySelector('#espace').value;
        x=x*(-1);
        document.querySelector('#espace').value=x;
    }


    function ajouter_pourcentage(){
        var x= document.querySelector('#espace').value;
        x=x/100;
        document.querySelector('#espace').value=x;
    }

    function ajouter_point(){
        var x=document.querySelector('#espace').value;
        document.querySelector('#espace').value+=".";
    }

    function ajouter_zero(){
        var x=document.querySelector("#espace").value;
        if(x==0){
            document.querySelector("#espace").value="0";
        }else{
            document.querySelector("#espace").value+="0";
            
        }
    }

