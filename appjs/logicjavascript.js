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
        for (i of ar) {
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
    document.getElementById("ouroman").innerHTML = romanize(
        document.getElementById("inpo").value
    );
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
        for (a = 1; a <= tableNumRows; a++) {
            tableBody += "<tr>";
            for (b = 1; b <= tableNumColumns; b++) {
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
        for (i = 0; i < divisorLength; i++) {
            tableRows.eq(1).find("td").eq(i).html(divisor.toString()[i]);
        }
        tableRows
            .eq(1)
            .find("td")
            .eq(divisorLength - 1)
            .css("border-right", "6px solid white");
        for (i = 0; i < dividendLength; i++) {
            tableRows
                .eq(1)
                .find("td")
                .eq(divisorLength + i)
                .html(dividend.toString()[i])
                .css("border-top", "6px solid white");
        }
        for (currentStep = 1; currentStep < numSteps; currentStep++) {
            if (!bufferVar) var bufferVar = dividend.toString()[0];
            var stepResult = Math.floor(bufferVar / divisor);
            tableRows
                .eq(0)
                .find("td")
                .eq(divisorLength + currentStep - 1)
                .html(stepResult);
            tmpVar = (stepResult * divisor).toString();
            for (a = tmpVar.length - 1; a >= 0; a--) {
                tableRows
                    .eq(currentStep * 2)
                    .find("td")
                    .eq(divisorLength + currentStep - a - 1)
                    .html(tmpVar[tmpVar.length - a - 1])
                    .css("border-bottom", "6px solid white");
            }
            tmpVar = (bufferVar - stepResult * divisor).toString();
            for (a = tmpVar.length - 1; a >= 0; a--) {
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
    for (i = 2; i <= num; i++) {
        while (num % i == 0) {
            temp += i + "&nbsp;&nbsp;&nbsp;<br>";
            v += i + ",";
            tt += "<pu>" + num + "</pu><br>";
            num = num / i;
        }
        document.getElementById("dividefactor").innerHTML = temp;
        document.getElementById("dividefactorresult").innerHTML = tt;
        v = v.slice(0, -1);
        document.getElementById("factorresult").innerHTML =
            "\\[Prime \\space Factors \\space are:\\]\\[" + v + "\\]";
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
    for (num of ar) {
        var getnu = "\\[" + num + "\\space : \\space";
        var i;
        for (i = 2; i <= num; i++) {
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
    for (i = 2; i <= num; i++) {
        while (num % i == 0) {
            temp += i + " ";
            num = num / i;
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
    return array.filter((a, b) => array.indexOf(a) === b);
}

function findduplicatesforhcf(array) {
    var maxlengthofarray = 0;
    var dup,
        indexofdup = 0;
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

function hcf(input) {
    var ar = [];
    var val = document.getElementById(input).value;
    val = val.replace(/\s+$/, ""); //right trim
    val = val.replace(/^\s+/, ""); //left trim
	document.getElementById("hcfprimefactor").textContent = "";
	if (val.search(/^[0-9 ]+$/) == -1)
	{
		document.getElementById("hcfprimefactor").innerHTML ="Enter numbers only";
		return;
	}
    val = val.split(" ");
    ar = val;
    var temp = "";
    document.getElementById("hcfprimefactor").innerHTML =
        "\\[Prime \\space Factors \\space of \\space\\]";
    var factorarray = [];
    var j = 0;
    for (num of ar) {
        factorarray[j] = [];
        factorarray[j][0] = 1;
        var index = 1;
        var getnu = "\\[" + num + "\\space : \\space";
        temp += "1,";
        for (i = 2; i <= num; i++) {
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
    for (i of dup) {
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
		document.getElementById("hcfprimefactor").innerHTML ="Enter numbers only";
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
    for (i = 2; i <= num; i++) {
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
		document.getElementById("hcfprimefactor").innerHTML ="Enter numbers only";
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
            document.getElementById("resultlcm").innerHTML = "Should Be more Than 1";
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
            for (kl of num) {
                temp += "<td>" + kl + "</td>";
            }
            temp += "</tr>";
        }
        for (i = 0; i < facar.length; i++) {
            for (k = 0; k < num.length; k++) {
                if (parseInt(num[k]) % parseInt(facar[i]) == 0) {
                    num[k] = parseInt(num[k]) / parseInt(facar[i]);
                }
            }
            //document.getElementById('resultlcm').innerHTML+="<pu>&nbsp;"+num+"</pu><br>";
            temp += "</tr>";
            for (kl of num) {
                temp += "<td>" + kl + "</td>";
            }
            temp += "</tr>";
        }
        for (mm = 0; mm < facar.length; mm++) {
            //document.getElementById('resultfac').innerHTML+="&nbsp;"+facar[mm]+"&nbsp;<br>";
            tempfac += "<tr><td>" + facar[mm] + "</td></tr>";
        }
        if (num.length == 1) {
            document.getElementById("resultlcms").innerHTML = "Should Be more Than 1";
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

//-----------------------------------------------------
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

//solve trigonometry values from right triangle
function solvesimpletrigo() {
    var pp = document.getElementById("p").value;
    var base = document.getElementById("b").value;
    var hyp = document.getElementById("h").value;
    if (
        (pp == "" && base == "") ||
        (base == "" && hyp == "") ||
        (hyp == "" && pp == "")
    ) {
        document.getElementById("soltri").innerHTML =
            "Kindly fill Atleast 2 fields";
    } else {
        if (parseInt(hyp) < parseInt(pp) || parseInt(hyp) < parseInt(base)) {
            document.getElementById("h").style.color = "red";
            document.getElementById("soltri").innerHTML =
                "Hypotenuse Should be Greater";
        } else if (pp != "" && base != "" && hyp != "" && parseInt(hyp) ^ 2 != parseInt(pp) ^ 2 + parseInt(base) ^ 2) {
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
    var a = document.getElementById("inputtside").value;

    var resultvolt = document.getElementById("resultofvolt");
    var resultheightt = document.getElementById("resultofheightt");
    var resultofcircumt = document.getElementById("resultofcircumt");
    var resultofinradt = document.getElementById("resultofinradt");
    resultofvolt.innerHTML = "";
    resultofheightt.innerHTML = "";
    resultofcircumt.innerHTML = "";
    resultofinradt.innerHTML = "";

    var volume = 0.118 * (a * a * a);
    var height = 1.074 * a;
    var circum = 0.612 * a;
    var inradius = 0.2041 * a;
    if (a != "") {
        document.getElementById("resultofvolt").innerHTML = "\\[Volume \\space of \\space Regular \\space Tetrahedron \\space \\newline \\frac{1}{6 \\sqrt{2}} \\times" + a + "\\times" + a + "\\times" + a + "\\ = " + volume + "\\]";
        renderMathInElement(document.getElementById("resultofvolt"));
    }
    if (a != "") {
        document.getElementById("resultofheightt").innerHTML = "\\[Height \\space of \\space Regular \\space Tetrahedron \\space \\newline \\frac{\\sqrt{2}}{\\sqrt{3}} \\times (" + a + ")\\ = " + height + " \\]";
        renderMathInElement(document.getElementById("resultofheightt"));
    }
    if (a != "") {
        document.getElementById("resultofcircumt").innerHTML = "\\[CircumRadius \\newline \\space of \\space Regular \\space Tetrahedron \\space \\newline \\frac{\\sqrt{6}}{4} \\times (" + a + ")\\ = " + circum + " \\]";
        renderMathInElement(document.getElementById("resultofcircumt"));
    }
    if (a != "") {
        document.getElementById("resultofinradt").innerHTML = "\\[InRadius \\space of \\space Regular \\space Tetrahedron \\space \\newline \\frac{1}{\\sqrt{24}} \\times (" + a + ")\\ = " + inradius + " \\]";
        renderMathInElement(document.getElementById("resultofinradt"));
    } else if (a == "") {
        document.getElementById("resultofvolt").innerHTML = "Enter side a to calculate volume";
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
    var height = document.getElementById("inputh").value;
    document.getElementById("resultofperitrap1").innerHTML="";
    document.getElementById("resultofperitrap2").innerHTML="";
    document.getElementById("resultofareatrap1").innerHTML="";
    document.getElementById("resultofareatrap2").innerHTML="";
    if (a!="" && b!="" && height==""){
        document.getElementById("resultofareatrap1").innerHTML = "Enter height if you want to calculate Area";

    } else if(a!="" && b!="" && height!=""){
        var area= (0.5 * (parseInt(a)+parseInt(b))) * parseInt(height);
        document.getElementById("resultofareatrap1").innerHTML = "\\[Area \\space of \\space Trapezium  \\]";
        renderMathInElement(document.getElementById("resultofareatrap1"));
        document.getElementById("resultofareatrap2").innerHTML = "\\[\\frac{1}{2} \\times (" + a + "+" + b + ") \\times "+height+" = " + area + "\\]";
        renderMathInElement(document.getElementById("resultofareatrap2"));
    }
    if(c=="" || d=="")
    {
        document.getElementById("resultofperitrap1").innerHTML = "Enter c and d if you want to calculate perimeter";
    } else{
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

//created function for Rhombus
function Kitesolve() {
    var p = document.getElementById("inputp").value;
    var q = document.getElementById("inputq").value;
    var a = document.getElementById("inputsidea").value;
    var b = document.getElementById("inputsideb").value;
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

function solvecircle() {
    let radius = document.getElementById("inputradius").value;
    let area = 3.14 * radius * radius;
    let Circumference = 2 * 3.14 * radius;
    let diameter = 2 * radius;
    console.log(radius);
    area = area.toPrecision(3);
    Circumference = Circumference.toPrecision(3);
    diameter = diameter.toPrecision(3);
    document.getElementById("resultofareacir").innerHTML = "\\[Area \\space of \\space Circle \\ 3.14 r^2\\ = " + area + "\\]";
    document.getElementById("resultofcircumferencec").innerHTML = "\\[Circumference \\space of \\space Circle \\ 2*3.14 r \\ = " + Circumference + "\\]";
    document.getElementById("resultofdiameterc").innerHTML = "Diameter of Circle = " + diameter;
    renderMathInElement(document.getElementById("resultofareacir"));
    renderMathInElement(document.getElementById("resultofcircumferencec"));
    //renderMathInElement(document.getElementById("resultofdiameterc"));
}

function solveSlope() {
    let x1 = document.getElementById("inputLineX1").value;
    let y1 = document.getElementById("inputLineY1").value;
    let x2 = document.getElementById("inputLineX2").value;
    let y2 = document.getElementById("inputLineY2").value;
    if (x1 == "" || y1 == "" || x2 == "" || y2 == "") {
        document.getElementById("resultofline").innerHTML = "Enter all four points";
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

    var voloutput = document.getElementById("resultofvolcyl");
    var tsaoutput = document.getElementById("resultoftsacyl");
    var csaoutput = document.getElementById("resultofcsacyl");
    var voltemp = "";
    var tsatemp = "";
    var csatemp = "";
    if ((radius != "") && (height != "")) {
        voltemp += "\\[ \\pi \\times " + radius + "^2 \\times " + height + "\\]";
        voltemp += "\\[Volume \\space of \\space Cylinder \\space is \\space " + eval(String(3.14159 * radius * radius * height)) + "\\]";
        voloutput.innerHTML = voltemp;
        csatemp += "\\[ 2 \\times \\pi \\times" + radius + "\\times" + height + " \\]";
        csatemp += "\\[Curved \\space Surface \\space Area \\space of \\space Cylinder \\space is \\space \\]";
        csatemp += "\\[" + eval(String(3.14159 * radius * 2 * height)) + "\\]";
        csaoutput.innerHTML = csatemp;
        tsatemp += "\\[2 \\times \\pi \\times" + radius + "(" + radius + "+" + height + ") \\]";
        tsatemp +=
            "\\[Total \\space Surface \\space Area \\space of \\space Cylinder \\space is \\space  \\]";
        tsatemp += "\\[" + eval(String((2 * 3.14159 * radius * height) + (2 * 3.14159 * radius * radius))) + "\\]";
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
function prismsolve() {
    var length = document.getElementById("inputprismlength").value;
    var breadth = document.getElementById("inputprismbreadth").value;
    var height = document.getElementById("inputprismheight").value;
    var side = document.getElementById("inputprismside").value;
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

function solvesphere() {
    var radius = document.getElementById("inputradiussph").value;

    var voloutput = document.getElementById("resultofvolsp");
    var tsaoutput = document.getElementById("resultoftsasp");
    var voltemp = "";
    var tsatemp = "";
    if (radius != "") {
        voltemp += "\\[ \\frac{4}{3} \\times \\pi \\times " + radius + "^3 \\]";
        voltemp += "\\[Volume \\space of \\space Sphere \\space is \\space " + eval(String((4 * 3.14159 * radius * radius * radius) / 3)) + "\\]";
        voloutput.innerHTML = voltemp;
        tsatemp += "\\[4 \\times \\pi \\times" + radius + "^2 \\]";
        tsatemp +=
            "\\[Total \\space Surface \\space Area \\space of \\space Sphere \\space is \\space  \\]";
        tsatemp += "\\[" + eval(String(4 * 3.14159 * radius * radius)) + "\\]";
        tsaoutput.innerHTML = tsatemp;
        renderMathInElement(voloutput);
        renderMathInElement(tsaoutput);
    } else {
        voloutput.innerHTML = "";
        tsaoutput.innerHTML = "";
    }
}

function solvehollowsphere() {
    var radius1 = document.getElementById("inputradius1hollowsph").value;
    var radius2 = document.getElementById("inputradius2hollowsph").value;
    var voloutput = document.getElementById("resultofvolhollowsp");
    var tsaoutput = document.getElementById("resultoftsahollowsp");
    var voltemp = "";
    var tsatemp = "";
    if (radius != "") {
        voltemp += "\\[ \\frac{4}{3} \\times \\pi \\times (" + radius1 + "^3-" + radius2 + "^3) \\]";
        voltemp += "\\[Volume \\space of \\space Hollow \\space Sphere \\space is \\space " + eval(String(4 * 3.14159 * ((radius1 * radius1 * radius1) - (radius2 * radius2 * radius2)) / 3)) + "\\]";
        voloutput.innerHTML = voltemp;
        tsatemp += "\\[4 \\times \\pi \\times" + radius1 + "^2 -" + radius2 + "^2 \\]";
        tsatemp +=
            "\\[Total \\space Surface \\space Area \\space of \\space Hollow \\space Sphere \\space is \\space  \\]";
        tsatemp += "\\[" + eval(String(4 * 3.14159 * ((radius1 * radius1) - (radius2 * radius2)))) + "\\]";
        tsaoutput.innerHTML = tsatemp;
        renderMathInElement(voloutput);
        renderMathInElement(tsaoutput);
    } else {
        voloutput.innerHTML = "";
        tsaoutput.innerHTML = "";
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

function solvecone() {
    var height = document.getElementById("inputhcone").value;
    var radius = document.getElementById("inputrcone").value;

    var voloutput = document.getElementById("resultofvolcone");
    var tsaoutput = document.getElementById("resultoftsacone");
    var csaoutput = document.getElementById("resultofcsacone");
    var shoutput = document.getElementById("resultofshcone");
    var radius2 = radius * radius;
    var height2 = height * height;
    var add2 = eval(String(radius2 + height2));
    var l = nerdamer.sqrt(add2).toString();
    var voltemp = "";
    var tsatemp = "";
    var csatemp = "";
    var ltemp = "";
    if ((radius != "") && (height != "")) {
        voltemp += "\\[ \\frac{1}{3} \\times \\pi \\times " + radius + "^2 \\times " + height + "\\]";
        voltemp += "\\[Volume \\space of \\space Cone \\space is \\space " + eval(String((3.1415 * radius * radius * height) / 3)) + "\\]";
        voloutput.innerHTML = voltemp;
        csatemp += "\\[ \\pi \\times" + radius + "\\times" + l + " \\]";
        csatemp += "\\[Curved \\space Surface \\space Area \\space of \\space Cone \\space is \\space \\]";
        csatemp += "\\[" + eval(String(3.14159 * radius * eval(l).toFixed(3))) + "\\]";
        csaoutput.innerHTML = csatemp;
        tsatemp += "\\[ \\pi \\times" + radius + "(" + radius + "+" + l + ")\\]";
        tsatemp +=
            "\\[Total \\space Surface \\space Area \\space of \\space Cone \\space is \\space  \\]";
        tsatemp += "\\[" + eval(String((3.14159 * radius * eval(l).toFixed(3)) + (3.14159 * radius * radius))) + "\\]";
        tsaoutput.innerHTML = tsatemp;
        ltemp += "\\[l= \\sqrt{" + radius + "^2+" + height + "^2} \\]";
        ltemp += "\\[ \\sqrt{" + radius2 + "+" + height2 + "} \\]";
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

//-----------------------------------------------------

//-----------------------------------------------------
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
    katex.render("Simplified:\\newline" + sol, document.getElementById(output), {
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
    katex.render("Expanded:\\newline" + sol, document.getElementById(output), {
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
        for (i = 0; i <= sol.length / 2 + 1; i += 2) {
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
            for (v of sp) {
                temp += "\\partial " + v;
            }
            po = "\\frac{\\partial }{" + temp + "}";
        }
    } else {
        for (i of or) {
            sum += parseInt(i);
        }
        if (pardifforder == "") {
            po = "\\frac{\\partial^" + sum + "}{\\partial x}";
        } else if (pardifforder != "") {
            var sp = pardifforder.split(",");
            var v;
            var temp = "";
            for (v of sp) {
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
    for (i = 0; i < ar.length; i++) {
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
    for (i = 0; i < ar.length; i++) {
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
    for (i = 0; i <= len - 1; i++) {
        for (j = 0; j <= len - 1 - i; j++) {
            if (parseFloat(val[j]) > parseFloat(val[j + 1])) {
                temp = parseFloat(val[j]);
                val[j] = parseFloat(val[j + 1]);
                val[j + 1] = temp;
            }
        }
    }
    val = val.join(",");
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
    for (i = 0; i <= len - 1; i++) {
        for (j = 0; j <= len - 1 - i; j++) {
            if (parseFloat(val[j]) < parseFloat(val[j + 1])) {
                temp = parseFloat(val[j]);
                val[j] = parseFloat(val[j + 1]);
                val[j + 1] = temp;
            }
        }
    }

    val = val.join(",");
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
    for (i in s) {
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
        for (i = num.length - 1; i >= 0; i--) {
            if (num[i] == ".") {
                break;
            }
            countdot++;
        }
        for (j = numwith.length - 1; j >= 0; j--) {
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
        for (i = numwith.length - 1; i >= 0; i--) {
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
        for (i = 0; i < String(mulsol).length; i++) {
            line += "_";
        }
    } else {
        //no plus simple multiply
        var mulsol = eval(
            nerdamer(String(numwith) + "*" + String(num))
                .evaluate()
                .toString()
        );
        for (i = 0; i < String(mulsol).length; i++) {
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
        for (itr = 0; itr < ar.length - 1; itr++) {
            ar1[itr] = ar[itr + 1];
        }
    } else {
        for (itr = 0; itr < ar.length; itr++) {
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
                for (itr = len1; itr >= 0; itr--) {
                    itrPlace = placeUpto[itr];
                    el.innerHTML += itrPlace + "&nbsp;&nbsp;";
                }
                el.innerHTML += "<br>" + "0";
                for (itr = 0; itr < len1; itr++) {
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
            for (itr = len1 - 1; itr >= 0; itr--) {
                itrPlace = placeUpto[itr];
                el.innerHTML += itrPlace + "&nbsp;&nbsp;";
            }
            if (place1 + 1 != len1) {
                el.innerHTML += "<br>" + ar1[0];
                for (itr = 1; itr < len1; itr++) {
                    el.innerHTML += spaces + ar1[itr];
                }
                el.innerHTML += "<br>" + ar1[0];
                for (itr = 1; itr <= place1; itr++) {
                    el.innerHTML += spaces + ar1[itr];
                }

                el.innerHTML += spaces + ar1[place1 + 1];
                if (parseInt(ar1[place1 + 1]) >= 5) {
                    el.innerHTML += ">=5" + "<br>" + ar1[0];
                    for (itr = 1; itr <= place1; itr++) {
                        el.innerHTML += spaces + ar1[itr];
                    }
                    el.innerHTML += "+1";
                } else {
                    el.innerHTML += "<5" + "<br>" + ar1[0];
                    for (itr = 1; itr <= place1; itr++) {
                        el.innerHTML += spaces + ar1[itr];
                    }
                }
            } else {
                el.innerHTML += "<br>" + ar1[0];
                for (itr = 1; itr < len1; itr++) {
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
                for (i = place + 1; i < len; i++) {
                    ar[i] = 0;
                }
            } else {
                for (i = place + 1; i < len; i++) {
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
        if (i > 95) {
            document.getElementById("spiconou").innerHTML = "Percentage must be <=95";
        } else {
            document.getElementById("spiconou").innerHTML = `${i}`;
        }
    } else if (f == 0.001) {
        if (i > 10) {
            document.getElementById("spiconou").innerHTML = "SPI must be <= 10";
        } else {
            document.getElementById("spiconou").innerHTML = `${((i - 0.5) * 10)}`;
        }
    } else {
        if (i > 95) {
            document.getElementById("spiconou").innerHTML = "Percentage must be <=95";
        } else {
            document.getElementById("spiconou").innerHTML = `${(i / 10) + 0.5}`;
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


function polar()
{
  var r = parseInt(document.getElementById("cpreal").value);
  var i = parseInt(document.getElementById("cpimg").value);
  var result= document.getElementById("compresult");
  var x = (Math.sqrt((r*r)+(i*i)));
  if(!Number.isInteger(x))
  {
    var j = (r*r)+(i*i);
    x = "&#8730;  "+ j ;
  }
  var y = nerdamer((Math.atan(i/r))/3.141592653589793).evaluate().toString();
  x=x+"( cos( π" +y+") + i sin ( π"+ y+ "))";
  result.innerHTML = x;
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
            document.getElementById("simpleinterstoutput2").innerHTML = "\\[\\frac{1}{100} \\times "+p+"\\times "+t+" \\times "+r+" = ₹" + si.toFixed(5)+"\\]";

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
            document.getElementById("compoundinterestoutput2").innerHTML = "\\["+p+"\\left(1+\\frac{"+r+"}{"+n+"}\\right)^{"+n+"\\times"+ t+"} = ₹" + ci.toFixed(5)+"\\]";
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
    t = parseInt(document.getElementById("second2").value) * 12;
    emi = ((p * r * Math.pow((1 + r), t)) / (Math.pow((1 + r), t) - 1));
    document.getElementById("emio1").innerHTML = "\\[\\mathrm{EMI}=\\frac{\\mathrm{P} \\times \\mathrm{r} \\times(1+\\mathrm{r})^{\\mathrm{t}}}{(1+\\mathrm{r})^{t}-1}\\]";
    document.getElementById("emio2").innerHTML = "\\[\\mathrm{EMI}=\\frac{\\mathrm{"+p+"} \\times \\mathrm{"+r.toFixed(2)+"} \\times(1+\\mathrm{"+r.toFixed(2)+"})^{\\mathrm{"+t+"}}}{(1+\\mathrm{"+r.toFixed(2)+"})^{"+t+"}-1}\\]";
    document.getElementById("emio3").innerHTML = "\\[\\mathrm{EMI}= \\space" + emi.toFixed(2) + "\\space Per\\space month\\]";
    renderMathInElement(document.getElementById("emio1"));
    renderMathInElement(document.getElementById("emio2"));
    renderMathInElement(document.getElementById("emio3"));
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
        for (i = 2; i <= num1; i++) {
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
        for (i = 1; i <= num1; i++) {
            calc *= i;
        }
        ans.innerHTML = num1;
        ans.innerHTML += " !";
        ans.innerHTML += " =";
        ans.innerHTML += " ";
        ans.innerHTML += calc;
    }
}

// profit loss calculations
function profitloss() {
    var cp = parseFloat(document.getElementById("cp").value);
    var sp = parseFloat(document.getElementById("sp").value);
    if(cp<0 || sp<0)
    {
        document.getElementById("pol").innerHTML = "<strong>Only</strong> positive values are accepted";
        document.getElementById("percent").innerHTML = "";
    }
    else if (cp > sp) {
        var loss = cp - sp;
        var perl = (loss * 100) / cp;
        document.getElementById("pol").innerHTML = "Loss = " + loss;
        document.getElementById("percent").innerHTML = "Loss Percentage =" + perl + "%";
    } else {
        var profit = sp - cp;
        var perp = (profit * 100) / sp;
        document.getElementById("pol").innerHTML = "Profit = " + profit;
        document.getElementById("percent").innerHTML = "Profit Percentage =" + perp + "%";
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
    let cal;
    if (!isNaN(parseInt(n)) || !isNaN(parseInt(a)) || !isNaN(parseInt(d))) {
        for (var i = 1, series = "", num = 0; i <= n; i++) {
            num = parseInt(a) + (i - 1) * d;
            series += (num.toString() + ", ");
        }
        printseries.innerHTML = "Arithmetic Progression: " + series.substring(0, series.length - 2);
        explain.innerHTML = "Formula: \\[S=\\frac{n}{2}\\] \\[(2a+(n-1)d)\\]";
        cal = (n * (2 * a + (n - 1) * d)) / 2;
        res.innerHTML = `Result: ${cal}`;
        console.log(res);
        renderMathInElement(document.getElementById("sumAP_formula"));
    }
}

function anotherap() {
    var n = document.getElementById("numterms").value
    var a = document.getElementById("ft").value
    var l = document.getElementById("lt").value
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
    if(a<0&&c<0){
      var gmmul1 = parseInt(a) * parseInt(c)
      var res1 = -(Math.sqrt(gmmul1))
      var explain = document.getElementById("gm_formula");
      explain.innerHTML = "Formula: \\[\\space Geometric \\space Mean=\\space\\ - \\sqrt{a \\times c} = \\space\\ - \\sqrt{"+a+"\\times"+c+"}\\] ";
      renderMathInElement(document.getElementById("gm_formula"));
      document.getElementById("gm").innerHTML = "Result: " + res1
    }
    else{
    var gmmul = parseInt(a) * parseInt(c)
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
                ans.innerHTML += "neither Prime nor Composite number";
            } else {
                for (i = 2; i <= Math.sqrt(num1); i++) {
                    if (num1 % i == 0) {
                        flag = false;
                        break;
                    }
                }
                if (flag == true) {
                    ans.innerHTML += "a Prime number";
                } else {
                    ans.innerHTML += "a Composite number";
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

function prime_till_num(primetill) {
    var num = document.getElementById(primetill).value;
    var num1 = parseInt(num);
    var ans = document.getElementById("primetillsol");
    var B = "";
    var prime = [];
    if (isNaN(num1) || num1 <= 1) {
        ans.innerHTML = "Enter positive integer greater than 1.";
    } else {
        for (i = 0; i <= num1; i++)
            prime.push(true);

        for (i = 2; i * i <= num1; i++) {
            // If prime[p] is not changed, then it is a
            // prime
            if (prime[i] == true) {
                // Update all multiples of p
                for (j = i * i; j <= num1; j += i)
                    prime[j] = false;
            }
        }

        // Print all prime numbers
        for (i = 2; i <= num1; i++) {
            if (prime[i] == true) {
                B = B + i;
                B = B + ", ";
            }
        }
        ans.innerHTML = B.slice(0, B.length - 2);

    }
}

//end

function gp() {
    var a = document.getElementById("firstterm").value
    var r = document.getElementById("ratio").value
    var n = document.getElementById("number").value
    var explain = document.getElementById("sumGP_formula");
    var printseries = document.getElementById("printGPseries");
    var ans;
    var ans1;
    // console.log(a)
    // console.log(r)
    // console.log(n)
    if (!isNaN(parseInt(n)) || !isNaN(parseInt(a)) || !isNaN(parseInt(r))) {
        for (var i = 0, series = "", num = 0; i <= n-1; i++) {
            num = parseInt(a) * Math.pow(r,i);
            series += (num.toString() + ", ");
        }

        printseries.innerHTML = "Geometric Progression: " + series.substring(0, series.length - 2);
      }


      var power = parseFloat(Math.pow(r, n))
      if (r < -1 || r > 1) {
          ans1 = parseFloat(a * (power - 1))
          ans = parseFloat(ans1 / (r - 1))
          explain.innerHTML = "Formula: \\[S=\\frac{a(r^n - 1)}{r - 1}\\]";
          cal = (a * (r^n - 1)) / (r - 1);
      } else if (r > -1 && r < 1 && r != 1) {
          ans1 = parseFloat(a * (1 - power))
          ans = parseFloat(ans1 / (1 - r))
          explain.innerHTML = "Formula: \\[S=\\frac{a(r^n - 1)}{1 - r}\\]";
          cal = (a * (r^n - 1)) / (1 - r);
      } else if (r == 1) {
          ans = parseInt(a * n)
          explain.innerHTML = "Formula: \\[S= an\\]";
          cal = a * n;
      }
      renderMathInElement(document.getElementById("sumGP_formula"));
      document.getElementById("sumgp").innerHTML = "Sum = " + ans;
}

function igp() {
    var a = document.getElementById("fterm").value
    var r = parseFloat(document.getElementById("r").value)
    if (r >= 1) {
        document.getElementById("sumigp").innerHTML = "Please enter a common ratio which is less than 1"
    } else {
        var ans = a / (1 - r)
        document.getElementById("sumigp").innerHTML = "Sum = " + ans
    }
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

///////// Binary and Decimal Conversion ///////////

//Function that performs conversion
function convertBinDec() {
    const fromBase = document.getElementById("decimal-binary-select1").value;
    const toBase = document.getElementById("decimal-binary-select2").value;
    const input = document.getElementById("decimal-binary-input").value;
    let result = document.getElementById("decimal-binary-result");
    let from = 10;
    let to = 10;

    if (fromBase === "Decimal") from = 10;
    else from = 2;

    if (toBase === "Decimal") to = 10;
    else to = 2;

    result.innerHTML = parseInt(input, from).toString(to);
    if (input == "") {
        result.innerHTML = "";
    } else if (from == 2) {
        if (input.search(/^[10]+$/) == -1)
            result.innerHTML = "Binary numbers can only have 0's and 1's";

    }
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

    const operation = document.getElementById("bitwise-operation").value;
    const numberSystem = document.getElementById("bitwise-numbers-system").value;
    let result;


    let firstOperand = parseInt(
        document.getElementById("bitwise-first-number").value
    );
    let secondOperand = parseInt(
        document.getElementById("bitwise-second-number").value
    );


    if (numberSystem === "Binary") {
        firstOperand = parseInt(firstOperand, 2);
        secondOperand = parseInt(secondOperand, 2);
    }

    if (numberSystem === "Octal") {
        firstOperand = parseInt(firstOperand, 8);
        secondOperand = parseInt(secondOperand, 8);
    }

    if (numberSystem === "Hexadecimal") {
        firstOperand = parseInt(firstOperand, 16).toString(16);
        secondOperand = parseInt(secondOperand, 16).toString(16);
    }

    if (isNaN(firstOperand) || isNaN(secondOperand)) {
        document.getElementById("bitwise-result").innerHTML = "NaN";
    } else {
        switch (operation) {
            case "AND":
                result = firstOperand & secondOperand;
                break;
            case "OR":
                result = firstOperand | secondOperand;
                break;
            case "XOR":
                result = firstOperand ^ secondOperand;
                break;
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
//Function that performs conversion of Octal/Binary/Decimal
function convertBinOct() {
    const fromBase = document.getElementById("octal-binary-select1").value;
    const toBase = document.getElementById("octal-binary-select2").value;
    const input = document.getElementById("octal-binary-input").value;
    let result = document.getElementById("octal-binary-result");
    let from = 8;
    let to = 8;

    if (fromBase === "Octal") from = 8;
    else if (fromBase === "Decimal") from=10;
    else from = 2;

    if (toBase === "Octal") to = 8;
    else if(toBase === "Decimal") to = 10;
    else to = 2;

    result.innerHTML = parseInt(input, from).toString(to);
    if (input == "") {
        result.innerHTML = "";
    } else if (from == 2) {
        if (input.search(/^[10]+$/) == -1)
            result.innerHTML = "Binary numbers can only have 0's and 1's";

    }
}

//----------------------------
//Function for addition of any number system
function addBinDecHexOct(){
    const firstBase = document.getElementById("adding-all-select1").value;
    const secondBase = document.getElementById("adding-all-select2").value;
    const input1 = document.getElementById("adding-all-input1").value;
    const input2 = document.getElementById("adding-all-input2").value;
    const resultType= document.getElementById("adding-all-result-type").value;
    let result = document.getElementById("adding-all-result");
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

    var x3=x1+x2;

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

//----------------------------
//Function that performs conversion of  binary to ex3
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

//----------------------------
//Function that performs conversion of grey to binary and viceversa
function reverseString(str) {
    return str.split("").reverse().join("");
}

function convertgrey() {
    const fromBase = document.getElementById("grey-select1").value;
    var input = document.getElementById("grey-input").value;
    let result = document.getElementById("grey-result");
    var x = input[0];

    if (fromBase == "Binary")
        for (var i = 1; i < input.length; i++)
            x += parseInt(input[i - 1] ^ input[i]).toString();

    else
        for (var i = 1; i < input.length; i++)
            x += parseInt(x[i - 1] ^ input[i]).toString();

    if (input == "") {
        x= "";
    } else if(input.search(/^[10]+$/) == -1)
             x= "Binary and grey code can only have 0's and 1's";
    result.innerHTML = x;
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
    else from = 16;

    if (toBase === "Binary") to = 2;
    else if (toBase === "Decimal") to = 10;
    else to = 16;

    result.innerHTML = parseInt(input, from).toString(to);
    if (input == "") {
        result.innerHTML = "";
    } else if (from == 2) {
        if (input.search(/^[10]+$/) == -1)
            result.innerHTML = "Binary numbers can only have 0's and 1's";

    }
}

//--------------------------------------------------------------------------------

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

//----------------
//7's 8's complement
function seveneightCalc(){
    const input = document.getElementById("seveneightnumber").value;
    let result = document.getElementById("seveneightresult");
    var seven = "";
    var eight = "";

    for (var i = 0; i < input.length; i++) {
        seven += '7' - input[i];
    }
    eight = parseInt(seven) + 1;
    result.innerHTML = "Seven's complement of "+ input + " is " + parseInt(seven) + "<br>";
    result.innerHTML += "Eight's complement of "+ input + " is " + eight + "<br>";

    if (input == "") {
        result.innerHTML = "";
    } else if (input.search(/^[0-7]+$/) == -1)
        result.innerHTML = "Octal Numbers can only have digits between 0 to 7 and - sign not allowed";
}


//--------------------
//15's 16's compliment
function fiftnsixtnCalc() {
    const input = document.getElementById("fiftnsixtnnumber").value;
    let result = document.getElementById("fiftnsixtnresult");
    var fiftn = "";
    var sixtn = "";
    for (var i = 0; i < input.length; i++) {
        fiftn += (16 - parseInt(input[i],16)).toString(16);

    }
    sixtn = (parseInt(fiftn,16) + 1).toString(16);
    result.innerHTML = "Fifteen's complement of " + input + " is " + fiftn + "<br>";
    result.innerHTML += "Sixteen's complement of " + input + " is " + sixtn + "<br>";


    if (input == "") {
        result.innerHTML = "";
    }
    if(fiftn == "NaN"){
        result.innerHTML = "Invalid Hexa Decimal Number"
    }

}


//9's 10's complement

function ninetenCalc() {
    const input = document.getElementById("ninetennumber").value;
    let result = document.getElementById("ninetenresult");
    var nine = "";
    var ten = "";
    for (var i = 0; i < input.length; i++) {
        nine += '9' - input[i];

    }
    ten = parseInt(nine) + 1;
    result.innerHTML = "Nine's complement of " + input + " is " + parseInt(nine) + "<br>";
    result.innerHTML += "Ten's complement of " + input + " is " + ten + "<br>";


    if (input == "") {
        result.innerHTML = "";
    } else if (input.search(/^[0-9]+$/) == -1)
        result.innerHTML = "Decimal Numbers can only have digits between 0 to 9 and '-' sign not allowed";
}

////////////////////date calculator///////////
function datecal() {
    var c = new Date(Date.parse(document.getElementById("datef").value));
    var d = new Date(Date.parse(document.getElementById("datet").value));
    var x = new Date(d.getFullYear(), d.getMonth(), 0).getDate();
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
}

//--------------------------------------------------------------------------------


function computeprobability() {

    var favour = parseInt(document.getElementById('favourable').value);


    var nettotal = parseInt(document.getElementById('total').value);
    let result = document.getElementById('probability-result');


    if (favour < 0 || nettotal < 0) {
        result.innerHTML = "Outcomes can't be negative. Enter positive values only";

    } else if (favour > nettotal) {
        result.innerHTML = "Number of favourable outcomes can't exceeds number of possible outcomes";
    } else {

        result.innerHTML = "The probability of the event is : " + (favour / nettotal).toFixed(3);
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

    if (favourable1 >= 0 && total1 > 0 && favourable2 >= 0 && total2 > 0) {
        if (favourable1 > total1) {
            result1.innerHTML = "Number of favourable outcomes can't exceeds number of possible outcomes in first event";
            check = false;
        }

        else if (favourable2 > total2) {
            result2.innerHTML = "Number of favourable outcomes can't exceeds number of possible outcomes in second event";
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
        result.innerHTML = "Outcomes can't be negative. Enter positive values only";

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

function rankcal() {

    var input = document.getElementById("rankcal-input").value;
    let result = document.getElementById("rankcal-result");
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
