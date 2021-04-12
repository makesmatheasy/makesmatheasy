
 function display_log(){
     document.getElementById('log_values').style.display = 'block';
 }


 function cal_log(){

     var number1 = parseInt(document.getElementById('x-number').value);
     var base = parseInt(document.getElementById('log-base').value);

     if(base==1)
     {
        document.getElementById('result').innerHTML = "Base of logarithm cannot be 1 ";
     }
     else if (base==0){
        document.getElementById('result').innerHTML = "Base of logarithm cannon be 0"
     }
	 else if(base<0 || number1<0)
	 {
		 document.getElementById('result').innerHTML = "Please enter a positive integer ";
	 }
     else {
        var ans =  Math.log(number1)/Math.log(base);
        
     document.getElementById('result').innerHTML = "log<sub>"+base+"</sub> ("+number1+") = "+ans;

     }
 } 