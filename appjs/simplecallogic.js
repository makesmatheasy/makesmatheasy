var start,end,diff=0;
//Backspace button 
var backbtn=document.getElementById("backspace");
backbtn.addEventListener("mousedown",function(){
    start=new Date();
});

backbtn.addEventListener("mouseup",function(){
    end=new Date();
});
function back(vlu) {
    var newstr;
    if (document.getElementById('txt').value == "Invalid Expression") {
        newStr = "";
    } 
    else if((diff=end-start)>=1000){
        newStr = "";
    }
    else {
        newStr = vlu.slice(0, -1);
    }
    document.getElementById('txt').value = newStr;
}

function replaceAll(string, search, replace) {
    return string.split(search).join(replace);
}

function calsol(va) {           //oninput call this
    va = va.replace(/\s+/g, '');
    try {
        var solution =nerdamer(va).evaluate().toString();
        var soo = document.getElementById('txt').value = va;
        document.getElementById("soltxt").value = solution;
    } catch (err) {
        document.getElementById("soltxt").value = "";
    }
}

function ans(hj) {
    document.getElementById('txt').value = hj;

    document.getElementById('soltxt').value = '';


}

function calsq(valui) {
    valui = valui.replace(/\s+/g, '');
    try {
        document.getElementById('txt').value = valui;
        document.getElementById('soltxt').value = nerdamer.sqrt(valui).toString();
    } catch (e) {
        document.getElementById('soltxt').value = "Invalid Expression";
    }
}

function chh(value) {
    if (value == "") {
        document.getElementById('soltxt').value = "";
    }
}

function calsoleq(va) {
    va = va.replace(/\s+/g, '');
    try {
        if (document.getElementById('soltxt').value != '') {
            ans(document.getElementById('soltxt').value);
        }
    } catch (err) {
        document.getElementById('soltxt').value = "Invalid Expression";
    }
}

function more() {
    var one = document.getElementById('one');
    var two = document.getElementById('two');
    var three = document.getElementById('three');
    var four = document.getElementById('four');
    var five = document.getElementById('five');
    var percent = document.getElementById('percent');
    var six = document.getElementById('six');
    var seven = document.getElementById('seven');
    var eight = document.getElementById('eight');
    var nine = document.getElementById('nine');
    var zero = document.getElementById('zero');
    var dot = document.getElementById('dot');

    if (one.innerText == "1") {
        one.innerText = 'asin('
    } else {
        one.innerText = '1'
    }

    if (two.innerText == "2") {
        two.innerText = 'acos('
    } else {
        two.innerText = '2'
    }

    if (three.innerText == "3") {
        three.innerText = 'atan('
    } else {
        three.innerText = '3'
    }

    if (four.innerText == "4") {
        four.innerText = 'csc('
    } else {
        four.innerText = '4'
    }

    if (five.innerText == "5") {
        five.innerText = 'sec('
    } else {
        five.innerText = '5'
    }

    if (six.innerText == "6") {
        six.innerText = 'cot('
    } else {
        six.innerText = '6'
    }

    if (seven.innerText == "7") {
        seven.innerText = 'sin('
    } else {
        seven.innerText = '7'
    }

    if (eight.innerText == "8") {
        eight.innerText = 'cos('
    } else {
        eight.innerText = '8'
    }

    if (nine.innerText == "9") {
        nine.innerText = 'tan('
    } else {
        nine.innerText = '9'
    }

    if (zero.innerText == "0") {
        zero.innerText = 'pi'
    } else {
        zero.innerText = '0'
    }

    if (dot.innerText == ".") {
        dot.innerText = 'log('
    } else {
        dot.innerText = '.'
    }

    if (percent.innerText == "%") {
        percent.innerText = 'DEG'
    } else {
        percent.innerText = '%'
    }
    if(sqrt.innerText=="√"){
        sqrt.innerText='log10('
    }
    else{
        sqrt.innerText='√'
    }

    
}

