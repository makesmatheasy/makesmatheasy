function creatematrix1() {
    removeall('generatedmatrix1');
    var ids = "id1"
    for (var i = 0; i < document.getElementById('row1').value; i++) {
        for (var j = 0; j < document.getElementById('column1').value; j++) {
            var inp = document.createElement('input');
            inp.id = ids;
            inp.type = "number";
            inp.value = Math.floor(Math.random() * 10);
            inp.style.width = "90px"
            inp.style.display = 'inline';
            inp.className = "form-control paddingformat"
            inp.placeholder = "a" + parseInt(i + 1) + parseInt(j + 1);
            document.getElementById('generatedmatrix1').appendChild(inp);
            ids += "2";
        }
        document.getElementById('generatedmatrix1').appendChild(document.createElement('br'));
    }
}

function creatematrix2() {
    removeall('generatedmatrix2');
    var ids = "id2"
    for (var i = 0; i < document.getElementById('row2').value; i++) {
        for (var j = 0; j < document.getElementById('column2').value; j++) {
            var inp = document.createElement('input');
            inp.id = ids;
            inp.type = "number";
            inp.style.width = "90px"
            inp.style.display = 'inline';
            inp.value = Math.floor(Math.random() * 10);
            inp.className = "form-control paddingformat"
            inp.placeholder = "b" + parseInt(i + 1) + parseInt(j + 1);
            document.getElementById('generatedmatrix2').appendChild(inp);
            ids += "3";
        }
        document.getElementById('generatedmatrix2').appendChild(document.createElement('br'));
    }
}

var matrix1 = [];

function sendtomatrix2() {
    var ids = "id2"
    for (var i = 0; i < document.getElementById('row2').value; i++) {
        matrix2[i] = [];
        for (var j = 0; j < document.getElementById('column2').value; j++) {
            if (document.getElementById(ids).value == '') {
                matrix2[i][j] = 0;
                document.getElementById(ids).value = '0';
            } else {
                matrix2[i][j] = document.getElementById(ids).value;
            }

            ids += "3";
        }
    }
}

var matrix2 = [];

function sendtomatrix1() {
    var ids = "id1"
    for (var i = 0; i < document.getElementById('row1').value; i++) {
        matrix1[i] = [];
        for (var j = 0; j < document.getElementById('column1').value; j++) {
            if (document.getElementById(ids).value == '') {
                matrix1[i][j] = 0;
                document.getElementById(ids).value = '0';
            } else {
                matrix1[i][j] = document.getElementById(ids).value;
            }

            ids += "2";
        }
    }
}

function displaymatrix(val, ar, elid, m, n) {
    temp = val + '\\\\'
    temp += '\\begin{bmatrix}'
    for (var i of ar) {
        for (var j of i) {
            temp += nerdamer(j).toTeX().toString() + "&"
        }
        temp = temp.slice(0, -1);
        temp += '\\\\';
    }
    temp += '\\end{bmatrix}'
    temp += '_{' + m + '\\times' + n + '}'
    katex.render(temp, document.getElementById(elid), {
        throwOnError: false
    });
}


function signofmatrix(value) {
    var el = document.getElementById('signofmatrix');
    el.innerHTML = value;
    clearfields();
}

function sumofmatrix() {
    loader('show');
    setTimeout(function () {
        sendtomatrix1();
        sendtomatrix2();
        var summ = [];
        var sumexplanation = '';
        for (var i = 0; i < document.getElementById('row2').value; i++) {
            summ[i] = [];
            sumexplanation += "<div style='border-radius:50px;padding:20px;min-width:900px;' class='bi'>"
            for (var j = 0; j < document.getElementById('column2').value; j++) {
                sumexplanation += '\\[a_{' + String(parseInt(i + 1)) + String(parseInt(j + 1)) + '} = ' + String(parseInt(matrix1[i][j])) + '\\space and \\space b_{' + String(parseInt(i + 1)) + String(parseInt(j + 1)) + '} = ' + String(parseInt(matrix2[i][j])) + '\\]';
                summ[i][j] = parseInt(matrix1[i][j]) + parseInt(matrix2[i][j]);
                var dp = ''
                var dp2 = ''
                dp += '\\[\\color{black}\\begin{bmatrix}'
                for (var ii = 0; ii < document.getElementById('row2').value; ii++) {
                    for (var jj = 0; jj < document.getElementById('column2').value; jj++) {
                        if (ii == i && jj == j) {
                            dp += matrix1[ii][jj] + "&"
                        } else {
                            dp += ".&";
                        }
                    }
                    dp = dp.slice(0, -1);
                    dp += '\\\\';
                }
                dp += '\\end{bmatrix}'
                dp += '+\\begin{bmatrix}'
                for (var ii = 0; ii < document.getElementById('row2').value; ii++) {
                    for (var jj = 0; jj < document.getElementById('column2').value; jj++) {
                        if (ii == i && jj == j) {
                            dp += matrix2[ii][jj] + "&"
                        } else {
                            dp += ".&";
                        }
                    }
                    dp = dp.slice(0, -1);
                    dp += '\\\\';
                }
                dp += '\\end{bmatrix}='
                dp += '\\begin{bmatrix}'
                for (var ii = 0; ii < document.getElementById('row2').value; ii++) {
                    for (var jj = 0; jj < document.getElementById('column2').value; jj++) {
                        if (ii == i && jj == j) {
                            dp += String(matrix1[ii][jj]) + '+' + String(matrix2[ii][jj]) + "&"
                        } else {
                            dp += ".&";
                        }
                    }
                    dp = dp.slice(0, -1);
                    dp += '\\\\';
                }
                dp += "\\end{bmatrix}="
                dp += '\\color{blue}\\begin{bmatrix}'
                for (var ii = 0; ii < document.getElementById('row2').value; ii++) {
                    for (var jj = 0; jj < document.getElementById('column2').value; jj++) {
                        if (ii == i && jj == j) {
                            dp += eval(String(matrix1[ii][jj]) + '+' + String(matrix2[ii][jj])) + "&"
                        } else {
                            dp += ".&";
                        }
                    }
                    dp = dp.slice(0, -1);
                    dp += '\\\\';
                }
                dp += "\\end{bmatrix}\\]"
                sumexplanation += dp;
            }
            sumexplanation += "</div>"
            sumexplanation += '<br>';
        }
        // <!--            printhere-->
        document.getElementById('explanationmatrixresult').innerHTML = sumexplanation;
        displaymatrix('Addition\\space Result', summ, 'matrixresult', String(document.getElementById('row2').value), String(document.getElementById('column2').value))
        renderMathInElement(document.getElementById('explanationmatrixresult'));
        // <!--            printhere-->
    }, 100);
    setTimeout(function () {
        loader('hide');
    }, 2000);
}

