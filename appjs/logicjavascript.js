
function convertkatex(element, value) {
    var x = nerdamer(value);
    var value = x.toTeX()
    katex.render(value, element, {
        throwOnError: false
    });
}


//start of roman
function expandedform(input) {
    if (input == 'inpo') {
        var num = parseInt(document.getElementById(input).value);
    } else {
        var num = parseInt(document.getElementById(input).textContent);
    }
    i = 1;
    j = 0;
    var ar = [];
    var temp = "";
    while (parseInt(num) != 0) {
        var last = parseInt(num % 10);
        var br = last * i;
        ar[j] = br;
        num = num / 10;
        i = i * 10;
        j++;
    }
    var temp = ar.reverse().join("+");
    return temp;

}

function romanize(input) {
    if (input == 'inpo') {
        var num = parseInt(document.getElementById(input).value);
    } else {
        var num = parseInt(input);
    }
    if (!+num)
        return "";
    var digits = String(+num).split(""),
        key = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM",
            "", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC",
            "", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
        roman = "",
        i = 3;
    while (i--)
        roman = (key[+digits.pop() + (i * 10)] || "") + roman;
    return Array(+digits.join("") + 1).join("M") + roman;

}

function deromanize(str) {
    var str = str.toUpperCase(),
        validator = /^M*(?:D?C{0,3}|C[MD])(?:L?X{0,3}|X[CL])(?:V?I{0,3}|I[XV])$/,
        token = /[MDLV]|C[MD]?|X[CL]?|I[XV]?/g,
        key = {M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1},
        num = 0, m;
    if (!(str && validator.test(str)))
        if (document.getElementById('rinp').value == "") {
            return ""
        } else {
            return "Enter Valid Roman Number";
        }
    var temp = "";
    while (m = token.exec(str))
        num += key[m[0]];
    return num;
}

function callder() {
    document.getElementById('out2').innerHTML = (deromanize(document.getElementById('rinp').value))
}

function callr() {
    document.getElementById('ouroman').innerHTML = romanize('inpo');
}

function expandedformde(input, output) {
    var val = document.getElementById(input).textContent;
    var expanded = expandedform(input)
    var ar = []
    ar = expanded.split("+")
    var temp = ""
    for (i of ar) {
        if (i == 0) {
            temp += "";
        } else {
            temp += (romanize(i)) + "+";
        }
    }
    temp = temp.slice(0, -1);
    document.getElementById(output).innerHTML = temp;
}

//end of roman


function performdivide() {
    var num1 = parseFloat(document.getElementById("dividendnum").value);
    var num3 = parseFloat(document.getElementById("divisornumwith").value);
    if (String(num3) == 'NaN' || String(num1) == 'NaN' || num3 == 0) {
        if (String(num1) == 'NaN') {
            document.getElementById("resultdivi").innerHTML = 'Enter Dividend'
        }
        if (String(num3) == 'NaN') {
            document.getElementById("resultdivi").innerHTML = 'Enter Divisor'
        }
        if (num3 == 0) {
            document.getElementById("resultdivi").innerHTML = '';
        }
        if (String(num3) == 'NaN' && String(num1) == 'NaN') {
            document.getElementById("resultdivi").innerHTML = 'Enter Divisor and Dividend'
        }

    } else {
        var rem = num1 % num3;
        var c = num1 / num3;
        var temp = num1 + " ÷ " + num3 + " = " + c + "<br>" + "Quotient = " + parseInt(c) + "<br>" + "Remainder = " + rem;
        document.getElementById("resultdivi").innerHTML = temp;
    }


}

function printfactors() {
    var num2 = parseInt(document.getElementById("num2").value);
    var temp = "";
    var tt = "";
    var v = "";
    for (i = 2; i <= num2; i++) {
        while ((num2 % i) == 0) {
            temp += i + "&nbsp;&nbsp;&nbsp;<br>";
            v += i + ",";
            tt += "<pu>" + num2 + "</pu><br>";
            num2 = num2 / i;
        }
        document.getElementById("dividefactor").innerHTML = temp;
        document.getElementById("dividefactorresult").innerHTML = tt;
        v = v.slice(0, -1);
        document.getElementById("factorresult").innerHTML = "\\[Prime \\space Factors \\space are:\\]\\[" + v + "\\]";
        renderMathInElement(document.getElementById('factorresult'));

    }
}

function printhcffactor(val, outputf) {
    var num2 = parseInt(val);
    var temp = "";
    for (i = 2; i <= num2; i++) {
        while ((num2 % i) == 0) {
            temp += i + " ";
            num2 = num2 / i;
        }
    }
    temp = temp.split(" ");
    temp = removeDuplicates(temp);
    var newtemp = "";
    for (ih of temp) {
        newtemp += ih + " ";
    }
    return newtemp;
}

function removeDuplicates(array) {
    return array.filter((a, b) => array.indexOf(a) === b)
}

function printtable() {
    var temp = "<table class='table table-bordered' style='color:white;width: 50px; padding: 0; margin: 0 auto; border:2px solid light-grey;'>";
    var num = parseInt(document.getElementById("num").value);
    var end = parseInt(document.getElementById("ending").value);
    if(num=='' || end==''){
        document.getElementById("resulttable").innerHTML = "";
    }else {
        for (var i = 1; i <= end; i++) {
            temp += "<tr>"
            temp += '<td>' + num + '</td><td>×</td><td>' + i + '</td><td>=</td><td>' + num * i + '</td>';
            temp += "</tr>"
        }
        temp += "</table>"
        document.getElementById("resulttable").innerHTML = "<b>" + temp + "</b>";
    }
}

function checkforusetrigovalue() {
    var el = document.getElementById('soltri');
    if (el.innerText != '' && el.innerText != "Cannot Compute for -ve Square Root") {
        $('#usetrigovaluesbtn').fadeIn();
    } else {
        $('#usetrigovaluesbtn').fadeOut();
    }

}

