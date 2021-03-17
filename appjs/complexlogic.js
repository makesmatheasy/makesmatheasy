function Complex(real, imaginary) {
    this.real = 0;
    this.imaginary = 0;
    this.real = (typeof real === 'undefined') ? this.real : parseFloat(real);
    this.imaginary = (typeof imaginary === 'undefined') ? this.imaginary : parseFloat(imaginary);
}
Complex.transform = function (num) {
    var complex;
    complex = (num instanceof Complex) ? num : complex;
    complex = (typeof num === 'number') ? new Complex(num, 0) : num;
    return complex;
};
function display(re, im) {
    if (im === '0') return '' + re;
    if (re === 0) return '' + im + 'i';
    if (im < 0) return '' + re + im + 'i';
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

function add() {
    var a = new Complex(document.getElementById('creal1').value,  document.getElementById('cimg1').value);
    var b = new Complex(document.getElementById('creal2').value,  document.getElementById('cimg2').value);
    var res = complexAdd(a,b);
    katex.render(res, document.getElementById('compresult'), {
        throwOnError: false
    });
}

function sub() {
    var a = new Complex(document.getElementById('creal1').value,  document.getElementById('cimg1').value);
    var b = new Complex(document.getElementById('creal2').value,  document.getElementById('cimg2').value);
    var res = complexSub(a,b);
    katex.render(res, document.getElementById('compresult'), {
        throwOnError: false
    });
}
function mul() {
    var a = new Complex(document.getElementById('creal1').value,  document.getElementById('cimg1').value);
    var b = new Complex(document.getElementById('creal2').value,  document.getElementById('cimg2').value);
    var res = complexMul(a,b);
    katex.render(res, document.getElementById('compresult'), {
        throwOnError: false
    });
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
    }
    else {
        err();
    }
}

