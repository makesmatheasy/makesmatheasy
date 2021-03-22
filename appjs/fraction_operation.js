function display_fractions(){
    document.getElementById('fractions').style.display = 'block';
}

function additon(){

    var n1 = parseInt(document.getElementById('one_add').value);
    var d1 = parseInt(document.getElementById('two_add').value);
    var n2 = parseInt(document.getElementById('three_add').value);
    var d2 = parseInt(document.getElementById('four_add').value);

    document.getElementById('a').innerHTML =n1;
    document.getElementById('b').innerHTML = d1;
    document.getElementById('c').innerHTML = n2;
    document.getElementById('d').innerHTML = d2;

    document.getElementById('a1').innerHTML = n1;
    document.getElementById('b1').innerHTML = d1;
    document.getElementById('c1').innerHTML = n2;
    document.getElementById('d1').innerHTML = d2;
    document.getElementById('b2').innerHTML = d1;
    document.getElementById('d2').innerHTML = d2;


    document.getElementById('e').innerHTML = n1*d2;
    document.getElementById('g').innerHTML = n2*d1;
    document.getElementById('f').innerHTML = d1*d2;

    var top = (n1*d2) +(n2*d1);
    var bot = (d1*d2);
    document.getElementById('t').innerHTML = top;
    document.getElementById('q').innerHTML = bot

    var ans = top / bot;
    document.getElementById('ans').innerHTML = ans;


    

}

function subtractiom(){

    var n1 = parseInt(document.getElementById('one_sub').value);
    var d1 = parseInt(document.getElementById('two_sub').value);
    var n2 = parseInt(document.getElementById('three_sub').value);
    var d2 = parseInt(document.getElementById('four_sub').value);

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
    
}

function Multiplication(){
    
}

function mixed_to_improper(){
    
}

function improper_to_mixed(){
    
}