function solvesimpletrigo() {
    var pp = document.getElementById("p").value;
    var base = document.getElementById("b").value;
    var hyp = document.getElementById("h").value;
//            if((pp=='' && base=='')||(base=='' && hyp=='')||(hyp='' && pp=='')){
//                document.getElementById('soltri').innerHTML="Kindly fill Atleast 2 fields";
//            }
    if (parseInt(hyp) < parseInt(pp) || parseInt(hyp) < parseInt(base)) {
        document.getElementById('h').style.color = "red";
        document.getElementById('soltri').innerHTML = "Hypotenuse Should be Greater";
    } else if (pp == '') {
        document.getElementById('h').style.color = "white";
        var pp = eval((hyp * hyp) - (base * base))
        var kl = String(pp)
        pp = Math.sqrt(String(pp))
        if (pp.toString() != 'NaN') {
            pp = pp.toFixed(2);
            var tempp = "\\[Value\\space of\\space  Perpendicular= \\sqrt{" + kl + "}=" + pp + "\\]";
            tempp += String("\\[sin\\theta =\\frac{p}{h} =\\frac{" + pp + "}{" + hyp + "} = " + eval(String(pp + "/" + hyp)).toFixed(2)) + '\\]';
            tempp += "\\[cos\\theta =\\frac{b}{h} =\\frac{" + base + "}{" + hyp + "}= " + eval(String(base + "/" + hyp)).toFixed(2) + '\\]';
            tempp += "\\[tan\\theta=\\frac{p}{b} =\\frac{" + pp + "}{" + base + "}= " + eval(String(pp + "/" + base)).toFixed(2) + '\\]';
            tempp += "\\[cosec\\theta=\\frac{h}{p} =\\frac{" + hyp + "}{" + pp + "}= " + eval(String(hyp + "/" + pp)).toFixed(2) + '\\]';
            tempp += "\\[sec\\theta=\\frac{h}{b} =\\frac{" + hyp + "}{" + base + "}= " + eval(String(hyp + "/" + base)).toFixed(2) + '\\]';
            tempp += "\\[cot\\theta=\\frac{b}{p} =\\frac{" + base + "}{" + pp + "}= " + eval(String(base + "/" + pp)).toFixed(2) + '\\]';
            document.getElementById("soltri").innerHTML = tempp;
            renderMathInElement(document.getElementById('soltri'));
        } else {
            document.getElementById("soltri").innerHTML = 'Cannot Compute for -ve Square Root';
        }
    } else if (base == '') {
        document.getElementById('h').style.color = "white";
        var base = eval((hyp * hyp) - (pp * pp))
        var kll = String(base)
        base = Math.sqrt(String(base))
        if (base.toString() != 'NaN') {
            base = base.toFixed(2);
            var tempp = "\\[Value\\space of\\space Base= \\sqrt{" + kll + "}=" + base + "\\]";
            tempp += String("\\[sin\\theta =\\frac{p}{h} =\\frac{" + pp + "}{" + hyp + "} = " + eval(String(pp + "/" + hyp)).toFixed(2)) + '\\]';
            tempp += "\\[cos\\theta=\\frac{b}{h} =\\frac{" + base + "}{" + hyp + "} = " + eval(String(base + "/" + hyp)).toFixed(2) + '\\]';
            tempp += "\\[tan\\theta=\\frac{p}{b} =\\frac{" + pp + "}{" + base + "}= " + eval(String(pp + "/" + base)).toFixed(2) + '\\]';
            tempp += "\\[cosec\\theta=\\frac{h}{p} =\\frac{" + hyp + "}{" + pp + "}= " + eval(String(hyp + "/" + pp)).toFixed(2) + '\\]';
            tempp += "\\[sec\\theta=\\frac{h}{b} =\\frac{" + hyp + "}{" + base + "} = " + eval(String(hyp + "/" + base)).toFixed(2) + '\\]';
            tempp += "\\[cot\\theta=\\frac{b}{p} =\\frac{" + base + "}{" + pp + "} = " + eval(String(base + "/" + pp)).toFixed(2) + '\\]';
            document.getElementById("soltri").innerHTML = tempp;
            renderMathInElement(document.getElementById('soltri'));
        } else {
            document.getElementById("soltri").innerHTML = 'Cannot Compute for -ve Square Root';
        }
    } else if (hyp == '') {
        document.getElementById('h').style.color = "white";
        var hyp = eval((base * base) + (pp * pp))
        var klll = String(hyp)
        hyp = Math.sqrt(String(hyp))
        if (hyp.toString() != 'NaN') {
            hyp = hyp.toFixed(2);
            var tempp = "\\[Value\\space of\\space Hypotenuse=\\sqrt{" + klll + "}=" + hyp + "\\]";
            tempp += String("\\[sin\\theta =\\frac{p}{h} =\\frac{" + pp + "}{" + hyp + "}= " + eval(String(pp + "/" + hyp)).toFixed(2)) + '\\]';
            tempp += "\\[cos\\theta=\\frac{b}{h} =\\frac{" + base + "}{" + hyp + "}= " + eval(String(base + "/" + hyp)).toFixed(2) + '\\]';
            tempp += "\\[tan\\theta=\\frac{p}{b} =\\frac{" + pp + "}{" + base + "}= " + eval(String(pp + "/" + base)).toFixed(2) + '\\]';
            tempp += "\\[cosec\\theta=\\frac{h}{p} =\\frac{" + hyp + "}{" + pp + "}= " + eval(String(hyp + "/" + pp)).toFixed(2) + '\\]';
            tempp += "\\[sec\\theta=\\frac{h}{b} =\\frac{" + hyp + "}{" + base + "}= " + eval(String(hyp + "/" + base)).toFixed(2) + '\\]';
            tempp += "\\[cot\\theta=\\frac{b}{p} =\\frac{" + base + "}{" + pp + "} = " + eval(String(base + "/" + pp)).toFixed(2) + '\\]';

            document.getElementById("soltri").innerHTML = tempp;
            renderMathInElement(document.getElementById('soltri'));
        } else {
            document.getElementById("soltri").innerHTML = 'Cannot Compute for -ve Square Root';
        }
    } else {
        document.getElementById('h').style.color = "white";
        var tempp = String("\\[sin\\theta =\\frac{p}{h} =\\frac{" + pp + "}{" + hyp + "} = " + eval(String(pp + "/" + hyp)).toFixed(2)) + '\\]';
        tempp += "\\[cos\\theta=\\frac{b}{h} =\\frac{" + base + "}{" + hyp + "}=" + eval(String(base + "/" + hyp)).toFixed(2) + '\\]';
        tempp += "\\[tan\\theta=\\frac{p}{b} =\\frac{" + pp + "}{" + base + "}= " + eval(String(pp + "/" + base)).toFixed(2) + '\\]';
        tempp += "\\[cosec\\theta=\\frac{h}{p} =\\frac{" + hyp + "}{" + pp + "} = " + eval(String(hyp + "/" + pp)).toFixed(2) + '\\]';
        tempp += "\\[sec\\theta=\\frac{h}{b} =\\frac{" + hyp + "}{" + base + "} = " + eval(String(hyp + "/" + base)).toFixed(2) + '\\]';
        tempp += "\\[cot\\theta=\\frac{b}{p} =\\frac{" + base + "}{" + pp + "}= " + eval(String(base + "/" + pp)).toFixed(2) + '\\]';
        document.getElementById("soltri").innerHTML = tempp;
        renderMathInElement(document.getElementById('soltri'));
    }
}

function set(obj) {
    if (document.getElementById("cal").style.display == "" || document.getElementById("cal").style.display == "none") {
        opencal();
    }
    var pp = document.getElementById("p").value;
    var base = document.getElementById("b").value;
    var hyp = document.getElementById("h").value;
    if (hyp == "") {
        var hyp = eval((base * base) + (pp * pp));
        hyp = Math.sqrt(String(hyp));
        hyp = hyp.toFixed(2);
    }
    if (pp == "") {
        var pp = eval((hyp * hyp) - (base * base));
        pp = Math.sqrt(String(pp));
        pp = pp.toFixed(2);
    }
    if (base == "") {
        var base = eval((hyp * hyp) - (pp * pp));
        base = Math.sqrt(String(base));
        base = base.toFixed(2);
    }

    if (obj.id == "sini") {
        var sintheta = String(eval(String(pp + "/" + hyp)).toFixed(2))
        document.getElementById("txt").value += sintheta;
    }
    if (obj.id == "cosi") {
        var costheta = eval(String(base + "/" + hyp)).toFixed(2);
        document.getElementById("txt").value += costheta;
    }
    if (obj.id == "tani") {
        var tantheta = eval(String(pp + "/" + base)).toFixed(2);
        document.getElementById("txt").value += tantheta;
    }
    if (obj.id == "coseci") {
        var cosectheta = eval(String(hyp + "/" + pp)).toFixed(2);
        document.getElementById("txt").value += cosectheta;
    }
    if (obj.id == "seci") {
        var sectheta = eval(String(hyp + "/" + base)).toFixed(2);
        document.getElementById("txt").value += sectheta;
    }
    if (obj.id == "coti") {
        var cottheta = eval(String(base + "/" + pp)).toFixed(2);
        document.getElementById("txt").value += cottheta;
    }

}

function diffsolve() {
    var ok = document.getElementById("inputdifferentiatequation").value;
    ok = encodeURIComponent(ok);
    window.open("https://www.emathhelp.net/calculators/calculus-1/derivative-calculator/?f=" + ok + "+&order=" + difforder + "&var=" + diffvariable + "&p=&steps=on#solution");
}

var pardifforder = "";

function getparorder(value) {
    pardifforder = value;
}

function partialdiffsolve() {
    var ikk = document.getElementById("inputpartialorder");
    if (ikk.value == "") {
        ikk.value = "x";
    }
    var parok = encodeURIComponent(document.getElementById("inputpartialdiff").value);
    var parorder = encodeURIComponent(document.getElementById("inputpartialorder").value);
    window.open("https://www.emathhelp.net/calculators/calculus-3/partial-derivative-calculator/?f=" + parok + "&var=" + parorder + "&steps=on#solution");
}

