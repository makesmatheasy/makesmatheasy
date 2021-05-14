

function convertkatex(element, value) {
    var x = nerdamer(value);
    var value = x.toTeX();
    katex.render(value, element, {
        throwOnError: false,
    });
}

function searchgoogle(value) {
    if (value != "") {
        value = encodeURIComponent(value);
        window.open("https://www.google.com/search?q=" + value);
    }
}

//-----------------------------------------------------
//roman expanded form
function expandedform(input) {
    if (String(document.getElementById(input).value) == "") return "";
    else {
        if (input == "inpo") {
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
}

//roman expanded form

//roman calculator
function romanize(input) {
    if (input == "inpo") {
        var num = parseInt(document.getElementById(input).value);
    } else {
        var num = parseInt(input);
    }
    if (!+num) return "";
    var digits = String(+num).split(""),
        key = [
            "",
            "C",
            "CC",
            "CCC",
            "CD",
            "D",
            "DC",
            "DCC",
            "DCCC",
            "CM",
            "",
            "X",
            "XX",
            "XXX",
            "XL",
            "L",
            "LX",
            "LXX",
            "LXXX",
            "XC",
            "",
            "I",
            "II",
            "III",
            "IV",
            "V",
            "VI",
            "VII",
            "VIII",
            "IX",
        ],
        roman = "",
        i = 3;
    while (i--) roman = (key[+digits.pop() + i * 10] || "") + roman;
    return Array(+digits.join("") + 1).join("M") + roman;
}

//roman calculator

//deroman expanded form
function expandedformde(input, output) {
    if (document.getElementById(input).textContent == "")
        document.getElementById(output).innerHTML = "";
    else {
        var val = document.getElementById(input).textContent;
        var expanded = expandedform(input);
        var ar = [];
        ar = expanded.split("+");
        var temp = "";
        for (var i of ar) {
            if (i == 0) {
                temp += "";
            } else {
                temp += romanize(i) + "+";
            }
        }
        temp = temp.slice(0, -1);
        document.getElementById(output).innerHTML = temp;
    }
}

//deroman expanded form

//roman to arabic calulator
function deromanize(str) {
    var str = str.toUpperCase(),
        validator = /^M*(?:D?C{0,3}|C[MD])(?:L?X{0,3}|X[CL])(?:V?I{0,3}|I[XV])$/,
        token = /[MDLV]|C[MD]?|X[CL]?|I[XV]?/g,
        key = {
            M: 1000,
            CM: 900,
            D: 500,
            CD: 400,
            C: 100,
            XC: 90,
            L: 50,
            XL: 40,
            X: 10,
            IX: 9,
            V: 5,
            IV: 4,
            I: 1,
        },
        num = 0,
        m;
    if (!(str && validator.test(str)))
        if (document.getElementById("rinp").value == "") {
            return "";
        } else {
            return "Enter Valid Roman Number";
        }
    var temp = "";
    while ((m = token.exec(str))) num += key[m[0]];
    return num;
}

//roman to arabic calulator

//call deromanize
function callder() {
    document.getElementById("out2").innerHTML = deromanize(
        document.getElementById("rinp").value
    );
}

//call deromanize

//call romanize
function callr() {
    var x =parseInt(document.getElementById("inpo").value);
    if(x>0){
        var y = x%5000000;
        x = (x-y)/1000000;
        var z= y%5000;
        y = (y-z)/1000;
        document.getElementById("ouroman-1").innerHTML = romanize(x.toString());
        document.getElementById("ouroman-2").innerHTML = romanize(y.toString());
        document.getElementById("ouroman-3").innerHTML = romanize(z.toString());
        console.log((romanize(x.toString())));
        console.log((romanize(y.toString())));
    }else if(x<0){
        document.getElementById("ouroman-3").innerHTML = "Error: There are no negative Roman Numerals";
    }else if(x==0){
        document.getElementById("ouroman-3").innerHTML = "Error: There are no Roman Numerals for 0";
    }

}

//call romanize
//-----------------------------------------------------

//-----------------------------------------------------
//simple divide result
function performdivide() {
    var dividend = parseFloat(document.getElementById("dividendnum").value);
    var divisor = parseFloat(document.getElementById("divisornumwith").value);
    if (String(divisor) == "NaN" || String(dividend) == "NaN" || divisor == 0) {
        if (String(dividend) == "NaN") {
            document.getElementById("resultdivi").innerHTML = "Enter Dividend";
        }
        if (String(divisor) == "NaN") {
            document.getElementById("resultdivi").innerHTML = "Enter Divisor";
        }
        if (divisor == 0) {
            document.getElementById("resultdivi").innerHTML = "";
        }
        if (String(divisor) == "NaN" && String(dividend) == "NaN") {
            document.getElementById("resultdivi").innerHTML =
                "Enter Divisor and Dividend";
        }
    } else {
        var rem = dividend % divisor;
        var c = dividend / divisor;
        var temp =
            dividend +
            " ÷ " +
            divisor +
            " = " +
            c +
            "<br>" +
            "Quotient = " +
            parseInt(c) +
            "<br>" +
            "Remainder = " +
            rem;
        document.getElementById("resultdivi").innerHTML = temp;
    }
}

//simple divide result

//divide steps
function divisionwithsteps() {
    performdivide();
    var dividend = document.getElementById("dividendnum").value;
    var divisor = document.getElementById("divisornumwith").value;
    var resultContainer = $("#resultofdivsteps");
    var numberFormatTester = new RegExp("^[1-9]{1}[0-9]*$");
    var isDecimal =
        ("" + dividend).indexOf(".") > -1 || ("" + divisor).indexOf(".") > -1;
    var isNum =
        !(isNaN(+dividend) && isNaN(+divisor)) &&
        parseFloat(dividend) >= 0 &&
        parseFloat(divisor) >= 0;
    if (String(dividend) == "" || String(divisor) == "") {
        document.getElementById("resultofdivsteps").innerHTML = "";
    } else if ("" + divisor == "0") {
        document.getElementById("resultofdivsteps").innerHTML =
            "You cannot divide by 0";
        return false;
    } else if (isDecimal) {
        document.getElementById("resultofdivsteps").innerHTML =
            "Can't show steps for Decimal Division";
        return false;
    } else if (!numberFormatTester.test(divisor)) {
        if (String(divisor) == "") {
            document.getElementById("resultofdivsteps").innerHTML = "";
        } else {
            document.getElementById("resultofdivsteps").innerHTML =
                "Can't show steps for Negative Divisor";
        }
        return false;
    } else if (!numberFormatTester.test(dividend)) {
        if (String(dividend) == "") {
            document.getElementById("resultofdivsteps").innerHTML = "";
        } else {
            document.getElementById("resultofdivsteps").innerHTML =
                "Can't show steps for Negative Dividend";
        }
        return false;
    } else {
        var quotient = Math.floor(dividend / divisor);
        var remainder = dividend % divisor;
        var dividendLength = dividend.toString().length;
        var divisorLength = divisor.toString().length;
        var tableBody = "";
        var tableNumColumns = dividendLength + divisorLength;
        var tableNumRows = dividendLength * 2 + 2;
        var numSteps = dividendLength + 1;
        var tmpVar;
        for (var a = 1; a <= tableNumRows; a++) {
            tableBody += "<tr>";
            for (var b = 1; b <= tableNumColumns; b++) {
                tableBody +=
                    '<td style="padding: 7px; border:1px solid var(--apppink); ;"></td>';
            }
            tableBody += "</tr>";
        }
        resultContainer.html(
            '<div><h4 style="color:white"><table class="table table-bordered" style="color:white;width: 50px; padding: 0; margin-left:auto;margin-right:auto; border:2px solid light-grey;">' +
            tableBody +
            "</table></div>"
        );
        var tableRows = resultContainer.find("table tr");
        for (var i = 0; i < divisorLength; i++) {
            tableRows.eq(1).find("td").eq(i).html(divisor.toString()[i]);
        }
        tableRows
            .eq(1)
            .find("td")
            .eq(divisorLength - 1)
            .css("border-right", "6px solid white");
        for (var i = 0; i < dividendLength; i++) {
            tableRows
                .eq(1)
                .find("td")
                .eq(divisorLength + i)
                .html(dividend.toString()[i])
                .css("border-top", "6px solid white");
        }
        for (var currentStep = 1; currentStep < numSteps; currentStep++) {
            if (!bufferVar) var bufferVar = dividend.toString()[0];
            var stepResult = Math.floor(bufferVar / divisor);
            tableRows
                .eq(0)
                .find("td")
                .eq(divisorLength + currentStep - 1)
                .html(stepResult);
            tmpVar = (stepResult * divisor).toString();
            for (var a = tmpVar.length - 1; a >= 0; a--) {
                tableRows
                    .eq(currentStep * 2)
                    .find("td")
                    .eq(divisorLength + currentStep - a - 1)
                    .html(tmpVar[tmpVar.length - a - 1])
                    .css("border-bottom", "6px solid white");
            }
            tmpVar = (bufferVar - stepResult * divisor).toString();
            for (var a = tmpVar.length - 1; a >= 0; a--) {
                tableRows
                    .eq(currentStep * 2 + 1)
                    .find("td")
                    .eq(divisorLength + currentStep - a - 1)
                    .html(tmpVar[tmpVar.length - a - 1]);
            }
            tableRows
                .eq(currentStep * 2 + 1)
                .find("td")
                .eq(divisorLength + currentStep)
                .html(dividend.toString()[currentStep]);
            bufferVar = tmpVar + dividend.toString()[currentStep];
        }
    }
}

//divide steps

//divisibility checker
function checkdivisibility() {
    var n1 = parseInt(document.getElementById("n1").value);
    var n2 = parseInt(document.getElementById("n2").value);

    if (String(n1) != NaN && String(n2) != "NaN" && n1 % n2 == 0) {
        document.getElementById("divisibilitycheckresult").innerHTML =
            "Yes! " + String(n1) + " is Divisible by " + n2 + "<br>";
        document.getElementById("divisibilitycheckresult").innerHTML +=
            "\\[ \\frac{" +
            String(n1) +
            "}{" +
            String(n2) +
            "} = " +
            eval(String(n1 / n2)) +
            " \\]";
        document.getElementById("divisibilitycheckresultexplanation").innerHTML =
            "Explanation:<br>When " +
            String(n1) +
            " divides with " +
            String(n2) +
            " leaves Remainder 0.";
        //            var btn = document.createElement('input');
        //            btn.id="showcheckdivisibilitysteps"
        //            btn.type = "button";
        //            btn.className="btn btn-info";
        //            btn.value="Show Steps"
        //            document.getElementById('checkdivisibility').appendChild(btn);
    } else if (String(n1) != "NaN" && String(n2) != "NaN") {
        document.getElementById("divisibilitycheckresult").innerHTML =
            "No! " + String(n1) + " is not Divisible by " + n2;
        document.getElementById("divisibilitycheckresultexplanation").innerHTML =
            "Explanation:<br>When " +
            String(n1) +
            " divides with " +
            String(n2) +
            " leaves Remainder " +
            eval(n1 % n2) +
            ".";
    }
    renderMathInElement(document.getElementById("divisibilitycheckresult"));
}

function showdivisionstepsforcheckdivisibility() {
    $("html, body").animate(
        {
            scrollTop: $("#divide").offset().top,
        },
        100
    );
    document.getElementById("divisornumwith").value = document.getElementById(
        "n2"
    ).value;
    document.getElementById("dividendnum").value = document.getElementById(
        "n1"
    ).value;
    divisionwithsteps();
    $("#showcheckdivisibilitysteps").click(function () {
        $("html, body").animate(
            {
                scrollTop: $("#divide").offset().top,
            },
            2000
        );
    });
}

//divisibility checker

//-----------------------------------------------------

//-----------------------------------------------------
//factors
//    one number with steps
function printfactors() {
    var num = parseInt(document.getElementById("numforfactorhcflcm").value);
    var temp = "";
    var tt = "";
    var v = "";
    for (var i = 2; i <= num; i++) {
        while (num % i == 0) {
            temp += i + "&nbsp;&nbsp;&nbsp;<br>";
            v += i + ",";
            tt += "<pu>" + num + "</pu><br>";
            num = num / i;
        }
        document.getElementById("dividefactor").innerHTML = temp;
        document.getElementById("dividefactorresult").innerHTML = tt;
        document.getElementById("factorresult").innerHTML =
            "\\[Prime \\space Factors \\space are:\\]\\[" + v.slice(0, -1)+ "\\]";
        renderMathInElement(document.getElementById("factorresult"));
    }
}

//    one number with steps

//    more than one number without steps
function printmorefactors(input, output) {
    document.getElementById(output).textContent = "";
    var ar = [];
    var val = document.getElementById(input).value;
    val = val.replace(/\s+$/, ""); //right trim
    val = val.replace(/^\s+/, ""); //left trim
	if (val.search(/^[0-9 ]+$/) == -1)
	{
		document.getElementById("hcfprimefactor").innerHTML ="Enter numbers only";
		return;
	}
    val = val.split(" ");
    ar = val;
    var temp = "";
    document.getElementById(output).innerHTML =
        "\\[Prime \\space Factors \\space of \\space\\]";
    for (var num of ar) {
        var getnu = "\\[" + num + "\\space : \\space";
        var i;
        for (var i = 2; i <= num; i++) {
            while (num % i == 0) {
                temp += i + ",";
                num = num / i;
            }
        }
        temp = temp.slice(0, -1);
        document.getElementById(output).innerHTML += getnu + temp + "\\]";
        temp += "<br>";
        temp = "";
    }
    renderMathInElement(document.getElementById(output));
}

//    more than one number without steps

//hcf
function printhcffactor(val, outputf) {
    var num = parseInt(val);
    var temp = "";
    for (var i = 2; i <= num; i++) {
        while (num % i == 0) {
            temp += i + " ";
            num = num / i;
        }
    }
    temp = temp.split(" ");
    temp = removeDuplicates(temp);
    var newtemp = "";
    for (var ih of temp) {
        newtemp += ih + " ";
    }
    return newtemp;
}

function removeDuplicates(array) {
    return array.filter((a, b) => array.indexOf(a) === b);
}

function findduplicatesforhcf(array) {
    var maxlengthofarray = 0;
    var dup,
        indexofdup = 0;
    var i, j;
    //find reference array i.e bigger subarray
    for (var i = 0; i < array.length; i++) {
        var arlen = array[i].length;
        if (arlen > maxlengthofarray) {
            maxlengthofarray = arlen;
            dup = array[i];
            indexofdup = i;
        }
    }
    //remove elements which not present in all subarrays
    for (var k = 0; k < array.length; k++) {
        if (k == indexofdup) {
            continue;
        }
        for (var i = 0; i < dup.length; i++) {
            if (dup[i] == 0) {
                continue;
            }
            var flag = 0;
            for (var j = 0; j < array[k].length; j++) {
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

function hcf(input) {
    var ar = [];
    var val = document.getElementById(input).value;
    val = val.replace(/\s+$/, ""); //right trim
    val = val.replace(/^\s+/, ""); //left trim
	document.getElementById("hcfprimefactor").textContent = "";
	if (val.search(/^[0-9 ]+$/) == -1)
	{
		document.getElementById("hcfprimefactor").innerHTML ="Enter positive numbers only";
		return;
	}
    val = val.split(" ");
    ar = val;
    var temp = "";
    document.getElementById("hcfprimefactor").innerHTML =
        "\\[Prime \\space Factors \\space of \\space\\]";
    var factorarray = [];
    var j = 0;
    for (var num of ar) {
        factorarray[j] = [];
        factorarray[j][0] = 1;
        var index = 1;
        var getnu = "\\[" + num + "\\space : \\space";
        temp += "1,";
        for (var i = 2; i <= num; i++) {
            while (num % i == 0) {
                factorarray[j][index] = i;
                index++;
                temp += i + ",";
                num = num / i;
            }
        }
        temp = temp.slice(0, -1);
        document.getElementById("hcfprimefactor").innerHTML += getnu + temp + "\\]";
        j++;
        temp += "<br>";
        temp = "";
    }

    var arrayoffactors = factorarray;
    var dup = findduplicatesforhcf(arrayoffactors);
    var hfac = "";
    var hcfans = 1;
    for (var i of dup) {
        if (i != 0) {
            hcfans *= parseInt(i);
            hfac += i + ",";
        }
    }
    hfac = hfac.slice(0, -1);
    var flag = 0;
    if (ar.length == 1) flag = 1;

    if (flag == 1) {
        document.getElementById("resulthcf").innerHTML =
            "\\[ HCF \\space is \\space " + hcfans + " \\]";
        renderMathInElement(document.getElementById("resulthcf"));
    } else {
        var hcffac = printhcffactor(ar, "resulthcf");
        document.getElementById("resulthcf").innerHTML =
            "\\[" + hfac + "\\space are \\space in \\space Common.\\] \\[Therefore,";
        document.getElementById("resulthcf").innerHTML +=
            "\\space HCF \\space is \\space " + hcfans + "\\]";
        renderMathInElement(document.getElementById("resulthcf"));
    }
    if (val == null || val == "") {
        document.getElementById("resulthcf").innerHTML = "";
        document.getElementById("hcfprimefactor").innerHTML = "";
    }
    renderMathInElement(document.getElementById("hcfprimefactor"));
}

//hcf

//lcm
function factorslcmhcfempty() {
    $("#dividefactor").empty();
    $("#dividefactorresult").empty();
    $("#factorresult").empty();
    $("#resultlcms").empty();
    $("#hcfprimefactor").empty();
    $("#resulthcf").empty();
    $("#resultfac").empty();
    $("#resultlcm").empty();
}

function factorselect(numid) {
    var num = document.getElementById(numid).value;
    num = num.replace(/^\s+/, ""); //left trim
    num = num.replace(/\s+$/, ""); //right trim
	if (num.search(/^[0-9 ]+$/) == -1)
	{
		document.getElementById("hcfprimefactor").innerHTML ="Enter positive numbers only";
		return;
	}
    num = num.split(" ");
    if (num.length == 1) {
        printfactors();
    } else {
        printmorefactors(numid, "factorresult");
    }
}

function printfactorsfl(value) {
    var num = parseInt(value);
    var temp = [];
    ind = -1;
    for (var i = 2; i <= num; i++) {
        while (num % i == 0) {
            ind += 1;
            temp[ind] = i;
            num = num / i;
        }
    }
    return temp;
}

function lcmsol(input) {
    document.getElementById("resultlcm").innerHTML = "";
    document.getElementById("resultfac").innerHTML = "";
    document.getElementById("resultlcms").innerHTML = "";
    var num = document.getElementById(input).value;
	if (num.search(/^[0-9 ]+$/) == -1)
	{
		document.getElementById("hcfprimefactor").innerHTML ="Enter positive numbers only";
		return;
	}
    num = num.split(" ");
    num = num.filter(function (str) {
        return /\S/.test(str);
    });
    if (num.length != 0) {
        var temp =
            "<table class='table' style='color:white;width: 50px; padding: 0; margin: 0 auto; border:2px solid light-grey;'>";
        var tempfac =
            "<table class='table bor' style='color:white;width: 50px; padding: 0; margin: 0 auto; border-right:2px solid light-grey !important;'>";
        if (num.length == 1) {
            document.getElementById("resultlcm").innerHTML = "More than one number is required";
            document.getElementById("resultlcms").innerHTML = "";
        } else if (num.length == 2) {
            var lcmis = nerdamer.lcm(parseInt(num[0]), parseInt(num[1]));
        } else if (num.length == 3) {
            var lcmis = nerdamer.lcm(
                parseInt(num[0]),
                parseInt(num[1]),
                parseInt(num[2])
            );
        } else if (num.length == 4) {
            var lcmis = nerdamer.lcm(
                parseInt(num[0]),
                parseInt(num[1]),
                parseInt(num[2]),
                parseInt(num[3])
            );
        } else if (num.length == 5) {
            var lcmis = nerdamer.lcm(
                parseInt(num[0]),
                parseInt(num[1]),
                parseInt(num[2]),
                parseInt(num[3]),
                parseInt(num[4])
            );
        } else if (num.length == 6) {
            var lcmis = nerdamer.lcm(
                parseInt(num[0]),
                parseInt(num[1]),
                parseInt(num[2]),
                parseInt(num[3]),
                parseInt(num[4]),
                parseInt(num[5])
            );
        } else if (num.length == 7) {
            var lcmis = nerdamer.lcm(
                parseInt(num[0]),
                parseInt(num[1]),
                parseInt(num[2]),
                parseInt(num[3]),
                parseInt(num[4]),
                parseInt(num[5]),
                parseInt(num[6])
            );
        } else if (num.length == 8) {
            var lcmis = nerdamer.lcm(
                parseInt(num[0]),
                parseInt(num[1]),
                parseInt(num[2]),
                parseInt(num[3]),
                parseInt(num[4]),
                parseInt(num[5]),
                parseInt(num[6]),
                parseInt(num[7])
            );
        } else if (num.length == 9) {
            var lcmis = nerdamer.lcm(
                parseInt(num[0]),
                parseInt(num[1]),
                parseInt(num[2]),
                parseInt(num[3]),
                parseInt(num[4]),
                parseInt(num[5]),
                parseInt(num[6]),
                parseInt(num[7]),
                parseInt(num[8])
            );
        } else if (num.length == 10) {
            var lcmis = nerdamer.lcm(
                parseInt(num[0]),
                parseInt(num[1]),
                parseInt(num[2]),
                parseInt(num[3]),
                parseInt(num[4]),
                parseInt(num[5]),
                parseInt(num[6]),
                parseInt(num[7]),
                parseInt(num[8]),
                parseInt(num[9])
            );
        } else if (num.length == 11) {
            var lcmis = nerdamer.lcm(
                parseInt(num[0]),
                parseInt(num[1]),
                parseInt(num[2]),
                parseInt(num[3]),
                parseInt(num[4]),
                parseInt(num[5]),
                parseInt(num[6]),
                parseInt(num[7]),
                parseInt(num[8]),
                parseInt(num[9]),
                parseInt(num[10])
            );
        } else if (num.length == 12) {
            var lcmis = nerdamer.lcm(
                parseInt(num[0]),
                parseInt(num[1]),
                parseInt(num[2]),
                parseInt(num[3]),
                parseInt(num[4]),
                parseInt(num[5]),
                parseInt(num[6]),
                parseInt(num[7]),
                parseInt(num[8]),
                parseInt(num[9]),
                parseInt(num[10]),
                parseInt(num[11])
            );
        } else if (num.length == 13) {
            var lcmis = nerdamer.lcm(
                parseInt(num[0]),
                parseInt(num[1]),
                parseInt(num[2]),
                parseInt(num[3]),
                parseInt(num[4]),
                parseInt(num[5]),
                parseInt(num[6]),
                parseInt(num[7]),
                parseInt(num[8]),
                parseInt(num[9]),
                parseInt(num[10]),
                parseInt(num[11]),
                parseInt(num[12])
            );
        } else if (num.length == 14) {
            var lcmis = nerdamer.lcm(
                parseInt(num[0]),
                parseInt(num[1]),
                parseInt(num[2]),
                parseInt(num[3]),
                parseInt(num[4]),
                parseInt(num[5]),
                parseInt(num[6]),
                parseInt(num[7]),
                parseInt(num[8]),
                parseInt(num[9]),
                parseInt(num[10]),
                parseInt(num[11]),
                parseInt(num[12]),
                parseInt(num[13])
            );
        } else if (num.length == 15) {
            var lcmis = nerdamer.lcm(
                parseInt(num[0]),
                parseInt(num[1]),
                parseInt(num[2]),
                parseInt(num[3]),
                parseInt(num[4]),
                parseInt(num[5]),
                parseInt(num[6]),
                parseInt(num[7]),
                parseInt(num[8]),
                parseInt(num[9]),
                parseInt(num[10]),
                parseInt(num[11]),
                parseInt(num[12]),
                parseInt(num[13]),
                parseInt(num[14])
            );
        } else if (num.length == 16) {
            var lcmis = nerdamer.lcm(
                parseInt(num[0]),
                parseInt(num[1]),
                parseInt(num[2]),
                parseInt(num[3]),
                parseInt(num[4]),
                parseInt(num[5]),
                parseInt(num[6]),
                parseInt(num[7]),
                parseInt(num[8]),
                parseInt(num[9]),
                parseInt(num[10]),
                parseInt(num[11]),
                parseInt(num[12]),
                parseInt(num[13]),
                parseInt(num[14]),
                parseInt(num[15])
            );
        } else if (num.length == 17) {
            var lcmis = nerdamer.lcm(
                parseInt(num[0]),
                parseInt(num[1]),
                parseInt(num[2]),
                parseInt(num[3]),
                parseInt(num[4]),
                parseInt(num[5]),
                parseInt(num[6]),
                parseInt(num[7]),
                parseInt(num[8]),
                parseInt(num[9]),
                parseInt(num[10]),
                parseInt(num[11]),
                parseInt(num[12]),
                parseInt(num[13]),
                parseInt(num[14]),
                parseInt(num[15]),
                parseInt(num[16])
            );
        } else if (num.length == 18) {
            var lcmis = nerdamer.lcm(
                parseInt(num[0]),
                parseInt(num[1]),
                parseInt(num[2]),
                parseInt(num[3]),
                parseInt(num[4]),
                parseInt(num[5]),
                parseInt(num[6]),
                parseInt(num[7]),
                parseInt(num[8]),
                parseInt(num[9]),
                parseInt(num[10]),
                parseInt(num[11]),
                parseInt(num[12]),
                parseInt(num[13]),
                parseInt(num[14]),
                parseInt(num[15]),
                parseInt(num[16]),
                parseInt(num[17])
            );
        } else if (num.length == 19) {
            var lcmis = nerdamer.lcm(
                parseInt(num[0]),
                parseInt(num[1]),
                parseInt(num[2]),
                parseInt(num[3]),
                parseInt(num[4]),
                parseInt(num[5]),
                parseInt(num[6]),
                parseInt(num[7]),
                parseInt(num[8]),
                parseInt(num[9]),
                parseInt(num[10]),
                parseInt(num[11]),
                parseInt(num[12]),
                parseInt(num[13]),
                parseInt(num[14]),
                parseInt(num[15]),
                parseInt(num[16]),
                parseInt(num[17]),
                parseInt(num[18])
            );
        } else if (num.length == 20) {
            var lcmis = nerdamer.lcm(
                parseInt(num[0]),
                parseInt(num[1]),
                parseInt(num[2]),
                parseInt(num[3]),
                parseInt(num[4]),
                parseInt(num[5]),
                parseInt(num[6]),
                parseInt(num[7]),
                parseInt(num[8]),
                parseInt(num[9]),
                parseInt(num[10]),
                parseInt(num[11]),
                parseInt(num[12]),
                parseInt(num[13]),
                parseInt(num[14]),
                parseInt(num[15]),
                parseInt(num[16]),
                parseInt(num[17]),
                parseInt(num[18]),
                parseInt(num[19])
            );
        } else {
            document.getElementById("resultlcm").innerHTML +=
                "Upto 20 Numbers Supported<br>and you inputted " +
                String(num.length) +
                " Numbers";
            document.getElementById("resultlcms").innerHTML = "";
        }
        var facar = printfactorsfl(parseInt(lcmis));
        if (num.length > 20 || num.length == 1) {
            document.getElementById("resultlcm").innerHTML += "";
            document.getElementById("resultlcms").innerHTML = "";
        } else {
            //document.getElementById('resultlcm').innerHTML+="<pu>&nbsp;"+num+"</pu><br>";
            temp += "<tr>";
            for (var kl of num) {
                temp += "<td>" + kl + "</td>";
            }
            temp += "</tr>";
        }
        for (var i = 0; i < facar.length; i++) {
            for (var k = 0; k < num.length; k++) {
                if (parseInt(num[k]) % parseInt(facar[i]) == 0) {
                    num[k] = parseInt(num[k]) / parseInt(facar[i]);
                }
            }
            //document.getElementById('resultlcm').innerHTML+="<pu>&nbsp;"+num+"</pu><br>";
            temp += "</tr>";
            for (var kl of num) {
                temp += "<td>" + kl + "</td>";
            }
            temp += "</tr>";
        }
        for (var mm = 0; mm < facar.length; mm++) {
            //document.getElementById('resultfac').innerHTML+="&nbsp;"+facar[mm]+"&nbsp;<br>";
            tempfac += "<tr><td>" + facar[mm] + "</td></tr>";
        }
        if (num.length == 1) {
            document.getElementById("resultlcms").innerHTML = "More than one number is required";
        } else {
            document.getElementById("resultlcms").innerHTML +=
                "Lcm is " + String(lcmis);
        }
        document.getElementById("resultfac").innerHTML = tempfac;
        document.getElementById("resultlcm").innerHTML = temp;
    }
}

//lcm
//-----------------------------------------------------

function icosagonfind(){
    let side = parseInt(document.getElementById("inputsideicosa").value)
    let peri = 20*side
    let ar = 31.568*side*side
    document.getElementById("resultofperimetericosa2").innerHTML = "The perimeter is "+peri
    document.getElementById("resultofareaicosa1").innerHTML = "The area is "+ar
}

function setcal() {
    var s1 = document.getElementById("first-set").value;
    var s2 = document.getElementById("second-set").value;
    var s3 = document.getElementById("set-operation").value;
    var a1 = s1.split(" ");
    var a2 = s2.split(" ");
    var e1 = new Set(a1);
    var e2 = new Set(a2);
    if(s3=="Union")
    {
        var re =new Set([...e1, ...e2]);
        document.getElementById("set-result").innerHTML = [...re].join(' ') ;
    }
    if(s3=="Intersection")
    {

        var re = new Set();
   
        for (var elem of e1) {
            if (e2.has(elem)) {
                re.add(elem);
             }
        }
        document.getElementById("set-result").innerHTML = [...re].join(' ') ;
    }
    if(s3=="Difference")
    {
        var re = new Set(e1);
        for (var elem of e2) {
            re.delete(elem);
        }
        document.getElementById("set-result").innerHTML = [...re].join(' ') ;
    }
}

function smallerscfind(){
    let N = parseInt(document.getElementById("smallinin").value)
    let prevN = Math.floor(Math.sqrt(N));
    if (prevN * prevN == N)
        prevN -= 1;
    document.getElementById("smallsquare").innerHTML = prevN*prevN
    let prevN1 = Math.floor(Math.cbrt(N));
    if (prevN1 * prevN1 * prevN1 == N)
        prevN1 -= 1;    
    document.getElementById("smallcube").innerHTML = prevN1*prevN1
}
function greatcfind(){
    let N = parseInt(document.getElementById("greatinin").value)
    let nextN = Math.floor(Math.cbrt(N)) + 1;

    let ans =  nextN * nextN * nextN;
    document.getElementById("greatcube").innerHTML = "The cube greater than "+N+" is "+ans
}

function disfind(){
    let l = document.getElementById("disin1").value;
    let m = document.getElementById("disin2").value;
    let n = document.getElementById("disin3").value;
    let vol = (((l**2+m**2-n**2)*(l**2-m**2+n**2)*((-l)**2+m**2+n**2))/72);
    let vol1 = Math.sqrt(vol);
    let rad = Math.sqrt((l*l+m*m+n*n)/8);
    if(vol>0){
    document.getElementById("resultofdisvol").innerHTML = "The volume is "+vol1;
    document.getElementById("resultofdisrad").innerHTML = "The radius is "+rad;
    }
    else{
        document.getElementById("resultofdisvol").innerHTML = "Negative Mumber Square Root is not possible!"
        document.getElementById("resultofdisrad").innerHTML = "The radius is "+rad;
    }
}
function betafind(){
    let num1 = parseInt(document.getElementById("betain1").value)
    let num2 = parseInt(document.getElementById("betain2").value)
    let ans = (Math.gamma(num1) + Math.gamma(num2))/Math.gamma(num1+num2)
    document.getElementById("betafindans").innerHTML = ans
}

function heptafind(){
    let side = parseInt(document.getElementById("inputsideheptadeca").value)
    let peri = 17*side
    let ar = 22.735*side*side
    document.getElementById("resultofareaheptadeca1").innerHTML = "The area is "+ar
    document.getElementById("resultofperimeterheptadeca").innerHTML = "The perimeter is "+peri
}

function exterior(){
    // javascript program to find the angle
    // of a cyclic quadrilateral
    // when opposite interior angle is given
    var into = document.getElementById("exterior").value
    document.getElementById("exteriorinfo").innerHTML = "The exterior angle of a cyclic quadrilateral is same as sum of opposite interior angles"
    document.getElementById("exteriorans").innerHTML = "The exterior angle is " + into
}

function stp(){
    let vx1 = parseInt(document.getElementById("vx1").value)
    let vy1 = parseInt(document.getElementById("vy1").value)
    let vz1 = parseInt(document.getElementById("vz1").value)
    let vx2 = parseInt(document.getElementById("vx2").value)
    let vy2 = parseInt(document.getElementById("vy2").value)
    let vz2 = parseInt(document.getElementById("vz2").value)
    let vx3 = parseInt(document.getElementById("vx3").value)
    let vy3 = parseInt(document.getElementById("vy3").value)
    let vz3 = parseInt(document.getElementById("vz3").value)
    var display = document.getElementById("stpans");
    var disptemp = "";
    if(!isNaN(vx1) && !isNaN(vy1) && !isNaN(vz1) && !isNaN(vx2) && !isNaN(vy2) && !isNaN(vz2) && !isNaN(vx3) && !isNaN(vy3) && !isNaN(vz3))
   {
    disptemp += "\\[ Scalar \\space Triple \\space Product \\space of \\space three \\space vectors \\space \\overrightarrow{a}, \\space \\overrightarrow{b} \\space and \\space \\overrightarrow{c} \\space is \\space defined \\space as \\]";
    disptemp += "\\[ [\\overrightarrow{a} \\space \\overrightarrow{b} \\space \\overrightarrow{c}] \\space = \\space \\overrightarrow{a} . ( \\overrightarrow{b} \\times \\overrightarrow{c} ) \\]";
    disptemp += "\\[ [\\overrightarrow{a} \\space \\overrightarrow{b} \\space \\overrightarrow{c}] \\space = \\space  a1(b2c3-b3c2)-a2(b1c3-b3c1)+a3(b1c2-b2c1) \\]";
    disptemp += "\\[ [\\overrightarrow{a} \\space \\overrightarrow{b} \\space \\overrightarrow{c}] \\space = \\space" + vx1 + "((" + vy2 + "\\times" + vz3 + ")-(" + vy3 + "\\times" + vz2 + "))-(" +  vy1 + "((" + vx2 + "\\times" + vz3 + ")-(" + vz2 + "\\times" + vx3 + ")))+(" +  vz1 + "((" + vx2 + "\\times" + vy3 + ")-(" + vy2 + "\\times" + vx3 + ")))  \\]";
    disptemp += "\\[ [\\overrightarrow{a} \\space \\overrightarrow{b} \\space \\overrightarrow{c}] \\space = \\space" + vx1 + "(" + (vy2 * vz3) + "-(" + (vy3 * vz2) + "))-(" +  vy1 + "(" + (vx2 * vz3) + "-(" + (vz2 * vx3) + ")))+(" +  vz1 + "(" + (vx2 * vy3) + "-(" + (vy2 * vx3) + ")))  \\]";
    disptemp += "\\[ [\\overrightarrow{a} \\space \\overrightarrow{b} \\space \\overrightarrow{c}] \\space = \\space" + (vx1 * ((vy2 * vz3) - (vy3 * vz2))) + "-(" +  (vy1 * ((vx2 * vz3) - (vz2 * vx3))) + ")+(" +  (vz1 * ((vx2 * vy3) - (vy2 * vx3))) + ")  \\]";
    disptemp += "\\[ [\\overrightarrow{a} \\space \\overrightarrow{b} \\space \\overrightarrow{c}] \\space = \\space" + ((vx1 * ((vy2 * vz3) - (vy3 * vz2))) -  (vy1 * ((vx2 * vz3) - (vz2 * vx3))) +  (vz1 * ((vx2 * vy3) - (vy2 * vx3)))) + "  \\]";
    display.innerHTML = disptemp;
    renderMathInElement(display);
}
else{
    disptemp += "\\[Please \\space enter \\space all \\space fields \\]";
    display.innerHTML = disptemp;
    renderMathInElement(display);
}
}

function paralleloarea(){
    let vx1 = parseInt(document.getElementById("volpx1").value)
    let vy1 = parseInt(document.getElementById("volpx2").value)
    let vz1 = parseInt(document.getElementById("volpx3").value)
    let vx2 = parseInt(document.getElementById("volpy1").value)
    let vy2 = parseInt(document.getElementById("volpy2").value)
    let vz2 = parseInt(document.getElementById("volpy3").value)
    let vx3 = parseInt(document.getElementById("volpz1").value)
    let vy3 = parseInt(document.getElementById("volpz2").value)
    let vz3 = parseInt(document.getElementById("volpz3").value)
    var display = document.getElementById("paralleo");
    var disptemp = "";
    if(!isNaN(vx1) && !isNaN(vy1) && !isNaN(vz1) && !isNaN(vx2) && !isNaN(vy2) && !isNaN(vz2) && !isNaN(vx3) && !isNaN(vy3) && !isNaN(vz3))
   {
    disptemp += ((vx1 * ((vy2 * vz3) - (vy3 * vz2))) -  (vy1 * ((vx2 * vz3) - (vz2 * vx3))) +  (vz1 * ((vx2 * vy3) - (vy2 * vx3)))) ;
    display.innerHTML = disptemp;
    renderMathInElement(display);
}
else{
    disptemp += "\\[Please \\space enter \\space all \\space fields \\]";
    display.innerHTML = disptemp;
    renderMathInElement(display);
}
}

function vectorline(){
    let a = parseInt(document.getElementById("i1").value)
    let b = parseInt(document.getElementById("i2").value)
    let c = parseInt(document.getElementById("i3").value)
    let d = parseInt(document.getElementById("i4").value)
    let e = parseInt(document.getElementById("i5").value)
    let f = parseInt(document.getElementById("i6").value)
    let g = parseInt(document.getElementById("i7").value)
    let h = parseInt(document.getElementById("i8").value)
    let i = parseInt(document.getElementById("i9").value)
    let j = parseInt(document.getElementById("i10").value)
    let k = parseInt(document.getElementById("i11").value)
    let l = parseInt(document.getElementById("i12").value)
    var in1 = (g-a);  var in2 = (h-b); var in3 = (i-c);
    var result = (in1*((e*l)-(k*f))) - (in2*((d*l)-(f*j))) + (in3*((d*k)-(e*j)));
    var output = document.getElementById("vectorline1");
    var temp = "";
    if(!isNaN(a) && !isNaN(b) && !isNaN(c) && !isNaN(d) && !isNaN(e) && !isNaN(f) && !isNaN(g) && !isNaN(h) && !isNaN(i) && !isNaN(j) && !isNaN(k) && !isNaN(l)){
     if(result==0){
          temp += "\\[The \\space two \\space given \\space lines \\space intersect \\space each \\space other \\]";
          output.innerHTML = temp;
          renderMathInElement(output);
     }
     else{
        temp += "\\[The \\space two \\space given \\space lines \\space do \\space not \\space intersect \\space each \\space other \\]";
        output.innerHTML = temp;
        renderMathInElement(output);
     }
    }
    else{
        temp += "\\[Please \\space enter \\space all \\space fields \\]";
        output.innerHTML = temp;
        renderMathInElement(output);
    }

}

function ctangle(){
    // javascript program to find the angle
    // between a chord and a tangent
    // when angle in the alternate segment is given
    var into = document.getElementById("ctangle").value
    document.getElementById("ctangleinfo").innerHTML = "The angle between chord and tangent is same as angle between alternate segment"
    document.getElementById("ctangleans").innerHTML = "The angle between chord and tangent is " + into
}

//-----------------------------------------------------
function centcal(){
       var a1 = parseInt(document.getElementById("fxc").value);
       var a2 = parseInt(document.getElementById("sxc").value);
       var a3 = parseInt(document.getElementById("txc").value);

       var b1 = parseInt(document.getElementById("fyc").value);
       var b2 = parseInt(document.getElementById("syc").value);
       var b3 = parseInt(document.getElementById("tyc").value);

       var c1 = parseInt(document.getElementById("fcc").value);
       var c2 = parseInt(document.getElementById("scc").value);
       var c3 = parseInt(document.getElementById("tcc").value);

       var x1 = ((b1*c2)-(b2*c1))/((a2*b1)-(a1*b2));
       var y1 = ((c1*a2)-(c2*a1))/((a2*b1)-(a1*b2));

       var x2 = ((b2*c3)-(b3*c2))/((a3*b2)-(a2*b3));
       var y2 = ((c2*a3)-(c3*a2))/((a3*b2)-(a2*b3));

       var x3 = ((b3*c1)-(b1*c3))/((a1*b3)-(a3*b1));
       var y3 = ((c3*a1)-(c1*a3))/((a1*b3)-(a3*b1));

 

    var ans = "( " + ((x1 + x2 +x3)/3).toFixed(2).toString() + ", " 
    + ((y1 + y2 + y3)/3).toFixed(2).toString() + " )";

    document.getElementById("rcc").innerHTML = ans;
    document.getElementById("rcch").innerHTML = "Centroid Of Triangle";
}

function rtfind(){
    let side  = parseInt(document.getElementById("inputrtside").value)
    let ar = 2.975*side*side
    let vol = 0.422*side*side*side
    let ans = document.getElementById("resultofrtvol");
    let ans1 = document.getElementById("resultofrtarea");
    let temp = "";
    let temp1 = "";
    if(!isNaN(side)){
    temp += "\\[0.422 \\times " + side + "\\times" + side + "\\times" + side + " \\]";
    temp += "\\[0.422 \\times " + (side*side*side) + " \\]";
    temp += "\\[Volume \\space of \\space Releaux \\space Tetrahedron \\space is \\]"
    temp += "\\[ " + vol.toFixed(3) + " \\]";
    ans.innerHTML = temp;
    renderMathInElement(ans);
    temp1 += "\\[2.975 \\times " + side + "\\times" + side + " \\]";
    temp1 += "\\[0.422 \\times " + (side*side) + " \\]";
    temp1 += "\\[Area \\space of \\space Releaux \\space Tetrahedron \\space is \\]"
    temp1 += "\\[ " + ar.toFixed(3) + " \\]";
    ans1.innerHTML = temp1;
    renderMathInElement(ans1);
}
    else{
        temp += "\\[Please \\space enter \\space side  \\]";
        temp1 += "";
        ans.innerHTML = temp;
        ans1.innerHTML = temp1;
        renderMathInElement(ans);
        renderMathInElement(ans1);
    }
}

function decagramfind(){
    let side  = parseInt(document.getElementById("inputdecagramside").value)
    let peri = 20*side
    let ar = 17.231*side*side
    document.getElementById("resultofdecagramperi").innerHTML = "The perimeter is "+peri
    document.getElementById("resultofdecagramarea").innerHTML = "The area is "+ar
}

function enneagramfind(){
    let side  = parseInt(document.getElementById("inputenneagramside").value);
    let peri = 40*side;
    let ar = 3.248*side*side;
    let ans = document.getElementById("resultofenneagramperi");
    let ans1 = document.getElementById("resultofenneagramarea");
    let temp = "";
    let temp1 = ""; 
    if(!isNaN(side)){
    temp += "\\[40 \\times " + side + " \\]";
    temp += "\\[Perimeter \\space of \\space Enneagram \\space is \\]";
    temp += "\\[ " + peri + " \\]";
    ans.innerHTML = temp;
    renderMathInElement(ans);
    temp1 += "\\[4 \\times \\frac{ \\sqrt{5 \\times (5 - 2 \\sqrt{5})}}{2} \\times " + side + "^{2} \\]";
    temp1  += "\\[4 \\times \\frac{ \\sqrt{5 \\times (5 - 2 \\sqrt{5})}}{2} \\times " + (side**2) + " \\]";
    temp1 += "\\[ 4 \\times 0.812 \\times " + (side**2) + " \\]";
    temp1 += "\\[Area \\space of \\space Enneagram \\space is \\]";
    temp1 += "\\[ " + ar + " \\]";
    ans1.innerHTML = temp1;
    renderMathInElement(ans1);
    }
    else{
            temp += "\\[Please \\space enter \\space side  \\]";
            temp1 += "";
            ans.innerHTML = temp;
            ans1.innerHTML = temp1;
            renderMathInElement(ans);
            renderMathInElement(ans1);
        }
}

function cencirtcal(){
    var a1 = parseInt(document.getElementById("fxc").value);
    var a2 = parseInt(document.getElementById("sxc").value);
    var a3 = parseInt(document.getElementById("txc").value);

    var b1 = parseInt(document.getElementById("fyc").value);
    var b2 = parseInt(document.getElementById("syc").value);
    var b3 = parseInt(document.getElementById("tyc").value);

    var c1 = parseInt(document.getElementById("fcc").value);
    var c2 = parseInt(document.getElementById("scc").value);
    var c3 = parseInt(document.getElementById("tcc").value);

    var x1 = ((b1*c2)-(b2*c1))/((a2*b1)-(a1*b2));
    var y1 = ((c1*a2)-(c2*a1))/((a2*b1)-(a1*b2));

    var x2 = ((b2*c3)-(b3*c2))/((a3*b2)-(a2*b3));
    var y2 = ((c2*a3)-(c3*a2))/((a3*b2)-(a2*b3));

    var x3 = ((b3*c1)-(b1*c3))/((a1*b3)-(a3*b1));
    var y3 = ((c3*a1)-(c1*a3))/((a1*b3)-(a3*b1));

    var mabx =(x1+x2)/2;
    var maby =(y1+y2)/2;
    var aab = (y2-y1)/(x2-x1);

    var macx =(x1+x3)/2;
    var macy =(y1+y3)/2;
    var aac = (y3-y1)/(x3-x1);

    var a4 = mabx;
    var b4 =-1;
    var c4 = (aab*mabx)-maby;

    var a5 = macx;
    var b5 =-1;
    var c5 = (aac*macx)-macy;



    var o1 = (((b4*c5)-(b5*c4))/((a5*b4)-(a4*b5))).toFixed(2);
    var o2 = (((c4*a5)-(c5*a4))/((a5*b4)-(a4*b5))).toFixed(2);

    var ans = "( " + o1 + ", " + o2 + " )";
    document.getElementById("rcc").innerHTML = ans;
    document.getElementById("rcch").innerHTML ="Circumcenter of Triangle";

}


function cenintcal(){
    var a1 = parseInt(document.getElementById("fxc").value);
    var a2 = parseInt(document.getElementById("sxc").value);
    var a3 = parseInt(document.getElementById("txc").value);

    var b1 = parseInt(document.getElementById("fyc").value);
    var b2 = parseInt(document.getElementById("syc").value);
    var b3 = parseInt(document.getElementById("tyc").value);

    var c1 = parseInt(document.getElementById("fcc").value);
    var c2 = parseInt(document.getElementById("scc").value);
    var c3 = parseInt(document.getElementById("tcc").value);

    var x1 = ((b1*c2)-(b2*c1))/((a2*b1)-(a1*b2));
    var y1 = ((c1*a2)-(c2*a1))/((a2*b1)-(a1*b2));

    var x2 = ((b2*c3)-(b3*c2))/((a3*b2)-(a2*b3));
    var y2 = ((c2*a3)-(c3*a2))/((a3*b2)-(a2*b3));

    var x3 = ((b3*c1)-(b1*c3))/((a1*b3)-(a3*b1));
    var y3 = ((c3*a1)-(c1*a3))/((a1*b3)-(a3*b1));

    var a = Math.sqrt( Math.pow((x3-x2), 2) + Math.pow((y3-y2), 2));
    var b = Math.sqrt( Math.pow((x1-x3), 2) + Math.pow((y1-y3), 2));
    var c = Math.sqrt( Math.pow((x2-x1), 2) + Math.pow((y2-y1), 2));


    var o1 = ((((a*x1)+(b*x2)+(c*x3))/(a+b+c))).toFixed(2);
    var o2 = ((((a*y1)+(b*y2)+(c*y3))/(a+b+c))).toFixed(2);

    var ans = "( " + o1 + ", " + o2 + " )";
    document.getElementById("rcc").innerHTML = ans;
    document.getElementById("rcch").innerHTML ="Incenter of Triangle";

}


function cenextcal(){
    var a1 = parseInt(document.getElementById("fxc").value);
    var a2 = parseInt(document.getElementById("sxc").value);
    var a3 = parseInt(document.getElementById("txc").value);

    var b1 = parseInt(document.getElementById("fyc").value);
    var b2 = parseInt(document.getElementById("syc").value);
    var b3 = parseInt(document.getElementById("tyc").value);

    var c1 = parseInt(document.getElementById("fcc").value);
    var c2 = parseInt(document.getElementById("scc").value);
    var c3 = parseInt(document.getElementById("tcc").value);

    var x1 = ((b1*c2)-(b2*c1))/((a2*b1)-(a1*b2));
    var y1 = ((c1*a2)-(c2*a1))/((a2*b1)-(a1*b2));

    var x2 = ((b2*c3)-(b3*c2))/((a3*b2)-(a2*b3));
    var y2 = ((c2*a3)-(c3*a2))/((a3*b2)-(a2*b3));

    var x3 = ((b3*c1)-(b1*c3))/((a1*b3)-(a3*b1));
    var y3 = ((c3*a1)-(c1*a3))/((a1*b3)-(a3*b1));

    var a = Math.sqrt( Math.pow((x3-x2), 2) + Math.pow((y3-y2), 2));
    var b = Math.sqrt( Math.pow((x1-x3), 2) + Math.pow((y1-y3), 2));
    var c = Math.sqrt( Math.pow((x2-x1), 2) + Math.pow((y2-y1), 2));


    var excenteropx1 = ((-a*x1 + b*x2 + c*x3)/(-a+b+c)).toFixed(2);
    var excenteropx2 = ((a*x1 - b*x2 + c*x3)/(a-b+c)).toFixed(2);
    var excenteropx3 = ((a*x1 + b*x2 - c*x3)/(a+b-c)).toFixed(2);

    var excenteropy1 = ((-a*y1 + b*y2 + c*y3)/(-a+b+c)).toFixed(2);
    var excenteropy2 = ((a*y1 - b*y2 + c*y3)/(a-b+c)).toFixed(2);
    var excenteropy3 = ((a*y1 + b*y2 - c*y3)/(a+b-c)).toFixed(2);

    document.getElementById("rcc").innerHTML = `The excentre for first side is ( ${excenteropx1} , ${excenteropy1} ) <br>`;
    document.getElementById("rcc").innerHTML += `The excentre for second side is ( ${excenteropx2} , ${excenteropy2} ) <br>`;
    document.getElementById("rcc").innerHTML += `The excentre for third side is ( ${excenteropx3} , ${excenteropy3} ) <br>`;
    document.getElementById("rcch").innerHTML ="Excenter of Triangle";

}
//check for set value buttons
function checkforusetrigovalue() {
    var el = document.getElementById("soltri");
    if (
        el.innerText != "" &&
        el.innerText != "Cannot Compute for -ve Square Root" &&
        el.innerText != "Hypotenuse Should be Greater" &&
        el.innerText != "Kindly fill Atleast 2 fields" &&
        el.innerText != "Right angled triangle with such dimensions is not possible"
    ) {
        $("#usetrigovaluesbtn").fadeIn();
    } else {
        $("#usetrigovaluesbtn").fadeOut();
    }
}

//check for set value buttons


function greatsfind(){
    let side  = parseInt(document.getElementById("greatinin1").value)
    let nextN = Math.floor(Math.sqrt(side)) + 1;
    let ans = nextN*nextN
    document.getElementById("greatsqaure").innerHTML = ans
}

function ssdfind(){
    let side = parseInt(document.getElementById("inputsidessd").value);
    let vol = (1.25*side*side*side*13.71).toFixed(3);
    let ar = 15*side*side*3.078;
    let ans = document.getElementById("resultofvolssd");
    let ans1 = document.getElementById("resultofareassd");
    let temp1 ="";
    let temp2 = "";
    if(!isNaN(side)){
    temp1 += "\\[\\frac{5}{4} \\times " + side + "^{3} \\space \\times \\space (7 \\space + \\space 3 \\sqrt{5} ) \\]"
    temp1 += "\\[ " + (5/4) + "\\times" + (side)**3 + " \\times " + ((7+3*Math.sqrt(5)).toFixed(2)) + " \\]"
    temp1 += "\\[Volume \\space of \\space Small \\space Stellated \\space Dodecahedron \\space is \\]";
    temp1 += "\\[" + vol + " \\]"
    ans.innerHTML = temp1;
    renderMathInElement(ans);
    temp2 += "\\[15 \\times " + (side) + "^{2} \\times \\sqrt{5+2\\sqrt{5}} \\]";
    temp2 += "\\[15 \\times " + (side)**2 + "\\times" + (Math.sqrt(5+(2*(Math.sqrt(5)))).toFixed(3)) + " \\]";
    temp2 += "\\[Area \\space of \\space Small \\space Stellated \\space Dodecahedron \\space is \\]";
    temp2 += "\\[" + ar + " \\]";
    ans1.innerHTML = temp2;
    renderMathInElement(ans1);
    }
    else{
        temp1 += "\\[Please \\space enter \\space side \\space a \\]";
        temp2 += "";
        ans.innerHTML = temp1;
        ans1.innerHTML = temp2;
        renderMathInElement(ans);
        renderMathInElement(ans1);
    }
}

//solve trigonometry values from right triangle
function solvesimpletrigo() {
    var pp = document.getElementById("p").value;s
    var base = document.getElementById("b").value;
    var hyp = document.getElementById("h").value;
    if (
        (pp == "" && base == "") ||
        (base == "" && hyp == "") ||
        (hyp == "" && pp == "")
    ) {
        document.getElementById("soltri").innerHTML =
            "Kindly fill Atleast 2 fields";
    }
    else if(pp <0 || base <0 || hyp < 0 ){
        document.getElementById("soltri").innerHTML = "The sides cannot be negative"
    }
    else {
        if (parseInt(hyp) < parseInt(pp) || parseInt(hyp) < parseInt(base)) {
            document.getElementById("h").style.color = "red";
            document.getElementById("soltri").innerHTML =
                "Hypotenuse Should be Greater";
        } else if (pp != "" && base != "" && hyp != "" && parseInt(hyp) ^ 2 != parseInt(pp) ^ 2 + parseInt(base) ^ 2 && parseInt(hyp) ^ 2 !=  parseInt(base) ^ 2 +parseInt(pp) ^ 2 ) {
            document.getElementById("soltri").innerHTML =
                "Right angled triangle with such dimensions is not possible";
        } else if (pp == "") {
            document.getElementById("h").style.color = "white";
            var pp = eval(hyp * hyp - base * base);
            var kl = String(pp);
            pp = Math.sqrt(String(pp));
            if (pp.toString() != "NaN") {
                pp = pp.toFixed(2);
                var tempp =
                    "\\[Value\\space of\\space  Perpendicular= \\sqrt{" +
                    kl +
                    "}=" +
                    pp +
                    "\\]";
                tempp +=
                    String(
                        "\\[sin\\theta =\\frac{p}{h} =\\frac{" +
                        pp +
                        "}{" +
                        hyp +
                        "} = " +
                        eval(String(pp + "/" + hyp)).toFixed(2)
                    ) + "\\]";
                tempp +=
                    "\\[cos\\theta =\\frac{b}{h} =\\frac{" +
                    base +
                    "}{" +
                    hyp +
                    "}= " +
                    eval(String(base + "/" + hyp)).toFixed(2) +
                    "\\]";
                tempp +=
                    "\\[tan\\theta=\\frac{p}{b} =\\frac{" +
                    pp +
                    "}{" +
                    base +
                    "}= " +
                    eval(String(pp + "/" + base)).toFixed(2) +
                    "\\]";
                tempp +=
                    "\\[cosec\\theta=\\frac{h}{p} =\\frac{" +
                    hyp +
                    "}{" +
                    pp +
                    "}= " +
                    eval(String(hyp + "/" + pp)).toFixed(2) +
                    "\\]";
                tempp +=
                    "\\[sec\\theta=\\frac{h}{b} =\\frac{" +
                    hyp +
                    "}{" +
                    base +
                    "}= " +
                    eval(String(hyp + "/" + base)).toFixed(2) +
                    "\\]";
                tempp +=
                    "\\[cot\\theta=\\frac{b}{p} =\\frac{" +
                    base +
                    "}{" +
                    pp +
                    "}= " +
                    eval(String(base + "/" + pp)).toFixed(2) +
                    "\\]";
                document.getElementById("soltri").innerHTML = tempp;
                renderMathInElement(document.getElementById("soltri"));
            } else {
                document.getElementById("soltri").innerHTML =
                    "Cannot Compute for -ve Square Root";
            }
        } else if (base == "") {
            document.getElementById("h").style.color = "white";
            var base = eval(hyp * hyp - pp * pp);
            var kll = String(base);
            base = Math.sqrt(String(base));
            if (base.toString() != "NaN") {
                base = base.toFixed(2);
                var tempp =
                    "\\[Value\\space of\\space Base= \\sqrt{" + kll + "}=" + base + "\\]";
                tempp +=
                    String(
                        "\\[sin\\theta =\\frac{p}{h} =\\frac{" +
                        pp +
                        "}{" +
                        hyp +
                        "} = " +
                        eval(String(pp + "/" + hyp)).toFixed(2)
                    ) + "\\]";
                tempp +=
                    "\\[cos\\theta=\\frac{b}{h} =\\frac{" +
                    base +
                    "}{" +
                    hyp +
                    "} = " +
                    eval(String(base + "/" + hyp)).toFixed(2) +
                    "\\]";
                tempp +=
                    "\\[tan\\theta=\\frac{p}{b} =\\frac{" +
                    pp +
                    "}{" +
                    base +
                    "}= " +
                    eval(String(pp + "/" + base)).toFixed(2) +
                    "\\]";
                tempp +=
                    "\\[cosec\\theta=\\frac{h}{p} =\\frac{" +
                    hyp +
                    "}{" +
                    pp +
                    "}= " +
                    eval(String(hyp + "/" + pp)).toFixed(2) +
                    "\\]";
                tempp +=
                    "\\[sec\\theta=\\frac{h}{b} =\\frac{" +
                    hyp +
                    "}{" +
                    base +
                    "} = " +
                    eval(String(hyp + "/" + base)).toFixed(2) +
                    "\\]";
                tempp +=
                    "\\[cot\\theta=\\frac{b}{p} =\\frac{" +
                    base +
                    "}{" +
                    pp +
                    "} = " +
                    eval(String(base + "/" + pp)).toFixed(2) +
                    "\\]";
                document.getElementById("soltri").innerHTML = tempp;
                renderMathInElement(document.getElementById("soltri"));
            } else {
                document.getElementById("soltri").innerHTML =
                    "Cannot Compute for -ve Square Root";
            }
        } else if (hyp == "") {
            document.getElementById("h").style.color = "white";
            var hyp = eval(base * base + pp * pp);
            var klll = String(hyp);
            hyp = Math.sqrt(String(hyp));
            if (hyp.toString() != "NaN") {
                hyp = hyp.toFixed(2);
                var tempp =
                    "\\[Value\\space of\\space Hypotenuse=\\sqrt{" +
                    klll +
                    "}=" +
                    hyp +
                    "\\]";
                tempp +=
                    String(
                        "\\[sin\\theta =\\frac{p}{h} =\\frac{" +
                        pp +
                        "}{" +
                        hyp +
                        "}= " +
                        eval(String(pp + "/" + hyp)).toFixed(2)
                    ) + "\\]";
                tempp +=
                    "\\[cos\\theta=\\frac{b}{h} =\\frac{" +
                    base +
                    "}{" +
                    hyp +
                    "}= " +
                    eval(String(base + "/" + hyp)).toFixed(2) +
                    "\\]";
                tempp +=
                    "\\[tan\\theta=\\frac{p}{b} =\\frac{" +
                    pp +
                    "}{" +
                    base +
                    "}= " +
                    eval(String(pp + "/" + base)).toFixed(2) +
                    "\\]";
                tempp +=
                    "\\[cosec\\theta=\\frac{h}{p} =\\frac{" +
                    hyp +
                    "}{" +
                    pp +
                    "}= " +
                    eval(String(hyp + "/" + pp)).toFixed(2) +
                    "\\]";
                tempp +=
                    "\\[sec\\theta=\\frac{h}{b} =\\frac{" +
                    hyp +
                    "}{" +
                    base +
                    "}= " +
                    eval(String(hyp + "/" + base)).toFixed(2) +
                    "\\]";
                tempp +=
                    "\\[cot\\theta=\\frac{b}{p} =\\frac{" +
                    base +
                    "}{" +
                    pp +
                    "} = " +
                    eval(String(base + "/" + pp)).toFixed(2) +
                    "\\]";

                document.getElementById("soltri").innerHTML = tempp;
                renderMathInElement(document.getElementById("soltri"));
            } else {
                document.getElementById("soltri").innerHTML =
                    "Cannot Compute for -ve Square Root";
            }
        } else {
            document.getElementById("h").style.color = "white";
            var tempp =
                String(
                    "\\[sin\\theta =\\frac{p}{h} =\\frac{" +
                    pp +
                    "}{" +
                    hyp +
                    "} = " +
                    eval(String(pp + "/" + hyp)).toFixed(2)
                ) + "\\]";
            tempp +=
                "\\[cos\\theta=\\frac{b}{h} =\\frac{" +
                base +
                "}{" +
                hyp +
                "}=" +
                eval(String(base + "/" + hyp)).toFixed(2) +
                "\\]";
            tempp +=
                "\\[tan\\theta=\\frac{p}{b} =\\frac{" +
                pp +
                "}{" +
                base +
                "}= " +
                eval(String(pp + "/" + base)).toFixed(2) +
                "\\]";
            tempp +=
                "\\[cosec\\theta=\\frac{h}{p} =\\frac{" +
                hyp +
                "}{" +
                pp +
                "} = " +
                eval(String(hyp + "/" + pp)).toFixed(2) +
                "\\]";
            tempp +=
                "\\[sec\\theta=\\frac{h}{b} =\\frac{" +
                hyp +
                "}{" +
                base +
                "} = " +
                eval(String(hyp + "/" + base)).toFixed(2) +
                "\\]";
            tempp +=
                "\\[cot\\theta=\\frac{b}{p} =\\frac{" +
                base +
                "}{" +
                pp +
                "}= " +
                eval(String(base + "/" + pp)).toFixed(2) +
                "\\]";
            document.getElementById("soltri").innerHTML = tempp;
            renderMathInElement(document.getElementById("soltri"));
        }
    }
}

//solve trigonometry values from right triangle

//set trigonometry value to calculator
function set(obj) {
    if (
        document.getElementById("cal").style.display == "" ||
        document.getElementById("cal").style.display == "none"
    ) {
        opencal();
    }
    var pp = document.getElementById("p").value;
    var base = document.getElementById("b").value;
    var hyp = document.getElementById("h").value;
    if (hyp == "") {
        var hyp = eval(base * base + pp * pp);
        hyp = Math.sqrt(String(hyp));
        hyp = hyp.toFixed(2);
    }
    if (pp == "") {
        var pp = eval(hyp * hyp - base * base);
        pp = Math.sqrt(String(pp));
        pp = pp.toFixed(2);
    }
    if (base == "") {
        var base = eval(hyp * hyp - pp * pp);
        base = Math.sqrt(String(base));
        base = base.toFixed(2);
    }

    if (obj.id == "sini") {
        var sintheta = String(eval(String(pp + "/" + hyp)).toFixed(2));
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

//set trigonometry value to calculator
//-----------------------------------------------------

//-----------------------------------------------------
//calculus
function solveintegralwithoutsteps() {
    var intval = document.getElementById("inputintegral").value;
    //var integration=nerdamer.integrate(intval,integralvar)
}

var intsol = "";

function findintesol(input, output) {
    var inp = document.getElementById(input).value;
    intsol = nerdamer.integrate(inp, "x");
    document.getElementById(input).value += "";
}

var diffvariable = "";
var difforder = "";

function getdiffvariable(value) {
    diffvariable = value;
}

function getdifforder(value) {
    difforder = value;
}

function diffsolve() {
    var ok = document.getElementById("inputdifferentiatequation").value;
    ok = encodeURIComponent(ok);
    window.open(
        "https://www.emathhelp.net/calculators/calculus-1/derivative-calculator/?f=" +
        ok +
        "+&order=" +
        difforder +
        "&var=" +
        diffvariable +
        "&p=&steps=on#solution"
    );
}

var pardifforder = "";

function getparorder(value) {
    pardifforder = value;
}
function gif(){
    var giffnum = parseInt(document.getElementById("giffnum").value)
    if(giffnum >=0){
        let ans = Math.floor(giffnum)
        document.getElementById("giffans").innerHTML = "The gif is " + ans
    }
    else {
        let ans1 = Math.abs(ans1)
        let ans = Math.ceil(ans1)
        document.getElementById("giffans").innerHTML = "The gif is " + "-" + ans
    }
}

// dip - calculator to find direct proportion
function dip() {
    var dipnum1 = document.getElementById("dipnum1").value;
    var dipnum2 = document.getElementById("dipnum2").value;
    var dipnum3 = document.getElementById("dipnum3").value;
    var fourthVal = (parseInt(dipnum3) * parseInt(dipnum2)) / parseInt(dipnum1);
    document.getElementById("dipans").innerHTML = "The Fourth Value is " + fourthVal.toFixed(3);
}

// inDP - calculator to find indirect proportion
function inDP() {
    var inDPnum1 = document.getElementById("inDPnum1").value;
    var inDPnum2 = document.getElementById("inDPnum2").value;
    var inDPnum3 = document.getElementById("inDPnum3").value;
    var fourthVal = (parseInt(inDPnum1) * parseInt(inDPnum2)) / parseInt(inDPnum3);
    document.getElementById("inDPans").innerHTML = "The Fourth Value is " + fourthVal.toFixed(3);
}

function fp(){
    var giffnum = parseInt(document.getElementById("giffnum").value)
    if(giffnum >=0){
        let ans1 = Math.floor(giffnum)
        let ans = giffnum - ans1
        document.getElementById("giffans").innerHTML = "The fractional part is " + ans
    }
    else{
        let ans1 = Math.abs(giffnum)
        let ans2 = Math.ceil(giffnum)
        let ans = ans2 - ans1
        document.getElementById("giffans").innerHTML = "The fractional part is " + ans
    }
}

// Work and Time calculator
function getUnknown() {
    selectElement = 
            document.querySelector('#unknown');
    output = selectElement.value;
    var arr = ["Work", "Time", "Men"];
    for (var i = 0; i < arr.length; i++) {
        var unknown = 'unknown' + arr[i];
        document.getElementById(unknown).style.display = "none";
    }

    if (output == "Work") {
        document.getElementById('unknownWork').style.display = "block";
    } else if (output == "Time") {
        document.getElementById('unknownTime').style.display = "block";
    } else if (output == "Men") {
        document.getElementById('unknownMen').style.display = "block";
    }
}

function findWork() {
    const work1 = parseInt(document.getElementById('work1').value);
    const time1 = parseInt(document.getElementById('time1').value);
    const men1 = parseInt(document.getElementById('men1').value);
    const time2 = parseInt(document.getElementById('time2').value);
    const men2 = parseInt(document.getElementById('men2').value);
    if(isNaN(work1) || isNaN(time1) || isNaN(men1) || isNaN(time2) || isNaN(men2) ){
        document.getElementById('workans').innerHTML = "Please enter all fields";
    }else{
        if(work1<0 || time1<0 || men1<0 || time2<0 || men2<0){
            document.getElementById('workans').innerHTML = "Invalid Input : Value of  WORK/TIME/MEN cant be in negative";
        }else{
            let workans = Math.ceil(work1 * (time2 * men2) / (time1 * men1));
            document.getElementById('workans').innerHTML = "The work done is " + workans; 
        }
    }
}

function findTime() {
    const work1 = parseInt(document.getElementById('work1').value);
    const time1 = parseInt(document.getElementById('time1').value);
    const men1 = parseInt(document.getElementById('men1').value);
    const work2 = parseInt(document.getElementById('work2').value);
    const men2 = parseInt(document.getElementById('men2').value);
    if(isNaN(work1) || isNaN(time1) || isNaN(men1) || isNaN(work2) || isNaN(men2) ){
        document.getElementById('timeans').innerHTML = "Please enter all fields";
    }else{
        if(work1<0 || time1<0 || men1<0 || work2<0 || men2<0){
            document.getElementById('timeans').innerHTML = "Invalid Input : Value of  WORK/TIME/MEN cant be in negative";
        }else{
            let timeans = Math.ceil(work2 * (time1 * men1) / (work1 * men2));
            document.getElementById('timeans').innerHTML = "The work done is " + timeans; 
        }
    }
}

function findMen() {
    const work1 = parseInt(document.getElementById('work1').value);
    const time1 = parseInt(document.getElementById('time1').value);
    const men1 = parseInt(document.getElementById('men1').value);
    const time2 = parseInt(document.getElementById('time2').value);
    const work2 = parseInt(document.getElementById('work2').value);
    

    if(isNaN(work1) || isNaN(time1) || isNaN(men1) || isNaN(work2) || isNaN(time2) ){
        document.getElementById('menans').innerHTML = "Please enter all fields";
    }else{
        if(work1<0 || time1<0 || men1<0 || work2<0 || time2<0){
            document.getElementById('menans').innerHTML = "Invalid Input : Value of  WORK/TIME/MEN cant be in negative";
        }else{
            let menans = Math.ceil(work2 * (time1 * men1) / (work1 * time2));
            document.getElementById('menans').innerHTML = "The work done is " + menans; 
        }
    }
}

// Work and Time ended

function parapipe(){
    var first = document.getElementById("para1").value;
    var second = document.getElementById("para2").value;
    var third = document.getElementById("para3").value;
    var voloutput = document.getElementById("volparapipe");
    var saoutput = document.getElementById("saparapipe");
    var diagoutput = document.getElementById("diagparapipe");
    var voltemp = "";
    var satemp = "";
    var diagtemp = "";
    if ((first != "") && (second != "") && (third != "") ) {
        voltemp += "\\[" + first + "*" + second + "*" + third + "\\]";
        voltemp += "\\[Volume \\space of \\space Parallelepiped \\space is \\space \\]";
        voltemp += "\\[" + eval(String(first * second * third)) + "\\]";
        voloutput.innerHTML = voltemp;
        satemp += "\\[ 2(" + first + "\\times " + second + "+" + second + "\\times" + third + "+" + third + "\\times" + first + ") \\]";
        satemp += "\\[Surface \\space Area \\space of \\space Parallelepiped \\space is \\space \\]";
        satemp += "\\[" + eval(String(2 * (first * second + second * third + third * first))) + "\\]";
        saoutput.innerHTML = satemp;
        var dig = eval(String((first*first) + (second*second) + (third*third)));
        var g = nerdamer.sqrt(dig).toString();
        diagtemp += "\\[d= \\sqrt{" + first + "^2+" + second + "^2+" + third + "^2} \\]";
        diagtemp += "\\[ \\sqrt{" + (first*first) + "+" + (second*second) + "+" + (third*third) + "} \\]";
        diagtemp += "\\[ \\sqrt{" + dig + "} \\]";
        diagtemp += "\\[Diagonal \\space of \\space Parallelepiped \\space is \\space \\]";
        diagtemp += "\\["+ eval(g).toFixed(3) + "\\]";
        diagoutput.innerHTML = diagtemp;

        renderMathInElement(voloutput);
        renderMathInElement(saoutput);
        renderMathInElement(diagoutput);

    } else {
        voloutput.innerHTML = "";
        saoutput.innerHTML = "";
        diagoutput.innerHTML = "";
    }
}




function cramer(){
    var a=parseFloat(document.getElementById('cab').value);
    var b=parseFloat(document.getElementById('cab1').value);
    var c=parseFloat(document.getElementById('cab2').value);
    var d=parseFloat(document.getElementById('cab3').value);
    var e=parseFloat(document.getElementById('cab4').value);
    var f=parseFloat(document.getElementById('cab5').value);
    var res = ((a * e)-(b * d));
    var res1 = ((c * e)-(b * f));
    var res2 =((a * f)-(c * d));
    var x = (res1 / res);
    var y = (res2 / res);
    var cramoutput = document.getElementById("cramerres");
    var cramtemp = "";
   if(a != "" && b != "" && c !=""){
    cramtemp += "\\[Δ = " + res + ",\\space Δ_x = " + res1 + ",\\space Δ_y = " + res2 + " \\]";
    cramtemp += "\\[X = " + x + ",\\space Y = " + y + "\\]";
    cramtemp += "\\[The \\space solution \\space is \\space (X,Y) =  (" + x + "," + y + ") \\]";

    cramoutput.innerHTML = cramtemp;
    renderMathInElement(cramoutput);
   }
   else {
    cramoutput.innerHTML = "";
  }
}

function centsolve1() {
    var a1 = parseInt(document.getElementById("a1m").value)
    var b1 = parseInt(document.getElementById("a2m").value)
    var c1 = parseInt(document.getElementById("a3m").value)
    var a2 = parseInt(document.getElementById("a4m").value)
    var b2 = parseInt(document.getElementById("a5m").value)
    var c2 = parseInt(document.getElementById("a6m").value)
    var a3 = parseInt(document.getElementById("a7m").value)
    var b3 = parseInt(document.getElementById("a8m").value)
    var c3 = parseInt(document.getElementById("a9m").value)
    var a4 = parseInt(document.getElementById("a10m").value)
    var b4 = parseInt(document.getElementById("a11m").value)
    var c4 = parseInt(document.getElementById("a12m").value)
    var x = (a1 + a2 + a3 + a4) / 4;
    var y = (b1 + b2 + b3 + b4) / 4;
    var z = (c1 + c2 + c3 + c4) / 4;
    var centout = document.getElementById("centres");
    var centemp = "";
    if(isNaN(x) || isNaN(y) || isNaN(z)){
        centemp = "\\[Please \\space enter \\space all \\space fields \\]";
    }else{
        if((a1 !="") && (a2 != "") && (a3 !="") && (a4 != "") && (b1 != "") && (b2 != "") && (b3 != "") && (b4 != "") && (c1 != "") && (c2 != "") && (c3 !="") && (c4 != "")){
            centemp += "\\[Centroid \\space of \\space a \\space Tetrahedron \\ is \\space ( \\space \\frac{x_1+x_2+x_3+x_4}{4} \\space , \\space \\frac{y_1+y_2+y_3+y_4}{4} \\space , \\space \\frac{z_1+z_2+z_3+z_4}{4} \\space ) \\]";
            centemp += "\\[( \\space \\frac{" + a1 + "+" + a2 + "+" + a3 + "+" +a4 + "}{4} \\space , \\space \\frac{" + b1 + "+" + b2 + "+" + b3 + "+" + b4 + "}{4} \\space , \\space \\frac{" + c1 + "+" + c2 + "+" + c3 + "+" + c4 + "}{4} \\space ) \\]";
            centemp += "\\[( " + x + "," + y + "," + z + " )\\]";
        }
        else{
            centemp = "";
        }
    }

    centout.innerHTML = centemp;
    renderMathInElement(centout);
}

function findsecarea() {
    var ang = parseInt(document.getElementById("ang").value)
    var r = parseInt(document.getElementById("rad").value)
    var ans = (r * r * ang) / 2;
    document.getElementById("secans1").innerHTML = "\\[The \\space area \\space of \\space sector \\space is \\space \\space \\frac{r^2\\theta}{2} \\space\\]"
    document.getElementById("secans2").innerHTML = "\\[\\frac{" + r + "^2\\times " + ang + "}{2} \\space = " + ans + "\\space\\]";
    renderMathInElement(document.getElementById("secans1"));
    renderMathInElement(document.getElementById("secans2"));
}
function findsectorarea(){
    var ang = document.getElementById("sectorcirang").value;
    var r = document.getElementById("sectorcirrad").value;
    var ans = (r**2 * ang)/2;

    if ((ang!="") && (r!="")){
        document.getElementById("sectorarea1").innerHTML = "\\[The \\space area \\space of \\space sector \\space is \\space \\space \\frac{r^2\\theta}{2} \\space\\]"
        document.getElementById("sectorarea2").innerHTML = "\\[\\frac{"+r+"^2\\times "+ang+"}{2} \\space = " + ans + "sq \\space units \\space \\]";
        renderMathInElement(document.getElementById("sectorarea1"));
        renderMathInElement(document.getElementById("sectorarea2"));
    } else{
        document.getElementById("sectorarea1").innerHTML = "";
        document.getElementById("sectorarea2").innerHTML = "";
    }

}

function addsubcfind(){
    let n = parseInt(document.getElementById("addsubc").value)
    let prevCube = Math.cbrt(n)
    let nextCube = prevCube+1
    let ans = (n - prevCube) < (nextCube - n)
    ? (prevCube - n)
    : (nextCube - n)
    document.getElementById("addsubcans")
}

function addsubsfind(){
    let n = parseInt(document.getElementById("addsubs").value)
    let prevSquare = Math.sqrt(n)
    let nextSquare = prevSquare+1
    let ans = (n - prevSquare) < (nextSquare - n)
    ? (prevSquare - n)
    : (nextSquare - n)
    document.getElementById("addsubsans")
}

function solvepenta(){
    var a = document.getElementById("inputsidepenta1").value;
    var b = document.getElementById("inputsidepenta2").value;
    var voloutput = document.getElementById("resultofpentavol");
    var saoutput = document.getElementById("resultofpentaarea");
    var voltemp = "";
    var satemp = "";
    if ((a != "") && (b != "")) {
        voltemp += "\\[ \\frac{" + a + "\\times" + a + "\\times" + b  + "}{" + 3 + "}\\]";
        voltemp += "\\[Volume \\space of \\space Pentahedron \\space is \\space \\]";
        voltemp += "\\[" + eval(String((a * a * b ) / 3)) + "\\]";
        voloutput.innerHTML = voltemp;
        satemp += "\\[ " + a + "(" + a + "+\\sqrt{" + "(" + "4" + "\\times" + b  + "\\times" + b + "+" + a + "\\times" + a + "})" + ")\\]";
        satemp += "\\[Surface \\space Area \\space of \\space Pentahedron \\space is \\space \\]";
        satemp += "\\[" + parseFloat(a)*((parseFloat(a) + (Math.sqrt((4 * parseFloat(b) * parseFloat (b)) + (parseFloat(a) * parseFloat(a)))))) + "\\]";
        saoutput.innerHTML = satemp;
        renderMathInElement(voloutput);
        renderMathInElement(saoutput);
    }
    else{
        voloutput.innerHTML = "";
        saoutput.innerHTML = "";

    }
}

function solvetetrahexa(){
    var a = document.getElementById("inputsidetetrahexa1").value;
    var voloutput = document.getElementById("resultoftetrahexavol");
    var saoutput = document.getElementById("resultoftetrahexaarea");
    var midoutput =  document.getElementById("resultoftetrahexamidradius");
    var inoutput =  document.getElementById("resultoftetrahexainradius");
    var voltemp = "";
    var satemp = "";
    var midtemp = "";
    var intemp = "";
    if (a != "") {
        voltemp += "\\[ \\frac{" + 3 + "\\times" + a + "\\times" + a + "\\times" + a  + "}{" + 2 + "}\\]";
        voltemp += "\\[Volume \\space of \\space Tetrahexahedron \\space is \\space \\]";
        voltemp += "\\[" + eval(String((3 * a * a * a ) / 2)) + "\\]";
        voloutput.innerHTML = voltemp;
        satemp += "\\[ " + 3 + "\\times" + a + "\\times" + a + "\\times" + "\\sqrt{" + 5 + "}" +"\\]";
        satemp += "\\[Surface \\space Area \\space of \\space Tetrahexahedron \\space is \\space \\]";
        satemp += "\\[" + eval(String(3 * a * a * Math.sqrt(5) )).toFixed(3) + "\\]";
        saoutput.innerHTML = satemp;
        midtemp += "\\[ \\frac {" + a + "\\times \\sqrt{2}}{2} \\]";
        midtemp += "\\[Midsphere \\space Radius \\space of \\space Tetrahexahedron \\space is \\]";
        midtemp += "\\[ " + eval(String(( a * Math.sqrt(2)) / 2)).toFixed(3) + "\\]";
        midoutput.innerHTML = midtemp;
        intemp += "\\[ \\frac {3}{10} \\times " + a + "\\times \\sqrt{5} \\]";
        intemp += "\\[Insphere \\space Radius \\space of \\space Tetrahexahedron \\space is \\]";
        intemp += "\\[ " + eval(String(((3/10)* a *Math.sqrt(5)))).toFixed(3) + " \\]";
        inoutput.innerHTML = intemp;
        renderMathInElement(voloutput);
        renderMathInElement(saoutput);
        renderMathInElement(midoutput);
        renderMathInElement(inoutput);
    }else{
        voloutput.innerHTML = "";
        saoutput.innerHTML = "";
        midoutput.innerHTML = "";
        inoutput.innerHTML = "";

    }
}

function partialdiffsolve() {
    var ikk = document.getElementById("inputpartialorder");
    if (ikk.value == "") {
        ikk.value = "x";
    }
    var parok = encodeURIComponent(
        document.getElementById("inputpartialdiff").value
    );
    var parorder = encodeURIComponent(
        document.getElementById("inputpartialorder").value
    );
    window.open(
        "https://www.emathhelp.net/calculators/calculus-3/partial-derivative-calculator/?f=" +
        parok +
        "&var=" +
        parorder +
        "&steps=on#solution"
    );
}

var integralvar = "";

function getintegralvar(value) {
    integralvar = value;
}

function solveintegral() {
    if (checkit == "notok" || checkit == "") {
        var inte = encodeURIComponent(
            document.getElementById("inputintegral").value
        );
        window.open(
            "https://www.emathhelp.net/calculators/calculus-2/integral-calculator/?f=" +
            inte +
            "&var=" +
            integralvar +
            "&steps=on#solution"
        );
    }
    if (checkit == "ok") {
        var upperlim = document.getElementById("upperlimit").value;
        var lowerlim = document.getElementById("lowerlimit").value;
        var integ = encodeURIComponent(
            document.getElementById("inputintegral").value
        );
        var iv = "";
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
        window.open(
            "https://www.emathhelp.net/calculators/calculus-2/definite-integral-calculator/?f=" +
            integ +
            "&var=" +
            integralvar +
            "&a=" +
            lowerlimmm +
            "&b=" +
            upperlimmm +
            "&steps=on#solution"
        );
    }
}

var checkit = "";

function collapselimitbox() {
    var sa = document.getElementById("enablelimit");
    if (sa.checked == true) {
        checkit = "ok";
        $("#collapselimit").slideDown();
    }
    if (sa.checked == false) {
        checkit = "notok";
        $("#collapselimit").slideUp();
    }
}

function solvelaplace() {
    var lurl = encodeURIComponent(document.getElementById("inputlaplace").value);
    window.open(
        "https://www.emathhelp.net/calculators/differential-equations/laplace-transform-calculator/?f=" +
        lurl +
        "#solution"
    );
}

function dlp(){
    var a1 = parseFloat(document.getElementById("la").value)
    var b1 = parseFloat(document.getElementById("lb").value)
    var c1 = parseFloat(document.getElementById("lc").value)
    var a2 = parseFloat(document.getElementById("pa").value)
    var b2 = parseFloat(document.getElementById("pb").value)
    var c2 = parseFloat(document.getElementById("pc").value)
    var cor1 = parseFloat(document.getElementById("cor1").value)
    var cor2 = parseFloat(document.getElementById("cor2").value)
    var cor3 = parseFloat(document.getElementById("cor3").value)
    var d = parseFloat(document.getElementById("d").value)

    if(isNaN(a2) || isNaN(b2) || isNaN(c2) || isNaN(cor1) || isNaN(cor2) || isNaN(cor3)){
        document.getElementById("dlpans").innerHTML = "Please enter all fields";
    }else{
        var dlpans = (cor1*a2 + cor2*b2  + cor3*c2 +d)/(Math.sqrt(a2*a2+b2*b2+c2*c2));
        document.getElementById("dlpans").innerHTML = "The distance is  " +dlpans;
    }
    
}

function solveinverselaplace() {
    var ilurl = encodeURIComponent(
        document.getElementById("inputinverselaplace").value
    );
    window.open(
        "https://www.emathhelp.net/calculators/differential-equations/inverse-laplace-transform-calculator/?f=" +
        ilurl +
        "#solution"
    );
}

//-----------------------------------------------------

// Checking for the limit of input while generating Multiplication table.
function checklimit() {
    let num = parseInt(document.querySelector("#numtable").value);
    let end = parseInt(document.querySelector("#numending").value);
    let error = document.querySelector(".error");

    document.getElementById("resulttable").innerText = "";

    if (num > 25000 || end > 25000)
        error.innerText = "Number cannot be greater than 25000";
    else if (
        (end < 25000 && isNaN(num)) ||
        (num < 25000 && isNaN(end)) ||
        (num < 25000 && end < 25000)
    )
        error.innerText = "";
}

//-----------------------------------------------------
function possible()
{
    let N = parseInt(document.getElementById("ssdies").value)
    let a = parseInt(document.getElementById("initialangle").value)
    let b = parseInt(document.getElementById("increangle").value)
    let n = parseInt(document.getElementById("nthside").value)
    // Angular sum of a N-sided polygon
    let sum_of_angle = 180 * (N - 2);
 
    // Angular sum of N-sided given polygon
    let Total_angle = Math.floor((N * ((2 * a) + (N - 1) * b)) / 2);
 
    // Check if both sum are equal
    if (sum_of_angle != Total_angle)
        document.getElementById("nthans").innerHTML = "Not Possible"
    else{
        let nth = 0; 
        // Calculate nth angle
        nth = a + (n - 1) * b;
        document.getElementById("nthans").innerHTML = "The angle of nth side will be " + nth
    }
        
}
//-----------------------------------------------------
//  Prints Multiplication Table
function printtable() {
    var temp =
        "<table class='table table-bordered' style='color:white;width: 50px; padding: 0; margin: 0 auto; border:2px solid light-grey;'>";
    var num = parseFloat(document.getElementById("numtable").value);
    var end = parseInt(document.getElementById("numending").value);

    if (num == "" && end == "") {
        document.getElementById("resulttable").innerHTML = "";
    } else if (String(num) != "NaN" && String(end) != "NaN") {
        for (var i = 1; i <= end; i++) {
            temp += "<tr>";
            temp +=
                "<td>" +
                num +
                "</td><td>×</td><td>" +
                i +
                "</td><td>=</td><td>" +
                (num * i).toFixed(2) +
                "</td>";
            temp += "</tr>";
        }
        temp += "</table>";
        document.getElementById("resulttable").innerHTML = "<b>" + temp + "</b>";
    }
}

function ShowDistance()
{
var x1, x2, y1, y2;
    x1=parseFloat(document.getElementById('xOne').value);
    x2=parseFloat(document.getElementById('xTwo').value);
    y1=parseFloat(document.getElementById('yOne').value);
    y2=parseFloat(document.getElementById('yTwo').value);
    var explain = document.getElementById("dis_formula");
    var temp = "";
    temp += "\\[Distance \\space between \\space two \\space points \\space is  \\] ";
    temp += "\\[\\sqrt{ (x1-x2)^2 + (y1-y2)^2 } \\space \\]";
    temp +=  "\\[\\sqrt{ (( " + x1 + ") - ( " + x2 + "))^{2} + (("  + y1 + ") - (" + y2 + "))^{2}} \\]";
    temp +=  "\\[\\sqrt{ ( " + (x1-x2) + " )^{2} + ("  + (y1-y2) + ")^{2}} \\]";
    temp +=  "\\[\\sqrt{ ( " + (x1-x2)**2 + " ) + ("  + (y1-y2)**2 + ")} \\]";
    temp += "\\[\\sqrt{  " + ((x1-x2)**2 + (y1-y2)**2) + "} \\]";
    explain.innerHTML=temp;
    renderMathInElement(explain);
   var distance = Math.sqrt( Math.pow((x1-x2), 2) + Math.pow((y1-y2), 2) ).toFixed(2);
    document.getElementById('outPut').innerHTML= 'The distance between (' + x1 + ',' + y1 + ') and ('+ x2 + ',' + y2 + ') is '+ distance;

    
}

function midpointsolve()
{
    var X1, X2, Y1, Y2;
    X1=parseFloat(document.getElementById('XOne').value);
    X2=parseFloat(document.getElementById('XTwo').value);
    Y1=parseFloat(document.getElementById('YOne').value);
    Y2=parseFloat(document.getElementById('YTwo').value);
    var explain_mid = document.getElementById("mid_formula");
    var temp = "";
    var midpoint1 = (X1 + X2)/2;
    var midpoint2= (Y1 + Y2)/2;
    if(X2<0 && Y2>0){
        temp += "\\[Midpoint \\space between \\space two \\space points \\space is  \\] ";
        temp += "\\[ ( \\frac{x1 + x2}{2} \\space , \\space \\frac{y1+y2}{2} ) \\]";
        temp += "\\[ ( \\frac{ " + X1 + " " + X2 + " }{2} \\space , \\space \\frac{ " + Y1 + " + " + Y2 + " }{2} ) \\]";
        temp += "\\[ ( \\frac{ " + (X1+X2) + " }{2} \\space , \\space \\frac{ " + (Y1+Y2) + " }{2} ) \\]";
        explain_mid.innerHTML=temp;
        renderMathInElement(explain_mid);
        document.getElementById('mid_output').innerHTML= 'The midpoint between (' + X1 + ',' + Y1 + ') and ('+ X2 + ',' + Y2 + ') is '+ '(' + midpoint1 + ','  + midpoint2 + ')';
    }
    else if(X2>0 && Y2<0){
        temp += "\\[Midpoint \\space between \\space two \\space points \\space is  \\] ";
        temp += "\\[ ( \\frac{x1 + x2}{2} \\space , \\space \\frac{y1+y2}{2} ) \\]";
        temp += "\\[ ( \\frac{ " + X1 + " + " + X2 + " }{2} \\space , \\space \\frac{ " + Y1 + " " + Y2 + " }{2} ) \\]";
        temp += "\\[ ( \\frac{ " + (X1+X2) + " }{2} \\space , \\space \\frac{ " + (Y1+Y2) + " }{2} ) \\]";
        explain_mid.innerHTML=temp;
        renderMathInElement(explain_mid);
        document.getElementById('mid_output').innerHTML= 'The midpoint between (' + X1 + ',' + Y1 + ') and ('+ X2 + ',' + Y2 + ') is '+ '(' + midpoint1 + ','  + midpoint2 + ')';
    }
    else if(X2<0 && Y2<0){
        temp += "\\[Midpoint \\space between \\space two \\space points \\space is  \\] ";
        temp += "\\[ ( \\frac{x1 + x2}{2} \\space , \\space \\frac{y1+y2}{2} ) \\]";
        temp += "\\[ ( \\frac{ " + X1 + " " + X2 + " }{2} \\space , \\space \\frac{ " + Y1 + " " + Y2 + " }{2} ) \\]";
        temp += "\\[ ( \\frac{ " + (X1+X2) + " }{2} \\space , \\space \\frac{ " + (Y1+Y2) + " }{2} ) \\]";
        explain_mid.innerHTML=temp;
        renderMathInElement(explain_mid);
        document.getElementById('mid_output').innerHTML= 'The midpoint between (' + X1 + ',' + Y1 + ') and ('+ X2 + ',' + Y2 + ') is '+ '(' + midpoint1 + ','  + midpoint2 + ')';
    }
    else{
    temp += "\\[Midpoint \\space between \\space two \\space points \\space is  \\] ";
    temp += "\\[ ( \\frac{x1 + x2}{2} \\space , \\space \\frac{y1+y2}{2} ) \\]";
    temp += "\\[ ( \\frac{ " + X1 + " + " + X2 + " }{2} \\space , \\space \\frac{ " + Y1 + " + " + Y2 + " }{2} ) \\]";
    temp += "\\[ ( \\frac{ " + (X1+X2) + " }{2} \\space , \\space \\frac{ " + (Y1+Y2) + " }{2} ) \\]";
    explain_mid.innerHTML=temp;
    renderMathInElement(explain_mid);
    document.getElementById('mid_output').innerHTML= 'The midpoint between (' + X1 + ',' + Y1 + ') and ('+ X2 + ',' + Y2 + ') is '+ '(' + midpoint1 + ','  + midpoint2 + ')';
    }
}
function interpointsolve() {
    var a1=parseFloat(document.getElementById('aone').value);
    var b1=parseFloat(document.getElementById('bone').value);
    var c1=parseFloat(document.getElementById('cone').value);
    var a2=parseFloat(document.getElementById('atwo').value);
    var b2=parseFloat(document.getElementById('btwo').value);
    var c2=parseFloat(document.getElementById('ctwo').value);
    var point1 = ((b1*c2 - b2*c1)/(a1*b2 - a2*b1)).toFixed(1);
    var point2 = ((a2*c1 - a1*c2)/(a1*b2 - a2*b1)).toFixed(1);
    document.getElementById("formula").innerHTML = "\\[Intersection \\space point \\space\\]"
    document.getElementById("formula1").innerHTML = "\\[ \\space =\\space  (\\frac{b1 \\times c2 - b2 \\times c1}{a1 \\times b2 - a2 \\times b1}, \\space \\frac{a2 \\times c1 - a1 \\times c2}{a1 \\times b2 - a2 \\times b1} ) \\] ";
    document.getElementById("formula2").innerHTML = "\\[ \\space =\\space  (\\frac{"+b1+" \\times "+c2+" - "+b2+" \\times "+c1+"}{"+a1+" \\times "+b2+" - "+a2+" \\times "+b1+"}, \\space \\frac{"+a2+" \\times "+c1+" - "+a1+" \\times "+c2+"}{"+a1+" \\times "+b2+" - "+a2+" \\times "+b1+"} ) \\] ";
    document.getElementById("formula3").innerHTML = "\\[ \\space =\\space  (\\frac{"+(b1*c2 - b2*c1).toFixed(2)+"}{"+(a1*b2 - a2*b1).toFixed(2)+"}, \\space \\frac{"+(a2*c1 - a1*c2).toFixed(2)+"}{"+(a1*b2 - a2*b1).toFixed(2)+"}) \\] ";
    document.getElementById('inter_output').innerHTML= "\\[The \\space intersection \\space point \\space of \\space "+ a1 + "x +" + b1 + "y +"+ c1 + "= 0 \\space and \\space " + a2 + "x +" + b2 + "y +"+ c2 + "= 0 \\space is \\space (" + point1 + ","  + point2 + ")\\]";
    renderMathInElement(document.getElementById("formula"));
    renderMathInElement(document.getElementById("formula1"));
    renderMathInElement(document.getElementById("formula2"));
    renderMathInElement(document.getElementById("formula3"));
    renderMathInElement(document.getElementById("inter_output"));
}

function anglesolve() {
    var a1=parseFloat(document.getElementById('a1st').value);
    var b1=parseFloat(document.getElementById('b1st').value);
    var a2=parseFloat(document.getElementById('a2nd').value);
    var b2=parseFloat(document.getElementById('b2nd').value);
    var M1=(-a1)/b1;
    var M2=(-a2)/b2;
    var angle = Math.atan((M2-M1)/(1+M1*M2));
    document.getElementById("angleformula").innerHTML = "\\[Angle \\space between \\space two \\space lines \\space \\space m1 = \\frac{(-"+a1+")}{"+b1+"}  \\space , \\space m2 = \\frac{(-"+a2+")}{"+b2+"}\\] ";
    document.getElementById("angleformula1").innerHTML = "\\[\\space = \\space tan^{-1}(\\frac{m2 - m1}{1+m1 \\times m2})\\]";
    document.getElementById("angleformula2").innerHTML = "\\[\\space = \\space tan^{-1}(\\frac{("+M2.toFixed(2)+") - ("+M1.toFixed(2)+")}{1+ ("+M1.toFixed(2)+") \\times ("+M2.toFixed(2)+")}) \\]";
    document.getElementById('angle_output').innerHTML= "\\[Angle \\space is \\space \\frac{"+angle.toFixed(3)+"}{\\pi} \\space = \\space"+ (angle*180/Math.PI).toFixed(1) + "\\degree\\]";
    renderMathInElement(document.getElementById("angleformula"));
    renderMathInElement(document.getElementById("angleformula1"));
    renderMathInElement(document.getElementById("angleformula2"));
    renderMathInElement(document.getElementById("angle_output"));
    
}

function parabolafind(){
    let a = parseInt(document.getElementById('parain').value)
    document.getElementById('directrixeqn').innerHTML = "The eqn of directrix is x-" +a+"=0"
    document.getElementById('latus').innerHTML = "The length of latus rectum is "+4*a
    document.getElementById('ecc').innerHTML = "The eccentricity of parabola is always '1'"
}


function ellipsefind(){
    let a = parseInt(document.getElementById('ellipsein').value)
    let b = parseInt(document.getElementById('ellipsein1').value)
    let e = Math.sqrt(1-((a*a)/(b*b)))
    let lr = (2*b*b)/(4*a)
    document.getElementById('directrixeqn1').innerHTML = "The eqn of directrix is x-" +(a/e)+"=0"
    document.getElementById('latus1').innerHTML = "The length of latus rectum is "+lr
    document.getElementById('ecc1').innerHTML = "The eccentricity of ellipse is " + e
}

function dispointsolve()
{
    var a,b,c;
    a=parseFloat(document.getElementById('a').value);
    b=parseFloat(document.getElementById('b').value);
    c=parseFloat(document.getElementById('c').value);
    x1=parseFloat(document.getElementById('point_one').value);
    y1=parseFloat(document.getElementById('point_two').value);
    var explain = document.getElementById("dis_point");
    explain.innerHTML = "\\[Distance \\space between \\space point \\space and \\space a \\space line  =\\space  \\frac{Ax1 + By1 + C}{\\sqrt{A^2+B^2}} \\] ";
    renderMathInElement(document.getElementById("dis_point"));

    var dis = (Math.abs(a*x1 + b*y1 +c))/(Math.sqrt(a*a + b*b )).toFixed(2);
    document.getElementById("dis_point").innerHTML = "\\[Distance \\space between \\space point \\space and \\space a \\space line \\space  = \\space  \\frac{A \\times x1 + B \\times y1 + C}{\\sqrt{A^2+B^2}} \\space\\]";  
    document.getElementById("dis_point1").innerHTML = "\\[\\frac{"+a+"\\times "+x1+" \\space + \\space "+b+" \\times "+y1+" \\space + \\space "+c+"}{\\sqrt{"+a+"^2 \\space + \\space "+b+"^2}} \\space\\]"; 
    document.getElementById("dis_point2").innerHTML = "\\[\\frac{"+(Math.abs(a*x1 + b*y1 +c))+"}{"+(Math.sqrt(a*a + b*b )).toFixed(2)+"} \\space = \\space "+dis.toFixed(2)+"\\] ";
    document.getElementById('dis_op').innerHTML= "\\[The \\space distance \\space between \\space (" + x1 + "," + y1 + ") \\space and \\space" + a  + "x" + "+" + b + "y" + "+" + c + "=0 \\space is  \\space" + dis.toFixed(3)+ "\\]";
    renderMathInElement(document.getElementById("dis_point")); 
    renderMathInElement(document.getElementById("dis_point1")); 
    renderMathInElement(document.getElementById("dis_point2")); 
    renderMathInElement(document.getElementById("dis_op")); 
}

function plpSolve() {
    var a=parseFloat(document.getElementById('plpa').value);
    var b=parseFloat(document.getElementById('plpb').value);
    var c=parseFloat(document.getElementById('plpc').value);
    var x1=parseFloat(document.getElementById('plpx').value);
    var y1=parseFloat(document.getElementById('plpy').value);
    var dis = (((b*x1)-(a*y1)));
    if(isNaN(x1) || isNaN(y1) || isNaN(a) || isNaN(b) || isNaN(c)){
        document.getElementById('plp_op').innerHTML= "\\[ Please \\space enter \\space all \\space input \\]";
        renderMathInElement(document.getElementById("plp_op"));
    } else{
        if(-a>0)
        document.getElementById('plp_op').innerHTML= 'Equation Of Line Perpendicular to ' + a  + 'x' + '+ (' + b + ')y' + '=' + c + 'and pass through point (' + x1 + ',' + y1 + ')  is  ' +  b  + 'x' + '+' + (-a) + 'y' + '=' + dis;
        else
        document.getElementById('plp_op').innerHTML= 'Equation Of Line Perpendicular to ' + a  + 'x' + '+' + b + 'y' + '=' + c + 'and pass through point (' + x1 + ',' + y1 + ')  is  ' +  b  + 'x'  + (-a) + 'y' +  '=' + dis;
    }    
}
function pppSolve() {
    var a=parseFloat(document.getElementById('pppa').value);
    var b=parseFloat(document.getElementById('pppb').value);
    var c=parseFloat(document.getElementById('pppc').value);
    var x1=parseFloat(document.getElementById('pppx').value);
    var y1=parseFloat(document.getElementById('pppy').value);
   
    var dis = (((a*x1)+(b*y1)));
    if(isNaN(x1) || isNaN(y1) || isNaN(a) || isNaN(b) || isNaN(c)){
        document.getElementById('ppp_op').innerHTML= "\\[ Please \\space enter \\space all \\space input \\]";
        renderMathInElement(document.getElementById("ppp_op"));
    } else{
        if(b>0)
        document.getElementById('ppp_op').innerHTML= 'Equation Of Line Parallel to ' + a  + 'x' + '+' + b + 'y' + '=' + c + 'and pass through point (' + x1 + ',' + y1 + ')  is  ' +  a  + 'x' + '+' + (b) + 'y' + '=' + dis;
        else
        document.getElementById('ppp_op').innerHTML= 'Equation Of Line Parallel to ' + a  + 'x' + b + 'y' + '=' + c + 'and pass through point (' + x1 + ',' + y1 + ')  is  ' +  a  + 'x'  + (b) + 'y' +  '=' + dis;
    }
}


function pppdSolve() {
    var a=parseFloat(document.getElementById('pppdaq2').value);
    var b=parseFloat(document.getElementById('pppdbq2').value);
    var c=parseFloat(document.getElementById('pppdcq1').value);
    var d=parseFloat(document.getElementById('pppdcq2').value);
    
   
    var dis = ((a*a)+(b*b));
    var p =Math.abs(c-d);

    if( isNaN(d) || isNaN(a) || isNaN(b) || isNaN(c)){
        document.getElementById('pppdcq1output').innerHTML= "\\[ Please \\space enter \\space all \\space input \\]";
        renderMathInElement(document.getElementById("pppdcq1output"));
    } else{
        document.getElementById('pppdcq1explane').innerHTML = "\\[ Distance \\space = \\space \\frac{ | \\space "+ c+ "\\space - \\space "+ d+ " | }{ \\sqrt { ("+ a +" )^2 \\space + \\space ("+ b +")^2 \\space } } \\space  \\]";
        renderMathInElement(document.getElementById("pppdcq1explane"));

        if(!(Number.isInteger(Math.sqrt(dis))))
        document.getElementById('pppdcq1output').innerHTML = "\\[ Distance \\space = \\space \\frac{ "+  p+ " }{ \\sqrt { "+ dis + "  } } \\space  \\]";
        else
        document.getElementById('pppdcq1output').innerHTML = "\\[ Distance \\space = \\space \\frac{ "+ p+ " }{ "+ Math.sqrt(dis) +" } \\space  \\]";
        renderMathInElement(document.getElementById("pppdcq1output"));
    }
}

function splittrifind(){
    let side = parseInt(document.getElementById('splittri').value);
    var c = binomialCoeff(2 * side, side);
    let ans = c/(n+1)
    document.getElementById("splittrians").innerHTML = ans
}

function binomialCoeff(n, k)
{
    var res = 1;
    if (k > n - k)
        k = n - k;
    for (i = 0; i < k; ++i)
    {
        res *= (n - i);
        res /= (i + 1);
    }
    return res;
}

function parallelsolve()
{
    var x1,y1,x2,y2,x3,y3,x4,y4;
    x1=parseFloat(document.getElementById('xone').value);
    y1=parseFloat(document.getElementById('yone').value);
    x2=parseFloat(document.getElementById('xtwo').value);
    y2=parseFloat(document.getElementById('ytwo').value);
    x3=parseFloat(document.getElementById('xthree').value);
    y3=parseFloat(document.getElementById('ythree').value);
    x4=parseFloat(document.getElementById('xfour').value);
    y4=parseFloat(document.getElementById('yfour').value);
    var explain = document.getElementById("line1");
    var explain1 = document.getElementById("line2");
    var m1= (y2-y1)/(x2-x1);
    var m2 = (y4-y3)/(x4-x3);
    if(isNaN(x1) || isNaN(y1) || isNaN(x2) || isNaN(y2) || isNaN(x3) || isNaN(y3) || isNaN(x4) || isNaN(y4)){
        explain.innerHTML = "\\[ Please \\space enter \\space all \\space input \\]";
        renderMathInElement(document.getElementById("line1"));
        document.getElementById('line2').innerHTML= "";
       }
    else{
    if(m1==m2){
        explain.innerHTML = "\\[Lines \\space y \\space - \\space" + y1 + "=" + "\\frac{" + y2 +"-"+ y1 + "}{" + x2 + "-" + x1 + "}" + "( \\space x \\space - \\space " + x1 + ") \\space and \\space " + "y \\space - \\space" + y3 + "=" + "\\frac{" + y4 +"-"+ y3 + "}{" + x4 + "-" + x3 + "}" + "( \\space x \\space - \\space " + x3 + ") \\space are \\space Parallel" + "\\] ";
        renderMathInElement(document.getElementById("line1"));
        document.getElementById('output1').innerHTML= 'Lines are Parallel ' ;
    }
    else{
        explain1.innerHTML = "\\[Lines \\space y \\space - \\space" + y1 + "=" + "\\frac{" + y2 +"-"+ y1 + "}{" + x2 + "-" + x1 + "}" + "( \\space x \\space - \\space " + x1 + ") \\space and \\space " + "y \\space - \\space" + y3 + "=" + "\\frac{" + y4 +"-"+ y3 + "}{" + x4 + "-" + x3 + "}" + "( \\space x \\space - \\space " + x3 + ") \\space are \\space not \\space Parallel" + "\\] ";
        renderMathInElement(document.getElementById("line2"));
        document.getElementById('output2').innerHTML= 'Lines are not parallel';
    }
}
    
}
function perpendicularsolve(){
    var x1,y1,x2,y2,x3,y3,x4,y4;
    x1=parseFloat(document.getElementById('xoneper').value);
    y1=parseFloat(document.getElementById('yoneper').value);
    x2=parseFloat(document.getElementById('xtwoper').value);
    y2=parseFloat(document.getElementById('ytwoper').value);
    x3=parseFloat(document.getElementById('xthreeper').value);
    y3=parseFloat(document.getElementById('ythreeper').value);
    x4=parseFloat(document.getElementById('xfourper').value);
    y4=parseFloat(document.getElementById('yfourper').value);
    var explain = document.getElementById("perline1");
    var explain1 = document.getElementById("perline2");
    var m1= (y2-y1)/(x2-x1);
    var m2 = (y4-y3)/(x4-x3);
    if(m1*m2==-1){
        explain.innerHTML = "\\[Lines \\space y \\space - \\space" + y1 + "=" + "\\frac{" + y2 +"-"+ y1 + "}{" + x2 + "-" + x1 + "}" + "( \\space x \\space - \\space " + x1 + ") \\space and \\space " + "y \\space - \\space" + y3 + "=" + "\\frac{" + y4 +"-"+ y3 + "}{" + x4 + "-" + x3 + "}" + "( \\space x \\space - \\space " + x3 + ") \\space are \\space Perpendicular" + "\\] ";
        renderMathInElement(document.getElementById("perline1"));
    }
    else{
        explain1.innerHTML = "\\[Lines \\space y \\space - \\space" + y1 + "=" + "\\frac{" + y2 +"-"+ y1 + "}{" + x2 + "-" + x1 + "}" + "( \\space x \\space - \\space " + x1 + ") \\space and \\space " + "y \\space - \\space" + y3 + "=" + "\\frac{" + y4 +"-"+ y3 + "}{" + x4 + "-" + x3 + "}" + "( \\space x \\space - \\space " + x3 + ") \\space are \\space not \\space Perpendicular" + "\\] ";
        renderMathInElement(document.getElementById("perline2"));
    }
}

function solvesection()
{
    var x1,y1,x2,y2,m,n;
    x1=parseFloat(document.getElementById('x1').value);
    y1=parseFloat(document.getElementById('y1').value);
    x2=parseFloat(document.getElementById('x2').value);
    y2=parseFloat(document.getElementById('y2').value);
    m=parseFloat(document.getElementById('m').value);
    n=parseFloat(document.getElementById('n').value);
    var explain = document.getElementById("sec_formula");
    if(isNaN(x1) || isNaN(y1) || isNaN(x2) || isNaN(y2) || isNaN(m) || isNaN(n)){
     explain.innerHTML = "\\[ Please \\space enter \\space all \\space input \\]";
     renderMathInElement(document.getElementById("sec_formula"));
     document.getElementById('output').innerHTML= "";
    }
    else{
    explain.innerHTML = "\\[ \\space (x,\\space y) \\space = ( \\frac{mx2 \\space + \\space nx1}{m \\space + \\space n} , \\space \\frac{my2 \\space + \\space ny1}{m \\space + \\space n} ) \\space =" + " ( \\frac{" + m +"\\times" + x2 + "+" + n + "\\times" + x1 + "}{" + m + "+" + n + "}" + "," + "\\frac{" + m +"\\times" + y2 + "+" + n + "\\times" + y1 + "}{" + m + "+" + n + "} )" + "\\] ";
    renderMathInElement(document.getElementById("sec_formula"));
    var pt1 = (m*x2 + n *x1)/(m+n);
    var pt2 = (m*y2 + n *y1)/(m+n);
    document.getElementById('output').innerHTML= 'Point dividing (' + x1 + ',' + y1 + ') and (' + x2 + ',' + y2 + ') in the ratio ' + m + ':' + n + ' is (' + pt1 + ', ' + pt2 + ')' ;
    }
}

function vectorsection()
{
    var x1,y1,x2,y2,m,n;
    x1=parseFloat(document.getElementById('inp001').value);
    y1=parseFloat(document.getElementById('inp002').value);
    z1=parseFloat(document.getElementById('inp003').value);
    x2=parseFloat(document.getElementById('inp004').value);
    y2=parseFloat(document.getElementById('inp005').value);
    z2=parseFloat(document.getElementById('inp006').value);
    m=parseFloat(document.getElementById('m1').value);
    n=parseFloat(document.getElementById('n11').value);
    var explain = document.getElementById("vectorsection1");
    var temp = "";
    if(!isNaN(x1) && !isNaN(y1) && !isNaN(z1) && !isNaN(x2) && !isNaN(y2) && !isNaN(z2) && !isNaN(m) && !isNaN(n)){
    temp += "\\[The \\space Position \\space vector \\space of \\space point \\space dividing \\space the \\space line \\space segment \\space joining \\space two \\space points \\space P \\space and \\space Q \\space in \\space the \\space ratio \\space m:n \\space is \\space given \\space by \\]";
    temp += "\\[Internally : \\space \\frac{m \\space \\overrightarrow{b} \\space + \\space n \\space \\overrightarrow{a}}{m+n} \\]";
    temp += "\\[\\overrightarrow{OP} \\space = \\space " + x1 + "\\hat{i} + " + y1  + "\\hat{j} + " + z1 + "\\hat{k} \\space and \\space  \\overrightarrow{OQ} \\space = \\space " + x2 + "\\hat{i} + " + y2  + "\\hat{j} + " + z2 + "\\hat{k} \\]";
    temp += "\\[\\overrightarrow{OR} \\space = \\space \\frac{(" + m + " ( "  + x2 + "\\hat{i} + " + y2  + "\\hat{j} + " + z2 + "\\hat{k} )) + (" + n + " ( "  + x1 + "\\hat{i} + " + y1  + "\\hat{j} + " + z1 + "\\hat{k} )) }{" + m + "+" + n + "} \\space = \\space \\frac{ ( "  + (m*x2) + "\\hat{i} + " + (m*y2)  + "\\hat{j} + " + (m*z2) + "\\hat{k} ) + ( "  + (n*x1) + "\\hat{i} + " + (n*y1)  + "\\hat{j} + " + (n*z1) + "\\hat{k} ) }{" + (m + n) + "} \\]";
    temp += "\\[\\frac{" + ((m*x2)+(n*x1)) + "\\hat{i} + " + ((m*y2)+(n*y1)) + "\\hat{j} + " +  ((m*z2)+(n*z1)) + "\\hat{k} }{" + (m + n) + "} \\space = \\space \\frac{" + ((m*x2)+(n*x1)) + "}{" + (m + n )+ "} \\hat{i} + \\frac{" + ((m*y2)+(n*y1)) + "}{" + (m + n) + "} \\hat{j} + \\frac{" + ((m*z2)+(n*z1)) + "}{" + (m + n) + "} \\hat{k} \\]";
    explain.innerHTML = temp ;
    renderMathInElement(explain);
    }
    else{
    temp += "\\[ Please \\space enter \\space all \\space input \\]";
     explain.innerHTML = temp ;
     renderMathInElement(explain);
    }
}


function vectorsection2()
{
    var x1,y1,x2,y2,m,n;
    x1=parseFloat(document.getElementById('inp011').value);
    y1=parseFloat(document.getElementById('inp022').value);
    z1=parseFloat(document.getElementById('inp033').value);
    x2=parseFloat(document.getElementById('inp044').value);
    y2=parseFloat(document.getElementById('inp055').value);
    z2=parseFloat(document.getElementById('inp066').value);
    m=parseFloat(document.getElementById('m12').value);
    n=parseFloat(document.getElementById('n112').value);
    var explain = document.getElementById("vectorsection2");
    var temp = "";
    if(!isNaN(x1) && !isNaN(y1) && !isNaN(z1) && !isNaN(x2) && !isNaN(y2) && !isNaN(z2) && !isNaN(m) && !isNaN(n)){
    temp += "\\[The \\space Position \\space vector \\space of \\space point \\space dividing \\space the \\space line \\space segment \\space joining \\space two \\space points \\space P \\space and \\space Q \\space in \\space the \\space ratio \\space m:n \\space is \\space given \\space by \\]";
    temp += "\\[Externally : \\space \\frac{m \\space \\overrightarrow{b} \\space - \\space n \\space \\overrightarrow{a}}{m-n} \\]";
    temp += "\\[\\overrightarrow{OP} \\space = \\space " + x1 + "\\hat{i} + " + y1  + "\\hat{j} + " + z1 + "\\hat{k} \\space and \\space  \\overrightarrow{OQ} \\space = \\space " + x2 + "\\hat{i} + " + y2  + "\\hat{j} + " + z2 + "\\hat{k} \\]";
    temp += "\\[\\overrightarrow{OR} \\space = \\space \\frac{(" + m + " ( "  + x2 + "\\hat{i} + " + y2  + "\\hat{j} + " + z2 + "\\hat{k} )) - (" + n + " ( "  + x1 + "\\hat{i} + " + y1  + "\\hat{j} + " + z1 + "\\hat{k} )) }{" + m + "-" + n + "} \\space = \\space \\frac{ ( "  + (m*x2) + "\\hat{i} + " + (m*y2)  + "\\hat{j} + " + (m*z2) + "\\hat{k} ) - ( "  + (n*x1) + "\\hat{i} + " + (n*y1)  + "\\hat{j} + " + (n*z1) + "\\hat{k} ) }{" + (m - n) + "} \\]";
    temp += "\\[\\frac{" + ((m*x2)-(n*x1)) + "\\hat{i} + " + ((m*y2)-(n*y1)) + "\\hat{j} + " +  ((m*z2)-(n*z1)) + "\\hat{k} }{" + (m - n) + "} \\space = \\space \\frac{" + ((m*x2)-(n*x1)) + "}{" + (m - n )+ "} \\hat{i} + \\frac{" + ((m*y2)-(n*y1)) + "}{" + (m - n) + "} \\hat{j} + \\frac{" + ((m*z2)-(n*z1)) + "}{" + (m - n) + "} \\hat{k} \\]";
    explain.innerHTML = temp ;
    renderMathInElement(explain);
    }
    else{
    temp += "\\[ Please \\space enter \\space all \\space input \\]";
     explain.innerHTML = temp ;
     renderMathInElement(explain);
    }
}



function circumsolve(){
    var x1,y1,x2,y2,x3,y3,A,B,C;
    x1=parseFloat(document.getElementById('X1st').value);
    y1=parseFloat(document.getElementById('Y1st').value);
    x2=parseFloat(document.getElementById('X2st').value);
    y2=parseFloat(document.getElementById('Y2st').value);
    x3=parseFloat(document.getElementById('X3st').value);
    y3=parseFloat(document.getElementById('Y3st').value);
    A=parseFloat(document.getElementById('angleA').value);
    B=parseFloat(document.getElementById('angleB').value);
    C=parseFloat(document.getElementById('angleC').value);
    var circenterop = document.getElementById("cir_output");
    var temp = "";
    var c1 = (((x1*Math.sin(2*A* Math.PI / 180.0))+(x2*Math.sin(2*B* Math.PI / 180.0))+(x3*Math.sin(2*C* Math.PI / 180.0)))/(Math.sin(2*A* Math.PI / 180.0)+Math.sin(2*B* Math.PI / 180.0)+Math.sin(2*C* Math.PI / 180.0))).toFixed(1)
    var c2 = (((y1*Math.sin(2*A* Math.PI / 180.0))+(y2*Math.sin(2*B* Math.PI / 180.0))+(y3*Math.sin(2*C* Math.PI / 180.0)))/(Math.sin(2*A* Math.PI / 180.0)+Math.sin(2*B* Math.PI / 180.0)+Math.sin(2*C* Math.PI / 180.0))).toFixed(1)
    if((x1!="") && (y1!="") && (x2 !="") && (y2 != "") && (x3 != "") && (y3 !="") && (A!="") && (B!="") && (C!="")){
        temp += "\\[Circumcenter \\space = \\space ( \\space \\frac{x1 \\times sin2A + x2 \\times sin2B + x3 \\times sin2C }{sin2A + sin2B + sin2C }, \\space \\frac{y1 \\times sin2A + y2 \\times sin2B + y3 \\times sin2C }{sin2A + sin2B + sin2C} )" + "\\] ";
        temp += "\\[( \\frac { (" + x1 + "\\times \\space Sin2(" + A + ")) + (" + x2 + "\\times \\space Sin2(" + B + ")) + (" + x3 + "\\times \\space Sin2(" + C + "))}{ (  Sin2(" + A + ") +  Sin2(" + B + ") +  Sin2(" + C + "))} \\space , \\space  \\frac { (" + y1 + "\\times \\space Sin2(" + A + ")) + (" + y2 + "\\times \\space Sin2(" + B + ")) + (" + y3 + "\\times \\space Sin2(" + C + "))}{ (  Sin2(" + A + ") +  Sin2(" + B + ") +  Sin2(" + C + "))}) \\]";
        temp += "\\[( \\frac { ((" + ((x1*Math.sin(2*A* Math.PI / 180.0)).toFixed(1)) + " ) + (" + ((x2*Math.sin(2*B* Math.PI / 180.0)).toFixed(1)) + ") + (" + ((x3*Math.sin(2*C* Math.PI / 180.0)).toFixed(1)) + "))}{ (" + ((Math.sin(2*A* Math.PI / 180.0)).toFixed(1))+ ") + (" + ((Math.sin(2*B* Math.PI / 180.0)).toFixed(1)) + ") + (" + ((Math.sin(2*C* Math.PI / 180.0)).toFixed(1)) + ")} \\space , \\space  \\frac { ((" + ((y1*Math.sin(2*A* Math.PI / 180.0)).toFixed(1)) + ") + (" + ((y2*Math.sin(2*B* Math.PI / 180.0)).toFixed(1)) + ") + (" + ((y3*Math.sin(2*C* Math.PI / 180.0)).toFixed(1)) + "))}{ " + ((Math.sin(2*A* Math.PI / 180.0)).toFixed(1)) + "+" + ((Math.sin(2*B* Math.PI / 180.0)).toFixed(1)) + "+" + ((Math.sin(2*C* Math.PI / 180.0)).toFixed(1)) + "}) \\]";
        temp += "\\[( \\frac { " + (((x1*Math.sin(2*A* Math.PI / 180.0))+(x2*Math.sin(2*B* Math.PI / 180.0))+(x3*Math.sin(2*C* Math.PI / 180.0))).toFixed(1)) + "}{" + (Math.sin(2*A* Math.PI / 180.0)+Math.sin(2*B* Math.PI / 180.0)+Math.sin(2*C* Math.PI / 180.0)).toFixed(1) + "} \\space , \\space \\frac { " + (((y1*Math.sin(2*A* Math.PI / 180.0))+(y2*Math.sin(2*B* Math.PI / 180.0))+(y3*Math.sin(2*C* Math.PI / 180.0))).toFixed(1)) + "}{" + (Math.sin(2*A* Math.PI / 180.0)+Math.sin(2*B* Math.PI / 180.0)+Math.sin(2*C* Math.PI / 180.0)).toFixed(1) + "} ) \\]";
        temp += "\\[Circumcenter \\space = \\space (" + eval(String(c1)) + "," + eval(String(c2)) + ")"  +"\\]";
        circenterop.innerHTML = temp;
        renderMathInElement(circenterop);
    }
}
function incentersolve(){
    var x1,y1,x2,y2,x3,y3,a,b,c;
    x1=parseFloat(document.getElementById('X1').value);
    y1=parseFloat(document.getElementById('Y1').value);
    x2=parseFloat(document.getElementById('X2').value);
    y2=parseFloat(document.getElementById('Y2').value);
    x3=parseFloat(document.getElementById('X3').value);
    y3=parseFloat(document.getElementById('Y3').value);
    a=parseFloat(document.getElementById('ina').value);
    b=parseFloat(document.getElementById('inb').value);
    c=parseFloat(document.getElementById('inc').value);
    var incenterop = document.getElementById("informula");
    var explain = document.getElementById("in_output");
    var temp = "";

    if((!isNaN(x1)) && (!isNaN(y1)) && (!isNaN(x2)) && (!isNaN(y2)) && (!isNaN(x3)) && (!isNaN(y3)) && (!isNaN(a)) && (!isNaN(b)) && (!isNaN(c))){
        explain.innerHTML = "\\[Incenter \\space  = \\space ( \\space \\frac{a \\times x1 + b \\times x2 + c \\times x3 }{a+b+c}, \\space \\frac{a \\times y1 + b \\times y2 + c \\times y3 }{a+b+c} )" + "\\] ";
        renderMathInElement(document.getElementById("in_output"));
        temp += "\\[( \\frac { (" + a + "\\times" + x1 + ") + (" + b + "\\times" + x2 + ") + (" + c + "\\times" + x3 + ")}{ ( (" + a + ")+ (" + b + ") + (" + c + "))} \\space , \\space ( \\frac { (" + a + "\\times" + y1 + ") + (" + b + "\\times" + y2 + ") + (" + c + "\\times" + y3 + ") }{ ((" + a + ") + (" + b + ") + (" + c + "))} ) \\]";
        temp += "\\[( \\frac { ((" + (a*x1) + " ) + (" + (b*x2) + ") + (" + (c*x3) + "))}{ " + (a+b+c) + "} \\space , \\space ( \\frac { ((" + (a*y1) + ") + (" + (b*y2) + ") + (" + (c*y3) + "))}{ " + (a+b+c) + "}) \\]";
        temp += "\\[( \\frac { " + ((a*x1)+(b*x2)+(c*x3)) + "}{" + (a+b+c) + "} \\space , \\space \\frac { " + ((a*y1)+(b*y2)+(c*y3)) + "}{" + (a+b+c) + "} ) \\]";
        temp += "\\[(" + (eval(String(((a*x1)+(b*x2)+(c*x3))/(a+b+c)))).toFixed(3) + "," + (eval(String(((a*y1)+(b*y2)+(c*y3))/(a+b+c)))).toFixed(3) + ")"  +"\\]";
        incenterop.innerHTML = temp;
        renderMathInElement(incenterop);

    }
}

function convexcheckfind(){
    let a = parseInt(document.getElementById("convexcheckin").value)
    let a1 = parseInt(document.getElementById("convexcheckin1").value)
    let a2 = parseInt(document.getElementById("convexcheckin2").value)
    let a3 = parseInt(document.getElementById("convexcheckin3").value)
    let a4 = parseInt(document.getElementById("convexcheckin4").value)
    let a5 = parseInt(document.getElementById("convexcheckin5").value)
    let a6 = parseInt(document.getElementById("convexcheckin6").value)
    let a7 = parseInt(document.getElementById("convexcheckin7").value)
    var points = [[a,a1],[a2,a3],[a4,a5],[a6,a7]]
    if (isConvex(points)){
        document.getElementById("convexcheckans").innerHTML = "Yes"
    }
    else{
        document.getElementById("convexcheckans").innerHTML = "No"
    }
}

function isConvex(points)
{
    var N = points.length;
    var prev = 0;
    var curr = 0;
    for (i = 0; i < N; i++) {

        var temp= [ points[i],
                points[(i + 1) % N],
                points[(i + 2) % N] ];

        curr = CrossProduct(temp);
        if (curr != 0) {
            if (curr * prev < 0) {
                return false;
            }
            else {
                prev = curr;
            }
        }
    }
    return true;
}

function CrossProduct(A)
{
    var X1 = (A[1][0] - A[0][0]);
    var Y1 = (A[1][1] - A[0][1]);
    var X2 = (A[2][0] - A[0][0]);
    var Y2 = (A[2][1] - A[0][1]);
    return (X1 * Y2 - Y1 * X2);
}


function excentersolve(){
    var x1,y1,x2,y2,x3,y3,a,b,c;
    x1=parseFloat(document.getElementById('Xn1').value);
    y1=parseFloat(document.getElementById('Yn1').value);
    x2=parseFloat(document.getElementById('Xn2').value);
    y2=parseFloat(document.getElementById('Yn2').value);
    x3=parseFloat(document.getElementById('Xn3').value);
    y3=parseFloat(document.getElementById('Yn3').value);
    a=parseFloat(document.getElementById('ena').value);
    b=parseFloat(document.getElementById('enb').value);
    c=parseFloat(document.getElementById('enc').value);
    var output1 = document.getElementById("ex_output1");
    var temp = "";
    var excenterop1 = (-a*x1 + b*x2 + c*x3)/(-a+b+c)
    var excenterop2 = (-a*y1 + b*y2 + c*y3)/(-a+b+c)
    var excenterop3 = (a*x1 - b*x2 + c*x3)/(a-b+c)
    var excenterop4 = (a*y1 - b*y2 + c*y3)/(a-b+c)
    var excenterop5 = (a*x1 + b*x2 - c*x3)/(a+b-c)
    var excenterop6 = (a*y1 + b*y2 - c*y3)/(a+b-c)
    if(!isNaN(x1) && !isNaN(y1) && !isNaN(x2) && !isNaN(y2) && !isNaN(x3) && !isNaN(y3) && !isNaN(a) && !isNaN(b) && !isNaN(c))
    {
     temp += "\\[The \\space coordinates \\space of \\space Excenters \\space are \\space given \\space by \\]";
     temp += "\\[I1 \\space = \\space ( \\space \\frac{(-ax1)+(bx2)+(cx3)}{(-a)+(b)+(c)} \\space , \\space \\frac{(-ay1)+(by2)+(cy3)}{(-a)+(b)+(c)} \\space ) \\]";
     temp +=  "\\[I1 \\space = \\space ( \\space \\frac{( " + (-a) + "\\times" + x1 + ") + (" + b + " \\times " + x2 + ") + (" + c + "\\times" + x3 + ") }{(" + (-a) + ") + (" + b + ") + (" + c + ")} \\space , \\space \\frac{( " + (-a)+ "\\times" + y1 + ") + (" + b + "\\times" + y2 + ") + (" + c + "\\times" + y3 + ") }{(" + (-a) + ") + (" + b + ") + (" + c + ")} ) \\]";
     temp += "\\[I1 \\space = \\space ( \\space \\frac{( " + ((-a)*x1) + ") + (" + (b*x2) + ") + (" + (c*x3) + ") }{(" + (-a) + ") + (" + b + ") + (" + c + ")} \\space , \\space \\frac{( " + ((-a)*y1) + ") + (" + (b*y2) + ") + (" + (c*y3) + ") }{(" + (-a) + ") + (" + b + ") + (" + c + ")} ) \\]";    
     temp +=  "\\[I1 \\space = \\space ( \\space \\frac{ " + (((-a)*x1)+(b*x2)+(c*x3)) + " }{" + ((-a)+b+c) + "} \\space , \\space \\frac{ " + (((-a)*y1)+(b*y2)+(c*y3)) + " }{" + ((-a)+b+c) + "} ) \\]";
     temp +=  "\\[The \\space excenter \\space for \\space first \\space side \\space is \\space ( " + excenterop1.toFixed(2) + " , " + excenterop2.toFixed(2) + ") \\]";
     temp += "\\[I2 \\space = \\space ( \\space \\frac{(ax1)-(bx2)+(cx3)}{(a)-(b)+(c)} \\space , \\space \\frac{(ay1)-(by2)+(cy3)}{(a)-(b)+(c)} \\space ) \\]";
     temp +=  "\\[I2 \\space = \\space ( \\space \\frac{( " + (a) + "\\times" + x1 + ") - (" + (b) + " \\times " + x2 + ") + (" + c + "\\times" + x3 + ") }{(" + (a) + ") - (" + b + ") + (" + c + ")} \\space , \\space \\frac{( " + a + "\\times" + y1 + ") - (" + b + "\\times" + y2 + ") + (" + c + "\\times" + y3 + ") }{(" + (a) + ") - (" + b + ") + (" + c + ")} ) \\]";
     temp += "\\[I2 \\space = \\space ( \\space \\frac{( " + ((a)*x1) + ") - (" + (b*x2) + ") + (" + (c*x3) + ") }{(" + (a) + ") - (" + b + ") + (" + c + ")} \\space , \\space \\frac{( " + ((a)*y1) + ") - (" + (b*y2) + ") + (" + (c*y3) + ") }{(" + (a) + ") - (" + b + ") + (" + c + ")} ) \\]";    
     temp +=  "\\[I2 \\space = \\space ( \\space \\frac{ " + (((a)*x1)-(b*x2)+(c*x3)) + " }{" + (a-b+c) + "} \\space , \\space \\frac{ " + (((a)*y1)-(b*y2)+(c*y3)) + " }{" + (a-b+c) + "} ) \\]";
     temp += "\\[The \\space excentre \\space for \\space second \\space side \\space is \\space ( " + excenterop3.toFixed(2) + " , " + excenterop4.toFixed(2) + ") \\]";
     temp += "\\[I3 \\space = \\space ( \\space \\frac{(ax1)+(bx2)-(cx3)}{(a)+(b)-(c)} \\space , \\space \\frac{(ay1)+(by2)-(cy3)}{(a)+(b)-(c)} \\space ) \\]";
     temp +=  "\\[I3 \\space = \\space ( \\space \\frac{( " + (a) + "\\times" + x1 + ") + (" + (b) + " \\times " + x2 + ") - (" + c + "\\times" + x3 + ") }{(" + (a) + ") + (" + b + ") - (" + c + ")} \\space , \\space \\frac{( " + a + "\\times" + y1 + ") + (" + b + "\\times" + y2 + ") - (" + c + "\\times" + y3 + ") }{(" + (a) + ") + (" + b + ") - (" + c + ")} ) \\]";
     temp += "\\[I3 \\space = \\space ( \\space \\frac{( " + ((a)*x1) + ") + (" + (b*x2) + ") - (" + (c*x3) + ") }{(" + (a) + ") + (" + b + ") - (" + c + ")} \\space , \\space \\frac{( " + ((a)*y1) + ") + (" + (b*y2) + ") - (" + (c*y3) + ") }{(" + (a) + ") + (" + b + ") - (" + c + ")} ) \\]";    
     temp +=  "\\[I3 \\space = \\space ( \\space \\frac{ " + (((a)*x1)+(b*x2)-(c*x3)) + " }{" + (a+b-c) + "} \\space , \\space \\frac{ " + (((a)*y1)+(b*y2)-(c*y3)) + " }{" + (a+b-c) + "} ) \\]";
     temp  += "\\[The \\space excentre \\space for \\space third \\space side \\space is \\space ( " + excenterop5.toFixed(2)  + " , " + excenterop6.toFixed(2) + ") \\]"; 
     output1.innerHTML = temp;
     renderMathInElement(output1);
    }
    else{
        temp += "\\[Please \\space enter \\space all \\space fields \\]";
        output1.innerHTML = temp;
        renderMathInElement(output1);
    }
}

function collinearsolve() {
    var x1=parseFloat(document.getElementById('a1').value);   
    var y1=parseFloat(document.getElementById('b1').value);
    var x2=parseFloat(document.getElementById('a2').value);
    var y2=parseFloat(document.getElementById('b2').value);
    var x3=parseFloat(document.getElementById('a3').value);
    var y3=parseFloat(document.getElementById('b3').value);
    var mA= (y2-y1)/(x2-x1);  
    var mB = (y3-y2)/(x3-x2);  
    if(mA==mB){
        document.getElementById('collop1').innerHTML = "\\[\\frac{y2 - y1}{x2 - x1} \\space = \\space \\frac{y3 - y2}{x3 - x2} \\space => \\space \\frac{"+y2+" - "+y1+"}{"+x2+" - "+x1+"} \\space = \\space \\frac{"+y3+" - "+y2+"}{"+x3+" - "+x2+"} \\space => \\space "+mA.toFixed(3)+" \\space = \\space "+mB.toFixed(3)+"\\]"; 
        document.getElementById('collop2').innerHTML = "\\[Hence, \\space Points \\space are \\space collinear \\] "; 
    } else{
        document.getElementById('collop1').innerHTML = "\\[\\frac{y2 - y1}{x2 - x1} \\space != \\space \\frac{y3 - y2}{x3 - x2} \\space => \\space \\frac{"+y2+" - "+y1+"}{"+x2+" - "+x1+"} \\space != \\space \\frac{"+y3+" - "+y2+"}{"+x3+" - "+x2+"} \\space => \\space "+mA.toFixed(3)+" \\space != \\space "+mB.toFixed(3)+"\\]"; 
        document.getElementById('collop2').innerHTML = "\\[Hence, \\space Points \\space are \\space non-collinear" +"\\] ";
    }  
    renderMathInElement(document.getElementById("collop1"));   
    renderMathInElement(document.getElementById("collop2"));   
}

function displanesolve()
{
    var a,b,c,d,mx,my,mz;
    a=parseFloat(document.getElementById('a1s').value);
    b=parseFloat(document.getElementById('b1s').value);
    c=parseFloat(document.getElementById('c1s').value);
    d=parseFloat(document.getElementById('d1s').value);
    mx=parseFloat(document.getElementById('mx1').value);
    my=parseFloat(document.getElementById('my1').value);
    mz=parseFloat(document.getElementById('mz1').value);
    var explain = document.getElementById("planept");

    if(isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d) || isNaN(mx) || isNaN(my) || isNaN(mz)){
        explain.innerHTML = "\\[Please \\space enter \\space all \\space fields \\]";
        renderMathInElement(explain);
        document.getElementById('displanept').innerHTML= "";
    }else{
        explain.innerHTML = "\\[Distance \\space from \\space point \\space to \\space plane \\space  =\\space  \\frac{Ax + By + Cz + D}{\\sqrt{A^2+B^2+C^2}} \\] ";
        renderMathInElement(explain);
        var dis = (Math.abs(a*mx + b*my +c*mz+d))/(Math.sqrt(a*a + b*b + c*c ));
        document.getElementById('displanept').innerHTML= 'The distance from ('+ mx + ',' + my + ',' + mz + ') to ' + a + 'x + ' + b + 'y + ' + c + 'z + ' + d + '= 0 is ' + dis.toFixed(2);
    }
    
}
function solveocta() {
    var a = document.getElementById("inputoctside").value;
    var voloutput = document.getElementById("resultofoctvol");
    var tsaoutput = document.getElementById("resultofocttsa");
    var diagoutput = document.getElementById("resultofoctdiag");
    var voltemp = "";
    var tsatemp = "";
    var diagtemp = "";
    if (a != "") {
        voltemp += "\\[Volume \\space of \\space Octahedron \\space \\newline \\frac{\\sqrt{2}}{3} \\times" + a + "\\times" + a + "\\times" + a + "\\ = " + eval(String(0.471 * (a * a * a))).toFixed(3) + "\\]";
        voloutput.innerHTML = voltemp;

        tsatemp += "\\[Surface \\space Area \\space of \\space Octahedron \\space \\newline " + 2  + "\\times \\sqrt{3} " + "\\times" + a + "\\times" + a + "\\ = " + eval(String(3.464 * (a * a))).toFixed(3) + "\\]";
        tsaoutput.innerHTML = tsatemp;

        diagtemp += "\\[Diagonal \\space of \\space Octahedron \\space \\newline \\sqrt{2} \\times " + a + "\\ = " + eval(String(1.414 * a)).toFixed(3) + "\\]";
        diagoutput.innerHTML = diagtemp;

        renderMathInElement(voloutput);
        renderMathInElement(tsaoutput);
        renderMathInElement(diagoutput);

    } else {
        voloutput.innerHTML = "";
        tsaoutput.innerHTML = "";
        diagoutput.innerHTML = "";
    }

}

function solvepolycal(){
    var S = document.getElementById("inputareapolycal").value;
    var n = document.getElementById("inputsidepolycal").value;   
    var side = math.sqrt( 4 * S * math.tan(math.pi / n ) / n  );
    var peri = side * n ;

    console.log(side);
    console.log(peri);
    if (S!="" && n!=""){
        if (n>=3 && n<=12){

            document.getElementById('resultofsidepolycal1').innerHTML= "\\[Side \\space value \\space of \\space the \\space "+n+" \\space sided \\space polygon \\space will \\space be \\space \\]";
            document.getElementById('resultofsidepolycal2').innerHTML= "\\[ \\sqrt{\\frac{4 \\times "+S+" \\times \\tan(\\pi / "+n+" )}{"+n+"} } = \\space "+side.toFixed(3)+"\\]";
            renderMathInElement(document.getElementById('resultofsidepolycal1'));
            renderMathInElement(document.getElementById('resultofsidepolycal2'));
            document.getElementById('resultofperipolycal').innerHTML= "\\[ Perimeter (L)= "+side.toFixed(2)+" \\times "+n+" = "+peri.toFixed(2)+"\\]";
            renderMathInElement(document.getElementById('resultofperipolycal'));

        } else{
            document.getElementById('resultofsidepolycal1').innerHTML="";
            document.getElementById('resultofsidepolycal2').innerHTML= "Please enter value of n ranging from 3 to 12";
            document.getElementById('resultofperipolycal').innerHTML="";
        }
    } else {
        document.getElementById('resultofsidepolycal1').innerHTML="";
        document.getElementById('resultofsidepolycal2').innerHTML= "";
        document.getElementById('resultofperipolycal').innerHTML="";
    }
}

function solvedodeca() {
    var a = document.getElementById("inputdodecaside").value;
    var voloutput = document.getElementById("resultofdodecavol");
    var tsaoutput = document.getElementById("resultofdodecatsa");
    var voltemp = "";
    var tsatemp = "";
    if (a != "") {
        voltemp += "\\[Volume \\space of \\space Dodecahedron \\space \\newline \\frac{15 + 7 \\sqrt{5}}{4} \\times" + a + "\\times" + a + "\\times" + a + "\\ = " + eval(String(7.663 * (a * a * a))).toFixed(3) + "\\]";
        voloutput.innerHTML = voltemp;

        tsatemp += "\\[Surface \\space Area \\space of \\space Dodecahedron \\space \\newline " + 3  + "\\times \\sqrt{25 + 10 \\sqrt{5}} " + "\\times" + a + "\\times" + a + "\\ = " + eval(String(20.646 * (a * a))).toFixed(3) + "\\]";
        tsaoutput.innerHTML = tsatemp;

        renderMathInElement(voloutput);
        renderMathInElement(tsaoutput);

    } else {
        voloutput.innerHTML = "";
        tsaoutput.innerHTML = "";
    }

}

function solverhododeca() {
    var a = document.getElementById("inputrhododecaside").value;
    var areaoutput = document.getElementById("resultofrhododecaarea");
    var voloutput = document.getElementById("resultofrhododecavol");
    var mroutput = document.getElementById("resultofrhododecamr");
    var iroutput = document.getElementById("resultofrhododecair");
    var areatemp = "";
    var voltemp = "";
    var mrtemp = "";
    var irtemp = "";
    if (a != "") {
        areatemp += "\\[Surface \\space Area \\space of \\space Rhombic \\space \\newline Dodecahedron \\space \\newline " + 8 + "\\times \\sqrt{2}" + "\\times" + a + "\\times" + a + "\\ = " + eval(String(11.31371 * a * a)).toFixed(3) + "\\]";
        areaoutput.innerHTML = areatemp;

        voltemp += "\\[Volume \\space of \\space Rhombic \\space Dodecahedron \\space \\newline \\frac{16}{9} \\times \\sqrt{3}" + "\\times" + a + "\\times" + a + "\\times" + a + "\\ = " + eval(String(3.0792 * a * a * a)).toFixed(3) + "\\]";
        voloutput.innerHTML = voltemp;

        mrtemp += "\\[Midsphere \\space radius \\space of \\space Rhombic \\space \\newline Dodecahedron \\space \\newline \\frac{2}{3} \\times \\sqrt{2}" + "\\times" + a + "\\ = " + eval(String(0.94281 * a )).toFixed(3) + "\\]";
        mroutput.innerHTML = mrtemp;

        irtemp += "\\[Insphere \\space radius \\space of \\space Rhombic \\space \\newline Dodecahedron \\space \\newline \\frac{1}{3} \\times" + a + "\\times \\sqrt{6} " + "\\ = " + eval(String(0.8165 * a )).toFixed(3) + "\\]";
        iroutput.innerHTML = irtemp;

        renderMathInElement(areaoutput);
        renderMathInElement(voloutput);
        renderMathInElement(mroutput);
        renderMathInElement(iroutput);

    } else {
        areaoutput.innerHTML = "";
        voloutput.innerHTML = "";
        mroutput.innerHTML = "";
        iroutput.innerHTML = "";
    }

}

function angletwoplanesolve()
{
    var a,b,c,d,a1,b1,c1,d1;
    a=parseFloat(document.getElementById('pa1').value);
    b=parseFloat(document.getElementById('pb1').value);
    c=parseFloat(document.getElementById('pc1').value);
    d=parseFloat(document.getElementById('pd1').value);
    a1=parseFloat(document.getElementById('pa2').value);
    b1=parseFloat(document.getElementById('pb2').value);
    c1=parseFloat(document.getElementById('pc2').value);
    d1=parseFloat(document.getElementById('pd2').value);
    var explain = document.getElementById("angleplane");
    var temp = "";
    if(isNaN(a) || isNaN(b) || isNaN(c) ||  isNaN(d) || isNaN(a1) || isNaN(b1) || isNaN(c1) || isNaN(d1)){
        temp = "\\[Please \\space enter \\space all \\space fields \\]";
    }else{
        var ang =(Math.abs(a*a1 + b*b1 +c*c1))/(Math.sqrt((a*a + b*b + c*c)*(a1*a1 + b1*b1 + c1*c1)));
        var ang1 =  Math.acos(ang);
        temp += "\\[Formula: \\space cos\\alpha = \\frac{|A1.A2  + B1.B2 + C1.C2 |}{\\sqrt{A1^2+B1^2+C1^2} \\times \\sqrt{A2^2+B2^2+C2^2}} \\] ";
        temp += "\\[cos \\alpha = \\frac{| ( " + a + "\\times" + a1 + " ) + ( " + b + "\\times" + b1 + " ) + ( " + c + "\\times" + c1 + " ) | }{\\sqrt{ ( " + a + "^{2} ) + ( " + b + "^{2} ) + ( " + c + "^{2} ) } \\times \\sqrt{ ( " + a1 + "^{2} ) + ( " + b1 + "^{2} ) + ( " + c1 + "^{2} ) } } \\]";
        temp += "\\[cos \\alpha = \\frac {| ( " + (a*a1) + ") + ( " + (b*b1) + ") + (" + (c*c1) + " )) | }{\\sqrt{  " + a**2 + "  +  " + b**2 + " +  " + c**2 + "  } \\times \\sqrt{  " + a1**2 + " +  " + b1**2 + "  +  " + c1**2 + "  } } \\]";
        temp += "\\[cos \\alpha = \\frac{| " + ((a*a1)+(b*b1)+(c*c1)) + "| }{\\sqrt{  " + (a**2 +  b**2 + c**2) + "  } \\times \\sqrt{  " + (a1**2 + b1**2 +  c1**2) + "  } } \\]";
        temp += "\\[cos \\alpha = \\frac{ " + Math.abs(a*a1+b*b1+c*c1) + "}{ " + (Math.sqrt((a*a + b*b + c*c)*(a1*a1 + b1*b1 + c1*c1))).toFixed(4) + "} \\]";
        temp += "\\[\\alpha = cos^{-1} (\\frac { "  + Math.abs(a*a1+b*b1+c*c1) + "}{ " + (Math.sqrt((a*a + b*b + c*c)*(a1*a1 + b1*b1 + c1*c1))).toFixed(4) + "}) \\]";
        temp += "\\[\\alpha = cos^{-1} ( " + ang.toFixed(5) + " ) \\]";
        temp += "\\[\\alpha = " + (ang1*180/Math.PI).toFixed(2) + " \\degree \\]";
        document.getElementById('angleplaneop').innerHTML= 'Angle between plane 1 and 2 is '+ (ang1*180/Math.PI).toFixed(2) + '&deg';
    }

    explain.innerHTML = temp ;
    renderMathInElement(explain);
    
    
}

function countscfind(){
    let N = parseInt(document.getElementById('countsc').value)
    let cnt = 0, i = 1;
    while (Math.floor(Math.pow(i, 6)) <= N)
    {
        ++cnt;
        ++i;
    }
    document.getElementById("countscans").innerHTML = cnt
}

function vectoradd(){
    var a=parseFloat(document.getElementById('a1b').value);
    var b=parseFloat(document.getElementById('a2b').value);
    var c=parseFloat(document.getElementById('a3b').value);
    var d=parseFloat(document.getElementById('b1c').value);
    var e=parseFloat(document.getElementById('b2c').value);
    var f=parseFloat(document.getElementById('b3c').value);
    var add1 = (a+d);
    var add2 = (b+e);
    var add3 = (c+f);
    document.getElementById("vectorsum1").style.display = "block";
    document.getElementById("vsumi").innerHTML = 'Sum of Vectors (X+Y) =  ' + (add1)  ;
    if(add2<0)
    document.getElementById("vsumj").innerHTML =   (add2)  ;
    else
    document.getElementById("vsumj").innerHTML =  '+' +  (add2)  ;
    if(add3<0)
    document.getElementById("vsumk").innerHTML = (add3);
    else
    document.getElementById("vsumk").innerHTML =  '+' +  (add3) ;
}
function vectorsub(){
    var a=parseFloat(document.getElementById('b1a').value);
    var b=parseFloat(document.getElementById('b2a').value);
    var c=parseFloat(document.getElementById('b3a').value);
    var d=parseFloat(document.getElementById('c1b').value);
    var e=parseFloat(document.getElementById('c2b').value);
    var f=parseFloat(document.getElementById('c3b').value);
    var sub1 = (a-d);
    var sub2 = (b-e);
    var sub3 = (c-f);
    document.getElementById("vectorsub1").style.display = "block";
    document.getElementById("vsubi").innerHTML = 'Difference between Vectors (X-Y) =  ' + (sub1)  ;
    if(sub2<0)
    document.getElementById("vsubj").innerHTML =   (sub2)  ;
    else
    document.getElementById("vsubj").innerHTML =  '+' +  (sub2)  ;
    if(sub3<0)
    document.getElementById("vsubk").innerHTML = (sub3);
    else
    document.getElementById("vsubk").innerHTML =  '+' +  (sub3) ;
   

}
function vectordot(){
    var a=parseFloat(document.getElementById('d1e').value);
    var b=parseFloat(document.getElementById('d2e').value);
    var c=parseFloat(document.getElementById('d3e').value);
    var d=parseFloat(document.getElementById('e1d').value);
    var e=parseFloat(document.getElementById('e2d').value);
    var f=parseFloat(document.getElementById('e3d').value);
    var mult1 = (a*d);
    var mult2 = (b*e);
    var mult3 = (c*f);
    var mult = mult1 + mult2 + mult3;
    document.getElementById("vectordot1").innerHTML = "\\[ ="  + (mult) + "\\]";
    renderMathInElement(document.getElementById("vectordot1"));
  
    document.getElementById("dotex").innerHTML = "\\[ Dot \\space Product \\space of \\space Vectors \\space (X.Y) \\space = \\space ( "+ (a)+" * " +(d)+  " ) \\space + \\space ( "+ (b)+" * " +(e)+" )  \\space + \\space ( "+ (c)+" * " +(f)+" )  \\space \\newline \\] " ;
    renderMathInElement(document.getElementById("dotex"));
}

function vactorangle(){
    var a=parseFloat(document.getElementById('vaa1').value);
    var b=parseFloat(document.getElementById('vab1').value);
    var c=parseFloat(document.getElementById('vac1').value);
    var d=parseFloat(document.getElementById('vaa2').value);
    var e=parseFloat(document.getElementById('vab2').value);
    var f=parseFloat(document.getElementById('vac2').value);
    var x = (a*d)+(b*e)+(c*f);
    var y = (a*a+b*b+c*c);
    var z = (d*d+e*e+f*f);
    var p = Math.sqrt(a*a+b*b+c*c).toFixed(2);
    var q = Math.sqrt(d*d+e*e+f*f).toFixed(2);
    var mult =((180*(Math.acos(x/(p*q))))/Math.PI).toFixed(1);
    document.getElementById("var").innerHTML = "\\[ \\theta="  + (mult) + "0^{\\circ} \\]";
    renderMathInElement(document.getElementById("var"));
  
    document.getElementById("vae").innerHTML = `\\[ Angle \\space Between \\space  \\space Vectors \\space (\\theta ) \\space  = cos^{-1}(\\frac{${x}}{\\sqrt{${y}} \\sqrt{${z}}})  \\space \\newline \\] ` ;
    renderMathInElement(document.getElementById("vae"));
}

function ktimes(){
    let A = parseInt(document.getElementById('aofeqn').value)
    let B = parseInt(document.getElementById('bofeqn').value)
    let C = parseInt(document.getElementById('cofeqn').value)
    let K = parseInt(document.getElementById('kofeqn').value)
    document.getElementById("ktimesans").innerHTML = A + " " + K * B
    + " " + K * K * C
}

function vectpral(){
    var a,b,c,d,e,f,mul,mul1,mul2,mul3,mul4,mul5,ans,ans1,ans2;
    var a=parseFloat(document.getElementById('vpa1').value);
    var b=parseFloat(document.getElementById('vpb1').value);
    var c=parseFloat(document.getElementById('vpc1').value);
    var d=parseFloat(document.getElementById('vpa2').value);
    var e=parseFloat(document.getElementById('vpb2').value);
    var f=parseFloat(document.getElementById('vpc2').value);
    
    mul = (b*f);
    mul1 = (c*e);
    mul2 = (a*f);
    mul3 = (c*d);
    mul4 = (a*e);
    mul5 =(b*d);
    ans = (mul-mul1);
    ans1= -(mul2-mul3);
    ans2= (mul4-mul5);
    
    
    if(ans1<0 && ans2<0){
        document.getElementById("vpe").innerHTML = "\\[  \\overrightarrow{X} \\space \\times \\space \\overrightarrow{Y} \\space = \\space \\hat{i} \\space (" + mul + "- \\space (" + mul1 + ")\\space) \\space - \\space \\hat{j} (" + mul2 + "- \\space (" + mul3 + ")\\space)\\space + \\space \\hat{k} (" + mul4 + "- \\space (" + mul5 + ") \\space )    \\newline";
        document.getElementById("vpe").innerHTML += " Cross \\space Product \\space of \\space Vectors \\space (X \\times Y) \\space = " + ans + "\\hat{i} \\space " + ans1 + "\\hat{j} \\space " + ans2 + "\\hat{k} \\]";
        

        }
        else if(ans1<0){
        document.getElementById("vpe").innerHTML = "\\[  \\overrightarrow{X} \\space \\times \\space \\overrightarrow{Y} \\space = \\space \\hat{i} \\space (" + mul + "- \\space (" + mul1 + ")\\space) \\space - \\space \\hat{j} (" + mul2 + "- \\space (" + mul3 + ")\\space)\\space + \\space \\hat{k} (" + mul4 + "- \\space (" + mul5 + ") \\space )    \\newline";
        document.getElementById("vpe").innerHTML += " Cross \\space Product \\space of \\space Vectors \\space (X \\times Y) \\space = " + ans + "\\hat{i} \\space " + ans1 + "\\hat{j} \\space +" + ans2 + "\\hat{k} \\]";
        
        }
        else if(ans2<0){
        document.getElementById("vpe").innerHTML = "\\[  \\overrightarrow{X} \\space \\times \\space \\overrightarrow{Y} \\space = \\space \\hat{i} \\space (" + mul + "- \\space (" + mul1 + ")\\space) \\space - \\space \\hat{j} (" + mul2 + "- \\space (" + mul3 + ")\\space)\\space + \\space \\hat{k} (" + mul4 + "- \\space (" + mul5 + ") \\space )    \\newline";
        document.getElementById("vpe").innerHTML += " Cross \\space Product \\space of \\space Vectors \\space (X \\times Y) \\space = " + ans + "\\hat{i} \\space +" + ans1 + "\\hat{j} \\space " + ans2 + "\\hat{k} \\]";
        
        }
        else{
        document.getElementById("vpe").innerHTML = "\\[  \\overrightarrow{X} \\space \\times \\space \\overrightarrow{Y} \\space = \\space \\hat{i} \\space (" + mul + "- \\space (" + mul1 + ")\\space) \\space - \\space \\hat{j} (" + mul2 + "- \\space (" + mul3 + ")\\space)\\space + \\space \\hat{k} (" + mul4 + "- \\space (" + mul5 + ") \\space )    \\newline";
        document.getElementById("vpe").innerHTML += " Cross \\space Product \\space of \\space Vectors \\space (X \\times Y) \\space = " + ans + "\\hat{i} \\space +" + ans1 + "\\hat{j} \\space +" + ans2 + "\\hat{k} \\]";
        
        }
        renderMathInElement(document.getElementById("vpe"));
        if(ans==0&&ans1==0&&ans2 ==0)
        {
            document.getElementById("vpr").innerHTML = "As cross Product is Zero so X is prallel to Y";
        }
        else
        {
            document.getElementById("vpr").innerHTML = "As cross Product is Not Zero so X is Not prallel to Y"
        }
}

function vecotrmod(){
    var a=parseFloat(document.getElementById('vma').value);
    var b=parseFloat(document.getElementById('vmb').value);
    var c=parseFloat(document.getElementById('vmc').value);
    
    var ans = (a*a)+(c*c)+(b*b);
    if(Number.isInteger(Math.sqrt(ans)))
    document.getElementById("vmr").innerHTML = "\\[ ="  + (Math.sqrt(ans)) + "\\]";
    else
    document.getElementById("vmr").innerHTML = "\\[ =   \\space \\sqrt{"+(ans) + "} \\]";

    renderMathInElement(document.getElementById("vmr"));
  
    document.getElementById("vme").innerHTML = `\\[ Modulus \\space  of \\space Vectors \\space   = \\space \\sqrt{${a}^2+${b}^2+${c}^2} \\space \\newline \\] ` ;
    renderMathInElement(document.getElementById("vme"));
}

function vectorproj(){
    let a=parseFloat(document.getElementById('inp1').value);
    let b=parseFloat(document.getElementById('inp2').value);
    let c=parseFloat(document.getElementById('inp3').value);
    let d=parseFloat(document.getElementById('inp4').value);
    let e=parseFloat(document.getElementById('inp5').value);
    let f=parseFloat(document.getElementById('inp6').value);
    let projoutput = document.getElementById("vectorproj1");
    let projtemp="";
    let dot1 = (a*d)+(b*e) + (c*f);
    let projy = (d**2+e**2+f**2);
    let proj = Math.sqrt(projy);
    let proj1 = (proj)**2;
    if(isNaN(a) || isNaN(b) ||isNaN(c) ||isNaN(d) ||isNaN(e) ||isNaN(f) ){
        projtemp += "\\[Please \\space enter \\space all \\space fields \\]";
        projoutput.innerHTML = projtemp;
    renderMathInElement(document.getElementById("vectorproj1"));
    }
    else{
    projtemp  += "\\[If \\space \\overrightarrow{a} \\space is \\space projected \\space on \\space \\overrightarrow{b} \\space then \\space Vector \\space Projection \\space Formula \\space is \\]";
    projtemp += "\\[ proj_b a \\space = \\space \\frac {\\overrightarrow{a}.\\overrightarrow{b}}{|b|^2} \\overrightarrow{b} \\]";
    projtemp  += "\\[  proj_b a \\space = \\space \\frac{" + dot1 + "}{" + (proj1).toPrecision(2)+ "}(" + d + "," + e + "," + f + ") \\]";
    projtemp += "\\[The \\space Projection \\space of \\space X \\space on \\space Y \\space are \\space ( \\frac{" + (dot1*d)  + "}{" + (proj1.toPrecision(2)) + "} \\space , \\space \\frac{"  + (dot1*e)  + "}{" + (proj1.toPrecision(2)) + "} \\space , \\space \\frac{"  + (dot1*f)  + "}{" + (proj1.toPrecision(2)) + "}) \\]";
    projoutput.innerHTML = projtemp;
    renderMathInElement(document.getElementById("vectorproj1"));
}
}
function vectorplanar(){
    var a=parseFloat(document.getElementById('inp11').value);
    var b=parseFloat(document.getElementById('inp22').value);
    var c=parseFloat(document.getElementById('inp33').value);
    var d=parseFloat(document.getElementById('inp44').value);
    var e=parseFloat(document.getElementById('inp55').value);
    var f=parseFloat(document.getElementById('inp66').value);
    var g=parseFloat(document.getElementById('inp77').value);
    var h=parseFloat(document.getElementById('inp88').value);
    var i=parseFloat(document.getElementById('inp99').value);
    var mult = (a*((e*i)-(f*h)));
    var mult1 = (b*((d*i)-(f*g)));
    var mult2 = (c*((d*h)-(e*g)));
    var ans = mult-mult1+mult2;
    if(isNaN(a) || isNaN(b) ||isNaN(c) ||isNaN(d) ||isNaN(e) ||isNaN(f) ||isNaN(g) ||isNaN(h) ||isNaN(i) ){
        document.getElementById("vectorplanar1").innerHTML = "\\[Please \\space enter \\space valid \\space input  \\]";
        renderMathInElement(document.getElementById("vectorplanar1"));

    }
    else{
    if(ans == 0){
    document.getElementById("vectorplanar1").innerHTML = "\\[The \\space following \\space vectors \\space are \\space Coplanar \\space as \\space Δ \\space = \\space 0.  \\]";
    renderMathInElement(document.getElementById("vectorplanar1"));
}
    else {
        document.getElementById("vectorplanar1").innerHTML = "\\[The \\space following \\space vectors \\space are \\space Non-Coplanar \\space as \\space Δ \\space != \\space 0.  \\]";
        renderMathInElement(document.getElementById("vectorplanar1"));
    }
}
}

function vectorscalar(){
    let a=parseFloat(document.getElementById('inp09').value);
    let b=parseFloat(document.getElementById('inp08').value);
    let c=parseFloat(document.getElementById('inp07').value);
    let d=parseFloat(document.getElementById('inp06').value);
    let e=parseFloat(document.getElementById('inp05').value);
    let f=parseFloat(document.getElementById('inp04').value);
    let scalaroutput = document.getElementById("vectorscalar1");
    let scalartemp="";
    let dot1 = (a*d)+(b*e) + (c*f);
    let projy = (a**2+b**2+c**2);
    if(isNaN(a) || isNaN(b) ||isNaN(c) ||isNaN(d) ||isNaN(e) ||isNaN(f) ){
        scalartemp += "\\[Please \\space enter \\space all \\space fields \\]";
        scalaroutput.innerHTML = scalartemp;
    renderMathInElement(document.getElementById("vectorscalar1"));
    }
    else{
    scalartemp += "\\[If \\space \\overrightarrow{a} \\space is \\space projected \\space on \\space \\overrightarrow{b} \\space then \\space Scalar \\space Projection \\space Formula \\space is \\]";
    scalartemp += "\\[ proj_b a \\space = \\space \\frac {\\overrightarrow{a}.\\overrightarrow{b}}{|a|}  \\]";
    scalartemp += "\\[  proj_b a \\space = \\space \\frac{" + dot1 + "}{ \\sqrt{" + (projy)+ "}} \\]";
    scalartemp += "\\[Scalar \\space Projection \\space of \\space X \\space on \\space Y \\space is \\space \\frac{" + dot1 + "}{ \\sqrt{" + (projy) + "}}  \\]";
    scalaroutput.innerHTML = scalartemp;
    renderMathInElement(document.getElementById("vectorscalar1"));
   }
}

function vectorunit(){
    var a=parseFloat(document.getElementById('vua').value);
    var b=parseFloat(document.getElementById('vub').value);
    var c=parseFloat(document.getElementById('vuc').value);

    var ans = (a*a)+(c*c)+(b*b);
    if(isNaN(a) || isNaN(b) || isNaN(c)){
        document.getElementById("vue").innerHTML = "\\[Please \\space enter \\space all \\space field \\]";
        renderMathInElement(document.getElementById("vue"));
    }
    else{
    document.getElementById("vue").innerHTML = `\\[ Modulus \\space  of \\space Vectors \\space   = \\space \\sqrt{${a}^2+${b}^2+${c}^2} \\space   ` ;


    if(Number.isInteger(Math.sqrt(ans)))
    document.getElementById("vue").innerHTML += " ="  + (Math.sqrt(ans)) + "\\]";
    else
    document.getElementById("vue").innerHTML += " =   \\space \\sqrt{"+(ans) + "} \\]";
    renderMathInElement(document.getElementById("vue"));


    document.getElementById("vur").innerHTML = `\\[ Unit \\space Vector  \\space \\space (\\hat{a} )   = \\frac{( \\space ${a} \\hat{i} ) + ( \\space ${b} \\hat{j} ) + ( \\space ${c} \\hat{j} )} {  ` ;
    if(Number.isInteger(Math.sqrt(ans)))
    document.getElementById("vur").innerHTML += " ="  + (Math.sqrt(ans)) + " }\\]";
    else
    document.getElementById("vur").innerHTML += " =   \\space \\sqrt{"+(ans) + "} } \\]";
    renderMathInElement(document.getElementById("vur"));
}
}

function projector(){
    let a=parseFloat(document.getElementById('inpj1').value);
    let b=parseFloat(document.getElementById('inpj2').value);
    let c=parseFloat(document.getElementById('inpj3').value);
    let d=parseFloat(document.getElementById('inpj4').value);
    let e=parseFloat(document.getElementById('inpj5').value);
    let f=parseFloat(document.getElementById('inpj6').value);
    let projoutput = document.getElementById("vectorprojj1");
    let projtemp="";
    let dot1 = (a*d)+(b*e) + (c*f);
    let projy = (d**2+e**2+f**2);
    let proj = Math.sqrt(projy);
    let proj1 = (proj)**2;
    if(isNaN(a) || isNaN(b) ||isNaN(c) ||isNaN(d) ||isNaN(e) ||isNaN(f) ){
        projtemp += "\\[Please \\space enter \\space all \\space fields \\]";
        projoutput.innerHTML = projtemp;
    renderMathInElement(document.getElementById("vectorprojj1"));
    }
    else{
    projtemp  += "\\[If \\space we \\space project \\space \\overrightarrow{a}  \\space on \\space \\overrightarrow{b} \\space then \\space Projected \\space Vector \\space will \\space be \\space -> \\]";
    projtemp += "\\[ proj_b a \\space = \\space \\frac { \\overrightarrow{a} . \\overrightarrow{b}}{|b|^2} \\overrightarrow{b} \\]";
    projtemp  += "\\[  proj_b a \\space = \\space \\frac{" + dot1 + "}{" + (proj1).toFixed(2)+ "}( \\space (" + d + ") \\hat{i} \\space + \\space (" + e + ") \\hat{j} \\space + \\space ( " + f + " ) \\hat{k} \\space ) \\]";
    projtemp += "\\[So \\space Projected \\space Vector \\space of \\space \\overrightarrow{X} \\space on \\overrightarrow{Y} \\space is \\space = \\space ( \\frac{" + (dot1*d)  + "}{" + (proj1.toFixed(2)) + "} ) \\hat{i} \\space + \\space ( \\frac{"  + (dot1*e)  + "}{" + (proj1.toFixed(2)) + "} ) \\hat{j} \\space + \\space \\space ( \\frac{"  + (dot1*f)  + "}{" + (proj1.toFixed(2)) + "} )\\hat{k} \\]";
    projoutput.innerHTML = projtemp;
    renderMathInElement(document.getElementById("vectorprojj1"));
}
}

function vectorcross(){
    var a,b,c,d,e,f,mul,mul1,mul2,mul3,mul4,mul5,ans,ans1,ans2;
    a=parseFloat(document.getElementById('f1g').value);
    b=parseFloat(document.getElementById('f2g').value);
    c=parseFloat(document.getElementById('f3g').value);
    d=parseFloat(document.getElementById('g1f').value);
    e=parseFloat(document.getElementById('g2f').value);
    f=parseFloat(document.getElementById('g3f').value);
    mul = (b*f);
    mul1 = (c*e);
    mul2 = (a*f);
    mul3 = (c*d);
    mul4 = (a*e);
    mul5 =(b*d);
    ans = (mul-mul1);
    ans1= -(mul2-mul3);
    ans2= (mul4-mul5);
    if(ans1<0 && ans2<0){
    document.getElementById("vectorcross1").innerHTML = "\\[  \\overrightarrow{X} \\space \\times \\space \\overrightarrow{Y} \\space = \\space \\hat{i} \\space (" + mul + "- \\space (" + mul1 + ")\\space) \\space - \\space \\hat{j} (" + mul2 + "- \\space (" + mul3 + ")\\space)\\space + \\space \\hat{k} (" + mul4 + "- \\space (" + mul5 + ") \\space )    \\]";
    document.getElementById("vectorcross2").innerHTML = "\\[ Cross \\space Product \\space of \\space Vectors \\space (X \\times Y) \\space = " + ans + "\\hat{i} \\space " + ans1 + "\\hat{j} \\space " + ans2 + "\\hat{k} \\]";
    renderMathInElement(document.getElementById("vectorcross1"));
    renderMathInElement(document.getElementById("vectorcross2"));
    }
    else if(ans1<0){
    document.getElementById("vectorcross1").innerHTML = "\\[  \\overrightarrow{X} \\space \\times \\space \\overrightarrow{Y} \\space = \\space \\hat{i} \\space (" + mul + "- \\space (" + mul1 + ")\\space) \\space - \\space \\hat{j} (" + mul2 + "- \\space (" + mul3 + ")\\space)\\space + \\space \\hat{k} (" + mul4 + "- \\space (" + mul5 + ") \\space )    \\]";
    document.getElementById("vectorcross2").innerHTML = "\\[ Cross \\space Product \\space of \\space Vectors \\space (X \\times Y) \\space = " + ans + "\\hat{i} \\space " + ans1 + "\\hat{j} \\space +" + ans2 + "\\hat{k} \\]";
    renderMathInElement(document.getElementById("vectorcross1"));
    renderMathInElement(document.getElementById("vectorcross2"));
    }
    else if(ans2<0){
    document.getElementById("vectorcross1").innerHTML = "\\[  \\overrightarrow{X} \\space \\times \\space \\overrightarrow{Y} \\space = \\space \\hat{i} \\space (" + mul + "- \\space (" + mul1 + ")\\space) \\space - \\space \\hat{j} (" + mul2 + "- \\space (" + mul3 + ")\\space)\\space + \\space \\hat{k} (" + mul4 + "- \\space (" + mul5 + ") \\space )    \\]";
    document.getElementById("vectorcross2").innerHTML = "\\[ Cross \\space Product \\space of \\space Vectors \\space (X \\times Y) \\space = " + ans + "\\hat{i} \\space +" + ans1 + "\\hat{j} \\space " + ans2 + "\\hat{k} \\]";
    renderMathInElement(document.getElementById("vectorcross1"));
    renderMathInElement(document.getElementById("vectorcross2"));
    }
    else{
    document.getElementById("vectorcross1").innerHTML = "\\[  \\overrightarrow{X} \\space \\times \\space \\overrightarrow{Y} \\space = \\space \\hat{i} \\space (" + mul + "- \\space (" + mul1 + ")\\space) \\space - \\space \\hat{j} (" + mul2 + "- \\space (" + mul3 + ")\\space)\\space + \\space \\hat{k} (" + mul4 + "- \\space (" + mul5 + ") \\space )    \\]";
    document.getElementById("vectorcross2").innerHTML = "\\[ Cross \\space Product \\space of \\space Vectors \\space (X \\times Y) \\space = " + ans + "\\hat{i} \\space +" + ans1 + "\\hat{j} \\space +" + ans2 + "\\hat{k} \\]";
    renderMathInElement(document.getElementById("vectorcross1"));
    renderMathInElement(document.getElementById("vectorcross2"));
    }
}

function vectordistance(){
    var a,b,c,d,e,f,g,h,i;
    a = parseInt(document.getElementById("in11").value);
    b = parseInt(document.getElementById("in22").value);
    c = parseInt(document.getElementById("in33").value);
    d = parseInt(document.getElementById("in44").value);
    e = parseInt(document.getElementById("in55").value);
    f = parseInt(document.getElementById("in66").value);
    g =  parseInt(document.getElementById("in77").value);
    h = parseInt(document.getElementById("in88").value);
    i = parseInt(document.getElementById("in99").value);
   var outputtria = document.getElementById("vectordist1");
   var tempoutput = "";
   var ans = (((h)*(f-c))-((i)*(e-b))); var ans1= -(((g)*(f-c))-((i)*(d-a)) ); var ans2= ( ((g)*(e-b))-((h)*(d-a)));
   var ans3 = Math.sqrt(g**2+h**2+i**2);
   if(!isNaN(a) && !isNaN(b) && !isNaN(c) && !isNaN(d) && !isNaN(e) && !isNaN(f) && !isNaN(g) && !isNaN(h) && !isNaN(i))
  {
    tempoutput += "\\[ Shortest \\space Distance \\space = \\space \\frac{ | \\overrightarrow{b} \\times (\\overrightarrow{X2} - \\overrightarrow{X1} )} {| \\overrightarrow{b} |} \\]";
    tempoutput += "\\[ \\overrightarrow{X2} \\space - \\space \\overrightarrow{X1} \\space = \\space (" + (d-a) + "\\hat{i}) \\space + (" + (e-b) + "\\hat{j}) \\space + (" + (f-c) + "\\hat{k}) \\]";
    tempoutput += "\\[ \\frac{ | (" + ans + "\\hat{i}) + (" + ans1 + "\\hat{j}) + (" + ans2 + "\\hat{k}) | }{" + ans3 + "} \\]";
    tempoutput += "\\[ \\frac{ \\sqrt{" + ans**2 + "+" + ans1**2 + "+" + ans2**2 + "}}{ " + ans3 + "} \\]";
    tempoutput += "\\[ \\frac{ \\sqrt{" + (ans**2+ans1**2+ans2**2) + "}}{" + ans3 + "} \\]";
    outputtria.innerHTML = tempoutput;
    renderMathInElement(outputtria);
}
else{
    tempoutput += "\\[Please \\space enter \\space all \\space fields \\]";
    outputtria.innerHTML = tempoutput;
    renderMathInElement(outputtria);
}
}


function vector_res(){
    var a=parseFloat(document.getElementById('abc').value);
    var b=parseFloat(document.getElementById('def').value);
    var c=parseFloat(document.getElementById('ang3').value);
    var resoutput = document.getElementById("vectorres1");
    var restemp = "";
    var res = Math.cos(c* Math.PI / 180).toFixed(3);
    var res1 = (2 * a * b * res);
    var res2 = eval(String((a * a) + (b * b)));
    var res3 = res2+res1;
    var d = nerdamer.sqrt(res3).toString();
    if((isNaN(a)) || (isNaN(b)) || (isNaN(c)) ){
        restemp += "\\[Please \\space enter \\space valid \\space input \\]";
        resoutput.innerHTML = restemp;
        renderMathInElement(resoutput);
    }
    else if(a>0 && b>0){
     restemp += "\\[R= \\sqrt{ a^2 + b^2 + 2*a*b*cosθ } \\]";
     restemp += "\\[R= \\sqrt{" + a + "^2+" + b + "^2+" + "2*" + a + "*" + b + "*" + "cos(" + c + ")} \\]";
     restemp += "\\[ \\sqrt{" + a + "^2+" + b + "^2+ (" +  res1 + ") } \\]";
     restemp += "\\[ \\sqrt{" + res3 + "} \\]";
     restemp += "\\[ Resultant \\space of \\space Vector = "  +
         eval(d).toFixed(3) +
         "\\]";
     resoutput.innerHTML = restemp;
     renderMathInElement(resoutput);
        }
        else{
            restemp += "\\[Magnitude \\space of \\space Vector \\space cannot \\space be \\space negative. \\space Please \\space enter \\space positive \\space value \\space only  \\]";
            resoutput.innerHTML = restemp;
            renderMathInElement(resoutput);
        }
 }


function equationplanesolve()
{
    var ax,ay,az,bx,by,bz,cx,cy,cz;
    ax=parseFloat(document.getElementById('va1').value);
    ay=parseFloat(document.getElementById('va2').value);
    az=parseFloat(document.getElementById('va3').value);
    bx=parseFloat(document.getElementById('vb1').value);
    by=parseFloat(document.getElementById('vb2').value);
    bz=parseFloat(document.getElementById('vb3').value);
    cx=parseFloat(document.getElementById('vc1').value);
    cy=parseFloat(document.getElementById('vc2').value);
    cz=parseFloat(document.getElementById('vc3').value);
    if(isNaN(ax) ||  isNaN(ay) || isNaN(az) || isNaN(bx) || isNaN(by) || isNaN(bz) || isNaN(cx) || isNaN(cy) || isNaN(cz)){
        document.getElementById('eqop').innerHTML="Please enter all fields";
    }else{
        var res1 = ((by-ay)*(cz-az))-((cy-ay)*(bz-az));
        var res2 = ((bz-az)*(cx-ax))-((cz-az)*(bx-ax));
        var res3 = ((bx-ax)*(cy-ay))-((cx-ax)*(by-ay));
        var res4 = -(res1*ax + res2*ay + res3*az);
        document.getElementById('eqop').innerHTML= 'Plane Equation : ' + res1 + 'x + ' + res2 + 'y + ' + res3 + 'z + ' + res4 + ' = 0';
    }
}

function disttwopntsolve(){
    var x1 =parseFloat(document.getElementById('valx1').value);
    var y1 =parseFloat(document.getElementById('valy1').value);
    var z1 =parseFloat(document.getElementById('valz1').value);
    var x2 =parseFloat(document.getElementById('valx2').value);
    var y2 =parseFloat(document.getElementById('valy2').value);
    var z2 =parseFloat(document.getElementById('valz2').value);
    var result = document.getElementById('dope');
    var result1 = document.getElementById('dope1');
    var print = "";
    var print1 = "";
    if(isNaN(x1) || isNaN(y1) || isNaN(z1) || isNaN(x2) || isNaN(y2) || isNaN(z2)){
        print = "\\[Please \\space enter \\space all \\space fields \\]";
    }else{
        var res = Math.sqrt(Math.pow(x2-x1,2) + Math.pow(y2-y1,2) + Math.pow(z2-z1,2) );
        print += "\\[Distance \\space between \\space two \\space points = \\space \\sqrt{(x2-x1)^2 + (y2-y1)^2 + (z2-z1)^2 } \\]";
    print1 += "\\[Distance \\space between \\space A(" + x1 + "," + y1 + "," + z1 + ") \\space and \\space B(" + x2 + "," + y2 + "," + z2 + ") = " + res + "\\]";
    }

    

    result.innerHTML = print;
    result1.innerHTML = print1;
    renderMathInElement(result);
    renderMathInElement(result1);
}

function solveicosa() {
    var a = document.getElementById("inputicoside").value;
    var resultvolt = document.getElementById("resultoficovolt");
    var resulttsa = document.getElementById("resultoficotsa");
    var volttemp = "";
    var tsatemp = "";
    if (a != "") {
        volttemp += "\\[Volume \\space of \\space Icosahedron \\space \\newline \\frac{5}{12}" + "( \\space 3 \\space + \\space \\sqrt{5})" + a + "\\times" + a + "\\times" + a + "\\ = " + eval(2.18169 * (a * a * a)).toFixed(2) + "\\]";
        resultvolt.innerHTML = volttemp;

        tsatemp += "\\[Surface \\space Area \\space of \\space Icosahedron \\space \\newline " + 5  + "\\times \\sqrt{3} " + "\\times" + a + "\\times" + a + "\\ = " + eval(String(8.66025 * (a * a))).toFixed(2) + "\\]";
        resulttsa.innerHTML = tsatemp;

        renderMathInElement(resultvolt);
        renderMathInElement(resulttsa);

    } else {
        resultvolt.innerHTML = "";
        resulttsa.innerHTML = "";
    }

}

function vectortetra(){
    var a,b,c,d,e,f,g,h,i;
     a = parseInt(document.getElementById("inp12").value);
     b = parseInt(document.getElementById("inp13").value);
     c = parseInt(document.getElementById("inp14").value);
     d = parseInt(document.getElementById("inp21").value);
     e = parseInt(document.getElementById("inp25").value);
     f = parseInt(document.getElementById("inp23").value);
     g = parseInt(document.getElementById("inp31").value);
     h = parseInt(document.getElementById("inp32").value);
     i = parseInt(document.getElementById("inp35").value);
    var output = document.getElementById("vectortetra1");
    var temp = "";
    if(!isNaN(a) && !isNaN(b) && !isNaN(c) && !isNaN(d) && !isNaN(e) && !isNaN(f) && !isNaN(g) && !isNaN(h) && !isNaN(i))
   {
    temp += "\\[ Volume \\space of \\space Tetrahedron \\space  =  \\space \\frac{1}{6} \\space [ \\overrightarrow{a} \\space \\overrightarrow{b} \\space \\overrightarrow{c} \\space ] \\]";
    temp += "\\[ Volume \\space of \\space Tetrahedron \\space  =  \\space \\frac{ \\overrightarrow{AB} . ( \\overrightarrow{AC} \\times \\overrightarrow{AD} )}{6} \\]";
    temp += "\\[ \\frac {a1(b2c3-b3c2)-a2(b1c3-b3c1)+a3(b1c2-b2c1)}{6} \\]";
    temp += "\\[ \\frac {" + a + "((" + e + "\\times" + i + ")-(" + h + "\\times" + f + "))-(" +  b + "((" + d + "\\times" + i + ")-(" + f + "\\times" + g + ")))+(" +  c + "((" + d + "\\times" + h + ")-(" + e + "\\times" + g + ")))}{6}  \\]";
    temp += "\\[ \\frac{" + a + "(" + (e * i) + "-(" + (h * f) + "))-(" +  b + "(" + (d * i) + "-(" + (f * g) + ")))+(" +  c + "(" + (d * h) + "-(" + (e * g) + ")))}{6}  \\]";
    temp += "\\[ \\frac{" + (a * ((e * i) - (h * f))) + "-(" +  (b * ((d * i) - (f * g))) + ")+(" +  (c * ((d * h) - (e * g))) + ")}{6}  \\]";
    temp += "\\[ \\frac{|" + ((a * ((e * i) - (h * f))) -  (b * ((d * i) - (f * g))) +  (c * ((d * h) - (e * g)))) + "|}{6}  \\]";
    temp += "\\[ Volume \\space of \\space Tetrahedron \\space  =  \\space " + ( Math.abs(((a * ((e * i) - (h * f))) -  (b * ((d * i) - (f * g))) +  (c * ((d * h) - (e * g)))))/6) + " \\space cubic \\space units \\]";
    output.innerHTML = temp;
    renderMathInElement(output);
}
else{
    temp += "\\[Please \\space enter \\space all \\space fields \\]";
    output.innerHTML = temp;
    renderMathInElement(output);
}
}

function coordinatearea(){
    var x1,y1,x2,y2,x3,y3;
    x1=parseFloat(document.getElementById('x1s').value);
    y1=parseFloat(document.getElementById('y1s').value);
    x2=parseFloat(document.getElementById('x2s').value);
    y2=parseFloat(document.getElementById('y2s').value);
    x3=parseFloat(document.getElementById('x3s').value);
    y3=parseFloat(document.getElementById('y3s').value);
    var areaop = document.getElementById("areaoutput");
    var explain = document.getElementById("formula1");
    var areatemp = "";
    var explaintemp = "";
   // explain.innerHTML = "\\[Area \\space  =\\space  \\frac{1}{2}| \\space x1(y2-y3) \\space + x2(y3-y1) + x3(y1-y2) | \\] ";
   // renderMathInElement(document.getElementById("formula"));
    var area= Math.abs(((x1*y2) - (x1*y3) + (x2*y3) - (x2*y1) + (x3*y1)- (x3*y2)));
    var area1 = (area/2);
    if((x1!="") && (y1!="") && (x2 !="") && (y2 != "") && (x3 != "") && (y3 !="")){
        explaintemp += "\\[Area \\space of \\space Triangle  = \\space  \\frac{1}{2} | \\space x1(y2-y3) \\space + x2(y3-y1) + x3(y1-y2) | \\] ";
        explaintemp += "\\[ \\frac{1}{2} | \\space (" + x1 + ") ((" + y2 + ") - (" + y3 + ")) + (" + x2 + ") ((" + y3 + ") - (" + y1 + ")) + (" + x3 + ") ((" + y1 + ") - (" + y2 + ")) | \\]";
        explaintemp += "\\[ \\frac{1}{2} | \\space (" + x1 + ") \\times (" + (y2-y3) + ") + (" + x2 + ") \\times (" + (y3-y1) + ") + (" + x3 + ") \\times (" + (y1-y2) + ") \\]";
        explaintemp += "\\[ \\frac{1}{2} | \\space (" + (x1*(y2-y3)) + ") + (" + (x2*(y3-y1)) + ") + (" + (x3*(y1-y2)) + ") | \\]";
        explaintemp += "\\[ \\frac{1}{2} | \\space (" + (area) + ") | \\]";
        explaintemp += "\\[ " + area1 + " \\]";
        areaop.innerHTML = explaintemp;
        renderMathInElement(areaoutput);
        areatemp += "\\[Area \\space = \\space " + area1 + "\\space sq. \\space units \\]";
        explain.innerHTML = areatemp;
        renderMathInElement(formula1);
    }

}
function centersolve(){
    var a,b,c,d,e,f;
     a = parseInt(document.getElementById("qcenter").value);
     b = parseInt(document.getElementById("acenter").value);
     c = parseInt(document.getElementById("bcenter").value);
     e = b/(a*2);
     f = c/(a*2);

     document.getElementById("centere").innerHTML = "\\[Center \\space Of \\space circle \\space -> \\newline";
     document.getElementById("centere").innerHTML +=" g\\space = \\frac {"+ b + "} { ( \\space "+ a + " * \\space "+ 2 +" ) } " + " \\space = "+ e +"\\newline"; 
     document.getElementById("centere").innerHTML +=" h\\space = \\frac {"+ c + "} { ( \\space "+ a + " * \\space "+ 2 +" ) } " + " \\space = "+ f +"\\newline \\] ";


    renderMathInElement(document.getElementById("centere"));
    document.getElementById("centerr").innerHTML = "\\[Center \\space Of \\space circle \\space = ( \\space -g \\space -h \\space )  \\newline";
    document.getElementById("centerr").innerHTML += " = \\space ( \\space " + -e +" \\space , \\space "+ -f + " \\space ) \\space \\newline \\] "

    renderMathInElement(document.getElementById("centerr"));

}

function nodiagnolfind(){
    let n= parseInt(document.getElementById('nodiagnol').value)
    let ans = n*(n-3)/2
    document.getElementById("nodiagnolans").innerHTML = "The number of diagnols are "+ans
}

function obliquetri(){
    var a,b,c;
    a=parseFloat(document.getElementById('inputsideoba').value);
    b=parseFloat(document.getElementById('inputsideobb').value);
    c=parseFloat(document.getElementById('inputsideobc').value);
    var displayop = document.getElementById("obliop");
    var displayop1 = document.getElementById("obliop1");
    var explaintemp = "";
    var explaintemp1 = "";
    if((a*a == b*b + c*c) || (b*b == a*a + c*c) || (c*c == a*a + b*b)){
        explaintemp += "It will not form an oblique triangle."
        displayop.innerHTML = explaintemp;
        renderMathInElement(obliop);
    }
    else{
        explaintemp1 += "It will form an oblique triangle";
        displayop1.innerHTML = explaintemp1;
        renderMathInElement(obliop1);
    }
}
function vectorquad(){
    var a,b,c,d,e,f;
     a = parseInt(document.getElementById("inp51").value);
     b = parseInt(document.getElementById("inp52").value);
     c = parseInt(document.getElementById("inp53").value);
     d = parseInt(document.getElementById("inp61").value);
     e = parseInt(document.getElementById("inp62").value);
     f = parseInt(document.getElementById("inp63").value);
    var output = document.getElementById("vectorquad1");
    var temp = "";
    var mul = (b*f); var mul1 = (c*e); var mul2 = (a*f); var mul3 = (c*d); var mul4 = (a*e); var mul5 =(b*d); var ans = (mul-mul1); var ans1= -(mul2-mul3); var ans2= (mul4-mul5);
    if(!isNaN(a) && !isNaN(b) && !isNaN(c) && !isNaN(d) && !isNaN(e) && !isNaN(f))
   {
    temp += "\\[ Area \\space of \\space Quadrilateral \\space  =  \\space \\frac{1}{2} | \\overrightarrow{AC} \\times \\overrightarrow{BD} | \\]";
    temp +=  "\\[  | \\overrightarrow{AC} \\times \\overrightarrow{BD} | \\space = \\space \\hat{i} \\space (" + mul + "- \\space (" + mul1 + ")\\space) \\space - \\space \\hat{j} (" + mul2 + "- \\space (" + mul3 + ")\\space)\\space + \\space \\hat{k} (" + mul4 + "- \\space (" + mul5 + ") \\space )    \\]";
    temp += "\\[ | \\overrightarrow{AC} \\times \\overrightarrow{BD} | \\space = \\space " + ans + "\\hat{i} \\space + \\space ( " + ans1 + "\\hat{j} ) \\space + \\space ( " + ans2 + "\\hat{k} ) \\]";
    temp += "\\[ | \\overrightarrow{AC} \\times \\overrightarrow{BD} | \\space = \\space \\sqrt{ (" + ans + ")^{2} + (" + ans1 + ")^{2} + (" + ans2 + ")^{2}} \\space = \\space \\sqrt{"+ (ans)**2 + "+" + (ans1)**2 + "+" + (ans2)**2 + "} \\space = \\space \\sqrt{" + ((ans)**2+(ans1)**2+(ans2)**2) + "}  \\]";
    temp += "\\[  Area \\space of \\space Quadrilateral \\space ABCD \\space  =  \\space \\frac{1}{2} \\sqrt{" +  ((ans)**2+(ans1)**2+(ans2)**2) + "} \\space = \\space \\sqrt{" +   (((ans)**2+(ans1)**2+(ans2)**2))/4 + "} \\space square units \\]";
    output.innerHTML = temp;
    renderMathInElement(output);
}
else{
    temp += "\\[Please \\space enter \\space all \\space fields \\]";
    output.innerHTML = temp;
    renderMathInElement(output);
}
}

function vectortria(){
    var a,b,c,d,e,f,g,h,i;
     a = parseInt(document.getElementById("inp90").value);
     b = parseInt(document.getElementById("inp98").value);
     c = parseInt(document.getElementById("inp97").value);
     d = parseInt(document.getElementById("inp96").value);
     e = parseInt(document.getElementById("inp95").value);
     f = parseInt(document.getElementById("inp94").value);
     g =  parseInt(document.getElementById("inp93").value);
     h = parseInt(document.getElementById("inp92").value);
     i = parseInt(document.getElementById("inp91").value);
    var outputtria = document.getElementById("vectortria1");
    var tempoutput = "";
    var ans = (((e-b)*(i-c))-((f-c)*(h-b))); var ans1= -(((d-a)*(i-c))-((f-c)*(g-a)) ); var ans2= ( ((d-a)*(h-b))-((e-b)*(g-a)));
    if(!isNaN(a) && !isNaN(b) && !isNaN(c) && !isNaN(d) && !isNaN(e) && !isNaN(f) && !isNaN(g) && !isNaN(h) && !isNaN(i))
   {
    tempoutput += "\\[ Area \\space of \\space Triangle \\space  =  \\space \\frac{1}{2} | \\overrightarrow{AB} \\times \\overrightarrow{AC} | \\]";
    tempoutput += "\\[ \\overrightarrow{AB}\\space = \\space \\overrightarrow{Y} \\space - \\space \\overrightarrow{X} \\space = \\space (" + (d-a) + "\\hat{i}) \\space + (" + (e-b) + "\\hat{j}) \\space + (" + (f-c) + "\\hat{k}) \\]";
    tempoutput += "\\[ \\overrightarrow{AC}\\space = \\space \\overrightarrow{Z} \\space - \\space \\overrightarrow{X} \\space = \\space (" + (g-a) + "\\hat{i}) \\space + (" + (h-b) + "\\hat{j}) \\space + (" + (i-c) + "\\hat{k}) \\]";
    tempoutput +=  "\\[   \\overrightarrow{AB} \\times \\overrightarrow{AC}  \\space = \\space \\hat{i} \\space (" + ((e-b)*(i-c)) + "- \\space (" + ((f-c)*(h-b)) + ")\\space) \\space - \\space \\hat{j} (" + ((d-a)*(i-c)) + "- \\space (" + ((f-c)*(g-a)) + ")\\space)\\space + \\space \\hat{k} (" + ((d-a)*(h-b)) + "- \\space (" + ((e-b)*(g-a)) + ") \\space )    \\]";
    tempoutput += "\\[ | \\overrightarrow{AB} \\times \\overrightarrow{AC} | \\space = \\space " + ans + "\\hat{i} \\space + \\space ( " + ans1 + "\\hat{j} ) \\space + \\space ( " + ans2 + "\\hat{k} ) \\]";
    tempoutput += "\\[ | \\overrightarrow{AB} \\times \\overrightarrow{AC} | \\space = \\space \\sqrt{ (" + ans + ")^{2} + (" + ans1 + ")^{2} + (" + ans2 + ")^{2}} \\space = \\space \\sqrt{"+ (ans)**2 + "+" + (ans1)**2 + "+" + (ans2)**2 + "} \\space = \\space \\sqrt{" + ((ans)**2+(ans1)**2+(ans2)**2) + "}  \\]";
    tempoutput += "\\[  Area \\space of \\space Triangle \\space ABC \\space  =  \\space \\frac{1}{2} \\sqrt{" +  ((ans)**2+(ans1)**2+(ans2)**2) + "} \\space = \\space \\sqrt{" +   (((ans)**2+(ans1)**2+(ans2)**2))/4 + "} \\space  \\]";
    outputtria.innerHTML = tempoutput;
    renderMathInElement(outputtria);
}
else{
    tempoutput += "\\[Please \\space enter \\space all \\space fields \\]";
    outputtria.innerHTML = tempoutput;
    renderMathInElement(outputtria);
}
}

function solvetwoplane()
{
    var a,b,c,d,a1,b1,c1,d1;
    a=parseFloat(document.getElementById('da1').value);
    b=parseFloat(document.getElementById('db1').value);
    c=parseFloat(document.getElementById('dc1').value);
    d=parseFloat(document.getElementById('dd1').value);
    a1=parseFloat(document.getElementById('da2').value);
    b1=parseFloat(document.getElementById('db2').value);
    c1=parseFloat(document.getElementById('dc2').value);
    d1=parseFloat(document.getElementById('dd2').value);
    /*var explain = document.getElementById("angleplane");
    explain.innerHTML = "\\[Formula: \\space cos\\alpha = \\frac{|A1.A2  + B1.B2 + C1.C2 |}{\\sqrt{A1^2+B1^2+C1^2} \\times \\sqrt{A2^2+B2^2+C2^2}} \\] ";
    renderMathInElement(document.getElementById("angleplane"));*/
    if(isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d) || isNaN(a1) || isNaN(b1) || isNaN(c1) || isNaN(d1)){
        document.getElementById('dplane').innerHTML= "Please enter all fields";
    }else{
        if((a==a1) && (b==b1) && (c==c1)){
            var res = Math.abs(d1-d)/Math.sqrt(a*a + b*b + c*c);
            document.getElementById('dplane').innerHTML= 'Distance between plane 1 and 2 is '+ res.toFixed(2) ;
        }
        else{
            document.getElementById('dplane').innerHTML= 'Planes are not parallel, so distance is 0' ;
        }
    }
    
}

function threedissolve(){
    var x1 =parseFloat(document.getElementById('3dinputx1').value);
    var x2 =parseFloat(document.getElementById('3dinputx2').value);
    var y1 =parseFloat(document.getElementById('3dinputy1').value);
    var y2 =parseFloat(document.getElementById('3dinputy2').value);
    var z1 =parseFloat(document.getElementById('3dinputz1').value);
    var z2 =parseFloat(document.getElementById('3dinputz2').value);
    var dis = document.getElementById('opdis');
    var dis1 = document.getElementById('opdis1');
    var displaytemp = "";
    var displaytemp1 = "";
    if(isNaN(x1) || isNaN(x2) || isNaN(y1) || isNaN(y2) || isNaN(z1) || isNaN(z2)){
        displaytemp += "\\[Please \\space enter \\space all \\space fields \\]";
        displaytemp1 = "";
        dis.innerHTML = displaytemp;
        dis1.innerHTML = displaytemp1;
        renderMathInElement(dis);
        renderMathInElement(dis1);
    }else{
        var res = Math.sqrt(Math.pow(x2-x1,2) + Math.pow(y2-y1,2) + Math.pow(z2-z1,2) );
        displaytemp += "\\[Formula = \\space \\sqrt{(x2-x1)^2 + (y2-y1)^2 + (z2-z1)^2 } \\]";
        displaytemp1 += "\\[Distance \\space between \\space A(" + x1 + "," + y1 + "," + z1 + ") \\space and \\space B(" + x2 + "," + y2 + "," + z2 + ") = "+ "\\sqrt{(" + x2 + "-" + x1 + ")^2 + (" + y2 + "-" + y1 + ")^2 + (" + z2 + "-" + z1 + ")^2}" + " = "  + res.toFixed(2) + "\\]";
        dis.innerHTML = displaytemp;
        dis1.innerHTML = displaytemp1;
        renderMathInElement(dis);
        renderMathInElement(dis1);
    }
}

//-----------------------------------------------------
//shapes calculator
function solveperisq() {
    var val = document.getElementById("inputsqside").value;
    if (val == "" || val < 0) {
        document.getElementById("resultofperisq").innerHTML = "";
    } else {
        var sol = eval(String(4) + "*" + String(val));
        var temp = "\\[ 4 \\times ( " + val + " ) = " + sol + "\\]";
        temp +=
            "\\[Perimeter \\space of \\space Square \\space is \\space " +
            sol +
            "\\]";
        document.getElementById("resultofperisq").innerHTML = temp;
    }
    renderMathInElement(document.getElementById("resultofperisq"));
}

function solvediagonalsq() {
    var val = document.getElementById("inputsqside").value;
    if (val == "" || val < 0) {
        document.getElementById("resultofdiagonalsq").innerHTML = "";
    } else {
        var sol = eval(1.414 + "*" + String(val));
        var temp = "\\[ \\sqrt{2} ( " + val + " ) = " + sol + "\\]";
        temp +=
            "\\[Diagonal \\space of \\space Square \\space is \\space " + sol + "\\]";
        document.getElementById("resultofdiagonalsq").innerHTML = temp;
    }
    renderMathInElement(document.getElementById("resultofdiagonalsq"));
}

function solveareasq() {
    var val = document.getElementById("inputsqside").value;
    if (val == "") {
        document.getElementById("resultofareasq").innerHTML = "";
    } else if (val < 0) {
        document.getElementById("resultofareasq").innerHTML = "Enter positive values only";
    } else {
        var sol = eval(String(val) + "*" + String(val));
        var temp = "\\[" + val + " \\times " + val + " = " + sol + "\\]";
        temp +=
            "\\[Area \\space of \\space Square \\space is \\space " + sol + "\\]";
        document.getElementById("resultofareasq").innerHTML = temp;
    }
    renderMathInElement(document.getElementById("resultofareasq"));
}
function solvetetra() {
    var a = document.getElementById("inputsidetetra").value;
    var voloutput = document.getElementById("resultoftetravol");
    var heioutput = document.getElementById("resultoftetrahei");
    var croutput = document.getElementById("resultoftetracr");
    var inroutput = document.getElementById("resultoftetrainr");
    var areaoutput = document.getElementById("resultoftetraarea");
    var voltemp = "";
    var heitemp = "";
    var crtemp = "";
    var inrtemp = "";
    var areatemp = "";
    if (a != "") {
        voltemp += "\\[Volume \\space of \\space Tetrahedron \\space \\newline \\frac{1}{6 \\sqrt{2}} \\times" + a + "\\times" + a + "\\times" + a + "\\ = " + eval(String(0.11785113 * a * a * a)).toFixed(2) + "\\]";
        voloutput.innerHTML = voltemp;
        heitemp += "\\[Height \\space of \\space Tetrahedron \\space \\newline \\frac{\\sqrt{2}}{\\sqrt{3}} \\times" + a + "\\ = " + eval(String(0.81649658 * a )).toFixed(2) + "\\]";
        heioutput.innerHTML = heitemp;
        crtemp += "\\[Circumradius \\space of \\space Tetrahedron \\space \\newline \\frac{\\sqrt{6}}{4} \\times" + a + "\\ = " + eval(String(0.61237244 * a)).toFixed(2) + "\\]";
        croutput.innerHTML = crtemp;
        inrtemp += "\\[Inradius \\space of \\space Tetrahedron \\space \\newline \\frac{1}{\\sqrt{24}} \\times" + a + "\\ = " + eval(String(0.20412415 * a )).toFixed(2) + "\\]";
        inroutput.innerHTML = inrtemp;
        areatemp += "\\[Surface \\space Area \\space of \\space Tetrahedron \\space \\newline \\sqrt{3} \\times" + a + "\\times" + a + "\\ = " + eval(String(1.73205081 * a * a)).toFixed(2) + "\\]";
        areaoutput.innerHTML = areatemp;
        renderMathInElement(areaoutput);
        renderMathInElement(voloutput);
        renderMathInElement(croutput);
        renderMathInElement(inroutput);
        renderMathInElement(heioutput);
    } else {
        areaoutput.innerHTML = "";
        voloutput.innerHTML = "";
        croutput.innerHTML = "";
        inroutput.innerHTML = "";
        heioutput.innerHTML = "";
    }
}    

function pythtriple(){
    var num = parseInt(document.getElementById("nom").value)
    if (num < 0){
        document.getElementById("answ").innerHTML= "A pythagorean triplet is defined only for positive integers. Negative numbers can't be sides of a right angled triangle, therefore, aren't used in Pythagorean triplets";
    }else{
    if (num%2==0){
        var nums = parseInt(num)
        var les = parseInt((num/2)**2 -1)
        var more = parseInt((num/2)**2 +1)
        document.getElementById("answ1").innerHTML = "\\[ The \\space number \\space entered \\space is \\space Even \\newline The \\space first \\space triplet \\space will \\space be \\space "+num+"\\]";
        document.getElementById("answ2").innerHTML = "\\[The \\space second \\space triplet \\space will \\space be \\space (\\frac{"+num+"}{2})^2 - 1 = "+les+"\\]";
        document.getElementById("answ3").innerHTML = "\\[The \\space third \\space triplet \\space will \\space be \\space (\\frac{"+num+"}{2})^2 + 1  = "+more+"\\]";
        renderMathInElement(document.getElementById("answ1"));
        renderMathInElement(document.getElementById("answ2"));
        renderMathInElement(document.getElementById("answ3"));
        document.getElementById("answ4").innerHTML = "The triplets are (" + nums + " ," + les + ", " + more+")";
    } else{
        var nums = parseInt(num)
        var les1 =((num*num)/2) -0.5;
        var les = parseInt(les1)
        var more1 = ((num*num)/2) +0.5;
        var more = parseInt(more1)
        document.getElementById("answ1").innerHTML = "\\[ The \\space number \\space entered \\space is \\space Odd \\newline The \\space first \\space triplet \\space will \\space be \\space "+num+"\\]";
        document.getElementById("answ2").innerHTML = "\\[The \\space second \\space triplet \\space will \\space be \\space \\frac{"+num+"^2}{2} - \\frac{1}{2} = "+les+"\\]";
        document.getElementById("answ3").innerHTML = "\\[The \\space third \\space triplet \\space will \\space be \\space \\frac{"+num+"^2}{2} + \\frac{1}{2} = "+more+"\\]";
        renderMathInElement(document.getElementById("answ1"));
        renderMathInElement(document.getElementById("answ2"));
        renderMathInElement(document.getElementById("answ3"));
        document.getElementById("answ4").innerHTML = "The triplets are (" + nums + " ," + les + ", " + more+")";

    }
    }
}

function equilateraltrianglearea() {
    var side = document.getElementById("equilateraltriangleside").value;
    var areaoutput = document.getElementById("equilateraltrianglearea");
    var perimeteroutput = document.getElementById("equilateraltriangleperimeter");
    var areatemp = "";
    var perimetertemp = "";
    if (side != "") {
        perimetertemp += "\\[P=3 \\times " + side + "\\]";
        perimetertemp +=
            "\\[Perimeter \\space of \\space Triangle \\space is \\space" +
            eval(String(3 * side)) +
            "\\]";
        perimeteroutput.innerHTML = perimetertemp;

        areatemp += "\\[A = \\frac{\\sqrt{3}}{4} " + side + "^2 \\]";
        areatemp += "\\[A = \\frac{1.73}{4} (" + eval(String(side * side)) + ")\\]";
        areatemp += "\\[A=0.433 \\times " + eval(String(side * side)) + " \\]";
        var a = eval(String("0.433*" + String(side * side)));
        areatemp += "\\[A=" + a + " \\]";
        areatemp +=
            "\\[Area \\space of \\space Triangle \\space is \\space " + a + "\\]";
        areaoutput.innerHTML = areatemp;
        renderMathInElement(areaoutput);
        renderMathInElement(perimeteroutput);
    } else {
        areaoutput.innerHTML = "";
        perimeteroutput.innerHTML = "";
    }
}

// created function for right angle triangle
function solverightangletriangle() {
    var base = document.getElementById("inputbaserighttriangle").value;
    var height = document.getElementById("inputheightrighttriangle").value;
    var areaoutput = document.getElementById("resultofarearat");
    var perimeteroutput = document.getElementById("resultofperirat");
    var hypooutput = document.getElementById("resultofhyporat");
    var areatemp = "";
    var perimetertemp = "";
    var hypotemp = "";
    if (base != "" && height != "") {
        var base2 = base * base;
        var height2 = height * height;
        var add2 = eval(String(base2 + height2));
        var add2sqrt = nerdamer.sqrt(add2).toString();

        hypotemp += "\\[h=\\sqrt{" + base + "^2" + "+" + height + "^2" + "}\\]";
        hypotemp += "\\[h= \\sqrt{" + base2 + "+" + height2 + "}\\]";
        hypotemp += "\\[h= \\sqrt{" + add2 + "}\\]";
        hypotemp += "\\[h=" + eval(add2sqrt).toFixed(3) + "\\]";
        hypotemp += "\\[Hypotenuse \\space of \\space Triangle \\space is \\space" +
            eval(add2sqrt).toFixed(3) + "\\]";
        hypooutput.innerHTML = hypotemp;

        var hypovar = eval(add2sqrt).toFixed(3);

        perimetertemp += "\\[P=" + base + "+" + height + "+" + hypovar + "\\]";
        perimetertemp +=
            "\\[Perimeter \\space of \\space Triangle \\space is \\space" +
            eval(String(base) + "+" + String(height) + "+" + String(hypovar)) +
            "\\]";
        perimeteroutput.innerHTML = perimetertemp;

        areatemp += "\\[A = \\frac{1}{2} \\times " + base + "\\times" + height + "\\]";
        areatemp += "\\[A = \\frac{1}{2} (" + eval(String(base * height)) + ")\\]";
        var a = eval(String("0.5*" + String(base * height)));
        areatemp += "\\[A=" + a + " \\]";
        areatemp +=
            "\\[Area \\space of \\space Triangle \\space is \\space " + a + "\\]";
        areaoutput.innerHTML = areatemp;
        renderMathInElement(areaoutput);
        renderMathInElement(perimeteroutput);
        renderMathInElement(hypooutput);

    } else {
        areaoutput.innerHTML = "";
        perimeteroutput.innerHTML = "";
        hypooutput.innerHTML = "";
    }
}

// created function for scalene triangle
function solvescalenetriangle() {
    var sidea = document.getElementById("inputfirstside").value;
    var sideb = document.getElementById("inputsecondside").value;
    var sidec = document.getElementById("inputthirdside").value;
    var areaoutput = document.getElementById("resultofareast");
    var perimeteroutput = document.getElementById("resultofperist");
    var semiperioutput = document.getElementById("resultofsemiperist");
    var areatemp = "";
    var perimetertemp = "";
    var semiperitemp = "";
    if (sidea != "" && sideb != "" && sidec != "") {

        perimetertemp += "\\[P=" + sidea + "+" + sideb + "+" + sidec + "\\]";
        perimetertemp +=
            "\\[Perimeter \\space of \\space Triangle \\space is \\space" +
            eval(String(sidea) + "+" + String(sideb) + "+" + String(sidec)) +
            "\\]";
        perimeteroutput.innerHTML = perimetertemp;

        semiperitemp += "\\[P=\\frac{" + sidea + "+" + sideb + "+" + sidec + "}{2}" + "\\]";
        semiperitemp += "\\[P=\\frac{" + eval(String(sidea) + "+" + String(sideb) + "+" + String(sidec)) + "}{2} \\]";
        var sidesum = eval(String(sidea) + "+" + String(sideb) + "+" + String(sidec));

        semiperitemp += "\\[Semi-perimeter \\space of \\space Triangle \\space is \\space" +
            eval(String("0.5*" + String(sidesum))) +
            "\\]";
        semiperioutput.innerHTML = semiperitemp;


        var semiperimeter = eval(String("0.5*" + String(sidesum)));
        var a2 = semiperimeter - sidea;
        var b2 = semiperimeter - sideb;
        var c2 = semiperimeter - sidec;
        var ans = semiperimeter * a2 * b2 * c2;
        var anssqrt = nerdamer.sqrt(ans).toString();
        anssqrt = eval(anssqrt).toFixed(3);

        areatemp += "\\[A = \\sqrt{ " + semiperimeter + "\\times (" + semiperimeter + "-" + sidea +
            ") \\times (" + semiperimeter + "-" + sideb + ") \\times (" + semiperimeter + "-" + sidec + ")}" + "\\]";
        areatemp += "\\[A = \\sqrt{ " + semiperimeter + "\\times" + a2 + "\\times" + b2 + "\\times" + c2 + "}\\]";
        areatemp += "\\[A = \\sqrt{ " + semiperimeter + "\\times" + eval(String(a2 * b2 * c2)) + "}\\]";
        areatemp += "\\[A = \\sqrt{ " + ans + " }\\]";
        areatemp += "\\[A=" + anssqrt + " \\]";
        areatemp +=
            "\\[Area \\space of \\space Triangle \\space is \\space " + anssqrt + "\\]";
        areaoutput.innerHTML = areatemp;

        renderMathInElement(areaoutput);
        renderMathInElement(perimeteroutput);
        renderMathInElement(semiperioutput);

    } else {
        areaoutput.innerHTML = "";
        perimeteroutput.innerHTML = "";
        semiperioutput.innerHTML = "";
    }
}

// created function for isosceles triangle
function isoscelestrianglearea() {
    var eqside = document.getElementById("inputeqitside").value;
    var side = document.getElementById("inputitside").value;
    var height = Math.sqrt((parseInt(eqside) * parseInt(eqside)) - ((parseInt(side) * parseInt(side)) / 4));
    var perimeter = (2 * parseInt(eqside) + parseInt(side));
    var area = 0.5 * side * height;
    if (side != "" && eqside != "") {
        document.getElementById('resultofheightit1').innerHTML = "\\[Height \\space of \\space the \\space Isosceles \\space triangle \\space is \\]";
        renderMathInElement(document.getElementById('resultofheightit1'));
        document.getElementById('resultofheightit2').innerHTML = "\\[\\sqrt{" + eval(eqside * eqside) + " \\space - \\frac{" + eval(side * side) + "}{4}} =" + height.toFixed(2) + "\\]";
        renderMathInElement(document.getElementById('resultofheightit2'));

        document.getElementById('resultofareait1').innerHTML = "\\[Area \\space of \\space the \\space Isosceles \\space triangle \\space is \\]";
        renderMathInElement(document.getElementById('resultofareait1'));
        document.getElementById('resultofareait2').innerHTML = "\\[\\frac{1}{2} \\times" + side + "\\times " + height.toFixed(2) + " = " + area.toFixed(2) + "\\]";
        renderMathInElement(document.getElementById('resultofareait2'));

        document.getElementById('resultofperiit1').innerHTML = "\\[Perimeter \\space of \\space the \\space Isosceles \\space triangle \\space is \\]";
        renderMathInElement(document.getElementById('resultofperiit1'));
        document.getElementById('resultofperiit2').innerHTML = "\\[2*(" + eqside + ") + " + side + "= " + perimeter + "\\]";
        renderMathInElement(document.getElementById('resultofperiit2'));
    }

}

function isoscelesrightsolve() {
    var side = document.getElementById("isoside").value;
    var height=0.5*side;
    var base=0.707*side;
    var peri=2.41*side;
    var area= 0.25*side*side;
    if (side != "" ) {
        document.getElementById('resofisoarea1').innerHTML = "\\[Area \\space of \\space Isosceles \\space right \\space triangle \\space is \\]";
        renderMathInElement(document.getElementById('resofisoarea1'));
        document.getElementById('resofisoarea2').innerHTML = "\\[ \\frac{" + side + "\\times" + side + "}{4} =" + area + "\\]";
        renderMathInElement(document.getElementById('resofisoarea2'));
        document.getElementById('resofisoperi1').innerHTML = "\\[Perimeter \\space is \\]";
        renderMathInElement(document.getElementById('resofisoperi1'));
        document.getElementById('resofisoperi2').innerHTML = "\\[ (1 \\space + \\space \\sqrt{2})" + "\\times"+ side + "=" + peri + "\\]";
        renderMathInElement(document.getElementById('resofisoperi2'));
        document.getElementById('resofisoheight1').innerHTML = "\\[Height \\space is \\]";
        renderMathInElement(document.getElementById('resofisoheight1'));
        document.getElementById('resofisoheight2').innerHTML = "\\[ \\frac{1}{2} " + "\\times" + side + "=" + height + "\\]";
        renderMathInElement(document.getElementById('resofisoheight2'));
        document.getElementById('resofisobase1').innerHTML = "\\[Base \\space is \\]";
        renderMathInElement(document.getElementById('resofisobase1'));
        document.getElementById('resofisobase2').innerHTML = "\\[ \\frac{1}{\\sqrt{2}} " + "\\times" + side + "=" + base + "\\]";
        renderMathInElement(document.getElementById('resofisobase2'));
    
    }

}

function solvestriangle(){
    var s1=  document.getElementById("inputfirsts1").value;
    var s2 =  document.getElementById("inputseconds2").value;
    var angle =  document.getElementById("inputangledeg").value;
    console.log(math.sin(angle));console.log(math.cos(angle));
    var area = 0.5 * s1 * s2 * math.sin(angle);
    var height = s2 * math.sin(angle);
    var peri = parseInt(s1) + parseInt(s2) + math.sqrt(s1**2 + s2**2 - (2 * s1 * s2 * math.cos(angle)));
    
    if (height <=0 && area <=0 && s1 != "" && s2 != "" && angle != ""){
        document.getElementById("resultofper").innerHTML = ""
        document.getElementById("resultofarea").innerHTML = "Please enter correct angle"
        document.getElementById("resultofheight").innerHTML = ""
        return;
    }
    if (s1 != "" && s2 != "" && angle != ""){
        document.getElementById("resultofper").innerHTML = "The Perimeter of the triangle (P) = "+ peri.toFixed(3)
        document.getElementById("resultofarea").innerHTML = "The Area of the triangle  (S) = " +area.toFixed(3)
        document.getElementById("resultofheight").innerHTML = "The Height of the traingle (h) = "+height.toFixed(3)
    }
}

function findeq(){
    var a1 = parseInt(document.getElementById("ther").value)
    var h1 = parseInt(document.getElementById("theh").value)
    document.getElementById("xeqn").innerHTML = "x &nbsp  =&nbsp; "+ a1+"√u/"+Math.sqrt(h1)+" cosv "
    document.getElementById("yeqn").innerHTML = "y &nbsp;  =&nbsp; "+ a1+" √u/ "+Math.sqrt(h1)+" sinv "
    document.getElementById("zeqn").innerHTML = "z &nbsp;  =&nbsp;  u"
}

function volf(){
    var a2 = parseInt(document.getElementById("ther1").value);
    var h2 = parseInt(document.getElementById("theh1").value);
    var ans = document.getElementById("volf");
    var temp = "";
    var ans1 = 0.5*3.14*a2*a2*h2;
    if(!isNaN(a2) && !isNaN(h2)){
    temp += "\\[\\frac{1}{2} \\times 3.14 \\times " + a2 + "^{2} \\times " + h2 + " \\]";
    temp += "\\[\\frac{1}{2} \\times " + (3.14*a2*a2*h2) + " \\]";
    temp += "\\[Volume \\space of \\space Paraboloid \\space is \\space " + ans1 + "\\]";
    ans.innerHTML = temp;
    renderMathInElement(ans);
    }
    else{
        temp += "\\[Please \\space enter \\space all \\space input \\]";
    ans.innerHTML = temp;
    renderMathInElement(ans);
    }
}

function solveparallelogramcal(){
    var base = document.getElementById("inputbasea").value;
    var side = document.getElementById("inputsidebpar").value;
    var angle = document.getElementById("inputanglepar").value;
    var output1 = document.getElementById("resultofareapar");
    var output2 = document.getElementById("resultofperipar");
    var out1temp = "";
    var out2temp = "";

    var area = base * side * Math.sin(angle);
    var peri = 2 * (parseInt(side) + parseInt(base));

    if (area <=0 && base != "" && side != "" && angle != ""){
        output1.innerHTML = ""
        output2.innerHTML = "Please enter correct angle"
        return;
    }
    if (base != "" && side != "" && angle != ""){
        out1temp += "\\[ Area \\space of \\space the \\space Parallelogram (S) \\space is  \\]";
        out1temp += "\\[  base \\times side \\times Sin θ \\]"
        out1temp += "\\[ " + base + "\\times" + side + "\\times Sin (" + angle + ") \\]";
        out1temp += "\\[" + (base*side) + "\\times" + (Math.sin(angle).toFixed(3)) + " \\]";
        out1temp += "\\[ " + area.toFixed(3) + " \\]"
        output1.innerHTML = out1temp;
        out2temp += "\\[ Perimeter \\space of \\space the \\space Parallelogram (S) \\space is  \\]";
        out2temp += "\\[ 2 \\times \\space ( \\space base \\space + \\space side \\space ) \\]";
        out2temp += "\\[ 2 \\times \\space ( " + parseInt(base) + "+" + parseInt(side) + ") \\]";
        out2temp += "\\[ 2 \\times \\space " + (parseInt(base)+parseInt(side)) + " \\]";
        out2temp += "\\[ " + peri.toFixed(3) + " \\]"
        output2.innerHTML = out2temp;
        renderMathInElement(output1);
        renderMathInElement(output2);

    }
}

function solveparallelogram() {
    var base = document.getElementById("inputbase").value;
    var height = document.getElementById("inputheight").value;
    var side = document.getElementById("inputsidep").value;
    var area = document.getElementById("resultofareap");
    var peri1 = document.getElementById("resultofperip1");
    var peri2 = document.getElementById("resultofperip2");
    var heightperi = document.getElementById("resultofheightp");
    area.innerHTML = "";
    peri1.innerHTML = "";
    peri2.innerHTML = "";
    heightperi.innerHTML = "";
    var a = base * height;
    var p = 2 * (parseInt(base) + parseInt(side));
    var h = a / base;
    console.log(a);
    console.log(p);
    console.log(h);
    if (base != "" && height != "") {
        document.getElementById("resultofareap").innerHTML = "\\[Area \\space of \\space  parallelogram \\space \\space" + base + "\\times" + height + "\\ = " + a + "\\]";
        renderMathInElement(document.getElementById("resultofareap"));
    }
    if (side != "" && base != "") {
        document.getElementById("resultofperip1").innerHTML = "\\[Perimeter \\space of \\space parallelogram\\]";
        renderMathInElement(document.getElementById("resultofperip1"));
        document.getElementById("resultofperip2").innerHTML = "\\[2 \\times (" + base + "+" + side + ")\\ = " + p + " \\]";
        renderMathInElement(document.getElementById("resultofperip2"));
    }
    if (base != "" && a != "") {
        document.getElementById("resultofheightp").innerHTML = "\\[Height \\space of \\space parallelogram  \\space \\frac{" + a + "}{" + base + "} = " + h + " \\]";
        renderMathInElement(document.getElementById("resultofheightp"));
    }

}

//created function for Trapezium
function solvetrapezium(){
    var a = document.getElementById("inputparallel1").value;
    var b = document.getElementById("inputparallel2").value;
    var c = document.getElementById("inputnparallel1").value;
    var d = document.getElementById("inputnparallel2").value;

    var ts=Math.abs(b-a);
    var s=(ts+parseInt(c)+parseInt(d))/2;
    var value = s*(s-ts)*(s-parseInt(c))*(s-parseInt(d));
    var areatri=Math.sqrt(value);
    var height= (2*areatri)/ts;
    var heighttemp="";
    document.getElementById("resultofperitrap1").innerHTML="";
    document.getElementById("resultofperitrap2").innerHTML="";
    document.getElementById("resultofareatrap1").innerHTML="";
    document.getElementById("resultofareatrap2").innerHTML="";
    if (value<0 || value == 0){
        document.getElementById("resultofareatrap1").innerHTML = "Please enter valid side values";
        document.getElementById("heighttrap").innerHTML="";
        document.getElementById("resultofperitrap1").innerHTML="";
        document.getElementById("resultofperitrap2").innerHTML="";
        document.getElementById("resultofareatrap2").innerHTML="";
        return;
    
    }else if (a=="" || b=="" || c=="" || d==""){
        document.getElementById("resultofareatrap1").innerHTML = "Enter all sides to calculate Height, Area and perimeter";

    } else if(a!="" && b!="" && c!="" && d!=""){
        heighttemp += "\\[Height=?\\]";
        heighttemp += "\\[Base\\space of\\space triangle = b-a\\]";
        heighttemp += "\\[Base\\space of\\space triangle = " + ts + "\\]";
        heighttemp += "\\[Area\\space of\\space triangle = \\sqrt{s(s-base)(s-c)(s-d)} \\]";
        heighttemp += "\\[A=\\sqrt{"+s+"("+s+"-"+ts+")("+s+"-"+c+")("+s+"-"+d+")"+"}\\]";
        heighttemp += "\\[A = " + areatri+"\\]";
        heighttemp += "\\[Height= \\frac{2*Area\\space of\\space triangle}{base\\space of\\space triangle}\\]";
        heighttemp += "\\[Height= " +height+"\\]";
        document.getElementById("heighttrap").innerHTML=heighttemp;
        renderMathInElement(document.getElementById("heighttrap"));
        var area= (0.5 * (parseInt(a)+parseInt(b))) * parseInt(height);
        document.getElementById("resultofareatrap1").innerHTML ="\\[Area \\space of \\space Trapezium  \\]";
        renderMathInElement(document.getElementById("resultofareatrap1"));
        document.getElementById("resultofareatrap2").innerHTML = "\\[\\frac{1}{2} \\times (" + a + "+" + b + ") \\times "+height+" = " + area + "\\]";
        renderMathInElement(document.getElementById("resultofareatrap2"));
        var peri= parseInt(a) +  parseInt(b) +  parseInt(c) +  parseInt(d) ;
        document.getElementById("resultofperitrap1").innerHTML = "\\[Perimeter \\space of \\space Trapezium \\]";
        renderMathInElement(document.getElementById("resultofperitrap1"));
        document.getElementById("resultofperitrap2").innerHTML = `\\[${a} + ${b} + ${c} + ${d}\\ = ${peri}\\]`;
        renderMathInElement(document.getElementById("resultofperitrap2"));
    }
}

//created function for Rhombus
function rhombussolve() {
    var d1 = document.getElementById("inputd1").value;
    var d2 = document.getElementById("inputd2").value;
    var a = document.getElementById("inputside").value;
    var resultarea = document.getElementById("resultofarearec");
    var resultperi = document.getElementById("resultofperi");
    resultarea.innerHTML = "";
    resultperi.innerHTML = "";
    var area = 0.5 * (d1 * d2);
    var perimeter = 4 * a;
    if (d1 != "" && d2 != "") {
        document.getElementById("resultofareac").innerHTML = "\\[Area \\space of \\space Rhombus  \\space \\frac{1}{2} \\times" + d1 + "\\times" + d2 + "\\ = " + area + "\\]";
        renderMathInElement(document.getElementById("resultofareac"));
    }
    if (a != "") {
        document.getElementById("resultofperi").innerHTML = `\\[Perimeter \\space of \\space Rhombus \\ 4 \\times${a}\\ = ${perimeter}\\]`;
        renderMathInElement(document.getElementById("resultofperi"));
    } else if (a == "") {
        document.getElementById("resultofperi").innerHTML = "Enter side value to calculate perimeter";
    }
}

function cycquadcal(){
    var a = document.getElementById("inputquadsidea").value;
    var b = document.getElementById("inputquadsideb").value;
    var c = document.getElementById("inputquadsidec").value;
    var d = document.getElementById("inputquadsided").value;

    var s = 0.5 * (parseInt(a)+parseInt(b)+parseInt(c)+parseInt(d));
    var area = math.sqrt( (s - parseInt(a) ) * (s- parseInt(b)) * (s- parseInt(c)) *(s- parseInt(d)) );
    var peri = 2 * s;

    console.log(s)
    console.log(area)
    console.log(peri)

    if (a != "" && b != "" && c!="" && d!= "") {

        document.getElementById("resultofquads").innerHTML = "\\[s = \\frac{ "+a+" + "+b+" + "+c+" + "+d+" }{2} \\space= "+s.toFixed(2)+"\\]";
        renderMathInElement(document.getElementById("resultofquads"));

        if (area >= 0){

            document.getElementById("resultofquadarea1").innerHTML = "\\[Area \\space(S) \\space of \\space Cyclic  \\space Quadrilateral \\space is \\]";
            document.getElementById("resultofquadarea2").innerHTML = "\\[\\sqrt{ ("+s.toFixed(1)+" - "+a+") ("+s.toFixed(1)+" - "+b+") ("+s.toFixed(1)+" - "+c+") ("+s.toFixed(1)+" - "+d+") }\\]";
            document.getElementById("resultofquadarea3").innerHTML = "\\[ = " + area.toFixed(3) + "\\]";
            renderMathInElement(document.getElementById("resultofquadarea1"));
            renderMathInElement(document.getElementById("resultofquadarea2"));
            renderMathInElement(document.getElementById("resultofquadarea3"));
        } else{
            document.getElementById("resultofquadarea1").innerHTML = "Enter proper side values";
            document.getElementById("resultofquadarea2").innerHTML ="";
            document.getElementById("resultofquadarea3").innerHTML ="";
            document.getElementById("resultofquadperip1").innerHTML = "";
            document.getElementById("resultofquadperip2").innerHTML = "";
            return;
        }

        document.getElementById("resultofquadperip1").innerHTML = "\\[Perimeter \\space of \\space Cyclic  \\space Quadrilateral \\space is \\]";
        document.getElementById("resultofquadperip2").innerHTML = "\\[2 \\times ("+a+"+"+b+"+"+c+"+"+d+") = " + peri.toFixed(3) + "\\]";
        renderMathInElement(document.getElementById("resultofquadperip1"));
        renderMathInElement(document.getElementById("resultofquadperip2"));
    }
}

//interior angle calculation
function interiorsolve(){
    var n = parseInt(document.getElementById("polyside").value);
    var sub=n-2;
    var interiorSum=sub*180;
    var eachInterior=interiorSum/n;
    console.log(n);
    console.log(interiorSum);
    document.getElementById("suminterior").innerHTML = "\\[sum = ("+n+"-2)180=\\space"+sub+"\\times \\space 180\\]"+"\\[Sum \\space of \\space Interior \\space Angle ="+interiorSum+"\\]";
    //document.getElementById("suminterior").innerHTML+="\\[Sum \\space of \\space Interior \\space \\Angle ="+interiorSum+"\\]"    
    renderMathInElement(document.getElementById("suminterior"));
    document.getElementById("each_interior").innerHTML = "\\[Each\\space Measure = \\frac{"+interiorSum+"}{"+n+"}\\]"+"\\[Mesaure \\space of \\space each \\space Interior \\space Angle ="+eachInterior+"\\]";
    //document.getElementById("each_interior").innerHTML +="\\[Mesaure \\space of \\space each \\space Interior \\space \\Angle ="+eachInterior+"\\]";    
    renderMathInElement(document.getElementById("each_interior"));

       
}
//created function for Kite
function Kitesolve() {
    var p = document.getElementById("inputp").value;
    var q = document.getElementById("inputq").value;
    var a = document.getElementById("inputsidea1").value;
    var b = document.getElementById("inputsideb1").value;
    var resultareaKite = document.getElementById("resultofareaK");
    var resultperiKite = document.getElementById("resultofperiK");
    resultareaKite.innerHTML = "";
    resultperiKite.innerHTML = "";
    sum = parseInt(a) + parseInt(b);
    var area = 0.5 * (p * q);
    var perimeter = 2 * sum;
    if (p != "" && q != "") {
        document.getElementById("resultofareaK").innerHTML = "\\[Area \\space of \\space Kite  \\space \\space \\frac{1}{2} \\times" + p + "\\times" + q + "\\ = " + area + "\\]";
        renderMathInElement(document.getElementById("resultofareaK"));
    }
    if (a != "" && b != "") {
        document.getElementById("resultofperiK").innerHTML = "\\[Perimeter \\space of \\space Kite  \\space \\ 2 \\times (" + a + "+" + b + ")\\ = " + perimeter + " \\]";
        renderMathInElement(document.getElementById("resultofperiK"));
    } else if (a == "" || b == "") {
        document.getElementById("resultofperiK").innerHTML = "Enter side a and b both to calculate perimeter";
    }
}
//created function for lemniscate
function solvelemniscate() {
    var a = document.getElementById("inputlemnihei").value;
    var lenoutput = document.getElementById("resultoflemnilen");
    var lenoneoutput = document.getElementById("resultoflemnilenone");
    var perioutput = document.getElementById("resultoflemniperi");
    var perioneoutput = document.getElementById("resultoflemniperione");
    var areaoutput = document.getElementById("resultoflemniarea");
    var areaoneoutput = document.getElementById("resultoflemniareaone");
    var lentemp = "";
    var lenonetemp = "";
    var peritemp = "";
    var perionetemp = "";
    var areatemp = "";
    var areaonetemp = "";
    if (a != "") {
        lentemp += "\\[Length \\space of \\space lemniscate \\newline 2 \\times \\sqrt{2} \\times" + a  + "\\ = " + eval(String(2.82842712 * a)).toFixed(2) + "\\]";
        lenoutput.innerHTML = lentemp;

        lenonetemp += "\\[Length \\space of \\space one \\space drop \\space \\newline \\sqrt{2} \\times" + a + "\\ = " + eval(String(1.41421356 * a)).toFixed(2) + "\\]";
        lenoneoutput.innerHTML = lenonetemp;

        peritemp += "\\[Perimeter \\space of \\space lemniscate \\space \\newline 2 \\times \\sqrt{2} \\times 2.62 \\times" + a + "\\ = " + eval(String(7.41629871 * a )).toFixed(2) + "\\]";
        perioutput.innerHTML = peritemp;

        perionetemp += "\\[Perimeter \\space of \\space one \\space drop \\space \\newline \\sqrt{2} \\times 2.62 \\times" + a + "\\ = " + eval(String(3.70814935 * a )).toFixed(2) + "\\]";
        perioneoutput.innerHTML = perionetemp;

        areatemp += "\\[Area \\space of \\space lemniscate \\space \\newline 2 \\times" + a + "\\times" + a + "\\ = " + eval(String(2 * a * a)).toFixed(2) + "\\]";
        areaoutput.innerHTML = areatemp;

        areaonetemp += "\\[Area \\space of \\space one \\space drop \\space \\newline" + a + "\\times" + a + "\\ = " + eval(String(a * a)).toFixed(2) + "\\]";
        areaoneoutput.innerHTML = areaonetemp;

        renderMathInElement(lenoutput);
        renderMathInElement(lenoneoutput);
        renderMathInElement(perioutput);
        renderMathInElement(perioneoutput);
        renderMathInElement(areaoutput);
        renderMathInElement(areaoneoutput);

    } else {
        lenoutput.innerHTML = "";
        lenoneoutput.innerHTML = "";
        perioutput.innerHTML = "";
        perioneoutput.innerHTML = "";
        areaoutput.innerHTML = "";
        areaoneoutput.innerHTML = "";
    }

}
//created function for Rectangle
function rectanglesolve() {
    var length = document.getElementById("inputreclength").value;
    var breadth = document.getElementById("inputrecbreadth").value;
    var diagonal = document.getElementById("inputrecdiagonal").value;
    var resultarea = document.getElementById("resultofarearec");
    var resultperi = document.getElementById("resultofperirec");
    var resultdiagonal = document.getElementById("resultofdiagonalrec");
    var resultlength = document.getElementById("resultoflengthrec");
    var resultbreadth = document.getElementById("resultofbreadthrec");
    if (length != "" && breadth != "" && diagonal != "") {
        resultarea.innerHTML = "";
        resultperi.innerHTML = "";
        resultdiagonal.innerHTML = "";
        resultlength.innerHTML = "";
        resultbreadth.innerHTML = "";
        if (length < breadth) {
            resultarea.innerHTML = "Length Should be Greater";
        } else {
            resultarea.innerHTML =
                "\\[a=" +
                length +
                " \\times " +
                breadth +
                " = " +
                eval(String(length) + "*" + String(breadth)) +
                "\\]";
            resultarea.innerHTML +=
                "\\[Area \\space of \\space Rectangle \\space is \\space" +
                eval(String(length) + "*" + String(breadth)) +
                "\\]";

            resultperi.innerHTML =
                "\\[p=2( " +
                length +
                " + " +
                breadth +
                " ) = 2( " +
                eval(String(length) + "+" + String(breadth)) +
                " ) = " +
                eval("2*(" + String(length) + "+" + String(breadth) + ")") +
                "\\]";
            resultperi.innerHTML +=
                "\\[Perimeter \\space of \\space Rectangle \\space is \\space" +
                eval("2*(" + String(length) + "+" + String(breadth) + ")") +
                "\\]";
        }
    } else if (length != "" && breadth != "" && diagonal == "") {
        resultarea.innerHTML = "";
        resultperi.innerHTML = "";
        resultdiagonal.innerHTML = "";
        resultlength.innerHTML = "";
        resultbreadth.innerHTML = "";
        if (length < breadth) {
            resultarea.innerHTML = "Length Should be Greater";
        } else {
            resultarea.innerHTML =
                "\\[a=" +
                length +
                " \\times " +
                breadth +
                " = " +
                eval(String(length) + "*" + String(breadth)) +
                "\\]";
            resultarea.innerHTML +=
                "\\[Area \\space of \\space Rectangle \\space is \\space" +
                eval(String(length) + "*" + String(breadth)) +
                "\\]";

            resultperi.innerHTML =
                "\\[p=2( " +
                length +
                " + " +
                breadth +
                " ) = 2( " +
                eval(String(length) + "+" + String(breadth)) +
                " ) = " +
                eval("2*(" + String(length) + "+" + String(breadth) + ")") +
                "\\]";
            resultperi.innerHTML +=
                "\\[Perimeter \\space of \\space Rectangle \\space is \\space" +
                eval("2*(" + String(length) + "+" + String(breadth) + ")") +
                "\\]";

            var breadth2 = breadth * breadth;
            var length2 = length * length;
            var add2 = eval(String(breadth2 + length2));
            var add2sqrt = nerdamer.sqrt(add2).toString();
            resultdiagonal.innerHTML =
                "\\[d= \\sqrt{" +
                breadth +
                "^2+" +
                length +
                "^2}= \\sqrt{" +
                breadth2 +
                "+" +
                length2 +
                "}= \\sqrt{" +
                add2 +
                "}=" +
                eval(add2sqrt).toFixed(3) +
                "\\]";
            resultdiagonal.innerHTML +=
                "\\[Diagonal \\space of \\space Rectangle \\space is \\space" +
                eval(add2sqrt).toFixed(3) +
                "\\]";
        }
    } else if (length != "" && diagonal != "") {
        resultarea.innerHTML = "";
        resultperi.innerHTML = "";
        resultdiagonal.innerHTML = "";
        resultlength.innerHTML = "";
        resultbreadth.innerHTML = "";
        if (diagonal < length) {
            resultbreadth.innerHTML = "Diagonal Should be Greater";
        } else {
            var length22 = length * length;
            var diagonal22 = diagonal * diagonal;
            var bsub2 = eval(String(diagonal22 - length22));
            var bsub2sqrt = nerdamer.sqrt(bsub2).toString();
            bsub2sqrt = eval(bsub2sqrt).toFixed(3);
            resultbreadth.innerHTML =
                "\\[b= \\sqrt{" +
                diagonal +
                "^2-" +
                length +
                "^2}= \\sqrt{" +
                diagonal22 +
                "-" +
                length22 +
                "}= \\sqrt{" +
                bsub2 +
                "}=" +
                bsub2sqrt +
                "\\]";
            resultbreadth.innerHTML +=
                "\\[Breadth \\space of \\space Rectangle \\space is \\space" +
                bsub2sqrt +
                "\\]";

            resultarea.innerHTML =
                "\\[a=" +
                length +
                " \\times " +
                bsub2sqrt +
                " = " +
                eval(String(length) + "*" + String(bsub2sqrt)) +
                "\\]";
            resultarea.innerHTML +=
                "\\[Area \\space of \\space Rectangle \\space is \\space" +
                eval(String(length) + "*" + String(bsub2sqrt)) +
                "\\]";

            resultperi.innerHTML =
                "\\[p=2( " +
                length +
                " + " +
                bsub2sqrt +
                " ) = 2( " +
                eval(String(length) + "+" + String(bsub2sqrt)) +
                " ) = " +
                eval("2*(" + String(length) + "+" + String(bsub2sqrt) + ")") +
                "\\]";
            resultperi.innerHTML +=
                "\\[Perimeter \\space of \\space Rectangle \\space is \\space" +
                eval("2*(" + String(length) + "+" + String(bsub2sqrt) + ")") +
                "\\]";
        }
    } else if (diagonal != "" && breadth != "") {
        resultarea.innerHTML = "";
        resultperi.innerHTML = "";
        resultdiagonal.innerHTML = "";
        resultlength.innerHTML = "";
        resultbreadth.innerHTML = "";
        if (diagonal < breadth) {
            resultlength.innerHTML = "Length should be Greater";
        } else {
            var diagonal2 = diagonal * diagonal;
            var breadth22 = breadth * breadth;
            var sub2 = eval(String(diagonal2 - breadth22));
            var sub2sqrt = nerdamer.sqrt(sub2).toString();
            sub2sqrt = eval(sub2sqrt).toFixed(3);
            resultlength.innerHTML =
                "\\[l= \\sqrt{" +
                diagonal +
                "^2-" +
                breadth +
                "^2}= \\sqrt{" +
                diagonal2 +
                "-" +
                breadth22 +
                "}= \\sqrt{" +
                sub2 +
                "}=" +
                sub2sqrt +
                "\\]";
            resultlength.innerHTML +=
                "\\[Length \\space of \\space Rectangle \\space is \\space" +
                sub2sqrt +
                "\\]";

            resultarea.innerHTML =
                "\\[a=" +
                sub2sqrt +
                " \\times " +
                breadth +
                " = " +
                eval(String(sub2sqrt) + "*" + String(breadth)) +
                "\\]";
            resultarea.innerHTML +=
                "\\[Area \\space of \\space Rectangle \\space is \\space" +
                eval(String(sub2sqrt) + "*" + String(breadth)) +
                "\\]";

            resultperi.innerHTML =
                "\\[p=2( " +
                sub2sqrt +
                " + " +
                breadth +
                " ) = 2( " +
                eval(String(sub2sqrt) + "+" + String(breadth)) +
                " ) = " +
                eval("2*(" + String(sub2sqrt) + "+" + String(breadth) + ")") +
                "\\]";
            resultperi.innerHTML +=
                "\\[Perimeter \\space of \\space Rectangle \\space is \\space" +
                eval("2*(" + String(sub2sqrt) + "+" + String(breadth) + ")") +
                "\\]";
        }
    } else {
        resultarea.innerHTML = "";
        resultperi.innerHTML = "";
        resultdiagonal.innerHTML = "";
        resultlength.innerHTML = "";
        resultbreadth.innerHTML = "";
    }
    renderMathInElement(document.getElementById("resultofperirec"));
    renderMathInElement(document.getElementById("resultofarearec"));
    renderMathInElement(document.getElementById("resultofdiagonalrec"));
    renderMathInElement(document.getElementById("resultoflengthrec"));
    renderMathInElement(document.getElementById("resultofbreadthrec"));
}
function solvecosine() {
    var sidea = document.getElementById("inputsidea").value;
    var sideb = document.getElementById("inputsideb").value;
    var sidec = document.getElementById("inputsidec").value;
    var angleaoutput = document.getElementById("resultofanglea");
    var angleboutput = document.getElementById("resultofangleb");
    var anglecoutput = document.getElementById("resultofanglec");
    let angleatemp = "";
    var anglebtemp = "";
    var anglectemp = "";
    if ((sidea != "") && (sideb != "") && (sidec != "")) {
        angleatemp += "\\[ cos^{-1} [ " + sideb + "\\times" +sideb + "+" + sidec + "\\times" + sidec + "-" + sidea + "\\times" + sidea  + "\\div" + "(" + 2 + "\\times" +sideb + "\\times" + sidec + ")" + "]" + "\\]";
        angleatemp += "\\[Angle \\space A \\space is \\space " + eval(String((57.296*Math.acos((sideb * sideb + sidec * sidec - sidea * sidea)/(2 * sideb * sidec))).toFixed(2))) + '\u00B0' + "\\]";
        angleaoutput.innerHTML = angleatemp;
        anglebtemp += "\\[ cos^{-1} [ " + sidea + "\\times" +sidea + "+" + sidec + "\\times" + sidec + "-" + sideb + "\\times" + sideb  + "\\div" + "(" + 2 + "\\times" +sidea + "\\times" + sidec + ")" + "]" + "\\]";
        anglebtemp += "\\[Angle \\space B \\space is \\space " + eval(String((57.296*Math.acos((sidea * sidea + sidec * sidec - sideb * sideb)/(2 * sidea * sidec))).toFixed(2))) + '\u00B0' + "\\]";
        angleboutput.innerHTML = anglebtemp;
        anglectemp += "\\[ cos^{-1} [ " + sideb + "\\times" +sideb + "+" + sidea + "\\times" + sidea + "-" + sidec + "\\times" + sidec  + "\\div" + "(" + 2 + "\\times" +sidea + "\\times" + sideb + ")" + "]"  + "\\]";
        anglectemp += "\\[Angle \\space C \\space is \\space " + eval(String((57.296*Math.acos((sideb * sideb + sidea * sidea - sidec * sidec)/(2 * sideb * sidea))).toFixed(2))) + '\u00B0' + "\\]";
        anglecoutput.innerHTML = anglectemp;
        
        renderMathInElement(angleaoutput);
        renderMathInElement(angleboutput);
        renderMathInElement(anglecoutput);
        
    } else {
        angleaoutput.innerHTML = "";
        angleboutput.innerHTML = "";
        anglecoutput.innerHTML = "";
        
    }
}
function solveparaArc() {
    var height = document.getElementById("inputa").value;
    var chord = document.getElementById("inputb").value;
    var areaoutput = document.getElementById("resultofparaarea");
    var cirarcoutput = document.getElementById("resultofarc");
    var areatemp = "";
    var cirarctemp = "";
    var s=Math.sqrt((chord*chord)+16*(height*height));
    if ((height != "") && (chord != "")) {
        areatemp += "\\[" + "\\frac{2}{3}" + "\\times" + height + "\\times" + chord + "\\]";
        areatemp += "\\[Area \\space is \\space : \\space " + eval(String(0.67 * height * chord)) + "\\]";
        areaoutput.innerHTML = areatemp;
        cirarctemp += "\\[" + "\\frac{1}{2}\\times s \\space + " + "\\frac{" + chord + "\\times" + chord + "}{8 \\times" + height + "} ln" + "\\frac{4 \\times" + height +  "+ s}{" + chord + "}" + "\\]";
        cirarctemp += "\\[" + "where \\space s \\space = \\sqrt{" + chord + "\\times" + chord + "+" + 16 + "\\times" + height + "\\times" + height + "}" + "\\]";
        cirarctemp += "\\[Circular \\space Arc \\space is \\space : \\space " + eval(String((0.5*s + ((chord*chord)/(8*height))* Math.log((4*height + s)/chord)).toFixed(3))) + "\\]";
        cirarcoutput.innerHTML = cirarctemp;
        renderMathInElement(cirarcoutput);
        renderMathInElement(areaoutput);
    } else {
        areaoutput.innerHTML = "";
        cirarcoutput.innerHTML = "";
    }
}


function solvecircle() {
    let radius = document.getElementById("inputradius").value;
    let distance = document.getElementById("inputdistance").value;
    let area = 3.14 * radius * radius;
    let Circumference = 2 * 3.14 * radius;
    let diameter = 2 * radius;
    let a = (radius**2-distance**2);
    let chord = 2 * Math.sqrt(a);
    console.log(radius);
    console.log(distance);
    area = area.toPrecision(3);
    Circumference = Circumference.toPrecision(3);
    diameter = diameter.toPrecision(3);
    chord = chord.toPrecision(3);

    document.getElementById("resultofareacir").innerHTML = "\\[Area \\space of \\space Circle \\ 3.14 r^2\\ = " + area + "\\space cm^2 \\]";
    document.getElementById("resultofcircumferencec1").innerHTML = "\\[ 2*3.14 r \\ = " + Circumference + "\\]";
    document.getElementById("resultofcircumferencec2").innerHTML = "\\[Circumference \\space of \\space Circle \\space is \\space" + Circumference + "\\space cm\\]";
    document.getElementById("resultofdiameterc").innerHTML = "\\[Diameter \\space of \\space Circle \\ = " + diameter + "\\space cm\\]";
    document.getElementById("resultofchord").innerHTML = "\\[Length \\space of \\space the \\space Chord \\space is \\ = " + chord + "\\space cm \\]";
    renderMathInElement(document.getElementById("resultofareacir"));
    renderMathInElement(document.getElementById("resultofcircumferencec1"));
    renderMathInElement(document.getElementById("resultofcircumferencec2"));
    renderMathInElement(document.getElementById("resultofdiameterc"));
    renderMathInElement(document.getElementById("resultofchord"));
    
}

function solvearch(){
    var r = document.getElementById("radiusarch").value;
    var angle = document.getElementById("anglearch").value;
    var area = 0.5 * r**2 * (angle - math.sin(angle));
    var chord = 2 * r * math.sin(angle/2);
    var cirarc = r * angle;

    if (r!="" && angle!=""){

        if (chord <=0){
            document.getElementById("resultofareaarch1").innerHTML = "";
            document.getElementById("resultofareaarch2").innerHTML = "";
            document.getElementById("resultofarchchord1").innerHTML = "Please enter proper angle value in radian";
            document.getElementById("resultofarchchord2").innerHTML = "";
            document.getElementById("resultofcirarc").innerHTML = "";
            return;
        }
        document.getElementById("resultofareaarch1").innerHTML = "\\[Area \\space of \\space Arch \\space is \\]";
        document.getElementById("resultofareaarch2").innerHTML = "\\[\\frac{1}{2} \\times "+r+"^2 \\times ( "+angle+" - sin"+angle+" ) = "+area.toFixed(3)+"\\]";
        document.getElementById("resultofarchchord1").innerHTML = "\\[Chord \\space of \\space Arch \\space is \\]";
        document.getElementById("resultofarchchord2").innerHTML = "\\[ 2\\times "+r+" \\times sin (\\frac { "+angle+"}{2} ) = "+chord.toFixed(3)+"\\]";
        document.getElementById("resultofcirarc").innerHTML = "\\[Circular \\space arc \\space = "+r+" \\times "+angle+" = "+cirarc.toFixed(2)+" \\]";
        
        renderMathInElement(document.getElementById("resultofareaarch1"));
        renderMathInElement(document.getElementById("resultofareaarch2"));
        renderMathInElement(document.getElementById("resultofarchchord1"));
        renderMathInElement(document.getElementById("resultofarchchord2"));
        renderMathInElement(document.getElementById("resultofcirarc"));
    }
}

function solvesemicircle() {
    let radius = document.getElementById("semiradius").value;
    let area = (3.14 * radius * radius)/2;
    let Circumference = 3.14 * radius+2*radius;
    let diameter = 2 * radius;
    console.log(radius);
    area = area.toPrecision(3);
    Circumference = Circumference.toPrecision(3);
    diameter = diameter.toPrecision(3);
    document.getElementById("resultofareasemi").innerHTML = "\\[Area \\space of \\space SemiCircle = \\frac{ 3.14r^2}{2}\\ = " + area + "\\]";
    document.getElementById("resultofcircumsemi").innerHTML = "\\[Circumference \\space of \\space Circle = \\ 3.14 r+2r \\ = " + Circumference + "\\]";
    document.getElementById("resultofdiasemi").innerHTML = "\\[Diameter\\space of \\space Circle = " + diameter+"\\]";
    renderMathInElement(document.getElementById("resultofareasemi"));
    renderMathInElement(document.getElementById("resultofcircumsemi"));
    renderMathInElement(document.getElementById("resultofdiasemi"));
}

function solvecirclecal(){

    let area = document.getElementById("circlearea").value;
    let r = math.sqrt(area / math.pi);
    let R = 2 * r;    
    let circum = math.pi * R;
    console.log(r)
    console.log(R)
    console.log(circum)
    document.getElementById("resultofradcircal").innerHTML = "\\[Radius \\space of \\space Circle = \\sqrt{\\frac{"+area+"}{\\pi}}\\ = " + r.toFixed(3) + "\\]";
    document.getElementById("resultofcircumcirccal").innerHTML = "\\[Circumference = \\pi \\times 2 \\times "+r.toFixed(2)+" \\ = " + circum.toFixed(3) + "\\]";
    document.getElementById("resultofdiacircal").innerHTML = "\\[Diameter\\space of \\space Circle = " +R.toFixed(3)+"\\]";
    renderMathInElement(document.getElementById("resultofradcircal"));
    renderMathInElement(document.getElementById("resultofcircumcirccal"));
    renderMathInElement(document.getElementById("resultofdiacircal"));
}

function solveastroid() {
    var side = document.getElementById("inputsideastroid").value;  
    var areaoutput = document.getElementById("resultofastroidarea");
    var lengthoutput = document.getElementById("resultofastroidlen");
    var areatemp = "";
    var lengthtemp = "";
    if ((side != "")) {
        areatemp += "\\[Area \\space of \\space Astroid \\space" +  "\\]";
        areatemp += "\\[\\frac{3 \\pi \\times" + side + "\\times" + side+ "}{8}" + "\\space" + "=" + eval(String(1.1775 * side * side)).toFixed(2) + "\\]";
        areaoutput.innerHTML = areatemp;

        lengthtemp += "\\[Length \\space of \\space Astroid \\space is \\space \\]";
        lengthtemp += "\\[" + 6 + "\\times" + side + "=" + eval(String(6 * side)) + "\\]";
        lengthoutput.innerHTML = lengthtemp;
       
        renderMathInElement(areaoutput);
        renderMathInElement(lengthoutput);

    } else {
        areaoutput.innerHTML = "";
        lengthoutput.innerHTML = "";    

    }
}

function solvestadium() {
    var r = document.getElementById("inputcircrad").value;
    var a = document.getElementById("inputrectlen").value;
    var stalenoutput = document.getElementById("resultofstadlen");
    var perioutput = document.getElementById("resultofstadperi");
    var areaoutput = document.getElementById("resultofstadarea");
    var stalentemp = "";
    var peritemp = "";
    var areatemp = "";
    if (a != "") {
        stalentemp += "\\[Stadium \\space length \\space \\newline" + a  + "+ 2 \\space (" + r + ")" + "\\ = " + eval(String( parseFloat(a) + (2 * parseFloat(r) ))).toFixed(2) + "\\]";
        stalenoutput.innerHTML = stalentemp;

        peritemp += "\\[Perimeter \\space \\newline 2 \\times ( 3.14 \\times" + r + "+" + a + ")" + "\\ = " + eval(String(2 * (3.141592653589 * parseFloat(r) + parseFloat(a) ))).toFixed(2) + "\\]";
        perioutput.innerHTML = peritemp;

        areatemp += "\\[Area \\space \\newline" + r + "\\times ( 3.14 \\times" + r + "+ 2" + a + ")" + "\\ = " + eval(String(parseFloat(r) * ((3.141592653589 * parseFloat(r) )+(2 * parseFloat(a) )))).toFixed(2) + "\\]";
        areaoutput.innerHTML = areatemp;

        renderMathInElement(stalenoutput);
        renderMathInElement(perioutput);
        renderMathInElement(areaoutput);

    } else {
        stalenoutput.innerHTML = "";
        perioutput.innerHTML = "";
        areaoutput.innerHTML = "";
    }

}

function solveoctadeca(){
    var side = parseInt(document.getElementById("inputsideoctadeca").value);
    var area = 18/4 * side**2 * math.cot(math.pi/18);
    var perimeter = 18 * side;
    document.getElementById("resultofareaoctadeca1").innerHTML = "\\[Area \\space of \\space Octadecagon \\space \\]";
    document.getElementById("resultofareaoctadeca2").innerHTML = "\\[\\frac{18}{4} \\times "+side+"^2 \\times \\cot(\\frac{\\pi}{18}) = "+area.toFixed(2)+"\\]";
    document.getElementById("resultofperimeteroctadeca").innerHTML = "\\[Perimeter \\space of \\space Octadecagon \\space \\space  18 \\times "+side+" = "+perimeter+"\\]";
    renderMathInElement(document.getElementById("resultofareaoctadeca1"));
    renderMathInElement(document.getElementById("resultofareaoctadeca2"));
    renderMathInElement(document.getElementById("resultofperimeteroctadeca"));
}

function solvehexdeca(){
    var side = document.getElementById("inputsidehexdeca").value;
    var area = 4 * side**2 * math.cot(math.pi / 16);
    var perimeter = 16 * side;
    document.getElementById("resultofareahexdeca1").innerHTML = "\\[Area \\space of \\space Hexadecagon \\space \\]";
    document.getElementById("resultofareahexdeca2").innerHTML = "\\[4 \\times "+side+"^2 \\times \\cot(\\frac{\\pi}{16}) = "+area.toFixed(2)+"\\]";
    document.getElementById("resultofperimeterhexdeca").innerHTML = "\\[Perimeter \\space of \\space Hexadecagon \\space \\space  16 \\times "+side+" = "+perimeter+"\\]";
    renderMathInElement(document.getElementById("resultofareahexdeca1"));
    renderMathInElement(document.getElementById("resultofareahexdeca2"));
    renderMathInElement(document.getElementById("resultofperimeterhexdeca"));
}

function solveenndeca(){
    var side = document.getElementById("inputsideenndeca").value;
    var area = (19/4) * side**2 * math.cot(math.pi / 19);
    var perimeter = 19 * side;
    document.getElementById("resultofareaenndeca1").innerHTML = "\\[Area \\space of \\space Enneadecagon \\space \\]";
    document.getElementById("resultofareaenndeca2").innerHTML = "\\[\\frac{19}{4} \\times "+side+"^2 \\times \\cot(\\frac{\\pi}{19}) = "+area.toFixed(2)+"\\]";
    document.getElementById("resultofperimeterenndeca1").innerHTML = "\\[Perimeter \\space of \\space Enneadecagon \\space \\]";
    document.getElementById("resultofperimeterenndeca2").innerHTML = "\\[\\space  19 \\times "+side+" = "+perimeter+"\\]";
    renderMathInElement(document.getElementById("resultofareaenndeca1"));
    renderMathInElement(document.getElementById("resultofareaenndeca2"));
    renderMathInElement(document.getElementById("resultofperimeterenndeca1"));
    renderMathInElement(document.getElementById("resultofperimeterenndeca2"));
}

function solvepent(){
    let side = document.getElementById("inputsidepent").value;
    let area = 0.25 * math.sqrt(5 * (5 + 2 * math.sqrt(5))) * side * side;
    let diagonal = 0.5 * (1 + math.sqrt(5)) * side;
    let perimeter = 5 * side;
    document.getElementById("resultofareapent1").innerHTML = "";
    document.getElementById("resultofareapent2").innerHTML = "";
    document.getElementById("resultofdiagonalpent1").innerHTML = "";
    document.getElementById("resultofdiagonalpent2").innerHTML = "";
    document.getElementById("resultofperimeterpent").innerHTML = "";

    if (side != ""){
        document.getElementById("resultofareapent1").innerHTML = "\\[Area \\space of \\space Pentagon \\space \\]";
        document.getElementById("resultofareapent2").innerHTML = "\\[\\frac{1}{4} \\sqrt{5(5 + 2 \\sqrt{5})} \\times "+side+"^2 = "+area.toFixed(2)+"\\]";
        document.getElementById("resultofdiagonalpent1").innerHTML ="\\[Daigonal \\space of \\space Pentagon \\space (d) \\]";
        document.getElementById("resultofdiagonalpent2").innerHTML = "\\[\\frac{1 + \\sqrt{5}}{2} \\times "+side+ "="+diagonal.toFixed(2)+"\\]";
        document.getElementById("resultofperimeterpent").innerHTML = "\\[Perimeter \\space of \\space Pentagon \\space 5 \\times "+side+" = "+perimeter+"\\]";
        renderMathInElement(document.getElementById("resultofareapent1"));
        renderMathInElement(document.getElementById("resultofareapent2"));
        renderMathInElement(document.getElementById("resultofdiagonalpent1"));
        renderMathInElement(document.getElementById("resultofdiagonalpent2"));
        renderMathInElement(document.getElementById("resultofperimeterpent"));
    }

}

//created function for Decagon
function solvedeca(){
    let side = document.getElementById("inputsidedeca").value;
    let area = 2.5 * side**2  * math.sqrt(5 + (2 * math.sqrt(5)));
    let perimeter = 10 * side;
    document.getElementById("resultofareadeca1").innerHTML = "\\[Area \\space of \\space Decagon \\space \\]";
    document.getElementById("resultofareadeca2").innerHTML = "\\[\\frac{5}{2} \\times"+side+"^2 \\sqrt(5 + 2\\sqrt{5}) = "+area.toFixed(2)+"\\]";
    document.getElementById("resultofperimeterdeca").innerHTML = "\\[Perimeter \\space of \\space Decagon \\space \\space  10 \\times "+side+" = "+perimeter+"\\]";
    renderMathInElement(document.getElementById("resultofareadeca1"));
    renderMathInElement(document.getElementById("resultofareadeca2"));
    renderMathInElement(document.getElementById("resultofperimeterdeca"));

}

function solvedodeca(){
    var side = parseInt(document.getElementById("inputsidedodeca").value);
    var area = 3 * (side**2) * (2 + math.sqrt(3));
    var perimeter = 12 * side;
    document.getElementById("resultofareadodeca1").innerHTML = "\\[Area \\space of \\space Dodecagon \\space \\]";
    document.getElementById("resultofareadodeca2").innerHTML = "\\[3 \\times ("+side+"^2) \\times (2+ \\sqrt{3})= "+area.toFixed(2)+"\\]";
    document.getElementById("resultofperimeterdodeca").innerHTML = "\\[Perimeter \\space of \\space Dodecagon \\space \\space  12 \\times "+side+" = "+perimeter+"\\]";
    renderMathInElement(document.getElementById("resultofareadodeca1"));
    renderMathInElement(document.getElementById("resultofareadodeca2"));
    renderMathInElement(document.getElementById("resultofperimeterdodeca"));
}

//created function for Hexagon
function solvehex(){
    let side = document.getElementById("inputsidehex").value;
    let area = 0.5 * (3 * math.sqrt(3)) * side * side;
    let perimeter = 6 * side;
    document.getElementById("resultofareahex1").innerHTML = "\\[Area \\space of \\space Hexagon \\space \\]";
    document.getElementById("resultofareahex2").innerHTML = "\\[\\frac{3 \\sqrt{3}}{2} \\times "+side+"^2 = "+area.toFixed(2)+"\\]";
    document.getElementById("resultofperimeterhex").innerHTML = "\\[Perimeter \\space of \\space Hexagon \\space 6 \\times "+side+" = "+perimeter+"\\]";
    renderMathInElement(document.getElementById("resultofareahex1"));
    renderMathInElement(document.getElementById("resultofareahex2"));
    renderMathInElement(document.getElementById("resultofperimeterhex"));

}

//created function for Heptagon
function solvehept() {
    var side = document.getElementById("inputsidehept").value;  
    var areaoutput = document.getElementById("resultofheptarea");
    var perioutput = document.getElementById("resultofheptperi");
    var areatemp = "";
    var peritemp = "";
    if ((side != "")) {
        areatemp += "\\[Area \\space of \\space Heptagon \\space" +  "\\]";
        areatemp += "\\[\\frac{7}{4}" + "\\times" + side + "\\times" + side + "\\times" + "\\space cot(\\frac{180}{7} \\degree) \\space" + "=" + eval(String(3.63391 * side * side)).toFixed(2) + "\\]";
        areaoutput.innerHTML = areatemp;

        peritemp += "\\[Perimeter \\space of \\space Heptagon \\space is \\space \\]";
        peritemp += "\\[" + 7 + "\\times" + side + "=" + eval(String(7 * side)) + "\\]";
        perioutput.innerHTML = peritemp;
       
        renderMathInElement(areaoutput);
        renderMathInElement(perioutput);

    } else {
        areaoutput.innerHTML = "";
        perioutput.innerHTML = "";    

    }
}

//created function for Octagon
function solveoct(){
    let side = document.getElementById("inputsideoct").value;
    let area = 2 * (1 + math.sqrt(2)) * side**2 ;
    let perimeter = 8 * side;
    document.getElementById("resultofareaoct1").innerHTML = "\\[Area \\space of \\space Octagon \\space \\]";
    document.getElementById("resultofareaoct2").innerHTML = "\\[2 \\times (1 + \\sqrt{2}) \\times "+side+"^2 = "+area.toFixed(2)+"\\]";
    document.getElementById("resultofperimeteroct").innerHTML = "\\[Perimeter \\space of \\space Octagon \\space \\space  8 \\times "+side+" = "+perimeter+"\\]";
    renderMathInElement(document.getElementById("resultofareaoct1"));
    renderMathInElement(document.getElementById("resultofareaoct2"));
    renderMathInElement(document.getElementById("resultofperimeteroct"));

}

//created function for hendecagon (or undecagon)
function solvehendeca(){
    var side = parseInt(document.getElementById("inputsidehendeca").value);
    var area = ((11 * side**2)/4) * (math.cot(math.pi / 11));
    var perimeter = 11 * side;
    document.getElementById("resultofareahendeca1").innerHTML = "\\[Area \\space of \\space Hendecagon \\space \\]";
    document.getElementById("resultofareahendeca2").innerHTML = "\\[\\frac{11\\times"+side+"^2}{4} \\cot(\\frac{\\pi}{11}) = "+area.toFixed(2)+"\\]";
    document.getElementById("resultofperimeterhendeca").innerHTML = "\\[Perimeter \\space of \\space Hendecagon \\space \\space  11 \\times "+side+" = "+perimeter+"\\]";
    renderMathInElement(document.getElementById("resultofareahendeca1"));
    renderMathInElement(document.getElementById("resultofareahendeca2"));
    renderMathInElement(document.getElementById("resultofperimeterhendeca"));

}

//created function for Nonagon
function solvenona() {
    var side = document.getElementById("inputsidenona").value;  
    var areaoutput = document.getElementById("resultofnonaarea");
    var perioutput = document.getElementById("resultofnonaperi");
    var areatemp = "";
    var peritemp = "";
    if ((side != "")) {
        areatemp += "\\[Area \\space of \\space Nonagon \\space" +  "\\]";
        areatemp += "\\[\\frac{9}{4}" + "\\times" + side + "\\times" + side + "\\times" + "\\space cot(\\frac{180}{9} \\degree) \\space" + "=" + eval(String(6.18182 * side * side)).toFixed(2) + "\\]";
        areaoutput.innerHTML = areatemp;

        peritemp += "\\[Perimeter \\space of \\space Nonagon \\space is \\space \\]";
        peritemp += "\\[" + 9 + "\\times" + side + "=" + eval(String(9 * side)) + "\\]";
        perioutput.innerHTML = peritemp;

        renderMathInElement(areaoutput);
        renderMathInElement(perioutput);

    } else {
        areaoutput.innerHTML = "";
        perioutput.innerHTML = "";    

    }
}

function solvependeca(){
    var side = parseInt(document.getElementById("inputsidependeca").value);
    var area = 15/4 * side**2 * math.cot(math.pi / 15);
    var perimeter = 15 * side;
    document.getElementById("resultofareapendeca1").innerHTML = "\\[Area \\space of \\space Pendecagon \\space \\]";
    document.getElementById("resultofareapendeca2").innerHTML = "\\[\\frac{15}{4}\\times "+side+"^2 \\times \\cot(\\frac{\\pi}{15}) = "+area.toFixed(2)+"\\]";
    document.getElementById("resultofperimeterpendeca").innerHTML = "\\[Perimeter \\space of \\space Pendecagon \\space \\space  15 \\times "+side+" = "+perimeter+"\\]";
    renderMathInElement(document.getElementById("resultofareapendeca1"));
    renderMathInElement(document.getElementById("resultofareapendeca2"));
    renderMathInElement(document.getElementById("resultofperimeterpendeca"));

}

function solvepentagram() {
    var a = document.getElementById("inputpengramside").value;
    var chordoutput = document.getElementById("resultofpengramchord");
    var longchordoutput = document.getElementById("resultofpengramloncho");
    var shortchordoutput = document.getElementById("resultofpengramshocho");
    var perioutput = document.getElementById("resultofpengramperi");
    var areaoutput = document.getElementById("resultofpengramarea");
    var chordtemp = "";
    var longchotemp = "";
    var shochotemp = "";
    var peritemp = "";
    var areatemp = "";
    if (a != "") {
        chordtemp += "\\[Chord \\space length \\space of \\space Pentagram \\newline " + a + "\\times" + 1.62 + "\\ = " + eval(String(1.61803399 * a)).toFixed(2) + "\\]";
        chordoutput.innerHTML = chordtemp;

        longchotemp += "\\[Long \\space chord \\space slice \\space of \\space Pentagram \\space \\newline \\frac{1}{1.62}" + "\\times" + a + "\\ = " + eval(String(0.61803399 * a)).toFixed(2) + "\\]";
        longchordoutput.innerHTML = longchotemp;

        shochotemp += "\\[Short \\space chord \\space slice \\space of \\space Pentagram \\space \\newline \\frac{1}{1.62} \\times \\frac{1}{1.62}" + "\\times" + a + "\\ = " + eval(String(0.38196601 * a)).toFixed(2) + "\\]";
        shortchordoutput.innerHTML = shochotemp;

        peritemp += "\\[Perimeter \\space of \\space Pentagram \\space \\newline \\frac{10}{1.62} \\times" + a + "\\ = " + eval(String(6.18033989 * a )).toFixed(2) + "\\]";
        perioutput.innerHTML = peritemp;

        areatemp += "\\[Area \\space of \\space Pentagram \\space \\newline \\frac{\\sqrt{5 \\times (5 - 2 \\sqrt{5})}}{2} \\times" + a + "\\times" + a + "\\ = " + eval(String(0.81229924 * a * a)).toFixed(2) + "\\]";
        areaoutput.innerHTML = areatemp;

        renderMathInElement(chordoutput);
        renderMathInElement(longchordoutput);
        renderMathInElement(shortchordoutput);
        renderMathInElement(perioutput);
        renderMathInElement(areaoutput);

    } else {
        chordoutput.innerHTML = "";
        longchordoutput.innerHTML = "";
        shortchordoutput.innerHTML = "";
        perioutput.innerHTML = "";
        areaoutput.innerHTML = "";
    }

}

function solvehexagram() {
    var a = document.getElementById("inputhexgramside").value;
    var chordoutput = document.getElementById("resultofhexgramchord");
    var chordsliceoutput = document.getElementById("resultofhexgramchosli");
    var perioutput = document.getElementById("resultofhexgramperi");
    var areaoutput = document.getElementById("resultofhexgramarea");
    var chordtemp = "";
    var choslicetemp = "";
    var peritemp = "";
    var areatemp = "";
    if (a != "") {
        chordtemp += "\\[Chord \\space length \\space of \\space Hexagram \\newline \\sqrt{3} \\times" + a  + "\\ = " + eval(String(1.73205081 * a)).toFixed(2) + "\\]";
        chordoutput.innerHTML = chordtemp;

        choslicetemp += "\\[Chord \\space slice \\space of \\space Hexagram \\space \\newline \\frac{1}{\\sqrt{3}} \\times" + a + "\\ = " + eval(String(0.57735027 * a)).toFixed(2) + "\\]";
        chordsliceoutput.innerHTML = choslicetemp;

        peritemp += "\\[Perimeter \\space of \\space Hexagram \\space \\newline 4 \\times \\sqrt{3} \\times" + a + "\\ = " + eval(String(6.92820323 * a )).toFixed(2) + "\\]";
        perioutput.innerHTML = peritemp;

        areatemp += "\\[Area \\space of \\space Hexagram \\space \\newline \\sqrt{3} \\times" + a + "\\times" + a + "\\ = " + eval(String(1.73205081 * a * a)).toFixed(2) + "\\]";
        areaoutput.innerHTML = areatemp;

        renderMathInElement(chordoutput);
        renderMathInElement(chordsliceoutput);
        renderMathInElement(perioutput);
        renderMathInElement(areaoutput);

    } else {
        chordoutput.innerHTML = "";
        chordsliceoutput.innerHTML = "";
        perioutput.innerHTML = "";
        areaoutput.innerHTML = "";
    }

}

function solveunihexagram() {
    var a = document.getElementById("inputunihexgramside").value;
    var shodiagoutput = document.getElementById("resultofunihexshodia");
    var longdiagoutput = document.getElementById("resultofunihexlongdia");
    var b1output = document.getElementById("resultofunihexsec1");
    var b2output = document.getElementById("resultofunihexsec2");
    var b3output = document.getElementById("resultofunihexsec3");
    var coutput = document.getElementById("resultofunihexc");
    var perioutput = document.getElementById("resultofunihexperi");
    var areaoutput = document.getElementById("resultofunihexarea");
    var shodiagtemp = "";
    var longdiagtemp = "";
    var b1temp = "";
    var b2temp = "";
    var b3temp = "";
    var ctemp = "";
    var peritemp = "";
    var areatemp = "";
    if (a != "") {
        shodiagtemp += "\\[Short\\space diagonal \\space \\newline \\sqrt{3} \\times " + a + "\\ = " + eval(String(1.73205081 * a)).toFixed(2) + "\\]";
        shodiagoutput.innerHTML = shodiagtemp;

        longdiagtemp += "\\[Long \\space diagonal \\space \\newline 2 \\times" + a + "\\ = " + eval(String(2 * a)).toFixed(2) + "\\]";
        longdiagoutput.innerHTML = longdiagtemp;

        b1temp += "\\[Section \\space b_1 \\space \\newline \\frac{\\sqrt{3}}{2} \\times" + a + "\\ = " + eval(String(0.8660254 * a)).toFixed(2) + "\\]";
        b1output.innerHTML = b1temp;

        b2temp += "\\[Section \\space b_2 \\space \\newline \\frac{\\sqrt{3}}{6} \\times" + a + "\\ = " + eval(String(0.28867513 * a)).toFixed(2) + "\\]";
        b2output.innerHTML = b2temp;

        b3temp += "\\[Section \\space b_3 \\space \\newline \\frac{\\sqrt{3}}{3} \\times" + a + "\\ = " + eval(String(0.57735027 * a)).toFixed(2) + "\\]";
        b3output.innerHTML = b3temp;

        ctemp += "\\[Section \\space c^` \\space \\newline \\frac{1}{2} \\times" + a + "\\ = " + eval(String(0.5 * a)).toFixed(2) + "\\]";
        coutput.innerHTML = ctemp;

        peritemp += "\\[Perimeter \\space \\newline ( 2 + \\frac{10}{3} \\times \\sqrt{3}) \\times" + a + "\\ = " + eval(String(7.77350269 * a )).toFixed(2) + "\\]";
        perioutput.innerHTML = peritemp;

        areatemp += "\\[Area \\space \\newline \\frac{5}{6} \\times \\sqrt{3} \\times" + a + "\\times" + a + "\\ = " + eval(String(1.44337567 * a * a)).toFixed(2) + "\\]";
        areaoutput.innerHTML = areatemp;

        renderMathInElement(shodiagoutput);
        renderMathInElement(longdiagoutput);
        renderMathInElement(b1output);
        renderMathInElement(b2output);
        renderMathInElement(b3output);
        renderMathInElement(coutput);
        renderMathInElement(perioutput);
        renderMathInElement(areaoutput);

    } else {
        shodiagoutput.innerHTML = "";
        longdiagoutput.innerHTML = "";
        b1output.innerHTML = "";
        b2output.innerHTML = "";
        b3output.innerHTML = "";
        coutput.innerHTML = "";
        perioutput.innerHTML = "";
        areaoutput.innerHTML = "";
    }

}

function solveoctagram() {
    var a = document.getElementById("inputoctgramside").value;
    var spikeoutput = document.getElementById("resultofoctgramspike");
    var diagoutput = document.getElementById("resultofoctgramdiag");
    var chordoutput = document.getElementById("resultofoctgramcho");
    var perioutput = document.getElementById("resultofoctgramperi");
    var areaoutput = document.getElementById("resultofoctgramarea");
    var spiketemp = "";
    var diagtemp = "";
    var chordtemp = "";
    var peritemp = "";
    var areatemp = "";
    if (a != "") {
        spiketemp += "\\[Spike \\space length \\space of \\space Octagram \\newline \\frac{2 - \\sqrt{2}}{2} \\times (1 + \\sqrt{2}) \\times" + a + "\\ = " + eval(String(0.70710678 * a)).toFixed(2) + "\\]";
        spikeoutput.innerHTML = spiketemp;

        diagtemp += "\\[Diagonal \\space of \\space Octagram \\space \\newline \\sqrt{4 + 2 \\times \\sqrt{2}} \\times" + a + "\\ = " + eval(String(2.61312593 * a)).toFixed(2) + "\\]";
        diagoutput.innerHTML = diagtemp;

        chordtemp += "\\[Chord \\space length \\space of \\space Octagram \\space \\newline (1 + \\sqrt{2}) \\times" + a + "\\ = " + eval(String(2.41421356 * a)).toFixed(2) + "\\]";
        chordoutput.innerHTML = chordtemp;

        peritemp += "\\[Perimeter \\space of \\space Octagram \\space \\newline 8 \\space (2 - \\sqrt{2}) \\space (1 + \\sqrt{2}) \\times " + a + "\\ = " + eval(String(11.3137085 * a )).toFixed(2) + "\\]";
        perioutput.innerHTML = peritemp;

        areatemp += "\\[Area \\space of \\space Octagram \\space \\newline (6 \\space \\sqrt{2} - 8) \\space (1 + \\sqrt{2})^2 \\times" + a + "^2" + "\\ = " + eval(String(2.82842712 * a * a)).toFixed(2) + "\\]";
        areaoutput.innerHTML = areatemp;

        renderMathInElement(spikeoutput);
        renderMathInElement(diagoutput);
        renderMathInElement(chordoutput);
        renderMathInElement(perioutput);
        renderMathInElement(areaoutput);

    } else {
        spikeoutput.innerHTML = "";
        diagoutput.innerHTML = "";
        chordoutput.innerHTML = "";
        perioutput.innerHTML = "";
        areaoutput.innerHTML = "";
    }

}

function solvedoustar() {
    var b = document.getElementById("inputdoustarside").value;
    var l1 = document.getElementById("inputdoustarlonlen").value;
    var l2 = document.getElementById("inputdoustarsholen").value;
    var h1output = document.getElementById("resultofdoustarlonhei");
    var h2output = document.getElementById("resultofdoustarshohei");
    var diaoutput = document.getElementById("resultofdoustardia");
    var perioutput = document.getElementById("resultofdoustarperi");
    var areaoutput = document.getElementById("resultofdoustararea");
    var h1temp = "";
    var h2temp = "";
    var diatemp = "";
    var peritemp = "";
    var areatemp = "";
    if ((b != "") && (l1 != "") && (l2 != "")) {
        if(l1<l2) {
            h1output.innerHTML = "l1 should be greater than l2";
        } else {
        h1temp += "\\[Height \\space long \\space point \\space \\newline \\sqrt{" + l1 + "^2 - \\frac{" + b + "^2}{4}}" + "\\ = " + eval(String(Math.sqrt((l1 * l1) - (b * b)/4))).toFixed(2) + "\\]";
        h1output.innerHTML = h1temp;

        h2temp += "\\[Height \\space short \\space point \\space \\newline \\sqrt{" + l2 + "^2 - \\frac{" + b + "^2}{4}}" + "\\ = " + eval(String(Math.sqrt((l2 * l2) - (b * b)/4))).toFixed(2) + "\\]";
        h2output.innerHTML = h2temp;

        diatemp += "\\[Star \\space Diameter \\space \\newline" + 2 + "\\times \\sqrt{" + l1 + "^2 - \\frac{" + b + "^2}{4}} +" + b + "\\times (1 + \\sqrt{2})" + "\\ = " + eval(String(2 * Math.sqrt((l1 * l1) - (b * b)/4) + b * (1 + Math.sqrt(2))  )).toFixed(2) + "\\]";
        diaoutput.innerHTML = diatemp;

        peritemp += "\\[Perimeter \\space \\newline" + 8 + "\\times (" + l1 + "+" + l2 + ")" + "\\ = " + eval(String((8 * l1) + (8 * l2))).toFixed(2) + "\\]";
        perioutput.innerHTML = peritemp;

        areatemp += "\\[Area \\space \\newline" + 2 + "\\times" + b + "\\space [" + b + "(1 + \\sqrt{2}) \\newline + (\\sqrt{" + l1 + "^2 - \\frac{" + b + "^2}{4}} + \\sqrt{" + l2 + "^2 - \\frac{" + b + "^2}{4}})]" + "\\ = " + eval(String(2 * b* [ b * ( 1 + Math.sqrt(2) ) + ( Math.sqrt((l1 * l1) - (b * b)/4) + Math.sqrt((l2 * l2) - (b * b)/4) ) ])).toFixed(2) + "\\]";
        areaoutput.innerHTML = areatemp;

        renderMathInElement(h1output);
        renderMathInElement(h2output);
        renderMathInElement(diaoutput);
        renderMathInElement(perioutput);
        renderMathInElement(areaoutput);
        }

    } else {
        h1output.innerHTML = "";
        h2output.innerHTML = "";
        diaoutput.innerHTML = "";
        perioutput.innerHTML = "";
        areaoutput.innerHTML = "";
    }

}

function solvelakstar() {
    var a = document.getElementById("inputlakstarside").value;
    var boutput = document.getElementById("resultoflakstaredoct");
    var coutput = document.getElementById("resultoflakstaredstar");
    var areastaroutput = document.getElementById("resultoflakstararea");
    var areaoctoutput = document.getElementById("resultoflakstarareaoct");
    var perioutput = document.getElementById("resultoflakstarperi");
    var chordoutput = document.getElementById("resultoflakstarchord");
    var btemp = "";
    var ctemp = "";
    var areastartemp = "";
    var areaocttemp = "";
    var peritemp = "";
    var chordtemp = "";
    if (a != "") {
        btemp += "\\[Edge \\space length \\space octagon \\space \\newline (" + "\\sqrt{2} - 1 ) \\times" + a + "\\ = " + eval(String(0.41421356 * a)).toFixed(2) + "\\]";
        boutput.innerHTML = btemp;

        ctemp += "\\[Edge \\space length \\space star \\space \\newline \\frac{(2 - \\sqrt{2})}{2} \\times" + a + "\\ = " + eval(String(0.29289322 * a)).toFixed(2) + "\\]";
        coutput.innerHTML = ctemp;

        areastartemp += "\\[Area \\space of \\space star \\space \\newline 2 \\times ( 2 - \\sqrt{2}) \\times" + a + "\\times" + a + "\\ = " + eval(String(1.17157288 * a * a)).toFixed(2) + "\\]";
        areastaroutput.innerHTML = areastartemp;

        areaocttemp += "\\[Area \\space of \\space octagon \\space \\newline 2 \\times ( \\sqrt{2} - 1) \\times" + a + "\\times" + a + "\\ = " + eval(String(0.82842712 * a * a)).toFixed(2) + "\\]";
        areaoctoutput.innerHTML = areaocttemp;

        peritemp += "\\[Perimeter \\space \\newline 8 \\times ( 2 - \\sqrt{2}) \\times" + a + "\\ = " + eval(String(4.6862915 * a )).toFixed(2) + "\\]";
        perioutput.innerHTML = peritemp;

        chordtemp += "\\[Chord \\space length \\space \\newline ( 2 - \\sqrt{2}) \\times" + a + "\\times 0.9238" + "\\ = " + eval(String(0.5411961 * a)).toFixed(2) + "\\]";
        chordoutput.innerHTML = chordtemp;

        renderMathInElement(boutput);
        renderMathInElement(coutput);
        renderMathInElement(areastaroutput);
        renderMathInElement(areaoctoutput);
        renderMathInElement(perioutput);
        renderMathInElement(chordoutput);

    } else {
        boutput.innerHTML = "";
        coutput.innerHTML = "";
        areastaroutput.innerHTML = "";
        areaoctoutput.innerHTML = "";
        perioutput.innerHTML = "";
        chordoutput.innerHTML = "";
    }

}

//ellipsoidal cap shape Calculator
function ellipcap(){
    var a = document.getElementById("spcapsemiaxisa").value;
    var b = document.getElementById("spcapsemiaxisb").value;
    var c = document.getElementById("spcapsemiaxisc").value;
    var h = document.getElementById("spcapheight").value;

    var vol = ((math.pi * a * b) / (3 * c**2)) * h**2 * ((3 * c) - h ) ;
    var ba = ((math.pi * a * b) / (c**2)) * h * ((2 * c) - h );

    if(a!="" && c!="" && h!=""){
        document.getElementById("volspcap1").innerHTML = "\\[Volume \\space of \\space Ellipsoidal \\space Cap \\space is \\space \\]";
        document.getElementById("volspcap2").innerHTML = "\\[\\frac{\\pi \\times "+a+" \\times "+b+"}{3 \\times"+c+"^2 } \\times"+h+"^2 \\times (3\\times"+c+"- "+h+" ) = "+vol.toFixed(3)+"\\]";
        renderMathInElement(document.getElementById("volspcap1"));
        renderMathInElement(document.getElementById("volspcap2"));
        
        document.getElementById("baspcap1").innerHTML = "\\[Base \\space Area \\space of \\space Ellipsoidal \\space Cap \\space is \\space \\]";
        document.getElementById("baspcap2").innerHTML = "\\[\\frac{\\pi \\times"+a+"\\times "+b+"}{"+c+"^2 } \\times "+h+" \\times (2 \\times"+c+" - "+h+" ) = "+ba.toFixed(3)+"\\]";
        renderMathInElement(document.getElementById("baspcap1"));
        renderMathInElement(document.getElementById("baspcap2"));
    } else{
        document.getElementById("volspcap1").innerHTML ="";
        document.getElementById("volspcap2").innerHTML = "";
        document.getElementById("baspcap1").innerHTML ="";
        document.getElementById("baspcap2").innerHTML ="";
    }
}

function solveannulus() {
    var radius1 = document.getElementById("inputradius1").value;
    var radius2 = document.getElementById("inputradius2").value;
    var area1output = document.getElementById("resultofarea1");
    var area2output = document.getElementById("resultofarea2");
    var circum1output = document.getElementById("resultofcircum1");
    var circum2output = document.getElementById("resultofcircum2");
    var areaoutput = document.getElementById("resultofarea");
    var area1temp = "";
    var area2temp = "";
    var circum1temp = "";
    var circum2temp = "";
    var areatemp = "";
    if ((radius1 != "") && (radius2 != "")) {
        area1temp += "\\[" + "\\pi" + "\\times" + radius1 + "\\times" + radius1  + "\\]";
        area1temp += "\\[Area \\space enclosed \\space by \\space Outer \\space circle \\space is \\space " + eval(String(3.14 * radius1 * radius1)) + "\\]";
        area1output.innerHTML = area1temp;
        area2temp += "\\["  + "\\pi" +  "\\times" + radius2 + "\\times"  + radius2  + "\\]";
        area2temp += "\\[Area \\space enclosed \\space by \\space Inner \\space circle \\space is \\space " + eval(String(3.14 * radius2 * radius2)) +  "\\]";
        area2output.innerHTML = area2temp;
        areatemp += "\\["  + "\\pi" +  "\\times" + '(' + radius1 + "\\times"  + radius1   + '-' + radius2 + "\\times" + radius2 +  ')' + "\\]";
        areatemp += "\\[Area \\space of \\space annulus \\space is \\space " + eval(String((3.14 * radius1 * radius1)-(3.14 * radius2 *radius2))) +  "\\]";
        areaoutput.innerHTML = areatemp;
        circum1temp += "\\["  + 2 +  "\\times" + "\\pi " + "\\times" + radius1 + "\\]";
        circum1temp += "\\[Outer \\space cicrumference \\space of \\space annulus \\space is \\space " + eval(String(3.14 * 2* radius1)) +  "\\]";
        circum1output.innerHTML = circum1temp;
        circum2temp += "\\["  + 2 +  "\\times" + "\\pi " + "\\times" + radius2 + "\\]";
        circum2temp += "\\[Inner \\space cicrumference \\space of \\space annulus \\space is \\space " + eval(String(3.14 * 2* radius2)) +  "\\]";
        circum2output.innerHTML = circum2temp;
        renderMathInElement(area1output);
        renderMathInElement(area2output);
        renderMathInElement(areaoutput);
        renderMathInElement(circum1output);
        renderMathInElement(circum2output);
    } else {
        area1output.innerHTML = "";
        area2output.innerHTML = "";
        areaoutput.innerHTML = "";
        circum1output.innerHTML = "";
        circum2output.innerHTML = "";
    }
}

function solveSlope() {
    var x1 = document.getElementById("inputlinex1").value;
    var y1 = document.getElementById("inputliney1").value;
    var x2 = document.getElementById("inputlinex2").value;
    var y2 = document.getElementById("inputliney2").value;

    if (x1 == "" || y1 == "" || x2 == "" || y2 == "") {
        document.getElementById("resultofline").innerHTML = "Please enter all four points";
        document.getElementById("answerofline").innerHTML = "";
        document.getElementById("answerofline2").innerHTML = "";

    } else if (parseInt(x2) - parseInt(x1) == 0) {
        document.getElementById("resultofline").innerHTML = "Infinity";
    } else {
        let temp = (y2 - y1) / (x2 - x1);
        console.log(temp);
        let sol = "\\[Slope=\\frac{" + y2 + "-" + y1 + "}{" + x2 + "-" + x1 + "}\\]";
        let sol2 = "\\[Slope=" + temp + "\\]";
        document.getElementById("resultofline").innerHTML = "\\[Slope=\\frac{y2-y1}{x2-x1}\\]"
        document.getElementById("answerofline").innerHTML = sol;
        document.getElementById("answerofline2").innerHTML = sol2;
        renderMathInElement(document.getElementById("answerofline"));
        renderMathInElement(document.getElementById("answerofline2"));
        renderMathInElement(document.getElementById("resultofline"));
    }

}

// ellipse calculator function

function solveellipse() {
    var a = document.getElementById("inputfirstaxis").value;
    var b = document.getElementById("inputsecondaxis").value;
    var areaoutput = document.getElementById("resultofareae");
    var perimeteroutput = document.getElementById("resultofperimetere");
    var areatemp = "";
    var perimetertemp = "";
    if (a != "" && b != "") {
        var a2 = a * a;
        var b2 = b * b;
        var ans = a2 + b2;
        var anssqrt = nerdamer.sqrt(ans).toString();
        anssqrt = eval(anssqrt).toFixed(3);
        perimetertemp += "\\[P=\\sqrt{2}\\times \\pi \\sqrt{" + a + "^2" + "+" + b + "^2" + "}\\]";
        perimetertemp += "\\[P=\\sqrt{2}\\times \\pi \\sqrt{" + a2 + "+" + b2 + "}\\]";
        perimetertemp += "\\[P=\\sqrt{2}\\times \\pi \\sqrt{" + ans + "}\\]";
        perimetertemp += "\\[P=\\sqrt{2}\\times \\pi \\times" + anssqrt + "\\]";
        perimetertemp += "\\[P=1.414 \\times 3.14 \\times" + anssqrt + "\\]";
        var sol = 1.414 * 3.14 * anssqrt;
        perimetertemp +=
            "\\[Perimeter \\space of \\space Ellipse \\space is \\space" +
            sol +
            "\\]";
        perimeteroutput.innerHTML = perimetertemp;

        areatemp += "\\[A = \\pi \\times" + a + "\\times" + b + " \\]";
        areatemp += "\\[A = \\pi \\times" + eval(String(a * b)) + "\\]";
        areatemp += "\\[A=3.14 \\times " + eval(String(a * b)) + " \\]";
        var ar = eval(String("3.14*" + String(a * b)));
        areatemp += "\\[A=" + ar + " \\]";
        areatemp +=
            "\\[Area \\space of \\space Ellipse \\space is \\space " + ar + "\\]";
        areaoutput.innerHTML = areatemp;
        renderMathInElement(areaoutput);
        renderMathInElement(perimeteroutput);
    } else {
        areaoutput.innerHTML = "";
        perimeteroutput.innerHTML = "";
    }
}


//shapes calculator
//-----------------------------------------------------
//3-D Shapes Calculator
function solvecyl() {
    var height = document.getElementById("inputcylh").value;
    var radius = document.getElementById("inputcylr").value;
    var diameter = 2 * radius;
    var vol = eval(String(3.14159 * radius * radius * height));
    var csa = eval(String(3.14159 * radius * 2 * height));
    var tsa = eval(String((2 * 3.14159 * radius * height) + (2 * 3.14159 * radius * radius))) ;
    var voloutput = document.getElementById("resultofvolcyl");
    var tsaoutput = document.getElementById("resultoftsacyl");
    var csaoutput = document.getElementById("resultofcsacyl");
    var diaout = document.getElementById("resultofcydia");
    var voltemp = "";
    var tsatemp = "";
    var csatemp = "";
    if ((radius != "") && (height != "")) {
        voltemp += "\\[ \\pi \\times " + radius + "^2 \\times " + height + "\\]";
        voltemp += "\\[Volume \\space of \\space Cylinder \\space is \\space " + vol.toFixed(3) + "\\]";
        voloutput.innerHTML = voltemp;

        csatemp += "\\[ 2 \\times \\pi \\times" + radius + "\\times" + height + " \\]";
        csatemp += "\\[Curved \\space Surface \\space Area \\space of \\space Cylinder \\space is \\space \\]";
        csatemp += "\\[" + csa.toFixed(3) + "\\]";
        csaoutput.innerHTML = csatemp;
        tsatemp += "\\[2 \\times \\pi \\times" + radius + "(" + radius + "+" + height + ") \\]";
        tsatemp +=
            "\\[Total \\space Surface \\space Area \\space of \\space Cylinder \\space is \\space  \\]";
        tsatemp += "\\[" + tsa.toFixed(3)+ "\\]";
        diaout.innerHTML = "\\[Diameter \\space of \\space Cylinder \\space is \\space "+diameter.toFixed(3)+"\\]";

        tsaoutput.innerHTML = tsatemp;
        renderMathInElement(voloutput);
        renderMathInElement(tsaoutput);
        renderMathInElement(csaoutput);
        renderMathInElement(diaout);

    } else {
        voloutput.innerHTML = "";
        tsaoutput.innerHTML = "";
        csaoutput.innerHTML = "";
        diaout.innerHTML = "";
    }
}

function solvehollowcyl() {
    var height = document.getElementById("inputhollowcylh").value;
    var radius1 = document.getElementById("inputhollowcylr1").value;
    var radius2 = document.getElementById("inputhollowcylr2").value;
    var voloutput = document.getElementById("resultofvolhollowcyl");
    var tsaoutput = document.getElementById("resultoftsahollowcyl");
    var csaoutput = document.getElementById("resultofcsahollowcyl");
    var voltemp = "";
    var tsatemp = "";
    var csatemp = "";
    if ((radius1 != "") && (radius2 != "") && (height != "")) {
        voltemp += "\\[ \\pi \\times (" + radius1 + "^2 -" + radius2 + "^2 ) \\times" + height + "\\]";
        voltemp += "\\[Volume \\space of \\space hollow \\space hollow \\space Cylinder \\space is \\space " + eval(String(3.14159 * (radius1 * radius1 - radius2 * radius2) * height)) + "\\]";
        voloutput.innerHTML = voltemp;
        csatemp += "\\[2 \\times \\pi \\times" + height + "(" + radius1 + "+" + radius2 + ") \\]";
        csatemp += "\\[Curved \\space Surface \\space Area \\space of \\space hollow \\space Cylinder \\space is \\space \\]";
        csatemp += "\\[" + eval(String(3.14159 * (radius1 + radius2) * 2 * height)) + "\\]";
        csaoutput.innerHTML = csatemp;
        tsatemp += "\\[2 \\times \\pi \\times" + height + "(" + radius1 + "+" + radius2 + ") + \\]";
        tsatemp += "\\[2 \\times \\pi \\times" + "(" + radius1 + "-" + radius2 + ")" + "(" + radius1 + "+" + radius2 + ") \\]"
        tsatemp +=
            "\\[Total \\space Surface \\space Area \\space of \\space hollow \\space Cylinder \\space is \\space  \\]";

        tsatemp += "\\[" + eval(String((2 * 3.14159 * (radius1 + radius2) * height) + (2 * 3.14159 * (radius1 + radius2) * (radius1 - radius2)))) + "\\]";

        tsaoutput.innerHTML = tsatemp;
        renderMathInElement(voloutput);
        renderMathInElement(tsaoutput);
        renderMathInElement(csaoutput);
    } else {
        voloutput.innerHTML = "";
        tsaoutput.innerHTML = "";
        csaoutput.innerHTML = "";
    }
}

function solveelliphollowcyl(){
    var a = document.getElementById("inputelliphollowcyla").value;
    var b = document.getElementById("inputelliphollowcylb").value;
    var h = document.getElementById("inputelliphollowcylh").value;

    var lsa = math.pi * ( parseInt(a) + parseInt(b) ) * h;
    var sa = lsa + 2 * math.pi * a * b;
    var vol = math.pi * h * a * b;

    if ((a != "" ) && (b !="") && (h != "") ){
        document.getElementById('resultoftsahollowcyl1').innerHTML = "\\[Lateral \\space Surface \\space Area \\space (F) \\space is \\]";
        renderMathInElement(document.getElementById('resultoftsahollowcyl1'));
        document.getElementById('resultoftsahollowcyl2').innerHTML = "\\[ \\pi \\times ("+a+"+"+b+") \\times "+h+" \\space = " + lsa.toFixed(3) + "\\]";
        renderMathInElement(document.getElementById('resultoftsahollowcyl2'));
        document.getElementById('resultofcsahollowcyl1').innerHTML = "\\[Surface \\space  Area \\space (S) \\space is \\]";
        renderMathInElement(document.getElementById('resultofcsahollowcyl1'));
        document.getElementById('resultofcsahollowcyl2').innerHTML = "\\["+lsa.toFixed(2)+" + 2 \\times \\pi \\times "+a+"\\times "+b+" =" + sa.toFixed(2) + "\\]";
        renderMathInElement(document.getElementById('resultofcsahollowcyl2'));
        document.getElementById('resultofvolhollowcyl1').innerHTML = "\\[Volume \\space (V) \\space is \\]";
        renderMathInElement(document.getElementById('resultofvolhollowcyl1'));
        document.getElementById('resultofvolhollowcyl2').innerHTML = "\\[\\pi \\times "+a+" \\times "+b+" \\times "+h+" =" + vol.toFixed(3) + "\\]";
        renderMathInElement(document.getElementById('resultofvolhollowcyl2'));
    }
}

function obliquecysolve() {
    var radius = document.getElementById("inputobradius").value;
    var height1 = document.getElementById("inputobheight1").value;
    var height2 = document.getElementById("inputobheight2").value;
    var volume = (3.14*radius*radius*height1 + 3.14*radius*radius*height2)/2;
    var lsa = 3.14*radius*height1 + 3.14*radius*height2;
    var sa = lsa + 3.14*radius*radius + 3.14*radius*Math.sqrt((radius*radius) + ((height1-height2)*(height1-height2))/4);
    if ((radius != "" ) && (height1 !="") && (height2 != "") ){
        document.getElementById('resofobcyvol1').innerHTML = "\\[Volume \\space of \\space Wedge \\space is \\]";
        renderMathInElement(document.getElementById('resofobcyvol1'));
        document.getElementById('resofobcyvol2').innerHTML = "\\[\\pi \\times" + radius + "\\times" + radius + "\\times" + "( \\frac{" + height1 + "+" + height2 + "}{2} ) =" + volume + "\\]";
        renderMathInElement(document.getElementById('resofobcyvol2'));
        document.getElementById('resofobcylsa1').innerHTML = "\\[Lateral \\space Surface \\space Area \\space (F) \\space of \\space Wedge \\space is \\]";
        renderMathInElement(document.getElementById('resofobcylsa1'));
        document.getElementById('resofobcylsa2').innerHTML = "\\[\\pi \\times" + radius +  "(" + height1 + "+" + height2 + ") \\space = " + lsa.toFixed(2) + "\\]";
        renderMathInElement(document.getElementById('resofobcylsa2'));
        document.getElementById('resofobcysa1').innerHTML = "\\[Surface \\space  Area \\space of \\space Wedge \\space is \\]";
        renderMathInElement(document.getElementById('resofobcysa1'));
        document.getElementById('resofobcysa2').innerHTML = "\\[F \\space + \\pi \\times" + radius + "(" + radius + "+" + "\\sqrt{" + radius + "^2" + "+" + "(\\frac{" + height1 + "-" + height2 + "}{2})^2 } ) =" + sa.toFixed(2) + "\\]";
        renderMathInElement(document.getElementById('resofobcysa2'));

    }

}

function solvecube() {
    var side = document.getElementById("inputcuside").value;
    var voloutput = document.getElementById("resultofvolcu");
    var tsaoutput = document.getElementById("resultoftsacu");
    var diagoutput = document.getElementById("resultofdiagonalcu");
    var voltemp = "";
    var tsatemp = "";
    var diagtemp = "";
    if (side != "") {
        voltemp += "\\[" + side + "^3 \\]";
        voltemp += "\\[Volume \\space of \\space cube \\space is \\space " + eval(String(side * side * side)) + "\\]";
        voloutput.innerHTML = voltemp;
        tsatemp += "\\[ 6 \\times " + side + "^2 \\]";
        tsatemp += "\\[Total \\space Surface \\space Area \\space of \\space Cube \\space is \\space \\]";
        tsatemp += "\\[" + eval(String(6 * side * side)) + "\\]";
        tsaoutput.innerHTML = tsatemp;
        diagtemp += "\\[\\sqrt{3} \\times " + side + " \\]";
        diagtemp +=
            "\\[Body \\space Diagnol \\space of \\space Cube \\space is \\space  \\]";
        diagtemp += "\\[" + eval(String(1.732 * side)) + "\\]";
        diagoutput.innerHTML = diagtemp;
        renderMathInElement(voloutput);
        renderMathInElement(tsaoutput);
        renderMathInElement(diagoutput);
    } else {
        voloutput.innerHTML = "";
        tsaoutput.innerHTML = "";
        diagoutput.innerHTML = "";
    }
}

function cubosolve() {
    var length = document.getElementById("inputcubolength").value;
    var breadth = document.getElementById("inputcubobreadth").value;
    var length = document.getElementById("inputcubolength").value;
    var height = document.getElementById("inputcuboheight").value;
    var voloutput = document.getElementById("resultofvolcubo");
    var tsaoutput = document.getElementById("resultoftsacubo");
    var diagoutput = document.getElementById("resultofdiagonalcubo");
    var voltemp = "";
    var tsatemp = "";
    var diagtemp = "";
    if ((length != "") && (breadth != "") && (height != "")) {
        voltemp += "\\[" + length + "\\times" + breadth + "\\times" + height + "\\]";
        voltemp += "\\[Volume \\space of \\space cuboid \\space is \\space " + eval(String(length * breadth * height)) + "\\]";
        voloutput.innerHTML = voltemp;
        tsatemp += "\\[ 2(" + length + "\\times " + breadth + "+" + breadth + "\\times" + height + "+" + height + "\\times" + length + ") \\]";
        tsatemp += "\\[Total \\space Surface \\space Area \\space of \\space Cuboid \\space is \\space \\]";
        tsatemp += "\\[" + eval(String(2 * (length * breadth + breadth * height + height * length))) + "\\]";
        tsaoutput.innerHTML = tsatemp;
        var breadth2 = breadth * breadth;
        var length2 = length * length;
        var height2 = height * height;
        var add = eval(String(breadth2 + length2 + height2));
        var d = nerdamer.sqrt(add).toString();
        diagtemp += "\\[d= \\sqrt{" + length + "^2+" + breadth + "^2+" + height + "^2} \\]";
        diagtemp += "\\[ \\sqrt{" + length2 + "+" + breadth + "+" + height2 + "} \\]";
        diagtemp += "\\[ \\sqrt{" + add + "} \\]";
        diagtemp += "\\[" +
            eval(d).toFixed(3) +
            "\\]";
        diagoutput.innerHTML = diagtemp;
        renderMathInElement(voloutput);
        renderMathInElement(tsaoutput);
        renderMathInElement(diagoutput);
    } else {
        voloutput.innerHTML = "";
        tsaoutput.innerHTML = "";
        diagoutput.innerHTML = "";
    }
}

function solvepartialcy() {
    var height = document.getElementById("inputcyh").value;
    var radius = document.getElementById("inputcyr").value;
    var width = document.getElementById("inputcyw").value;
    var volumeoutput = document.getElementById("resultofcyvol");
    var laoutput = document.getElementById("resultofcyla");
    var baoutput = document.getElementById("resultofcyba");
    var taoutput = document.getElementById("resultofcyta");
    var voltemp = "";
    var latemp = "";
    var batemp = "";
    var tatemp = "";
    var theta = 2 * Math.acos((radius-height)/radius) ;
    var f = 0.5*theta*radius*radius - (radius - height)*Math.sqrt((2*radius*height)-(height*height));
    if ((height != "") && (radius != "") && (width != "")) {
        voltemp += "\\[V \\space = \\space F \\space \\times " + width +  "\\]";
        voltemp += "\\[Volume \\space is \\space : \\space " + eval(String((f * width).toFixed(2))) + "\\]";
        volumeoutput.innerHTML = voltemp;
        renderMathInElement(volumeoutput);
        latemp += "\\[F \\space = \\space \\frac{\\theta}{2}" + "\\times" + radius + "\\times" + radius + "- ("  + radius + "-" + height + ")" + "\\sqrt{" + height + "(2 \\times" + radius + "-" + height + "} )" + "\\]";
        latemp += "\\[ \\theta = 2 cos^{-1}(1-" + "\\frac{" + height + "}{" + radius + "})" + "\\]";
        latemp += "\\[Lateral \\space Area \\space is \\space = \\space " + (f).toFixed(2) + "\\]";
        laoutput.innerHTML = latemp;
        renderMathInElement(laoutput);
        batemp += "\\[S \\space =" + radius + "\\times" +  "\\theta" + "\\times" + width + "\\]";
        batemp += "\\[Bottom \\space Area \\space is \\space = \\space " + eval(String((radius*theta*width).toFixed(2))) + "\\]";
        baoutput.innerHTML = batemp;
        renderMathInElement(baoutput);
        tatemp += "\\[T \\space = 2 \\times" + width + "\\times" + "\\sqrt{"+ height + "\\times" + "(2 \\times " + radius + "-" + height  + "} )" + "\\]";
        tatemp += "\\[Top \\space Area \\space is \\space = \\space " + eval(String((2*width* Math.sqrt((2*radius*height)-(height*height))).toFixed(2))) + "\\]";
        taoutput.innerHTML = tatemp;
        renderMathInElement(taoutput);
    } 
    else {
        volumeoutput.innerHTML = "";
        laoutput.innerHTML = "";
        baoutput.innerHTML = "";
        taoutput.innerHTML = "";
    }
}

function ellipsoidsolve() {

    var a = document.getElementById("inputellipa").value;
    var b = document.getElementById("inputellipb").value;
    var c = document.getElementById("inputellipc").value;

    var voloutput = document.getElementById("resultofvol");
    var tsaoutput = document.getElementById("resultoftsa");
    var voltemp = "";
    var tsatemp = "";
    var vol = 4.18 * a * b* c ;
    var area = 6.343 * (((a**1.6 * b**1.6) + (b**1.6 * c**1.6 ) + (a**1.6 * c**1.6))**0.625);

    if ((a != "") && (b != "") && (c != "")) {
        voltemp += "\\[\\frac{4}{3} \\times \\pi \\times " + a + "\\times" + b + "\\times" + c   + "\\]";
        voltemp += "\\[Volume \\space of \\space Ellipsoid \\space is \\space " + vol.toFixed(3) + "\\]";
        voloutput.innerHTML = voltemp;
        tsatemp += "\\[" + 4 + "\\pi" + "(" + "\\frac{(" + a + "\\times" + b + ")^{1.6}" + "(" + b + "\\times" + c +")^{1.6}" + "(" + a + "\\times" + c + ")^{1.6}}{3}" + " )^{\\frac{1}{1.6}}"   + "\\]";
        tsatemp += "\\[Surface \\space area \\space of \\space Ellipsoid \\space is \\space  \\]";
        tsatemp += "\\[" + area.toFixed(3) + "\\]";
        tsaoutput.innerHTML = tsatemp;
        renderMathInElement(voloutput);
        renderMathInElement(tsaoutput);

    } else {
        voloutput.innerHTML = "";
        tsaoutput.innerHTML = "";
    }
}

//square Prism
function sqprismsolve(){
    var edge = document.getElementById("inputsqprismedge").value;
    var height = document.getElementById("inputsqprismheight").value;
    var area = 2 * edge**2 + 4 * edge * height;
    var volume = edge**2 * height;
    var diagonal = math.sqrt(2 * edge**2 + height**2);
    var voloutput = document.getElementById("resultofvolsqprism");
    var areaoutput1 = document.getElementById("resultofareasqprism1");
    var areaoutput2 = document.getElementById("resultofareasqprism2");
    var diaoutput1 = document.getElementById("resultofdiasqprism1");
    var diaoutput2 = document.getElementById("resultofdiasqprism2");

    if (height!="" && edge!=""){
        voloutput.innerHTML = "\\[Volume \\space of \\space Prism \\space \\space" + edge + "^2 \\times"+height+" = " + volume.toFixed(2) + "\\]";
        renderMathInElement(voloutput);
        areaoutput1.innerHTML = "\\[Area \\space of \\space Square  \\space Prism \\space is \\]";
        areaoutput2.innerHTML = "\\[2 \\times "+edge+"^2 + 4 \\times "+edge+" \\times "+height+" = " + area.toFixed(2) + "\\]";
        renderMathInElement(areaoutput1);
        renderMathInElement(areaoutput2);
        diaoutput1.innerHTML = "\\[Diagonal \\space of \\space Square  \\space Prism \\space is \\]";
        diaoutput2.innerHTML = "\\[\\sqrt{2 \\times "+edge+"^2 + "+height+"^2} = " + diagonal.toFixed(2) + "\\]";
        renderMathInElement(diaoutput1);
        renderMathInElement(diaoutput2);
    }
}

//Traingular Prism
function triprismsolve() {
    var length = document.getElementById("inputtriprismlength").value;
    var breadth = document.getElementById("inputtriprismbreadth").value;
    var height = document.getElementById("inputtriprismheight").value;
    var side = document.getElementById("inputtriprismside").value;
    var voloutput = document.getElementById("resultofvolprism");
    var tsaoutput = document.getElementById("resultoftsaprism");
    var voltemp = "";
    var tsatemp = "";
    if ((length != "") && (breadth != "") && (height != "") && (side != "")) {
        voltemp += "\\[(" + length + "\\times" + breadth + "\\times" + height + ")" + "\\div" + 2 + "\\]";
        voltemp += "\\[Volume \\space of \\space Prism \\space is \\space " + eval(String((length * breadth * height ) / 2)) + "\\]";
        voloutput.innerHTML = voltemp;
        tsatemp += "\\[ " + breadth + "(" + length + "+" + height + ")" + "+" + 2 +  "\\times"  + length + "\\times" + side + "\\]";
        tsatemp += "\\[Surface \\space Area \\space of \\space Prism \\space is \\space" + eval(String((breadth*height) + (breadth *length)+ (2*length*side))) + "\\]";
        tsaoutput.innerHTML = tsatemp;
        renderMathInElement(voloutput);
        renderMathInElement(tsaoutput);
    } else {
        voloutput.innerHTML = "";
        tsaoutput.innerHTML = "";
    }
}

//Pentagonal Prism
function pentprismsolve() {
    var height = document.getElementById("inputpentprismheight").value;
    var edge = document.getElementById("inputpentprismedge").value;
    var voloutput = document.getElementById("resultofvolpentprism");
    var tsaoutput = document.getElementById("resultoftsapentprism");
    var voltemp = "";
    var tsatemp = "";
    if ((height != "") && (edge != "")) {
        voltemp += "\\[" + "\\frac{1}{4}" + "\\times" + "\\sqrt" + "(" + 5 + "(" + 5 + "+" + 2 + "\\times" + "\\sqrt" + 5 + ")" + ")" + "\\times" + edge + "\\times" + edge +  "\\times" + height  + "\\]";
        voltemp += "\\[Volume \\space of \\space Pentagonal \\space Prism \\space is \\space " + eval(String(1.72 * edge * edge* height )) + "\\]";
        voloutput.innerHTML = voltemp;
        tsatemp += "\\[" + 5 + "\\times" + edge + "\\times" + height + "+" + "\\frac{1}{2}" + "\\times" + "\\sqrt" + "(" + 5 + "(" + 5 + "+" + 2 + "\\times" + "\\sqrt" + 5 + ")" + ")" + "\\times" + edge + "\\times" + edge   + "\\]";
        tsatemp += "\\[Surface \\space area \\space of \\space Pentagonal \\space Prism \\space is \\space  \\]";
        tsatemp += "\\[" + eval(String((5 * edge *height) + (3.44 * edge * edge) )) + "\\]";
        tsaoutput.innerHTML = tsatemp;
        renderMathInElement(voloutput);
        renderMathInElement(tsaoutput);
    } else {
        voloutput.innerHTML = "";
        tsaoutput.innerHTML = "";
    }
}
//Hexagonal Prism
function hexprismsolve(){
    var edge = document.getElementById("inputhexprismedge").value;
    var height = document.getElementById("inputhexprismheight").value;
    var voloutput1 = document.getElementById("resultofvolhexprism1");
    var voloutput2 = document.getElementById("resultofvolhexprism2");
    var areaoutput1 = document.getElementById("resultofareahexprism1");
    var areaoutput2 = document.getElementById("resultofareahexprism2");
    var vol = (0.5 * 3 * math.sqrt(3)) * edge**2 * height;
    var area = 6 * edge * height + 3 * math.sqrt(3) * edge**2;
    if ((height != "") && (edge != "")) {
        voloutput1.innerHTML = "\\[Volume \\space of \\space Hexagonal  \\space Prism \\space is \\]";
        voloutput2.innerHTML = "\\[\\frac{3 \\sqrt{3}}{2} \\times" + edge + "\\times" +edge+ "\\times"+height+" = " + vol.toFixed(2) + "\\]";
        renderMathInElement(voloutput1);
        renderMathInElement(voloutput2);
        areaoutput1.innerHTML = "\\[Area \\space of \\space Hexagonal  \\space Prism \\space is \\]";
        areaoutput2.innerHTML = "\\[6 \\times "+edge+"\\times"+height+" + \\space 3 \\sqrt{3} \\times" + edge + "\\times" +edge+" = " + area.toFixed(2) + "\\]";
        renderMathInElement(areaoutput1);
        renderMathInElement(areaoutput2);
    }
}
//Octagonal Prism
function octprismsolve(){
    var edge = document.getElementById("inputoctprismedge").value;
    var height = document.getElementById("inputoctprismheight").value;
    var voloutput1 = document.getElementById("resultofvoloctprism1");
    var voloutput2 = document.getElementById("resultofvoloctprism2");
    var areaoutput1 = document.getElementById("resultofareaoctprism1");
    var areaoutput2 = document.getElementById("resultofareaoctprism2");
    var vol = 2*(1 +math.sqrt(2)) * edge**2 * height;
    var area = 8 * edge * height + 4 * (1 + math.sqrt(2)) * edge**2;
    if ((height != "") && (edge != "")) {
        voloutput1.innerHTML = "\\[Volume \\space of \\space Octagonal  \\space Prism \\space is \\]";
        voloutput2.innerHTML = "\\[2 \\times ( 1 \\space + \\space \\sqrt" + 2 + ") \\times" + edge + "\\times" +edge+ "\\times"+height+" = " + vol.toFixed(2) + "\\]";
        renderMathInElement(voloutput1);
        renderMathInElement(voloutput2);
        areaoutput1.innerHTML = "\\[Area \\space of \\space Octagonal  \\space Prism \\space is \\]";
        areaoutput2.innerHTML = "\\[8 \\times "+edge+"\\times"+height+" + \\space 4( 1 \\space + \\space \\sqrt" + 2 + ")" + edge + "\\times" +edge+" = " + area.toFixed(2) + "\\]";
        renderMathInElement(areaoutput1);
        renderMathInElement(areaoutput2);
    }
}
//Trapezoidal Prism
function traprismsolve() {
    var top = document.getElementById("inputtraprismtop").value;
    var base = document.getElementById("inputtraprismbase").value;
    var height = document.getElementById("inputtraprismheight").value;
    var length = document.getElementById("inputtraprismlength").value;
    var areaoutput = document.getElementById("resultoftraprismarea");   
    var voloutput = document.getElementById("resultoftraprismvol");
    var areatemp = "";
    var voltemp = "";
    if ((top != "") && (base != "") && (height != "") && (length != "")) {
        areatemp += "\\[Area \\space of \\space Trapezium \\space Base \\space is \\space" +  "\\]";
        areatemp += "\\[\\frac{1}{2}" + "\\times" + "(" + top + "+" + base + ")" + "\\times" + height + "=" + eval(String((0.5 * height * top) + (0.5 * height * base))) + "\\]";
        areaoutput.innerHTML = areatemp;

        voltemp += "\\[Volume \\space of \\space Trapezoidal \\space Prism \\space is \\space \\]";
        voltemp += "\\[\\frac{1}{2}" + "\\times" + "(" + top + "+" + base + ")" + "\\times" + height + "\\times" + length + "=" + eval(String((0.5 * height * top * length) + (0.5 * height * base * length))) + "\\]";
        voloutput.innerHTML = voltemp;

        renderMathInElement(areaoutput);
        renderMathInElement(voloutput);

    } else {

        areaoutput.innerHTML = "";
        voloutput.innerHTML = "";    

    }
}
//Decagonal Prism calculator
function decaprismsolve(){
    var edge = document.getElementById("inputdecaprismedge").value;
    var height = document.getElementById("inputdecaprismheight").value;
    var voloutput = document.getElementById("resultofvoldecaprism");
    var laoutput = document.getElementById("resultofareadecaprism");
    var baoutput = document.getElementById("resultofbaseareadecaprism");
    var saoutput = document.getElementById("resultofsadecaprism");
    var vol = 2.5*edge*edge*height*3.077;
    var laarea = 10*edge*height;
    var barea = 2.5*edge*edge*3.077;
    var sarea = laarea + 5*edge*edge*3.077;
    var voltemp ="";
    var batemp="";
    var satemp="";
    var latemp="";
    if ((height != "") && (edge != "")) {
        voltemp += "\\[Volume \\space of \\space Decagonal \\space Prism \\space is \\space \\]";
        voltemp += "\\[\\frac{5}{2}" + "\\times" + edge + "\\times" + edge + "\\times \\sqrt{5 + 2 \\sqrt{5}} \\times" + height +   "=" + eval(String(vol.toFixed(2) )) + "\\]";
        voloutput.innerHTML = voltemp;
        renderMathInElement(voloutput);
        batemp += "\\[Base \\space area \\space of \\space Decagonal \\space Prism \\space is \\space \\]";
        batemp += "\\[\\frac{5}{2}" + "\\times" + edge + "\\times" +  edge + "\\times \\sqrt{5 + 2 \\sqrt{5}}" +   "=" + eval(String(barea.toFixed(2) )) + "\\]";
        baoutput.innerHTML = batemp;
        renderMathInElement(baoutput);
        latemp += "\\[Lateral \\space area \\space of \\space Decagonal \\space Prism \\space is \\space \\]";
        latemp += "\\[10 \\times " + edge + "\\times" + height +   "=" + eval(String(laarea.toFixed(2) )) + "\\]";
        laoutput.innerHTML = latemp;
        renderMathInElement(laoutput);
        satemp += "\\[Surface \\space area \\space of \\space Decagonal \\space Prism \\space is \\space \\]";
        satemp += "\\[10 \\times" + edge + "\\times" + height + "\\times 5 \\times" + edge + "\\times" + edge + "\\times \\sqrt{5 + 2 \\sqrt{5}}" +   "=" + eval(String(sarea.toFixed(2) )) + "\\]";
        saoutput.innerHTML = satemp;
        renderMathInElement(saoutput);
    }
    else {
        baoutput.innerHTML = "";
        laoutput.innerHTML = "";
        saoutput.innerHTML = "";
        voloutput.innerHTML = "";    
    }
}

//Enneagonal Prism calculator
function ennaprismsolve(){
    var edge = document.getElementById("inputennaprismedge").value;
    var height = document.getElementById("inputennaprismheight").value;
    var voloutput = document.getElementById("resultofvolennaprism");
    var laoutput = document.getElementById("resultofareaennaprism");
    var baoutput = document.getElementById("resultofbaseareaennaprism");
    var saoutput = document.getElementById("resultofsaennaprism");
    var vol = 2.25*edge*edge*height*2.747;
    var laarea = 9*edge*height;
    var barea = 2.25*edge*edge*2.747;
    var sarea = laarea + 4.5*edge*edge*2.747;
    var voltemp ="";
    var batemp="";
    var satemp="";
    var latemp="";
    if ((height != "") && (edge != "")) {
        voltemp += "\\[Volume \\space of \\space Enneagonal \\space Prism \\space is \\space \\]";
        voltemp += "\\[\\frac{9}{4}" + "\\times" + edge + "\\times" + edge + "\\times cot(\\frac{180\\degree}{9}) \\times" + height +   "=" + eval(String(vol.toFixed(2) )) + "\\]";
        voloutput.innerHTML = voltemp;
        renderMathInElement(voloutput);
        batemp += "\\[Base \\space area \\space of \\space Enneagonal \\space Prism \\space is \\space \\]";
        batemp += "\\[\\frac{9}{4}" + "\\times" + edge + "\\times" +  edge + "\\times cot(\\frac{180\\degree}{9})" +   "=" + eval(String(barea.toFixed(2) )) + "\\]";
        baoutput.innerHTML = batemp;
        renderMathInElement(baoutput);
        latemp += "\\[Lateral \\space area \\space of \\space Enneagonal \\space Prism \\space is \\space \\]";
        latemp += "\\[9 \\times " + edge + "\\times" + height +   "=" + eval(String(laarea.toFixed(2) )) + "\\]";
        laoutput.innerHTML = latemp;
        renderMathInElement(laoutput);
        satemp += "\\[Surface \\space area \\space of \\space Enneagonal \\space Prism \\space is \\space \\]";
        satemp += "\\[9 \\times" + edge + "\\times" + height + "\\times + \\frac{9}{2} \\times" + edge + "\\times" + edge + "\\times cot(\\frac{180\\degree}{9})" +   "=" + eval(String(sarea.toFixed(2) )) + "\\]";
        saoutput.innerHTML = satemp;
        renderMathInElement(saoutput);
    }
    else {
        baoutput.innerHTML = "";
        laoutput.innerHTML = "";
        saoutput.innerHTML = "";
        voloutput.innerHTML = "";    
    }
}

function eqtrianprismsolve(){
    var a = document.getElementById("inputeqtrianprismedge").value;
    var h = document.getElementById("inputeqtrianprismheight").value;
    var voloutput1 = document.getElementById("resultofvoleqtrianprism1");
    var voloutput2 = document.getElementById("resultofvoleqtrianprism2");
    var areaoutput1 = document.getElementById("resultofareaeqtrianprism1");
    var areaoutput2 = document.getElementById("resultofareaeqtrianprism2");
    var vol = (math.sqrt(3) / 4) * a**2 *h; 
    var area = (math.sqrt(3) / 2) * a**2 + (3 * a * h);
    if ((h != "") && (a != "")) {
        voloutput1.innerHTML = "\\[Volume \\space of \\space Equilateral \\space Prism \\space (V)\\]";
        voloutput2.innerHTML = "\\[\\frac{\\sqrt{3}}{4} \\times "+a+"^2 \\times "+h+" = " + vol.toFixed(2) + "\\]";
        renderMathInElement(voloutput1);
        renderMathInElement(voloutput2);
        areaoutput1.innerHTML = "\\[Area \\space of \\space Equilateral \\space Prism \\space (S)\\]";
        areaoutput2.innerHTML = "\\[\\frac{\\sqrt{3}}{2} \\times "+a+"^2 \\space + \\space 3 \\times "+a+" \\times "+h+" = " + area.toFixed(2) + "\\]";
        renderMathInElement(areaoutput1);
        renderMathInElement(areaoutput2);
    } else{
        voloutput1.innerHTML ="";
        voloutput2.innerHTML = "";
        areaoutput1.innerHTML = "";
        areaoutput2.innerHTML = "";
    }
}

//Obelisk Calculator
function obelisksolve(){
    var a = document.getElementById("inputobebase").value;
    var b = document.getElementById("inputobetran").value;
    var i = document.getElementById("inputobefrus").value;
    var j = document.getElementById("inputobepy").value;
    var h = parseInt(i) + parseInt(j);

    var vol = ( i * [(a**2 + b**2) + math.sqrt(a**2 * b**2) ] + b**2 * j) / 3;
    var lsa = (parseInt(a)+parseInt(b)) * math.sqrt((parseInt(a)-parseInt(b))**2 +(4*i**2) ) + b * math.sqrt(4 * j**2 + b**2);
    var sa = a**2 + lsa;

    if (a!="" && b!="" && i!="" && j!=""){

        document.getElementById("resultofobeheight").innerHTML = "\\[Obelisk \\space height \\space (h) \\space \\newline \\space = "+i+" + "+j+" = "+h+"\\]";
        renderMathInElement(document.getElementById("resultofobeheight"));

        document.getElementById("resultofobevol").innerHTML = "\\[Volume \\space (V) \\space \\newline \\frac{"+i+" \\times [ ("+a+"^2 + "+b+"^2) + \\sqrt{"+a+"^2 \\times "+b+"^2}] + "+b+"^2 \\times "+j+"}{3} \\newline = " + vol.toFixed(2) + "\\]";
        renderMathInElement(document.getElementById("resultofobevol"));

        document.getElementById("resultofobelsa").innerHTML = "\\[Lateral \\space Surface \\space area \\space (L) \\space \\newline  ("+a+"+"+b+") \\times \\sqrt{("+a+"-"+b+")^2 + 4 \\times "+i+"^2 } \\newline + "+b+" \\times \\sqrt{4 \\times "+j+"^2 + "+b+"^2} \\newline \\space = "+lsa.toFixed(3)+"\\]";
        renderMathInElement(document.getElementById("resultofobelsa"));

        document.getElementById("resultofobesa").innerHTML = "\\[Surface \\space area \\space (A) \\space \\newline = \\space  "+a+"^2 + "+lsa.toFixed(2)+" = " + sa.toFixed(2) + "\\]";
        renderMathInElement(document.getElementById("resultofobesa"));
    } else{
        document.getElementById("resultofobeheight").innerHTML = "";
        document.getElementById("resultofobevol").innerHTML = "";
        document.getElementById("resultofobelsa").innerHTML = "";
        document.getElementById("resultofobesa").innerHTML ="";
    }
}

function frustumsolve() {
    var radius1 = document.getElementById("inputfrustumradius1").value;
    var radius2 = document.getElementById("inputfrustumradius2").value;
    var height = document.getElementById("inputfrustumheight").value;
    var voloutput = document.getElementById("resultofvolfrustum");
    var lsaoutput = document.getElementById("resultoflsafrustum");
    var tsaoutput = document.getElementById("resultoftsafrustum");
    var slantoutput = document.getElementById("resultofslantfrustum");
    var voltemp = "";
    var lsatemp = "";
    var tsatemp = "";
    var slanttemp = "";
    if ((radius1 != "") && (radius2 != "") && (height != "")) {
        slanttemp += "\\[ "  +"\\sqrt" + "(" + "(" + radius1 + "-" + radius2  + ")" + "^2" + "+" + height + "^2" + ")" + "\\]";
        slanttemp += "\\[Slant \\space Height \\space of \\space Conical \\space Frustum \\space is \\space \\]";
        slanttemp += "\\[" + eval(String(( Math.sqrt(((radius1-radius2)*(radius1-radius2))+(height*height))))) + "\\]";
        slantoutput.innerHTML = slanttemp;
        lsatemp += "\\[ " + "\\pi" + "(" + radius1 + "+" + radius2 + ")" +"\\sqrt" + "(" + "(" + radius1 + "-" + radius2  + ")" + "^2" + "+" + height + "^2" + ")" + "\\]";
        lsatemp += "\\[Lateral \\space area \\space of \\space Conical \\space Frustum \\space is \\space \\]";
        lsatemp += "\\[" + eval(String((3.14 * radius1+ 3.14*radius2 *  Math.sqrt(((radius1-radius2)*(radius1-radius2))+(height*height))))) + "\\]";
        lsaoutput.innerHTML = lsatemp;
        voltemp += "\\[ " + "\\frac{1}{3}" + "\\times" +"\\pi" + "\\times" + height + "(" + radius1 + "\\times" + radius1 + "+" + radius2 + "\\times" + radius2 + "+" + "(" + radius1 + "+" + radius2 + ")" + ")" + "\\]";
        voltemp += "\\[Volume \\space area \\space of \\space Conical \\space Frustum \\space is \\space \\]";
        voltemp += "\\[" + eval(String(0.33 * 3.14 * height * radius1*radius1 + 0.33*3.14* height*radius2*radius2 + 0.33*3.14*height *radius1*radius2)) + "\\]";
        voloutput.innerHTML = voltemp;
        tsatemp += "\\[ " + "\\pi" + "(" + radius1 + "\\times" + radius1 + "+" + radius2 + "\\times" + radius2 + "+" + "(" + radius1 + "+" + radius2 + ")" + "\\times" +"\\sqrt" + "(" + "(" + radius1 + "-" + radius2  + ")" + "^2" + "+" + height + "^2" + ")" + ")"+ "\\]";
        tsatemp += "\\[Total \\space surface \\space area \\space of \\space Conical \\space Frustum \\space is \\space \\]";
        tsatemp += "\\[" + eval(String(( (3.14 * radius1*radius1) + (3.14*radius2*radius2) + (3.14 * radius1) + (3.14 * radius2 * Math.sqrt(((radius1-radius2)*(radius1-radius2))+(height*height)))))) + "\\]";
        tsaoutput.innerHTML = tsatemp;
        renderMathInElement(voloutput);
        renderMathInElement(lsaoutput);
        renderMathInElement(tsaoutput);
        renderMathInElement(slantoutput);
    } else {
        voloutput.innerHTML = "";
        lsaoutput.innerHTML = "";
        tsaoutput.innerHTML = "";
        slantoutput.innerHTML = "";
    }
}

findFactors = function() {
    var number = document.getElementById("numforfactorhcflcm").value; // Get the number entered by user.
    var integer = parseInt(number); // Convert it to a number since all the inputs are treaded as string by JavaScript.
    var loopCount = integer / 2; // Divide the number in half for which we will run loop, since half of any given number is it's second-largest factor.
    for (var i = 1; i <= loopCount; i++) {
      if (integer % i == 0) // If remainder is 0, then the number is a factor.
        document.getElementById("allfactor").innerHTML += i +","; // Print out the factor
    }
    document.getElementById("allfactor").innerHTML +=  number; // Print out the number itself.
}

function trusqpyramidsolve(){
    var a = document.getElementById("inputtrusqpysidea").value;
    var b = document.getElementById("inputtrusqpysideb").value;
    var h = document.getElementById("inputtrusqpyheight").value;  
    var vol = 1/3 * (a**2 + a*b + b**2) * h;
    var lsa = 2 * (parseInt(a)+parseInt(b)) * math.sqrt( ((parseInt(a)-parseInt(b))/2)**2 + h**2 );
    var sa = lsa + a**2 + b**2;

    if (a!="" && b!="" && h!=""){

        document.getElementById("resultofvolsqpyramid").innerHTML = "\\[Volume \\space of \\space truncated \\space square \\space pyramid \\space \\newline \\frac{1}{3}\\times("+a+"^2 + "+a+"\\times"+b+" + "+b+"^2) \\times "+h+"  = " + vol.toFixed(3) + "\\]";
        renderMathInElement(document.getElementById("resultofvolsqpyramid"));

        document.getElementById("resultoflsasqpyramid").innerHTML = "\\[Lateral \\space Area \\space of \\space square \\space pyramid \\space \\newline 2\\times ("+a+"+"+b+") \\times \\sqrt{ (\\frac{"+a+"-"+b+"}{2})^2 + "+h+"^2 }   = " + lsa.toFixed(3) + "\\]";
        renderMathInElement(document.getElementById("resultoflsasqpyramid"));

        document.getElementById("resultofsasqpyramid").innerHTML = "\\[Surface \\space Area \\space of \\space square \\space pyramid \\space \\newline "+lsa.toFixed(2)+" + "+a+"^2 +  "+b+"^2  = " + sa.toFixed(3) + "\\]";
        renderMathInElement(document.getElementById("resultofsasqpyramid"));
    } else{
        document.getElementById("resultofvolsqpyramid").innerHTML ="";
        document.getElementById("resultoflsasqpyramid").innerHTML = "";
        document.getElementById("resultofsasqpyramid").innerHTML = "";
    }

}

function pyramidsolve() {
    var side = document.getElementById("inputpyramidside").value;
    var height = document.getElementById("inputpyramidheight").value;   
    var voloutput = document.getElementById("resultofvolpyramid");
    var lsaoutput = document.getElementById("resultoflsapyramid");
    var tsaoutput = document.getElementById("resultoftsapyramid");
    var hsfoutput = document.getElementById("resultofhsfpyramid");   
    var voltemp = "";
    var lsatemp = "";
    var tsatemp = "";
    var hsftemp = "";
    if ((side != "") && (height != "")) {
        voltemp += "\\[ (" + side + "\\times" + side + "\\times" + height  + ")" + "\\div" + 3 + "\\]";
        voltemp += "\\[Volume \\space of \\space Square \\space Pyramid \\space is \\space \\]";
        voltemp += "\\[" + eval(String((side * side * height ) / 3)) + "\\]";
        voloutput.innerHTML = voltemp;
        
        lsatemp += "\\[ " + side + "\\sqrt" + "(" + "4" + "\\times" + height  + "\\times" + height + "+" + side + "\\times" + side + ")" + "\\]";
        lsatemp += "\\[Lateral \\space area \\space of \\space Square \\space Pyramid \\space is \\space \\]";
        lsatemp += "\\[" + eval(String((side * Math.sqrt((4 * height * height) + (side *side))))) + "\\]";
        lsaoutput.innerHTML = lsatemp;

        tsatemp += "\\[ " + side + "\\sqrt" + "(" + "4" + "\\times" + height  + "\\times" + height + "+" + side + "\\times" + side + ")" + "+" + side + "\\times" + side + "\\]";
        tsatemp += "\\[Total \\space Surface \\space area \\space of \\space Pyramid \\space is \\space \\]";
        tsatemp += "\\[" + eval(String((side * Math.sqrt((4 * height * height) + (side *side)) + (side*side) ))) + "\\]";
        tsaoutput.innerHTML = tsatemp;
        
        hsftemp += "\\[" + "\\sqrt" + "(" + height + "\\times" + height + "+" + "(" + side + "\\div" + 2 + ")" + "^" + 2 + ")" + "\\]";
        hsftemp += "\\[Height \\space of \\space  side \\space face \\space is \\space \\]";
        hsftemp += "\\[" + eval(String(Math.sqrt((height * height) + ((side/2)*(side/2))))) + "\\]";
        hsfoutput.innerHTML = hsftemp;
       
        renderMathInElement(voloutput);
        renderMathInElement(lsaoutput);
        renderMathInElement(tsaoutput);
        renderMathInElement(hsfoutput);

    } else {
        voloutput.innerHTML = "";
        lsaoutput.innerHTML = "";
        tsaoutput.innerHTML = "";
        hsfoutput.innerHTML = "";      


    }
}

function recpyramidsolve(){
    var l = document.getElementById("inputrecpyramidl").value;
    var w = document.getElementById("inputrecpyramidw").value;
    var h = document.getElementById("inputrecpyramidheight").value;  
    var tsa = l*w + l * (math.sqrt((w * 0.5)**2 + h**2)) + w * (math.sqrt((l * 0.5)**2 + h**2 ));
    var volume = (l * w * h)/3;
    var ba = l * w;
    var lsa = l * (math.sqrt((w * 0.5)**2 + h**2)) + w * (math.sqrt((l * 0.5)**2 + h**2 ));

    var baoutput = document.getElementById("resultofrecbapyramid");
    var tsaoutput = document.getElementById("resultofrectsapyramid");
    var volumeoutput = document.getElementById("resultofrecvolpyramid");
    var lsaoutput = document.getElementById("resultofreclsapyramid");
    var batemp ="";
    var tsatemp = "";
    var voltemp ="";
    var lsatemp = "";

    if (l != "" && w != "" && h !=""){
        voltemp += "\\[ \\frac{" + l + "\\times" + w + "\\times" + h + "}{"+ 3 +"} \\]";
        voltemp += "\\[Volume \\space is \\space = "+volume.toFixed(3)+"\\]";
        volumeoutput.innerHTML = voltemp;

        lsatemp += "\\[ "+l+" \\sqrt{ (\\frac{"+w+"}{2})^2 + "+h+"^2} + "+w+" \\sqrt{ (\\frac{"+l+"}{2})^2 + "+h+"^2 }\\]";
        lsatemp += "\\[Lateral \\space \\space Surface \\space area  \\space is \\space = "+lsa.toFixed(3)+" \\]";
        lsaoutput.innerHTML = lsatemp;

        tsatemp += "\\[ "+l+" \\times"+w+" + "+l+" \\sqrt{ (\\frac{"+w+"}{2})^2 + "+h+"^2} + "+w+" \\sqrt{ (\\frac{"+l+"}{2})^2 + "+h+"^2 }\\]";
        tsatemp += "\\[Surface \\space area \\space is \\space = "+tsa.toFixed(3)+" \\]";
        tsaoutput.innerHTML = tsatemp;

    } else if (l!="" && w!=""){
        batemp += "\\["+l+" \\times "+w+"\\]";
        batemp += "\\[Base \\space Area \\space is \\space = "+ba.toFixed(3)+"\\]";
        baoutput.innerHTML = batemp;
    } else{
        tsaoutput.innerHTML = "";
        volumeoutput.innerHTML ="";
        lsaoutput.innerHTML = "";
        baoutput.innerHTML ="";
    }
    renderMathInElement(volumeoutput);
    renderMathInElement(lsaoutput);
    renderMathInElement(tsaoutput);
    renderMathInElement(baoutput);
}

function tripyramidsolve() {
    var side = document.getElementById("inputtripyramidside").value;
    var slant = document.getElementById("inputtripyramidslant").value;
    var height = document.getElementById("inputtripyramidheight").value;   
    var voloutput = document.getElementById("resultoftrivolpyramid");
    var lsaoutput = document.getElementById("resultoftrilsapyramid");
    var tsaoutput = document.getElementById("resultoftritsapyramid");
    var baseoutput = document.getElementById("resultoftribasepyramid");
    var perioutput =  document.getElementById("resultoftriperipyramid");
    var voltemp = "";
    var lsatemp = "";
    var tsatemp = "";
    var basetemp = "";
    var peritemp = "";
    if ((side != "") && (slant != "") && (height != "")) {
        voltemp += "\\[ (" + "\\sqrt" + 3 + "\\times" + side + "\\times" + side + "\\times" + height  + ")" + "\\div" + "(" + 3 + "\\times" + 4 + ")" +  "\\]";
        voltemp += "\\[Volume \\space of \\space Triangular \\space Pyramid \\space is \\space \\]";
        voltemp += "\\[" + eval(String(( 0.43 *side * side * height ) / 3)) + "\\]";
        voloutput.innerHTML = voltemp;
        
        lsatemp += "\\[ (" + 3 + "\\times" + side + "\\times" + slant + ")" + "\\div" + 2 + "\\]";
        lsatemp += "\\[Lateral \\space \\space Surface \\space area  \\space is \\space"  + eval(String((3 * side * slant)/2)) + "\\]";
        lsaoutput.innerHTML = lsatemp;

        tsatemp += "\\[" + "\\frac{\\sqrt{3}}{4}" + "\\times" + side + "\\times" + side + "+" + "\\frac{1}{2}"  + "\\times" + 3 + "\\times" + side + "\\times" + slant + "\\]";
        tsatemp += "\\[Total \\space Surface \\space area \\space is \\space \\]";
        tsatemp += "\\[" + eval(String((0.433 * side * side)+((3 * side * slant)/2))) + "\\]";
        tsaoutput.innerHTML = tsatemp;
        
        basetemp += "\\[" + "\\frac{\\sqrt{3}}{4}" + "\\times" + side + "\\times" + side  + "\\]";
        basetemp += "\\[Base \\space Area \\space is \\space" + eval(String(0.433 * side * side)) + "\\]";
        baseoutput.innerHTML = basetemp;
        
        peritemp += "\\[" + 3 + "\\times" + side  + "\\]";
        peritemp += "\\[Perimeter \\space of \\space Triangular \\space base \\space is \\space" + eval(String(3 * side)) + "\\]";
        perioutput.innerHTML = peritemp;
       
        renderMathInElement(voloutput);
        renderMathInElement(lsaoutput);
        renderMathInElement(tsaoutput);
        renderMathInElement(baseoutput);
        renderMathInElement(perioutput);

    } else {
        voloutput.innerHTML = "";
        lsaoutput.innerHTML = "";
        tsaoutput.innerHTML = "";
        baseoutput.innerHTML = "";
        perioutput.innerHTML = "";      

    }
}

function eltripyramidsolve() {
    var side = document.getElementById("inputeltripyramidside").value;
    var voloutput = document.getElementById("resultofeltripyrvol");
    var areaoutput = document.getElementById("resultofeltripyrarea");
    var houtput = document.getElementById("resultofeltripyrheight");
    var voltemp = "";
    var areatemp = "";
    var htemp = "";
    if (side != "") {
        voltemp += "\\[ (" + "\\frac{1}{12}(" + "\\sqrt{2}+3\\sqrt{3}" + "))" + "\\times" + side + "\\times" + side + "\\times" + side  + "\\]";
        voltemp += "\\[Volume  \\space is \\space " + eval(String( 0.5508 * side * side * side )) + " \\]";
        voloutput.innerHTML = voltemp;
        
        areatemp += "\\[ (" + 3 + "+" + "\\sqrt{3})" + "\\times" + side + "\\times" + side  +"\\]";
        areatemp += "\\[Area \\space is \\space"  + eval(String(4.732 * side * side)) + "\\]";
        areaoutput.innerHTML = areatemp;

        htemp += "\\[" + side + "\\times (" + "1 + \\frac{\\sqrt{6}}{3} )" + "\\]";
        htemp += "\\[Height \\space is \\space " + eval(String(1.816 * side )) + " \\]";
        houtput.innerHTML = htemp;

       
        renderMathInElement(voloutput);
        renderMathInElement(areaoutput);
        renderMathInElement(houtput);
    } else {
        voloutput.innerHTML = "";
        areaoutput.innerHTML = "";
        houtput.innerHTML = "";
    }
}

function centsolve(){
    var x1 = parseInt(document.getElementById("x1st").value)
    var y1 = parseInt(document.getElementById("y1st").value)
    var x2 = parseInt(document.getElementById("x2nd").value)
    var y2 = parseInt(document.getElementById("y2nd").value)
    var x3 = parseInt(document.getElementById("x3rd").value)
    var y3 = parseInt(document.getElementById("y3rd").value)
    var xans = (x1+x2+x3)/3
    var yans = (y1+y2+y3)/3
    var centout1 = document.getElementById("apk");
    var centemp1 = "";
    if((x1 !="") && (y1 != "") && (x2 !="") && (y2 != "") && (x3 != "") && (y3 != "")){
        centemp1 += "\\[Centroid \\space of \\space a \\space Triangle \\ is \\space ( \\space \\frac{x_1+x_2+x_3}{3} \\space , \\space \\frac{y_1+y_2+y_3}{3} ) \\space \\]";
        centemp1 += "\\[( \\space \\frac{ (" + x1 + ") + (" + x2 + ") + (" + x3 + ") }{3} \\space , \\space \\frac{ (" + y1 + ") + (" + y2 + ") + (" + y3 +  ") }{3} \\space ) \\]";
        centemp1 += "\\[( " + xans.toFixed(3) + "," + yans.toFixed(3) + " )\\]";
        centout1.innerHTML = centemp1;
        renderMathInElement(centout1);
    }
    else{
        centout1.innerHTML = "";
    }
}
//Octagonal pyramid
function octpyramidsolve() {
    var side = document.getElementById("inputoctpyramidside").value;
    var height = document.getElementById("inputoctpyramidheight").value;
    var baseoutput = document.getElementById("resultofoctbasepyramid");  
    var voloutput = document.getElementById("resultofoctvolpyramid");
    var tsaoutput = document.getElementById("resultofocttsapyramid");
    var lsaoutput = document.getElementById("resultofoctlsapyramid");
    var basetemp = "";
    var voltemp = "";
    var lsatemp = "";
    var tsatemp = "";
    if ((side != "") && (height != "")) {
        basetemp += "\\[Base \\space Area \\space is \\space" + "\\]";
        basetemp += "\\[" + 2 + "\\times" + side + "\\times" + side + "\\times" + " \\space cot(22.5 \\degree) \\space" + "=" + eval(String(4.83 * side * side)).toFixed(2) + "\\]";
        baseoutput.innerHTML = basetemp;

        voltemp += "\\[Volume \\space of \\space Octagonal \\space Pyramid \\space is \\space \\]";
        voltemp += "\\[\\frac{2}{3} \\space "+ "\\times" + height + "\\times" + side + "\\times" + side + "\\times" + " \\space cot(22.5 \\degree) \\space" + "=" + eval(String(1.61 * height * side * side)).toFixed(2) +  "\\]";
        voloutput.innerHTML = voltemp;
        
        lsatemp += "\\[Lateral \\space \\space Surface \\space area  \\space is \\space" + "\\]";
        lsatemp += "\\[" + 2 + "\\times" + side + "\\times" + " \\space \\sqrt( " + 4 + "\\times" + height + "\\times" + height+" \\space + \\space" + side + "\\times" +  "\\]";
        lsatemp += "\\[" + side + "\\times" + " \\space cot^2(22.5 \\degree) \\space" + ") = " + eval(String(2 * side * math.sqrt( (4 * height * height) + (5.83 * side * side) ))).toFixed(2) + "\\]";
        lsaoutput.innerHTML = lsatemp;

        tsatemp += "\\[Total \\space Surface \\space area \\space is \\space \\]";
        tsatemp += "\\[" + 2 + "\\times" + side + "\\times" + " \\space \\sqrt( " + 4 + "\\times" + height + "\\times" + height+" \\space + \\space" + side + "\\times" + side + "\\times" + "\\]";
        tsatemp += "\\[" + " \\space cot^2(22.5 \\degree) \\space" + ")" + "+" + side + "\\times" + " \\space cot(22.5 \\degree) \\space" + "=" + eval(String(2 * side * math.sqrt( (4 * height * height) + (5.83 * side * side) ) + 2.41 * side)).toFixed(2) + "\\]";
        tsaoutput.innerHTML = tsatemp;
       
        renderMathInElement(baseoutput);
        renderMathInElement(voloutput);
        renderMathInElement(tsaoutput);
        renderMathInElement(lsaoutput);

    } else {
        baseoutput.innerHTML = ""; 
        voloutput.innerHTML = "";
        tsaoutput.innerHTML = "";
        lsaoutput.innerHTML = "";  

    }
}
//Pentagonal Pyramid
function pentpyramidsolve(){
    var side = document.getElementById("inputpentpyramidside").value;
    var height = document.getElementById("inputpentpyramidheight").value; 
    var voloutput1 = document.getElementById("resultofpentvolpyramid1");
    var voloutput2 = document.getElementById("resultofpentvolpyramid2");
    var areaoutput1 = document.getElementById("resultofpentareapyramid1");
    var areaoutput2 = document.getElementById("resultofpentareapyramid2");
    var areaoutput3 = document.getElementById("resultofpentareapyramid3");
    var vol = (5/12) * (1.3763819 * height * side * side);
    var area = (5/4) * 1.3763819 * side * side + 5 * (side/2) * math.sqrt(height * height + ((side * 1.3763819)/2)**2);
    console.log("vol");
    console.log(vol);
    console.log("area");
    console.log(area);
    if ((height != "") && (side != "")) {
        voloutput1.innerHTML = "\\[Volume \\space of \\space Pentagonal  \\space Pyramid \\space is \\]";
        voloutput2.innerHTML = "\\[\\frac{5}{12} \\space tan(54 \\degree) \\space "+height+"\\times "+side+" \\times "+side+" = " + vol.toFixed(2) +"\\]";
        renderMathInElement(voloutput1);
        renderMathInElement(voloutput2);
        areaoutput1.innerHTML = "\\[Area \\space of \\space Pentagonal  \\space Pyramid \\space is \\]";
        areaoutput2.innerHTML = "\\[\\frac{5}{4} \\space tan(54 \\degree) \\space "+side+"\\times "+side+" \\space + \\frac{5\\times "+side+"}{2} \\times \\]";
        areaoutput3.innerHTML = "\\[\\sqrt("+height+"\\times "+height+" \\space + \\space (\\frac{"+side+" \\times tan(54 \\degree)}{2})^2) = "+area.toFixed(2)+"\\]";
        renderMathInElement(areaoutput1);
        renderMathInElement(areaoutput2);
        renderMathInElement(areaoutput3);
    }
}

//pentagonal Bipyramid
function pentbipyramidsolve() {
    var side = document.getElementById("inputpentbipyramidside").value;
    var voloutput = document.getElementById("resultofpentbipyrvol");
    var areaoutput = document.getElementById("resultofpentbipyrarea");
    var houtput = document.getElementById("resultofpentbipyrheight");
    var voltemp = "";
    var areatemp = "";
    var htemp = "";
    if (side != "") {
        voltemp += "\\[ (" + "\\frac{5+\\sqrt{5}}{12}" + ")" + "\\times" + side + "\\times" + side + "\\times" + side  + "\\]";
        voltemp += "\\[Volume  \\space is \\space " + eval(String( 0.603 * side * side * side )) + " \\]";
        voloutput.innerHTML = voltemp;
        
        areatemp += "\\[ (" + "\\frac{5\\sqrt{3}}{2}" + ")" + "\\times" + side + "\\times" + side  +"\\]";
        areatemp += "\\[Area \\space is \\space"  + eval(String(4.33 * side * side)) + "\\]";
        areaoutput.innerHTML = areatemp;

        htemp += "\\[" + side + "\\times (" + "\\sqrt{2-\\frac{2}{\\sqrt{5}}} )" + "\\]";
        htemp += "\\[Height \\space is \\space " + eval(String(1.816 * side )) + " \\]";
        houtput.innerHTML = htemp;

       
        renderMathInElement(voloutput);
        renderMathInElement(areaoutput);
        renderMathInElement(houtput);
    } else {
        voloutput.innerHTML = "";
        areaoutput.innerHTML = "";
        houtput.innerHTML = "";
    }
}

//Hexagonal Pyramid
function hexpyramidsolve() {
    var base = document.getElementById("inputhexpyramidbase").value;
    var apothem = document.getElementById("inputhexpyramidapothem").value;
    var slant = document.getElementById("inputhexpyramidslant").value;
    var height = document.getElementById("inputhexpyramidheight").value;   
    var voloutput = document.getElementById("resultofhexvolpyramid");
    var lsaoutput = document.getElementById("resultofhexlsapyramid");
    var tsaoutput = document.getElementById("resultofhextsapyramid");
    var baseoutput = document.getElementById("resultofhexbasepyramid");
    var perioutput =  document.getElementById("resultofhexperipyramid");
    var voltemp = "";
    var lsatemp = "";
    var tsatemp = "";
    var basetemp = "";
    var peritemp = "";
    if ((base != "") && (apothem != "") && (slant != "") && (height != "")) {
        basetemp += "\\[Base \\space Area \\space is \\space" +  "\\]";
        basetemp += "\\[" + 3 + "\\times" + apothem + "\\times" + base + "=" + eval(String(3 * apothem * base)) + "\\]";
        baseoutput.innerHTML = basetemp;

        voltemp += "\\[Volume \\space of \\space Hexagonal \\space Pyramid \\space is \\space \\]";
        voltemp += "\\[" + apothem + "\\times" + base + "\\times" + height + "=" + eval(String(apothem * base * height )) + "\\]";
        voloutput.innerHTML = voltemp;

        tsatemp += "\\[Total \\space Surface \\space area \\space is \\space \\]";
        tsatemp += "\\[" + 3 + "\\times" + base + "\\times" + "(" + apothem + "+" + slant + ")" + "=" + eval(String( (3 * apothem * base)+(3 * base * slant) )) + "\\]";
        tsaoutput.innerHTML = tsatemp;
        
        peritemp += "\\[Perimeter \\space of \\space Hexagonal \\space base \\space is \\space" + "\\]";
        peritemp += "\\[" + 6 + "\\times" + base + "=" + eval(String(6 * base)) + "\\]";
        perioutput.innerHTML = peritemp;

        lsatemp += "\\[Lateral \\space \\space Surface \\space area  \\space is \\space"  + "\\]";
        lsatemp += "\\[ (" + 6 + "\\times" + base + "\\times" + slant + ")" + "\\div" + 2 + "=" + eval(String((6 * base * slant)/2)) + "\\]";
        lsaoutput.innerHTML = lsatemp;
       
        renderMathInElement(voloutput);
        renderMathInElement(lsaoutput);
        renderMathInElement(tsaoutput);
        renderMathInElement(baseoutput);
        renderMathInElement(perioutput);

    } else {
        voloutput.innerHTML = "";
        lsaoutput.innerHTML = "";
        tsaoutput.innerHTML = "";
        baseoutput.innerHTML = "";
        perioutput.innerHTML = "";      

    }
}


function wedgesolve() {
    var side = document.getElementById("inputwedgeside").value;
    var width = document.getElementById("inputwedgewidth").value;
    var topside = document.getElementById("inputwedgetopside").value;
    var height = document.getElementById("inputwedgeheight").value;
    var volume = (2*side*width*height + width*height*topside)/6;
    var temp = Math.sqrt((4*height*height) + (width*width));
    var temp1 = Math.sqrt((height*height) + (side*side) + (topside*topside) - (2*side*topside));
    var lsa= ((temp*side)+ (temp*topside))/2  + width*temp1;
    var sa = lsa + side*width;
    if ((side != "" ) && (width !="") && (topside != "") && (height != "")){
        document.getElementById('resofwedgevol1').innerHTML = "\\[Volume \\space of \\space Wedge \\space is \\]";
        renderMathInElement(document.getElementById('resofwedgevol1'));
        document.getElementById('resofwedgevol2').innerHTML = "\\[ \\frac{" + width + "\\times" + height + "}{6}(2 \\times" + side + "+" + topside + ") =" + volume + "\\]";
        renderMathInElement(document.getElementById('resofwedgevol2'));
        document.getElementById('resofwedgelsa1').innerHTML = "\\[Lateral \\space Surface \\space Area \\space (F) \\space of \\space Wedge \\space is \\]";
        renderMathInElement(document.getElementById('resofwedgelsa1'));
        document.getElementById('resofwedgelsa2').innerHTML = "\\[ \\frac{" + side + "\\times" + topside + "}{2} \\sqrt{4 \\times" + height + "\\times" + height + "+" + width + "\\times" + width + "} +" + width + "\\sqrt{" + height + "\\times" + height + "+(" + side + "-" + topside + ")^2} = " + lsa.toFixed(2) + "\\]";
        renderMathInElement(document.getElementById('resofwedgelsa2'));
        document.getElementById('resofwedgesa1').innerHTML = "\\[Surface \\space  Area \\space of \\space Wedge \\space is \\]";
        renderMathInElement(document.getElementById('resofwedgesa1'));
        document.getElementById('resofwedgesa2').innerHTML = "\\[F \\space + " + side + "\\times" + width + "=" + sa.toFixed(2) + "\\]";
        renderMathInElement(document.getElementById('resofwedgesa2'));
    
    }

}

function solvesphere() {
    var radius = document.getElementById("inputradiussph").value;

    var voloutput = document.getElementById("resultofvolsp");
    var tsaoutput = document.getElementById("resultoftsasp");
    var diaoutput = document.getElementById("resultofdimsp");
    var voltemp = "";
    var tsatemp = "";
    var diatemp = "";
    var a = eval(String((4 * 3.14159 * radius * radius * radius) / 3));
    var b = eval(String(4 * 3.14159 * radius * radius));
    if (radius != "") {
        voltemp += "\\[ \\frac{4}{3} \\times \\pi \\times " + radius + "^3 \\]";
        voltemp += "\\[Volume \\space of \\space Sphere \\space is \\space " + a.toFixed(3) + "\\space cm^3\\]";
        voloutput.innerHTML = voltemp;
        tsatemp += "\\[4 \\times \\pi \\times" + radius + "^2 \\]";
        tsatemp +=
            "\\[Total \\space Surface \\space Area \\space of \\space Sphere \\space is \\space  \\]";
        tsatemp += "\\[" + b.toFixed(3) + "\\space cm^2\\]";
        tsaoutput.innerHTML = tsatemp;
        diatemp += "\\[2 \\times" + radius + "\\]";
        diatemp += "\\[Diameter \\space of \\space a \\space Sphere \\space is \\space \\]";
        diatemp += "\\[" + eval(String(2 * radius)) + "\\space cm \\]";
        diaoutput.innerHTML = diatemp;
        renderMathInElement(voloutput);
        renderMathInElement(tsaoutput);
        renderMathInElement(diaoutput);
    } else {
        voloutput.innerHTML = "";
        tsaoutput.innerHTML = "";
        diaoutput.innerHTML = "";
    }
}

function solvehollowsphere() {
    var radius1 = document.getElementById("inputradius1hollowsph").value;
    var radius2 = document.getElementById("inputradius2hollowsph").value;
    var voloutput = document.getElementById("resultofvolhollowsp");
    var tsaoutput = document.getElementById("resultoftsahollowsp");
    var voltemp = "";
    var tsatemp = "";
    if (radius1 != "" && radius2 != "") {
		if(radius1 <= radius2)
		{
			tsatemp="Outer radius should be greater than inner radius";
		}
		else{
        voltemp += "\\[ \\frac{4}{3} \\times \\pi \\times (" + radius1 + "^3-" + radius2 + "^3) \\]";
        voltemp += "\\[Volume \\space of \\space Hollow \\space Sphere \\space is \\space " + eval(String(4 * 3.14159 * ((radius1 * radius1 * radius1) - (radius2 * radius2 * radius2)) / 3)) + "\\]";
        voloutput.innerHTML = voltemp;
        tsatemp += "\\[4 \\times \\pi \\times" + radius1 + "^2 -" + radius2 + "^2 \\]";
        tsatemp +=
            "\\[Total \\space Surface \\space Area \\space of \\space Hollow \\space Sphere \\space is \\space  \\]";
        tsatemp += "\\[" + eval(String(4 * 3.14159 * ((radius1 * radius1) - (radius2 * radius2)))) + "\\]";
		}
        tsaoutput.innerHTML = tsatemp;
        renderMathInElement(voloutput);
        renderMathInElement(tsaoutput);	
    } else {
        voloutput.innerHTML = "";
        tsaoutput.innerHTML = "";
    }
}

function solvepartialsphere() {
    var height = document.getElementById("parsphh").value;
    var radius = document.getElementById("parsphr").value;
    var volumeoutput = document.getElementById("resultofparspvol");
    var radoutput = document.getElementById("resultofparsprad");
    var baoutput = document.getElementById("resultofparspba");
    var saoutput = document.getElementById("resultofparspsa");
    var voltemp = "";
    var radtemp = "";
    var batemp = "";
    var satemp = "";
    var c = Math.sqrt((2*radius*height)-(height*height));
    if ((height != "") && (radius != "")) {
        radtemp += "\\[ c = \\sqrt{" + height + "\\times(2\\times" + radius + "-" + height + ")}" + "\\]";
        radtemp += "\\[Radius \\space of \\space bottom \\space is \\space = \\space " + (c).toFixed(2) + "\\]";
        radoutput.innerHTML = radtemp;
        renderMathInElement(radoutput);
        voltemp += "\\[ V = \\frac{\\pi}{6}" + "\\times" + height + "\\times(3 \\times c^2 +" + height + "\\times" + height + ")"  + "\\]";
        voltemp += "\\[Volume \\space is \\space = \\space " + ((0.52*height*3*c*c) + (0.52*height*height*height)).toFixed(2) + "\\]";
        volumeoutput.innerHTML = voltemp;
        renderMathInElement(volumeoutput);
        batemp += "\\[ B = \\pi \\times (\\sqrt{" + height + "\\times(2\\times" + radius + "-" + height + ")})^2"  + "\\]";
        batemp += "\\[Bottom \\space Area \\space is \\space " + eval(String(3.14*c*c)) + "\\]";
        baoutput.innerHTML = batemp;
        renderMathInElement(baoutput);
        satemp += "\\[ S = 2 \\times \\pi \\times" + radius + "\\times" + height + "\\]";
        satemp += "\\[Surface \\space Area \\space is \\space " + eval(String(2*3.14*radius*height)) + "\\]";
        saoutput.innerHTML = satemp;
        renderMathInElement(saoutput);


    } 
    else {
        radoutput.innerHTML = "";
        volumeoutput.innerHTML = "";
        baoutput.innerHTML = "";
        saoutput.innerHTML = "";
    }
}


function solvehemisphere() {
    var radius = document.getElementById("inputradiushemisph").value;

    var voloutput = document.getElementById("resultofvolhemisp");
    var tsaoutput = document.getElementById("resultoftsahemisp");
    var voltemp = "";
    var tsatemp = "";
    if (radius != "") {
        voltemp += "\\[ \\frac{2}{3} \\times \\pi \\times " + radius + "^3 \\]";
        voltemp += "\\[Volume \\space of \\space HemiSphere \\space is \\space " + eval(String((2 * 3.14159 * radius * radius * radius) / 3)) + "\\]";
        voloutput.innerHTML = voltemp;
        tsatemp += "\\[3 \\times \\pi \\times" + radius + "^2 \\]";
        tsatemp +=
            "\\[Total \\space Surface \\space Area \\space of \\space HemiSphere \\space is \\space  \\]";
        tsatemp += "\\[" + eval(String(3 * 3.14159 * radius * radius)) + "\\]";
        tsaoutput.innerHTML = tsatemp;
        renderMathInElement(voloutput);
        renderMathInElement(tsaoutput);
    } else {
        voloutput.innerHTML = "";
        tsaoutput.innerHTML = "";
    }
}

function solveCone() {
    var height = document.getElementById("inputhcone").value;
    var radius = document.getElementById("inputrcone").value;

    var voloutput = document.getElementById("resultofvolcone");
    var tsaoutput = document.getElementById("resultoftsacone");
    var csaoutput = document.getElementById("resultofcsacone");
    var shoutput = document.getElementById("resultofshcone");
    var add2 = eval(String(radius**2 + height**2));
    var l = math.sqrt(radius**2 + height**2)
    var vol = ((3.1415 * radius * radius * height) / 3).toFixed(3);
    var voltemp = "";
    var tsatemp = "";
    var csatemp = "";
    var ltemp = "";
    if ((radius != "") && (height != "")) {
        voltemp += "\\[ \\frac{1}{3} \\times \\pi \\times " + radius + "^2 \\times " + height + "\\]";
        voltemp += "\\[Volume \\space of \\space Cone \\space is \\space " + eval(String(vol)) + "\\]";
        voloutput.innerHTML = voltemp;
        csatemp += "\\[ \\pi \\times" + radius + "\\times" + l.toFixed(3) + " \\]";
        csatemp += "\\[Curved \\space Surface \\space Area \\space of \\space Cone \\space is \\space \\]";
        csatemp += "\\[" + eval(String(3.14159 * radius * eval(l).toFixed(3))) + "\\]";
        csaoutput.innerHTML = csatemp;
        tsatemp += "\\[ \\pi \\times" + radius + "(" + radius + "+" + l + ")\\]";
        tsatemp +=
            "\\[Total \\space Surface \\space Area \\space of \\space Cone \\space is \\space  \\]";
        tsatemp += "\\[" + eval(String((3.14159 * radius * eval(l).toFixed(3)) + (3.14159 * radius * radius))) + "\\]";
        tsaoutput.innerHTML = tsatemp;
        ltemp += "\\[l= \\sqrt{" + radius + "^2+" + height + "^2} \\]";
        ltemp += "\\[ \\sqrt{" + radius**2 + "+" + height**2 + "} \\]";
        ltemp += "\\[ \\sqrt{" + add2 + "} \\]";
        ltemp += "\\[" +
            eval(l).toFixed(3) +
            "\\]";
        shoutput.innerHTML = ltemp;
        renderMathInElement(voloutput);
        renderMathInElement(tsaoutput);
        renderMathInElement(csaoutput);
        renderMathInElement(shoutput);
    } else {
        voloutput.innerHTML = "";
        tsaoutput.innerHTML = "";
        csaoutput.innerHTML = "";
        shoutput.innerHTML = "";
    }
}

function torussolve() {
    var radius1 = document.getElementById("inputmajorradiustorus").value;
    var radius2 = document.getElementById("inputminorradiustorus").value;
    var voloutput = document.getElementById("resultofvoltorus");
    var tsaoutput = document.getElementById("resultoftsatorus");
    var voltemp = "";
    var tsatemp = "";
    var area = (2 * math.pi * radius1 ) * (2 * math.pi * radius2);
    var vol = (math.pi * radius2 * radius2) * (2 * math.pi * radius1);
    if ( radius1 != "" && radius2 != "") {
        voltemp += "\\[ ( \\pi \\times" + radius2 + "^2 ) \\times ( 2 \\times \\pi \\times " + radius1 + " ) \\]";
        voltemp += "\\[Volume \\space of \\space Torus  \\space is \\space " +vol.toFixed(3)+ "\\]" ;
        voloutput.innerHTML = voltemp;
        tsatemp += "\\[(2 \\times \\pi \\times "+radius1+")(2 \\times \\pi  \\times "+radius2+")\\]";
        tsatemp +=
            "\\[Total \\space Surface \\space Area \\space of  \\space Torus \\space is \\space  \\]";
        tsatemp += "\\[" + area.toFixed(3) + "\\]";
        tsaoutput.innerHTML = tsatemp;
        renderMathInElement(voloutput);
        renderMathInElement(tsaoutput);
    } else {
        voloutput.innerHTML = "";
        tsaoutput.innerHTML = "";
    }
  }

function solvendimsphere() {
    var g = 7;
var C = [0.99999999999980993, 676.5203681218851, -1259.1392167224028,771.32342877765313, -176.61502916214059, 12.507343278686905, -0.13857109526572012, 9.9843695780195716e-6, 1.5056327351493116e-7];

function gamma(z) {

    if (z < 0.5) return Math.PI / (Math.sin(Math.PI * z) * gamma(1 - z));
    else {
        z -= 1;

        var x = C[0];
        for (var i = 1; i < g + 2; i++)
        x += C[i] / (z + i);

        var t = z + g + 0.5;
        return Math.sqrt(2 * Math.PI) * Math.pow(t, (z + 0.5)) * Math.exp(-t) * x;
    }
}
    var radius = document.getElementById("inputndimsphereradius").value;
    var dim = document.getElementById("inputndimspheredimension").value;
    var volOutputTitle = document.getElementById("resultofndimspherevol1");
    var volOutputMain = document.getElementById("resultofndimspherevol2");
    var areaOutputTitle = document.getElementById("resultofndimspherearea1");
    var areaOutputMain = document.getElementById("resultofndimspherearea2");
    var ansVol = (Math.pow(Math.PI, (dim/2))* Math.pow(radius, dim))/(gamma((dim/2)+1));
    var ansArea = (2*Math.pow(Math.PI, (dim/2))* Math.pow(radius, dim-1))/(gamma(dim/2));
    console.log("vol");
    console.log(ansVol);
    console.log("area");
    console.log(ansArea);
    if ((dim != "") && (radius != "")) {
        volOutputTitle.innerHTML = "\\[Volume \\space of \\space Sphere \\space in \\space n \\space dimension \\space is \\]";
        volOutputMain.innerHTML = "\\[\\frac{\\pi ^{\\frac{"+dim+"}{2}}"+radius+"^{"+dim+"}}{\\Gamma \\left ( \\frac{"+dim+"}{2}+1 \\right )} = "+ansVol.toFixed(3)+"\\]";
        renderMathInElement(volOutputTitle);
        renderMathInElement(volOutputMain);
        areaOutputTitle.innerHTML = "\\[Surface \\space Area \\space of \\space Sphere \\space in \\space n \\space dimension \\space is \\]";
        areaOutputMain.innerHTML = "\\[\\frac{2\\pi ^{\\frac{"+dim+"}{2}}"+radius+"^{"+dim+"-1}}{\\Gamma \\left ( \\frac{n}{2} \\right )} = "+ansArea.toFixed(3)+"\\]";
        renderMathInElement(areaOutputTitle);
        renderMathInElement(areaOutputMain);
    }
}
  
//display inputted equation
function dequation() {
    var val = document.getElementById("inputequation").value;
    val = nerdamer(val).toTeX();
    katex.render(val, document.getElementById("displayequation"), {
        throwOnError: false,
    });
}

//display inputted equation

//simplify equation
function ssimplifyequation(input, output) {
    var val = document.getElementById(input).value;
    var sol = nerdamer("simplify(" + String(val) + ")");
    sol = nerdamer(sol).toTeX();
    katex.render("Simplified:\\newline " + sol, document.getElementById(output), {
        throwOnError: false,
    });
}

//simplify equation

//expand equation
function sequationexpand(input, output) {
    var val = document.getElementById(input).value;
    var sol;
    var x = nerdamer(val);
    sol = x.expand().toString();
    sol = nerdamer(sol).toTeX();
    katex.render("Expanded:\\newline " + sol, document.getElementById(output), {
        throwOnError: false,
    });
}

//expand equation

//solve for variables of multiple equations
function generateinputfields(value) {
    removeall("equationsmany");
    for (var i = 0; i < value; i++) {
        var inp = document.createElement("input");
        inp.id = "eq" + eval(String(i + 1));
        inp.placeholder = "Equation " + eval(String(i + 1));
        inp.className = "form__field";
        inp.type = "text";
        document.getElementById("equationsmany").appendChild(inp);
    }
}

function sequationsolver(output) {
    var sol;
    var ar = [];
    for (
        var i = 0;
        i < document.getElementById("numberofequationfields").value;
        i++
    ) {
        ar[i] = document.getElementById("eq" + eval(String(i + 1))).value;
    }
    nerdamer.set("SOLUTIONS_AS_OBJECT", false);
    ar = ar.join(",");
    try {
        sol = nerdamer("solveEquations([" + ar + "])");
        sol = sol.toString();
        sol = sol.slice(0, -1);
        sol = sol.slice(1, sol.length);
        sol = sol.split(",");
        var temp = "";
        for (var i = 0; i <= sol.length / 2 + 1; i += 2) {
            temp += "\\[" + sol[i] + "=" + sol[i + 1] + "\\]";
        }
        document.getElementById(output).innerHTML = temp;
        renderMathInElement(document.getElementById(output));
    } catch (e) {
        document.getElementById(output).innerHTML =
            "Sorry! cannot Compute for these values.";
    }
}

//solve for variables of multiple equations

//call
function equationmagic() {
    var input = "inputequation";
    ssimplifyequation(input, "resultsimplifyequation");
    sequationexpand(input, "resultexpandequation");
}

//-----------------------------------------------------

//-----------------------------------------------------
//plotting graphs
function plotit(input, output, funcname) {
    var val = funcname;
    document.getElementById(output).innerHTML = "";

    function draw() {
        try {
            //val=val.replace(/s/g, 'x');
            // compile the expression once
            const expression = val;
            const expr = math.compile(expression);
            // evaluate the expression repeatedly for different values of x
            const xValues = math.range(-10, 10, 0.5).toArray();
            const yValues = xValues.map(function (x) {
                return expr.evaluate({x: x});
            });
            // render the plot using plotly
            const trace1 = {
                x: xValues,
                y: yValues,
                type: "scatter",
            };
            const data = [trace1];
            Plotly.newPlot(output, data);
        } catch (err) {
            document.getElementById(output).innerHTML =
                "<span style='color:red;'>Only PLOT for Single Variable 'x'</span><br>";
            document.getElementById(output).innerHTML += "Sorry! Can't Plot because ";
            document.getElementById(output).innerHTML += "<b><u>" + err + "</u></b>";
        }
    }

    draw();
}

//plotting graphs
//-----------------------------------------------------

//-----------------------------------------------------
//display inputted equation for plotting graph
function dploteq() {
    var value = document.getElementById("inputplotequation").value;
    value = nerdamer(value).toTeX();
    katex.render(value, document.getElementById("plotgrapheqdisplay"), {
        throwOnError: false,
    });
}

//display inputted equation for plotting graph
//-----------------------------------------------------

//-----------------------------------------------------
//display inputted integral equation
function dint() {
    var lowerli = document.getElementById("lowerlimit").value;
    var upperli = document.getElementById("upperlimit").value;
    if (integralvar == "") {
        integralvar = "x";
    }
    var value = document.getElementById("inputintegral").value;
    var x = nerdamer(value);
    var value = x.toTeX();
    if (checkit == "" || checkit == "notok") {
        lowerli = "";
        upperli = "";
    } else {
        if (lowerli == "" && upperli == "") {
            lowerli = "-\\infty";
            upperli = "\\infty";
        } else if (lowerli != "" && upperli == "") {
            upperli = "\\infty";
        } else if (lowerli == "" && upperli != "") {
            lowerli = "-\\infty";
        }
    }
    katex.render(
        "\\int_{" + lowerli + "}^{" + upperli + "}" + value + "d" + integralvar,
        document.getElementById("resultintegration"),
        {
            throwOnError: false,
        }
    );
}

//display inputted integral equation

//solve integral
function sint() {
    var lowerli = document.getElementById("lowerlimit").value;
    var upperli = document.getElementById("upperlimit").value;
    if (integralvar == "") {
        integralvar = "x";
    }
    if (checkit == "" || checkit == "notok") {
        var t = nerdamer.integrate(
            document.getElementById("inputintegral").value,
            integralvar
        );
        convertkatex(document.getElementById("resultintegration"), t);
        return t.toString();
    } else {
        var t = nerdamer.defint(
            document.getElementById("inputintegral").value,
            lowerli,
            upperli,
            integralvar
        );
        if (lowerli == "") {
            lowerli = "-Infinity";
        }
        if (upperli == "") {
            upperli = "Infinity";
        }
        convertkatex(document.getElementById("resultintegration"), t);
        return t.toString();
    }
}

//solve integral
//-----------------------------------------------------

//-----------------------------------------------------
//display inputted differentiation equation
function ddiff() {
    var value = document.getElementById("inputdifferentiatequation").value;
    var x = nerdamer(value);
    var value = x.toTeX();
    var o = "";
    if (difforder == "") {
        difforder = "1";
    }
    if (diffvariable == "") {
        diffvariable = "x";
    }
    if (diffvariable == "" && difforder == "") {
        o = "\\dfrac{d}{dx}";
    } else if (diffvariable == "" && difforder != "") {
        o = "\\dfrac{d^" + difforder + "}{dx" + difforder + "}";
    } else {
        o = "\\dfrac{d^" + difforder + "}{d" + diffvariable + "^" + difforder + "}";
    }
    katex.render(o + value, document.getElementById("resultdiff"), {
        throwOnError: false,
    });
}

//display inputted differentiation equation

//solve differentiation
function sdiff() {
    var t = String(
        nerdamer.diff(
            document.getElementById("inputdifferentiatequation").value,
            diffvariable,
            difforder
        )
    );
    convertkatex(document.getElementById("resultdiff"), t);
    return t;
}

//solve differentiation
//-----------------------------------------------------

//-----------------------------------------------------
//display inputted partial differentiation equation
function dpardiff() {
    var value = document.getElementById("inputpartialdiff").value;
    getparorder(document.getElementById("inputpartialorder").value);
    var sum = 0;
    var or = pardifforder.match(/\d+/g);
    var po = "";
    if (or == null) {
        if (pardifforder == "") {
            po = "\\frac{\\partial }{\\partial x}";
        } else if (pardifforder != "") {
            var sp = pardifforder.split(",");
            var v;
            var temp = "";
            for (var v of sp) {
                temp += "\\partial " + v;
            }
            po = "\\frac{\\partial }{" + temp + "}";
        }
    } else {
        for (var i of or) {
            sum += parseInt(i);
        }
        if (pardifforder == "") {
            po = "\\frac{\\partial^" + sum + "}{\\partial x}";
        } else if (pardifforder != "") {
            var sp = pardifforder.split(",");
            var v;
            var temp = "";
            for (var v of sp) {
                temp += "\\partial " + v;
            }
            po = "\\frac{\\partial^" + sum + "}{" + temp + "}";
        }
    }

    var x = nerdamer(value);
    value = x.toTeX();
    katex.render(po + value, document.getElementById("resultpardiff"), {
        throwOnError: false,
    });
}

//display inputted partial differentiation equation
//-----------------------------------------------------

//-----------------------------------------------------
//display inputted laplace equation
function dlap() {
    var value = document.getElementById("inputlaplace").value;
    value = nerdamer(value).toTeX();
    var b = "\\mathcal{L}(";
    a = ")";
    katex.render(b + value + a, document.getElementById("resultlaplace"), {
        throwOnError: false,
    });
}

//display inputted laplace equation

//solve laplace
function slap() {
    var value = nerdamer.laplace(
        document.getElementById("inputlaplace").value,
        "t",
        "s"
    );
    var t = value;
    value = nerdamer(value).toTeX();
    katex.render(value, document.getElementById("resultlaplace"), {
        throwOnError: false,
    });

    var ar = t.toString().split("");
    for (var i = 0; i < ar.length; i++) {
        if (ar[i] == "s" && ar[i + 1] == "i") {
            continue;
        } else if (ar[i] == "s" && ar[i - 1] == "o" && ar[i - 2] == "c") {
            continue;
        } else if (ar[i] == "s" && ar[i + 1] == "e" && ar[i + 2] == "c") {
            continue;
        } else if (ar[i] == "s" && ar[i - 1] == "c" && ar[i + 1] == "c") {
            continue;
        } else if (ar[i] == "s") {
            ar[i] = "x";
        }
    }
    ar = ar.join("");
    return ar.toString();
}

//solve laplace

//display inputted inverse laplace equation
function dinvlap() {
    var value = document.getElementById("inputinverselaplace").value;
    value = nerdamer(value).toTeX();
    var b = "\\mathcal{L}(";
    a = ")";
    katex.render(b + value + a, document.getElementById("resultinverselaplace"), {
        throwOnError: false,
    });
}

//display inputted inverse laplace equation

//solve inverse laplace
function sinvlap() {
    var value = nerdamer.ilt(
        document.getElementById("inputinverselaplace").value,
        "s",
        "t"
    );
    var t = value;
    value = nerdamer(value).toTeX();
    katex.render(value, document.getElementById("resultinverselaplace"), {
        throwOnError: false,
    });
    var ar = t.toString().split("");
    for (var i = 0; i < ar.length; i++) {
        if (ar[i] == "t" && ar[i + 1] == "a" && ar[i + 2] == "n") {
            continue;
        } else if (ar[i] == "t" && ar[i - 1] == "c" && ar[i - 2] == "c") {
            continue;
        } else if (ar[i] == "t") {
            ar[i] = "x";
        }
    }
    ar = ar.join("");
    return ar.toString();
}

//solve inverse laplace
//-----------------------------------------------------

//-----------------------------------------------------
//ascending order
function orderas() {
    document.getElementById("orderresult").innerHTML = "";
    var val = document.getElementById("ordergetval").value;
    val=val.trim()
    val = val.match(/(^([-]{0,1}\d{1,}[\.]{0,1}\d{0,}[ ]?)*$)/g);

    if(val==null)
    {
        document.getElementById("orderresult").innerHTML = `Proper input is required`;
        return;
    }

    val = JSON.stringify(val)

    val = val.substring(2,val.length-2)

    val = val.split(" ");
    val = val.filter(function (str) {
        return /\S/.test(str);
    });
    var len = parseInt(val.length);
    for (var i = 0; i <= len - 1; i++) {
        for (var j = 0; j <= len - 1 - i; j++) {
            if (parseFloat(val[j]) > parseFloat(val[j + 1])) {
                temp = parseFloat(val[j]);
                val[j] = parseFloat(val[j + 1]);
                val[j + 1] = temp;
            }
        }
    }
    val = val.join("<");
    if (val.length == 0) {
        document.getElementById("orderresult").innerHTML += "";
    } else {
        document.getElementById("orderresult").innerHTML +=
            "\\[Ascending \\space Order\\]";
        document.getElementById("orderresult").innerHTML += "\\[" + val + "\\]";
        renderMathInElement(document.getElementById("orderresult"));
    }
}

//ascending order

//descending order
function orderde() {
    document.getElementById("orderresult").innerHTML = "";
    var val = document.getElementById("ordergetval").value;
    val=val.trim()
    val = val.match(/(^([-]{0,1}\d{1,}[\.]{0,1}\d{0,}[ ]?)*$)/g);

    if(val==null)
    {
        document.getElementById("orderresult").innerHTML = `Proper input is required`;
        return;
    }

    val = JSON.stringify(val)

    val = val.substring(2,val.length-2)

    val = val.split(" ");
    val = val.filter(function (str) {
        return /\S/.test(str);
    });
    var len = parseInt(val.length);
    for (var i = 0; i <= len - 1; i++) {
        for (var j = 0; j <= len - 1 - i; j++) {
            if (parseFloat(val[j]) < parseFloat(val[j + 1])) {
                temp = parseFloat(val[j]);
                val[j] = parseFloat(val[j + 1]);
                val[j + 1] = temp;
            }
        }
    }

    val = val.join(">");
    if (val.length == 0) {
        document.getElementById("orderresult").innerHTML = "";
    } else {
        document.getElementById("orderresult").innerHTML +=
            "\\[ Descending \\space Order \\]";
        document.getElementById("orderresult").innerHTML += "\\[" + val + "\\]";
        renderMathInElement(document.getElementById("orderresult"));
    }
}

//descending order
//-----------------------------------------------------

//-----------------------------------------------------
function count(s) {
    var id = document.getElementById("interval");
    var count = 0;
    for (var i in s) {
        count++;
    }
    return count;
}

function internationalwords(num) {
    var a = [
        "",
        "one ",
        "two ",
        "three ",
        "four ",
        "five ",
        "six ",
        "seven ",
        "eight ",
        "nine ",
        "ten ",
        "eleven ",
        "twelve ",
        "thirteen ",
        "fourteen ",
        "fifteen ",
        "sixteen ",
        "seventeen ",
        "eighteen ",
        "nineteen ",
    ];
    var b = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    if ((num = num.toString()).length > 9) return "overflow";
    n = ("000000000" + num)
        .substr(-9)
        .match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
    if (!n) return;
    var str = "";
    str +=
        n[1] != 0
            ? (a[Number(n[1])] || b[n[1][0]] + " " + a[n[1][1]]) + "crore "
            : "";
    str +=
        n[2] != 0
            ? (a[Number(n[2])] || b[n[2][0]] + " " + a[n[2][1]]) + "lakh "
            : "";
    str +=
        n[3] != 0
            ? (a[Number(n[3])] || b[n[3][0]] + " " + a[n[3][1]]) + "thousand "
            : "";
    str +=
        n[4] != 0
            ? (a[Number(n[4])] || b[n[4][0]] + " " + a[n[4][1]]) + "hundred "
            : "";
    str +=
        n[5] != 0
            ? (str != "" ? "and " : "") +
            (a[Number(n[5])] || b[n[5][0]] + " " + a[n[5][1]]) +
            "only "
            : "";

    if (count(num) >= 9) {
        document.getElementById("interresult").innerHTML = "Upto 8 digits only";
    } else {
        document.getElementById("interresult").innerHTML = str;
    }
}

//-----------------------------------------------------

//-----------------------------------------------------
//multiplicaion with steps
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
    if (num % 1 != 0) flag = 1; //float
    var countdot = 0;
    var countdotwith = 0;

    if (flag == 1) {
        for (var i = num.length - 1; i >= 0; i--) {
            if (num[i] == ".") {
                break;
            }
            countdot++;
        }
        for (var j = numwith.length - 1; j >= 0; j--) {
            if (numwith[j] == ".") {
                break;
            }
            countdotwith++;
        }
        var v = 0;
        if (countdotwith > countdot && numwith % 1 != 0) {
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
    var mulsol = eval(
        nerdamer(String(numwith) + "*" + String(num))
            .evaluate()
            .toString()
    );
    if (numwith.length > 1) {
        numwith = numwith.split("");
        for (var i = numwith.length - 1; i >= 0; i--) {
            if (numwith[i] == ".") continue;
            if (numwith.length == m.length + 1) {
                var vm = eval(
                    nerdamer(String(numwith[i]) + "*" + String(num))
                        .evaluate()
                        .toString()
                );
                temp += "+ " + String(vm).replace(".", "") + m;
            } else {
                var vm = eval(
                    nerdamer(String(numwith[i]) + "*" + String(num))
                        .evaluate()
                        .toString()
                );
                temp += String(vm).replace(".", "") + m;
            }
            temp += "<br>";
            m += "&times;";
        }
        for (var i = 0; i < String(mulsol).length; i++) {
            line += "_";
        }
    } else {
        //no plus simple multiply
        var mulsol = eval(
            nerdamer(String(numwith) + "*" + String(num))
                .evaluate()
                .toString()
        );
        for (var i = 0; i < String(mulsol).length; i++) {
            line += "_";
        }
    }
    if (numwith.length == 1) {
        r.innerHTML = "";
        r.innerHTML += num + "<br>";
        r.innerHTML += "× " + numwith + "<br>";
        r.innerHTML += line + "<br>";
        r.innerHTML += mulsol + "<br>";
        r.innerHTML += line + "<br>";
    } else {
        r.innerHTML = "";
        r.innerHTML += num + "<br>";
        r.innerHTML += "× " + numwith.join("") + "<br>";
        r.innerHTML += line + "<br>";
        r.innerHTML += temp;
        r.innerHTML += line + "<br>";
        r.innerHTML += mulsol + "<br>";
        r.innerHTML += line + "<br>";
    }
}

//multiplicaion with steps
//-----------------------------------------------------

//-----------------------------------------------------
//roots of quadratic equation
function rootquadratic() {
    var a = parseInt(document.getElementById("coffa").value);
    var b = parseInt(document.getElementById("coffb").value);
    var c = parseInt(document.getElementById("coffc").value);
    var eq = document.getElementById("quadraticequation");
    if (
        a.toString() == NaN.toString() ||
        b.toString() == NaN.toString() ||
        c.toString() == NaN.toString()
    ) {
        var eqval = "";
        if (
            a.toString() != NaN.toString() &&
            b.toString() == NaN.toString() &&
            c.toString() == NaN.toString()
        ) {
            eqval = "\\[f(x)=" + a + "x^2+bx+c\\]";
        }
        if (
            a.toString() == NaN.toString() &&
            b.toString() != NaN.toString() &&
            c.toString() == NaN.toString()
        ) {
            eqval = "\\[f(x)=ax^2+" + b + "x+c\\]";
        }
        if (
            a.toString() == NaN.toString() &&
            b.toString() == NaN.toString() &&
            c.toString() != NaN.toString()
        ) {
            eqval = "\\[f(x)=ax^2+bx+" + c + "\\]";
        }
        if (
            a.toString() != NaN.toString() &&
            b.toString() != NaN.toString() &&
            c.toString() == NaN.toString()
        ) {
            eqval = "\\[f(x)=" + a + "x^2+" + b + "x+c\\]";
        }
        if (
            a.toString() == NaN.toString() &&
            b.toString() != NaN.toString() &&
            c.toString() != NaN.toString()
        ) {
            eqval = "\\[f(x)=ax^2+" + b + "x+" + c + "\\]";
        }
        if (
            a.toString() != NaN.toString() &&
            b.toString() == NaN.toString() &&
            c.toString() != NaN.toString()
        ) {
            eqval = "\\[f(x)=" + a + "x^2+bx+" + c + "\\]";
        }
        if (
            a.toString() == NaN.toString() &&
            b.toString() == NaN.toString() &&
            c.toString() == NaN.toString()
        ) {
            eqval = "\\[f(x)=ax^2+bx+c\\]";
        }
        eq.innerHTML = eqval;
        document.getElementById("rootsquadraticresult").innerHTML = "";
        renderMathInElement(eq);
    } else {
        var eq = document.getElementById("quadraticequation");
        var eqval = "\\[f(x)=" + a + "x^2+" + b + "x+" + c + "\\]";
        eq.innerHTML = eqval;
        renderMathInElement(eq);
        var negativeb = -b;
        var bsquare = b * b;
        var temp = "\\[D= b^2-4ac\\]";
        temp += "\\[D=" + bsquare + "-(4 \\times " + a + " \\times " + c + ") \\]";
        var fourac = 4 * a * c;
        temp += "\\[D=" + bsquare + "-" + fourac + " \\]";
        var bsquareminusfourac = bsquare - fourac;
        temp += "\\[D=" + bsquareminusfourac + " \\]";

        var twoa = 2 * a;
        if (bsquareminusfourac < 0) {
            temp += "\\[D=" + bsquareminusfourac + " < 0\\]";
            temp += "\\[There \\space are \\space no \\space Real \\space Roots \\]";
            temp += "<div class='dropdown-divider'></div>";
            temp += "\\[x=\\frac{-b \\pm \\sqrt{b^2-4   ac}}{2a}\\]";
            temp += "\\[x=\\frac{-b \\pm \\sqrt{D}}{2a}\\]";

            temp +=
                "\\[x=\\frac{" +
                negativeb +
                " \\pm \\sqrt{" +
                bsquareminusfourac +
                "}}{2 \\times" +
                a +
                "}\\]";
            temp +=
                "\\[x=\\frac{" +
                negativeb +
                " \\pm \\sqrt{" +
                -bsquareminusfourac +
                "}i}{" +
                twoa +
                "}\\]";
            var sqrtofdiscriminant = nerdamer.sqrt(-bsquareminusfourac).toString();
            temp +=
                "\\[x=\\frac{" +
                negativeb +
                " \\pm " +
                sqrtofdiscriminant +
                "i}{" +
                twoa +
                "}\\]";
            temp +=
                "\\[x=\\frac{" +
                negativeb +
                " \\pm " +
                eval(sqrtofdiscriminant).toFixed(4) +
                " i}{" +
                twoa +
                "}\\]";
            temp +=
                "<div class='row'>" +
                "<div class='col-6'>" +
                "\\[x=\\frac{" +
                negativeb +
                " + " +
                eval(sqrtofdiscriminant).toFixed(4) +
                " i}{" +
                twoa +
                "}\\]" +
                "</div>" +
                "<div class='col-6'>" +
                "\\[x=\\frac{" +
                negativeb +
                " - " +
                eval(sqrtofdiscriminant).toFixed(4) +
                " i}{" +
                twoa +
                "}\\]" +
                "</div>" +
                "</div>";
        } else if (bsquareminusfourac == 0) {
            temp += "\\[There \\space is \\space one \\space Real \\space Root \\]";
            temp += "<div class='dropdown-divider'></div>";
            temp += "\\[x=\\frac{-b \\pm \\sqrt{b^2-4ac}}{2a}\\]";
            temp += "\\[x=\\frac{-b \\pm \\sqrt{D}}{2a}\\]";
            temp +=
                "\\[x=\\frac{" + negativeb + " \\pm \\sqrt{0}}{2 \\times " + a + "}\\]";
            temp += "\\[x=\\frac{" + negativeb + "}{" + twoa + "}\\]";
            var sol = nerdamer(negativeb / twoa)
                .evaluate()
                .toString();
            temp += "\\[x=" + sol + "\\]";
            if ((negativeb / twoa) % 2 != 0) {
                temp += "\\[x=" + eval(sol) + "\\]";
            }
        } else {
            var sqrtofdiscriminant = nerdamer.sqrt(bsquareminusfourac).toString();
            temp += "\\[D=" + bsquareminusfourac + " > 0\\]";
            sqrtofdiscriminant = eval(sqrtofdiscriminant.toString()).toFixed(4);
            // temp += "\\[D=" + sqrtofdiscriminant + " > 0\\]";
            temp += "\\[There \\space are \\space two \\space Real \\space Roots \\]";
            temp += "<div class='dropdown-divider'></div>";
            temp += "\\[x=\\frac{-b \\pm \\sqrt{b^2-4ac}}{2a}\\]";
            temp += "\\[x=\\frac{-b \\pm \\sqrt{D}}{2a}\\]";
            temp += "\\[x=\\frac{-b \\pm \\sqrt{" + bsquareminusfourac + "}}{2a}\\]";
            temp +=
                "\\[x=\\frac{" +
                negativeb +
                " \\pm " +
                sqrtofdiscriminant +
                "}{2\\times" +
                a +
                "}\\]";
            temp +=
                "\\[x=\\frac{" +
                negativeb +
                " \\pm " +
                sqrtofdiscriminant +
                "}{" +
                twoa +
                "}\\]";
            temp += "<div class='row'>";

            temp += "<div class='col-6'>";
            temp +=
                "\\[x=\\frac{" +
                negativeb +
                " + " +
                sqrtofdiscriminant +
                "}{" +
                twoa +
                "}\\]";
            var addthem = eval(
                (negativeb + "+" + sqrtofdiscriminant).toString()
            ).toFixed(4);
            temp += "\\[x=\\frac{" + addthem + "}{" + twoa + "}\\]";
            addthem = eval((addthem + "/" + twoa).toString()).toFixed(4);
            temp += "\\[x=" + eval(addthem) + "\\]";
            temp += "</div>";

            temp += "<div class='col-6'>";
            temp +=
                "\\[x=\\frac{" +
                negativeb +
                " - " +
                sqrtofdiscriminant +
                "}{" +
                twoa +
                "}\\]";
            var subtractthem = eval(
                (negativeb + "-" + sqrtofdiscriminant).toString()
            ).toFixed(4);
            temp += "\\[x=\\frac{" + subtractthem + "}{" + twoa + "}\\]";
            subtractthem = eval((subtractthem + "/" + twoa).toString()).toFixed(4);
            temp += "\\[x=" + eval(subtractthem) + "\\]";
            temp += "</div>";
            temp += "</div>";
        }

        document.getElementById("rootsquadraticresult").innerHTML = temp;
        renderMathInElement(document.getElementById("rootsquadraticresult"));
    }
}

//roots of quadratic equation
//-----------------------------------------------------

//-----------------------------------------------------
//place of roundoff
var placeofroundoff;

function placeofroundoffget(place) {
    placeofroundoff = place;
}

//place of roundoff

//roundoff
function roundoff(input, output) {
    var val = document.getElementById(input).value;
    var el = document.getElementById(output);
    var ar = val.split("");
    var len = val.length;
    var i = -1;
    //to check if negative number or not
    ar1 = [];
    if (ar[0] == "-") {
        for (var itr = 0; itr < ar.length - 1; itr++) {
            ar1[itr] = ar[itr + 1];
        }
    } else {
        for (var itr = 0; itr < ar.length; itr++) {
            ar1[itr] = ar[itr];
        }
    }
    len1 = ar1.length;
    //to check floating point number
    for (var j = 0; j < len; j++) {
        if (ar[j] == ".") {
            i = j;
            break;
        }
    }
    var placeUpto = [
        "Ones",
        "Tens&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
        "Hundred&nbsp;&nbsp;&nbsp;",
        "Thousand&nbsp;&nbsp;",
        "TenThousand",
        "Lakh&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
        "Ten Lakh&nbsp;&nbsp;&nbsp;",
        "Crore&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
        "Ten Crore&nbsp;&nbsp;&nbsp;",
    ];
    var spaces =
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
    var spaces1 = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
    //if not a floating number
    if (i == -1) {
        var placeofroundoffarray = {
            Ones: len - 1,
            Tens: len - 2,
            Hundred: len - 3,
            Thousand: len - 4,
            "Ten Thousand": len - 5,
            Lakh: len - 6,
            "Ten Lakh": len - 7,
            Crore: len - 8,
            "Ten Crore": len - 9,
        };
        var place = placeofroundoffarray[placeofroundoff];
        var place1;
        if (ar1.length == ar.length) {
            place1 = place;
        } else place1 = place - 1;
        el.innerHTML = "Input number:&nbsp;&nbsp;" + val + "<br>";
        el.innerHTML +=
            "Place of round off:&nbsp;&nbsp;" + placeofroundoff + "<br>";
        if (place < 0) {
            var temp = "";
            if (ar1[place + 1] >= 5) {
                for (var itr = len1; itr >= 0; itr--) {
                    itrPlace = placeUpto[itr];
                    el.innerHTML += itrPlace + "&nbsp;&nbsp;";
                }
                el.innerHTML += "<br>" + "0";
                for (var itr = 0; itr < len1; itr++) {
                    el.innerHTML += spaces + ar1[itr];
                }
                el.innerHTML += "<br>" + "0" + spaces + ar1[0] + ">=5" + "<br>";
                el.innerHTML += "1" + "<br>";
                temp += "1";
                for (var i = 0; i < len1; i++) {
                    temp += "0";
                }
                el.innerHTML += temp + "<br>";
                el.innerHTML +=
                    val +
                    " after rounding off to the nearest " +
                    placeofroundoff +
                    " is " +
                    temp +
                    ".";
            } else {
                el.innerHTML +=
                    "Enter Bigger number to roundoff to nearest " + placeofroundoff;
            }
        } else {
            for (var itr = len1 - 1; itr >= 0; itr--) {
                itrPlace = placeUpto[itr];
                el.innerHTML += itrPlace + "&nbsp;&nbsp;";
            }
            if (place1 + 1 != len1) {
                el.innerHTML += "<br>" + ar1[0];
                for (var itr = 1; itr < len1; itr++) {
                    el.innerHTML += spaces + ar1[itr];
                }
                el.innerHTML += "<br>" + ar1[0];
                for (var itr = 1; itr <= place1; itr++) {
                    el.innerHTML += spaces + ar1[itr];
                }

                el.innerHTML += spaces + ar1[place1 + 1];
                if (parseInt(ar1[place1 + 1]) >= 5) {
                    el.innerHTML += ">=5" + "<br>" + ar1[0];
                    for (var itr = 1; itr <= place1; itr++) {
                        el.innerHTML += spaces + ar1[itr];
                    }
                    el.innerHTML += "+1";
                } else {
                    el.innerHTML += "<5" + "<br>" + ar1[0];
                    for (var itr = 1; itr <= place1; itr++) {
                        el.innerHTML += spaces + ar1[itr];
                    }
                }
            } else {
                el.innerHTML += "<br>" + ar1[0];
                for (var itr = 1; itr < len1; itr++) {
                    el.innerHTML += spaces + ar1[itr];
                }
            }
            if (parseInt(ar[place + 1]) >= 5) {
                if (parseInt(ar[place]) == 9) {
                    //handling boundary cases
                    var k = 0,
                        j = place,
                        carry = 0;
                    while (k == 0 && j >= 0) {
                        if (parseInt(ar[j]) == 9) {
                            if (j == 0) ar[0] = parseInt(ar[0]) + 1;
                            else {
                                ar[j] = "0";
                                carry = 1;
                            }
                        } else {
                            ar[j] = parseInt(ar[j]) + carry;
                            carry = 0;
                            k = 1;
                        }
                        j--;
                    }
                } else {
                    ar[place] = parseInt(ar[place]) + 1;
                }
                for (var i = place + 1; i < len; i++) {
                    ar[i] = 0;
                }
            } else {
                for (var i = place + 1; i < len; i++) {
                    ar[i] = 0;
                }
            }
            el.innerHTML += "<br>" + ar.join("");
            el.innerHTML +=
                "<br>" +
                val +
                " after rounding off to the nearest " +
                placeofroundoff +
                " is " +
                ar.join("");
        }
    } else {
        // a floating number
        el.innerHTML = "Input number:&nbsp;&nbsp;" + val + "<br>";
        el.innerHTML +=
            "Place of round off:&nbsp;&nbsp;" + placeofroundoff + "<br>";
        var placeofroundoffarray = {
            Ones: 0,
            Tens: 1,
            Hundred: 2,
            Thousand: 3,
            "Ten Thousand": 4,
            Lakh: 5,
            "Ten Lakh": 6,
            Crore: 7,
            "Ten Crore": 8,
        };
        var place = placeofroundoffarray[placeofroundoff];
        var a = Math.round(parseFloat(val));
        if (a < Math.pow(10, place) / 2) {
            el.innerHTML += "Enter Bigger number to roundoff to nearest " + placeofroundoff;
        } else {
            el.innerHTML += "<br>" +
                val +
                " after rounding off to the nearest " +
                "Ones" +
                " is " + a;
            if (place > 0) {
                var b = parseInt((a / Math.pow(10, place))) * Math.pow(10, place);
                var c = b + Math.pow(10, place);
                if (a >= Math.pow(10, place) / 2) {
                    el.innerHTML += "<br> As " + a % Math.pow(10, place) + ">=" + Math.pow(10, place) / 2;
                } else {
                    el.innerHTML += "<br> As " + a % Math.pow(10, place) + "<" + Math.pow(10, place) / 2;
                }
                a = (a - b < c - a) ? b : c;
                el.innerHTML += "<br>" +
                    val +
                    " after rounding off to the nearest " +
                    placeofroundoff +
                    " is " + a;

            }
        }
    }
}

//roundoff
//-----------------------------------------------------
//unit convert
function lenu(a) {
    switch (a) {
        case "1":
            return 0.001;
        case "2":
            return 0.01;
        case "3":
            return 1;
        case "4":
            return 1000;
        case "5":
            return 0.0254;
        case "6":
            return 0.3048;
        case "7":
            return 0.9144;
        case "8":
            return 1609.34;
        case "9":
            return 1852;
    }
}

function spicon() {
    const f = lenu(document.getElementById("spicon-1").value);
    const t = lenu(document.getElementById("spicon-2").value);
    const i = parseFloat(document.getElementById("spiconin").value);

    if (f == 0.001 && t == 0.001) {
        if (i > 10) {
            document.getElementById("spiconou").innerHTML = "SPI must be <= 10";
        } else {
            document.getElementById("spiconou").innerHTML = `${i}`;
        }
    } else if (f == 0.01 && t == 0.01) {
        if (i > 100) {
            document.getElementById("spiconou").innerHTML = "Percentage must be <=100";
        } else {
            document.getElementById("spiconou").innerHTML = `${i}`;
        }
    } else if (f == 0.001) {
        if (i > 10) {
            document.getElementById("spiconou").innerHTML = "SPI must be <= 10";
        } else {
            document.getElementById("spiconou").innerHTML = `${(i * 9.5)}`;
        }
    } else {
        if (i > 100) {
            document.getElementById("spiconou").innerHTML = "Percentage must be <=100";
        } else if(i<95){
            document.getElementById("spiconou").innerHTML = `${i / 9.5}`;
        } else if(i>=95 && i<=100){
            document.getElementById("spiconou").innerHTML = `${10}`;
        }
    }
}

function lentgthcon() {
    const f = lenu(document.getElementById("lengthcon-1").value);
    const t = lenu(document.getElementById("lengthcon-2").value);
    const i = parseInt(document.getElementById("lengthconin").value);
    const a = (i * f) / t;
    document.getElementById("lengthconou").innerHTML = `${a}`;
}

function areau(a) {
    switch (a) {
        case "1":
            return 4046.86;
        case "2":
            return 100;
        case "3":
            return 10000;
        case "4":
            return 0.0001;
        case "5":
            return 0.092903;
        case "6":
            return 0.00064516;
        case "7":
            return 1;
    }
}

function areacon() {
    const f = areau(document.getElementById("areacon-1").value);
    const t = areau(document.getElementById("areacon-2").value);
    const i = parseInt(document.getElementById("areaconin").value);
    const a = (i * f) / t;
    document.getElementById("areaconou").innerHTML = `${a}`;
}

function volnu(a) {
    switch (a) {
        case "1":
            return 3.78541;
        case "2":
            return 4.54609;
        case "3":
            return 1;
        case "4":
            return 0.001;
        case "5":
            return 0.001;
        case "6":
            return 1000;
        case "7":
            return 0.0163871;
        case "8":
            return 28.3168;
    }
}

function volcon() {
    const f = volnu(document.getElementById("volcon-1").value);
    const t = volnu(document.getElementById("volcon-2").value);
    const i = parseInt(document.getElementById("volconin").value);
    const a = (i * f) / t;
    document.getElementById("volconou").innerHTML = `${a}`;
}

function massu(a) {
    switch (a) {
        case "1":
            return 1000;
        case "2":
            return 1016.05;
        case "3":
            return 907.185;
        case "4":
            return 0.45359250018101;
        case "5":
            return 0.0283495;
        case "6":
            return 1;
        case "7":
            return 0.001;
    }
}

function masscon() {
    const f = massu(document.getElementById("masscon-1").value);
    const t = massu(document.getElementById("masscon-2").value);
    const i = parseInt(document.getElementById("massconin").value);
    if(i>=0)
    {
        const a = (i * f) / t;
        document.getElementById("massconou").innerHTML = `${a}`;
    }
    else if(i<0)
    {
        document.getElementById("massconou").innerHTML = "Mass cannot be negative. Kindly enter a positive value.";
    }
}

function angleu(a) {
    switch (a) {
        case "1":
            return 1;
        case "2":
            return 57.29578;
        case "3":
            return 0.01667;
        case "4":
            return 0.0002778;
        case "5":
            return 30;
        case "6":
            return 45;
        case "7":
            return 60;
        case "8":
            return 90;
        case "9":
            return 360;
    }
}

function anglecon() {
    const f = angleu(document.getElementById("anglecon-1").value);
    const t = angleu(document.getElementById("anglecon-2").value);
    const i = parseInt(document.getElementById("angleconin").value);
    const a = (i * f) / t;
    document.getElementById("angleconou").innerHTML = `${a}`;
}

function tempau(a) {
    switch (a) {
        case "1":
            return 100;
        case "2":
            return 180;
        case "3":
            return 100;
        case "4":
             return 80;
    }
}

function tempbu(a) {
    switch (a) {
        case "1":
            return 0;
        case "2":
            return 32;
        case "3":
            return 273;
        case "4":
            return 0;
    }
}

function tempcon() {
  const fd = tempau(document.getElementById("tempcon-1").value);
  const tm = tempau(document.getElementById("tempcon-2").value);
  const fs = tempbu(document.getElementById("tempcon-1").value);
  const ta = tempbu(document.getElementById("tempcon-2").value);
  const i = parseInt(document.getElementById("tempconin").value);
  const a = ((i - fs) / fd) * tm + ta;
  document.getElementById("tempconou").innerHTML = `${a}`;
}

function energyu(a) {
    switch (a) {
        case "1":
            return 1;
        case "2":
            return 1000;
        case "3":
            return 3600;
        case "4":
            return 3600000;
        case "5":
            return 4186.8;
        case "6":
            return 2647795.5;
        
    }
}

function energycon() {
    const f = energyu(document.getElementById("energycon-1").value);
    const t = energyu(document.getElementById("energycon-2").value);
    const i = parseInt(document.getElementById("energyconin").value);
    const a = (i * f) / t;
    document.getElementById("energyconou").innerHTML = `${a}`;
}
function presu(a) {
  switch (a) {
    case "1":
      return 1;
    case "2":
      return 0.986923;
    case "3":
      return 9.8692e-6;
    case "4":
      return 0.00131579;
    case "5":
      return 0.068046;
  }
}
function prescon() {
  const f = presu(document.getElementById("prescon-1").value);
  const t = presu(document.getElementById("prescon-2").value);
  const i = parseInt(document.getElementById("presconin").value);
  const a = (i * f) / t;
  document.getElementById("presconou").innerHTML = `${a}`;
}

function powu(a) {
    switch (a) {
      case "1":
        return 1;
      case "2":
        return (10**(-7));
      case "3":
        return 0.2930;
      case "4":
        return 1.356;
      case "5":
        return 745.7;
      case "6":
        return 4.186;
    }
  }

function powercon() {
    const f = powu(document.getElementById("powercon-1").value);
    const t = powu(document.getElementById("powercon-2").value);
    const i = parseInt(document.getElementById("powerconin").value);
    const a = (i * f) / t;
    var ans = Number(parseFloat(a).toFixed(3));
    document.getElementById("powerconou").innerHTML = `${ans}`;
}

function polarcx()
{
  var r = parseInt(document.getElementById("cprealcx").value);
  var i = parseInt(document.getElementById("cpimgcx").value);
  let explain="\\[Polar \\space Form \\space =r(cos(\\theta)+i\\space sin(\\theta))\\]";
  explain+="\\[where, \\space r=\\sqrt{real^2+imaginary^2} \\space\\space , \\space \\space \\theta=tan^{-1}\\frac{imaginary}{real}\\]";
  var result= document.getElementById("comp1result");
  var x = (Math.sqrt((r*r)+(i*i)));
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
	  x=x+"( cos( -π" +y+") + i sin ( -π"+ y+ "))";
      explain+="-π" +y+"\\]";
  }
  else{
	  y=y.toString();
      x=x+"( cos( π" +y+") + i sin ( π"+ y+ "))";
      explain+="π" +y+"\\]";
  }
  
  result.innerHTML = x;
  explain+="\\[Polar \\space Form \\space ="+x+"\\]";
  document.getElementById('comp1explain').innerHTML=explain;
  renderMathInElement(document.getElementById("comp1explain"));
}

function expoxn()
{
  var r = parseInt(document.getElementById("cpreale").value);
  var i = parseInt(document.getElementById("cpimge").value);
  var result= document.getElementsByClassName("comp1resulte");
  var y = nerdamer((Math.atan(i/r))/3.141592653589793).evaluate().toString();
  var x ="iπ *" +y
  result[1].innerHTML = x;
  result[2].innerHTML = x;

  var p = (Math.sqrt((r*r)+(i*i)));
  var j =p;
  if(!Number.isInteger(p))
  {
    j = (r*r)+(i*i);
    j = "&#8730; "+ j ;

  }
  result[0].innerHTML =  j ;

}

function datau(a) {
    switch (a) {
        case "1":
            return 0.125;
          case "2":
               return 1;
          case "3":
               return 1024;
          case "4":
            return 1024*1024;
          case "5":
            return 1024*1024*1024;
          case "6":
             return 1024*1024*1024*1024;
          case "7":
            return 1024*1024*1024*1024*1024;

    }
}

function datacon() {
    const f = datau(document.getElementById("datacon-1").value);
    const t = datau(document.getElementById("datacon-2").value);
    const i = parseInt(document.getElementById("dataconin").value);

    if(i>=0)
    {
        const a = (i * f) / t;
        document.getElementById("dataconou").innerHTML = `${a}`;
    }
    else if(i<0)
    {
        document.getElementById("dataconou").innerHTML = "Data size cannot be negative. Kindly enter a positive value.";
    }

}

// simple and compound interest
//-----------------------------------------------------
function simple_interest() {
    var p, t, r, si, ci;
    p = document.getElementById("first").value;
    t = document.getElementById("second").value;
    r = document.getElementById("third").value;
    var sitemp1= document.getElementById("simpleinterstoutput1");
    var sitemp2= document.getElementById("simpleinterstoutput2");
    sitemp1.innerHTML="";
    sitemp2.innerHTML="";
    if(p=="" || t=="" || r=="")
    {
        document.getElementById("simpleinterstoutput1").innerHTML = "All the fields are required";
        document.getElementById("compoundinterestoutput1").innerHTML = "";
    }
    else
    {
        si = parseFloat((p * t * r) / 100);
        if(si<0)
        {
            document.getElementById("simpleinterstoutput1").innerHTML = "Negative values not allowed";
            document.getElementById("compoundinterestoutpu1t").innerHTML = "";
        }
        else
        {

            document.getElementById("simpleinterstoutput1").innerHTML = "\\[Simple \\space Interest = \\space \\frac{1}{100} \\times p \\times t \\times r \\]";
            document.getElementById("simpleinterstoutput2").innerHTML = "\\[\\frac{1}{100} \\times "+p+"\\times "+t+" \\times "+r+" = ₹" + si.toFixed(5)+"\\]<br>\\[Amount \\space = \\space "+p+"\\space + \\space "+si.toFixed(5)+"\\space = \\space "+(parseFloat(p)+parseFloat(si.toFixed(5)))+"\\]";

            renderMathInElement(document.getElementById("simpleinterstoutput1"));
            renderMathInElement(document.getElementById("simpleinterstoutput2"));
            val = document.getElementById("comp").value;

            n=1;
            if (val == "Compounded Annually") {
                n=1;
            }
            else if (val == "Compounded Half-yearly") {
                n=2;
            }
            else if (val == "Compounded Quaterly") {
                n=4;
            }
            else if( val == "Compounded Monthly"){
                n=12;
            }

            amount = p * Math.pow(1 + (r / (n*100)), n*t);
            ci = amount - p;
            document.getElementById("compoundinterestoutput1").innerHTML = "\\[Compound \\space Interest =P\\left(1+\\frac{r}{n}\\right)^{n t}\\]"
            document.getElementById("compoundinterestoutput2").innerHTML = "\\["+p+"\\left(1+\\frac{"+r+"}{"+n+"}\\right)^{"+n+"\\times"+ t+"} = ₹" + ci.toFixed(5)+"\\]<br>\\[Amount \\space = \\space "+p+"\\space + \\space "+ci.toFixed(5)+"\\space = \\space "+(parseFloat(p)+parseFloat(ci.toFixed(5)))+"\\]";
            renderMathInElement(document.getElementById("compoundinterestoutput1"));
            renderMathInElement(document.getElementById("compoundinterestoutput2"));
        }
    }
}

// EMI Calulator
//-----------------------------------------------------
function emical() {
    var p, t, r, emi;
    p = parseInt(document.getElementById("first1").value);
    r = parseFloat(document.getElementById("third3").value) / 100;
    t1 = document.getElementById("second2").value;
    t = parseFloat(t1) * 12;
    emi = ((p * r * Math.pow((1 + r), t)) / (Math.pow((1 + r), t) - 1));
    document.getElementById("emio1").innerHTML = "\\[\\mathrm{EMI}=\\frac{\\mathrm{P} \\times \\mathrm{r} \\times(1+\\mathrm{r})^{\\mathrm{t}}}{(1+\\mathrm{r})^{t}-1}\\]";
    document.getElementById("emio4").innerHTML = "\\[(\\mathrm{"+t1+"} \\space \\mathrm{Year} = \\mathrm{"+t.toFixed(3)+"} \\space \\mathrm{Months} = \\mathrm{t})\\]";
    document.getElementById("emio2").innerHTML = "\\[\\mathrm{EMI}=\\frac{\\mathrm{"+p+"} \\times \\mathrm{"+r.toFixed(2)+"} \\times(1+\\mathrm{"+r.toFixed(2)+"})^{\\mathrm{"+t.toFixed(2)+"}}}{(1+\\mathrm{"+r.toFixed(2)+"})^{"+t.toFixed(2)+"}-1}\\]";
    document.getElementById("emio3").innerHTML = "\\[\\mathrm{EMI}= \\space" + emi.toFixed(2) + "\\space Per\\space month\\]";
    renderMathInElement(document.getElementById("emio1"));
    renderMathInElement(document.getElementById("emio4"));
    renderMathInElement(document.getElementById("emio2"));
    renderMathInElement(document.getElementById("emio3"));
}

// GST Calulator
function gstcal() {
    var p, r,final, gst,cgst;
    p = parseInt(document.getElementById("O_Price").value);
    r = parseFloat(document.getElementById("GST").value) / 100;
    gst = p*r;
    final=p+gst;
    cgst=gst/2;
    if (isNaN(p)|| isNaN(r))
    {
        document.getElementById("gst1").innerHTML ="Enter integer value" ;
        document.getElementById("gst0").innerHTML = "";
        document.getElementById("gst2").innerHTML = "";
        document.getElementById("gst3").innerHTML = "";
    }
    else if(p<0 || r<0)
    {
        document.getElementById("gst1").innerHTML ="Enter a positive integer value" ;
        document.getElementById("gst0").innerHTML = "";
        document.getElementById("gst2").innerHTML = "";
        document.getElementById("gst3").innerHTML = "";
    }
    else{
        document.getElementById("gst0").innerHTML ="Working"
        document.getElementById("gst2").innerHTML ="Results"
        var gst_work="",gst_result="";
        gst_work+="\\[\\mathrm{GST}=\\frac{\\mathrm{Original}\\space\\mathrm{Cost}\\times\\mathrm{GST}\\%}{100}\\]"+"\\[\\mathrm{GST}=\\space"+p+"\\times"+r+"\\]"+"\\[\\mathrm{GST}= \\space" + gst.toFixed(2) + "\\]";
        gst_work+="\\[\\mathrm{CGST/SGST}=\\frac{\\mathrm{GST}}{2}\\]"+"\\[\\mathrm{CGST/SGST}= \\space" + cgst.toFixed(2) + "\\]";
        gst_work+="\\[\\mathrm{Final}\\space\\mathrm{Cost}=\\space\\mathrm{Original}\\space\\mathrm{Cost}+\\mathrm{GST}\\]"+"\\[\\mathrm{Final}\\space\\mathrm{Cost}=\\space"+p+"+\\space"+ gst.toFixed(2) +"\\]";
        gst_result+="\\[\\mathrm{GST}= \\space" + gst.toFixed(2) + "\\]"+"\\[\\mathrm{CGST/SGST}= \\space" + cgst.toFixed(2) + "\\]"+"\\[\\mathrm{Final}\\space\\mathrm{Cost}= \\space" + final.toFixed(2) + "\\]";
        document.getElementById("gst1").innerHTML =gst_work;
        document.getElementById("gst3").innerHTML =gst_result;
        renderMathInElement(document.getElementById("gst1"));
        renderMathInElement(document.getElementById("gst3"));
        
    }
    
}

// Polynomial degree

function degcal() {
    var expression = document.getElementById("exp").value;
    var ans = document.getElementById("deg");

    exp = expression.replace(/ /g,'')
    var x = nerdamer(`deg(${exp})`);
    ans.innerText = x;
    
}

// cost and selling price
function computeCP() {

    var profit = parseFloat(document.getElementById("p2").value);
    var sell = parseFloat(document.getElementById("sp2").value);
    
    let result1 = document.getElementById("rescp");
    
    var CP = parseFloat((100 * sell)/(100 + profit));
    console.log(CP);
    
    if(sell<0){
      result1.innerHTML = "Invalid values" ;
    }else if(sell == 0){
        result2.innerHTML = "Enter Values";
    }
    else{
      result1.innerHTML = "Cost Price = ₹ " + CP;
    }
}

function computeSP() {

    var profit = parseFloat(document.getElementById("p1").value);
    var Cost = parseFloat(document.getElementById("cp2").value);
    
    let result2 = document.getElementById("ressp");
    
    var SP = parseFloat(((100 + profit) * Cost) / 100) ;
    
    if(Cost<0){
      result2.innerHTML = "Invalid values" ;
    }else if(Cost == 0){
        result2.innerHTML = "Enter Values";
    }else{
      result2.innerHTML = "Selling Price = ₹ " + SP;
    }
}


//unit convert
//-----------------------------------------------------
//Currency convert
function curcon() {
    fetch("https://api.exchangerate-api.com/v4/latest/USD")
        .then((cur) => {
            return cur.json();
        })
        .then(
            (curout = function (c) {
                const f = c.rates[document.getElementById("curcon-1").value];
                const t = c.rates[document.getElementById("curcon-2").value];
                const i = parseInt(document.getElementById("curconin").value);
                if(i<0)
                {
                    document.getElementById("curconou").innerHTML = "Enter <strong>only</strong> positive amount values";
                }
                else
                {
                    document.getElementById("curconou").innerHTML = `${(i * t) / f}`;
                }
            })
        );
}

//Currency convert
//-----------------------------------------------------
// Time convert
function timeu(a) {
    switch (a) {
        case "1":
            return 86400;
        case "2":
            return 3600;
        case "3":
            return 60;
        case "4":
            return 1;
        case "5":
            return 0.001;
        case "6":
            return 0.000001;
    }
}

function leap() {   
    const i = parseInt(document.getElementById("leapin").value);
    var out  = document.getElementById("leapresult");
    var today = new Date();//to get current year
    var curryr = parseInt(today.getFullYear());
    var ans =0;
    document.getElementById("leapresult1").innerHTML ="";
    document.getElementById("leapresult3").innerHTML ="";
    if (i < 0) {
        out.innerHTML = "Please enter a valid year to check if it's a leap year";
    }else if (i>=0 &&i<1000){
        out.innerHTML = "Too SMALL!! Enter a valid year to check if it's a leap year";
    }else if (i>9999){
        out.innerHTML = "Too BIG!! Enter a valid year to check if its a leap year";
    }else {
        if(i%4==0) {
            document.getElementById("leapresult1").innerHTML = "\\[The \\space Year \\space "+i+" \\space is \\space completely \\space divisible \\space by \\space 4 \\newline "+i+"\\space \\% \\space 4 \\space equal \\space to \\space zero\\]";
            renderMathInElement(document.getElementById("leapresult1"));
            ans =1;}
        if(i%100==0) {
            ans =0;
            if (i%4==0){
                document.getElementById("leapresult3").innerHTML ="\\[The \\space Year \\space "+i+" \\space is \\space completely \\space divisible \\space by \\space 100 \\newline"+i+" \\space \\% \\space 100 \\space equal \\space to \\space Zero \\newline Hence,\\]";
                renderMathInElement(document.getElementById("leapresult3"));
            } else{
                document.getElementById("leapresult1").innerHTML ="\\[The \\space Year \\space "+i+" \\space is \\space completely \\space divisible \\space by \\space 100 \\newline"+i+"\\space \\% \\space 100 \\space equal \\space to \\space Zero \\newline Hence,\\]";
                document.getElementById("leapresult3").innerHTML = "";
                renderMathInElement(document.getElementById("leapresult1"));}
            if(i%400==0){
                ans =1;
                document.getElementById("leapresult3").innerHTML ="\\[The \\space Year \\space "+i+" \\space is \\space completely \\space divisible \\space by \\space 400 \\newline"+i+"\\space \\% \\space 400 \\space equal \\space to \\space Zero \\newline Hence,\\]";
                renderMathInElement(document.getElementById("leapresult3"));}
        }
        if (i%100!=0 && i%4!=0){
            document.getElementById("leapresult1").innerHTML ="\\[The \\space Year \\space "+i+" \\space is \\space neither \\space divible \\space by \\space 4 \\space or \\space 100 \\newline Hence,\\]";
            renderMathInElement(document.getElementById("leapresult1"));
            document.getElementById("leapresult3").innerHTML = "";}
        if(ans){
            if(i>curryr){
                out.innerHTML = `${i} will be a Leap Year`;
            }else if(i == curryr){
                out.innerHTML = `${i} is a Leap Year`;
            }else {
                out.innerHTML = `${i} was a Leap Year`;}
        }
        else{
            if(i>curryr){
                out.innerHTML = `${i} will not be a Leap Year`;
            }else if(i == curryr){
                out.innerHTML = `${i} is not a Leap Year`;
            }else {
                out.innerHTML = `${i} was not a Leap Year`;}
        }
    }
}
function rotfind(){
    // JS program to find angle of rotational symmetry
    let side = parseInt(document.getElementById("rotside").value)
    let ans = parseInt(360/side)
    // parseint because we want answer in integer
    document.getElementById("rotans").innerHTML = "The angle of rotational symmetry is " + ans
}
function timecon() {
    const f = timeu(document.getElementById("timecon-1").value);
    const t = timeu(document.getElementById("timecon-2").value);
    const i = parseInt(document.getElementById("timeconin").value);
    if(i>=0)
    {
        const a = (i * f) / t;
        document.getElementById("timeconou").innerHTML = `${a}`;
    }
    else if(i<0)
    {
        document.getElementById("timeconou").innerHTML = "Time cannot be negative. Kindly enter a positive value.";
    }
}

// Speed convert
function speedu(a) {
    switch (a) {
        case "1":
            return 1.60934;
        case "2":
            return 1;
        case "3":
            return 3.6;
    }
}
function diagnfind(){
    let n =parseInt(document.getElementById("diagnin").value) 
    let a = parseInt(document.getElementById("diagnin1").value)
    let ans = (2 * a * Math.sin((((n - 2) * 180)/ (2 * n)) * 3.14159 / 180));
    document.getElementById("diagnans").innerHTML = ans
}
function speedcon() {
    const f = speedu(document.getElementById("speedcon-1").value);
    const t = speedu(document.getElementById("speedcon-2").value);
    const i = parseInt(document.getElementById("speedconin").value);
    const a = (i * f) / t;
    document.getElementById("speedconou").innerHTML = `${a}`;
}

//factorial calculator

function factorialsol(factorialval) {
    var num = document.getElementById(factorialval).value;
    var num1 = parseInt(num);
    var ans = document.getElementById("factorialsolprint");
    var desc = document.getElementById("explain_fact");
    if (isNaN(num1)) {
        desc.innerHTML = "Enter a number.";
        ans.innerHTML = "";
    }
    else if(num1<0)
    {
        desc.innerHTML = "Factorial is not defined for negative integer since, gamma function is not defined for negative integer";
        ans.innerHTML = "";
    }
    else if (num1 == 0 || num1 == 1) {
        ans.innerHTML = "";
        desc.innerHTML = `Factorial Formula of ${num1} ! = 1`;
    } else if (num1 <= 15 && num1 >0) {
        desc.innerHTML = `Factorial Formula of ${num1} ! = 1  `;
        let calc = 1;
        for (var i = 2; i <= num1; i++) {
            desc.innerHTML += ` x ${i}`;
            calc *= i;
        }
        ans.innerHTML = num1;
        ans.innerHTML += " !";
        ans.innerHTML += " =";
        ans.innerHTML += " ";
        ans.innerHTML += calc;
    } else {
        desc.innerHTML = `Factorial Formula is ${num1} ! = 1 x 2 x 3 x ..... x ${num1} `;
        let calc = 1;
        for (var i = 1; i <= num1; i++) {
            calc *= i;
        }
        ans.innerHTML = num1;
        ans.innerHTML += " !";
        ans.innerHTML += " =";
        ans.innerHTML += " ";
        ans.innerHTML += calc;
    }
}

function binomialsolve(valn, valk) {
    document.getElementById("bino_div").style.display = "block";
    var inputval1 = document.getElementById(valn).value;
    var inputval2 = document.getElementById(valk).value;
    var regex = /^[\-]*[\d]+$/
    var textVal1 = regex.test(inputval1);
    var testVal2 = regex.test(inputval2);
    if (!textVal1 || !testVal2)
    {
        document.getElementById("bino_wrong").innerHTML ="Enter Integer values only";
        document.getElementById("bino_div_div2").style.display = "none";
        document.getElementById("bino_div_div1").style.display = "block";
        return;
    }
    var val3 = parseInt(inputval1);
    var val4 = parseInt(inputval2);
    if (isNaN(val3) || isNaN(val4)) {
        document.getElementById("bino_div_div2").style.display = "none";
        document.getElementById("bino_div_div1").style.display = "none";
	} else if(val3<0 || val4<0) {
		 document.getElementById("bino_wrong").innerHTML =
            "n and r must be positive integers";
        document.getElementById("bino_div_div2").style.display = "none";
        document.getElementById("bino_div_div1").style.display = "block";

    } else if (val3 < val4) {
        document.getElementById("bino_wrong").innerHTML =
            "n must be greater than k.";
        document.getElementById("bino_div_div2").style.display = "none";
        document.getElementById("bino_div_div1").style.display = "block";

	} else
		{
        let ans1 = 1,
            ans2 = 1,
            ans3 = 1;
        let ans4 = 0;
        if (val3 - val4 == 0) {
            document.getElementById(
                "bino_ans"
            ).innerHTML = `(${val3}) ! / ( (${val4})! x (${val3} - ${val4}) ! ) = 1`;
            document.getElementById("bino_div_div1").style.display = "none";
            document.getElementById("bino_div_div2").style.display = "block";
        } else {
            for (i = 1; i <= val3; i++) {
                ans1 *= i;
            }
            for (i = 1; i <= val4; i++) {
                ans2 *= i;
            }
            for (i = 1; i <= val3 - val4; i++) {
                ans3 *= i;
            }
            console.log(ans1);
            console.log(ans2);
            console.log(ans3);
            ans4 = ans1 / (ans2 * ans3);
            document.getElementById(
                "bino_ans"
            ).innerHTML = `(${val3}) ! / ( (${val4}) ! x (${val3} - ${val4}) ! ) = ${ans4}`;
            document.getElementById("bino_div_div1").style.display = "none";
            document.getElementById("bino_div_div2").style.display = "block";
        }
    }
}

// profit loss calculations
function profitloss() {
    var cp = parseFloat(document.getElementById("cp").value);
    var sp = parseFloat(document.getElementById("sp").value);
    document.getElementById("pol2").innerHTML ="";
    document.getElementById("percent1").innerHTML = "";
    document.getElementById("pol1").innerHTML ="";
    document.getElementById("percent2").innerHTML = "";
    if(cp<0 || sp<0)
    {
        document.getElementById("pol1").innerHTML = "<strong>Only</strong> positive values are accepted";
    }
    else if (cp > sp) {
        var loss = cp - sp;
        var perl = (loss * 100) / cp;
        document.getElementById("pol1").innerHTML = "\\[Loss = Cost\\space Price - Selling\\space Price\\]";
        document.getElementById("pol2").innerHTML = "\\[Loss = "+cp+" - "+sp+" \\space =  "+loss+"\\]";
        renderMathInElement(document.getElementById("pol1"));
        renderMathInElement(document.getElementById("pol2"));
        document.getElementById("percent1").innerHTML = "\\[Loss\\space Percentage = \\frac{loss}{cost\\space price} \\times 100 \\%\\]";
        document.getElementById("percent2").innerHTML = "\\[Loss\\space Percentage =\\frac{"+loss+"}{"+cp+"} \\times 100 = " + perl.toFixed(3) + "\\% \\]";
        renderMathInElement(document.getElementById("percent1"));
        renderMathInElement(document.getElementById("percent2"));
    } else {
        var profit = sp - cp;
        var perp = (profit * 100) / sp;
        document.getElementById("pol1").innerHTML = "\\[Profit = Selling\\space Price - Cost\\space Price\\]";
        document.getElementById("pol2").innerHTML = "\\[Profit = "+sp+" - "+cp+" \\space =  "+profit+"\\]";
        renderMathInElement(document.getElementById("pol1"));
        renderMathInElement(document.getElementById("pol2"));
        document.getElementById("percent1").innerHTML = "\\[Profit\\space Percentage = \\frac{Profit}{Selling\\space price} \\times 100 \\%\\]";
        document.getElementById("percent2").innerHTML = "\\[Profit\\space Percentage =\\frac{"+profit+"}{"+sp+"} \\times 100 = " + perp.toFixed(3) + "\\% \\]";
        renderMathInElement(document.getElementById("percent1"));
        renderMathInElement(document.getElementById("percent2"));
    }
}

// gamma find function
function gammafind(){
    // function to find gamma function of any no.
    let inpu = document.getElementById("gammain").value
    let ans = Math.gamma(inpu)
    document.getElementById("gammafindans").innerHTML = "The gamma is "+ans
}

// profit/loss calculations over discount
function discount() {
    var dis = parseFloat(document.getElementById("dis").value);
    var cpsp = parseFloat(document.getElementById("cpsp").value);
    // console.log(dis);
    // console.log(cpsp);
    var perprice = document.getElementById("perprice").value;
    var costsell = document.getElementById("costsell").value;
    if(dis<0 || cpsp<0 || dis==NaN || cpsp==NaN)
    {
        document.getElementById("discountresult").innerHTML = "<strong>Only</strong> positive values are accepted. Refrain from blank inputs and negative values.";
    }
    else
    {
        var cp=0;
        var sp=0;
        var discount=""
        var print="";
        if(costsell=="Cost Price")
        {
            if(perprice=="Percentage")
            {
                cp=cpsp;
                sp=cpsp-(cpsp*(dis/100));
                discount=dis+"%";
            }
            else
            {
                cp=cpsp;
                sp=cpsp-dis;
                discount="Rs "+dis;
            }
        }
        else
        {
            if(perprice=="Percentage")
            {
                sp=cpsp;
                cp=(100*cpsp)/(100-dis);
                discount=dis+"%";
            }
            else
            {
                sp=cpsp;
                cp=cpsp+dis;
                discount="Rs "+dis;
            }
        }

        if(cp<0 || sp<0)
        {
            print="The the entered data is resulting in a negative Cost/Selling Price.";
        }
        else if (cp > sp) {
            var loss = cp - sp;
            var perl = (loss * 100) / cp;
            print="Cost Price: Rs "+cp+"<br>Selling Price: Rs "+sp+"<br>Discount: "+discount+"<br>Loss: Rs " + loss+"<br>Loss Percentage: " + perl + "%";
        } else {
            print="Cost Price: Rs "+cp+"<br>Selling Price: Rs "+sp+"<br>Discount: "+discount;
            var profit = sp - cp;
            var perp = (profit * 100) / sp;
            print="Cost Price: Rs "+cp+"<br>Selling Price: Rs "+sp+"<br>Discount: "+discount+"<br>Loss: Rs " + profit+"<br>Loss Percentage: " + perp + "%";
        }

        document.getElementById("discountresult").innerHTML = print;
    }

}

function exposol() {
    var x = parseFloat(document.getElementById("xval").value);
    var y = parseFloat(document.getElementById("yval").value);
    var n = document.getElementById("res");
    var explainop = document.getElementById("steps1");
    var ntemp="";
    var explain = "";
    if(isNaN(x) || isNaN(y) ){
        n.innerHTML = "";
        explain += "\\[Please \\space enter \\space all \\space inputs \\]";
        explainop.innerHTML = explain;
        renderMathInElement(explainop);
    }else{
        if(x == 1){
            n.innerHTML = '';
            explain += "\\[Value \\space of \\space n \\space will \\space be \\space \\infty \\space when \\space x \\space is \\space 1\\]";
            explainop.innerHTML = explain;
            renderMathInElement(explainop);
        }else{
            ntemp += "\\[Value \\space of \\space n \\space is \\space : \\space" + eval(String(Math.log(y)/Math.log(x))) + "\\]";  
            n.innerHTML = ntemp;
            renderMathInElement(n);
            explain += "\\[For \\space : \\space" + x + "^{n} \\space = \\space " + y + "\\space" + "\\]";
            explain += "\\[ Take \\space log \\space of \\space both \\space the \\space sides \\space : \\space log" + x + "^{n} \\space = \\space log" + y + "\\] ";
            explain += "\\[ By \\space identity \\space we \\space get \\space : \\space nlog" + x + "= \\space log" + y + "\\]";
            explain += "\\[Dividing \\space both \\space sides \\space by \\space log" + x + "\\space :" + "n \\space = \\frac{log" + y + "}{log" + x + "}" + "\\]";
            explainop.innerHTML = explain;
            renderMathInElement(explainop);
        }
    }   

}


function solveper()
{
    var x,y;
    x=parseFloat(document.getElementById('x').value);
    y=parseFloat(document.getElementById('y').value);
    var res = (y*x*0.01);
    document.getElementById('op').innerHTML= 'Result : ' + res;

}
function solvepera()
{
    var x1,y1;
    x1=parseFloat(document.getElementById('perX1').value);
    y1=parseFloat(document.getElementById('perY1').value);
    var n = (y1*100)/x1;
    document.getElementById('perAns1').innerHTML= 'Result : ' + n + '%'; 
}
function solvepercal()
{
    var x2,y2;
    x2=parseFloat(document.getElementById('perX2').value);
    y2=parseFloat(document.getElementById('perY2').value);
    var s = (y2*100)/x2;
    s = s.toFixed(2);
    document.getElementById('s').innerHTML= 'Result : ' + s ; 
}
function solvepercent()
{
    var x3,y3;
    x3=parseFloat(document.getElementById('x3').value);
    y3=parseFloat(document.getElementById('y3').value);
    var r = x3+(y3*x3)/100;
    document.getElementById('r').innerHTML= 'Result : ' + r ; 
}
function solveperc()
{
    var x4,y4;
    x4=parseFloat(document.getElementById('x4').value);
    y4=parseFloat(document.getElementById('y4').value);
    var t = x4-(y4*x4)/100;
    document.getElementById('t').innerHTML= 'Result : ' + t ; 
}

//Statistics Calculator
function cal_func_stats()
{
    var num = document.getElementById('num_list').value;
    // console.log(typeof(num))
    valid=/^([-]{0,1}\d{1,}[\.]{0,1}\d{0,}[ ]?)*$/


    if(num=="")
    {
       document.getElementById('result_cal_func_stats').innerHTML = "";
    }
    else if(!valid.test(num))
    {
        document.getElementById('result_cal_func_stats').innerHTML = "Enter space separated numbers.<br>Example -> 1  2  2.1  -2  -2.6 <br> Use of alphabets and special character is not allowed for calculation purpose";
    }
    else
    {
        var print="";
        var s=0;
        num=num.trim();
        num = num.split(" ");
        var len=parseInt(num.length);
        // console.log(num)
        var number=[]
        for (i = 0; i < len; i++) {
            number[i] = parseFloat(num[i].trim());
        }

        number.sort(function(a, b) {
            return a - b;
          });
        console.log(number)
        console.log(typeof(number))
        console.log(typeof(number[0]))

        for (i = 0; i < len; i++) {
            s = s + number[i];
        }

        mean = s/len
        // console.log(number)
        // console.log(len)
        // console.log(s)

        var median=0
        if(len%2==0)
        {
            median=((number[parseInt(len/2)-1])+(number[parseInt((len/2))]))/2;
        }
        else
        {
            median=(number[parseInt(len/2)]);
        }


        const frequencyTable = {};
        number.forEach((elem) => (frequencyTable[elem] = frequencyTable[elem] + 1 || 1));

        let mode = [];
        let maxFrequency = 0;
        for (const key in frequencyTable) {
            if (frequencyTable[key] > maxFrequency) {
                mode = [Number(key)];
                maxFrequency = frequencyTable[key];
            } else if (frequencyTable[key] === maxFrequency) {
                mode.push(Number(key));
            }
        }

        if (mode.length === number.length) mode = number[0];
        if (number.length != 0)
        {
            if (mode.length === 0) {
                mode = number;
            } else {
                mode = `${mode}`;
            }
        }

        var variance=0;
        for (i = 0; i < len; i++) {
            variance = variance + ((number[i])-mean)*((number[i])-mean);
        }

        variance = variance/len;

        var standarddev = Math.sqrt(variance);

        var large=(number[len-1]);
        var small=(number[0]);

        console.log(large);
        console.log(small);

        var range = large - small;
        var coffrange = (large - small)/(large + small);
        var coffvariation = (standarddev/mean)*100;

        var mdmean=0;
        for (i = 0; i < len; i++) {
            mdmean =  mdmean + Math.abs((number[i])-mean);
        }
        mdmean = mdmean/len;

        var mdmedian=0;
        for (i = 0; i < len; i++) {
            mdmedian =  mdmedian + Math.abs((number[i])-median);
        }
        mdmedian = mdmedian/len;

        var mdmode=0;
        for (i = 0; i < len; i++) {
            mdmode =  mdmode + Math.abs((number[i])-mode);
        }
        mdmode = mdmode/len;

        print+="Mean: "+mean+"<br>";
        print+="Median: "+median+"<br>";
        print+="Mode: "+mode+"<br>";
        print+="Variance: "+variance+"<br>";
        print+="Standard Deviation: "+standarddev+"<br>";
        print+="Range: "+range+"<br>";
        print+="Coefficient of Range: "+coffrange+"<br>";
        print+="Coefficient of Variation: "+coffvariation+"<br>";
        print+="Mean deviation about Mean: "+mdmean+"<br>";
        print+="Mean deviation about Median: "+mdmedian+"<br>";
        print+="Mean deviation about Mode: "+mdmode+"<br>";

        // print+=s/len

        document.getElementById('result_cal_func_stats').innerHTML = print;
    }
}

//sum of nterms of an Arithmetic Progression
function sum_n_apsol(nval, rval, r1val) {
    var n = document.getElementById(nval).value;
    var a = document.getElementById(rval).value;
    var d = document.getElementById(r1val).value;
    var res = document.getElementById("sum_APsolprint");
    var explain = document.getElementById("sumAP_formula");
    var printseries = document.getElementById("printAPseries");
    var explaintemp = "";
    let cal;
    if (!isNaN(parseInt(n)) && !isNaN(parseInt(a)) && !isNaN(parseInt(d))) {
        for (var i = 1, series = "", num = 0; i <= n; i++) {
            num = parseInt(a) + (i - 1) * d;
            series += (num.toString() + ", ");
        }

        cal = (n * (2 * a + (n - 1) * d)) / 2;
        explaintemp += "\\[Arthimetic \\space Progression : \\space a, \\space a+d, \\space a+2d,....., \\space a+(n-1)d \\]";
        explaintemp += "\\[Arthimetic \\space Progression : " + series.substring(0, series.length - 2) + "\\]";
        explaintemp +=  "\\[Formula : \\]";
        explaintemp += "\\[S_n=\\frac{n}{2} (2a+(n-1)d) \\]";
        explaintemp += "\\[S_n = \\frac{" + n + "}{2} ((2 \\times" + a + ")+(" + n + "-1)" + d + ")\\]";
        explaintemp += "\\[S_n = " + (n / 2) + " ( " + (2 * a) + "+" + (n - 1)*d + ") \\]";
        explaintemp += "\\[S_n = " + (n/2) + "\\times" + ((2*a)+((n-1)*d)) + " \\]";
        explaintemp += "\\[S_n = " + cal + "\\]";
         
        printseries.innerHTML = explaintemp;
        renderMathInElement(printseries);
    }
    else
        {
            explaintemp += "\\[Enter \\space numbers \\space only. \\space Blank \\space inputs \\space are \\space not \\space allowed \\]";
            printseries.innerHTML= explaintemp;
            renderMathInElement(printseries);
            return;
        }
}

function anotherap() {
    var n = document.getElementById("numterms").value
    var a = document.getElementById("ft").value
    var l = document.getElementById("lt").value
    if(isNaN(parseInt(n)) || isNaN(parseInt(a)) || isNaN(parseInt(l)))
    {
        document.getElementById("printAPseries1").innerHTML = "Enter numbers only. Blank inputs are not allowed";
        document.getElementById("ltap").innerHTML = "";
        return;
    }
    var nhalf = parseFloat(n / 2)
    var al = parseInt(a) + parseInt(l)
    var ans = parseInt(nhalf * al)
    var series = "";
    var num = parseInt(a);
    series += num.toString() + ", ";
    let d = parseInt((l - a) / (n - 1))
    while (parseInt(num) < parseInt(l)) {
        num += parseInt(d);
        series += (num.toString() + ", ");
    }
    document.getElementById("printAPseries1").innerHTML = "Arithmetic Progression: " + series.substring(0, series.length - 2);
    document.getElementById("ltap").innerHTML = "Result: " + ans
}

function nap(){
    var n = parseInt(document.getElementById("nt1").value)
    var a = parseInt(document.getElementById("ft1").value)
    var b = parseInt(document.getElementById("lt1").value)
    if(isNaN(parseInt(n)) || isNaN(parseInt(a)) || isNaN(parseInt(b)))
    {
        document.getElementById("nAPseries2").innerHTML = "Enter numbers only. Blank inputs are not allowed";
        return;
    }
    var d = (b-a)/(n+1);
    for (var i = 1, series = "", num = 0; i <= n; i++) {
        num = ((a) + (i  * d));
        series += (num.toString() + ", ");
    }
    document.getElementById("nAPseries2").innerHTML = "n-Arithmetic Mean: " + series.substring(0, series.length - 2)
}

function ngp(){
    var n = parseInt(document.getElementById("nt2").value)
    var a = parseInt(document.getElementById("ft2").value)
    var b = parseInt(document.getElementById("lt2").value)
    if(isNaN(parseInt(n)) || isNaN(parseInt(a)) || isNaN(parseInt(b)))
    {
        document.getElementById("nGPseries2").innerHTML = "Enter numbers only. Blank inputs are not allowed";
        return;
    }
    var d = Math.pow((b/a),1/(n+1))
    for (var i = 1, series = "", num = 0; i <= n; i++) {
        num = ((a) * Math.pow(d,i) );
        series += (num.toString() + ", ");
    }
    document.getElementById("nGPseries2").innerHTML = "n-Geometric Mean: " + series.substring(0, series.length - 2)
}

function apsum()
{   var n = document.getElementById("nterms").value
    var val = document.getElementById("ap").value;
    val = val.split(" ");
    val = val.filter(function (str) {
       return /\S/.test(str);
    });
	var s=0;
	if( parseInt(val.length)<2)
	document.getElementById("printAP").innerHTML = "Enter atleast 2 terms of AP";
	else{
        if( parseInt(val.length)>2 && (val[1]-val[0] != val[2]-val[1]))
		{
			document.getElementById("printAP").innerHTML="Invalid AP"
		}
    else
	{
		var d=val[1]-val[0];
		document.getElementById("printAP").innerHTML ="Common difference for the entered AP is &nbsp;"+d+"<br>";
		for(i=0;i<n;i++)
		{
			document.getElementById("printAP").innerHTML +=eval(String(i+"*"+d + "+"+ val[0]))+",";
			s=eval(String(s+"+"+i+"*"+d + "+"+ val[0]))
		}
		document.getElementById("printAP").innerHTML +="<br>The Sum of &nbsp;"+n+"&nbsp; terms of the given AP is &nbsp;"+s;
	}
	}
}
function amsol() {
    var a = document.getElementById("aval").value
    var c = document.getElementById("cval").value
    var amadd = parseInt(a) + parseInt(c)
    var res = parseFloat(amadd / 2)
    var explain = document.getElementById("am_formula");
    explain.innerHTML = "Formula: \\[Arithmetic \\space Mean=\\space \\frac{a+c}{2} =\\space \\frac{"+a+"+"+c+"}{2}\\] ";
    renderMathInElement(document.getElementById("am_formula"));
    document.getElementById("am").innerHTML = "Result: " + res

}

function gmsol() {
    var a = document.getElementById("aval1").value
    var c = document.getElementById("cval1").value
    var gmmul = parseInt(a) * parseInt(c)

    if(a<0&&c<0){
      var res1 = -(Math.sqrt(gmmul))
      var explain = document.getElementById("gm_formula");
      explain.innerHTML = "Formula: \\[\\space Geometric \\space Mean=\\space\\ - \\sqrt{a \\times c} = \\space\\ - \\sqrt{"+a+"\\times"+c+"}\\] ";
      renderMathInElement(document.getElementById("gm_formula"));
      document.getElementById("gm").innerHTML = "Result: " + res1
    }

    else if(a<0 || c<0){
        var explain = document.getElementById("gm_formula");
        explain.innerHTML = "Please enter either both positive or both negative values to calculate the Geomteric Mean";
        document.getElementById("gm").innerHTML = "";
    }
    
    else{
    var res = Math.sqrt(gmmul)
    var explain = document.getElementById("gm_formula");
    explain.innerHTML = "Formula: \\[\\space Geometric \\space Mean=\\space \\sqrt{a \\times c} = \\space \\sqrt{"+a+"\\times"+c+"}\\] ";
    renderMathInElement(document.getElementById("gm_formula"));
    document.getElementById("gm").innerHTML = "Result: " + res
    }
}

function hmsol() {
    var a = document.getElementById("aval2").value
    var c = document.getElementById("cval2").value
    var hmmul = 2 * parseInt(a) * parseInt(c)
    var hmadd = parseInt(a) + parseInt(c)
    var res = (hmmul / hmadd)
    var explain = document.getElementById("hm_formula");
    explain.innerHTML = "Formula: \\[Harmonic \\space Mean=\\space \\frac{2ac}{a+c} = \\space \\frac{2\\times"+a+"\\times"+c+"}{"+a+"+"+c+"}\\] ";
    renderMathInElement(document.getElementById("hm_formula"));
    document.getElementById("hm").innerHTML = "Result: " + res

}
// Primality test
function check_prime(isprime) {
    var num = document.getElementById(isprime).value;
    var num1 = parseInt(num);
    var ans = document.getElementById("isprimesol");
    var flag = true;
    if (!isNaN(num1)) {
        if(num1>=0)
        {
            ans.innerHTML = num1;
            ans.innerHTML += " is ";
            if (num1 == 1 || num1 == 0) {
                ans.innerHTML += "neither Prime nor Composite number.";
            } else {
                for (i = 2; i <= Math.sqrt(num1); i++) {
                    if (num1 % i == 0) {
                        flag = false;
                        break;
                    }
                }
                if (flag == true) {
                    ans.innerHTML += "a Prime number.";
                } else {
                    ans.innerHTML += "a Composite number.";
                }
            }
        }
        else
        {
            ans.innerHTML = "There are no negative prime numbers. Enter positive numbers to check for Primality."
        }
    } else
        ans.innerHTML = "Enter an integer!"
}


function prime_till_num(primetill){
    var b=document.getElementById('primetill').value;
    b = parseInt(b);
    if (isNaN(b) || b <= 1) {
        document.getElementById("primetillsol").innerHTML = "Enter positive integer greater than 1.";
    }
  else
  {
      var w="";
      for(var f=1;f<=b;f++)
      {
          //flag acts as a counter
           var flag=0;
        //check for prime no
          for(var y=2;y<f;y++)
          {
              if(f%y==0)
             { flag=flag+1;
            break;}
          }
          //adding prime no to the string w along with colon and spacing
          if(flag==0)
          {
              w=w+f+", ";
              
          }}
          document.getElementById("primetillsol").innerHTML=w.slice(0, w.length - 2);
        }   
}
//end

function gp() {
    var a = document.getElementById("firstterm").value
    var r = document.getElementById("ratio").value
    var n = document.getElementById("number").value
    var explain = document.getElementById("sumGP_formula");
    var printseries = document.getElementById("printGPseries");
    var explaintemp = "";
    var explain1temp = "";
    var ans;
    var ans1;
    // console.log(a)
    // console.log(r)
    // console.log(n)
    if (!isNaN(parseInt(n)) && !isNaN(parseInt(a)) && !isNaN(parseInt(r))) {
        for (var i = 0, series = "", num = 0; i <= n-1; i++) {
            num = parseInt(a) * Math.pow(r,i);
            series += (num.toString() + ", ");
        }

        explaintemp += "\\[Geometric \\space Progression : \\space a, \\space ar, \\space ar^2,....., \\space ar^{n-1} \\]";
        explaintemp += "\\[Geometric \\space Progression : " + series.substring(0, series.length - 2) + "\\]";
        printseries.innerHTML = explaintemp;
        renderMathInElement(printseries);
      }
      else
      {
        printseries.innerHTML = "\\[Enter \\space numbers \\space only. \\space Blank \\space inputs \\space are \\space not \\space allowed \\]";
        explain.innerHTML="";
        renderMathInElement(printseries);
        return;
      }


      var power = parseFloat(Math.pow(r, n))
      if (r > 1) {
          ans1 = parseFloat(a * (power - 1))
          ans = parseFloat(ans1 / (r - 1))
          explain1temp += "\\[Formula : \\]";
          explain1temp += "\\[S_n=\\frac{a(r^n - 1)}{r - 1}\\]";
          explain1temp += "\\[S_n \\space = \\space \\frac{" + a + "(" + r + "^{" + n + "} - 1)}{" + r + "- 1}\\]";
          explain1temp += "\\[S_n \\space = \\space \\frac{" + a + "\\times" + ((power)-1) + "}{"+ (r-1) + "}\\]";
          explain1temp += "\\[S_n \\space = " + ans + "\\]";
          explain.innerHTML = explain1temp;
          renderMathInElement(explain);
          cal = (a * (r^n - 1)) / (r - 1);
      } else if (r < 1) {
          ans1 = parseFloat(a * (1 - power))
          ans = parseFloat(ans1 / (1 - r))
          explain1temp += "\\[Formula : \\]";
          explain1temp += "\\[S_n=\\frac{a(r^n - 1)}{1 - r}\\]";
            explain1temp += "\\[S_n \\space = \\space \\frac{" + a + "(" + r + "^{" + n + "} - 1)}{1 -(" + r + ")}\\]";
          explain1temp += "\\[S_n \\space = \\space \\frac{" + a + "\\times" + ((power)-1) + "}{"+ (1-r) + "}\\]";
          explain1temp += "\\[S_n \\space = " + ans + "\\]";
          explain.innerHTML = explain1temp;
          renderMathInElement(explain);
          cal = (a * (r^n - 1)) / (1 - r);
      } else if (r == 1) {
          ans = parseInt(a * n)
          explain1temp += "\\[Formula : \\]";
          explain1temp += "\\[S_n = an\\]";
          explain1temp += "\\[S_n \\space = \\space " + a + "\\times" + n +"\\]";
          explain1temp += "\\[S_n \\space = " + ans + "\\]";
          explain.innerHTML = explain1temp;
          renderMathInElement(explain);
          cal = a * n;
      }
}

function igp() {
    var a = document.getElementById("fterm").value;
    var r = parseFloat(document.getElementById("r1").value);
    var resout = document.getElementById("sumigp");
    var restemp = "";
    var ans = a / (1 - r);
    if(a != "" && r != "")
    {
    if (r <= 1) {
        restemp += "\\[ Sum \\space of \\space infinite \\space terms \\space of \\space GP \\space is \\space \\frac{a}{1-r} \\]";
        restemp += "\\[ S = \\frac{" + a + "}{ 1 - (" + r + ")} \\]";
        restemp += "\\[ S = " + (ans).toFixed(3) + "\\]";
        resout.innerHTML = restemp;
        renderMathInElement(resout);

    } else {
        restemp += "\\[ Please \\space enter \\space a \\space common \\space ratio \\space which \\space is \\space less \\space than \\space 1. \\]";
        resout.innerHTML = restemp;
        renderMathInElement(resout);
    }
}

else{
             resout.innerHTML="";
}
}


function tridecagon(){
    let side = parseFloat(document.getElementById("inputsidetridec").value)
    let area = (13.1858*side*side).toFixed(3);
    let per = (13*side)
    let tri1output = document.getElementById("resultofareatridec");
    let tri2output = document.getElementById("resultofperimetertridec");
    let tri1temp = "";
    let tri2temp = "";
    tri1temp += "\\[13.1858 \\times " + side + "^{2} \\]";
    tri1temp += "\\[13.1858 \\times " + (side*side) + " \\]";
    tri1temp += "\\[Area \\space of \\space Tridecagon \\space is \\]"; 
    tri1temp += "\\[ " + area + " \\]";
    tri1output.innerHTML  = tri1temp ;
    tri2temp += "\\[13 \\times " + (side) + " \\]";
    tri2temp += "\\[Perimeter \\space of \\space Tridecagon \\space is \\]"; 
    tri2temp += "\\[ " + per + " \\]";
    tri2output.innerHTML  = tri2temp ;
    renderMathInElement(tri1output);
    renderMathInElement(tri2output);


}

function tetradecagon(){
    let side = parseFloat(document.getElementById("inputsidetetradec").value);
    let area = 15.3345*side*side;
    let per = 14*side;
    let tetra1output = document.getElementById("resultofareatetradec");
    let tetra2output = document.getElementById("resultofperimetertetradec");
    let tetra1temp = "";
    let tetra2temp = "";
    tetra1temp += "\\[15.3345 \\times " + side + "^{2} \\]";
    tetra1temp += "\\[15.3345 \\times " + (side*side) + " \\]";
    tetra1temp += "\\[Area \\space of \\space Tetradecagon \\space is \\]"; 
    tetra1temp += "\\[ " + area + " \\]";
    tetra1output.innerHTML  = tetra1temp ;
    tetra2temp += "\\[14 \\times " + (side) + " \\]";
    tetra2temp += "\\[Perimeter \\space of \\space Tetradecagon \\space is \\]"; 
    tetra2temp += "\\[ " + per + " \\]";
    tetra2output.innerHTML  = tetra2temp ;
    renderMathInElement(tetra1output);
    renderMathInElement(tetra2output);
}


function permutationcal(nval, rval) {
    document.getElementById("permutation_div").style.display = "block";
    document.getElementById("combination_div").style.display = "none";
    var val1 = document.getElementById(nval).value;
    var val2 = document.getElementById(rval).value;
    var regex = /^[\-]*[\d]+$/
    var textVal1 = regex.test(val1);
    var testVal2 = regex.test(val2);
    if (!textVal1 || !testVal2)
    {
        document.getElementById("permutation_wrong").innerHTML ="Enter Integer values only";
        document.getElementById("premutation_div_div2").style.display = "none";
        document.getElementById("permutation_div_div1").style.display = "block";
        return;
    }
    var val3 = parseInt(val1);
    var val4 = parseInt(val2);
    if (isNaN(val3) || isNaN(val4)) {
        // document.getElementById("permutation_wrong").innerHTML="Enter a Number."
        document.getElementById("premutation_div_div2").style.display = "none";
        document.getElementById("permutation_div_div1").style.display = "none";
	} else if(val3<0 || val4<0) {
		document.getElementById("permutation_wrong").innerHTML =
            "n and r must be positive integers.";
        document.getElementById("premutation_div_div2").style.display = "none";
        document.getElementById("permutation_div_div1").style.display = "block";
    } else if (val3 < val4) {
        document.getElementById("permutation_wrong").innerHTML =
            "n must be greater than r.";
        document.getElementById("premutation_div_div2").style.display = "none";
        document.getElementById("permutation_div_div1").style.display = "block";

	} else
	{
        let ans1 = 1,
            ans2 = 1,
            ans3 = 0;
        if (val3 - val4 == 0) {
            for (i = 1; i <= val3; i++) {
                ans1 *= i;
            }
            document.getElementById(
                "permutation_ans"
            ).innerHTML = `(${val3}) ! / (${val3} - ${val4}) ! = ${ans1}`;
            document.getElementById("permutation_div_div1").style.display = "none";
            document.getElementById("premutation_div_div2").style.display = "block";
        } else {
            for (i = 1; i <= val3; i++) {
                ans1 *= i;
            }
            for (i = 1; i <= val3 - val4; i++) {
                ans2 *= i;
            }
            ans3 = ans1 / ans2;
            document.getElementById(
                "permutation_ans"
            ).innerHTML = `(${val3}) ! / (${val3} - ${val4}) ! = ${ans3}`;
            document.getElementById("permutation_div_div1").style.display = "none";
            document.getElementById("premutation_div_div2").style.display = "block";
        }
    }
}

function combinationcal(nval, rval) {
    document.getElementById("combination_div").style.display = "block";
    document.getElementById("permutation_div").style.display = "none";
    var val1 = document.getElementById(nval).value;
    var val2 = document.getElementById(rval).value;
    var regex = /^[\-]*[\d]+$/
    var textVal1 = regex.test(val1);
    var testVal2 = regex.test(val2);
    if (!textVal1 || !testVal2)
    {
        document.getElementById("combination_wrong").innerHTML ="Enter Integer values only";
        document.getElementById("combination_div_div2").style.display = "none";
        document.getElementById("combination_div_div1").style.display = "block";
        return;
    }
    var val3 = parseInt(val1);
    var val4 = parseInt(val2);
    if (isNaN(val3) || isNaN(val4)) {
        document.getElementById("combination_div_div2").style.display = "none";
        document.getElementById("combination_div_div1").style.display = "none";
	} else if(val3<0 || val4<0) {
		 document.getElementById("combination_wrong").innerHTML =
            "n and r must be positive integers";
        document.getElementById("combination_div_div2").style.display = "none";
        document.getElementById("combination_div_div1").style.display = "block";

    } else if (val3 < val4) {
        document.getElementById("combination_wrong").innerHTML =
            "n must be greater than r.";
        document.getElementById("combination_div_div2").style.display = "none";
        document.getElementById("combination_div_div1").style.display = "block";

	} else
		{
        let ans1 = 1,
            ans2 = 1,
            ans3 = 1;
        let ans4 = 0;
        if (val3 - val4 == 0) {
            document.getElementById(
                "combination_ans"
            ).innerHTML = `(${val3}) ! / ( (${val4})! x (${val3} - ${val4}) ! ) = 1`;
            document.getElementById("combination_div_div1").style.display = "none";
            document.getElementById("combination_div_div2").style.display = "block";
        } else {
            for (i = 1; i <= val3; i++) {
                ans1 *= i;
            }
            for (i = 1; i <= val4; i++) {
                ans2 *= i;
            }
            for (i = 1; i <= val3 - val4; i++) {
                ans3 *= i;
            }
            console.log(ans1);
            console.log(ans2);
            console.log(ans3);
            ans4 = ans1 / (ans2 * ans3);
            document.getElementById(
                "combination_ans"
            ).innerHTML = `(${val3}) ! / ( (${val4}) ! x (${val3} - ${val4}) ! ) = ${ans4}`;
            document.getElementById("combination_div_div1").style.display = "none";
            document.getElementById("combination_div_div2").style.display = "block";
        }
    }
}

//Mean start
function Means() {
    var s = 0;
    document.getElementById("Meanresult").innerHTML = "";
    var val = document.getElementById("getNum").value;
    val=val.trim()
    val = val.match(/(^([-]{0,1}\d{1,}[\.]{0,1}\d{0,}[ ]?)*$)/g);

    if(val==null)
    {
        document.getElementById("Meanresult").innerHTML = `Proper input is required`;
        return;
    }

    val = JSON.stringify(val)
    // console.log(val.substring(2,val.length-2)+"Hi"+typeof(val));

    val = val.substring(2,val.length-2)
    val = val.split(" ");
    val = val.filter(function (str) {
        return /\S/.test(str);
    });
    var len = parseInt(val.length);
    for (i = 0; i < len; i++) {
        s = s + parseFloat(val[i]);
    }
    if (val.length === 0) {
        document.getElementById("Meanresult").innerHTML = `No Number Added`;
    } else {
        var ans = s / len;

        document.getElementById("Meanresult").innerHTML = `Mean Value is => `;
        document.getElementById("Meanresult").innerHTML += `(${val[0]}`;
        for (i = 1; i < val.length; i++) {
            document.getElementById("Meanresult").innerHTML += ` + ${val[i]}`;
        }
        document.getElementById("Meanresult").innerHTML += `)/${val.length} = `;
        document.getElementById("Meanresult").innerHTML += ans.toFixed(5);
        renderMathInElement(document.getElementById("Meanresult"));
    }
}

//Mean End
//Median start
function Median() {
    document.getElementById("Meanresult").innerHTML = "";
    var arr = document.getElementById("getNum").value;
    arr=arr.trim()
    arr = arr.match(/(^([-]{0,1}\d{1,}[\.]{0,1}\d{0,}[ ]?)*$)/g);

    if(arr==null)
    {
        document.getElementById("Meanresult").innerHTML = `Proper input is required`;
        return;
    }

    arr = JSON.stringify(arr)

    arr = arr.substring(2,arr.length-2)
    arr = arr.split(" ");
    arr = arr.filter(function (str) {
        return /\S/.test(str);
    });
    var len = parseInt(arr.length);
    arr = arr.sort();
    let mid = Math.floor(len / 2);
    if (arr.length === 0) {
        document.getElementById("Meanresult").innerHTML = `No Number Added`;
    } else {
        let median =
            len % 2 === 0
                ? (parseFloat(arr[mid]) + parseFloat(arr[mid - 1])) / 2
                : parseInt(arr[mid]);
        document.getElementById(
            "Meanresult"
        ).innerHTML = `After Sorting: ${arr}</br>`;
        var med = median.toFixed(5);
        document.getElementById("Meanresult").innerHTML += `Median: `;
        document.getElementById("Meanresult").innerHTML += med;
        renderMathInElement(document.getElementById("Meanresult"));
    }
}

// Median end
//Mode Start
function Mode() {
    document.getElementById("Meanresult").innerHTML = "";
    var arr = document.getElementById("getNum").value;
    arr=arr.trim()
    arr = arr.match(/(^([-]{0,1}\d{1,}[\.]{0,1}\d{0,}[ ]?)*$)/g);

    if(arr==null)
    {
        document.getElementById("Meanresult").innerHTML = `Proper input is required`;
        return;
    }

    arr = JSON.stringify(arr)
    // console.log(arr.substring(2,arr.length-2)+"Hi"+typeof(arr));

    arr = arr.substring(2,arr.length-2)
    arr = arr.split(" ");
    arr = arr.filter(function (str) {
        return /\S/.test(str);
    });
    const frequencyTable = {};
    arr.forEach((elem) => (frequencyTable[elem] = frequencyTable[elem] + 1 || 1));

    let modes = [];
    let maxFrequency = 0;
    for (const key in frequencyTable) {
        if (frequencyTable[key] > maxFrequency) {
            modes = [Number(key)];
            maxFrequency = frequencyTable[key];
        } else if (frequencyTable[key] === maxFrequency) {
            modes.push(Number(key));
        }
    }

    if (modes.length === arr.length) modes = [];
    if (arr.length === 0) {
        document.getElementById("Meanresult").innerHTML = `No Number Added`;
    } else {
        if (modes.length === 0) {
            document.getElementById(
                "Meanresult"
            ).innerHTML += `All Number appeared Just Once`;
        } else {
            document.getElementById("Meanresult").innerHTML += `Mode is: ${modes}`;
        }
    }
}
function hypf(){
    var hypa = parseInt(document.getElementById("hypa").value)
    var hypb = parseInt(document.getElementById("hypb").value)
    var hyph = parseInt(document.getElementById("hyph").value)
    var ans1 = (2*3.14*hyph*hypa*hypa)/(hypb*hypb)
    var ans = ans1*(hypb*hypb + ((hyph*hyph)/3))

    document.getElementById("hypans1").innerHTML ="\\[The \\space volume \\space of \\space Hyperboloid \\space is \\space \\]";
    renderMathInElement(document.getElementById("hypans1"));

    document.getElementById("hypans2").innerHTML ="\\[\\frac{2 \\times \\pi \\times"+hyph+"\\times"+hypa+"^{2}}{"+hypb+"^{2}}\\times("+hypb+"^{2}+\\frac{"+hyph+"^{2}}{3})\\]";
    renderMathInElement(document.getElementById("hypans2"));

    document.getElementById("hypans3").innerHTML ="\\[ = "+ans.toFixed(3)+ "\\]";
    renderMathInElement(document.getElementById("hypans3"));
}

//spheroidal cap Calculator added
function spcap(){
    var a = document.getElementById("sprcapsemiaxisa").value;
    var c = document.getElementById("sprcapsemiaxisc").value;
    var h = document.getElementById("sprcapheight").value;

    var vol = ((math.pi * a**2 * h**2) / (3 * c**2)) * ((3 * c) - h ) ;
    var ba = math.pi * a**2 * ( 1- (1 - (h/c))**2 );

    if(a!="" && c!="" && h!=""){
        document.getElementById("volsprcap1").innerHTML = "\\[Volume \\space of \\space Spheroidal \\space Cap \\space is \\space \\]";
        document.getElementById("volsprcap2").innerHTML = "\\[\\frac{\\pi \\times "+a+"^2 \\times "+h+"^2}{3 \\times "+c+"^2 } \\times (3\\times"+c+" - "+h+" ) = "+vol.toFixed(3)+"\\]";
        renderMathInElement(document.getElementById("volsprcap1"));
        renderMathInElement(document.getElementById("volsprcap2"));
        
        document.getElementById("basprcap1").innerHTML = "\\[Base \\space Area \\space of \\space Spheroidal \\space Cap \\space is \\space \\]";
        document.getElementById("basprcap2").innerHTML = "\\[\\pi \\times "+a+"^2 \\times (1- (1- \\frac{"+h+"}{"+c+"})^2 ) = "+ba.toFixed(3)+"\\]";
        renderMathInElement(document.getElementById("basprcap1"));
        renderMathInElement(document.getElementById("basprcap2"));
    } else{
        document.getElementById("volsprcap1").innerHTML ="";
        document.getElementById("volsprcap2").innerHTML = "";
        document.getElementById("basprcap1").innerHTML ="";
        document.getElementById("basprcap2").innerHTML ="";
    }
}

//Mode end
//Variance
function Variance() {
    var s = 0, ans = 0;
    document.getElementById("Meanresult").innerHTML = "";
    var val = document.getElementById("getNum").value;

    val=val.trim()
    val = val.match(/(^([-]{0,1}\d{1,}[\.]{0,1}\d{0,}[ ]?)*$)/g);

    if(val==null)
    {
        document.getElementById("Meanresult").innerHTML = `Proper input is required`;
        return;
    }

    val = JSON.stringify(val)
    // console.log(val.substring(2,val.length-2)+"Hi"+typeof(val));

    val = val.substring(2,val.length-2)

    val = val.split(" ");
    val = val.filter(function (str) {
        return /\S/.test(str);
    });
    var len = parseInt(val.length);
    for (i = 0; i < len; i++) {
        s = s + parseFloat(val[i]);
    }
    if (val.length === 0) {
        document.getElementById("Meanresult").innerHTML = `No Number Added`;
    } else {
        document.getElementById("Meanresult").innerHTML = `Variance is => <br>`;
        var mean = s / len;
        for (i = 0; i < len; i++) {
            num = parseFloat(val[i]);
            ans = ans + Math.pow(num - mean, 2);
            if (i == 0) {
                document.getElementById("Meanresult").innerHTML += `(${String(Math.pow(num - mean, 2))}`;
            } else {
                document.getElementById("Meanresult").innerHTML += ` + ${String(Math.pow(num - mean, 2))}`;
            }
        }
        document.getElementById("Meanresult").innerHTML += `)/${val.length} &nbsp; =  &nbsp;`;
        document.getElementById("Meanresult").innerHTML += ans.toFixed(5);;
        document.getElementById("Meanresult").innerHTML += `/${val.length} &nbsp;= <br>`;
        ans = ans / len;
        document.getElementById("Meanresult").innerHTML += ans.toFixed(5);;
    }


    renderMathInElement(document.getElementById("Meanresult"));
}
function vtp(){
    let vvx1 = parseInt(document.getElementById("vvx1").value)
    let vvy1 = parseInt(document.getElementById("vvy1").value)
    let vvz1 = parseInt(document.getElementById("vvz1").value)
    let vvx2 = parseInt(document.getElementById("vvx2").value)
    let vvy2 = parseInt(document.getElementById("vvy2").value)
    let vvz2 = parseInt(document.getElementById("vvz2").value)
    let vvx3 = parseInt(document.getElementById("vvx3").value)
    let vvy3 = parseInt(document.getElementById("vvy3").value)
    let vvz3 = parseInt(document.getElementById("vvz3").value)
    let cvec = vvx1*vvx2 + vvy1*vvy2 + vvz1*vvz2
    let avec = vvx2*vvx3 + vvy2*vvy3 + vvz2*vvz3
    if((isNaN(vvx1)) || (isNaN(vvy1)) || (isNaN(vvz1))|| (isNaN(vvx2))|| (isNaN(vvy2))|| (isNaN(vvz2))|| (isNaN(vvx3))|| (isNaN(vvy3))|| (isNaN(vvz3))){
     document.getElementById("vtpans").innerHTML = "Please enter valid input ";
    }
    else{
    document.getElementById("vtpans").innerHTML = cvec + "c - "+ avec +"a"
}
}
// Standard Deviation
function std() {
    var s = 0, ans = 0;
    document.getElementById("Meanresult").innerHTML = "";
    var val = document.getElementById("getNum").value;

    val=val.trim()
    val = val.match(/(^([-]{0,1}\d{1,}[\.]{0,1}\d{0,}[ ]?)*$)/g);

    if(val==null)
    {
        document.getElementById("Meanresult").innerHTML = `Proper input is required`;
        return;
    }

    val = JSON.stringify(val)
    // console.log(val.substring(2,val.length-2)+"Hi"+typeof(val));

    val = val.substring(2,val.length-2)

    val = val.split(" ");
    val = val.filter(function (str) {
        return /\S/.test(str);
    });
    var len = parseInt(val.length);
    for (i = 0; i < len; i++) {
        s = s + parseFloat(val[i]);
    }
    if (val.length === 0) {
        document.getElementById("Meanresult").innerHTML = `No Number Added`;
    } else {
        document.getElementById("Meanresult").innerHTML = `Standard Deviation is => <br>`;
        var mean = s / len;
        for (i = 0; i < len; i++) {
            num = parseFloat(val[i]);
            ans = ans + Math.pow(num - mean, 2);
            if (i == 0) {
                document.getElementById("Meanresult").innerHTML += `&#8730; (${String(Math.pow(num - mean, 2))}`;
            } else {
                document.getElementById("Meanresult").innerHTML += ` + ${String(Math.pow(num - mean, 2))}`;
            }
        }
        document.getElementById("Meanresult").innerHTML += `)/&#8730; ${val.length} &nbsp; =  &nbsp;`;
        document.getElementById("Meanresult").innerHTML += `&#8730; ${ans}`;
        document.getElementById("Meanresult").innerHTML += `/ &#8730;${val.length} &nbsp;= <br>`;
        ans = ans / len;
        document.getElementById("Meanresult").innerHTML += `&#8730; ${ans} &nbsp; = &nbsp`;
        ans = Math.sqrt(ans);
        document.getElementById("Meanresult").innerHTML += ans.toFixed(5);;
    }


    renderMathInElement(document.getElementById("Meanresult"));
}

// standard deviation end

//Smallest prime factor calculator
function smallestPrimeDivisor(num) {
    let n = num;
    let res = 0;
    if (num % 2 == 0)
        res = 2;
    else {
        for (let i = 3; i * i <= num; i += 2) {
            if (num % i == 0) {
                res = i;
                break;
            }
        }
    }
    if(!res)
        res = num;
    document.getElementById("smPrimeResult").innerHTML = "The smallest prime factor of " + n + " is: " + res;
}

//Euler's Totient Function

function eulerTotient(n) {
    function gcd(a, b) {
      if (a === 0) {
        return b;
      }
  
      return gcd(b % a, a);
    }
    let res = 1;  
    for (let i = 2; i < n; i++) {
      if (gcd(i, n) === 1) {
        res++;
      }
    }
    document.getElementById("etfResult").innerHTML = "The number of coprime of " + n + " is: " + res;
  }

//Next Prime Function

function recifind(){
    let A = parseInt(document.getElementById("aofeqn1").value)
    let B = parseInt(document.getElementById("bofeqn1").value)
    let C = parseInt(document.getElementById("cofeqn1").value)
    document.getElementById("recians").innerHTML = C+"x^2"+B+"x"+A+"=0"
}

function isPrime(n)
{
    if (n <= 1)
        return false;
    if (n <= 3) 
        return true;
    if (n%2 == 0 || n%3 == 0) 
        return false;

    for (let i=5; i*i<=n; i=i+6) {
        if (n%i == 0 || n%(i+2) == 0)
            return false;
    }
    
    return true;
}

function nextPrime(num)
{ 
    if (num <= 1)
        return 2;
    let res = num;
    let isFound = false;
    while (!isFound) {
        res++;
        if (isPrime(res))
            isFound = true;
    }
    document.getElementById("nextPrimeResult").innerHTML = "The next prime number of " + num + " is: " + res;
}

//Sum of divisors Function
function sumDivisor(num)
{
    let res = 0;
    for (let i = 1; i <= num; i++){
      if (!(num % i)) {
        res += i;
      }
    }
    document.getElementById("smDivResult").innerHTML = "The sum of divisors of " + num + " is: " + res;
}

// function to find double factorial
function dfact(num) {
    if (num == 0 || num==1)
        return 1;   
    return num * dfact(num - 2);
}

function doubleFactorial(num)
{
    document.getElementById("dblFactResult").innerHTML = "The Double Factorial of " + num + " is: " + dfact(num);
}

//converts both integer and fractional part of  binary/hexa/octal to decimal
function calculatefrac(value, base = 2) {
    var [integer, fraction = ''] = value.toString().split('.');

    return parseInt(integer, base) + (integer[0] !== '-' || -1) * fraction.split('').reduceRight((r, a) => (r + parseInt(a, base)) / base, 0);
}

//converts both integer and fractional of decimal to binary/octal/hexadecimal
function fracDectoBinHexOct(value, base){
    var i = 1;
    var s = "";
    var n ;
    var [integer , fraction = ''] = value.toString().split('.');
    fraction = Math.pow(10,-1 * fraction.length) * fraction;

    while(i<=7 ){
       fraction = base * fraction;
       s = s + parseInt(fraction).toString(base);;
       fraction = "0"+fraction.toString().substring(fraction.toString().indexOf("."));
       n= Math.abs(fraction);
       if(n - Math.floor(n) == 0){
       break;
       }
       i++;
    }
    return  (parseInt(integer,10).toString(base) + "."+ s );
    }


//////////////////////////////////////////////////////////////

////////////// Bitwise Calculator Section /////////////////

//Function to clear inputs when user changes his/her numbering base system
function clearInputs() {
    document.getElementById("bitwise-first-number").value = 0;
    document.getElementById("bitwise-second-number").value = 0;
    document.getElementById("bitwise-result").innerHTML = 0;
}

//Function that performs bitwise calculation
function bitwiseCalc() {

    addEventListener("change",x =>{
        if(operation == "NOT")
        document.getElementById("bitwise-second-number").style = "display:none";
        else
        document.getElementById("bitwise-second-number").style = "display:inline-block";
        })
    const operation = document.getElementById("bitwise-operation").value;
    const numberSystem = document.getElementById("bitwise-numbers-system").value;
    let result;
    let firstOperand =
        document.getElementById("bitwise-first-number").value;
    let secondOperand = 
        document.getElementById("bitwise-second-number").value;
        var x = 0;
        var str = " invalid input  use only ";
        if (numberSystem === "Binary") {
       firstOperand = parseInt(firstOperand, 2);
       secondOperand = parseInt(secondOperand, 2);
           if(isNaN(firstOperand) ||isNaN(secondOperand))
           {
               x =1;
               str+="Binary number";
           }
    }

    if (numberSystem === "Octal") {
        
        firstOperand = parseInt(firstOperand, 8);
        secondOperand = parseInt(secondOperand, 8);

        if(isNaN(firstOperand) ||isNaN(secondOperand)){
            x =1;
        str+="Octal number";
        }
}

    if (numberSystem === "Hexadecimal") {
        firstOperand = parseInt(firstOperand, 16);
        secondOperand = parseInt(secondOperand, 16);

        if(isNaN(firstOperand) ||isNaN(secondOperand)){
            
            str+="Hexadecimal number";
        }
    }

    if (isNaN(firstOperand) || isNaN(secondOperand)) {
        document.getElementById("bitwise-result").innerHTML = str;
    } else {
        switch (operation) {
            case "NOT":
                result = ~firstOperand;
                break;
            case "AND":
                result = firstOperand & secondOperand;
                break;
            case "OR":
                result = firstOperand | secondOperand;
                break;
            case "XOR":
                result = firstOperand ^ secondOperand;
                break;
            case "Left Shift":
                 result = firstOperand << secondOperand;
                 break;
            case "Right Shift":
                  result = firstOperand >> secondOperand;
        }
        if (numberSystem === "Binary")
            document.getElementById("bitwise-result").innerHTML = parseInt(
                result
            ).toString(2);
        else if (numberSystem === "Octal")
            document.getElementById("bitwise-result").innerHTML = parseInt(
                result
            ).toString(8);
        else if (numberSystem === "Hexadecimal")
            document.getElementById("bitwise-result").innerHTML = parseInt(
                result
            ).toString(16);
        else document.getElementById("bitwise-result").innerHTML = result;
    }
}

/////////////////////////////////////////////////////////////
//----------------------------
//Function that performs anyBase to anyBase Conversion
function convertAnyBaseToAnyBase() {
  const fromBase = document.getElementById("anyBase-select1").value;
  const toBase = document.getElementById("anyBase-select2").value;
  const input = document.getElementById("anyBase-input").value;
  let result = document.getElementById("anyBase-result");

  let from = 2;
  let to = 2;

  if (fromBase === "2(Binary)") from = 2;
  else if (fromBase === "3") from=3;
  else if (fromBase === "4") from=4;
  else if (fromBase === "5") from=5;
  else if (fromBase === "6") from=6;
  else if (fromBase === "7") from=7;
  else if (fromBase === "8(Octal)") from=8;
  else if (fromBase === "9") from=9;
  else if (fromBase === "10(Decimal)") from=10;
  else if (fromBase === "11") from=11;
  else if (fromBase === "12") from=12;
  else if (fromBase === "13") from=13;
  else if (fromBase === "14") from=14;
  else if (fromBase === "15") from=15;
  else if (fromBase === "16") from=16;
  else if (fromBase === "17") from=17;
  else if (fromBase === "18") from=18;
  else if (fromBase === "19") from=19;
  else if (fromBase === "20") from=20;
  else if (fromBase === "21") from=21;
  else if (fromBase === "22") from=22;
  else if (fromBase === "23") from=23;
  else if (fromBase === "24") from=24;
  else if (fromBase === "25") from=25;
  else from=26;

  if (toBase === "2(Binary)") to = 2;
  else if(toBase === "3") to = 3;
  else if(toBase === "4") to = 4;
  else if(toBase === "5") to = 5;
  else if(toBase === "6") to = 6;
  else if(toBase === "7") to = 7;
  else if(toBase === "8(Octal)") to = 8;
  else if(toBase === "9") to = 9;
  else if(toBase === "10(Decimal)") to = 10;
  else if(toBase === "11") to = 11;
  else if(toBase === "12") to = 12;
  else if(toBase === "13") to = 13;
  else if(toBase === "14") to = 14;
  else if(toBase === "15") to = 15;
  else if(toBase === "16") to = 16;
  else if(toBase === "17") to = 17;
  else if(toBase === "18") to = 18;
  else if(toBase === "19") to = 19;
  else if(toBase === "20") to = 20;
  else if(toBase === "21") to = 21;
  else if(toBase === "22") to = 22;
  else if(toBase === "23") to = 23;
  else if(toBase === "24") to = 24;
  else if(toBase === "25") to = 25;
  else to=26;

  result.innerHTML = fracDectoBinHexOct(calculatefrac(input,from),to);
  if (input == "") {
      result.innerHTML = "";
  } else if (from == 2) {
      if (input.search(/^[-.10]+$/) == -1)
          result.innerHTML = "Binary numbers can only have 0's and 1's";
  }
    else if(fracDectoBinHexOct(calculatefrac(input,from),to)=="NaN.0")
    {
        result.innerHTML = `Invalid Input please use only ${fromBase} Base number`;   
    }


}

//---------------------------------------------------------------------

//Function for addition of any number system
function addBinDecHexOct(){
    const firstBase = document.getElementById("adding-all-select1").value;
    const secondBase = document.getElementById("adding-all-select2").value;
    const input1 = document.getElementById("adding-all-input1").value;
    const input2 = document.getElementById("adding-all-input2").value;
    const resultType= document.getElementById("adding-all-result-type").value;
    let result = document.getElementById("adding-all-result");
    var x1,x1o;
    var x2,x2o;
   
    if(firstBase === "Binary"){
        x1=parseInt(input1,2);
        x1o=x1.toString(2);
    }
    else if (firstBase === "Octal"){
        x1=parseInt(input1,8);
        x1o=x1.toString(8);
    }
    else if(firstBase === "Hexa Decimal"){
        x1=parseInt(input1,16);
        x1o=x1.toString(16);
    }
    else if(firstBase === "Decimal"){
        x1=parseInt(input1);
        x1o=x1;
    }

    if(secondBase === "Binary"){
        x2=parseInt(input2,2);
        x2o=x2.toString(2);
    }
    else if (secondBase === "Octal"){
        x2=parseInt(input2,8);
        x2o=x2.toString(8);
    }
    else if(secondBase === "Hexa Decimal"){
        x2=parseInt(input2,16);
        x2o=x2.toString(16);
    }
    else if(secondBase === "Decimal"){
        x2=parseInt(input2);
        x2o=x2;
    }

    var x3=x1+x2;
    console.log(x1)
    if(isNaN(x1) || x1o!=input1)
    result.innerHTML="Enter correct "+firstBase+" value in Input 1";
    else if(isNaN(x2)|| x2o!=input2)
    result.innerHTML="Enter a "+secondBase+" value in Input 2";
    else if(resultType === "Binary")
    result.innerHTML="Answer in binary="+x3.toString(2);
    else if (resultType === "Octal")
    result.innerHTML="Answer in Octal="+x3.toString(8);
    else if(resultType === "Hexa Decimal")
    result.innerHTML="Answer in Hexa Decimal="+x3.toString(16);
    else if(resultType === "Decimal")
    result.innerHTML="Answer in Decimal="+x3.toString();
    else
    result.innerHTML="";
}

//---------------------------------------------------------------------

//Function for subtraction of any number system
function subBinDecHexOct(){
    const base = document.getElementById("subtract-all-select1").value;
    var input1 = document.getElementById("subtract-all-input1").value;
    var input2 = document.getElementById("subtract-all-input2").value;
    let result = document.getElementById("subtract-all-result");
    let work = document.getElementById("subtract-all-working");
    let print = "<h2 style='margin-top: 50px;'>Working Steps </h2> &emsp;"

    if(input1.length>input2.length){
        var p=input1.length-input2.length;
        p = Math.pow(10,p);
        input2 = p + input2;
        input2 = input2.substring(1);
        input1 = input1;
    } else if (input1.length < input2.length){
        var t = input2.length-input1.length;
        t = Math.pow(10,t);
        input1 = t + input1;
        input1 = input1.substring(1);
        input2 = input2;
    } else {
        input1 = input1;
        input2 = input2;
    }

    if(base === "Binary"){
        var add = "";
        var ans = "";

        var twoco= calculateTwoComplement(input2);
        print += "<h5>STEP 0 : Find 2's complement of Subtrahend</h5>"+input2+"->"+twoco;
        add = (parseInt(twoco,2)+parseInt(input1,2)).toString(2);
        print += "<br><br><h5>STEP 1 : Add Minuend and 2's complement of Subtrahend</h5>"+"<p>&nbsp;&nbsp;&nbsp;" + input1 + "<br>+&nbsp;" + twoco+ "<br>--------<br>&nbsp;&nbsp;&nbsp;" + add+"</p>";
        if(add.length == input1.length){
            ans = calculateTwoComplement(add);
            result.innerHTML = "-" + ans;
            print += "<br><h5>STEP 2 : Check the presence of carry</h5>";
            print += "->  _"+add+"<br>";
            print += "Note- No carry is present. So, answer will be -ve <br>"
            print += "<br><h5>STEP 3 : Find 2's complement of sum found in 'STEP 1'</h5>";
            print += "ANSWER (Two's complement of the sum ) ->  <span style='text-decoration: underline;'>-" + ans + "</span>";
        } else if (add.length > input1.length){
            ans = add.substring(1);
            result.innerHTML = ans;
            print += "<br><h5>STEP 2 : Check the presence of carry</h5>";
            print += "->  <span style='text-decoration: underline;'>"+add.substring(0,1) + "</span>" +ans+"<br>";
            print += "Note- Carry is present. So, answer will be +ve <br>"
            print += "<br><h5>STEP 3 : Find 2's complement of sum found in 'STEP 1'</h5>";
            print += "ANSWER (Discard the carry) ->   <span style='text-decoration: underline;'>" + ans + "</span>";
        } else if (add.length < input1.length){
            var a1 = input1.length - add.length;
            a1 = Math.pow(10,a1);
            add = a1 + add;
            ans = add.substring(1);
            result.innerHTML = "-" + calculateTwoComplement(ans);
            print += "<br><h5>STEP 2 : Check the presence of carry</h5>";
            print += "->  _"+add+"<br>";
            print += "Note- No carry is present. So, answer will be -ve <br>"
            print += "<br><h5>STEP 3 : Find 2's complement of sum found in 'STEP 1'</h5>";
            print += "ANSWER (Two's complement of the sum) ->   <span style='text-decoration: underline;'>-" + ans + "</span>";
        }
        
    }else if(base === "Octal"){
        var add1 = "";
        var ans1 = "";
        var eigco= calculateEightComplement(input2);
        print += "<h5>STEP 0 : Find 8's complement of Subtrahend</h5>"+input2+"->"+eigco;
        add1 = (parseInt(eigco,8)+parseInt(input1,8)).toString(8);
        print += "<br><br><h5>STEP 1 : Add Minuend and 8's complement of Subtrahend</h5>"+"<p>&nbsp;&nbsp;&nbsp;" + input1 + "<br>+&nbsp;" + eigco+ "<br>--------<br>&nbsp;&nbsp;&nbsp;" + add1+"</p>";
        if(add1.length == input1.length){
            ans1 = calculateEightComplement(add1);
            result.innerHTML = "-" + ans1;
            print += "<br><h5>STEP 2 : Check the presence of carry</h5>";
            print += "->  _"+add1+"<br>";
            print += "Note- No carry is present. So, answer will be -ve <br>"
            print += "<br><h5>STEP 3 : Find 8's complement of sum found in 'STEP 1'</h5>";
            print += "ANSWER (Eight's complement of the sum ) ->  <span style='text-decoration: underline;'>-" + ans1 + "</span>";
        } else if (add1.length > input1.length){
            ans1 = add1.substring(1);
            result.innerHTML = ans1;
            print += "<br><h5>STEP 2 : Check the presence of carry</h5>";
            print += "->  <span style='text-decoration: underline;'>"+add1.substring(0,1) + "</span>" +ans1+"<br>";
            print += "Note- Carry is present. So, answer will be +ve <br>"
            print += "<br><h5>STEP 3 : Find 8's complement of sum found in 'STEP 1'</h5>";
            print += "ANSWER (Discard the carry) ->   <span style='text-decoration: underline;'>" + ans1 + "</span>";
        } else if (add1.length < input1.length){
            var a2 = input1.length - add1.length;
            a2 = Math.pow(10,a2);
            ans1 = a2 + add1;
            ans1 = ans1.substring(1);
            result.innerHTML = "-" + calculateEightComplement(ans1);
            print += "<br><h5>STEP 2 : Check the presence of carry</h5>";
            print += "->  _"+add1+"<br>";
            print += "Note- No carry is present. So, answer will be -ve <br>"
            print += "<br><h5>STEP 3 : Find 8's complement of sum found in 'STEP 1'</h5>";
            print += "ANSWER (Eight's complement of the sum) ->   <span style='text-decoration: underline;'>-" + ans1 + "</span>";
        }
        
    }else if(base === "Hexa Decimal"){
        var add2 = "";
        var ans2 = "";
        var sixtnco= calculateSixteenComplement(input2);
        print += "<h5>STEP 0 : Find 16's complement of Subtrahend</h5>"+input2+"->"+sixtnco;
        add2 = (parseInt(sixtnco,16)+parseInt(input1,16)).toString(16);
        print += "<br><br><h5>STEP 1 : Add Minuend and 16's complement of Subtrahend</h5>"+"<p>&nbsp;&nbsp;&nbsp;" + input1 + "<br>+&nbsp;" + sixtnco+ "<br>--------<br>&nbsp;&nbsp;&nbsp;" + add2+"</p>";
        if(add2.length == input1.length){
            ans2 = calculateSixteenComplement(add2);
            result.innerHTML = "-" + ans2;
            print += "<br><h5>STEP 2 : Check the presence of carry</h5>";
            print += "->  _"+add2+"<br>";
            print += "Note- No carry is present. So, answer will be -ve <br>"
            print += "<br><h5>STEP 3 : Find 16's complement of sum found in 'STEP 1'</h5>";
            print += "ANSWER (Sixteen's complement of the sum ) ->  <span style='text-decoration: underline;'>-" + ans2 + "</span>";
        } else if (add2.length > input1.length){
            ans2 = add2.substring(1);
            result.innerHTML = ans2;
            print += "<br><h5>STEP 2 : Check the presence of carry</h5>";
            print += "->  <span style='text-decoration: underline;'>"+add2.substring(0,1) + "</span>" +ans2+"<br>";
            print += "Note- Carry is present. So, answer will be +ve <br>"
            print += "<br><h5>STEP 3 : Find 16's complement of sum found in 'STEP 1'</h5>";
            print += "ANSWER (Discard the carry) ->   <span style='text-decoration: underline;'>" + ans2 + "</span>";
        } else if (add2.length < input1.length){
            var a3 = input1.length - add2.length;
            a3 = Math.pow(10,a3);
            ans2 = a3 + add2;
            ans2 = ans2.substring(1);
            result.innerHTML = "-" + calculateSixteenComplement(ans2);
            print += "<br><h5>STEP 2 : Check the presence of carry</h5>";
            print += "->  _"+add2+"<br>";
            print += "Note- No carry is present. So, answer will be -ve <br>"
            print += "<br><h5>STEP 3 : Find 16's complement of sum found in 'STEP 1'</h5>";
            print += "ANSWER (Sixteen's complement of the sum) ->   <span style='text-decoration: underline;'>-" + ans2 + "</span>";
        }

    }else if(base === "Decimal"){
        var add3 = "";
        var ans3 = "";
        var tenco= calculateTenComplement(input2);
        print += "<h5>STEP 0 : Find 10's complement of Subtrahend</h5>"+input2+"->"+tenco;
        add3 = (parseInt(tenco)+parseInt(input1)).toString();
        print += "<br><br><h5>STEP 1 : Add Minuend and 10's complement of Subtrahend</h5>"+"<p>&nbsp;&nbsp;&nbsp;" + input1 + "<br>+&nbsp;" + tenco+ "<br>--------<br>&nbsp;&nbsp;&nbsp;" + add3+"</p>";
        if(add3.length == input1.length){
            ans3 = calculateTenComplement(add3);
            result.innerHTML = "-" + ans3;
            print += "<br><h5>STEP 2 : Check the presence of carry</h5>";
            print += "->  _"+add3+"<br>";
            print += "Note- No carry is present. So, answer will be -ve <br>"
            print += "<br><h5>STEP 3 : Find 10's complement of sum found in 'STEP 1'</h5>";
            print += "ANSWER (Ten's complement of the sum ) ->  <span style='text-decoration: underline;'>-" + ans3 + "</span>";
        } else if (add3.length > input1.length){
            ans3 = add3.substring(1);
            result.innerHTML = ans3;
            print += "<br><h5>STEP 2 : Check the presence of carry</h5>";
            print += "->  <span style='text-decoration: underline;'>"+add3.substring(0,1) + "</span>" +ans3+"<br>";
            print += "Note- Carry is present. So, answer will be +ve <br>"
            print += "<br><h5>STEP 3 : Find 10's complement of sum found in 'STEP 1'</h5>";
            print += "ANSWER (Discard the carry) ->   <span style='text-decoration: underline;'>" + ans3 + "</span>";
        } else if (add3.length < input1.length){
            var a4 = input1.length - add3.length;
            a4 = Math.pow(10,a4);
            ans3 = a4 + add3;
            ans3 = ans3.substring(1);
            result.innerHTML = "-" + calculateTenComplement(ans3);
            print += "<br><h5>STEP 2 : Check the presence of carry</h5>";
            print += "->  _"+add3+"<br>";
            print += "Note- No carry is present. So, answer will be -ve <br>"
            print += "<br><h5>STEP 3 : Find 10's complement of sum found in 'STEP 1'</h5>";
            print += "ANSWER (Ten's complement of the sum) ->   <span style='text-decoration: underline;'>-" + ans3 + "</span>";
        }

    }
    work.innerHTML = print;
}

//called this function while subtracting binary numbers.
function calculateTwoComplement(x){
    var ar = x.split("");
    var two = new Array(ar.length);

    for (var i = ar.length - 1; i >= 0; i--) {
        two[i] = ar[i];
        if (ar[i] == 1)
            break;

    }
    if (i == -1) {
        var twoc = '1' + two.join('');
    } else {
        for (var k = i - 1; k >= 0; k--) {
            if (ar[k] == 0) {
                two[k] = 1;

            } else {
                two[k] = 0;
            }
        }
        var twoc = two.join('');
    }
    return twoc;
}

//called this function while subtracting octal numbers
function calculateEightComplement(x){
    if(x.search(8)==0 || x.search(9)==0){
        return  "Invalid";
    }else{
    var sev = "";
    var eig = "";
    for (var i = 0; i < x.length; i++) {
        sev += '7' - x[i];
    }
    eig = (parseInt(sev,8) + 1).toString(8);
    return eig;
    }
}

//called this function while subtracting hexa-decimal numbers.
function calculateSixteenComplement(x){
    var fiftn1 = "";
    var sixtn1 = "";
    for (var i = 0; i < x.length; i++) {
        fiftn1 += ('15' - parseInt(x[i],16)).toString(16);
    }
    sixtn1 = (parseInt(fiftn1,16) + 1).toString(16);
    return sixtn1;
}

//called this function while subtracting decimal numbers.
function calculateTenComplement(x){
    var ninec = "";
    var tenc = "";
    for (var i = 0; i < x.length; i++) {
        ninec += '9' - x[i];
    }
    tenc = (parseInt(ninec) + 1).toString();
    return tenc;
}

//----------------------------

//Function for multiplication of any number system
function multBinDecHexOct(){
    const firstBase = document.getElementById("multiplying-all-select1").value;
    const secondBase = document.getElementById("multiplying-all-select2").value;
    const input1 = document.getElementById("multiplying-all-input1").value;
    const input2 = document.getElementById("multiplying-all-input2").value;
    const resultType= document.getElementById("multiplying-all-result-type").value;
    let result = document.getElementById("multiplying-all-result");
    var x1;
    var x2;

    if(firstBase === "Binary")
    x1=parseInt(input1,2);
    else if (firstBase === "Octal")
    x1=parseInt(input1,8);
    else if(firstBase === "Hexa Decimal")
    x1=parseInt(input1,16);
    else if(firstBase === "Decimal")
    x1=parseInt(input1);

    if(secondBase === "Binary")
    x2=parseInt(input2,2);
    else if (secondBase === "Octal")
    x2=parseInt(input2,8);
    else if(secondBase === "Hexa Decimal")
    x2=parseInt(input2,16);
    else if(secondBase === "Decimal")
    x2=parseInt(input2);

    var x3=x1*x2;

    if(resultType === "Binary")
    result.innerHTML="Answer in binary="+x3.toString(2);
    else if (resultType === "Octal")
    result.innerHTML="Answer in Octal="+x3.toString(8);
    else if(resultType === "Hexa Decimal")
    result.innerHTML="Answer in Hexa Decimal="+x3.toString(16);
    else if(resultType === "Decimal")
    result.innerHTML="Answer in Decimal="+x3.toString();
}

//----------------------------


//----------------------------	//----------------------------

//function for hamming distance between numbers
function hammingDistance(x, y) {
    let val = x ^ y;
    let res = 0;
    
    if(x.length == y.length){
    while (val > 0) {
      val &= val - 1;
      res++;
    }
    
    document.getElementById("distResult").innerHTML = "The hamming distance between " + x + " and " + y + " is: " + res;
    }else{
        document.getElementById("distResult").innerHTML = "Error : Unequal Length ( Hamming distance can be calculated between 2 equal inputs )"
    }
}

//function for encoding a message hamming code
function hammingCalc(){
    const input = document.getElementById("hamming-input").value;
    const type1 = document.getElementById("hamming-select1").value;
    const type2 = document.getElementById("hamming-select2").value;
    let result = document.getElementById("hamming-result");

    if(type1 === "Left-To-Right" && type2 ==="Even"){
        result.innerHTML = hammingCodeLtoREven(input);
    }else if(type1 === "Right-To-Left" && type2 === "Even"){
        result.innerHTML = hammingCodeRtoLEven(input);
    }else if(type1 === "Left-To-Right" && type2 === "Odd"){
        result.innerHTML = hammingCodeLtoROdd(input);
    }else if(type1 === "Right-To-Left" && type2 === "Odd"){
        result.innerHTML = hammingCodeRtoLOdd(input);
    }
}

//function for  error detection of a message in hamming code
function hammingCalc1(){
    let input1 = document.getElementById("detect-input").value;
    const type1 = document.getElementById("detect-type1").value;
    const type2 = document.getElementById("detect-type2").value;
    let result1 = document.getElementById("detect-result");

    if(type1 === "Right-To-Left" && type2 === "Even"){//right to left with even parity
        let n = input1.length;
        let k=0,ctr=0;
        var parity = "";
        input1= input1.split("").reverse().join("");
        for (var i = 0; i < n;i++){
            if((i+1)== Math.pow(2,k)){
                for(var j =i;j < n; j++){
                    if(((i+1) & (j+1)) == (i+1)){
                        if(input1[j] == "1"){
                            ctr++;
                        }else{
                            ctr +=0;
                        }
                    }
                }
                if(ctr % 2 == 0){
                    parity +="0";
                }else if(ctr % 2 == 1 ){
                    parity +="1";
                }
                ctr = 0;
                k++;
            }
        }
        if(parseInt(parity)==0){
            result1.innerHTML = "Error Free";
        }else{
            parity =  parity.split("").reverse().join("");
            var p = parseInt(parity,2).toString();
            result1.innerHTML = "The position of error is  &nbsp; &nbsp; " + `${(n-p)+1}` + "&nbsp;&nbsp; from left or &nbsp;&nbsp;" + p +"&nbsp;&nbsp; from right";
        }
    }else if(type1 === "Left-To-Right" && type2 === "Even"){ //left to right using even parity
        let n = input1.length;
        let k=0,ctr=0;
        var parity = "";
        for (var i = 0; i < n;i++){
            if((i+1)== Math.pow(2,k)){
                for(var j =i;j < n; j++){
                    if(((i+1) & (j+1)) == (i+1)){
                        if(input1[j] == "1"){
                            ctr++;
                        }else{
                            ctr +=0;
                        }
                    }
                }
                if(ctr % 2 == 0){
                    parity +="0";
                }else if(ctr % 2 == 1 ){
                    parity +="1";
                }
                ctr = 0;
                k++;
            }
        }
        if(parseInt(parity)==0){
            result1.innerHTML = "Error Free";
        }else{
            parity =  parity.split("").reverse().join("");
            var p = parseInt(parity,2).toString();
            result1.innerHTML = "The position of error is  &nbsp; &nbsp; " + p + "&nbsp;&nbsp; from left or &nbsp;&nbsp;" +  `${(n-p)+1}` +"&nbsp;&nbsp; from right";
        }
    }else if (type1 === "Right-To-Left" && type2 === "Odd"){//for right to left using odd parity
        let n = input1.length;
        let k=0,ctr=0;
        var parity = "";
        input1= input1.split("").reverse().join("");
        for (var i = 0; i < n;i++){
            if((i+1)== Math.pow(2,k)){
                for(var j =i;j < n; j++){
                    if(((i+1) & (j+1)) == (i+1)){
                        if(input1[j] == "1"){
                            ctr++;
                        }else{
                            ctr +=0;
                        }
                    }
                }
                if(ctr % 2 == 0){
                    parity +="1";
                }else if(ctr % 2 == 1 ){
                    parity +="0";
                }
                ctr = 0;
                k++;
            }
        }
        if(parseInt(parity)==0){
            result1.innerHTML = "Error Free";
        }else{
            parity =  parity.split("").reverse().join("");
            var p = parseInt(parity,2).toString();
            result1.innerHTML = "The position of error is  &nbsp; &nbsp; " + `${(n-p)+1}` + "&nbsp;&nbsp; from left or &nbsp;&nbsp;" + p +"&nbsp;&nbsp; from right";
        }
    }else if(type1 === "Left-To-Right" && type2 === "Odd"){//left to right using odd parity
        let n = input1.length;
        let k=0,ctr=0;
        var parity = "";
        for (var i = 0; i < n;i++){
            if((i+1)== Math.pow(2,k)){
                for(var j =i;j < n; j++){
                    if(((i+1) & (j+1)) == (i+1)){
                        if(input1[j] == "1"){
                            ctr++;
                        }else{
                            ctr +=0;
                        }
                    }
                }
                if(ctr % 2 == 0){
                    parity +="1";
                }else if(ctr % 2 == 1 ){
                    parity +="0";
                }
                ctr = 0;
                k++;
            }
        }
        if(parseInt(parity)==0){
            result1.innerHTML = "Error Free";
        }else{
            parity =  parity.split("").reverse().join("");
            var p = parseInt(parity,2).toString();
            result1.innerHTML = "The position of error is  &nbsp; &nbsp; " + p + "&nbsp;&nbsp; from left or &nbsp;&nbsp;" + `${(n-p)+1}` +"&nbsp;&nbsp; from right";
        }
    }
}

//function for encoding message using hamming code with even parity from left to right
function hammingCodeLtoREven(x){
    let n = x.length;
    let p = 0,t = 0,c=0;
    let k = 0, l = 0,s=0;
    let res = "",res1="";
    var par=0;
    //find number of parity bits
    while(p==0){
        if (Math.pow(2,s) >= n+ s + 1){
        p=s;
        }
        s+=1;
    }
    t=p+n; //total bit of hamming code
    for (var j = 0; j<t; j++){
        if((j+1)== Math.pow(2,k)){
            res = res + "?";
            k+=1;
        }else{
            res = res + x[l];
            l+=1;
        }
    }
    for (var i =0; i<res.length;i++){
        if(res[i]=="?"){
            c=i+2;
            while(c<=t){
                if(((i+1) & c) == (i+1)){
                    par += parseInt(res[c-1]);
                }
                c+=1;
            }
            if(par % 2 == 0){
                res1 +="0";
            }else {
                res1 +="1";
            }
            par =0;
        }else{
            res1 += res[i];
        }
    }
    console.log(res);
    return res1;
}

//function for encoding message using hamming code with even parity from right ot left
function hammingCodeRtoLEven(x){
    let n = x.length;
    let p = 0,t = 0,c=0;
    let k = 0, l = 0,s=0;
    let res = "",res1="";
    let par=0;
    x= x.split("").reverse().join("");//reverse the input for R to L
    //find number of parity bits
    while(p==0){
        if (Math.pow(2,s) >= n+ s + 1){
        p=s;
        }
        s+=1;
    }
    t=p+n; //total bit of hamming code
    for (var j = 0; j<t; j++){
        if((j+1)== Math.pow(2,k)){
            res = res + "?";
            k+=1;
        }else{
            res = res + x[l];
            l+=1;
        }
    }
    for (var i =0; i<res.length;i++){
        if(res[i]=="?"){
            c=i+2;
            while(c<=t){
                if(((i+1) & c) == (i+1)){
                    par += parseInt(res[c-1]);
                }
                c+=1;
            }
            if(par % 2 == 0){
                res1 +="0";
            }else {
                res1 +="1";
            }
            par =0;
        }else{
            res1 += res[i];
        }
    }
    console.log(res);
    return res1.split("").reverse().join(""); //reverse the ans to get the ans for R to L
}

//function for encoding message using hamming code with odd parity from left to right
function hammingCodeLtoROdd(x){
    let n = x.length;
    let p = 0,t = 0,c=0;
    let k = 0, l = 0,s=0;
    let res = "",res1="";
    var par=0;
    //find number of parity bits
    while(p==0){
        if (Math.pow(2,s) >= n+ s + 1){
        p=s;
        }
        s+=1;
    }
    t=p+n; //total bit of hamming code
    for (var j = 0; j<t; j++){
        if((j+1)== Math.pow(2,k)){
            res = res + "?";
            k+=1;
        }else{
            res = res + x[l];
            l+=1;
        }
    }
    for (var i =0; i<res.length;i++){
        if(res[i]=="?"){
            c=i+2;
            while(c<=t){
                if(((i+1) & c) == (i+1)){
                    par += parseInt(res[c-1]);
                }
                c+=1;
            }
            if(par % 2 == 0){
                res1 +="1";
            }else {
                res1 +="0";
            }
            par =0;
        }else{
            res1 += res[i];
        }
    }
    console.log(res);
    return res1;
}

//function for encoding message using hamming code with odd parity from Right to left
function hammingCodeRtoLOdd(x){
    let n = x.length;
    let p = 0,t = 0,c=0;
    let k = 0, l = 0,s=0;
    let res = "",res1="";
    let par=0;
    x= x.split("").reverse().join("");//reverse the input for R to L
    //find number of parity bits
    while(p==0){
        if (Math.pow(2,s) >= n+ s + 1){
        p=s;
        }
        s+=1;
    }
    t=p+n; //total bit of hamming code
    for (var j = 0; j<t; j++){
        if((j+1)== Math.pow(2,k)){
            res = res + "?";
            k+=1;
        }else{
            res = res + x[l];
            l+=1;
        }
    }
    for (var i =0; i<res.length;i++){
        if(res[i]=="?"){
            c=i+2;
            while(c<=t){
                if(((i+1) & c) == (i+1)){
                    par += parseInt(res[c-1]);
                }
                c+=1;
            }
            if(par % 2 == 0){
                res1 +="1";
            }else {
                res1 +="0";
            }
            par =0;
        }else{
            res1 += res[i];
        }
    }
    console.log(res);
    return res1.split("").reverse().join(""); //reverse the ans to get the ans for R to L
}

//function for correction of  a message hamming code
function hammingCalc2(){
    var input = document.getElementById("crct-input").value;
    const type1 = document.getElementById("crct-type1").value;
    const type2 = document.getElementById("crct-type2").value;
    let result1 = document.getElementById("crct-result");
    var result ="";

    if(type1 === "Left-To-Right" && type2 ==="Even"){
        let n = input.length;
        let k=0,ctr=0;
        var parity = "";
        for (var i = 0; i < n;i++){
            if((i+1)== Math.pow(2,k)){
                for(var j =i;j < n; j++){
                    if(((i+1) & (j+1)) == (i+1)){
                        if(input[j] == "1"){
                            ctr++;
                        }else{
                            ctr +=0;
                        }
                    }
                }
                //console.log(ctr);
                if(ctr % 2 == 0){
                    parity +="0";
                }else if(ctr % 2 == 1 ){
                    parity +="1";
                }
            
                ctr = 0;
                k++;
            }
        }
        //console.log(parity);
        if(parseInt(parity)==0){
            result = "Error Free";
        }else{
            parity =  parity.split("").reverse().join("");
            var p = parseInt(parity,2);
            for(var a = 0; a<n;a++){
                if(a == p-1){
                    if(input[a] == "1"){
                        result +="0";
                    }else{
                        result +="1";
                    }
                }else{
                    result += input[a];
                }
            }
        }
    }else if(type1 === "Left-To-Right" && type2 ==="Odd"){
        let n = input.length;
        let k=0,ctr=0;
        var parity = "";
        for (var i = 0; i < n;i++){
            if((i+1)== Math.pow(2,k)){
                for(var j =i;j < n; j++){
                    if(((i+1) & (j+1)) == (i+1)){
                        if(input[j] == "1"){
                            ctr++;
                        }else{
                            ctr +=0;
                        }
                    }
                }
                //console.log(ctr);
                if(ctr % 2 == 0){
                    parity +="1";
                }else if(ctr % 2 == 1 ){
                    parity +="0";
                }
            
                ctr = 0;
                k++;
            }
        }
        //console.log(parity);
        if(parseInt(parity)==0){
            result = "Error Free";
        }else{
            parity =  parity.split("").reverse().join("");
            var p = parseInt(parity,2);
            for(var a = 0; a<n;a++){
                if(a == p-1){
                    if(input[a] == "1"){
                        result +="0";
                    }else{
                        result +="1";
                    }
                }else{
                    result += input[a];
                }
            }
        }
    }else if(type1 === "Right-To-Left" && type2 ==="Even"){
        let n = input.length;
        let k=0,ctr=0;
        var parity = "";
        input = input.split("").reverse().join("");
        for (var i = 0; i < n;i++){
            if((i+1)== Math.pow(2,k)){
                for(var j =i;j < n; j++){
                    if(((i+1) & (j+1)) == (i+1)){
                        if(input[j] == "1"){
                            ctr++;
                        }else{
                            ctr +=0;
                        }
                    }
                }
                //console.log(ctr);
                if(ctr % 2 == 0){
                    parity +="0";
                }else if(ctr % 2 == 1 ){
                    parity +="1";
                }
            
                ctr = 0;
                k++;
            }
        }
        //console.log(parity);
        if(parseInt(parity)==0){
            result = "Error Free";
        }else{
            parity =  parity.split("").reverse().join("");
            var p = parseInt(parity,2);
            for(var a = 0; a<n;a++){
                if(a == p-1){
                    if(input[a] == "1"){
                        result +="0";
                    }else{
                        result +="1";
                    }
                }else{
                    result += input[a];
                }
            }
            result = result.split("").reverse().join("");
        }
    }else if(type1 === "Right-To-Left" && type2 ==="Odd"){
        let n = input.length;
        let k=0,ctr=0;
        var parity = "";
        input = input.split("").reverse().join("");
        for (var i = 0; i < n;i++){
            if((i+1)== Math.pow(2,k)){
                for(var j =i;j < n; j++){
                    if(((i+1) & (j+1)) == (i+1)){
                        if(input[j] == "1"){
                            ctr++;
                        }else{
                            ctr +=0;
                        }
                    }
                }
                //console.log(ctr);
                if(ctr % 2 == 0){
                    parity +="1";
                }else if(ctr % 2 == 1 ){
                    parity +="0";
                }
            
                ctr = 0;
                k++;
            }
        }
        //console.log(parity);
        if(parseInt(parity)==0){
            result = "Error Free";
        }else{
            parity =  parity.split("").reverse().join("");
            var p = parseInt(parity,2);
            for(var a = 0; a<n;a++){
                if(a == p-1){
                    if(input[a] == "1"){
                        result +="0";
                    }else{
                        result +="1";
                    }
                }else{
                    result += input[a];
                }
            }
            result = result.split("").reverse().join("");
        }
    }
    result1.innerHTML = result;
}


//Function that performs conversion of  binary to bcd
function separator(str, n) { //used for converting BCD code to decimal
    var val = [];
    var i, l;
    for(i = 0, l = str.length; i < l; i += n) {
       val.push(parseInt(str.substr(i, n),2));
    }

    return val;
};
function bcdTOdecimal(x) {
    var y=x.length;
    var input1="";
    var inv=["I","N","V","A","L","I","D"];
    if(y%4==1 || y==1)
    input1="000"+x;
    else if(y%4==2 || y==2)
    input1="00"+x;
    else if(y%4==3 || y==3)
    input1="0"+x;
    else
    input1=x;
    const minVal = (currentValue) => currentValue <= 9;
    w=separator(input1,4);
    if(w.every(minVal)==true)
    return w;
    else
    return inv;
    }
function decimalTObcd(z=""){
    var x = "_";

    for (var i = 0; i < z.length; i++) {
        var y = parseInt(z[i]).toString(2)
        if (y.length == 1) {
        x = x + "000" + y + "_   ";
        }
        if (y.length == 2) {
        x = x + "00" + y + "_   ";
        }
        if (y.length == 3) {
        x = x + "0" + y + "_   ";
        }
        if (y.length == 4) {
        x = x + +y + "_   ";
        }

    }
    return x;

}
function convertbcd() {
    const fromCode = document.getElementById("bcd-select1").value;
    const toCode = document.getElementById("bcd-select2").value;
    var input = document.getElementById("bcd-input").value;
    let result = document.getElementById("bcd-result");

    if( fromCode=="BCD Code" && toCode=="BCD Code")
    result.innerHTML=input;
    else if(fromCode=="Decimal" && toCode=="Decimal")
    result.innerHTML=input;
    else if(fromCode=="BCD Code" && toCode =="Decimal")
    result.innerHTML=bcdTOdecimal(input).join('_');
    else if(fromCode=="Decimal" && toCode=="BCD Code")
    result.innerHTML =decimalTObcd(input);
    if (input == "") {
        result.innerHTML = "";
    } else if (fromCode=="BCD Code" && input.search(/^[10]+$/) == -1 ){
        result.innerHTML = "BCD Code can only have 0's and 1's";

}
}

//----------------------------
//Function to perform BCD addition
function bcdadd(){
    var input1 = document.getElementById("bcdadd-input1").value;
    var input2 = document.getElementById("bcdadd-input2").value;
    let result = document.getElementById("bcdadd-result");

    var s1= bcdTOdecimal(input1).join('');
    var s2= bcdTOdecimal(input2).join('');
    var decimalresult;
    var bcdresult;
    if(s1=="INVALID" || s2=="INVALID")
    result.innerHTML="INVALID BCD";
    else{
        decimalresult=parseInt(s1)+parseInt(s2);
        bcdresult=decimalTObcd(decimalresult.toString());
        result.innerHTML="BCD Result="+bcdresult+"<br>";
        result.innerHTML +="Decimal Result="+decimalresult+"<br>";

    }
    if (input1 == "" && input2 == "") {
        result.innerHTML = "";
    } else if (input1.search(/^[10]+$/) == -1 || input2.search(/^[10]+$/) == -1 )
        result.innerHTML = "BCD Code can only have 0's and 1's";

}
//Function that performs conversion of  decimal to ex3
function convertex3() {

    var input = document.getElementById("ex3-input").value;
    let result = document.getElementById("ex3-result");
    var x = "_";

    for (var i = 0; i < input.length; i++) {
        var y = (parseInt(input[i]) + 3).toString(2)
        if (y.length == 1) {
            x = x + "000" + y + "_   ";
        }
        if (y.length == 2) {
            x = x + "00" + y + "_   ";
        }
        if (y.length == 3) {
            x = x + "0" + y + "_   ";
        }
        if (y.length == 4) {
            x = x + +y + "_   ";
        }

    }

    result.innerHTML = x;
}
//Function that performs conversion of  binary to ex3
function convertex3bin(){
    var input = document.getElementById("ex3bin-input").value;
    let result = document.getElementById("ex3bin-result");
    var x = "_";

    result.innerHTML ="";

    r = parseInt(input, 2).toString(10);
    console.log("decimal");
    console.log(r);

    for (var i = 0; i < r.length; i++) {
        var y = (parseInt(r[i]) + 3).toString(2)
        if (y.length == 1) {
            x = x + "000" + y + "_   ";
        }
        if (y.length == 2) {
            x = x + "00" + y + "_   ";
        }
        if (y.length == 3) {
            x = x + "0" + y + "_   ";
        }
        if (y.length == 4) {
            x = x + +y + "_   ";
        }
    }

    if (input == "") {
        x= "";
    } else if(input.search(/^[10]+$/) == -1)
             x= "Binary code can only have 0's and 1's";
               
    result.innerHTML = x;
}

//Function which performs conversion of Decimal to 2421
function convertdec2421(){
    var input = document.getElementById("dec2421-input").value;
    let result = document.getElementById("dec2421-result");
    var x = "_";

    for (var i = 0; i < input.length; i++) {
        if (input[i] == 0){
            x = x + "0000_";
        }
        if (input[i] == 1) {
            x = x + "0001_" ;
        }
        if (input[i] == 2) {
            x = x + "0010_" ;
        }
        if (input[i] == 3) {
            x = x + "0011_";
        }
        if (input[i] == 4) {
            x = x + "0100_";
        }
        if(input[i] == 5){
            x = x + "1011_";
        }
        if(input[i] == 6){
            x = x + "1100_";
        }
        if(input[i] == 7){
            x = x + "1101_";
        }
        if(input[i] == 8){
            x = x + "1110_";
        }
        if(input[i] == 9){
            x = x + "1111_";
        }
    }
    result.innerHTML = x;
}


//---------------------------------------------------------------------------
//Function that performs conversion of grey to Decimal and viceversa
function reverseString(str) {
    return str.split("").reverse().join("");
}

function convertgreydec(){
    const fromBase = document.getElementById("grey-select2").value;
    var input = document.getElementById("greydec-input").value;
    let result2 = document.getElementById("greydec2-result");
    let work = document.getElementById("grey-dec-working");
    let print = "<h2 style='margin-top: 50px;'>Working Steps </h2> &emsp;";
    result2.innerHTML="";
    let from = 2;
    let to = 2;

    if (fromBase === "Decimal") {
        from = 10; 
        to = 2;
        result1 = parseInt(input, from).toString(to);
    }
    else {
        result1= input;
    }

    //console.log(result1);
    //assigned first value of input inside result
    var x = result1[0];

    if (fromBase === "Grey Code"){
        print +=  "<h4> Converting Grey Code to Decimal </h4> &emsp;";
        print +=  "<br><h5>STEP 1 : Take the first bit of the gray code input and write it to the output. Output -> " + x + "</h5>";
        print +=  "<br><h5>STEP 2 : Repeat the steps below until you reach the end of the input </h5>";
        for (var i = 1; i < result1.length; i++){
            var n = parseInt(x[i - 1] ^ result1[i]).toString();
            print += "Take the " + (i+1) + "'th bit of the input and XOR it to the previous bit of the Output " + "i.e,"+ result1[i] + "⊕" + x.charAt(x.length-1) + "=" + n + "<br>";
            print +=  "Write the result to the output. Outputh ->" + x + "<span style='text-decoration: underline;'>" + n + "</span><br><br>";
            x += n;
        }
        print += "<br><h5>STEP 3 : So, our binary result is:" + x + " </h5>";
        print += "<br><h5>Step 4 : Convert the binary output to decimal</h5>";
        var temp = x;
        x = parseInt(x,2).toString();
        print += temp + "->" + x;
    }

    else{
        print +=  "<h4> Converting Decimal to Grey Code </h4> &emsp;";
        print +=  "<br><h5>STEP 1 : Convert the input from decimal to binary.</h5>";
        print +=  input + "->" + result1;
        print +=  "<br><h5>STEP 2 : Take the first bit of the binary input and write it to the output.</h5>";
        print +=  "Output ->" + x;
        print +=  "<br><h5>STEP 3 : Repeat the steps below until you reach the end of the input </h5>";
        for (var i = 1; i < result1.length; i++){
            var m = parseInt(result1[i - 1] ^ result1[i]).toString();
            print += "Take the " + (i+1) + "'th bit of the input and XOR it to the previous bit of the input " + "i.e,"+ result1[i] + "⊕" + result1[i-1] + "=" + m + "<br>";
            print +=  "Write the result to the output. Outputh ->" + x + "<span style='text-decoration: underline;'>" + m + "</span><br><br>";
            x += m;
        }
        print += "<br><h5>STEP 4 : So, our final gray code result is" + x + "</h5>";
    }
    if(input=="")
	{
	  x="";
	}
    result2.innerHTML = "Answer -> " + x;
    work.innerHTML = print;
}

//Function that performs conversion of grey to binary and viceversa
function convertgrey() {
    const fromBase = document.getElementById("grey-select1").value;
    var input = document.getElementById("grey-input").value;
    let result = document.getElementById("grey-result");
    let work = document.getElementById("grey-working");
    let print = "<h2 style='margin-top: 50px;'>Working Steps </h2> &emsp;";
    var x = input[0];

    if (fromBase == "Binary"){
        print +=  "<h4> Converting Binary to Grey Code </h4> &emsp;";
        print +=  "<br><h5>STEP 1 : Take the first bit of the input and write it to the output.</h5>";
        print +=  "Output ->" + x;
        print +=  "<br><h5>STEP 2 : Repeat the steps below until you reach the end of the input </h5>";
        for (var i = 1; i < input.length; i++){
            var m= parseInt(input[i - 1] ^ input[i]).toString();
            print += "Take the " + (i+1) + "'th bit of the input and XOR it to the previous bit of the input " + "i.e,"+ input[i] + "⊕" + input[i-1] + "=" + m + "<br>";
            print +=  "Write the result to the output. Outputh ->" + x + "<span style='text-decoration: underline;'>" + m + "</span><br><br>";
            x += m;
        }
        print += "<br><h5>STEP 3 : So, our final gray code result is" + x + "</h5>";
    }

    else{
        print +=  "<h4> Converting Grey Code to Binary </h4> &emsp;";
        print +=  "<br><h5>STEP 1 : Take the first bit of the gray code input and write it to the output. Output -> " + x + "</h5>";
        print +=  "<br><h5>STEP 2 : Repeat the steps below until you reach the end of the input </h5>";
        for (var i = 1; i < input.length; i++){
            var n = parseInt(x[i - 1] ^ input[i]).toString();
            print += "Take the " + (i+1) + "'th bit of the input and XOR it to the previous bit of the Output " + "i.e,"+ input[i] + "⊕" + x.charAt(x.length-1) + "=" + n + "<br>";
            print +=  "Write the result to the output. Outputh ->" + x + "<span style='text-decoration: underline;'>" + n + "</span><br><br>";
            x += n;
        }
        print += "<br><h5>Step 3 : So, our binary result is:" + x + " </h5>";
    }

    if (input == "") {
        x= "";
    } else if(input.search(/^[10]+$/) == -1)
             x= "Binary and grey code can only have 0's and 1's";
    result.innerHTML = "Answer ->" + x;
    work.innerHTML = print;
}

//----------------------------
//Function that performs conversion of Binary to Decimal to Hexadecimal and viceversa
function convertBinhex() {
    const fromBase = document.getElementById("binary-hexadecimal-select1").value;
    const toBase = document.getElementById("binary-hexadecimal-select2").value;
    const input = document.getElementById("binary-hexadecimal-input").value;
    let result = document.getElementById("binary-hexadecimal-result");
    let from = 2;
    let to = 2;

    if (fromBase === "Binary") from = 2;
    else if (fromBase === "Decimal") from = 10;
    else if (fromBase === "Octal") from = 8;
    else from = 16;

    if (toBase === "Binary") to = 2;
    else if (toBase === "Decimal") to = 10;
    else if (toBase === "Octal") to = 8;
    else to = 16;

    result.innerHTML = fracDectoBinHexOct(calculatefrac(input,from),to);
    if (input == "") {
        result.innerHTML = "";
    } else if (from == 2) {
        if (input.search(/^[-.10]+$/) == -1)
            result.innerHTML = "Binary numbers can only have 0's and 1's";

    }else if (from == 8) {
        if (input.search(/^[-.01234567]+$/) == -1)
            result.innerHTML = "Octal numbers can't have 8s and 9s";

    }
}


// 1's 2's complement
function onetwoCalc() {
    const input = document.getElementById("onetwonumber").value;
    let result = document.getElementById("onetworesult");
    let work = document.getElementById("onetwoworking");
    var print = "<h5 style='margin-top: 50px;'>Working of the 1's Complement -</h5> &emsp;"
    var ar = input.split("");
    var one = new Array(ar.length);
    var two = new Array(ar.length);
    for (var i = 0; i <ar.length; i++) {
        print+="1";
        if (ar[i] == 0) {
            one[i] = 1;

        } else {
            one[i] = 0;
        }
    }
    var onec = one.join('');
    result.innerHTML = "One's complement of " + input + " is " + onec + "<br>";

    for (var i = ar.length - 1; i >= 0; i--) {
        two[i] = ar[i];
        if (ar[i] == 1)
            break;

    }
    if (i == -1) {
        var twoc = '1' + two.join('');
    } else {
        for (var k = i - 1; k >= 0; k--) {
            if (ar[k] == 0) {
                two[k] = 1;

            } else {
                two[k] = 0;
            }
        }
        var twoc = two.join('');
    }
    result.innerHTML += "Two's complement of " + input + " is " + twoc + "<br>";

    print+=" - "+input+"</span> = <span style='text-decoration: underline;'>"+onec+"</span><br>";

    print+= "<br><h5 style='margin-top: 5px;'>Working of the 2's Complement -</h5> &emsp; 1's Complement + 1 = 2's Complement <br>&emsp; "
    print+=onec+" + 1</span> = <span style='text-decoration: underline;'>"+twoc+"</span>";
    work.innerHTML = print;

    if (input == "") {
        result.innerHTML = "";
        work.innerHTML = "";
    } else if (input.search(/^[10]+$/) == -1){
        result.innerHTML = "Binary numbers can only have 0's and 1's";
        work.innerHTML = "";
    }


}

//7's 8's complement
function seveneightCalc(){
    const input = document.getElementById("seveneightnumber").value;
    let result = document.getElementById("seveneightresult");
    let work = document.getElementById("seveneightworking");
    var print = "<h5 style='margin-top: 50px;'>Working of the 7's Complement -</h5> &emsp;"
    var seven = "";
    var eight = "";

    for (var i = 0; i < input.length; i++) {
        print+="7";
        seven += '7' - input[i];
    }
    result.innerHTML = "Seven's complement of " + input + " is " + seven + "<br>";
    eight = (parseInt(seven,8) + 1).toString(8);
    result.innerHTML = "Seven's complement of "+ input + " is " + parseInt(seven) + "<br>";
    result.innerHTML += "Eight's complement of "+ input + " is " + eight + "<br>";

    print+=" - "+input+"</span> = <span style='text-decoration: underline;'>"+seven+"</span><br>";
    print+= "<br><h5 style='margin-top: 5px;'>Working of the 8's Complement -</h5> &emsp; 7's Complement + 1 = 8's Complement <br>&emsp; "
    print+=seven+" + 1</span> = <span style='text-decoration: underline;'>"+eight+"</span>";
    work.innerHTML = print;

    if (input == "") {
        result.innerHTML = "";
        work.innerHTML = "";
    } else if (input.search(/^[0-7]+$/) == -1){
        result.innerHTML = "Octal Numbers can only have digits between 0 to 7 and - sign not allowed";
        work.innerHTML = "";
    }
}

//15's 16's compliment
function fiftnsixtnCalc() {
    var input = document.getElementById("fiftnsixtnnumber").value;
    let result = document.getElementById("fiftnsixtnresult");
    let work = document.getElementById("fiftnsixtnworking");

    valid = /^[a-fA-F0-9]*$/

    if(!(valid.test(input)))
    {
        result.innerHTML="Please enter valid Hexadecimal number"
        work.innerHTML=""
    }
    else
    {
        var print = "<h5 style='margin-top: 50px;'>Working of the 15's Complement -</h5> &emsp;"
        var fiftn = "";
        var sixtn = "";

        for (var i = 0; i < input.length; i++) {
            print+="f";
            fiftn += (15 - parseInt(input[i],16)).toString(16);

        }
        sixtn = (parseInt(fiftn,16) + 1).toString(16);
        result.innerHTML = "Fifteen's complement of " + input + " is " + fiftn + "<br>";
        result.innerHTML += "Sixteen's complement of " + input + " is " + sixtn + "<br>";


        print+=" - "+input+"</span> = <span style='text-decoration: underline;'>"+fiftn+"</span><br>";
        print+= "<br><h5 style='margin-top: 5px;'>Working of the 16's Complement -</h5> &emsp; 15's Complement + 1 = 16's Complement <br>&emsp; "
        print+=fiftn+" + 1</span> = <span style='text-decoration: underline;'>"+sixtn+"</span>";
        work.innerHTML = print;

        if (input == "") {
            result.innerHTML = "";
            work.innerHTML = "";
        }
        if(fiftn == "NaN"){
            result.innerHTML = "Invalid Hexa Decimal Number"
            work.innerHTML = "";
        }
    }
}


//9's 10's complement

function ninetenCalc() {
    const input = document.getElementById("ninetennumber").value;
    let result = document.getElementById("ninetenresult");
    let work = document.getElementById("ninetenworking");
    var print = "<h5 style='margin-top: 50px;'>Working of the 9's Complement -</h5> &emsp;"
    var nine = "";
    var ten = "";
    for (var i = 0; i < input.length; i++) {
        print+="9";
        nine += '9' - input[i];

    }
    ten = parseInt(nine) + 1;
    result.innerHTML = "Nine's complement of " + input + " is " + parseInt(nine) + "<br>";
    result.innerHTML += "Ten's complement of " + input + " is " + ten + "<br>";

    print+=" - "+input+"</span> = <span style='text-decoration: underline;'>"+nine+"</span><br>";
    print+= "<br><h5 style='margin-top: 5px;'>Working of the 10's Complement -</h5> &emsp; 9's Complement + 1 = 10's Complement <br>&emsp; "
    print+=nine+" + 1</span> = <span style='text-decoration: underline;'>"+ten+"</span>";
    work.innerHTML = print;

    if (input == "") {
        result.innerHTML = "";
    } else if (input.search(/^[0-9]+$/) == -1)
        result.innerHTML = "Decimal Numbers can only have digits between 0 to 9 and '-' sign not allowed";
}


function datecal() {
    var c = new Date(Date.parse(document.getElementById("datef").value));
    var d = new Date(Date.parse(document.getElementById("datet").value));
    var x = new Date(d.getFullYear(), d.getMonth(), 0).getDate();

    if(c!="Invalid Date" && d!="Invalid Date"){
        if (d.getTime() > c.getTime()) {
            var y = d.getFullYear() - c.getFullYear();
            var m = d.getMonth() - c.getMonth();
            var da = d.getDate() - c.getDate();
            if (da < 0) {
                m--;
                da = x + da;
            }
            if (m < 0) {
                y--;
                m = 12 + m;
            }

            var dd = (d.getTime() - c.getTime()) / (1000 * 3600 * 24);
            if (y >= 0) {
                document.getElementById("date-1").innerHTML = `${y} Years ${m} Month ${da} Days`;
                document.getElementById("date-2").innerHTML = `${dd}`;
            } else {

                document.getElementById("date-1").innerHTML = `${-y} Years ${m} Month ${da} Days`;
                document.getElementById("date-2").innerHTML = `${-dd}`;

            }
        } else {
            var y = c.getFullYear() - d.getFullYear();
            var m = c.getMonth() - d.getMonth();
            var da = c.getDate() - d.getDate();
            if (da < 0) {
                m--;
                da = x + da;
            }
            if (m < 0) {
                y--;
                m = 12 + m;
            }

            var dd = (c.getTime() - d.getTime()) / (1000 * 3600 * 24);
            if (y >= 0) {
                document.getElementById("date-1").innerHTML = `${y} Years ${m} Month ${da} Days`;
                document.getElementById("date-2").innerHTML = `${dd}`;
            } else {

                document.getElementById("date-1").innerHTML = `${-y} Years ${m} Month ${da} Days`;
                document.getElementById("date-2").innerHTML = `${-dd}`;

            }
        }
    }else{
        document.getElementById("date-1").innerHTML = "Error : Invalid Date";
        document.getElementById("date-2").innerHTML = "Error : Invalid Date";
    }
}


function computeprobability() {

    var favour = parseInt(document.getElementById('favourable').value);


    var nettotal = parseInt(document.getElementById('total').value);
    let result = document.getElementById('probability-result');
    if((isNaN(favour)) || (isNaN(nettotal)) ){
        result.innerHTML = "Please enter valid input";
    }
    else{
    if (favour < 0 || nettotal < 0) {
        result.innerHTML = "Outcomes can't be negative. Enter positive values only";

    } else if (favour > nettotal) {
        result.innerHTML = "Number of favourable outcomes can't exceeds number of possible outcomes";
    } else {

        result.innerHTML = "The probability of the event is : " + (favour / nettotal).toFixed(3);
    }
}
}

function condprobability(){
    var netevent = parseFloat(document.getElementById('totevent').value);
    var event = parseFloat(document.getElementById('event').value);
    var result1 = (netevent/event).toFixed(3);
    if((isNaN(netevent)) || (isNaN(event)) ){
        document.getElementById("result1").innerHTML = "Please enter valid input";
        document.getElementById("result2").innerHTML = "";
        document.getElementById("result3").innerHTML = "";
    }
    else{
    if (netevent < 0 || event < 0) {
        document.getElementById("result1").innerHTML = "Outcomes can't be negative, Enter positive values only. ";
        document.getElementById("result2").innerHTML = "";
        document.getElementById("result3").innerHTML = "";

    }
    else {
        document.getElementById("result1").innerHTML = "  (P(B | A)) = P(A ∩ B) &divide P(A) " ;
        document.getElementById("result2").innerHTML = " (P(B | A)) =" + netevent + " &divide "  + event ;
        document.getElementById("result3").innerHTML = " Probability of Event B given Event A (P(B | A)) = " + result1 ;
    }

}
}


function computejointprobability() {

    var favourable1 = parseInt(document.getElementById("favourable1").value)
    var favourable2 = parseInt(document.getElementById("favourable2").value)
    var total1 = parseInt(document.getElementById("total1").value)
    var total2 = parseInt(document.getElementById("total2").value)

    var probability1 = favourable1 / total1;
    var probability2 = favourable2 / total2;

    var probability3 = (probability1 * probability2);

    let result1 = document.getElementById("probability-result1");
    let result2 = document.getElementById("probability-result2");
    let result3 = document.getElementById("probability-result3");
    var check = true;

    if((isNaN(favourable1)) || (isNaN(favourable2))  || (isNaN(total1))  || (isNaN(total2))){
        result1.innerHTML = "Please enter valid input";
        result2.innerHTML = "";
        result3.innerHTML = "";
    }
    else{
    if (favourable1 >= 0 && total1 > 0 && favourable2 >= 0 && total2 > 0) {
        if (favourable1 > total1) {
            result1.innerHTML = "Number of favourable outcomes can't exceeds number of possible outcomes in first event";
            check = false;
        } else {
            result1.innerHTML = "The probability of first event is : " + (probability1).toFixed(3);
        }

        if (favourable2 > total2) {
            result2.innerHTML = "Number of favourable outcomes can't exceeds number of possible outcomes in second event";
            check = false;
        } else {
            result2.innerHTML = "The probability of second event is : " + (probability2).toFixed(3);
        }

        if (check == true) {
            result3.innerHTML = "The joint probability of both the events is: " + (probability3).toFixed(3);

        }
    } else {
        result1.innerHTML = "Outcomes can't be negative. Enter positive values only";
        result2.innerHTML = "";
        result3.innerHTML = "";
    }
}
}


function computebayesprobability() {

    var favourable1 = parseInt(document.getElementById("fav1").value)
    var favourable2 = parseInt(document.getElementById("fav2").value)
    var total1 = parseInt(document.getElementById("tot1").value)
    var total2 = parseInt(document.getElementById("tot2").value)
	var pbanda = parseFloat(document.getElementById("pandb").value)

    var probability1 = favourable1 / total1;
    var probability2 = favourable2 / total2;

    var probability3 =pbanda/probability2;

    var probability4=pbanda/probability1;

    console.log(probability1);
    console.log(probability2);

    let result1 = document.getElementById("bayesresult1");
    let result2=document.getElementById("bayesresult2");
    var check = true;

    if((isNaN(favourable1)) || (isNaN(favourable2))  || (isNaN(total1))  || (isNaN(total2)) || (isNaN(pbanda))){
        result1.innerHTML = "Please enter valid input";
        result2.innerHTML = "";
    }
else{
    if (favourable1 >= 0 && total1 > 0 && favourable2 >= 0 && total2 > 0) {
        if (favourable1 > total1) {
            result1.innerHTML = "Number of favourable outcomes can't exceeds number of possible outcomes in first event";
            result2.innerHTML = "";
            check = false;
        }

        else if (favourable2 > total2) {
            result1.innerHTML = "Number of favourable outcomes can't exceeds number of possible outcomes in second event";
            result2.innerHTML = "";
            check = false;
        }
		 else if (pbanda>probability2 || pbanda>probability1) {
            result1.innerHTML = "Probability of intersection is always equal to or less than the probability of individual events";
			result2.innerHTML ="";
            check = false;
        }

         if (check == true) {
            result1.innerHTML = "The likelihood of event  A occurring given that B is true is:- " + (probability3).toFixed(3);
             result2.innerHTML ="The likelihood of event  B occurring given that A is true is:- " + (probability4).toFixed(3);

        }
    } else {
        result1.innerHTML = "Outcomes can't be negative. Enter positive values only";
        result2.innerHTML = "";

    }
}
}


function angleplot() {

//clearing the canvas
    var canvas = document.getElementById('plotangleres');
    var context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);


    var input = document.getElementById("inputangle").value;
    var c = document.getElementById("plotangleres");
    var ctx = c.getContext("2d");
    ctx.lineWidth = 3;

//for labelling 0
    var c0tx = c.getContext("2d");
    c0tx.font = "15px Arial";
    c0tx.fillText("0° ", 630, 250);

//for labelling 90
    var c90tx = c.getContext("2d");
    c90tx.font = "15px Arial";
    c90tx.fillText("90° ", 510, 125);

//for labelling 180
    var c180tx = c.getContext("2d");
    c180tx.font = "15px Arial";
    c180tx.fillText("180° ", 335, 250);

//for labelling 270
    var c270tx = c.getContext("2d");
    c270tx.font = "15px Arial";
    c270tx.fillText("270° ", 510, 400);

    var ytx = c.getContext("2d");
    var xtx = c.getContext("2d");
    ytx.moveTo(500, 0);
    ytx.lineTo(500, 1000);
    ytx.stroke();
    xtx.moveTo(0, 250);
    xtx.lineTo(1000, 250);
    xtx.stroke();
    ctx.beginPath();
    input = input % 360;
    if (input < 0) {
        ctx.arc(500, 250, 125, -2 * Math.PI - ((input / 180) * Math.PI), 0, true);
    } else {
        ctx.arc(500, 250, 125, 0, 2 * Math.PI - ((input / 180) * Math.PI), true);
    }
    ctx.stroke();

}
function fa(x)
{
    if(x==1)
        return 1;
    return x * fa(x-1);
}

function posse(){
    let a  = parseInt(document.getElementById("anglecalc").value)
    let n = parseFloat(360/(180-a))
    if(n === parseInt(n)){
        document.getElementById("posseans").innerHTML = "Yes It is possible"
    }
    else
        document.getElementById("posseans").innerHTML = "Not possible"
}
function rankcal() {

    var input = document.getElementById("rankcal-input").value;
    let result = document.getElementById("rankcal-result");
    if(input == ""){
    result.innerHTML = "Enter a word to get its rank in dictionary";
    }
    input = input.toUpperCase();
    var s = input.length;
    var m = fa(s);
    var ans =1;
    var c;
    for (var j=0; j<s;++j)
    {
        m /= s-j;
        c = ran(input,j,s-1);
        ans = ans+ (c*m);
    }
    if(input.match(/^[A-Za-z]+$/))
        {
            result.innerHTML = ans;
        }
    else
        result.innerHTML = "Invalid input use alphabet only";
}


function ran(x,y,z)
{
    var c = 0;
    for (var j=y+1; j<=z;++j)
    {
        if(x[j]<=x[y])
        {
            c++;
        }
    }
    return c;
}
function radians_to_degrees(radians)
{
  var pi = Math.PI;
  return radians * (180/pi);
}


function ssscal()
{
    var a=document.getElementById("sd1").value;
    var b=document.getElementById("sd2").value;
    var c=document.getElementById("sd3").value;
    var ans="";
    if(a==""||b==""||c=="")
    {
        ans="Error: All three sides are required to find all the angles";
    }
    else
    {
            var cosa= (b*b+c*c-a*a)/(2*b*c);
            var cosb= (a*a+c*c-b*b)/(2*c*a);
            var cosc= (b*b+a*a-c*c)/(2*b*a);
            var anga=Math.acos(cosa);
            var angb=Math.acos(cosb);
            var angc=Math.acos(cosc);
            var ab,bc,ca;
            ab=radians_to_degrees(anga);
            bc=radians_to_degrees(angb);
            ca=radians_to_degrees(angc);

            console.log(anga);
            console.log(angb);
            console.log(angc);
            
            ab=ab.toPrecision(4);
            bc=bc.toPrecision(4);
            ca=ca.toPrecision(4);
            ans="The required angles oppsite to first side is: "+ab+" second side is: "+bc+"  third side is: "+ca;
    }
    document.getElementById("sstans").innerHTML=ans;
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

function slvcal()
{
    a= parseFloat(document.getElementById("solvex").value);  
    b= parseFloat(document.getElementById("solvey").value); 
    c= parseFloat(document.getElementById("solvez").value);
    var output = document.getElementById("slvans");   
    var ans="";
    if(isNaN(a) || isNaN(b) || isNaN(c)){
        ans += "\\[Please \\space enter \\space all \\space the \\space values \\]";
        output.innerHTML = ans;
        renderMathInElement(output);
    }
    else if(b<0){
        ans += "\\[The \\space value \\space of \\space X \\space is \\]";
        ans += "\\[" + a + "\\space X \\space " + b + "\\space = \\space " + c + " \\]";
        ans += "\\[" + a + "\\space X \\space = \\space " + (c-b) + "\\]";
        ans += "\\[\\space X \\space = \\space " + (c-b)/a + "\\]"; 
        output.innerHTML = ans;
        renderMathInElement(output);
    }
    else
    {
        ans += "\\[The \\space value \\space of \\space X \\space is \\]";
        ans += "\\[" + a + "\\space X \\space + \\space " + b + "\\space = \\space " + c + " \\]";
        ans += "\\[" + a + "\\space X \\space = \\space " + (c-b) + "\\]";
        ans += "\\[\\space X \\space = \\space " + (c-b)/a + "\\]"; 
        output.innerHTML = ans;
        renderMathInElement(output);
    }
}

// >>>>>>> T-test function()
function tvalue_mean(arr) {
    let sum=0;
    for (var i = 0; i < arr.length; i++){
        sum += arr[i];
    }

    return sum / arr.length;
}

function tvalue_dec(arr, mean) {
    let diff = 0
    for (var i = 0; i < arr.length; i++) {
        var temp = 0
        temp = arr[i] - mean
        temp = Math.pow(temp,2)
        diff += temp;
    }
    
    return diff
}

function tvalue_SD(diff, length) {
    var val = diff / (length - 1)
    return Math.sqrt(val);
}

function tvalue() {
    let list1 = document.getElementById("list1").value;
    let list2 = document.getElementById("list2").value;

    list1 = list1.split(" ");
    list2 = list2.split(" ");
    let n1 = list1.length
    let n2 = list2.length

    if (n1 <= 30 && n2 <= 30) {
        for (var i = 0; i < n1; i++) {
            list1[i] = parseInt(list1[i]);
        }
        for (var i = 0; i < n2; i++) {
            list2[i] = parseInt(list2[i]);
        }
    
        document.getElementById('steps').innerHTML = "Values calculated while the test:"
        let mean1 = tvalue_mean(list1)
        document.getElementById('mean1').innerHTML = "Mean of first set of numbers = " + mean1;
    
        let mean2 = tvalue_mean(list2)
        document.getElementById('mean2').innerHTML = "Mean of second set of numbers = " + mean2;
    
        // successive decrease in value through mean;
        let diff1 = tvalue_dec(list1, mean1)
        let diff2 = tvalue_dec(list2, mean2)
    
        let SD1 = tvalue_SD(diff1, n1)
        document.getElementById('SD1').innerHTML = "Standard Deviation of first set of numbers = " + Number.parseFloat(SD1).toPrecision(4);
        let SD2 = tvalue_SD(diff2, n2)
        document.getElementById('SD2').innerHTML = "Standard Deviation of second set of numbers = " + Number.parseFloat(SD2).toPrecision(4);
    
        let delta_sd = Math.sqrt((Math.pow(SD1,2) / n1) + (Math.pow(SD2,2) / n2))
        let ttest_value = (mean1 - mean2) / delta_sd
    
        document.getElementById('testans').innerHTML = "The value for the T-test is " + ttest_value + " = <strong>" + Number.parseFloat(ttest_value).toPrecision(4) + "</strong>(approx)."
        document.getElementById('stepsbox').style.display = "block"
    } else {
        document.getElementById('stepsbox').style.display = "none" 
        document.getElementById('testans').innerHTML = "T-test is not applicable for set of numbers more than 30"
    }
}

// t-value formula
katex.render(String.raw`\bar{X1} - \bar{X2} \atop \sqrt{S1^2/N1 + S2^2/N2}`, document.getElementById('tformula'), {
    throwOnError: false
})

// Z-test logic 

function zvalue() {
    let pm = document.getElementById('pm').value
    let sm = document.getElementById('sm').value
    let sd = document.getElementById('sd').value
    let sn = document.getElementById('sn').value

    // z score
    let z = ((sm - pm) * Math.sqrt(sn)) / sd

    let alpha = document.getElementById('alpha').value;
    let pvalue;
    if (alpha == 0.01) {
        pvalue = 2.58;
    } else if (alpha == 0.05) {
        pvalue = 1.96; 
    } else if (alpha == 0.1) {
        pvalue = 1.64;
    }

    if (z > pvalue) {
        document.getElementById('stepsbox2').style.display = "block"
        document.getElementById('ztestans').innerHTML = "<strong>Z score = " + Number.parseFloat(z).toPrecision(4) + " > " + pvalue + "</strong>, Null Hypothesis is Rejected."
        document.getElementById('pvalue').innerHTML = "P value = " + pvalue
        document.getElementById('alphavalue').innerHTML = "Alpha(α) = " + alpha
    } else {
        document.getElementById('stepsbox2').style.display = "none"
        document.getElementById('ztestans').innerHTML = "<strong>Z score = " + Number.parseFloat(z).toPrecision(4) + " < " + pvalue + "</strong>, Null Hypothesis is Not Rejected."
    }
}

function lrccal()
{
    var num1=document.getElementById("setlrx").value;
    var num2=document.getElementById("setlry").value;
    valid=/^([-]{0,1}\d{1,}[\.]{0,1}\d{0,}[ ]?)*$/;
    var s="";
    if(num1==""||num2=="")
    {
       s= "Please enter number";
    }
    else if(!valid.test(num1&&num2))
    {
        s= "Enter space separated numbers. Use of alphabets and special character is not allowed for calculation purpose";
    }
    else{
    num1=num1.trim();
    num1 = num1.split(" ");
    var len1=parseInt(num1.length);
   
    var number1=[], sum1=0, sum2=0, sum12=0, sum1_sq=0, sum2_sq=0;
    for (i = 0; i < len1; i++)
     {

        number1[i] = parseFloat(num1[i].trim());
        sum1+=number1[i];
        sum1_sq+=(number1[i])**2;
    }
    num2=num2.trim();
    num2 = num2.split(" ");
    var len2=parseInt(num2.length);
    if(len1!=len2)
    {
        s="Your datasets X and Y contain different numbers of element";
    }
    else{
    var number2=[];
    for (i = 0; i < len2; i++) {
        number2[i] = parseFloat(num2[i].trim());
        sum2+=number2[i];
        sum2_sq+=(number2[i])**2;
        sum12+=(number1[i]*number2[i]);
    }
     var slope= ((sum2*sum1_sq)-(sum1*sum12))/((len1*sum1_sq)-(sum1**2));
     var intercept= ((len1*sum12)-(sum1*sum2))/((len1*sum1_sq)-(sum1**2));
    s="The calculated linear regression is: "+intercept+" + "+slope+" x";
}
}
document.getElementById("lrcans").innerHTML=s;
}

function ratpercal()
{
    var num1=document.getElementById("ratperx").value;
    var num2=document.getElementById("ratpery").value;
    ans="";
    if(num1==""||num2=="")
    {
        ans="Please enter complete ratio";
    }
    else
    {
        num1=parseFloat(num1);
        num2=parseFloat(num2);
        var z=num1/num2;
        z=z*100;
        ans="The calculated percentage is: "+z+" %";
    }
    document.getElementById("ratperans").innerHTML=ans;

}
function hypertrigno()
{   
    const i = parseInt(document.getElementById("hypertrignoin").value);
    var sinh=document.getElementById("hypersinh");
    var cosh=document.getElementById("hypercosh");
    var tanh=document.getElementById("hypertanh");
    var hyperresult=document.getElementById("hyperresult");
    var ans =0;
    var a =Math.sinh(i);
    var b =Math.cosh(i);
    var c =Math.tanh(i);
    hyperresult.innerHTML='The value of Hyperbolic trigonometric ratios '
    sinh.innerHTML = `Value of sinh( ${i} )  is  ${a}`;
    cosh.innerHTML = `Value of cosh( ${i} ) is  ${b}`;
    tanh.innerHTML = `Value of tanh( ${i} )  is ${c}`;


}
function perratcal()
{
    var num1=document.getElementById("peratx").value;
    var ans="", f=100;
    if(num1=="")
    {
        ans="Please enter percentage";
    }
    else
    {
        for(var i=2;i<num1;i++)
        {
            if((num1%i==0)&&(f%i==0))
            {
                num1=num1/i;
                f=f/i;
                i--;
            }
        }
        ans="The calculated ratio is: "+num1+" : "+f;
    }
    document.getElementById("perratans").innerHTML=ans;
}

function embedfind(){
    let n = parseInt(document.getElementById("embedin").value)
    let pi = Math.acos(-1.0);
    let proAngleVar;

        // Projection angle variation
        // when the number of
        // sides are in multiple of 4
        if (N % 4 == 0) {
            proAngleVar = pi * (180.0 / N) / 180;
        } else {
            proAngleVar = pi * (180.0 / (2 * N)) / 180;
        }

        // Distance between the end polets
        let negX = 1.0e+99, posX = -1.0e+99, negY = 1.0e+99, posY = -1.0e+99;

        for ( let j = 0; j < N; ++j) {

            // Projection from all N polets
            // on X-axis
            let px = Math.cos(2 * pi * j / N + proAngleVar);

            // Projection from all N polets
            // on Y-axis
            let py = Math.sin(2 * pi * j / N + proAngleVar);

            negX = Math.min(negX, px);
            posX = Math.max(posX, px);
            negY = Math.min(negY, py);
            posY = Math.max(posY, py);
        }

        // Maximum side
        let opt2 = Math.max(posX - negX, posY - negY);

        // Return the portion of side
        // forming the square
        let ans = opt2 / Math.sin(pi / N) / 2;
        document.getElementById("embedans").innerHTML = ans
}

function mecal()
{
    var num1=document.getElementById("conf").value;
    var num2=document.getElementById("samsize").value;
    var num3=document.getElementById("proper").value;
    var num4=document.getElementById("popsize").value;
    ans="";
    if(num1==""||num2==""||num=="")
    {
        ans="Please fill all the field";
    }
    else
    {
        num1=parseFloat(num1);
        num2=parseFloat(num2);
        num3=parseFloat(num3);
        num3=num3/100;
        if(num4=="")
        {
            var j=(num1*(Math.sqrt(num3*(1-num3))))/Math.sqrt(num2);
            j=j*100;
            ans="The margin of error is: "+j;
        }
        else
        {
            num4=parseFloat(num4);
            if(num4<=num2)
            {
                ans="Population size must be greater than sample size";
            }
            else{
            var j=(num1*(Math.sqrt(num3*(1-num3))))/Math.sqrt((num2*(num4-1))/(num4-num2));
            j=j*100;
            ans="The margin of error is: "+j;
            }

        }
    }
    document.getElementById("mecans").innerHTML=ans;
}
function numtfind(){
    let n = parseInt(document.getElementById("numtin").value)
    let num = n;
    let ans =  num * (num - 4) * (num - 5) / 6
    document.getElementById("numtans").innerHTML = ans
}
function occfind(){
    let n = parseInt(document.getElementById("occin").value)
    let ang = parseInt(document.getElementById("occin1").value)
    var ans = 1;

    // Calculate the frequency
    // of given angle for each vertex
    var freq = (ang * n) / 180;

    // Multiply answer by frequency.
    ans = ans * (n - 1 - freq);

    // Multiply answer by the number of vertices.
    ans = ans * n;
    document.getElementById("occans").innerHTML = ans
}

function utcal()
{
    var num1=document.getElementById("urx1").value;
    var num2=document.getElementById("urx2").value;
    var num3=document.getElementById("urx3").value;
    var num4=document.getElementById("urx4").value;
    ans="";
    if(num1==""||num2==""||num3==""||num4=="")
    {
        ans="Please fill all the field";
    }
    else
    {
        num1=parseFloat(num1);
        num3=parseFloat(num3);
        var z=num1/num3;
        ans="The unit rate is: "+z+" "+num2+"/"+num4;
    }
    document.getElementById("utcans").innerHTML=ans;
}

//  chi value test
// obs - observed
function chivalue() {
    let list = document.getElementById('obsList').value
    let obsList = list.split(' ');
    let sum = 0;
    let n = obsList.length
    for (var i = 0; i < n; i++) {
        obsList[i] = parseInt(obsList[i])
        sum += obsList[i]
    }
    let expMean = sum / obsList.length
    let obsSubExpMean = []
    let obsSubExpMeanSqr = []
    let chiValue = []
    let ans = 0
    for (var i = 0; i < n; i++) {
        obsSubExpMean[i] = obsList[i] - expMean
        obsSubExpMeanSqr[i] = Math.pow(obsSubExpMean[i], 2)
        chiValue[i] = obsSubExpMeanSqr[i] / expMean
        ans += chiValue[i]
    }
    ans = Number.parseFloat(ans).toPrecision(5)
    console.log(ans);
    let sigValue = parseFloat(document.getElementById('sigValue').value)
    console.log(sigValue);
    console.log(ans < sigValue);

    if (ans < sigValue) {
        document.getElementById('chitestans').innerHTML = "As χ<sup>2</sup><sub>cal</sub> < χ<sup>2</sup><sub>giv</sub> i.e <strong>" + ans + "</strong> < <strong>" + sigValue + "</strong>"
        document.getElementById('concluChi').innerHTML = "The Hypothesis is Accepted. So data distribution is uniform throughout."
    } else if (ans > sigValue) {
        document.getElementById('chitestans').innerHTML = "As χ<sup>2</sup><sub>cal</sub> > χ<sup>2</sup><sub>giv</sub> i.e <strong>" + ans + "</strong> > <strong>" + sigValue + "</strong>"
        document.getElementById('concluChi').innerHTML = "The Hypothesis is Not Accepted. So data distribution is Not uniform throughout."
    } else {
        document.getElementById('chitestans').innerHTML = "As χ<sup>2</sup><sub>cal</sub> = χ<sup>2</sup><sub>giv</sub> i.e <strong>" + ans + "</strong> = <strong>" + sigValue + "</strong>"
        document.getElementById('concluChi').innerHTML = "The Hypothesis is Accepted. So data distribution is uniform throughout."
    }



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

        var x=Math.abs(num1-num3)+Math.abs(num2-num4);
        ans="The calculated Manhattan Distnace of given coordinates is: "+x;
    }
    document.getElementById("manhatans").innerHTML=ans;
}
function volCube() {
    var x = parseInt(document.getElementById("chng-side-cube").value);
    var ans = "percentage increase in the volume of the cube is ";
    const per = (Math.pow(x, 3) / 10000 + 3 * x + (3 * Math.pow(x, 2)) / 100);
    ans = ans + per + " %";
    document.getElementById("cubeAns").innerText = ans;
}
function volSphere() {
    var x = parseInt(document.getElementById("chng-side-sphere").value);
    var ans = "percentage increase in the volume of the sphere is ";
    const per = (Math.pow(x, 3) / 10000 + 3 * x + (3 * Math.pow(x, 2)) / 100);
    ans = ans + per + " %";
    document.getElementById("sphereAns").innerText = ans;

}


function Square(n, i, j)
{
    var mid = ((i + j) / 2);

    var mul = mid * mid;

    if ((mul == n) || (Math.abs(mul - n) < 0.0001))
        return mid;

    else if (mul < n)
        return Square(n, mid, j);

    else
        return Square(n, i, mid);
}

function findSqrt()
{
    var i = 1;
    const n = parseInt(document.getElementById("squarerootin").value);

    var result=document.getElementById("squarerootresult");

    var found = false;
    while (!found)
    {

        if (i * i == n)
        {
            result.innerHTML = ` The  square root  of  ${n}  is  ${i}`;
            found = true;
        }

        else if (i * i > n)
        {
            var res = Square(n, i - 1, i);
            result.innerHTML = `The square root  of ${n}  is  ${res.toFixed(4)}`;

            found = true;
        }
        i++;
    }
}   

function vpdscal()
{
    var num1=document.getElementById("vpdsuc").value;
    var num2=document.getElementById("vpdvar").value;
    ans="";
    if(num1==""||num2=="")
    {
        ans="Please fill all the field";
    }
    else
    {
    ans="The calculated variance is: "+ num1;
   
    }
    document.getElementById("vpdans").innerHTML=ans;

}
function product_Range(a,b) {
    var prd = a,i = a;
   
    while (i++< b) {
      prd*=i;
    }
    return prd;
  }
function comb(n, r) 
{
  if (n==r) 
  {
    return 1;
  } 
  else 
  {
    r=(r < n-r) ? n-r : r;
    return product_Range(r+1, n)/product_Range(1,n-r);
  }
}
function hypergeoscal()
{
    var num1=document.getElementById("hypergeos1").value;
    var num2=document.getElementById("hypergeos2").value;
    var num3=document.getElementById("hypergeos3").value;
    var num4=document.getElementById("hypergeos4").value;
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
       var z=comb(num3, num1);
       var w=comb((num4-num3), (num2-num1));
       var x=comb(num4,num2);
       var st= (z*w)/x;
       ans="The P.M.F of hypergeometric distribution : "+st;
   
    }
    document.getElementById("hypergeosans").innerHTML=ans;
}