function subtractofmatrix() {
    loader('show');
    setTimeout(function () {
        sendtomatrix1();
        sendtomatrix2();

        var subb = [];
        var subbexplanation = '';
        for (var i = 0; i < document.getElementById('row2').value; i++) {
            subb[i] = [];
            subbexplanation += "<div style='border-radius:50px;padding:20px;min-width:900px;' class='bi'>"
            for (var j = 0; j < document.getElementById('column2').value; j++) {
                subbexplanation += '\\[a_{' + String(parseInt(i + 1)) + String(parseInt(j + 1)) + '} = ' + String(parseInt(matrix1[i][j])) + '\\space and \\space b_{' + String(parseInt(i + 1)) + String(parseInt(j + 1)) + '}=' + String(parseInt(matrix2[i][j])) + '\\]';
                subb[i][j] = parseInt(matrix1[i][j]) - parseInt(matrix2[i][j]);
                var dp = ''
                var dp2 = ''
                dp += '\\[\\color{black}\\begin{bmatrix}'
                for (var ii = 0; ii < document.getElementById('row2').value; ii++) {
                    for (var jj = 0; jj < document.getElementById('column2').value; jj++) {
                        if (ii == i && jj == j) {
                            dp += matrix1[ii][jj] + "&"
                        } else {
                            dp += ".&";
                        }
                    }
                    dp = dp.slice(0, -1);
                    dp += '\\\\';
                }
                dp += '\\end{bmatrix}'
                dp += '-\\begin{bmatrix}'
                for (var ii = 0; ii < document.getElementById('row2').value; ii++) {
                    for (var jj = 0; jj < document.getElementById('column2').value; jj++) {
                        if (ii == i && jj == j) {
                            dp += matrix2[ii][jj] + "&"
                        } else {
                            dp += ".&";
                        }
                    }
                    dp = dp.slice(0, -1);
                    dp += '\\\\';
                }
                dp += '\\end{bmatrix}='
                dp += '\\begin{bmatrix}'
                for (var ii = 0; ii < document.getElementById('row2').value; ii++) {
                    for (var jj = 0; jj < document.getElementById('column2').value; jj++) {
                        if (ii == i && jj == j) {
                            dp += String(matrix1[ii][jj]) + '-' + String(matrix2[ii][jj]) + "&"
                        } else {
                            dp += ".&";
                        }
                    }
                    dp = dp.slice(0, -1);
                    dp += '\\\\';
                }
                dp += "\\end{bmatrix}="
                dp += '\\color{blue}\\begin{bmatrix}'
                for (var ii = 0; ii < document.getElementById('row2').value; ii++) {
                    for (var jj = 0; jj < document.getElementById('column2').value; jj++) {
                        if (ii == i && jj == j) {
                            dp += eval(String(matrix1[ii][jj]) + '-' + String(matrix2[ii][jj])) + "&"
                        } else {
                            dp += ".&";
                        }
                    }
                    dp = dp.slice(0, -1);
                    dp += '\\\\';
                }
                dp += "\\end{bmatrix}\\]"
                subbexplanation += dp;
            }

            subbexplanation += '</div>';
            subbexplanation += '<br>';
        }
        // <!--            printhere-->
        document.getElementById('explanationmatrixresult').innerHTML = subbexplanation;
        displaymatrix('Subtraction\\space Result', subb, 'matrixresult', String(document.getElementById('row2').value), String(document.getElementById('column2').value))
        renderMathInElement(document.getElementById('explanationmatrixresult'));
        // <!--            printhere-->
    }, 100);
    setTimeout(function () {
        loader('hide');
    }, 2000);

}

function mulofmatrix() {
    loader('show');
    setTimeout(function () {
        sendtomatrix1();
        sendtomatrix2();
        var mul = [];
        var temp = '';
        var mulexplanation = '';
        var d = '';
        for (var i = 0; i < document.getElementById('row1').value; i++) {
            mulexplanation += "<div class='dropdown-divider'></div><br>"
            mulexplanation += "<span style='color:var(--apppink) !important'>"
            mulexplanation += '<span style="font-size: 20px;"> Taking Row ' + String(i + 1) + ' of Matrix 1</span>';
            mulexplanation += "</span><br>"
            mul[i] = [];
            for (var j = 0; j < document.getElementById('column2').value; j++) {
                mulexplanation += "<div class='bi' style='border-radius:50px;padding:20px;display:table;margin:3px;width:100%;'>"
                mulexplanation += '<span style="border: 3px solid var(--appblack);padding: 10px;border-radius: 30px;font-size: 20px;">Column ' + String(j + 1) + ' of Matrix 2</span><br>';
                mul[i][j] = 0;
                for (var k = 0; k < document.getElementById('column1').value; k++) {
                    mulexplanation += '\\[a_{' + String(parseInt(j + 1)) + String(parseInt(k + 1)) + '} = ' + String(parseInt(matrix1[i][k])) + '\\space and \\space b_{' + String(parseInt(k + 1)) + String(parseInt(i + 1)) + '} = ' + String(parseInt(matrix2[k][j])) + '\\]\\[\\big( ' + String(parseInt(matrix1[i][k])) + ' &times; ' + String(parseInt(matrix2[k][j])) + ' \\big) = ' + String(parseInt(matrix1[i][k]) * parseInt(matrix2[k][j])) + '\\]'
                    temp += String(parseInt(matrix1[i][k]) * parseInt(matrix2[k][j])) + ' + '
                    mul[i][j] = parseInt(mul[i][j]) + parseInt(matrix1[i][k]) * parseInt(matrix2[k][j]);
                }
                var dp = '\\[\\begin{bmatrix}'
                var count = 0
                for (var ij of matrix1) {
                    for (var ji of ij) {
                        if (count == i)
                            dp += '\\color{blue}' + ji + "&"
                        else {
                            dp += ji + "&"
                        }
                    }
                    count += 1;
                    dp = dp.slice(0, -1);
                    dp += '\\\\';
                }
                dp += '\\end{bmatrix}\\times'
                dp += '\\begin{bmatrix}';
                for (var ij of matrix2) {
                    var count = 0
                    for (var ji of ij) {
                        if (count == j)
                            dp += '\\color{blue}' + ji + "&"
                        else {
                            dp += ji + "&"
                        }
                        count += 1;
                    }
                    dp = dp.slice(0, -1);
                    dp += '\\\\';
                }
                dp += '\\end{bmatrix}\\]'

                mulexplanation += dp;
                mulexplanation += '<b style="font-size: 25px;">' + temp.slice(0, -3) + ' = ' + eval(temp.slice(0, -3)) + '</b>';
                var mat = [];
                for (var f = 0; f < document.getElementById('row1').value; f++) {
                    mat[f] = [];
                    for (var d = 0; d < document.getElementById('column2').value; d++) {
                        if (f == i && d == j) {
                            mat[f][d] = String(eval(temp.slice(0, -3)))
                        } else {
                            mat[f][d] = '.';
                        }
                    }
                }
                dtemp = '\\[\\begin{bmatrix}'
                for (var ij of mat) {
                    for (var ii of ij) {
                        if (ji == '.')
                            dtemp += ji + "&"
                        else
                            dtemp += '\\color{blue}' + ji + "&"
                    }
                    dtemp = dtemp.slice(0, -1);
                    dtemp += '\\\\';
                }
                dtemp += '\\end{bmatrix}\\]'

                mulexplanation += dtemp;
                temp = '';
                mat = '';
                m1 = '';
                mulexplanation += "</div>"
            }
            mulexplanation += '<br>';
        }
        // <!--            printhere-->
        document.getElementById('explanationmatrixresult').innerHTML = mulexplanation;
        renderMathInElement(document.getElementById('explanationmatrixresult'));
        displaymatrix('Multiplication\\space Result', mul, 'matrixresult', String(document.getElementById('row1').value), String(document.getElementById('column2').value));
        // <!--            printhere-->
    }, 100);
    setTimeout(function () {
        loader('hide');
    }, 2000);
}

function clearfields() {
    document.getElementById('matrixresult').textContent = '';
    document.getElementById('explanationmatrixresult').textContent = '';
}

function checkfunctionsmultiple() {
    removeall('opval')
    var r1 = document.getElementById('row1').value;
    var r2 = document.getElementById('row2').value;
    var c1 = document.getElementById('column1').value;
    var c2 = document.getElementById('column2').value;
    if (r1 == '' || r2 == '' || c1 == '' || c2 == '') {
        addop('opval', 'Input Fields');
        removeall('generatedmatrix1');
        removeall('generatedmatrix2');
        document.getElementById('generatedmatrix1').innerHTML = '';
        document.getElementById('generatedmatrix2').innerHTML = '';
        document.getElementById('signofmatrix').innerHTML = '';

    }
	else if(parseInt(r1) <=0 || parseInt(r2) <=0 || parseInt(c1) <=0 || parseInt(c2) <=0)
	{
		 document.getElementById('mmatrixerror').innerHTML = "<center>Please enter positive integers for the dimensions.</center>";
		 removeall('generatedmatrix1');
         removeall('generatedmatrix2');
	}
	   
	else {
		removeall('mmatrixerror');
        creatematrix2();
        creatematrix1();
        if (r1 == r2 && c1 == c2) {
            if (c1 != r2) {
                addop('opval', 'Select Operation');
                addop('opval', '+');
                addop('opval', '-');
                document.getElementById('mmatrixerror').innerHTML = "<center>Multiplication is not Possible with these inputs</center>";
            } else if (c1 == r2) {
                addop('opval', 'Select Operation');
                addop('opval', '+');
                addop('opval', '-');
                addop('opval', '×');
            }

        } else if (c1 == r2) {
            if (c1 == r2 == r1 == c2) {
                addop('opval', 'Select Operation');
                addop('opval', '+');
                addop('opval', '-');
                addop('opval', '×');
            } else if (c1 == r2 && r1 != c2) {
                addop('opval', '×');
                document.getElementById('mmatrixerror').innerHTML = "<center>Addition and Subtraction is not Possible with these inputs</center>";
                signofmatrix('×');
            } else if (c1 == r2 && r1 == c2) {
                addop('opval', '×');
                document.getElementById('mmatrixerror').innerHTML = "<center>Addition and Subtraction is not Possible with these inputs</center>";
                signofmatrix('×');
            }
        } else {
            addop('opval', 'Not Possible with these inputs');
            removeall('generatedmatrix1');
            removeall('generatedmatrix2');
        }


    }
}