var integralvar = "";

function getintegralvar(value) {
    integralvar = value;
}

function solveintegral() {

    if (checkit == "notok" || checkit == "") {
        var inte = encodeURIComponent(document.getElementById("inputintegral").value);
        window.open("https://www.emathhelp.net/calculators/calculus-2/integral-calculator/?f=" + inte + "&var=" + integralvar + "&steps=on#solution")
    }
    if (checkit == "ok") {
        var upperlim = document.getElementById("upperlimit").value;
        var lowerlim = document.getElementById("lowerlimit").value;
        var integ = encodeURIComponent(document.getElementById("inputintegral").value);
        var iv = ""
        if (upperlim == "" && lowerlim == "") {
            var upperlimmm = "inf";
            var lowerlimmm = "-inf";
        } else if (lowerlim != "" && upperlim == "") {
            var upperlimmm = "inf";
            var lowerlimmm = lowerlim;
        } else if (lowerlim == "" && upperlim != "") {
            var upperlimmm = upperlim;
            var lowerlimmmgf = "-inf";
        } else if (lowerlim != "" && upperlim != "") {
            var upperlimmm = upperlim;
            var lowerlimmm = lowerlim;
        }
        window.open("https://www.emathhelp.net/calculators/calculus-2/definite-integral-calculator/?f=" + integ + "&var=" + integralvar + "&a=" + lowerlimmm + "&b=" + upperlimmm + "&steps=on#solution")

    }

}


var checkit = ""

function collapselimitbox() {
    var sa = document.getElementById("enablelimit");
    if (sa.checked == true) {
        checkit = "ok";
        $('#collapselimit').slideDown();
    }
    if (sa.checked == false) {
        checkit = "notok";
        $('#collapselimit').slideUp();
    }
}

//square
function solveperisq() {
    var val = document.getElementById("inputsqside").value;
    if (val == '') {
        document.getElementById("resultofperisq").innerHTML = '';
    } else {
        var sol = eval(String(4) + '*' + String(val));
        var temp = '\\[ 4 \\times ( ' + val + ' ) = ' + sol + '\\]';
        temp += '\\[Perimeter \\space of \\space Square \\space is \\space ' + sol +'\\]';
        document.getElementById("resultofperisq").innerHTML = temp;
    }
    renderMathInElement(document.getElementById("resultofperisq"));
}
function solvediagonalsq(){
    var val = document.getElementById("inputsqside").value;
    if (val == '') {
        document.getElementById("resultofdiagonalsq").innerHTML = '';
    } else {
        var sol = eval(1.414 + '*' + String(val));
        var temp = '\\[ \\sqrt{2} ( ' + val + ' ) = ' + sol + '\\]';
        temp += '\\[Diagonal \\space of \\space Square \\space is \\space ' + sol +'\\]';
        document.getElementById("resultofdiagonalsq").innerHTML = temp;
    }
    renderMathInElement(document.getElementById("resultofdiagonalsq"));
}
function solveareasq() {
    var val = document.getElementById("inputsqside").value;
    if (val == '') {
        document.getElementById("resultofareasq").innerHTML = '';
    } else {
        var sol = eval(String(val) + '*' + String(val));
        var temp ='\\['+ val + ' \\times ' + val + ' = ' + sol + '\\]';
        temp += '\\[Area \\space of \\space Square \\space is \\space ' + sol+'\\]';
        document.getElementById("resultofareasq").innerHTML = temp;
    }
    renderMathInElement(document.getElementById("resultofareasq"));
}
//square

function printmorefactors(input, output) {
    document.getElementById(output).textContent = "";
    var ar = [];
    var ll = document.getElementById(input).value;
    if (ll.includes(" ")) {
        ll = ll.split(" ")
        for (kj of ll) {
            ar.push(kj)
        }
        ar = ar.filter(function (str) {
            return /\S/.test(str);
        });
    } else {
        ar.push(parseInt(document.getElementById(input).value));
    }
    var temp = "";
    document.getElementById(output).innerHTML = "\\[Prime \\space Factors \\space of \\space\\]";
    for (jk of ar) {
        var nnuumm2 = jk;
        var getnu = "\\[" + nnuumm2 + "\\space : \\space";
        var i;
        for (i = 2; i <= nnuumm2; i++) {
            while ((nnuumm2 % i) == 0) {
                temp += i + ",";
                nnuumm2 = nnuumm2 / i;
            }
        }
        temp = temp.slice(0, -1);
        document.getElementById(output).innerHTML += getnu + temp + "\\]";
        temp += "<br>"
        temp = "";
    }
    renderMathInElement(document.getElementById(output));
}

function printmorefactorshcf(input, output) {
    document.getElementById(output).textContent = "";
    var ar = [];
    var ll = document.getElementById(input).value;
    if (ll.includes(" ")) {
        ll = ll.split(" ")
        for (kj of ll) {
            ar.push(kj)
        }
        ar = ar.filter(function (str) {
            return /\S/.test(str);
        });
    } else {
        ar.push(parseInt(document.getElementById(input).value));
    }
    var temp = "";
    document.getElementById(output).innerHTML = "\\[Prime \\space Factors \\space of \\space\\]";
    var factorarray = [];
    var j = 0;
    for (jk of ar) {
        factorarray[j] = [];
        factorarray[j][0] = 1;
        var index = 1;
        var nnuumm2 = jk;
        var getnu = "\\[" + nnuumm2 + "\\space : \\space";
        temp += "1,";
        for (i = 2; i <= nnuumm2; i++) {
            while ((nnuumm2 % i) == 0) {
                factorarray[j][index] = i;
                index++;
                temp += i + ",";
                nnuumm2 = nnuumm2 / i;
            }
        }
        temp = temp.slice(0, -1);
        document.getElementById(output).innerHTML += getnu + temp + "\\]";
        j++;
        temp += "<br>"
        temp = "";
    }
    renderMathInElement(document.getElementById(output));
    return factorarray;
}

function findduplicatesforhcf(array) {
    var maxlengthofarray = 0;
    var dup, indexofdup = 0;
    var i, j;
    //find reference array i.e bigger subarray
    for (i = 0; i < array.length; i++) {
        var arlen = array[i].length;
        if (arlen > maxlengthofarray) {
            maxlengthofarray = arlen;
            dup = array[i];
            indexofdup = i;
        }
    }
    //remove elements which not present in all subarrays
    for (k = 0; k < array.length; k++) {
        if (k == indexofdup) {
            continue;
        }
        for (i = 0; i < dup.length; i++) {
            if (dup[i] == 0) {
                continue;
            }
            var flag = 0;
            for (j = 0; j < array[k].length; j++) {
                if (dup[i] == array[k][j]) {
                    flag = 1;
                    array[k][j] = 0;
                    break;
                }
            }
            if (flag == 0) {
                dup[i] = 0;
            }
        }
    }
    return dup;
}

