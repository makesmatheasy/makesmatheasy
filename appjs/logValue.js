
 function display_log(){
     document.getElementById('log_values').style.display = "block";
 }


 function cal_log(){

     var number1 = parseInt(document.getElementById('x-number').value);
     var base = parseInt(document.getElementById('log-base').value);

     var ans =  Math.log(number1)/Math.log(base);

     if(base==1)
     {
        document.getElementById('result').innerHTML = "Base of logarithm cannot be 1 ";
     }
	 else if(base<=0 || number1<=0)
	 {
		  document.getElementById('result').innerHTML = "Please enter a positive integer ";
	 }
     else {
     document.getElementById('answer').innerHTML = ans;
     document.getElementById('base_1').innerHTML = base;
     document.getElementById('no_1').innerHTML = number1;

     }
 } 