function calloperation(value) {
    if (value == '+') {
        sumofmatrix();
    } else if (value == '-') {
        subtractofmatrix();
    } else if (value == '×') {
        mulofmatrix();
    }

}


//single matrix
function creatematrixsingle() {
    removeall('generatedmatrixsingle');
    var ids = "id13"
    for (var i = 0; i < document.getElementById('srow1').value; i++) {
        for (var j = 0; j < document.getElementById('scolumn1').value; j++) {
            var inp = document.createElement('input');
            inp.id = ids;
            inp.type = "number";
            inp.style.width = "90px"
            inp.value = Math.floor(Math.random() * 10);
            inp.style.display = 'inline';
            inp.className = "form-control paddingformat"
            inp.placeholder = "a" + parseInt(i + 1) + parseInt(j + 1);
            document.getElementById('generatedmatrixsingle').appendChild(inp);
            ids += "23";
        }
        document.getElementById('generatedmatrixsingle').appendChild(document.createElement('br'));
    }
}

var matrixsingle = []

function sendtomatrixsingle() {
    var ids = "id13"
    for (var i = 0; i < document.getElementById('srow1').value; i++) {
        matrixsingle[i] = [];
        for (var j = 0; j < document.getElementById('scolumn1').value; j++) {
            if (document.getElementById(ids).value == '') {
                matrixsingle[i][j] = 0;
                document.getElementById(ids).value = '0';
            } else {
                matrixsingle[i][j] = document.getElementById(ids).value;
            }

            ids += "23";
        }
    }
}

function transpose() {
    loader('show');
    setTimeout(function () {
        sendtomatrixsingle();
        var trans = [];
        for (var i = 0; i < document.getElementById('scolumn1').value; i++) {
            trans[i] = [];
            for (var j = 0; j < document.getElementById('srow1').value; j++) {
                trans[i][j] = matrixsingle[j][i];
            }
        }
        displaymatrix('Transposed\\space Matrix', trans, 'singlematrixresult', String(document.getElementById('scolumn1').value), String(document.getElementById('srow1').value))
        document.getElementById('singlematrixexplanation').innerHTML = "&nbsp;&nbsp;Just Interchange Rows and Columns"
    }, 100);
    setTimeout(function () {
        loader('hide');
    }, 2000);
}


function soperation(value) {
    if (value == 'Transpose') {
        transpose();
    } else if(value == 'Rank'){
        rank();
    }
    else if(value == 'Inverse'){
        inverse();
    }
    else if (value == 'Minors & Co-Factors') {
        miandcofactors();
    } else if (value == "Determinant") {
        laplacedeterminant();
    } else if (value == 'Matrix Power') {
        matPow();
    }
}

//matrix power
function matPow() {
    loader('show');
    setTimeout(function () {
        sendtomatrixsingle();
        var mul = [];
        var matrix2 = [];
        var row = document.getElementById('srow1').value;
        var col = document.getElementById('scolumn1').value;
        for (var i = 0; i < row; i++) {
            matrix2[i] = [];
            for (var j = 0; j < col; j++) {
                console.log(matrixsingle[i][j]);
                matrix2[i][j] = matrixsingle[i][j];
            }
        }
        var pow = document.getElementById('powInp').value;
        var temp = '';
        var mulexplanation = '';
        var d = '';
        for (var i = 0; i < document.getElementById('srow1').value; i++) {
            mulexplanation += "<div class='dropdown-divider'></div><br>"
            mulexplanation += "<span style='color:var(--apppink) !important'>"
            mulexplanation += '<span style="font-size: 20px;"> Taking Row ' + String(i + 1) + ' of Matrix</span>';
            mulexplanation += "</span><br>"
            mul[i] = [];
            for (var j = 0; j < document.getElementById('scolumn1').value; j++) {
                mulexplanation += "<div class='bi' style='border-radius:50px;padding:20px;display:table;margin:3px;width:100%;'>"
                mulexplanation += '<span style="border: 3px solid var(--appblack);padding: 10px;border-radius: 30px;font-size: 20px;">Column ' + String(j + 1) + ' of Matrix 2</span><br>';
                mul[i][j] = 0;
                for (var k = 0; k < document.getElementById('scolumn1').value; k++) {
                    mulexplanation += '\\[a_{' + String(parseInt(j + 1)) + String(parseInt(k + 1)) + '} = ' + String(parseInt(matrixsingle[i][k])) + '\\space and \\space b_{' + String(parseInt(k + 1)) + String(parseInt(i + 1)) + '} = ' + String(parseInt(matrix2[k][j])) + '\\]\\[\\big( ' + String(parseInt(matrixsingle[i][k])) + ' &times; ' + String(parseInt(matrix2[k][j])) + ' \\big) = ' + String(parseInt(matrixsingle[i][k]) * parseInt(matrix2[k][j])) + '\\]'
                    temp += String(parseInt(matrixsingle[i][k]) * parseInt(matrix2[k][j])) + ' + '
                    mul[i][j] = parseInt(mul[i][j]) + parseInt(matrixsingle[i][k]) * parseInt(matrix2[k][j]);
                }
                var dp = '\\[\\begin{bmatrix}'
                var count = 0
                for (var ij of matrixsingle) {
                    for (var ji of ij) {
                        if (count == i)
                            dp += '\\color{blue}' + ji + "&"
                        else {
                            dp += ji + "&"
                        }
                    }
                    count += 1;
                    dp = dp.slice(0, -1);
                    dp += '\\\\';
                }
                dp += '\\end{bmatrix}\\times'
                dp += '\\begin{bmatrix}';
                for (var ij of matrix2) {
                    var count = 0
                    for (var ji of ij) {
                        if (count == j)
                            dp += '\\color{blue}' + ji + "&"
                        else {
                            dp += ji + "&"
                        }
                        count += 1;
                    }
                    dp = dp.slice(0, -1);
                    dp += '\\\\';
                }
                dp += '\\end{bmatrix}\\]'
                mulexplanation += dp;
                mulexplanation += '<b style="font-size: 25px;">' + temp.slice(0, -3) + ' = ' + eval(temp.slice(0, -3)) + '</b>';
                var mat = [];
                for (var f = 0; f < document.getElementById('srow1').value; f++) {
                    mat[f] = [];
                    for (var d = 0; d < document.getElementById('scolumn1').value; d++) {
                        if (f == i && d == j) {
                            mat[f][d] = String(eval(temp.slice(0, -3)))
                        } else {
                            mat[f][d] = '.';
                        }
                    }
                }
                dtemp = '\\[\\begin{bmatrix}'
                for (var ij of mat) {
                    for (var ii of ij) {
                        if (ji == '.')
                            dtemp += ji + "&"
                        else
                            dtemp += '\\color{blue}' + ji + "&"
                    }
                    dtemp = dtemp.slice(0, -1);
                    dtemp += '\\\\';
                }
                dtemp += '\\end{bmatrix}\\]'

                mulexplanation += dtemp;
                temp = '';
                mat = '';
                m1 = '';
                mulexplanation += "</div>"
            }
            mulexplanation += '<br>';
        }
        document.getElementById('singlematrixexplanation').innerHTML = mulexplanation;
        renderMathInElement(document.getElementById('singlematrixexplanation'));
    }, 100);
    setTimeout(function () {
        loader('hide');
    }, 2000);
}

