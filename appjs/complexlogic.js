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
    let explain="\\[Magnitude = \\sqrt{real^2+imaginary^2}\\]"+"\\[Magnitude = \\sqrt{("+x.real+")^2+("+x.imaginary+")^2}=\\sqrt{"+x.real*x.real+"+"+x.imaginary*x.imaginary+"}=\\sqrt{"+ans+"}\\]";
    ans=Math.sqrt(ans).toFixed(3);
    explain+="\\[Magnitude ="+ans+"\\]";
    document.getElementById('comresult').innerHTML="Magnitude is &nbsp;" + ans;
    document.getElementById('comexplain').innerHTML=explain;
    renderMathInElement(document.getElementById("comexplain"));
}
function arg(){
    var x = new Complex(document.getElementById('creal').value,document.getElementById('cimg').value);
    var ans=Math.atan(x.imaginary/x.real).toFixed(3);
    let explain="\\[Argument =tan^{-1}\\frac{imaginary}{real}\\]"+"\\[Argument =tan^{-1}\\frac{"+x.imaginary+"}{"+x.real+"}=tan^{-1}"+(x.imaginary/x.real).toFixed(3)+"\\]";
    explain+="\\[Argument ="+ans+"\\space radians\\]";
    document.getElementById('comresult').innerHTML="Argument is &nbsp;" + ans + "&nbsp; radians";
    document.getElementById('comexplain').innerHTML=explain;
    renderMathInElement(document.getElementById("comexplain"));
}
function conj(){
    var x = new Complex(document.getElementById('creal').value,document.getElementById('cimg').value);
    x.imaginary=x.imaginary*-1;
    let explain;
    if(x.imaginary>=0){
        explain="\\[Conjugate = real\\space+ \\space(-1)*imaginary \\]"+"\\[Conjugate = "+x.real +"+"+x.imaginary+" i\\]";
        document.getElementById('comresult').innerHTML="Conjugate is &nbsp;" + x.real + "&nbsp; +" + x.imaginary + "i"
    }
    else{
        explain="\\[Conjugate = real\\space+ \\space(-1)*imaginary \\]"+"\\[Conjugate = "+x.real+"\\space"+ x.imaginary+" i\\]";
        document.getElementById('comresult').innerHTML="Conjugate is &nbsp;" + x.real + "&nbsp; " + x.imaginary + "i";
    }
    document.getElementById('comexplain').innerHTML=explain;
    renderMathInElement(document.getElementById("comexplain"));
    
}
function sqr_rt(){
    let explain="\\[From\\space De\\space Moivre's\\space Formula,\\space z^n=(r^n)(cos(n\\theta)+i \\space sin(n\\theta))\\]"+"\\[So,\\space \\sqrt{z}=\\sqrt{r}(cos(\\frac{\\theta}{2})+i \\space sin(\\frac{\\theta}{2}))\\]"
    explain+="\\[where, \\space r=\\sqrt{real^2+imaginary^2} \\space\\space , \\space \\space \\theta=tan^{-1}\\frac{imaginary}{real}\\]";
    var x = new Complex(document.getElementById('creal').value,document.getElementById('cimg').value);
    var deg=Math.atan(x.imaginary/x.real).toFixed(3);
    var r=Math.sqrt(x.real*x.real + x.imaginary*x.imaginary).toFixed(3);
    explain+="\\[r=\\sqrt{("+x.real+")^2+("+x.imaginary+")^2}="+r+"\\space \\space , \\space \\space \\theta=tan^{-1}\\frac{"+x.imaginary+"}{"+x.real+"}="+deg+"\\]";
    r=Math.sqrt(r).toFixed(3);
    var s = Math.sin(deg/2).toFixed(3);
    var c = Math.cos(deg/2).toFixed(3);
    var rePart = r*c;
    var imPart = r*s;
    if(x.imaginary>=0){
        document.getElementById('comresult').innerHTML="Square root is &nbsp;" + rePart.toFixed(3) + "&nbsp; + " + imPart.toFixed(3) + "i";
        explain+="\\[\\sqrt{"+x.real+"+"+x.imaginary+"i \\space}="+r+"(cos("+deg/2+")+i \\space sin("+deg/2+"))="+r+"("+c+"+"+s+"i)\\]";
        explain+="\\[\\sqrt{"+x.real+"+"+x.imaginary+"i \\space}="+rePart.toFixed(3)+"+"+imPart.toFixed(3)+"i\\]";
    }
    else{
        document.getElementById('comresult').innerHTML="Square root is &nbsp;" + rePart.toFixed(3) + "&nbsp; " + imPart.toFixed(3) + "i";
        explain+="\\[\\sqrt{"+x.real+"+"+x.imaginary+"i \\space}="+r+"(cos("+deg/2+")+i \\space sin("+deg/2+"))="+r+"("+c+s+"i)\\]";
        explain+="\\[\\sqrt{"+x.real+"+"+x.imaginary+"i \\space}="+rePart.toFixed(3)+imPart.toFixed(3)+"i\\]";
    }
    document.getElementById('comexplain').innerHTML=explain;
    renderMathInElement(document.getElementById("comexplain"));
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

function euler()
{
  let explain="\\[Euler \\space Form \\space =re^{i\\theta}\\]";
  explain+="\\[where, \\space r=\\sqrt{real^2+imaginary^2} \\space\\space , \\space \\space \\theta=tan^{-1}\\frac{imaginary}{real}\\]";
  var r = parseInt(document.getElementById("cpereal").value);
  var i = parseInt(document.getElementById("cpeimg").value);
  var result= document.getElementById("comperesult");
  var x = (Math.sqrt((r*r)+(i*i)));
  var x1;
  if(!Number.isInteger(x))
  {
    var j = (r*r)+(i*i);
    x = "&#8730;  "+ j ;
  }
  explain+="\\[r=\\sqrt{("+r+")^2+("+i+")^2}="+x+"\\]";
  var y = nerdamer((Math.atan(i/r))/3.141592653589793).evaluate();
  explain+="\\[\\theta=tan^{-1}\\frac{"+i+"}{"+r+"}\\space radians=";
  if(y<0)
  {   
      y=nerdamer((-1)*y).toString();
      x1=x+"e^{-iπ"+y+"}";
	  x=x+"e<sup>-iπ"+y+"</sup>";
      explain+="-π" +y+"\\]";
  }
  else{
	  y=y.toString();
      x1=x+"e^{iπ"+y+"}";
   x=x+"e<sup>iπ"+y+"</sup>";
   explain+="π" +y+"\\]";
  }
  result.innerHTML = x;
  explain+="\\[Euler \\space Form \\space ="+x1+"\\]";
  document.getElementById('compeexplain').innerHTML=explain;
  renderMathInElement(document.getElementById("compeexplain"));
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
function hydrocal()
{
    var a=document.getElementById("dept").value;
    var b=document.getElementById("dens").value;
    var ans="";
    if(a===""||b=="")
    {
        ans="Please enter all the values to obtain answer";
    }
    else{
    var prs=b*9.80655*a+1;
    
   ans="Your answer is: "+prs+" atm"+" <p>&nbsp</p><p>&nbsp</p>";
    ans+="Our hydrostatic pressure calculator uses the below hydrostatic pressure formula <br>    p = ρ * g * h + p0 where <br>  p is the hydrostatic pressure, ρ is the density of fluid,<br>  g is the gravitational acceleration (the average value for the Earth is g = 9.80655 m/s²), <br>   h is the depth,<br> p0 is the external pressure (usually atmospheric pressure p0 = 1 atm = 1013.25 hPa).";

    }
    document.getElementById("hydroans").innerHTML=ans;
}

function straincal()
{
    var a=document.getElementById("chnln").value;
    var b=document.getElementById("orln").value;
    var c=document.getElementById("orunit").value;
    var d=document.getElementById("chunit").value;
    var ans="";
    if(a==""||b=="")
    {
        ans="Please enter all the values to obtain answer";
    }
    else{
    if(c==='inch')
    {
        b=b*2.54;
    }
    else if(c==="mm")
    {
        b=b/10;
    }
    else if(c==="m")
    {
        b=b*100;
    }
    else if(c==="µm")
    {
        b=b/10000;
    }

    if(d==='inch')
    {
        a=a*2.54;
    }
    else if(d==="mm")
    {
        a=a/10;
    }
    else if(d==="m")
    {
        a=a*100;
    }
    else if(d==="µm")
    {
        a=a/10000;
    }

    var strain=a/b;
    ans="The calculated Strain(S) is: "+strain+"<br> <br> <br>";
    ans+="Strain is a measure of a materials dimensions due to a load deformation. It takes the initial length and the extension of that length due to the load and creates a ratio of the two.<br>  ε= Δl/l<br> Where: <br>   ε = Strain<br>Δl = Change in length<br>l = Length"
   
}
document.getElementById("strainans").innerHTML= ans;

}

function stresscalc()
{
    var b=document.getElementById("area").value;
    var a=document.getElementById("strforce").value;
    var c=document.getElementById("aunit").value;
    var d=document.getElementById("funit").value;
    var ans="";
    if(a==""||b=="")
    {
        ans="Please enter all the values to obtain answer";
    }
    else{
    if(c==='inch')
    {
        b=b/1550;
    }
    else if(c==="mm")
    {
        b=b/1000000;
    }
    else if(c==="cm")
    {
        b=b/10000;
    }
    else if(c==="ft")
    {
        b=b/10.764;
    }

    if(d==='gn')
    {
        a=a*1000000000;
    }
    else if(d==="kn")
    {
        a=a*1000;
    }
    else if(d==="mn")
    {
        a=a*1000000;
    }

    var stress=a/b;
    ans="The calculated Stress is: "+stress +" Pa"+"<br> <br> <br>";

    ans+="Stress is defined as “The restoring force per unit area of the material”. It is a tensor quantity. Denoted by Greek letter σ. Measured using Pascal or N/m2. Mathematically expressed as <br>    σ=F/A Where, <br>    F is the restoring force measured in Newton or N. <b>    A is the area of cross-section measured in m2. <br>    σ is the stress measured using N/m2 or Pa. <br>"
}
document.getElementById("stressans").innerHTML=ans;
    
}

function factorial(n){
    let answer = 1;
    if (n == 0 || n == 1){
      return answer;
    }else{
      for(var i = n; i >= 1; i--){
        answer = answer * i;
      }
      return answer;
    }  
  }
  
  // HP starts
  function hp() {
    var a = document.getElementById("firstTerm").value;
    var d = document.getElementById("diff").value;
    var n = document.getElementById("noofTerms").value;
    var printseries = document.getElementById("printHPseries");
    var printemp = "";
    var num = (Math.log(2*a + (2*n-1)*d)/(2*a-d));
    var num1 = num/d;
    if(a == "" || d == "" || n == ""){
        printemp += "\\[Please \\space enter \\space all \\space fields \\]";
        printseries.innerHTML = printemp;
        renderMathInElement(printseries);
    }
   else if (!isNaN(parseInt(n)) || !isNaN(parseInt(a)) || !isNaN(parseInt(d))) {
            printemp += "\\[Sum \\space of \\space Nterms \\space of \\space HP \\space = \\space \\frac{1}{d} ln \\frac{2a+(2n-1)d}{2a-d} \\]";
            printemp += "\\[S_n \\space = \\space \\frac{1}{" + d + "} ln \\frac{2*" + a + "+(2*" + n + "- 1)" + d + "}{2*" + a + "-" + d + "} \\]";
            printemp += "\\[S_n \\space = \\space \\frac{1}{" + d + "} ln (" + (num).toFixed(3) + ")\\]";
            printemp += "\\[S_n \\space = \\space " + (num1).toFixed(3) + "\\]";
            printseries.innerHTML = printemp;
            renderMathInElement(printseries);
      }
      else
      {
        printemp += "\\[Enter \\space numbers \\space only. \\space Blank \\space inputs \\space are \\space not \\space allowed \\]";
        printseries.innerHTML = printemp;
        renderMathInElement(printseries);
      }
}
// HP ends

function bpcal()
{
    var a=document.getElementById("psuc").value;
    var b=document.getElementById("suc").value;
    var c=document.getElementById("tri").value;
    var ans="";

   
    if(a==""||b==""||c=="")
    {
        ans="Input Error: Please enter all the values to obtain required answer";
    }
    else if(a>1)
    {
        ans="Input Error: Probability can't be greater than 1";
    }
    else if(b>c)
    {
        ans="Input Error: Successful events can't be greater than total number of trials.";
    }
   
    else{

        var pmf= factorial(c) / (factorial(b) * factorial(c-b));
        console.log(pmf);
        var n=Math.pow(a,b);
        var s=1-a, t=c-b;
        var m=Math.pow(s,t);
        pmf=pmf*n*m;
        pmf=pmf.toPrecision(5)
        ans="The PMF is: " +pmf;
    }
    document.getElementById("bpans").innerHTML=ans;


}

function stresscalc()
{
    var b=document.getElementById("area").value;
    var a=document.getElementById("strforce").value;
    var c=document.getElementById("aunit").value;
    var d=document.getElementById("funit").value;
    var ans="";
    if(a==""||b=="")
    {
        ans="Please enter all the values to obtain answer";
    }
    else{
    if(c==='inch')
    {
        b=b/1550;
    }
    else if(c==="mm")
    {
        b=b/1000000;
    }
    else if(c==="cm")
    {
        b=b/10000;
    }
    else if(c==="ft")
    {
        b=b/10.764;
    }

    if(d==='gn')
    {
        a=a*1000000000;
    }
    else if(d==="kn")
    {
        a=a*1000;
    }
    else if(d==="mn")
    {
        a=a*1000000;
    }

    var stress=a/b;
    ans="The calculated Stress is: "+stress +" Pa"+"<br> <br> <br>";

    ans+="Stress is defined as “The restoring force per unit area of the material”. It is a tensor quantity. Denoted by Greek letter σ. Measured using Pascal or N/m2. Mathematically expressed as <br>    σ=F/A Where, <br>    F is the restoring force measured in Newton or N. <b>    A is the area of cross-section measured in m2. <br>    σ is the stress measured using N/m2 or Pa. <br>"
}
document.getElementById("stressans").innerHTML=ans;
    

}

function arcal()
{
      var a=document.getElementById("ang12").value;
      var b=document.getElementById("rad").value;
      var y=document.getElementById("radit").value;
      var d=document.getElementById("angit").value;
      var ans="";
      if(a == "" && b == "")
      {
          ans="Error: All values are required to obtain answer";
      }
      else
      {

        if(d=="degree")
        {
            b/=57.296;
        }


        var c= a*b;

        if(y=="cm")
        {
            c=c/100;
        }
        else if(y=="mm")
        {
            c=c/1000;
        }
        else if(y=="inch")
        {
              c=c/0.0254;
        }
      
        var k=c.toPrecision(5);

             ans="The arc length is: "+k+" m";
      }

      document.getElementById("arcans").innerHTML=ans;


}

function ssqcal()
{
    var num=document.getElementById("ssq").value;
    valid=/^([-]{0,1}\d{1,}[\.]{0,1}\d{0,}[ ]?)*$/;
    var s="";
    if(num=="")
    {
       s= "Please enter number";
    }
    else if(!valid.test(num))
    {
        s= "Enter space separated numbers. Use of alphabets and special character is not allowed for calculation purpose";
    }
    else{
    num=num.trim();
    num = num.split(" ");
    var len=parseInt(num.length);
   
    var number=[]
    for (i = 0; i < len; i++) {
        number[i] = parseFloat(num[i].trim());
    }

    var sum=0;
 
    for (i = 0; i < len; i++) {
        console.log(number[i]);
     }

    for (i = 0; i < len; i++) {
       sum=sum+(number[i]**2);
    }
    s="Your answer is: "+sum;
    }

    document.getElementById("ssqans").innerHTML=s;


}

function sspncal()
{
    var num=document.getElementById("sspn").value;
    num = parseInt(num);
    valid=/^([-]{0,1}\d{1,}[\.]{0,1}\d{0,}[ ]?)*$/;
    var poweroutput = document.getElementById("sspnans");
    var powertemp="";
     if(!valid.test(num))
    {
        powertemp += "\\[Enter \\space any \\space numbers. \\space Use \\space of \\space alphabets \\space and \\space special \\space character \\space is \\space not \\space allowed \\space for \\space calculation \\space purpose \\]";
        poweroutput.innerHTML = powertemp;
        renderMathInElement(poweroutput);
    }
    else if(num<1){
        powertemp += "\\[Natural \\space Numbers \\space cannot \\space be \\space negative \\]";
        poweroutput.innerHTML = powertemp;
        renderMathInElement(poweroutput);
    }
    else{
        var powersum=Math.trunc((num*(num+1)*(2*num+1)*(3*(num**2)+(3*num)-1)));
        var powersum1 = powersum/30;
        powertemp += "\\[Sum \\space of \\space the \\space Power \\space Four \\space of \\space the \\space First \\space n \\space Natural \\space Numbers \\space is \\]";
        powertemp += "\\[ \\sum {n}^4 \\space = \\space \\frac{n(n+1)(2n+1)(3n^2+3n-1)}{30}  \\]";
        powertemp += "\\[\\sum {n}^4 \\space = \\space \\frac{" + num + "(" + num + " + 1)(2 \\times" + num + "+ 1)(3 \\times" + num + "^2 + (3 \\times" + num + ")-1)}{30} \\]";
        powertemp += "\\[\\sum {n}^4 \\space = \\space \\frac{" + num + "\\times" + (num+1) + "\\times" + ((2*num)+1) + " \\times " + (3*(num**2)+(3*num)-1) + "}{30}  \\]";
        powertemp += "\\[\\sum {n}^4 \\space = \\space \\frac{" + powersum + "}{30} \\]";
        powertemp += "\\[\\sum {n}^4 \\space = \\space " + powersum1 + "\\]";
        poweroutput.innerHTML = powertemp;
        renderMathInElement(poweroutput);
    }

}


function ssqncal()
{
    var num=document.getElementById("ssqn").value;
    num = parseInt(num);
    valid=/^([-]{0,1}\d{1,}[\.]{0,1}\d{0,}[ ]?)*$/;
    var soutput = document.getElementById("ssqnans");
    var s="";
    if(num=="")
    {
       s += "\\[Please \\space enter \\space number \\]";
       soutput.innerHTML = s;
       renderMathInElement(soutput);
    }
    else if(!valid.test(num))
    {
        s += "\\[Enter \\space space \\space separated \\space numbers. \\space Use \\space of \\space alphabets \\space and \\space special \\space character \\space is \\space not \\space allowed \\space for \\space calculation \\space purpose \\]";
        soutput.innerHTML = s;
        renderMathInElement(soutput);
    }
    else if(num<1){
        s += "\\[Natural \\space Numbers \\space cannot \\space be \\space negative \\]";
        soutput.innerHTML = s;
        renderMathInElement(soutput);
    }
    else{
        var sum=Math.trunc((num*(num+1)*(2*num+1)));
        var sum1 = sum/6;
        s += "\\[Sum \\space of \\space the \\space Squares \\space of \\space the \\space First \\space n \\space Natural \\space Numbers \\space is \\]";
        s += "\\[ \\sum {n}^2 \\space = \\space \\frac{n(n+1)(2n+1)}{6}  \\]";
        s += "\\[\\sum {n}^2 \\space = \\space \\frac{" + num + "(" + num + " + 1)(2 \\times" + num + "+ 1)}{6} \\]";
        s += "\\[\\sum {n}^2 \\space = \\space \\frac{" + num + "\\times" + (num+1) + "\\times" + ((2*num)+1) + "}{6} \\]";
        s += "\\[\\sum {n}^2 \\space = \\space \\frac{" + sum + "}{6} \\]";
        s += "\\[\\sum {n}^2 \\space = \\space " + sum1 + "\\]";
        soutput.innerHTML = s;
        renderMathInElement(soutput);
    }

}

function scbncal()
{
    var num=document.getElementById("scbn").value;
    num = parseInt(num);
    valid=/^([-]{0,1}\d{1,}[\.]{0,1}\d{0,}[ ]?)*$/;
    var soutput3 = document.getElementById("scbnans");
    var stemp="";
    if(num=="")
    {
        stemp += "\\[Please \\space enter \\space number \\]";
        soutput3.innerHTML = stemp;
        renderMathInElement(soutput3);
    }
    else if(!valid.test(num))
    {
        stemp += "\\[Enter \\space space \\space separated \\space numbers. \\space Use \\space of \\space alphabets \\space and \\space special \\space character \\space is \\space not \\space allowed \\space for \\space calculation \\space purpose \\]";
        soutput3.innerHTML = stemp;
        renderMathInElement(soutput3);
    }
    else if(num<1){
        stemp += "\\[Natural \\space Numbers \\space cannot \\space be \\space negative \\]";
        soutput3.innerHTML = stemp;
        renderMathInElement(soutput3);
    }
    else{
        var sum=Math.trunc((num*(num+1)));
        var sum1 = (sum/2);
        var sum2 = (sum1)**2;
        stemp += "\\[Sum \\space of \\space the \\space Cubes \\space of \\space the \\space First \\space n \\space Natural \\space Numbers \\space is \\]";
        stemp += "\\[ \\sum {n}^3 \\space = \\space (\\frac{n(n+1)}{2})^2  \\]";
        stemp += "\\[\\sum {n}^3 \\space = \\space (\\frac{" + num + "(" + num + " + 1)}{2})^2 \\]";
        stemp += "\\[\\sum {n}^3 \\space = \\space (\\frac{" + num + "\\times" + (num+1) + "}{2})^2 \\]";
        stemp += "\\[\\sum {n}^3 \\space = \\space (\\frac{" + sum + "}{2})^2 \\]";
        stemp += "\\[\\sum {n}^3 \\space = \\space (" + sum1 + ")^2\\]";
        stemp += "\\[\\sum {n}^3 \\space = \\space " + sum2 + "\\]";
        soutput3.innerHTML = stemp;
        renderMathInElement(soutput3);
    }

}

function ssncal()
{
    var num=document.getElementById("ssn").value;
    num = parseInt(num);
    valid=/^([-]{0,1}\d{1,}[\.]{0,1}\d{0,}[ ]?)*$/;
    var sumoutput = document.getElementById("ssnans");
    var sumtemp="";
    if(num=="")
    {
       sumtemp += "\\[Please \\space enter \\space number \\]";
       sumoutput.innerHTML = sumtemp;
       renderMathInElement(sumoutput);
    }
    else if(!valid.test(num))
    {
        sumtemp += "\\[Enter \\space space \\space separated \\space numbers. \\space Use \\space of \\space alphabets \\space and \\space special \\space character \\space is \\space not \\space allowed \\space for \\space calculation \\space purpose \\]";
        sumoutput.innerHTML = sumtemp;
        renderMathInElement(sumoutput);
    }
    else if(num<1){
        sumtemp += "\\[Natural \\space Numbers \\space cannot \\space be \\space negative \\]";
        sumoutput.innerHTML = sumtemp;
        renderMathInElement(sumoutput);
    }
    else{
        var sumN=Math.trunc((num*(num+1)));
        var sum1N = sumN/2;
        sumtemp += "\\[Sum \\space of \\space the \\space First \\space n \\space Natural \\space Numbers \\space is \\]";
        sumtemp += "\\[ \\sum {n} \\space = \\space \\frac{n(n+1)}{2}  \\]";
        sumtemp += "\\[ \\sum {n} \\space = \\space \\frac{" + num + "(" + num + " + 1)}{2} \\]";
        sumtemp += "\\[ \\sum {n} \\space = \\space \\frac{" + num + "\\times" + (num+1) +  "}{2} \\]";
        sumtemp += "\\[ \\sum {n} \\space = \\space \\frac{" + sumN + "}{2} \\]";
        sumtemp += "\\[ \\sum {n} \\space = \\space " + sum1N + "\\]";
        sumoutput.innerHTML = sumtemp;
        renderMathInElement(sumoutput);
    }

}

function sencal(){
    var num=document.getElementById("sen").value;
    num = parseInt(num);
    valid=/^([-]{0,1}\d{1,}[\.]{0,1}\d{0,}[ ]?)*$/;
    var sumoutput = document.getElementById("senans");
    var sumtemp="";
    if(num=="")
    {
       sumtemp += "\\[Please \\space enter \\space number \\]";
       sumoutput.innerHTML = sumtemp;
       renderMathInElement(sumoutput);
    }
    else if(!valid.test(num))
    {
        sumtemp += "\\[Enter \\space space \\space separated \\space numbers. \\space Use \\space of \\space alphabets \\space and \\space special \\space character \\space is \\space not \\space allowed \\space for \\space calculation \\space purpose \\]";
        sumoutput.innerHTML = sumtemp;
        renderMathInElement(sumoutput);
    }
    else if(num<1){
        sumtemp += "\\[Natural \\space Numbers \\space cannot \\space be \\space negative \\]";
        sumoutput.innerHTML = sumtemp;
        renderMathInElement(sumoutput);
    }
    else{
        var sumN=Math.trunc((num*(num+1)));
        sumtemp += "\\[Sum \\space of \\space the \\space First \\space n \\space Even \\space Natural \\space Numbers \\space is \\]";
        sumtemp += "\\[ \\sum {2n} \\space = \\space n(n+1)  \\]";
        sumtemp += "\\[ \\sum {2n} \\space = \\space " + num + "(" + num + " + 1) \\]";
        sumtemp += "\\[ \\sum {2n} \\space = \\space " + num + "\\times" + (num+1) +  " \\]";
        sumtemp += "\\[ \\sum {2n} \\space = \\space " + sumN + "\\]";
        sumoutput.innerHTML = sumtemp;
        renderMathInElement(sumoutput);
    }

}

function ssoncal()
{
    var num=document.getElementById("sson").value;
    num = parseInt(num);
    valid=/^([-]{0,1}\d{1,}[\.]{0,1}\d{0,}[ ]?)*$/;
    var sumoutput1 = document.getElementById("ssonans");
    var sumtemp1="";
    if(num=="")
    {
       sumtemp1 += "\\[Please \\space enter \\space number \\]";
       sumoutput1.innerHTML = sumtemp1;
       renderMathInElement(sumoutput1);
    }
    else if(!valid.test(num))
    {
        sumtemp1 += "\\[Enter \\space space \\space separated \\space numbers. \\space Use \\space of \\space alphabets \\space and \\space special \\space character \\space is \\space not \\space allowed \\space for \\space calculation \\space purpose \\]";
        sumoutput1.innerHTML = sumtemp1;
        renderMathInElement(sumoutput1);
    }
    else if(num<1){
        sumtemp1 += "\\[Natural \\space Numbers \\space cannot \\space be \\space negative \\]";
        sumoutput1.innerHTML = sumtemp1;
        renderMathInElement(sumoutput1);
    }
    else{
        var sumCN= (num**2);
        sumtemp1 += "\\[Sum \\space of \\space the \\space First \\space n \\space Odd \\space Natural \\space Numbers \\space is \\]";
        sumtemp1 += "\\[ \\sum ({2n-1}) \\space = \\space n^{2}  \\]";
        sumtemp1 += "\\[ \\sum ({2n-1}) \\space = \\space" + num + "^{2}" + "\\]";
        sumtemp1 += "\\[ \\sum ({2n-1}) \\space =" + sumCN + "\\]";
        sumoutput1.innerHTML = sumtemp1;
        renderMathInElement(sumoutput1);
    }

}


  function numcubesRangecal()
    {

    var num1=document.getElementById("numrange1").value;
    var num2=document.getElementById("numrange2").value;
    var s="";
    if(num1=="" || num2=="")
    {
       s= "Please enter both numbers";
    }
    else{
        var count = 0;
        s="Number of Perfect Cubes in the given range: ";
        cubes = "Cubes are: ";
        cbrt1 = Math.trunc(Math.cbrt(num1));
        cbrt2 = Math.trunc(Math.cbrt(num2));
        for(var i=cbrt1; i<=cbrt2;i++){
            if(i**3>=num1 && i**3<=num2){
                count++;
                var ans = i**3;
                cubes += ans.toString() + ", ";
            }
        }
        cubes = cubes.substring(0, cubes.length-2);
        s += count;
    }
    document.getElementById("numcubesRangeans").innerHTML=s;
    document.getElementById("numcubesans").innerHTML=cubes;
}


function squaresRangecal()
{
    var num1=document.getElementById("sqrange1").value;
    var num2=document.getElementById("sqrange2").value;
    var s="";
    if(num1=="" || num2=="")
    {
       s= "Please enter both numbers";
    }
    else{
        s="Perfect squares in the given range: ";
        sqrt1 = Math.trunc(Math.sqrt(num1));
        sqrt2 = Math.trunc(Math.sqrt(num2));
        for(var i=sqrt1; i<=sqrt2;i++){
            if(i**2>=num1 && i**2<=num2){
                var ans = i**2;
                s += ans.toString() + "   ";
            }
        }
    }
    document.getElementById("squaresRangeans").innerHTML=s;
}

function cubesRangecal()
{

    var num1=document.getElementById("range1").value;
    var num2=document.getElementById("range2").value;
    var s="";
    let work = document.getElementById("cbrt-workn");
    let print = "<h2>Working Steps </h2> &emsp;";
    if(num1=="" || num2=="")
    {
       s= "Please enter both numbers";
    }
    else{
        var pr ="";
        s="Cubes in the given range: ";
        cbrt1 = Math.trunc(Math.cbrt(num1));
        cbrt2 = Math.trunc(Math.cbrt(num2));
        print += "STEP1 : Take cube root ( only integer part )of the two given inputs<br>";
        print += "So,Cube root of &nbsp;" + num1 + "&nbsp; = &nbsp;" + cbrt1 + "&nbsp; and &nbsp; Cube root of &nbsp;" + num2 +"&nbsp; = &nbsp;"+cbrt2+"<br>";
        print += "STEP2 : Print cubes of &nbsp;"+ cbrt1 +"&nbsp; to &nbsp;"+ cbrt2 +"&nbsp; that comes under the range of &nbsp;"+ cbrt1+"&nbsp; and &nbsp;"+ cbrt2 +"&nbsp; (including &nbsp;"+ cbrt1 +"&nbsp; and &nbsp;"+ cbrt2 +"&nbsp; both)<br>";
        for(var i=cbrt1; i<=cbrt2;i++){
            if(i**3>=num1 && i**3<=num2){
                var ans = i**3;
                pr +=ans.toString() + "   ";
                s += ans.toString() + "   ";
            }
        }
        print += "So, answer = &nbsp;"+pr;
    }
    document.getElementById("cubesRangeans").innerHTML=s;
    work.innerHTML = print;
}

var toDegree = function (radians) {
    return radians * (180 / Math.PI);
}
function segcal()
{
    var a=document.getElementById("segr").value;
    var b=document.getElementById("sega").value;
    var c=document.getElementById("angseg").value;
    var ans="";
    if(a==""||b=="")
    {
        ans="Enter all the values to obtain answer";
    }
    else{

    if(c=="degree")
    {
        b=b/57.296;
    }
   console.log(Math.sin(b));
   var t=Math.sin(b);
   var area= a*a*(b-t)*0.5
    ans="The area of segment is: "+area;
}
document.getElementById("segans").innerHTML=ans;

}

function impcal()
{
    var a=document.getElementById("num").value;
    var b=document.getElementById("den").value;
    var ans="";
    if(a==""||b=="")
    {
        ans="Enter all the required inputs to obtain answer";
    }

    else if(b>=a)
    {
        ans="The value of numerator must be greater than be denominator";
             
    }

    else
    {
        var r=a%b;
        var q=(a-r)/b;
        ans="The required answer is: "+ q +" "+ r+"/"+b.sub();    }
    document.getElementById("impans").innerHTML=ans;


}


function factorial(n){
    let answer = 1;
    if (n == 0 || n == 1){
      return answer;
    }else{
      for(var i = n; i >= 1; i--){
        answer = answer * i;
      }
      return answer;
    }  
  }

function hpcal()
{
    var x=parseInt(document.getElementById("ath").value);
    var y=parseInt(document.getElementById("differ").value);
    var z=parseInt(document.getElementById("totno").value);
    var ansout = document.getElementById("hpans");
    var anstemp ="";
    if(x == "" || y == "" || z == ""){
        anstemp += "\\[Please \\space enter \\space all \\space fields \\]";
        ansout.innerHTML = anstemp;
        renderMathInElement(ansout);
    }
   else if(!isNaN(parseInt(x)) && !isNaN(parseInt(y)) && !isNaN(parseInt(z)))
   {
    var numb = x + ((y - 1)*z);
    var num6 = (1 / numb) ;
    anstemp += "\\[nth \\space Term \\space of \\space HP \\space = \\space \\frac{1}{a+(n-1)d} \\]";
    anstemp += "\\[nth \\space Term \\space of \\space HP \\space = \\space \\frac{1}{" + x +  "+ (" + y + " - 1)" + z + "} \\]";
    anstemp +=  "\\[nth \\space Term \\space of \\space HP \\space = \\space" + (num6).toFixed(3) + "\\]";
    ansout.innerHTML = anstemp;
    renderMathInElement(ansout);
   }
   else
   {
     anstemp += "\\[Enter \\space numbers \\space only. \\space Blank \\space inputs \\space are \\space not \\space allowed \\]";
     ansout.innerHTML = anstemp;
     renderMathInElement(ansout);
   }
}

function ppcal()
{
    var a=document.getElementById("lamb").value;
    var b=document.getElementById("occ").value;
    var ans="";
    if(a==""||b=="")
    {
        ans="Please enter all the values";
    }

    else
    {
           var s=a**b;
           var y=(2.718)**(-a);
           var z=factorial(b);
           var num= (s*y)/z;
           ans="The answer is:" + num;
    }

    document.getElementById("ppans").innerHTML=ans;

}

function eircal()
{
    var a=document.getElementById("air").value;
    var b=document.getElementById("nop").value;
    var c=document.getElementById("cprd").value;
    var ans="";
    var result= document.getElementById("eirans");
    if(a==""||b==""||c=="")
    {
        ans="\\[Enter \\space all \\space the \\space values \\space to \\space obtain \\space answer\\]";
    }

    else
    {
        var R = parseInt(a);
        var x=R/100;
        ans ="\\[Interest \\space Rate \\space per \\space period = \\frac{R}{100} = \\frac{" + R + "}{100} = " + x + "\\]";
        var y=parseInt(c);
        var z=parseInt(b);
        var rate_period= ((1+(x/z))**z)-1;
        var rate_p=rate_period*100;
        ans +="\\[Effective \\space interest \\space rate \\space per \\space period(i) \\space \\] \\[=(1+ \\frac{r}{m})^{m}-1\\]";
        ans +="\\[=(1+\\frac{" + x + "}{" + z + "})^{" + z + "})-1\\]";
        ans +="\\[="+ rate_period +"\\]";
        ans +="\\[Effective \\space interest \\space Rate \\space per \\space period=" + rate_period +"\\space X \\space 100=" + rate_p + "\\% \\]";
    }
    result.innerHTML = ans;
    renderMathInElement(result);

}
function errpercal()
{
    var a=document.getElementById("acval").value;
    var b=document.getElementById("expval").value;
    var ans="";
    if(a==""||b=="")
    {
        ans="Please enter all the values";
    }
    else{
    var c= ((b-a)/a)*100;
    ans="The error percentage is: "+c+"%";
    }
    document.getElementById("errperans").innerHTML=ans;

}


function wmccal()
{
    var num1=document.getElementById("wmcx").value;
    var num2=document.getElementById("wmcw").value;
    if(num1==""||num2=="")
    {
        ans="Please enter all the values";
    }
    else{

    num1=num1.trim();
    num1 = num1.split(" ");
    var len1=parseInt(num1.length);
    var number1=[]
    for (i = 0; i < len1; i++) 
    {
        number1[i] = parseFloat(num1[i].trim());
    }

    num2=num2.trim();
    num2 = num2.split(" ");
    var len2=parseInt(num2.length);
    var number2=[]
    for (i = 0; i < len2; i++) 
    {
        number2[i] = parseFloat(num2[i].trim());
    }
   
    if(len1!=len2)
    {
        ans="Your number of data and weight are not equal ";
    }
    else
    {
        var ans1=[];
        var sum=0, wsum=0;
        for (i = 0; i < len1; i++) 
        {
            ans1[i] = number2[i]*number1[i];
            sum+=ans1[i];
            wsum+=number2[i];
        }

        for (i = 0; i < len1; i++) 
        {
            console.log(ans[i]);
        }

        console.log(wsum);
        console.log(sum);
        var wm=sum/wsum;
        ans="The calculated weighted mean is: "+wm;

    }
    
    }
    document.getElementById("wmcans").innerHTML=ans;
}

function covcalcu(){
    var num1=document.getElementById("setx").value;
    var num2=document.getElementById("sety").value;
    valid=/^([-]{0,1}\d{1,}[\.]{0,1}\d{0,}[ ]?)*$/;
    var s="";
    if(num1==""||num2=="") {
       s= "Please enter number";
    }else if(!valid.test(num1&&num2))
    {
        s= "Enter space separated numbers. Use of alphabets and special character is not allowed for calculation purpose";
    } else{
    num1=num1.trim();
    num1 = num1.split(" ");
    var len1=parseInt(num1.length);
    var number1=[], sum1=0, sum2=0;
    for (i = 0; i < len1; i++){
        number1[i] = parseFloat(num1[i].trim());
        sum1+=number1[i];
    }
    sum1=sum1/len1;
    num2=num2.trim();
    num2 = num2.split(" ");
    var len2=parseInt(num2.length);
    if (len1 == 1 || len2 == 1){
        document.getElementById("covans").innerHTML= "Please enter more than value for each data set";
        return;
    }
    if(len1!=len2) {
        s="Your datasets X and Y contain different numbers of element";
    } else{
    var number2=[];
    for (i = 0; i < len2; i++) {
        number2[i] = parseFloat(num2[i].trim());
        sum2+=number2[i];
    }
    sum2=sum2/len2;
    var covsum=0;
    for (i = 0; i < len2; i++) {
        var d=number2[i]-sum2;
        var f=number1[i]-sum1;
        covsum+=(d*f);
    }
    var cov=(covsum)/(len2-1);
    s="The calculated covariance is: "+cov;
    }
}

document.getElementById("covans").innerHTML=s;
}

function covcal() {
    var num=document.getElementById("cvsd").value;
    var s=""; 
    valid=/^([-]{0,1}\d{1,}[\.]{0,1}\d{0,}[ ]?)*$/;
    if(num==""){
       s= "Please enter number";
    } else if(!valid.test(num)){
        s= "Enter space separated numbers. Use of alphabets and special character is not allowed for calculation purpose";
    } else{
    num=num.trim();
    num = num.split(" ");
    var len=parseInt(num.length);
    if (len == 1){
        document.getElementById("cvans").innerHTML= "Please enter more than one value";
        return;
    }
    var number=[]
    for (i = 0; i < len; i++) {
        number[i] = parseFloat(num[i].trim());
    }
    var sum=0;
    for (i = 0; i < len; i++) {
       sum=sum+number[i];
    }
    var mean=sum/len;
    var varrzlt=0;
    for (i = 0; i < len; i++) {
        varrzlt = varrzlt + ((number[i]-mean)**2);
    }
    varrzlt = varrzlt/(len-1);
    var sdev = Math.sqrt(varrzlt);
    s="The Coeffecient of Variation is: "+sdev/mean;
    }
    document.getElementById("cvans").innerHTML=s;
}

function rmscal()
{
    var num=document.getElementById("rmi").value;
    var ans="";
    if(num=="")
    {
        ans="Please enter all the values";
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
            sum=sum+(number[i]**2);
        }

        sum=sum/len;
        sum=Math.sqrt(sum);
        ans="The root mean square of given input is: "+sum;
        
    }
    document.getElementById("rmsans").innerHTML=ans;

}





function zscorecal()
{ 
    var a = parseFloat(document.getElementById("rawscore").value);
    var b = parseFloat(document.getElementById("ppmean").value);
    var c = parseFloat(document.getElementById("stdtn").value);
    var ans = document.getElementById("zscoreans");
    var temp = "";
    var z= (a-b)/c;
    if(isNaN(a) || isNaN(b) || isNaN(c))
    {
        temp += "\\[Please \\space enter \\space all \\space the \\space values \\]";
        ans.innerHTML = temp;
        renderMathInElement(ans);
    }
    else
    {
        if(b<0){
            temp += "\\[Z \\space Score \\space = \\space \\frac{Raw \\space Score \\space (X) \\space - \\space Population \\space Mean \\space (μ)}{Standard \\space Deviation \\space (σ)} \\]"
            temp += "\\[Z \\space Score \\space = \\space \\frac {" + a + "- (" + b + ")}{" + c + "} \\space = \\space \\frac{" + (a-b) + "}{" + c + "} \\]";
            temp += "\\[Z \\space Score \\space = \\space " + z.toFixed(4) + " \\]"
            ans.innerHTML = temp;
            renderMathInElement(ans);
        }
        else{
              temp += "\\[Z \\space Score \\space = \\space \\frac{Raw \\space Score \\space (X) \\space - \\space Population \\space Mean \\space (μ)}{Standard \\space Deviation \\space (σ)} \\]"
              temp += "\\[Z \\space Score \\space = \\space \\frac {" + a + " - " + b + "}{" + c + "} \\space = \\space \\frac{" + (a-b) + "}{" + c + "} \\]";
              temp += "\\[Z \\space Score \\space = \\space " + z.toFixed(4) + " \\]"
              ans.innerHTML = temp;
              renderMathInElement(ans);
    }
}
}

function slpsolve()
{
    var a=document.getElementById("slx1").value;
    var b=document.getElementById("sly1").value;
    var c=document.getElementById("slx2").value;
    var d=document.getElementById("sly2").value;
    var ans="";
    if(a==""||b==""||c==""||d=="")
    {
        ans="Please enter all values to calculate slope";
    }
    else
    {
        var p=(d-b)/(c-a);
        ans="Calculated slope is: "+p;
    }
    document.getElementById("slpans").innerHTML=ans;

}

function suppangcal(){
    var a=document.getElementById("ang").value;
    var ans="";
    if(a==""){
        ans="Enter the angle to find the supplementary";
    } else{
        var t=parseInt(a);
        var v=180-t;
        ans="\\[The \\space supplementary \\space angle \\space of \\space"+a+" \\space will \\space be \\newline 180 \\degree \\space - \\space t \\degree \\newline 180 \\degree \\space - \\space "+t+" \\degree \\newline = \\space "+v+" \\degree \\]";
    }
    document.getElementById("suppangans").innerHTML=ans;
    renderMathInElement(document.getElementById("suppangans"));
}

function suppangvercal(){
    var a=document.getElementById("ang1").value;
    var b=document.getElementById("ang2").value;
    var ans="";
    if(a==""||b==""){
        ans="Enter both angles to verify";
    } else{
        var x=parseInt(a), y=parseInt(b);
        if(x+y==180)
            ans="\\[Here \\space \\space "+a+" \\degree \\space + \\space "+b+" \\degree \\space = 180 \\degree \\newline Hence, \\newline Both \\space the \\space entered \\space angles \\space "+a+"\\degree \\space and \\space "+b+"\\degree \\newline are \\space Supplementary\\]";
        else
            ans="\\[Here \\space \\space "+a+" \\degree \\space + \\space "+b+" \\degree \\space != 180 \\degree \\newline Hence, \\newline Both \\space the \\space entered \\space angles \\space "+a+"\\degree \\space and \\space "+b+"\\degree \\newline are \\space Not \\space Supplementary\\]";
    }
    document.getElementById("suppangverans").innerHTML=ans;
    renderMathInElement(document.getElementById("suppangverans"));
}

function faccal(){
    var a=document.getElementById("facno").value;
    var ans="";
    if(a=="")
    {
        ans="Please enter number to find factors";
    }
    else
    {
        var factors=[];
        ans="Factors of "+a+ " are: ";
        for(var k=1;k<=a;k++)
        {
            if(a%k==0)
            {
                factors.push(k);
            }
        }

        for(var i=0;i<factors.length;i++)
        {
            ans+=factors[i]+"  ";
        }


    }
    document.getElementById("facans").innerHTML=ans;
}


function facpaircal()
{
    a=document.getElementById("facno").value;    
    var ans="";
    if(a=="")
    {
        ans="Please enter number to find pair factors";
    }
    else
    {
        var number1 = 0;
        var number2 = a;
        var answers=[];
        for (var i = 1; i < a; i++)
        {
            if (a % i == 0)
            {
            number1 = i;
              number2 = a/ i;
              if (number2 >= number1)
              {
              answers.push(number1);
              answers.push(number2);
              }
              else
              {
                  break;
              }
           }
        }

        ans="Pair factors are: ";
        for(var i =0;i<answers.length-1;i=i+2)
        {
            ans+="( "+answers[i]+","+answers[i+1]+" )  ";
        }
    }
 document.getElementById("facans").innerHTML=ans;
}


function skewcal()
{   var num=document.getElementById("skewinput").value;
var ans="";
if(num=="")
{
    ans="Please enter datasets";
}
else{
    num=num.trim();
    num = num.split(" ");
    var len=parseInt(num.length);
   var sum=0;
    var number=[]
    for (i = 0; i < len; i++) {
        number[i] = parseFloat(num[i].trim());
        sum+=number[i];
    }
    sum=sum/len;
    var ansno=0;
    for (i = 0; i < len; i++)
     {
       var g=(number[i]-sum);
       g=g**3;
       ansno+=g;
     }

     var varrzlt=0;
     for (i = 0; i < len; i++) {
         varrzlt = varrzlt + ((number[i])-sum)*((number[i])-sum);
     }

     varrzlt = varrzlt/(len-1);
     var sampstddev=Math.sqrt(varrzlt);
     sampstddev=sampstddev**3;
     var rzlt= ansno/((len-1)*sampstddev);
     ans="The skewness is: "+rzlt;
}
document.getElementById("skewans").innerHTML=ans;
}
function clockcal()
{
    a=document.getElementById("hclock").value;  
    b=document.getElementById("mclock").value;   
    var ans="";
    if(a==""||b=="")
    {
        ans="Please enter both minutes and hour to find angle";
    }
    else
    {
        a=parseFloat(a);
        b=parseFloat(b);
        var angmin=b*6;
        var anghour=30*a+0.5*b

        ans="Angle from minute to hour hands: "+Math.abs(anghour-angmin)+" degree";
        ans+="<br>"
        ans+="Angle from hour to minute hands: "+Math.abs(360-Math.abs(anghour-angmin))+" degree";
    }
    document.getElementById("clockans").innerHTML=ans;
}

function traprzlt()
{

    a=parseFloat(document.getElementById("tr1").value);    
    b=parseFloat(document.getElementById("tr2").value);    
    c=parseFloat(document.getElementById("tr3").value);    
    d=parseFloat(document.getElementById("tr4").value);    
    var k=(a+b)/2;
    var traparea= c*k;
    var trapvol=c*d*k;
    var output =  document.getElementById("trapans");
    var temp = "";
    if(isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d)){
        temp += "\\[ Please \\space enter \\space all \\space fields \\]";
        output.innerHTML = temp ;
        renderMathInElement(output);
    }
    else{
   temp += "\\[" + c + "\\times \\frac{(" + a + "+" + b + ")}{2}  \\]";
   temp += "\\[" + c + "\\times" + k + " \\]";
   temp += "\\[ Area \\space of \\space Trapezoid \\space is \\space" + traparea + "\\]";
   temp += "\\[" + c + "\\times" + d + "\\times \\frac{(" + a + "+" + b + ")}{2}  \\]";
   temp += "\\[" + c + "\\times" + d + "\\times" + k + "\\]";
   temp += "\\[ Volume \\space of \\space Trapezoid \\space is \\space" + trapvol + "\\]";
   output.innerHTML = temp ;
   renderMathInElement(output);
    }
}