<!--        hcf start-->
function hcf(input) {
    var arrayoffactors = printmorefactorshcf(input, 'hcfprimefactor');
    var dup = findduplicatesforhcf(arrayoffactors);
    var hfac = '';
    for (i of dup) {
        if (i != 0) {
            hfac += i + ',';
        }
    }
    hfac = hfac.slice(0, -1);
    var ar = [];
    var ll = document.getElementById(input).value;
    ll = ll.replace(/\s+$/, '');  //right trim
    ll = ll.replace(/^\s+/, '');  //left trim
    if (ll.includes(" ")) {
        ll = ll.split(" ")
        var flag = 0;
        for (kj of ll) {
            ar.push(parseInt(kj));
        }
        ar = ar.filter(function (str) {
            return /\S/.test(str);
        });
    } else {
        flag = 1;
        ar.push(parseInt(document.getElementById(input).value));
    }
    input = ar;
    if (toString.call(input) !== "[object Array]")
        return false;
    var len, a, b;
    len = input.length;
    if (!len) {
        return null;
    }
    a = input[0];
    for (var i = 1; i < len; i++) {
        b = input[i];
        a = gcd_two_numbers(a, b);
    }
    if (flag == 1) {
        document.getElementById("resulthcf").innerHTML = "\\[ HCF \\space is \\space " + a + " \\]";
        renderMathInElement(document.getElementById('resulthcf'));
    } else {
        var hcffac = printhcffactor(a, 'resulthcf');
        document.getElementById("resulthcf").innerHTML = "\\[" + hfac + "\\space are \\space in \\space Common.\\] \\[Therefore,";
        document.getElementById("resulthcf").innerHTML += "\\space HCF \\space is \\space " + a + "\\]";
        renderMathInElement(document.getElementById('resulthcf'));
    }
    if (ll == null || ll == '') {
        document.getElementById('resulthcf').innerHTML = "";
        document.getElementById('hcfprimefactor').innerHTML = "";
    }
}

function gcd_two_numbers(x, y) {
    if ((typeof x !== 'number') || (typeof y !== 'number'))
        return false;
    x = Math.abs(x);
    y = Math.abs(y);
    while (y) {
        var t = y;
        y = x % y;
        x = t;
    }
    return x;
}

<!--hcf end-->
function solvelaplace() {
    var lurl = encodeURIComponent(document.getElementById("inputlaplace").value);
    window.open("https://www.emathhelp.net/calculators/differential-equations/laplace-transform-calculator/?f=" + lurl + "#solution");
}

function solveinverselaplace() {
    var ilurl = encodeURIComponent(document.getElementById("inputinverselaplace").value);
    window.open("https://www.emathhelp.net/calculators/differential-equations/inverse-laplace-transform-calculator/?f=" + ilurl + "#solution");
}

var diffvariable = "";
var difforder = "";

function getdiffvariable(value) {
    diffvariable = value;
}

function getdifforder(value) {
    difforder = value;
}

function clearit(input, output) {
    document.getElementById(output).innerHTML = '';
    document.getElementById(input).value = '';
}

function solveintegralwithoutsteps() {
    var intval = document.getElementById("inputintegral").value;
    //var integration=nerdamer.integrate(intval,integralvar)

}

//        function mathrender(input,output){
//                    MathJax.Hub.processSectionDelay = 0
//                    var Render = document.getElementById(output)
//                    var inp=document.getElementById(input).value;
//                    var mmaath = MathJax.Hub.getAllJax('Render')[0]
//                    demoSour=inp
//                    alert(demoSour)
//                    MathJax.Hub.Typeset(['Text',mmaath,demoSour])
//                  }
var intsol = "";

function findintesol(input, output) {
    var inp = document.getElementById(input).value;
    intsol = nerdamer.integrate(inp, 'x')
    document.getElementById(input).value += "";
}

function changebackground(value) {
    if (typeof (Storage) !== "undefined") {
        // Store
        localStorage.setItem("backgroundcolor", value);
        // Retrieve
        document.body.style.backgroundColor = localStorage.getItem("backgroundcolor");
//              document.body.style.backgroundImage = localStorage.getItem("backgroundcolor");
//              document.getElementById('main').style.background= localStorage.getItem("backgroundcolor");
    }

}

function opencal() {
    $('#cal').slideToggle();
}

function getran(l) {
    var text = "";
    var char_list = "0123456789+-/=";
    for (var i = 0; i < l; i++) {
        text += char_list.charAt(Math.floor(Math.random() * char_list.length));
    }
    return text;
}

function getbackval(value) {
    localStorage.setItem("backgroundtype", value);
}

function animatedback() {
    if (localStorage.getItem("backgroundtype") == null) {
        localStorage.setItem("backgroundtype", "Animated");
    }
    if (localStorage.getItem("backgroundtype") == "Animated") {
        var script = document.createElement('script');
        script.id = "bb"
        script.src = "js/dynamic.js";
        document.getElementsByTagName('body')[0].appendChild(script);
    }

}

function orderas() {
    document.getElementById("orderresult").innerHTML = "";
    var val = document.getElementById("ordergetval").value;
    val = val.split(" ");
    val = val.filter(function (str) {
        return /\S/.test(str);
    });
    var len = parseInt(val.length);
    for (i = 0; i <= len - 1; i++) {
        for (j = 0; j <= len - 1 - i; j++) {
            if (parseInt(val[j]) > parseInt(val[j + 1])) {
                temp = parseInt(val[j]);
                val[j] = parseInt(val[j + 1]);
                val[j + 1] = temp;
            }
        }
    }
    val = val.join(',');
    document.getElementById("orderresult").innerHTML += "\\[Ascending \\space Order\\]";
    document.getElementById("orderresult").innerHTML += "\\[" + val + "\\]";
    renderMathInElement(document.getElementById('orderresult'));
}

function orderde() {
    document.getElementById("orderresultde").innerHTML = "";
    var val = document.getElementById("ordergetval").value;
    val = val.split(" ");
    val = val.filter(function (str) {
        return /\S/.test(str);
    });
    var len = parseInt(val.length);
    for (i = 0; i <= len - 1; i++) {
        for (j = 0; j <= len - 1 - i; j++) {
            if (parseInt(val[j]) < parseInt(val[j + 1])) {
                temp = parseInt(val[j]);
                val[j] = parseInt(val[j + 1]);
                val[j + 1] = temp;
            }
        }
    }
    val = val.join(',')
    document.getElementById("orderresultde").innerHTML += "\\[ Descending \\space Order \\]";
    document.getElementById("orderresultde").innerHTML += "\\[" + val + "\\]";
    renderMathInElement(document.getElementById('orderresultde'));
}

function orderfieldclear() {
    if (document.getElementById("orderresult").textContent != "" || document.getElementById("orderresultde").textContent != "") {
        document.getElementById("orderresult").innerHTML = ""
        document.getElementById("orderresultde").innerHTML = ""
    }

}

function checkdivisibility() {
    var n1 = parseInt(document.getElementById("n1").value);
    var n2 = parseInt(document.getElementById("n2").value);
    if (n1 % n2 == 0) {
        document.getElementById("divisibilitycheckresult").innerHTML = "Yes! " + String(n1) + " is Divisible by " + n2 + "<br>";
        document.getElementById("divisibilitycheckresult").innerHTML += "\\[ \\frac{"+String(n1) + "}{" + String(n2) + "} = " + eval(String(n1 / n2)) + " \\]";
        document.getElementById("divisibilitycheckresultex").innerHTML = "Explanation:<br>When " + String(n1) + " divides with " + String(n2) + " leaves Remainder 0.";
//            var btn = document.createElement('input');
//            btn.id="showcheckdivisibilitysteps"
//            btn.type = "button";
//            btn.className="btn btn-info";
//            btn.value="Show Steps"
//            document.getElementById('checkdivisibility').appendChild(btn);
    } else {
        document.getElementById("divisibilitycheckresult").innerHTML = "No! " + String(n1) + " is not Divisible by " + n2;
        document.getElementById("divisibilitycheckresultex").innerHTML = "Explanation:<br>When " + String(n1) + " divides with " + String(n2) + " leaves Remainder " + eval(n1 % n2) + ".";
    }
    renderMathInElement(document.getElementById('divisibilitycheckresult'))
}


function internationalwords(num) {
    var a = ['', 'one ', 'two ', 'three ', 'four ', 'five ', 'six ', 'seven ', 'eight ', 'nine ', 'ten ', 'eleven ', 'twelve ', 'thirteen ', 'fourteen ', 'fifteen ', 'sixteen ', 'seventeen ', 'eighteen ', 'nineteen '];
    var b = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    if ((num = num.toString()).length > 9) return 'overflow';
    n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
    if (!n) return;
    var str = '';
    str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'crore ' : '';
    str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'lakh ' : '';
    str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'thousand ' : '';
    str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'hundred ' : '';
    str += (n[5] != 0) ? ((str != '') ? 'and ' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) + 'only ' : '';
    if (count(num) >= 9) {
        document.getElementById("interresult").innerHTML = 'Upto 8 digits only';
    } else {
        document.getElementById("interresult").innerHTML = str;
    }

}