//rank calculation
function rank(){
    loader('show');
    setTimeout(function () {
        sendtomatrixsingle();
        var rankexplanation = "<div style='border-radius:50px;display:table;color:black;padding:20px;margin-left: auto; margin-right: auto;'>"
        var row = document.getElementById('srow1').value;
        var column = document.getElementById('scolumn1').value;
        var rank=column;
        //---print initial matrix
        rankexplanation+="<div style='border:none;border-radius:30px;margin:2px'>\\[Given \\space Matrix\\]"
        rankexplanation+='\\[\\begin{bmatrix}'
        for (var i = 0; i < row; i++){
            for (var j = 0; j < column; j++){
                rankexplanation+=matrixsingle[i][j]+"&";
            }
            rankexplanation = rankexplanation.slice(0, -1);
            rankexplanation+='\\\\';
        }
        rankexplanation+='\\end{bmatrix}\\]'+"</div>";

        for (var i = 0; i < rank && i<row; i++) {
            let eliminateflag=1,swaprowflag=1,swapcolumnflag=1,swaprow;
            if (matrixsingle[i][i]!=0) {
                for (var j = i; j < row; j++) {
                    if(j!=i && matrixsingle[j][i]!=0){
                        let factor=matrixsingle[j][i]/matrixsingle[i][i];
                        for(var k=0;k<rank;k++){
                            matrixsingle[j][k]-=factor * matrixsingle[i][k];
                            eliminateflag=0;
                        }   
                    }
                }
                if(i!=row-1 && eliminateflag==0 ){
                        rankexplanation+="<div style='border:none;border-radius:30px;margin:2px'>\\[Eliminate \\space elements \\space in \\space the \\space "+(i+1)+" \\space column \\space under \\space" +(i+1)+"\\space element\\]";
                }
            }     
            else {
               let flag=1;
               for(var j=i+1;j<row;j++) {
                   if(matrixsingle[j][i]!=0){
                        rankexplanation+="<div style='border:none;border-radius:30px;margin:2px'>\\[Swap \\space the \\space "+(i+1)+" \\space and \\space " +(j+1)+"\\space row\\]";
                        swaprowflag=0; 
                        swaprow=j;
                        for(var k=0;k<column;k++){
                           let temp=matrixsingle[i][k];
                           matrixsingle[i][k]=matrixsingle[j][k];
                           matrixsingle[j][k]=temp;
                        }
                        flag=0;
                        break;
                    }
                }
                if(flag){
                    rank--;
                    if(i!=rank){
                        rankexplanation+="<div style='border:none;border-radius:30px;margin:2px'>\\[Swap \\space the \\space "+(i+1)+" \\space and \\space " +(rank+1)+"\\space column\\]";
                        swapcolumnflag=0;
                        for(var k=0;k<row;k++){
                            let temp=matrixsingle[k][i];
                            matrixsingle[k][i]=matrixsingle[k][rank];
                            matrixsingle[k][rank]=temp;
                        
                        }
                    }
                    
                }
                i--;    
            }
            if(eliminateflag==0){
                rankexplanation+='\\[\\begin{bmatrix}'
                for(var j=0;j<row;j++){
                    for(var k=0;k<column;k++){
                        if(k==i && j>=i){
                            rankexplanation+='\\color{blue}'
                            let e=nerdamer(matrixsingle[j][k])
                            rankexplanation+=e.text('fractions')+"&";
                        }
                        else{
                            let e=nerdamer(matrixsingle[j][k])
                            rankexplanation+=e.text('fractions')+"&";
                        }   
                    }
                    rankexplanation = rankexplanation.slice(0, -1);
                    rankexplanation+='\\\\';
                }
                rankexplanation+='\\end{bmatrix}\\]'+"</div>";
            }
            else if(swaprowflag==0){
                rankexplanation+='\\[\\begin{bmatrix}'
                for(var j=0;j<row;j++){
                    for(var k=0;k<column;k++){
                        if(j==i+1 || j==swaprow){
                            rankexplanation+='\\color{blue}'
                            let e=nerdamer(matrixsingle[j][k])
                            rankexplanation+=e.text('fractions')+"&";
                        }
                        else{
                            let e=nerdamer(matrixsingle[j][k])
                            rankexplanation+=e.text('fractions')+"&";
                        }   
                    }
                    rankexplanation = rankexplanation.slice(0, -1);
                    rankexplanation+='\\\\';
                }
                rankexplanation+='\\end{bmatrix}\\]'+"</div>";
            }
            else if(swapcolumnflag==0){
                rankexplanation+='\\[\\begin{bmatrix}'
                for(var j=0;j<row;j++){
                    for(var k=0;k<column;k++){
                        if(k==i+1|| k==rank){
                            rankexplanation+='\\color{blue}'
                            let e=nerdamer(matrixsingle[j][k])
                            rankexplanation+=e.text('fractions')+"&";
                        }
                        else{
                            let e=nerdamer(matrixsingle[j][k])
                            rankexplanation+=e.text('fractions')+"&";
                        }   
                    }
                    rankexplanation = rankexplanation.slice(0, -1);
                    rankexplanation+='\\\\';
                }
                rankexplanation+='\\end{bmatrix}\\]'+"</div>";
            }
        }
        let minimum=Math.min(row,column);
        let maximum=Math.max(row,column);
        if(rank>minimum ){
              rank=minimum-(maximum-rank);
        }
        rankexplanation+="\\[Count \\space number\\space of \\space non \\space zero \\space rows/columns,\\space that \\space will \\space be \\space rank.\\\\Rank\\space Of \\space Matrix="+ rank +"\\]";
        rankexplanation+="</div>";
        document.getElementById('singlematrixresult').innerHTML=  "\\[Rank \\space Of \\space Matrix=" + rank + "\\]";
        document.getElementById('singlematrixexplanation').innerHTML =rankexplanation;
        renderMathInElement(document.getElementById('singlematrixexplanation'));
        renderMathInElement(document.getElementById('singlematrixresult'));

        }, 100);
    setTimeout(function () {
        loader('hide');
    }, 2000);
}


function miandcofactors() {
    loader('show');
    setTimeout(function () {
        sendtomatrixsingle();
        function get_Minor(x, y, minor){
            for( var i = 0; i<row; i++){
                minor[i] = [];
                for(var j=0;j<col;j++){
                    if(i!==x && j!==y){
                        minor[i][j] = matrixsingle[i][j];		
                    }
                    else{
                        minor[i][j] = 0;
                    }
                }
            }
        }
        function getCofactor(cofactor, p, q) 
        { 
            var i = 0, j = 0;
            // Looping for each element of the matrix 
            for (var x = 0; x < row; x++) 
            { 
                cofactor[x] = [];
                for (var y = 0; y < col; y++) 
                { 
                //  Copying into temporary matrix only those element 
                //  which are not in given row and column 
                //else insert 0
                    if (x !== p && y !== q) 
                    { 
                        cofactor[i][j++] = Math.pow(-1,col+row)*matrixsingle[x][y]; 

                        // Row is filled, so increase row index and 
                        // reset col index 
                        if (j === x - 1) 
                        { 
                            j = 0;
                            i++;
                        } 
                    } 
                    else{
                        cofactor[x][y]=0;
                    }
                } 
            } 
        } 

        var row = document.getElementById('srow1').value;
        var col = document.getElementById('scolumn1').value;
        var cofactor = [];
        var minor = []
        var temp = '';
        var temp = "<div style='border-radius:50px;display:table;color:black;padding:20px;margin-left: auto; margin-right: auto;'>"
        for(var i=0;i<row;i++){
            for(var j=0;j<col;j++){
                getCofactor(cofactor,i,j); // function to find and print cofactor of each element of a matrix
                var lk = cofactor[i][j];
                temp += "<div style='border:3px solid black;border-radius:30px;margin:2px'>\\[Co-Factor\\]"
                temp += '\\[C_{' + String(parseInt(i + 1)) + String(parseInt(j + 1)) + '}='
                temp += '(-1)^{' + String(parseInt(i + 1)) + '+' + String(parseInt(j + 1)) + '}'
                temp += '\\begin{vmatrix}' + matrixsingle[i][j]
                temp += '\\end{vmatrix}'
                temp += '=+\\big(' + lk + '\\big)'
                temp += '\\]</div>'
            }
        }
        
        for(var i=0;i<row;i++){
            for(var j=0;j<col;j++){
                get_Minor(i,j,minor); //function to find minor of each element of a matrix
                var lk = minor[i][j];
                temp += "<div style='border:3px solid black;border-radius:30px'>\\[Minor\\]"
                temp += '\\[M_{' + String(parseInt(i + 1)) + String(parseInt(j + 1)) + '}='
                temp += '\\begin{vmatrix}' + matrixsingle[i][j]
                temp += '\\end{vmatrix}'
                temp += '=' + lk
                temp += '\\]</div>'
                temp += "<div style='height:2px !important;margin:20px !important;'></div>"
            }
        }
            temp += "</div>"
            displaymatrix('Co-Factor\\space Matrix', cofactor, 'singlematrixresult', String(document.getElementById('scolumn1').value), String(document.getElementById('srow1').value))
            var el = document.createElement('div')
            el.id = 'minormat'
            el.style.margin = '10px';
            document.getElementById('singlematrixresult').appendChild(el)
            displaymatrix('Minor\\space Matrix', minor, 'minormat', String(document.getElementById('scolumn1').value), String(document.getElementById('srow1').value))
            document.getElementById('singlematrixexplanation').innerHTML = temp;
            renderMathInElement(document.getElementById('singlematrixexplanation'));
    },100);
    setTimeout(function () {
        loader('hide');
    },2000);
}