function perrankcal()
{
    var num=document.getElementById("perrank").value;
    var num2=document.getElementById("peryour").value;
    valid=/^([-]{0,1}\d{1,}[\.]{0,1}\d{0,}[ ]?)*$/;
    var s="";
    if(num==""||num2=="")
    {
       s= "Please enter number";
    }
    else if(!valid.test(num))
    {
        s= "Enter space separated numbers. Use of alphabets and special character is not allowed for calculation purpose";
    }
    else{
    num=num.trim();
    num = num.split(" ");
    var len=parseInt(num.length);
   
    var number=[]
    for (i = 0; i < len; i++) {
        number[i] = parseFloat(num[i].trim());
    }
    num2=parseFloat(num2);
    var sum=0, count=0;
    for(var i=0; i<len;i++)
    {
         if(number[i]<=num2)
         {
             count++;
         }
    }
    var pr= (count/len)*100;
    var s="The percentile rank for given marks is: "+pr;
}
document.getElementById("perrankans").innerHTML=s;
}
function oocal()
{
    var num4=document.getElementById("oocx").value;
    ans="";
    if(num4=="")
    {
        ans="Please enter number";
    }
    else
    {
        var len=num4.length;
        var count=0;
        for(var b=0;b<len;b++)
        {
            if(num4[b]=='.')
            {
                break;
            }
            else 
            {count++};
        }
        ans="The order of mangnitude is : "+(count-1);
    }
    document.getElementById("ooans").innerHTML=ans;
}
function manhatcal()
{
    var num1=document.getElementById("mdx1").value;
    var num2=document.getElementById("mdx2").value;
    var num3=document.getElementById("mdx3").value;
    var num4=document.getElementById("mdx4").value;
    ans="";
    if(num1==""||num2==""||num3==""||num4=="")
    {
        ans="Please fill all the field";
    }
    else
    {
        num1=parseFloat(num1);
        num2=parseFloat(num2);
        num3=parseFloat(num3);
        num4=parseFloat(num4);

        var f=Maths.abs(num1-num3)+Maths.abs(num2-num4);
        ans="The calculated Manhattan Distance is: "+f;
    }
    document.getElementById("manhatans").innerHTML=ans;
}
function mifcal()
{
    var num1=document.getElementById("mians1").value;
    var num2=document.getElementById("mians2").value;
    ans="";
    if(num1==""||num2=="")
    {
        ans="Please fill all the field";
    }
    else
    {
        num1=parseFloat(num1);
        num2=parseFloat(num2);
        var d=num2/num1;
        ans="Multiplicative inverse of given number in decimal is: "+d;
    }
    document.getElementById("mians").innerHTML=ans;
}
function midcal()
{
    var num1=document.getElementById("mians1").value;
    var num2=document.getElementById("mians2").value;
    ans="";
    if(num1==""||num2=="")
    {
        ans="Please fill all the field";
    }
    else
    {
        num1=parseFloat(num1);
        num2=parseFloat(num2);
        ans="Multiplicative inverse of given number in fraction is: "+num2+" / "+num1;
    }
    document.getElementById("mians").innerHTML=ans;

}