function factorslcmhcfempty() {
    $('#dividefactor').empty();
    $('#dividefactorresult').empty();
    $('#factorresult').empty();
    $('#resultlcms').empty();
    $('#hcfprimefactor').empty();
    $('#resulthcf').empty();
    $('#resultfac').empty();
    $('#resultlcm').empty();
}

function factorselect(numid) {
    var num = document.getElementById(numid).value;
    num = num.replace(/^\s+/, '');  //left trim
    num = num.replace(/\s+$/, '');  //right trim
    num = num.split(' ');
    if (num.length == 1) {
        printfactors();
    } else {
        printmorefactors(numid, 'factorresult');
    }
}

function printfactorsfl(value) {
    var num2 = parseInt(value);
    var temp = [];
    ind = -1;
    for (i = 2; i <= num2; i++) {
        while ((num2 % i) == 0) {
            ind += 1;
            temp[ind] = i;
            num2 = num2 / i;
        }
    }
    return temp;
}

function lcmsol(input) {
    document.getElementById("resultlcm").innerHTML = "";
    document.getElementById("resultfac").innerHTML = "";
    document.getElementById('resultlcms').innerHTML = "";
    var num = document.getElementById(input).value;
    num = num.split(' ');
    num = num.filter(function (str) {
        return /\S/.test(str);
    });
    if (num.length != 0) {
        var temp = "<table class='table' style='color:white;width: 50px; padding: 0; margin: 0 auto; border:2px solid light-grey;'>";
        var tempfac = "<table class='table bor' style='color:white;width: 50px; padding: 0; margin: 0 auto; border-right:2px solid light-grey !important;'>";
        if (num.length == 1) {
            document.getElementById("resultlcm").innerHTML = "Should Be more Than 1";
            document.getElementById('resultlcms').innerHTML = "";
        } else if (num.length == 2) {
            var lcmis = nerdamer.lcm(parseInt(num[0]), parseInt(num[1]));
        } else if (num.length == 3) {
            var lcmis = nerdamer.lcm(parseInt(num[0]), parseInt(num[1]), parseInt(num[2]));
        } else if (num.length == 4) {
            var lcmis = nerdamer.lcm(parseInt(num[0]), parseInt(num[1]), parseInt(num[2]), parseInt(num[3]));
        } else if (num.length == 5) {
            var lcmis = nerdamer.lcm(parseInt(num[0]), parseInt(num[1]), parseInt(num[2]), parseInt(num[3]), parseInt(num[4]));
        } else if (num.length == 6) {
            var lcmis = nerdamer.lcm(parseInt(num[0]), parseInt(num[1]), parseInt(num[2]), parseInt(num[3]), parseInt(num[4]), parseInt(num[5]));
        } else if (num.length == 7) {
            var lcmis = nerdamer.lcm(parseInt(num[0]), parseInt(num[1]), parseInt(num[2]), parseInt(num[3]), parseInt(num[4]), parseInt(num[5]), parseInt(num[6]));
        } else if (num.length == 8) {
            var lcmis = nerdamer.lcm(parseInt(num[0]), parseInt(num[1]), parseInt(num[2]), parseInt(num[3]), parseInt(num[4]), parseInt(num[5]), parseInt(num[6]), parseInt(num[7]));
        } else if (num.length == 9) {
            var lcmis = nerdamer.lcm(parseInt(num[0]), parseInt(num[1]), parseInt(num[2]), parseInt(num[3]), parseInt(num[4]), parseInt(num[5]), parseInt(num[6]), parseInt(num[7]), parseInt(num[8]));
        } else if (num.length == 10) {
            var lcmis = nerdamer.lcm(parseInt(num[0]), parseInt(num[1]), parseInt(num[2]), parseInt(num[3]), parseInt(num[4]), parseInt(num[5]), parseInt(num[6]), parseInt(num[7]), parseInt(num[8]), parseInt(num[9]));
        } else if (num.length == 11) {
            var lcmis = nerdamer.lcm(parseInt(num[0]), parseInt(num[1]), parseInt(num[2]), parseInt(num[3]), parseInt(num[4]), parseInt(num[5]), parseInt(num[6]), parseInt(num[7]), parseInt(num[8]), parseInt(num[9]), parseInt(num[10]));
        } else if (num.length == 12) {
            var lcmis = nerdamer.lcm(parseInt(num[0]), parseInt(num[1]), parseInt(num[2]), parseInt(num[3]), parseInt(num[4]), parseInt(num[5]), parseInt(num[6]), parseInt(num[7]), parseInt(num[8]), parseInt(num[9]), parseInt(num[10]), parseInt(num[11]));
        } else if (num.length == 13) {
            var lcmis = nerdamer.lcm(parseInt(num[0]), parseInt(num[1]), parseInt(num[2]), parseInt(num[3]), parseInt(num[4]), parseInt(num[5]), parseInt(num[6]), parseInt(num[7]), parseInt(num[8]), parseInt(num[9]), parseInt(num[10]), parseInt(num[11]), parseInt(num[12]));
        } else if (num.length == 14) {
            var lcmis = nerdamer.lcm(parseInt(num[0]), parseInt(num[1]), parseInt(num[2]), parseInt(num[3]), parseInt(num[4]), parseInt(num[5]), parseInt(num[6]), parseInt(num[7]), parseInt(num[8]), parseInt(num[9]), parseInt(num[10]), parseInt(num[11]), parseInt(num[12]), parseInt(num[13]));
        } else if (num.length == 15) {
            var lcmis = nerdamer.lcm(parseInt(num[0]), parseInt(num[1]), parseInt(num[2]), parseInt(num[3]), parseInt(num[4]), parseInt(num[5]), parseInt(num[6]), parseInt(num[7]), parseInt(num[8]), parseInt(num[9]), parseInt(num[10]), parseInt(num[11]), parseInt(num[12]), parseInt(num[13]), parseInt(num[14]));
        } else if (num.length == 16) {
            var lcmis = nerdamer.lcm(parseInt(num[0]), parseInt(num[1]), parseInt(num[2]), parseInt(num[3]), parseInt(num[4]), parseInt(num[5]), parseInt(num[6]), parseInt(num[7]), parseInt(num[8]), parseInt(num[9]), parseInt(num[10]), parseInt(num[11]), parseInt(num[12]), parseInt(num[13]), parseInt(num[14]), parseInt(num[15]));
        } else if (num.length == 17) {
            var lcmis = nerdamer.lcm(parseInt(num[0]), parseInt(num[1]), parseInt(num[2]), parseInt(num[3]), parseInt(num[4]), parseInt(num[5]), parseInt(num[6]), parseInt(num[7]), parseInt(num[8]), parseInt(num[9]), parseInt(num[10]), parseInt(num[11]), parseInt(num[12]), parseInt(num[13]), parseInt(num[14]), parseInt(num[15]), parseInt(num[16]));
        } else if (num.length == 18) {
            var lcmis = nerdamer.lcm(parseInt(num[0]), parseInt(num[1]), parseInt(num[2]), parseInt(num[3]), parseInt(num[4]), parseInt(num[5]), parseInt(num[6]), parseInt(num[7]), parseInt(num[8]), parseInt(num[9]), parseInt(num[10]), parseInt(num[11]), parseInt(num[12]), parseInt(num[13]), parseInt(num[14]), parseInt(num[15]), parseInt(num[16]), parseInt(num[17]));
        } else if (num.length == 19) {
            var lcmis = nerdamer.lcm(parseInt(num[0]), parseInt(num[1]), parseInt(num[2]), parseInt(num[3]), parseInt(num[4]), parseInt(num[5]), parseInt(num[6]), parseInt(num[7]), parseInt(num[8]), parseInt(num[9]), parseInt(num[10]), parseInt(num[11]), parseInt(num[12]), parseInt(num[13]), parseInt(num[14]), parseInt(num[15]), parseInt(num[16]), parseInt(num[17]), parseInt(num[18]));
        } else if (num.length == 20) {
            var lcmis = nerdamer.lcm(parseInt(num[0]), parseInt(num[1]), parseInt(num[2]), parseInt(num[3]), parseInt(num[4]), parseInt(num[5]), parseInt(num[6]), parseInt(num[7]), parseInt(num[8]), parseInt(num[9]), parseInt(num[10]), parseInt(num[11]), parseInt(num[12]), parseInt(num[13]), parseInt(num[14]), parseInt(num[15]), parseInt(num[16]), parseInt(num[17]), parseInt(num[18]), parseInt(num[19]));
        } else {
            document.getElementById('resultlcm').innerHTML += "Upto 20 Numbers Supported<br>and you inputted " + String(num.length) + " Numbers";
            document.getElementById('resultlcms').innerHTML = "";
        }
        var facar = printfactorsfl(parseInt(lcmis));
        if (num.length > 20 || num.length == 1) {
            document.getElementById('resultlcm').innerHTML += "";
            document.getElementById('resultlcms').innerHTML = "";
        } else {
            //document.getElementById('resultlcm').innerHTML+="<pu>&nbsp;"+num+"</pu><br>";
            temp += "<tr>"
            for (kl of num) {
                temp += "<td>" + kl + "</td>";
            }
            temp += "</tr>"
        }
        for (i = 0; i < facar.length; i++) {
            for (k = 0; k < num.length; k++) {
                if (parseInt(num[k]) % parseInt(facar[i]) == 0) {
                    num[k] = parseInt(num[k]) / parseInt(facar[i]);
                }
            }
            //document.getElementById('resultlcm').innerHTML+="<pu>&nbsp;"+num+"</pu><br>";
            temp += "</tr>"
            for (kl of num) {
                temp += "<td>" + kl + "</td>";
            }
            temp += "</tr>"

        }
        for (mm = 0; mm < facar.length; mm++) {
            //document.getElementById('resultfac').innerHTML+="&nbsp;"+facar[mm]+"&nbsp;<br>";
            tempfac += "<tr><td>" + facar[mm] + "</td></tr>";
        }
        if (num.length == 1) {
            document.getElementById("resultlcms").innerHTML = "Should Be more Than 1";
        } else {
            document.getElementById('resultlcms').innerHTML += "Lcm is " + String(lcmis);
        }
        document.getElementById('resultfac').innerHTML = tempfac;
        document.getElementById('resultlcm').innerHTML = temp;
    }
}