function todeci() {
    var el = document.getElementById('deci');
    var val = document.getElementById('soltxt').value;
    if (el.innerText == "Deci.") {
        var decisol=eval(val);
        if(decisol!=undefined){
            document.getElementById('soltxt').value = decisol;
            el.innerText = "Frac."
        }else{
            document.getElementById('soltxt').value = document.getElementById('txt').value;
        }
    } else {
        el.innerText = "Deci.";
        calsol(document.getElementById('txt').value);
    }
}
// All on-click EventListener..........................
document.getElementById('percent').addEventListener("click", function () {
    if (document.getElementById('percent').innerText == "%") {
        document.getElementById('txt').value += this.innerText; calsol(document.getElementById('txt').value);    }
    else if (document.getElementById('percent').innerText == "RAD") {
        document.getElementById("percent").innerText = "DEG";
    } else {
        document.getElementById("percent").innerText = "RAD";
    }
});
document.getElementById('seven').addEventListener("click", function () {
    document.getElementById('txt').value += this.innerText;
    calsol(document.getElementById('txt').value);
    if (document.getElementById('seven').innerText != "7" && document.getElementById('percent').innerText == "RAD") {
        document.getElementById('txt').value += "(pi/180)";
        calsol(document.getElementById('txt').value);
    }
});
document.getElementById('eight').addEventListener("click", function () {
    document.getElementById('txt').value += this.innerText;
    calsol(document.getElementById('txt').value);
    if (document.getElementById('eight').innerText != "8" && document.getElementById('percent').innerText == "RAD") {
        document.getElementById('txt').value += "(pi/180)";
        calsol(document.getElementById('txt').value);
    }
});
document.getElementById('nine').addEventListener("click", function () {
    document.getElementById('txt').value += this.innerText;
    calsol(document.getElementById('txt').value);
    if (document.getElementById('nine').innerText != "9" && document.getElementById('percent').innerText == "RAD") {
        document.getElementById('txt').value += "(pi/180)";
        calsol(document.getElementById('txt').value);
    }
});
document.getElementById('four').addEventListener("click", function () {
    document.getElementById('txt').value += this.innerText;
    calsol(document.getElementById('txt').value);
    if (document.getElementById('four').innerText != "4" && document.getElementById('percent').innerText == "RAD") {
        document.getElementById('txt').value += "(pi/180)";
        calsol(document.getElementById('txt').value);
    }
});
document.getElementById('five').addEventListener("click", function () {
    document.getElementById('txt').value += this.innerText;
    calsol(document.getElementById('txt').value);
    if (document.getElementById('five').innerText != "5" && document.getElementById('percent').innerText == "RAD") {
        document.getElementById('txt').value += "(pi/180)";
        calsol(document.getElementById('txt').value);
    }
});
document.getElementById('six').addEventListener("click", function () {
    document.getElementById('txt').value += this.innerText;
    calsol(document.getElementById('txt').value);
    if (document.getElementById('six').innerText != "6" && document.getElementById('percent').innerText == "RAD") {
        document.getElementById('txt').value += "(pi/180)";
        calsol(document.getElementById('txt').value);
    }
});
document.getElementById('one').addEventListener("click", function () {
    if (document.getElementById('one').innerText != "1" && document.getElementById('percent').innerText == "RAD") {
        document.getElementById('txt').value += "(180/pi)";
        calsol(document.getElementById('txt').value);
    }
    document.getElementById('txt').value += this.innerText;
    calsol(document.getElementById('txt').value);        
});
document.getElementById('two').addEventListener("click", function () {
    if (document.getElementById('two').innerText != "2" && document.getElementById('percent').innerText == "RAD") {
        document.getElementById('txt').value += "(180/pi)";
        calsol(document.getElementById('txt').value);
    }
    document.getElementById('txt').value += this.innerText;
    calsol(document.getElementById('txt').value);
});
document.getElementById('three').addEventListener("click", function () {
    if (document.getElementById('three').innerText != "3" && document.getElementById('percent').innerText == "RAD") {
        document.getElementById('txt').value += "(180/pi)";
        calsol(document.getElementById('txt').value);    
    }
    document.getElementById('txt').value += this.innerText;
    calsol(document.getElementById('txt').value);    
});
document.getElementById('sqrt').addEventListener("click", function () {
    document.getElementById('txt').value+=this.innerText=='log10('?'log10(':'sqrt(';
});