function hypergeos2cal()
{
    var num1=document.getElementById("hypergeos12").value;
    var num2=document.getElementById("hypergeos22").value;
    var num3=document.getElementById("hypergeos32").value;
    var num4=document.getElementById("hypergeos42").value;
    ans="";
    if(num1==""||num2==""||num4==""||num3=="")
    {
        ans="Please fill all the field";
    }
    else
    {
        num1=parseFloat(num1);
        num2=parseFloat(num2);
        num3=parseFloat(num3);
        num4=parseFloat(num4);
      var d= (num2*num3)/num4;
       ans="The value of hypergeometric distribution's mean is : "+d;
   
    }
    document.getElementById("hypergeos2ans").innerHTML=ans;
}

function hypergeosvarcal()
{
    var num1=document.getElementById("hypergeos12").value;
    var num2=document.getElementById("hypergeos22").value;
    var num3=document.getElementById("hypergeos32").value;
    var num4=document.getElementById("hypergeos42").value;
    ans="";
    if(num1==""||num2==""||num4==""||num3=="")
    {
        ans="Please fill all the field";
    }
    else
    {
        num1=parseFloat(num1);
        num2=parseFloat(num2);
        num3=parseFloat(num3);
        num4=parseFloat(num4);
      var d= (num2*num3*(num4-num3)*(num4-num2))/(num4*num4*(num4-1));
       ans="The value of hypergeometric distribution's variance is : "+d;
   
    }
    document.getElementById("hypergeos2ans").innerHTML=ans;
}