function multiplywithsteps(numm, withnum) {
    var num = document.getElementById(numm).value.toString();
    var numwith = document.getElementById(withnum).value.toString();
    if (num % 1 == 0 && numwith % 1 != 0) {
        var sw = numwith;
        numwith = num;
        num = sw;
        document.getElementById(withnum).value = numwith;
        document.getElementById(numm).value = num;
    }
    var flag = 0; // num
    if (num % 1 != 0)
        flag = 1; //float
    var countdot = 0;
    var countdotwith = 0;

    if (flag == 1) {
        for (i = num.length - 1; i >= 0; i--) {
            if (num[i] == '.') {
                break;
            }
            countdot++;
        }
        for (j = numwith.length - 1; j >= 0; j--) {
            if (numwith[j] == '.') {
                break;
            }
            countdotwith++;
        }
        var v = 0;
        if ((countdotwith > countdot) && (numwith % 1 != 0)) {
            var sw = numwith;
            numwith = num;
            num = sw;
            document.getElementById(withnum).value = numwith;
            document.getElementById(numm).value = num;
            v = 1;
        }

    }
    var r = document.getElementById("resultmulsol");
    var temp = "";
    var m = "";
    var line = "";
    var mulsol = eval(nerdamer(String(numwith) + '*' + String(num)).evaluate().toString());
    if (numwith.length > 1) {
        numwith = numwith.split('');
        for (i = numwith.length - 1; i >= 0; i--) {
            if (numwith[i] == '.')
                continue;
            if (numwith.length == m.length + 1) {
                var vm = eval(nerdamer(String(numwith[i]) + '*' + String(num)).evaluate().toString());
                temp += "+ " + String(vm).replace('.', '') + m;
            } else {
                var vm = eval(nerdamer(String(numwith[i]) + '*' + String(num)).evaluate().toString())
                temp += String(vm).replace('.', '') + m;

            }
            temp += "<br>";
            m += "&times;";
        }
        for (i = 0; i < String(mulsol).length; i++) {
            line += "_";
        }
    } else {   //no plus simple multiply
        var mulsol = eval(nerdamer(String(numwith) + '*' + String(num)).evaluate().toString());
        for (i = 0; i < String(mulsol).length; i++) {
            line += "_";
        }
    }
    if (numwith.length == 1) {
        r.innerHTML = "";
        r.innerHTML += num + "<br>";
        r.innerHTML += "x " + numwith + "<br>"
        r.innerHTML += line + "<br>";
        r.innerHTML += mulsol + "<br>";
        r.innerHTML += line + "<br>";
    } else {
        r.innerHTML = "";
        r.innerHTML += num + "<br>";
        r.innerHTML += "x " + numwith.join('') + "<br>"
        r.innerHTML += line + "<br>";
        r.innerHTML += temp;
        r.innerHTML += line + "<br>";
        r.innerHTML += mulsol + "<br>";
        r.innerHTML += line + "<br>";
    }
}

function showdivisionstepsforcheckdivisibility() {
    $('html, body').animate({
        scrollTop: $("#divide").offset().top
    }, 100);
    document.getElementById('divisornumwith').value = document.getElementById('n2').value;
    document.getElementById('dividendnum').value = document.getElementById('n1').value;
    divisionwithsteps();
    $("#showcheckdivisibilitysteps").click(function () {
        $('html, body').animate({
            scrollTop: $("#divide").offset().top
        }, 2000);
    });
}

