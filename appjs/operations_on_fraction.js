function display_fractions(){
    document.getElementById('fractions').style.display = 'block';
 }

 function additon(){

     var n1 = parseInt(document.getElementById('one_add').value);
     var d1 = parseInt(document.getElementById('two_add').value);
     var n2 = parseInt(document.getElementById('three_add').value);
     var d2 = parseInt(document.getElementById('four_add').value);

     document.getElementById('addz').innerHTML = "";

     if ((document.getElementById('two_add').value) ==0 || (document.getElementById('four_add').value) == 0)
     {
         document.getElementById('addz').innerHTML = "Your fraction is undefined because it has zero denominator";
         return;
     }
      if(Number.isNaN(d1) || Number.isNaN(d2) || Number.isNaN(n1) || Number.isNaN(n2) )
      {
          window.alert("Enter an Integer")
          return;
      }

     document.getElementById('sum_a').innerHTML =n1;
     document.getElementById('sum_b').innerHTML = d1;
     //document.getElementById('bz').innerHTML = d1;
     document.getElementById('sum_c').innerHTML = n2;
     document.getElementById('sum_d').innerHTML = d2;

    document.getElementById('sum_a1').innerHTML = n1;
    document.getElementById('sum_b1').innerHTML = d1;
    document.getElementById('sum_c1').innerHTML = n2;
    document.getElementById('sum_d1').innerHTML = d2;
    document.getElementById('sum_b2').innerHTML = d1;
    document.getElementById('sum_d2').innerHTML = d2;
    document.getElementById('sum_e1').innerHTML = n1*d2;
    document.getElementById('sum_g').innerHTML = n2*d1;
    document.getElementById('sum_f').innerHTML = d1*d2;
    var top = (n1*d2) +(n2*d1);
    var bot = (d1*d2);
    document.getElementById('sum_t').innerHTML = top;
    document.getElementById('sum_q').innerHTML = bot
    var ans = top / bot;
    document.getElementById('sum_ans').innerHTML = ans;
    
}
function subtractiom(){
    var n1 = parseInt(document.getElementById('one_sub').value);
    var d1 = parseInt(document.getElementById('two_sub').value);
    var n2 = parseInt(document.getElementById('three_sub').value);
    var d2 = parseInt(document.getElementById('four_sub').value);

    document.getElementById('subz').innerHTML = "";

    if ((document.getElementById('two_sub').value) ==0 || (document.getElementById('four_sub').value) == 0)
    {
        document.getElementById('subz').innerHTML = "Your fraction is undefined because it has zero denominator";
        return;
    }

    if(Number.isNaN(d1) || Number.isNaN(d2) || Number.isNaN(n1) || Number.isNaN(n2) )
    {
        window.alert("Enter an Integer")
        return;
    }

    document.getElementById('suba').innerHTML =n1;
    document.getElementById('subb').innerHTML = d1;
    document.getElementById('subc').innerHTML = n2;
    document.getElementById('subd').innerHTML = d2;
    document.getElementById('suba1').innerHTML = n1;
    document.getElementById('subb1').innerHTML = d1;
    document.getElementById('subc1').innerHTML = n2;
    document.getElementById('subd1').innerHTML = d2;
    document.getElementById('subb2').innerHTML = d1;
    document.getElementById('subd2').innerHTML = d2;
    document.getElementById('sube').innerHTML = n1*d2;
    document.getElementById('subg').innerHTML = n2*d1;
    document.getElementById('subf').innerHTML = d1*d2;
    var top = (n1*d2) - (n2*d1);
    var bot = (d1*d2);
    document.getElementById('subt').innerHTML = top;
    document.getElementById('subq').innerHTML = bot
    var ans = top / bot;
    document.getElementById('subans').innerHTML = ans;
    
    
 }

 function division(){

     var n1 = parseInt(document.getElementById('one_div').value);
     var d1 = parseInt(document.getElementById('two_div').value);
     var n2 = parseInt(document.getElementById('three_div').value);
     var d2 = parseInt(document.getElementById('four_div').value);
     document.getElementById('divaz').innerHTML = "";

    if ((document.getElementById('two_div').value) ==0 || (document.getElementById('four_div').value) == 0)
    {
        document.getElementById('divaz').innerHTML = "Your fraction is undefined because it has zero denominator";
        return;
    }

    if(Number.isNaN(d1) || Number.isNaN(d2) || Number.isNaN(n1) || Number.isNaN(n2) )
    {
        window.alert("Enter an Integer")
        return;
    }

     document.getElementById('diva').innerHTML = n1;
     document.getElementById('divb').innerHTML = d1;
     document.getElementById('divc').innerHTML = n2;
     document.getElementById('divd').innerHTML = d2;

     document.getElementById('diva1').innerHTML = n1;
     document.getElementById('divb1').innerHTML = d1;
     document.getElementById('divc1').innerHTML = d2;
     document.getElementById('divd1').innerHTML = n2;

     document.getElementById('diva2').innerHTML = n1;
     document.getElementById('divb2').innerHTML = d1;
     document.getElementById('divc2').innerHTML = n2;
     document.getElementById('divd2').innerHTML = d2;

     var top = n1 * d2;
     var bot = d1 * n2;

     document.getElementById('divt').innerHTML = top;
     document.getElementById('divq').innerHTML = bot

     var ans = top / bot;
     document.getElementById('divans').innerHTML = ans;

 }

 function multiplication1(){

     var n1 = parseInt(document.getElementById('one_mul').value);
     var d1 = parseInt(document.getElementById('two_mul').value);
     var n2 = parseInt(document.getElementById('three_mul').value);
     var d2 = parseInt(document.getElementById('four_mul').value);

     document.getElementById('mulz').innerHTML = "";

     if ((document.getElementById('two_mul').value) ==0 || (document.getElementById('four_mul').value) == 0)
     {
         document.getElementById('mulz').innerHTML = "Your fraction is undefined because it has zero denominator";
         return;
     }
     if(Number.isNaN(d1) || Number.isNaN(d2) || Number.isNaN(n1) || Number.isNaN(n2) )
      {
          window.alert("Enter an Integer")
          return;
      }
    

     document.getElementById('mula').innerHTML = n1;
     document.getElementById('mulb').innerHTML = d1;
     document.getElementById('mulc').innerHTML = n2;
     document.getElementById('muld').innerHTML = d2;

     document.getElementById('mula1').innerHTML = n1;
     document.getElementById('mulb1').innerHTML = d1;
     document.getElementById('mulc1').innerHTML = n2;
     document.getElementById('muld1').innerHTML = d2;

     var top = n1 * n2;
     var bot  = d1 * d2;


     document.getElementById('mult').innerHTML = top;
     document.getElementById('mulq').innerHTML = bot

     var ans = top / bot;
     document.getElementById('mulans').innerHTML = ans;

 }

 function mixed_to_improper(){


     var n1 = parseInt(document.getElementById('one_mix').value);
     var d1 = parseInt(document.getElementById('two_mix').value);
     var s = parseInt(document.getElementById('side_mix').value);

     if(Number.isNaN(d1) || Number.isNaN(s) || Number.isNaN(n1) )
      {
          window.alert("Enter an Integer")
      }

     document.getElementById('mixa').innerHTML = n1;
     document.getElementById('side').innerHTML = s;
     document.getElementById('mixb').innerHTML = d1;

     document.getElementById('mixa1').innerHTML = n1;
     document.getElementById('mixs').innerHTML = s;
     document.getElementById('mixb1').innerHTML = d1;
     document.getElementById('mixb2').innerHTML = d1;

     var top = n1+(s*d1);
     var bot = d1;

      document.getElementById('mixt').innerHTML = top;
     document.getElementById('mixq').innerHTML = bot

     var ans = top / bot;
     document.getElementById('mixans').innerHTML = ans;


 }

 function improper_to_mixed(){

    var n1 = parseInt(document.getElementById('one_imp').value);
    var d1 = parseInt(document.getElementById('two_imp').value);

    document.getElementById('impr').innerHTML = "";
    document.getElementById('impq').innerHTML = "";
    document.getElementById('impb1').innerHTML = ""; 

    if (d1 === n1){
        document.getElementById('impa').innerHTML = n1;
        document.getElementById('impb').innerHTML = d1;

        document.getElementById('impr').innerHTML = "1";
        document.getElementById('impq').innerHTML = "";
        document.getElementById('impb1').innerHTML = ""; 

       return 0; }

    if (d1 === 0){ 

        document.getElementById('impa').innerHTML = n1;
        document.getElementById('impb').innerHTML = d1;

        document.getElementById('impr').innerHTML = "Infinity";
        document.getElementById('impq').innerHTML = "";
        document.getElementById('impb1').innerHTML = ""; 

       return 0; }
   
   if (n1 === 0){ 
       
        document.getElementById('impa').innerHTML = n1;
        document.getElementById('impb').innerHTML = d1;

        document.getElementById('impr').innerHTML = "0";
        document.getElementById('impq').innerHTML = "";
        document.getElementById('impb1').innerHTML = "";
         
        return 0; }

    if(Number.isNaN(d1) || Number.isNaN(n1) )
     {
         window.alert("Enter an Integer")
         return;
     }

    document.getElementById('impa').innerHTML = n1;
    document.getElementById('impb').innerHTML = d1;

    const arr = [n1, d1];

        const properToMixed = arr => {
            const quotient = Math.floor(arr[0] / arr[1]);
            const remainder = arr[0] % arr[1];
            if(n1<d1){
                    document.getElementById('impr').innerHTML = n1;
                    document.getElementById('impq').innerHTML = 1;
                    document.getElementById('impb1').innerHTML = d1;
            }
            else if(remainder === 0){
                return [quotient];
            }else{
                    var q = quotient;
                    var r = remainder;
                    var b = d1;

                    document.getElementById('impr').innerHTML = r;
                    document.getElementById('impq').innerHTML = q;
                    document.getElementById('impb1').innerHTML = b;

            };
        };
        properToMixed(arr);
}