//single matrix

function addop(selectid, value) {
    var select = document.getElementById(selectid);
    var option = document.createElement("option");
    option.text = value;
    if (value == "Matrix Power") {
        var pow = document.createElement("input");
        document.getElementById('pow').appendChild(pow);

        var id = document.createAttribute("id");
        id.value = "powInp";
        pow.setAttributeNode(id);

        var ph = document.createAttribute("placeholder");
        ph.value = "Enter Power";
        pow.setAttributeNode(ph);
    }
    select.add(option);
}

function checkfunctions() {
    removeall('sopval')
    var row = document.getElementById("srow1").value;
    var column = document.getElementById("scolumn1").value;
    if (row == '' || column == '') {
        addop('sopval', 'Input Fields')
        document.getElementById('singlematrixexplanation').innerHTML = '';
        document.getElementById('singlematrixresult').innerHTML = '';
        removeall('generatedmatrixsingle');
    }
	else if(parseInt(row) <=0 || parseInt(column) <=0)
	{
		 document.getElementById('smatrixerror').innerHTML = "<center>Please enter positive integers for the dimensions.</center>";
		 removeall('generatedmatrixsingle');
	}
	else
	   removeall('smatrixerror');
    if (row != column && row != '' && column != '') {
        creatematrixsingle();
        addop('sopval', 'Select Operation')
        addop('sopval', 'Transpose')
        addop('sopval', 'Rank')

    }
    if (row == column) {
        creatematrixsingle();
        addop('sopval', 'Select Operation')
        addop('sopval', 'Transpose')
        addop('sopval', 'Rank')
        addop('sopval', 'Inverse')
        addop('sopval', 'Minors & Co-Factors')
        addop('sopval', 'Determinant')
	addop('sopval', 'Matrix Power')
    }
    if (parseInt(row) > 3 && parseInt(column) > 3) {
        creatematrixsingle();
        removeall('sopval')
        if (parseInt(row) <= 5 && (parseInt(row) == parseInt(column))) {
            addop('sopval', 'Select Operation')
            addop('sopval', 'Transpose')
            addop('sopval', 'Rank')
            addop('sopval', 'Determinant')
            addop('sopval', 'Inverse')

        } else if(parseInt(row) >= 5 && (parseInt(row) == parseInt(column))) {
            addop('sopval', 'Select Operation')
            addop('sopval', 'Transpose')
            addop('sopval', 'Rank')
            addop('sopval', 'Inverse')
        } else {
            addop('sopval', 'Select Operation')
            addop('sopval', 'Transpose')
            addop('sopval', 'Rank')
        }
    }
}

function laplacedeterminant() {
    loader('show');
    sendtomatrixsingle();
    document.getElementById('singlematrixexplanation').innerHTML = '';
    setTimeout(function () {
        determinant(matrixsingle);
    }, 100);

    setTimeout(function () {
        loader('hide');
    }, 2000);
}