function divisionwithsteps() {
    performdivide();
    var dividend = document.getElementById("dividendnum").value;
    var divisor = document.getElementById("divisornumwith").value;
    var resultContainer = $('#resultofdivsteps');
    var numberFormatTester = new RegExp("^[1-9]{1}[0-9]*$");
    var isDecimal = ('' + dividend).indexOf('.') > -1 || ('' + divisor).indexOf('.') > -1;
    var isNum = !(isNaN(+dividend) && isNaN(+divisor)) && parseFloat(dividend) >= 0 && parseFloat(divisor) >= 0;
    if (String(dividend) == '' || String(divisor) == '') {
        document.getElementById("resultofdivsteps").innerHTML = "";
    } else if (('' + divisor) == '0') {
        document.getElementById("resultofdivsteps").innerHTML = "You cannot divide by 0";
        return false;
    } else if (isDecimal) {
        document.getElementById("resultofdivsteps").innerHTML = "Can't show steps for Decimal Division";
        return false;
    } else if (!numberFormatTester.test(divisor)) {
        if (String(divisor) == '') {
            document.getElementById("resultofdivsteps").innerHTML = "";
        } else {
            document.getElementById("resultofdivsteps").innerHTML = "Can't show steps for Negative Divisor";
        }
        return false;
    } else if (!numberFormatTester.test(dividend)) {
        if (String(dividend) == '') {
            document.getElementById("resultofdivsteps").innerHTML = "";
        } else {
            document.getElementById("resultofdivsteps").innerHTML = "Can't show steps for Negative Dividend";
        }
        return false;
    } else {
        var quotient = Math.floor(dividend / divisor);
        var remainder = dividend % divisor;
        var dividendLength = (dividend.toString()).length;
        var divisorLength = (divisor.toString()).length;
        var tableBody = '';
        var tableNumColumns = dividendLength + divisorLength;
        var tableNumRows = dividendLength * 2 + 2;
        var numSteps = dividendLength + 1;
        var tmpVar;
        for (a = 1; a <= tableNumRows; a++) {
            tableBody += '<tr>';
            for (b = 1; b <= tableNumColumns; b++) {
                tableBody += '<td style="padding: 7px; border:1px solid #ff88e7 ;"></td>';
            }
            tableBody += '</tr>';
        }
        resultContainer.html('<div class="row"><h4 style="color:white"><table class="table table-bordered" style="color:white;width: 50px; padding: 0; margin: 0 auto; border:2px solid light-grey;">' + tableBody + '</table></div>');
        var tableRows = resultContainer.find('table tr');
        for (i = 0; i < divisorLength; i++) {
            tableRows.eq(1).find('td').eq(i).html((divisor.toString())[i]);
        }
        tableRows.eq(1).find('td').eq(divisorLength - 1).css('border-right', '6px solid white');
        for (i = 0; i < dividendLength; i++) {
            tableRows.eq(1).find('td').eq(divisorLength + i).html((dividend.toString())[i]).css('border-top', '6px solid white');
        }
        for (currentStep = 1; currentStep < numSteps; currentStep++) {
            if (!bufferVar) var bufferVar = (dividend.toString())[0];
            var stepResult = Math.floor(bufferVar / divisor);
            tableRows.eq(0).find('td').eq(divisorLength + currentStep - 1).html(stepResult);
            tmpVar = (stepResult * divisor).toString();
            for (a = tmpVar.length - 1; a >= 0; a--) {
                tableRows.eq(currentStep * 2).find('td').eq(divisorLength + currentStep - a - 1).html(tmpVar[tmpVar.length - a - 1]).css('border-bottom', '6px solid white');
            }
            tmpVar = (bufferVar - stepResult * divisor).toString();
            for (a = tmpVar.length - 1; a >= 0; a--) {
                tableRows.eq(currentStep * 2 + 1).find('td').eq(divisorLength + currentStep - a - 1).html(tmpVar[tmpVar.length - a - 1]);
            }
            tableRows.eq(currentStep * 2 + 1).find('td').eq(divisorLength + currentStep).html((dividend.toString())[currentStep]);
            bufferVar = tmpVar + (dividend.toString())[currentStep];
        }
    }
}

function keyboard(field) {
    var field = document.getElementById(field);
}

function bodyload() {
    animatedback();
    //localStorage.removeItem('backgroundcolor')
    //changebackground(localStorage.getItem('backgroundcolor'));

    var ar = JSON.parse(localStorage.getItem('favouritearray'));
    var oid = JSON.parse(localStorage.getItem('openingidarray'));
    var tp = JSON.parse(localStorage.getItem('typearray'));
    var imgar = JSON.parse(localStorage.getItem('imgarray'));
    var favar = JSON.parse(localStorage.getItem('favarray'));
    if (oid != null) {
        for (i = 0; i < ar.length; i++) {
            favouritearray[i] = ar[i]
            openingid[i] = oid[i];
            typearray[i] = tp[i];
            imgarray[i] = imgar[i];
            favarray[i] = favar[i];
        }
        checkfavourite()
    }

}

var favouritearray = [];
var openingid = [];
var typearray = [];
var imgarray = [];
var favarray = [];

function addtofavourite(btnid, openid, type, img) {
    var ar = JSON.parse(localStorage.getItem('favouritearray'))
    var oid = JSON.parse(localStorage.getItem('openingidarray'))
    var imgar = JSON.parse(localStorage.getItem('imgarray'))
    var favar = JSON.parse(localStorage.getItem('favarray'))
    var flag = 0;
    if (oid != null) {
        for (i = 0; i < oid.length; i++) {
            if (openid == oid[i]) {
                flag = 1;
            }
        }
    }
    if (flag == 0) {
        favouritearray.push(btnid)
        openingid.push(openid)
        typearray.push(type)
        imgarray.push(img)
        favarray.push('favourite.png')
        localStorage.setItem("favouritearray", JSON.stringify(favouritearray));
        localStorage.setItem("openingidarray", JSON.stringify(openingid));
        localStorage.setItem("typearray", JSON.stringify(typearray));
        localStorage.setItem("imgarray", JSON.stringify(imgarray));
        localStorage.setItem("favarray", JSON.stringify(favarray));
        checkfavourite()
    }
    if (flag == 1) {
        var index = oid.indexOf(openid);
        if (index > -1) {
            document.getElementById(imgarray[index]).src = 'unfavourite.png';
            openingid.splice(index, 1);
            favouritearray.splice(index, 1);
            typearray.splice(index, 1);
            imgarray.splice(index, 1);
            favarray.splice(index, 1);
        }
        localStorage.setItem("favouritearray", JSON.stringify(favouritearray));
        localStorage.setItem("openingidarray", JSON.stringify(openingid));
        localStorage.setItem("typearray", JSON.stringify(typearray));
        localStorage.setItem("imgarray", JSON.stringify(imgarray));
        localStorage.setItem("favarray", JSON.stringify(favarray));
        checkfavourite()
    }
}

function checkfavourite() {
    removeall('favourite')
    var ar = JSON.parse(localStorage.getItem('favouritearray'))
    var oid = JSON.parse(localStorage.getItem('openingidarray'))
    var tp = JSON.parse(localStorage.getItem('typearray'))
    var imgar = JSON.parse(localStorage.getItem('imgarray'))
    var favar = JSON.parse(localStorage.getItem('favarray'))
    if (ar.length == 0) {
        $('#favourite').removeClass('headingdiv')
    } else {
        $('#favourite').addClass('headingdiv')
    }
    if (ar.length != 0) {
        for (i = 0; i < ar.length; i++) {
            var el = document.createElement('span');
            el.textContent = ar[i]
            el.className = 'headingdivinner'
            el.style.color = '#ff00a2'
            var idf = oid[i]
            if (tp[i] == 'c') {
                el.setAttribute('onclick', 'openit("' + String(idf) + '")')
            } else {
                el.setAttribute('data-toggle', "modal")
                el.setAttribute('data-target', idf)
            }

            document.getElementById('favourite').appendChild(el)
            document.getElementById(imgar[i]).src = favar[i];
        }
    }
}

function removefavourite() {
    localStorage.removeItem('favouritearray')
    localStorage.removeItem('openingidarray')
    localStorage.removeItem('imgarray')
    localStorage.removeItem('favarray')
    localStorage.removeItem('typearray');
    $('#favourite').removeClass('headingdiv');
    checkfavourite();
}

function collapseit(openit) {
    $(String('#' + openit)).slideToggle();
}

function searchgoogle(value) {
    if (value != '') {
        value = encodeURIComponent(value);
        window.open("https://www.google.com/search?q=" + value)
    }
}

function closenav() {
    $('#slide-out').addClass('sidenav-close');
    setTimeout(function () {
        $('#slide-out').removeClass('sidenav-close');
    }, 100);
}

function count(s) {
    var id = document.getElementById('interval');
    var count = 0;
    for (i in s) {
        count++;
    }
    return count;
}

