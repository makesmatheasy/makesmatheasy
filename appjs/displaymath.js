function dint() {
    var lowerli = document.getElementById("lowerlimit").value;
    var upperli = document.getElementById("upperlimit").value;
    if (integralvar == '') {
        integralvar = 'x';
    }
    var value = document.getElementById('inputintegral').value;
    var x = nerdamer(value);
    var value = x.toTeX()
    if (checkit == '' || checkit == 'notok') {
        lowerli = '';
        upperli = '';
    } else {
        if (lowerli == '' && upperli == '') {
            lowerli = '-\\infty';
            upperli = '\\infty';
        } else if (lowerli != '' && upperli == '') {
            upperli = '\\infty';
        } else if (lowerli == '' && upperli != '') {
            lowerli = '-\\infty';
        }
    }
    katex.render('\\int_{' + lowerli + '}^{' + upperli + '}' + value + 'd' + integralvar, document.getElementById('resultintegration'), {
        throwOnError: false
    });
}

function sint() {
    var lowerli = document.getElementById("lowerlimit").value;
    var upperli = document.getElementById("upperlimit").value;
    if (integralvar == '') {
        integralvar = 'x';
    }
    if (checkit == '' || checkit == 'notok') {
        var t = nerdamer.integrate(document.getElementById('inputintegral').value, integralvar)
        convertkatex(document.getElementById('resultintegration'), t);
        return t.toString();
    } else {
        var t = nerdamer.defint(document.getElementById('inputintegral').value, lowerli, upperli, integralvar);
        if (lowerli == '') {
            lowerli = "-Infinity";
        }
        if (upperli == '') {
            upperli = "Infinity";
        }
        convertkatex(document.getElementById('resultintegration'), t);
        return t.toString();
    }
}

function ddiff() {
    var value = document.getElementById('inputdifferentiatequation').value;
    var x = nerdamer(value);
    var value = x.toTeX();
    var o = '';
    if (difforder == "") {
        difforder = '1';
    }
    if (diffvariable == "") {
        diffvariable = "x";
    }
    if ((diffvariable == "" && difforder == "")) {
        o = "\\dfrac{d}{dx}";
    } else if (diffvariable == "" && difforder != "") {
        o = '\\dfrac{d^' + difforder + '}{dx' + difforder + '}';
    } else {
        o = '\\dfrac{d^' + difforder + '}{d' + diffvariable + '^' + difforder + '}';
    }
    katex.render(o + value, document.getElementById('resultdiff'), {
        throwOnError: false
    });
}

function sdiff() {
    var t = String(nerdamer.diff(document.getElementById('inputdifferentiatequation').value, diffvariable, difforder))
    convertkatex(document.getElementById('resultdiff'), t);
    return t;
}

function dpardiff() {
    var value = document.getElementById('inputpartialdiff').value;
    getparorder(document.getElementById('inputpartialorder').value);
    var sum = 0;
    var or = pardifforder.match(/\d+/g);
    var po = '';
    if (or == null) {
        if (pardifforder == "") {
            po = "\\frac{\\partial }{\\partial x}"
        } else if (pardifforder != "") {
            var sp = pardifforder.split(",")
            var v;
            var temp = '';
            for (v of sp) {
                temp += "\\partial " + v;
            }
            po = '\\frac{\\partial }{' + temp + '}';
        }
    } else {
        for (i of or) {
            sum += parseInt(i);
        }
        if (pardifforder == "") {
            po = '\\frac{\\partial^' + sum + '}{\\partial x}'
        } else if (pardifforder != "") {
            var sp = pardifforder.split(",")
            var v;
            var temp = '';
            for (v of sp) {
                temp += "\\partial " + v;
            }
            po = '\\frac{\\partial^' + sum + '}{' + temp + '}';
        }

    }

    var x = nerdamer(value);
    value = x.toTeX();
    katex.render(po + value, document.getElementById('resultpardiff'), {
        throwOnError: false
    });
}

//function displaymatrix(ar,elid){
//        temp='\\begin{bmatrix}'
//        for (i of ar){
//            for(j of i){
//                temp+=j+"&"
//            }
//            temp=temp.slice(0, -1);
//            temp+='\\\\';
//        }
//        temp+='\\end{bmatrix}'
//        katex.render(temp, document.getElementById(elid), {
//            throwOnError: false
//        });
//}

function dlap() {
    var value = document.getElementById('inputlaplace').value;
    value = nerdamer(value).toTeX();
    var b = "\\mathcal{L}(";
    a = ")";
    katex.render(b + value + a, document.getElementById('resultlaplace'), {
        throwOnError: false
    });
}

function slap() {
    var value = nerdamer.laplace(document.getElementById('inputlaplace').value, "t", "s")
    var t = value;
    value = nerdamer(value).toTeX();
    katex.render(value, document.getElementById('resultlaplace'), {
        throwOnError: false
    });

    var ar=t.toString().split('');
    for(i=0;i<ar.length;i++){
        if(ar[i]=='s' && ar[i+1]=='i'){
            continue;
        }else if(ar[i]=='s' && ar[i-1]=='o' && ar[i-2]=='c'){
            continue;
        }else if(ar[i]=='s' && ar[i+1]=='e' && ar[i+2]=='c'){
            continue;
        }else if(ar[i]=='s' && ar[i-1]=='c' && ar[i+1]=='c'){
            continue;
        } else if(ar[i]=='s'){
            ar[i]='x';
        }
    }
    ar=ar.join('');
    return ar.toString();
}

function dinvlap() {
    var value = document.getElementById('inputinverselaplace').value;
    value = nerdamer(value).toTeX();
    var b = "\\mathcal{L}(";
    a = ")";
    katex.render(b + value + a, document.getElementById('resultinverselaplace'), {
        throwOnError: false
    });
}
function dploteq() {
    var value = document.getElementById('inputplotequation').value;
    value = nerdamer(value).toTeX();
    katex.render(value, document.getElementById('plotgrapheqdisplay'), {
        throwOnError: false
    });
}

function sinvlap() {
    var value = nerdamer.ilt(document.getElementById('inputinverselaplace').value, "s", "t")
    var t=value;
    value = nerdamer(value).toTeX();
    katex.render(value, document.getElementById('resultinverselaplace'), {
        throwOnError: false
    });
    var ar=t.toString().split('');
    for(i=0;i<ar.length;i++){
        if(ar[i]=='t' && ar[i+1]=='a' && ar[i+2]=='n'){
            continue;
        }else if(ar[i]=='t' && ar[i-1]=='c' && ar[i-2]=='c'){
            continue;
        } else if(ar[i]=='t'){
            ar[i]='x';
        }
    }
    ar=ar.join('');
    return ar.toString();
}







