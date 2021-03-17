
function display_log(){
    document.getElementById('log_values').style.display = "block";
}


function cal_log(){

    var number1 = parseInt(document.getElementById('num').value);
    var base = parseInt(document.getElementById('base').value);

    var ans =  Math.log(number1)/Math.log(base);
    document.getElementById('answer').innerHTML = ans;
}