function rectanglesolve() {
    var length = document.getElementById('inputreclength').value;
    var breadth = document.getElementById('inputrecbreadth').value;
    var diagonal=document.getElementById('inputrecdiagonal').value;
    var resultarea = document.getElementById('resultofarearec');
    var resultperi = document.getElementById('resultofperirec');
    var resultdiagonal = document.getElementById('resultofdiagonalrec');
    var resultlength = document.getElementById('resultoflengthrec');
    var resultbreadth = document.getElementById('resultofbreadthrec');
    if(length!='' && breadth!='' && diagonal!=''){
        resultarea.innerHTML = '';
        resultperi.innerHTML = '';
        resultdiagonal.innerHTML = '';
        resultlength.innerHTML = '';
        resultbreadth.innerHTML = '';
        if(length<breadth){
            resultarea.innerHTML="Length Should be Greater";
        }else{
            resultarea.innerHTML = "\\[a=" +length + " \\times " + breadth + " = " + eval(String(length) + '*' + String(breadth)) +"\\]";
            resultarea.innerHTML += "\\[Area \\space of \\space Rectangle \\space is \\space" + eval(String(length) + '*' + String(breadth))+"\\]";

            resultperi.innerHTML = "\\[p=2( " + length + " + " + breadth + " ) = 2( " + eval(String(length) + '+' + String(breadth)) + " ) = " + eval('2*(' + String(length) + '+' + String(breadth) + ")")+"\\]";
            resultperi.innerHTML += "\\[Perimeter \\space of \\space Rectangle \\space is \\space" + eval('2*(' + String(length) + '+' + String(breadth) + ")")+"\\]";
        }

    }
    else if (length != '' && breadth != '' && diagonal=='') {
        resultarea.innerHTML = '';
        resultperi.innerHTML = '';
        resultdiagonal.innerHTML = '';
        resultlength.innerHTML = '';
        resultbreadth.innerHTML = '';
        if(length<breadth){
                resultarea.innerHTML="Length Should be Greater";
        }else{
            resultarea.innerHTML = "\\[a=" +length + " \\times " + breadth + " = " + eval(String(length) + '*' + String(breadth)) +"\\]";
            resultarea.innerHTML += "\\[Area \\space of \\space Rectangle \\space is \\space" + eval(String(length) + '*' + String(breadth))+"\\]";

            resultperi.innerHTML = "\\[p=2( " + length + " + " + breadth + " ) = 2( " + eval(String(length) + '+' + String(breadth)) + " ) = " + eval('2*(' + String(length) + '+' + String(breadth) + ")")+"\\]";
            resultperi.innerHTML += "\\[Perimeter \\space of \\space Rectangle \\space is \\space" + eval('2*(' + String(length) + '+' + String(breadth) + ")")+"\\]";

            var breadth2=breadth*breadth;
            var length2=length*length;
            var add2=eval(String(breadth2 + length2));
            var add2sqrt=nerdamer.sqrt(add2).toString();
            resultdiagonal.innerHTML="\\[d= \\sqrt{"+breadth+"^2+"+length+"^2}= \\sqrt{"+breadth2+"+"+length2+"}= \\sqrt{"+add2+"}="+eval(add2sqrt).toFixed(3)+"\\]";
            resultdiagonal.innerHTML += "\\[Diagonal \\space of \\space Rectangle \\space is \\space" +eval(add2sqrt).toFixed(3)+"\\]";
        }

    }else if(length!='' && diagonal!=''){
        resultarea.innerHTML = '';
        resultperi.innerHTML = '';
        resultdiagonal.innerHTML = '';
        resultlength.innerHTML = '';
        resultbreadth.innerHTML = '';
        if(diagonal<length){
            resultbreadth.innerHTML="Diagonal Should be Greater";
        }else {
            var length22 = length * length;
            var diagonal22 = diagonal * diagonal;
            var bsub2 = eval(String(diagonal22 - length22));
            var bsub2sqrt = nerdamer.sqrt(bsub2).toString();
            bsub2sqrt = eval(bsub2sqrt).toFixed(3);
            resultbreadth.innerHTML = "\\[b= \\sqrt{" + diagonal + "^2-" + length + "^2}= \\sqrt{" + diagonal22 + "-" + length22 + "}= \\sqrt{" + bsub2 + "}=" + bsub2sqrt + "\\]";
            resultbreadth.innerHTML += "\\[Breadth \\space of \\space Rectangle \\space is \\space" + bsub2sqrt + "\\]";

            resultarea.innerHTML = "\\[a=" + length + " \\times " + bsub2sqrt + " = " + eval(String(length) + '*' + String(bsub2sqrt)) + "\\]";
            resultarea.innerHTML += "\\[Area \\space of \\space Rectangle \\space is \\space" + eval(String(length) + '*' + String(bsub2sqrt)) + "\\]";

            resultperi.innerHTML = "\\[p=2( " + length + " + " + bsub2sqrt + " ) = 2( " + eval(String(length) + '+' + String(bsub2sqrt)) + " ) = " + eval('2*(' + String(length) + '+' + String(bsub2sqrt) + ")") + "\\]";
            resultperi.innerHTML += "\\[Perimeter \\space of \\space Rectangle \\space is \\space" + eval('2*(' + String(length) + '+' + String(bsub2sqrt) + ")") + "\\]";
        }
    }else if(diagonal!='' && breadth!=''){
        resultarea.innerHTML = '';
        resultperi.innerHTML = '';
        resultdiagonal.innerHTML = '';
        resultlength.innerHTML = '';
        resultbreadth.innerHTML = '';
        if(diagonal<breadth){
            resultlength.innerHTML="Length should be Greater";
        }else {
            var diagonal2 = diagonal * diagonal;
            var breadth22 = breadth * breadth;
            var sub2 = eval(String(diagonal2 - breadth22));
            var sub2sqrt = nerdamer.sqrt(sub2).toString();
            sub2sqrt = eval(sub2sqrt).toFixed(3);
            resultlength.innerHTML = "\\[l= \\sqrt{" + diagonal + "^2-" + breadth + "^2}= \\sqrt{" + diagonal2 + "-" + breadth22 + "}= \\sqrt{" + sub2 + "}=" + sub2sqrt + "\\]";
            resultlength.innerHTML += "\\[Length \\space of \\space Rectangle \\space is \\space" + sub2sqrt + "\\]";

            resultarea.innerHTML = "\\[a=" + sub2sqrt + " \\times " + breadth + " = " + eval(String(sub2sqrt) + '*' + String(breadth)) + "\\]";
            resultarea.innerHTML += "\\[Area \\space of \\space Rectangle \\space is \\space" + eval(String(sub2sqrt) + '*' + String(breadth)) + "\\]";

            resultperi.innerHTML = "\\[p=2( " + sub2sqrt + " + " + breadth + " ) = 2( " + eval(String(sub2sqrt) + '+' + String(breadth)) + " ) = " + eval('2*(' + String(sub2sqrt) + '+' + String(breadth) + ")") + "\\]";
            resultperi.innerHTML += "\\[Perimeter \\space of \\space Rectangle \\space is \\space" + eval('2*(' + String(sub2sqrt) + '+' + String(breadth) + ")") + "\\]";
        }
    }
    else {
        resultarea.innerHTML = '';
        resultperi.innerHTML = '';
        resultdiagonal.innerHTML = '';
        resultlength.innerHTML = '';
        resultbreadth.innerHTML = '';
    }
    renderMathInElement(document.getElementById("resultofperirec"));
    renderMathInElement(document.getElementById("resultofarearec"));
    renderMathInElement(document.getElementById("resultofdiagonalrec"));
    renderMathInElement(document.getElementById("resultoflengthrec"));
    renderMathInElement(document.getElementById("resultofbreadthrec"));
}

function plotit(input, output, funcname) {
    var val = funcname;
    document.getElementById(output).innerHTML = '';

    function draw() {
        try {
            //val=val.replace(/s/g, 'x');
            // compile the expression once
            const expression = val;
            const expr = math.compile(expression)
            // evaluate the expression repeatedly for different values of x
            const xValues = math.range(-10, 10, 0.5).toArray()
            const yValues = xValues.map(function (x) {
                return expr.evaluate({x: x})
            })
            // render the plot using plotly
            const trace1 = {
                x: xValues,
                y: yValues,
                type: 'scatter'
            }
            const data = [trace1]
            Plotly.newPlot(output, data)
        } catch (err) {
            document.getElementById(output).innerHTML = "<chnc>Only PLOT for Single Variable 'x'</chnc><br>"
            document.getElementById(output).innerHTML += "Sorry! Can't Plot because ";
            document.getElementById(output).innerHTML += "<b><u>" + err + "</u></b>";
        }
    }

    draw()
}





