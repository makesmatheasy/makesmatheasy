
 function display_log(){
     document.getElementById('log_values').style.display = "block";
 }


 function cal_log(){

     var number1 = parseInt(document.getElementById('x-number').value);
     var base = parseInt(document.getElementById('log-base').value);

     var ans =  Math.log(number1)/Math.log(base);

     if(Number.isNaN(ans))
     {
         window.alert("Enter an Integer")
     }
     else {
     document.getElementById('answer').innerHTML = ans;
     document.getElementById('base_1').innerHTML = base;
     document.getElementById('no_1').innerHTML = number1;

     }
 } 