function determinant(ma) {
    var row = ma.length;
    var column = ma.length;
    var firstrow = [];
    var jj = 1;
    var el = 0;
    for (var j = 0; j < column + column; j += 2) {
        if (el % 2 == 0) {
            var sign = '+'
        } else {
            sign = '-'
        }
        firstrow[j] = sign + ma[0][el];
        firstrow[jj] = '0' + String(el);
        jj += 2;
        el += 1;
    }
    var jj = 1;
    var firstrowel = 0;
    var result = [];
    var sol2 = '';
    var sol2sub = '';
    var vt = ''
    var dtemp = '';
    var vtofsub = '';
    var vtfinalfirstresult = '';
    var vtfinalfirstresult2 = '';
    var vtfinalfirst = '';
    var matsol = '';
    var vtfinal = '';
    var vtfinalresult = '';
    var vtfinalresult2 = '';
    var vtfinalresult3 = '';
    var vtfinalresult4 = '';
    var vtfinalofsub = '';
    var vtfinalofsubresult = '';
    var vtfinalofsubresult2 = '';
    var vtfinalofsubresult3 = '';
    var vtfinalofsubresult4 = '';
    var vtfinalofsubresult5 = '';
    var vtfinalofsubresult6 = '';
    var vtfinalfirstresult2final = ''
    var sol3 = '';
    var sol3sub = '';
    var sol4sub = '';
    var sol5sub = '';
    vtfinal += '\\['
    vtfinalresult += '\\[';
    vtfinalresult2 += '\\[';
    vtfinalresult3 += '\\[';
    vtfinalresult4 += '\\[';

    vtfinalfirst = '\\['
    vtfinalfirstresult = '\\['
    vtfinalfirstresult2 = '\\['

    vt += '\\['
    vtofsub += '\\['
    vtfinalofsub += '\\['
    vtfinalofsubresult += '\\['
    vtfinalofsubresult2 += '\\['
    vtfinalofsubresult3 += '\\['
    vtfinalofsubresult4 += '\\['
    vtfinalofsubresult5 += '\\['
    vtfinalofsubresult6 += '\\['
    dtemp += '\\[';
    if (row == 2 && column == 2) {
        var lets2 = "\\["
        lets2 += '\\color{red}\\big(\\color{black}' + ma[0][0] + '\\times' + ma[1][1] + '\\color{red}\\big)\\color{black}-\\color{red}\\big(\\color{black}' + ma[0][1] + '\\times' + ma[1][0] + '\\color{red}\\big)'
        lets2 += "\\]"

        var lets22 = "\\["
        var ss = nerdamer(ma[0][0] * ma[1][1]).evaluate().toString()
        var ss2 = nerdamer(ma[0][1] * ma[1][0]).evaluate().toString()
        lets22 += "\\color{red}\\big(\\color{black}" + ss + '\\color{red}\\big)\\color{black}-\\color{red}\\big(\\color{black}' + ss2 + "\\color{red}\\big)\\color{black}";
        lets22 += "\\]"

        var lets222 = "\\["
        ss2 = nerdamer(ss - ss2).evaluate().toString()
        lets222 += 'Determinant = ' + ss2;
        lets222 += "\\]"
        var dtemp = '\\[\\begin{vmatrix}'
        for (var ij of ma) {
            for (var ji of ij) {
                dtemp += ji + "&"
            }
            dtemp = dtemp.slice(0, -1);
            dtemp += '\\\\';
        }
        dtemp += '\\end{vmatrix} = ' + ss2 + '\\]'
        document.getElementById('singlematrixresult').innerHTML = dtemp;
        document.getElementById('singlematrixexplanation').innerHTML = lets2 + lets22 + lets222;

    } else {

        //    removes row and column
        for (var lk = 0; lk < column; lk++) {
            var submatrix = [];
            var k = 0;
            var l = 0;
            for (var i = 0; i < row; i++) {
                submatrix[l] = [];
                if (i == parseInt(firstrow[jj].slice(0, 1)))
                    continue;
                for (var j = 0; j < column; j++) {
                    if (j == parseInt(firstrow[jj].slice(1, 2)))
                        continue;
                    submatrix[l][k] = ma[i][j];
                    k = (k + 1) % (row - 1);
                    if (k == 0)
                        l++;
                }
            }
            if (submatrix.length == parseInt(document.getElementById('srow1').value) - 1) {
                vtfinalfirst += '\\color{red}' + firstrow[firstrowel] + '\\bigg(\\color{black}'
                vtfinalfirstresult += '\\color{red}' + firstrow[firstrowel] + '\\bigg(\\color{black}'
                vtfinalfirstresult2 += '\\color{red}' + firstrow[firstrowel] + '\\bigg(\\color{black}'
                vtfinalfirstresult2final += firstrow[firstrowel] + '('
                dtemp += '\\color{red}' + firstrow[firstrowel] + '\\color{black}\\begin{bmatrix}'
                for (var ij of submatrix) {
                    for (var ji of ij) {
                        dtemp += ji + "&"
                    }
                    dtemp = dtemp.slice(0, -1);
                    dtemp += '\\\\';
                }
                dtemp += '\\end{bmatrix}'
                vtfinalfirst += '\\big(' + submatrix[0][0] + '\\big)\\times\\big(' + submatrix[1][1] + '\\big)-\\big(' + submatrix[0][1] + '\\big)\\times\\big(' + submatrix[1][0] + '\\big)'
                vtfinalfirstresult += '\\big(' + eval(submatrix[0][0] * submatrix[1][1]) + '\\big)-\\big(' + eval(submatrix[0][1] * submatrix[1][0]) + '\\big)'
                vtfinalfirstresult2 += eval(eval(submatrix[0][0] * submatrix[1][1]) - eval(submatrix[0][1] * submatrix[1][0]))
                vtfinalfirstresult2final += eval(eval(submatrix[0][0] * submatrix[1][1]) - eval(submatrix[0][1] * submatrix[1][0]))
            }
            vtfinalfirst += '\\color{red}\\bigg)\\color{black}'
            vtfinalfirstresult += '\\color{red}\\bigg)\\color{black}'
            vtfinalfirstresult2 += '\\color{red}\\bigg)\\color{black}'
            vtfinalfirstresult2final += ')'
            //----------------------------------------------
            if (submatrix.length > 2) {
                var colofsub = submatrix.length;
                var rowofsub = submatrix.length;
                var firstrowofsub = [];
                var resultofsub = [];
                var jjofsub = 1;
                var elofsub = 0;
                for (var jofsub = 0; jofsub < colofsub + colofsub; jofsub += 2) {
                    if (elofsub % 2 == 0) {
                        var signofsub = '+'
                    } else {
                        signofsub = '-'
                    }
                    firstrowofsub[jofsub] = signofsub + submatrix[0][elofsub];
                    firstrowofsub[jjofsub] = '0' + String(elofsub);
                    jjofsub += 2;
                    elofsub += 1;
                }
                var firstrowelofsub = 0;
                var jjofsub = 1;
                vt += '\\color{red}' + firstrow[firstrowel] + '\\left(\\color{black}'

                vtofsub += '\\color{red}' + firstrow[firstrowel] + '\\bigg(\\color{black}'
                vtfinalofsub += '\\color{red}' + firstrow[firstrowel] + '\\left(\\color{black}'
                vtfinalofsubresult += '\\color{red}' + firstrow[firstrowel] + '\\left(\\color{black}'
                vtfinalofsubresult2 += '\\color{red}' + firstrow[firstrowel] + '\\left(\\color{black}'
                vtfinalofsubresult3 += '\\color{red}' + firstrow[firstrowel] + '\\left(\\color{black}'
                vtfinalofsubresult4 += '\\color{red}' + firstrow[firstrowel] + '\\bigg(\\color{black}'
                vtfinalofsubresult5 += '\\color{red}' + firstrow[firstrowel] + '\\bigg(\\color{black}'
                vtfinalofsubresult6 += '\\color{red}' + firstrow[firstrowel] + '\\bigg(\\color{black}'
                sol5sub += firstrow[firstrowel] + '('

                vtfinal += '\\color{red}' + firstrow[firstrowel] + '\\left(\\color{black}'
                vtfinalresult += '\\color{red}' + firstrow[firstrowel] + '\\left(\\color{black}'
                vtfinalresult2 += '\\color{red}' + firstrow[firstrowel] + '\\bigg(\\color{black}'
                vtfinalresult3 += '\\color{red}' + firstrow[firstrowel] + '\\bigg(\\color{black}'
                vtfinalresult4 += '\\color{red}' + firstrow[firstrowel] + '\\bigg(\\color{black}'
                sol3 += firstrow[firstrowel] + '('

                for (var lkofsub = 0; lkofsub < colofsub; lkofsub++) {
                    var submatrixofsub = [];
                    var kofsub = 0;
                    var lofsub = 0;
                    for (var iofsub = 0; iofsub < rowofsub; iofsub++) {
                        submatrixofsub[lofsub] = [];
                        if (iofsub == parseInt(firstrowofsub[jjofsub].slice(0, 1)))
                            continue;
                        for (var jofsub = 0; jofsub < colofsub; jofsub++) {
                            if (jofsub == parseInt(firstrowofsub[jjofsub].slice(1, 2)))
                                continue;
                            submatrixofsub[lofsub][kofsub] = submatrix[iofsub][jofsub];
                            kofsub = (kofsub + 1) % (rowofsub - 1);
                            if (kofsub == 0)
                                lofsub++;
                        }
                    }
                    vt += '\\color{blue}' + firstrowofsub[firstrowelofsub] + '\\color{black}\\begin{bmatrix}'
                    vtfinal += '\\color{blue}' + firstrowofsub[firstrowelofsub] + '\\bigg(\\color{black}'
                    vtfinalresult += '\\color{blue}' + firstrowofsub[firstrowelofsub] + '\\bigg(\\color{black}'
                    vtfinalresult2 += '\\color{blue}' + firstrowofsub[firstrowelofsub] + '\\big(\\color{black}'
                    vtfinalresult3 += '\\color{blue}' + firstrowofsub[firstrowelofsub][0] + '\\big(\\color{black}'
                    sol2 += firstrowofsub[firstrowelofsub][0] + '('
                    for (var ij of submatrixofsub) {
                        for (var ji of ij) {
                            vt += ji + "&"
                        }
                        vt = vt.slice(0, -1);
                        vt += '\\\\';
                    }
                    vt += '\\end{bmatrix}'
                    vtfinal += '\\big(' + submatrixofsub[0][0] + '\\times' + submatrixofsub[1][1] + '\\big)-\\big(' + submatrixofsub[0][1] + '\\times' + submatrixofsub[1][0] + '\\big)\\color{blue}\\bigg)'
                    vtfinalresult += '\\big(' + eval(submatrixofsub[0][0] * submatrixofsub[1][1]) + '\\big)-\\big(' + eval(submatrixofsub[0][1] * submatrixofsub[1][0]) + '\\big)\\color{blue}\\bigg)'
                    var sol = eval(eval(submatrixofsub[0][0] * submatrixofsub[1][1]) - eval(submatrixofsub[0][1] * submatrixofsub[1][0]))
                    vtfinalresult2 += sol + '\\color{blue}\\big)'
                    vtfinalresult3 += eval(firstrowofsub[firstrowelofsub].slice(1) * sol) + '\\color{blue}\\big)'
                    //			vtfinalresult3+='\\big)'
                    sol2 += eval(firstrowofsub[firstrowelofsub].slice(1) * sol) + ')'

                    jjofsub += 2;
                    firstrowelofsub += 2;
                    //inner sub------------------------------------------
                    if (submatrixofsub.length > 2) {
                        var colofsubofsub = submatrixofsub.length;
                        var rowofsubofsub = submatrixofsub.length;
                        var firstrowofsubofsub = [];
                        var resultofsubofsub = [];
                        var jjofsubofsub = 1;
                        var elofsubofsub = 0;
                        for (var jofsubofsub = 0; jofsubofsub < colofsubofsub + colofsubofsub; jofsubofsub += 2) {
                            if (elofsubofsub % 2 == 0) {
                                var signofsubofsub = '+'
                            } else {
                                signofsubofsub = '-'
                            }
                            firstrowofsubofsub[jofsubofsub] = signofsubofsub + submatrixofsub[0][elofsubofsub];
                            firstrowofsubofsub[jjofsubofsub] = '0' + String(elofsubofsub);
                            jjofsubofsub += 2;
                            elofsubofsub += 1;
                        }
                        var firstrowelofsubofsub = 0;
                        var jjofsubofsub = 1;
                        vtfinalofsub += '\\color{blue}' + firstrowofsub[firstrowelofsub - 2] + '\\bigg(\\color{black}'

                        vtfinalofsubresult += '\\color{blue}' + firstrowofsub[firstrowelofsub - 2] + '\\bigg(\\color{black}'
                        vtfinalofsubresult2 += '\\color{blue}' + firstrowofsub[firstrowelofsub - 2] + '\\bigg(\\color{black}'
                        vtfinalofsubresult3 += '\\color{blue}' + firstrowofsub[firstrowelofsub - 2] + '\\bigg(\\color{black}'
                        vtfinalofsubresult4 += '\\color{blue}' + firstrowofsub[firstrowelofsub - 2] + '\\color{black}'//last 3

                        sol3sub += firstrowofsub[firstrowelofsub - 2] + '('
                        sol4sub += firstrowofsub[firstrowelofsub - 2] + '('

                        vtofsub += '\\color{blue}' + firstrowofsub[firstrowelofsub - 2] + '\\bigg(\\color{black}'

                        for (var lkofsubofsub = 0; lkofsubofsub < colofsubofsub; lkofsubofsub++) {
                            var submatrixofsubofsub = [];
                            var kofsubofsub = 0;
                            var lofsubofsub = 0;
                            for (var iofsubofsub = 0; iofsubofsub < rowofsubofsub; iofsubofsub++) {
                                submatrixofsubofsub[lofsubofsub] = [];
                                if (iofsubofsub == parseInt(firstrowofsubofsub[jjofsubofsub].slice(0, 1)))
                                    continue;
                                for (var jofsubofsub = 0; jofsubofsub < colofsubofsub; jofsubofsub++) {
                                    if (jofsubofsub == parseInt(firstrowofsubofsub[jjofsubofsub].slice(1, 2)))
                                        continue;
                                    submatrixofsubofsub[lofsubofsub][kofsubofsub] = submatrixofsub[iofsubofsub][jofsubofsub];
                                    kofsubofsub = (kofsubofsub + 1) % (rowofsubofsub - 1);
                                    if (kofsubofsub == 0)
                                        lofsubofsub++;
                                }
                            }

                            vtofsub += '\\color{#fb650d}' + firstrowofsubofsub[firstrowelofsubofsub] + '\\color{black}\\begin{bmatrix}'
                            vtfinalofsub += '\\color{#fb650d}' + firstrowofsubofsub[firstrowelofsubofsub] + '\\bigg(\\color{black}'

                            vtfinalofsubresult += '\\color{#fb650d}' + firstrowofsubofsub[firstrowelofsubofsub] + '\\bigg(\\color{black}'
                            vtfinalofsubresult2 += '\\color{#fb650d}' + firstrowofsubofsub[firstrowelofsubofsub] + '\\color{black}'
                            vtfinalofsubresult3 += '\\color{#fb650d}' + firstrowofsubofsub[firstrowelofsubofsub][0] + '\\color{black}'
                            sol2sub += firstrowofsubofsub[firstrowelofsubofsub][0]
                            for (var ijofsub of submatrixofsubofsub) {
                                for (var jiofsub of ijofsub) {
                                    vtofsub += jiofsub + "&"
                                }
                                vtofsub = vtofsub.slice(0, -1);
                                vtofsub += '\\\\';
                            }
                            vtofsub += '\\end{bmatrix}'
                            vtfinalofsub += '\\big(' + submatrixofsubofsub[0][0] + '\\times' + submatrixofsubofsub[1][1] + '\\big)-\\big(' + submatrixofsubofsub[0][1] + '\\times' + submatrixofsubofsub[1][0] + '\\big)\\color{#fb650d}\\bigg)'

                            vtfinalofsubresult += '\\big(' + eval(submatrixofsubofsub[0][0] * submatrixofsubofsub[1][1]) + '\\big)-\\big(' + eval(submatrixofsubofsub[0][1] * submatrixofsubofsub[1][0]) + '\\big)\\color{#fb650d}\\bigg)'
                            var sol = eval(eval(submatrixofsubofsub[0][0] * submatrixofsubofsub[1][1]) - eval(submatrixofsubofsub[0][1] * submatrixofsubofsub[1][0]))
                            vtfinalofsubresult2 += '\\color{#fb650d}\\big(\\color{black}' + sol + '\\color{#fb650d}\\big)\\color{black}'
                            vtfinalofsubresult3 += '\\color{#fb650d}\\big(\\color{black}' + eval(firstrowofsubofsub[firstrowelofsubofsub].slice(1) * sol) + '\\color{#fb650d}\\big)\\color{black}'
                            sol2sub += '(' + eval(firstrowofsubofsub[firstrowelofsubofsub].slice(1) * sol) + ')'

                            jjofsubofsub += 2;
                            firstrowelofsubofsub += 2;

                        }
                        vtfinalofsubresult4 += '\\color{blue}\\big(\\color{black}' + nerdamer(sol2sub).evaluate().toString() + '\\color{blue}\\big)\\color{black}'

                        sol3sub += nerdamer(sol2sub).evaluate().toString() + ')'
                        sol4sub += nerdamer(sol2sub).evaluate().toString() + ')'
                        vtfinalofsubresult5 += '\\color{blue}+\\color{black}\\big(' + nerdamer(sol3sub).evaluate().toString() + '\\big)'
                        sol3sub = ''
                        sol2sub = '';

                        vtofsub += '\\color{blue}\\bigg)\\color{black}'
                        vtfinalofsub += '\\color{blue}\\bigg)\\color{black}'
                        vtfinalofsubresult += '\\color{blue}\\bigg)\\color{black}'
                        vtfinalofsubresult2 += '\\color{blue}\\bigg)\\color{black}'
                        vtfinalofsubresult3 += '\\color{blue}\\bigg)\\color{black}'

                    }
                    //inner sub------------------------------------------
                }

                vt += '\\color{red}\\right)'
                vtfinal += '\\color{red}\\right)'
                vtfinalresult += '\\color{red}\\right)'
                vtfinalresult2 += '\\color{red}\\bigg)'
                vtfinalresult3 += '\\color{red}\\bigg)'
                vtfinalofsubresult6 += nerdamer(sol4sub).evaluate().toString()
                sol5sub += nerdamer(sol4sub).evaluate().toString()
                sol4sub = ''
                var jk = nerdamer(sol2).evaluate().toString()
                vtfinalresult4 += jk + '\\color{red}\\bigg)'
                sol3 += jk + ')'
                sol2 = '';
                vtofsub += '\\color{red}\\bigg)\\color{black}'
                vtfinalofsub += '\\color{red}\\right)\\color{black}'
                vtfinalofsubresult += '\\color{red}\\right)\\color{black}'
                vtfinalofsubresult2 += '\\color{red}\\right)\\color{black}'
                vtfinalofsubresult3 += '\\color{red}\\right)\\color{black}'
                vtfinalofsubresult4 += '\\color{red}\\bigg)\\color{black}'
                vtfinalofsubresult5 += '\\color{red}\\bigg)\\color{black}'
                vtfinalofsubresult6 += '\\color{red}\\bigg)\\color{black}'
                sol5sub += ')'

            }
            //-----------------------------------
            if (submatrix.length <= 2) {
                result[lk] = eval(firstrow[firstrowel] * eval(eval(submatrix[0][0] * submatrix[1][1]) - eval(submatrix[0][1] * submatrix[1][0])))
            }
            jj += 2;
            firstrowel += 2;
        }
        //    removes row and column
        dtemp += '\\]'
        vt += '\\]'
        vtofsub += '\\]'
        vtfinal += '\\]'
        vtfinalofsub += '\\]'
        vtfinalofsubresult += '\\]'
        vtfinalofsubresult2 += '\\]'
        vtfinalofsubresult3 += '\\]'
        vtfinalofsubresult4 += '\\]'
        vtfinalofsubresult5 += '\\]'
        vtfinalofsubresult6 += '\\]'
        vtfinalfirst += '\\]'
        vtfinalfirstresult += '\\]'
        vtfinalfirstresult2 += '\\]'
        vtfinalresult += '\\]'
        vtfinalresult2 += '\\]'
        vtfinalresult3 += '\\]'
        vtfinalresult4 += '\\]'

        //    dtemp+='--------------------'
        document.getElementById('singlematrixexplanation').innerHTML += dtemp;
        if (submatrix.length == 2) {
            document.getElementById('singlematrixexplanation').innerHTML += vtfinalfirst;
            document.getElementById('singlematrixexplanation').innerHTML += vtfinalfirstresult;
            document.getElementById('singlematrixexplanation').innerHTML += vtfinalfirstresult2;
            var dis = '\\[\\begin{vmatrix}';
            for (var om of ma) {
                for (var omm of om) {
                    dis += omm + '&'
                }
                dis = dis.slice(0, -1)
                dis += '\\\\'
            }
            var sdd = nerdamer(vtfinalfirstresult2final).evaluate().toString();
            dis += '\\end{vmatrix}=' + sdd + '\\]'
            document.getElementById('singlematrixexplanation').innerHTML += '\\[Determinant = ' + sdd + '\\]';
            document.getElementById('singlematrixresult').innerHTML = dis;
        }

        if (submatrix.length > 2) {
            document.getElementById('singlematrixexplanation').innerHTML += vt;
            if (submatrixofsub.length == 2) {
                document.getElementById('singlematrixexplanation').innerHTML += vtfinal;
                document.getElementById('singlematrixexplanation').innerHTML += vtfinalresult;
                document.getElementById('singlematrixexplanation').innerHTML += vtfinalresult2;
                document.getElementById('singlematrixexplanation').innerHTML += vtfinalresult3;
                document.getElementById('singlematrixexplanation').innerHTML += vtfinalresult4;
                var dis = '\\[\\begin{vmatrix}';
                for (var om of ma) {
                    for (var omm of om) {
                        dis += omm + '&'
                    }
                    dis = dis.slice(0, -1)
                    dis += '\\\\'
                }
                var sdd = nerdamer(sol3).evaluate().toString();
                dis += '\\end{vmatrix}=' + sdd + '\\]'
                document.getElementById('singlematrixexplanation').innerHTML += '\\[Determinant = ' + sdd + '\\]';
                document.getElementById('singlematrixresult').innerHTML = dis;
            }
            if (submatrixofsub.length > 2) {
                document.getElementById('singlematrixexplanation').innerHTML += vtofsub;
                document.getElementById('singlematrixexplanation').innerHTML += vtfinalofsub;
                document.getElementById('singlematrixexplanation').innerHTML += vtfinalofsubresult;
                document.getElementById('singlematrixexplanation').innerHTML += vtfinalofsubresult2;
                document.getElementById('singlematrixexplanation').innerHTML += vtfinalofsubresult3;
                document.getElementById('singlematrixexplanation').innerHTML += vtfinalofsubresult4;
                document.getElementById('singlematrixexplanation').innerHTML += vtfinalofsubresult5;
                document.getElementById('singlematrixexplanation').innerHTML += vtfinalofsubresult6;
                var dis = '\\[\\begin{vmatrix}';
                for (var om of ma) {
                    for (var omm of om) {
                        dis += omm + '&'
                    }
                    dis = dis.slice(0, -1)
                    dis += '\\\\'
                }
                var sdd = nerdamer(sol5sub).evaluate().toString();
                dis += '\\end{vmatrix}=' + sdd + '\\]'
                document.getElementById('singlematrixexplanation').innerHTML += '\\[Determinant = ' + sdd + '\\]';
                document.getElementById('singlematrixresult').innerHTML = dis;
            }
        }
        submatrix = []
        submatrixofsub = []
        submatrixofsubofsub = []
    }
    renderMathInElement(document.getElementById('singlematrixexplanation'));
    renderMathInElement(document.getElementById('singlematrixresult'));
}


