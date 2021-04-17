function Complex(real, imaginary) {
  this.real = 0;
  this.imaginary = 0;
  this.real = (typeof real === 'undefined') ? this.real : parseFloat(real);
  this.imaginary = (typeof imaginary === 'undefined') ? this.imaginary : parseFloat(imaginary);
}
Complex.transform = function(num) {
  var complex;
  complex = (num instanceof Complex) ? num : complex;
  complex = (typeof num === 'number') ? new Complex(num, 0) : num;
  return complex;
};
function display(re, im) {

  if(im === '0') return '' + re;
  if(re === 0) return '' + im + 'i';
  if(im < 0) return '' + re + im + 'i';
  return '' + re + '+' + im + 'i';
}
function complexAdd(first, second) {
    var num1, num2;
    num1 = Complex.transform(first);
    num2 = Complex.transform(second);
    var real = num1.real + num2.real;
    var imaginary = num1.imaginary + num2.imaginary;
    return display(real, imaginary);
}
function complexSub(first, second) {
    var num1, num2;
    num1 = Complex.transform(first);
    num2 = Complex.transform(second);
    var real = num1.real - num2.real;
    var imaginary = num1.imaginary - num2.imaginary;
    return display(real, imaginary);
}
function complexMul(first, second) {
    var num1, num2;
    num1 = Complex.transform(first);
    num2 = Complex.transform(second);
    var real = num1.real*num2.real-num1.imaginary*num2.imaginary;
    var imaginary = num1.real*num2.imaginary+num1.imaginary*num2.real;
    return display(real, imaginary);
}
function complexDiv(first, second) {
    var num1, num2;
    num1 = Complex.transform(first);
    num2 = Complex.transform(second);
    var denom = num2.imaginary * num2.imaginary + num2.real * num2.real;
    if(denom==0)
    {
        return 'Invalid , You can not divide by 0';
    }
    var real = (num1.real * num2.real + num1.imaginary * num2.imaginary) /denom;
    var imaginary = (num2.real * num1.imaginary - num1.real * num2.imaginary) /denom; 
    return display(real, imaginary);   
}

function add() {
    var a = new Complex(document.getElementById('creal1').value,  document.getElementById('cimg1').value);
    var b = new Complex(document.getElementById('creal2').value,  document.getElementById('cimg2').value);
    var res = complexAdd(a,b);
    document.getElementById('compresult').innerHTML="The result is &nbsp;" + res;
}

function sub() {
    var a = new Complex(document.getElementById('creal1').value,  document.getElementById('cimg1').value);
    var b = new Complex(document.getElementById('creal2').value,  document.getElementById('cimg2').value);
    var res = complexSub(a,b);
    document.getElementById('compresult').innerHTML="The result is &nbsp;" + res;
}
function mul() {
    var a = new Complex(document.getElementById('creal1').value,  document.getElementById('cimg1').value);
    var b = new Complex(document.getElementById('creal2').value,  document.getElementById('cimg2').value);
    var res = complexMul(a,b);
    document.getElementById('compresult').innerHTML="The result is &nbsp;" + res;

}
function div() {
    var a = new Complex(document.getElementById('creal1').value,  document.getElementById('cimg1').value);
    var b = new Complex(document.getElementById('creal2').value,  document.getElementById('cimg2').value);
    var res = complexDiv(a,b);
    document.getElementById('compresult').innerHTML="The result is &nbsp;" + res;
}

function err() {
    katex.render("Invalid!", document.getElementById('compresult'), {
        throwOnError: false
    });
}

function comOperation(value) {
    if (value == "Addition") {
        add();
    } else if (value == "Subtraction") {
        sub();
    } else if (value == "Multiplication") {
        mul();
    } else if (value == "Division") {
        div();
    } else {
        err();
    }
}

function mag(){
    var x = new Complex(document.getElementById('creal').value,document.getElementById('cimg').value);
    var ans=x.real*x.real + x.imaginary*x.imaginary;
    ans=Math.sqrt(ans);
    document.getElementById('comresult').innerHTML="Magnitude is &nbsp;" + ans;

}
function arg(){
    var x = new Complex(document.getElementById('creal').value,document.getElementById('cimg').value);
    var ans=Math.atan(x.imaginary/x.real);
    document.getElementById('comresult').innerHTML="Argument is &nbsp;" + ans + "&nbsp; radians";

}
function conj(){
    var x = new Complex(document.getElementById('creal').value,document.getElementById('cimg').value);
    x.imaginary=x.imaginary*-1;
    if(x.imaginary>0)
    document.getElementById('comresult').innerHTML="Conjugate is &nbsp;" + x.real + "&nbsp; +" + x.imaginary + "i";
    else
    document.getElementById('comresult').innerHTML="Conjugate is &nbsp;" + x.real + "&nbsp; " + x.imaginary + "i";
    
}
function sqr_rt(){
    var x = new Complex(document.getElementById('creal').value,document.getElementById('cimg').value);
    var deg=Math.atan(x.imaginary/x.real);
    var r=Math.sqrt(Math.sqrt(x.real*x.real + x.imaginary*x.imaginary));
    var s = Math.sin(deg/2);
    var c = Math.cos(deg/2);
    var rePart = r*c;
    var imPart = r*s;
    if(x.imaginary>0)
    document.getElementById('comresult').innerHTML="Square root is &nbsp;" + rePart + "&nbsp; + " + imPart + "i";
    else
    document.getElementById('comresult').innerHTML="Square root is &nbsp;" + rePart + "&nbsp; " + imPart + "i";
    
}
function err1() {
    katex.render("Invalid!", document.getElementById('comresult'), {
        throwOnError: false
    });
}
function comOp(value) {
    if (value == "Magnitude") {
        mag();
    } 
	else if (value == "Argument") {
        arg();
    }else if (value == "Conjugate") {
        conj();
    } else if( value == "SquareRoot"){
        sqr_rt();
    }
    else {
        err1();
    }
}

