
 function display_log(){
     document.getElementById('log_values').style.display = 'block';
 }


 function cal_log(){

     var number1 = document.getElementById('x-number').value;
     var base =document.getElementById('log-base').value;

     if(number1==""||base==""||isNaN(number1)||isNaN(base))
     {
      document.getElementById('result').innerHTML = "Please enter proper input to find log value";
     }
     else{
        number1=parseInt(number1);
        base=parseInt(base);
     if(base==1)
     {
        document.getElementById('result').innerHTML = "Base of logarithm cannot be 1 ";
     }
     else if (base==0){
        document.getElementById('result').innerHTML = "Base of logarithm cannot be 0"
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
 } 
 function lnfind()
 {
    var num=document.getElementById("ln1").value;
    ans="";
    if(num==""||isNaN(num))
    {
         ans="Please enter valid number";
    }
    else
    {
       var e=2.718281828459045;
       ans="The calculated value is: "+ Math.log(num)/Math.log(e);
    }
    document.getElementById("lnans").innerHTML=ans;
 }