function inverse() {
    loader('show');
    setTimeout(function () {
        sendtomatrixsingle(); 
        var inverseexplanation = "<div style='border-radius:50px;display:table;color:black;padding:20px;margin-left: auto; margin-right: auto;'>"
        var row = document.getElementById('srow1').value;
        var column = document.getElementById('scolumn1').value;
        var inversematrix=[];
       
        //---print initial matrix
        inverseexplanation+="<div style='border:none;border-radius:30px;margin:2px'>\\[Given \\space Matrix\\]"
        inverseexplanation+='\\[\\begin{bmatrix}'
        for (var i = 0; i < row; i++){
            inversematrix[i]=[];
            for (var j = 0; j < column; j++){
                inversematrix[i][j]=matrixsingle[i][j];
                inverseexplanation+=inversematrix[i][j]+"&";
            }
            inverseexplanation = inverseexplanation.slice(0, -1);
            inverseexplanation+='\\\\';
        }
        inverseexplanation+='\\end{bmatrix}\\]'+"</div>";

        inverseexplanation+="<div style='border:none;border-radius:30px;margin:2px'>\\[Augmented \\space Matrix\\]";
        inverseexplanation+='\\[\\begin{bmatrix}'
        for (var i = 0; i < row; i++){
            for (var j = 0; j < 2*column; j++){
                if(j<row)
                    inverseexplanation+=inversematrix[i][j]+"&";
                else if(j-i==row)
                {
                    inversematrix[i][j] = 1;
                    inverseexplanation+=inversematrix[i][j]+"&";   
                }
                else
                {
                    inversematrix[i][j]= 0;
                    inverseexplanation+=inversematrix[i][j]+"&";
                }
            }
            inverseexplanation = inverseexplanation.slice(0, -1);
            inverseexplanation+='\\\\';
        }
        inverseexplanation+='\\end{bmatrix}\\]'+"</div>";
        
    
        for (var i = 0; i < row; i++) { 
            var flag=0;
            if(inversematrix[i][i]==0)
            {
                for(var p=i+1;p<row;p++)
                {
                    if(inversematrix[p][i]!=0)
                    {
                        for(var q=0;q<2*column;q++)
                        {   
                            var temp=inversematrix[i][q];
                            inversematrix[i][q]=inversematrix[p][q];
                            inversematrix[p][q]=temp;
                        }
                        flag=1;
                    }
                    if(flag==1)
                        break;
                }
                
            }
            for (var j = 0; j < row; j++) {
    
                if (j != i) {
                    var temp = inversematrix[j][i] / inversematrix[i][i];
                    for (var k = 0; k < 2 * column; k++) {
                        inversematrix[j][k] -= inversematrix[i][k] * temp;

                    }
                }
            }
            
            inverseexplanation+="<div style='border:none;border-radius:30px;margin:2px'>\\[Making \\space non-diagonal \\space elements \\space of \\space column \\space " +(i+1)+ "\\space as \\space 0 \\]"
            inverseexplanation+='\\[\\begin{bmatrix}'
            for (var l = 0; l < row; l++){
                for (var m = 0; m < 2*column; m++)
                {
                    inverseexplanation+=parseFloat(inversematrix[l][m]).toFixed(3) +"&";
                }
                inverseexplanation = inverseexplanation.slice(0, -1);
                inverseexplanation+='\\\\';
            }
            inverseexplanation+='\\end{bmatrix}\\]'+"</div>";
    
        }
    
        for (var i = 0; i < row; i++) {

            var temp = inversematrix[i][i];
            for (var j = 0; j < 2 * column; j++) {

                inversematrix[i][j] = inversematrix[i][j] / temp;
            }
        }
    
        inverseexplanation+="<div style='border:none;border-radius:30px;margin:2px'>\\[Dividing \\space each \\space row \\space by \\space corresponding diagonal \\space element \\space of \\space the \\space Matrix\\]"
        inverseexplanation+='\\[\\begin{bmatrix}'
        for (var i = 0; i < row; i++){
            for (var j = 0; j < 2*column; j++)
            {
                 inverseexplanation+=inversematrix[i][j].toFixed(3)+"&";
            }
            inverseexplanation = inverseexplanation.slice(0, -1);
            inverseexplanation+='\\\\';
        }
        inverseexplanation+='\\end{bmatrix}\\]'+"</div>";

        inverseexplanation+="<div style='border:none;border-radius:30px;margin:2px'>\\[Inverse \\space of \\space the \\space given \\space Matrix\\]"
        inverseexplanation+='\\[\\begin{bmatrix}'
        for (var i = 0; i < row; i++){
            for (var j = column; j < 2*column; j++)
            {
                 inverseexplanation+=inversematrix[i][j].toFixed(3)+"&";
            }
            inverseexplanation = inverseexplanation.slice(0, -1);
            inverseexplanation+='\\\\';
        }
        inverseexplanation+='\\end{bmatrix}\\]'+"</div>";

        document.getElementById('singlematrixexplanation').innerHTML = inverseexplanation;
        renderMathInElement(document.getElementById('singlematrixexplanation'));

        
    }, 100);
    setTimeout(function () {
        loader('hide');
    }, 2000);
}