function polar()
{
  var r = parseInt(document.getElementById("cpreal").value);
  var i = parseInt(document.getElementById("cpimg").value);
  var result= document.getElementById("comp1result");
  var x = (Math.sqrt((r*r)+(i*i)));
  if(!Number.isInteger(x))
  {
    var j = (r*r)+(i*i);
    x = "&#8730;  "+ j ;
  }
  var y = nerdamer((Math.atan(i/r))/3.141592653589793).evaluate();
  if(y<0)
  {   
      y=nerdamer((-1)*y).toString();
	  x=x+"( cos( -π" +y+") + i sin ( -π"+ y+ "))";
  }
  else{
	  y=y.toString();
      x=x+"( cos( π" +y+") + i sin ( π"+ y+ "))";
  }
  
  result.innerHTML = x;
}
function euler()
{
  var r = parseInt(document.getElementById("cpereal").value);
  var i = parseInt(document.getElementById("cpeimg").value);
  var result= document.getElementById("comperesult");
  var x = (Math.sqrt((r*r)+(i*i)));
  if(!Number.isInteger(x))
  {
    var j = (r*r)+(i*i);
    x = "&#8730;  "+ j ;
  }
  var y = nerdamer((Math.atan(i/r))/3.141592653589793).evaluate();
  if(y<0)
  {   
      y=nerdamer((-1)*y).toString();
	  x=x+"e<sup>-iπ"+y+"</sup>";
  }
  else{
	  y=y.toString();
   x=x+"e<sup>iπ"+y+"</sup>";
  }
  result.innerHTML = x;
}

function display_devi(){
    var x = document.getElementById('deviation');
    if (x.style.display === 'none') {
    x.style.display = 'block';
  } else {
    x.style.display = 'none';
  }
 } 

function samvar()
{
   var num = document.getElementById('stdinp').value;
    
    valid=/^([-]{0,1}\d{1,}[\.]{0,1}\d{0,}[ ]?)*$/


    if(num=="")
    {
       document.getElementById('std-var-rslt').innerHTML = "Please enter number";
    }
    else if(!valid.test(num))
    {
        document.getElementById('std-var-rslt').innerHTML = "Enter space separated numbers. Use of alphabets and special character is not allowed for calculation purpose";
    }
    else
    {
        var outputstring="";
        var s=0;
        num=num.trim();
        num = num.split(" ");
        var len=parseInt(num.length);
       
        var number=[]
        for (i = 0; i < len; i++) {
            number[i] = parseFloat(num[i].trim());
        }

        var sum=0;


        for (i = 0; i < len; i++) {
           sum+=number[i];
        }

        var meanrzlt= sum/len;
         var varrzlt=0;
        for (i = 0; i < len; i++) {
            varrzlt = varrzlt + ((number[i])-meanrzlt)*((number[i])-meanrzlt);
        }

        varrzlt = varrzlt/(len-1);
 var conint;
 var sampstddev=Math.sqrt(varrzlt);
 var q=Math.sqrt(len)
conint= sampstddev/q;
  
      
        
       var outputstring=""
       var text="x̄";
       var text2="2";
    outputstring+="Count of inputs: "+len+"<br>";
        outputstring+="Sum(Σx): "+sum+"<br>";
        outputstring+="Mean(μ): "+meanrzlt+"<br>";
        outputstring+="Variance(σ"+text2.sub()+"): "+varrzlt+"<br>";
        outputstring+="Sample Standard Deviation: "+sampstddev+" <p>&nbsp;</p>";
        outputstring+="Confidence Interval(s" +text.sub()+"): "+conint+"<br>";
     document.getElementById('std-var-rslt').innerHTML = outputstring;
}
}

function popvar()
{
       var num = document.getElementById('stdinp').value;
    
    valid=/^([-]{0,1}\d{1,}[\.]{0,1}\d{0,}[ ]?)*$/


    if(num=="")
    {
       document.getElementById('std-var-rslt').innerHTML = "Please enter number";
    }
    else if(!valid.test(num))
    {
        document.getElementById('std-var-rslt').innerHTML = "Enter space separated numbers. Use of alphabets and special character is not allowed for calculation purpose";
    }
    else
    {
        var outputstring="";
        var text="x̄";
        var text2="2";
        num=num.trim();
        num = num.split(" ");
        var len=parseInt(num.length);
       
        var number=[]
        for (i = 0; i < len; i++) {
            number[i] = parseFloat(num[i].trim());
        }

        var sum=0;


        for (i = 0; i < len; i++) {
           sum+=number[i];
        }

        var meanrzlt= sum/len;
         var varrzlt=0;
        for (i = 0; i < len; i++) {
            varrzlt = varrzlt + ((number[i])-meanrzlt)*((number[i])-meanrzlt);
        }
        var conint;
        varrzlt = varrzlt/len;

       var sampstddev=Math.sqrt(varrzlt);
       var q=Math.sqrt(len)
        conint= sampstddev/q;
       var outputstring=""

    outputstring+="Count of inputs: "+len+"<br>";
        outputstring+="Sum(Σx): "+sum+"<br>";
        outputstring+="Mean(μ): "+meanrzlt+"<br>";
        outputstring+="Variance(σ"+text2.sub()+"): "+varrzlt+"<br>";
        outputstring+="Population Standard Deviation: "+sampstddev+" <p>&nbsp;</p>";
        outputstring+="Confidence Interval(s" +text.sub()+"): "+conint+"<br>";


     document.getElementById('std-var-rslt').innerHTML = outputstring;
}
}
