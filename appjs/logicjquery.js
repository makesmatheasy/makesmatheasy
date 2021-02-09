function openit(id) {
    var ids = ['#mulsolwithsteps', '#table', '#areacal', '#divide', '#simpletrignocollapse', '#factors', '#integralcollapse', '#differentiatecollapse', '#partialdiffcollapse', '#laplacecollapse', '#matrixcollapse', '#multiplematrixcollapse', '#singlematrixcollapse', '#about',"#rootsquadratic"]
    for (i = 0; i < ids.length; i++) {
        if (ids[i] != id) {
            $(ids[i]).slideUp();
        } else {
            $(String(id)).slideToggle();
        }
    }
}

function cleardiv(arrayofclearids) {
    for (parameterarray of arrayofclearids) {
        document.getElementById(parameterarray).innerHTML = "";
    }
}

function clearall() {
    cleardiv(["resultofdivsteps", "resultdivi", "divisibilitycheckresult", "divisibilitycheckresultexplanation"]);
    cleardiv(["dividefactor", "dividefactorresult", "factorresult", "resultfac", "resultlcm", "resultlcms", "hcfprimefactor", "resulthcf"]);
    cleardiv(["resulttable"]);
    cleardiv(["generatedmatrixsingle", "singlematrixresult", "singlematrixexplanation", "generatedmatrix1", "signofmatrix", "generatedmatrix2", "matrixresult", "explanationmatrixresult"]);
    cleardiv(["resultdiff", "diffplot"]);
    cleardiv(["resultmulsol"]);
    cleardiv(["soltri"]);
}

$(document).ready(function () {
    $("#divideoption").click(function () {
        openit("#divide");
        clearall();
        closenav();
    });

    $("#aboutbutton").click(function () {
        openit("#about");
        closenav();
    });
    $("#factorsoption").click(function () {
        openit("#factors");
        clearall();
        closenav();
    });

    $("#tableoption").click(function () {
        openit("#table");
        clearall();
        closenav();

    });
//            matrix
    $("#matrixcollapsebtn").click(function () {
        openit("#matrixcollapse");
        clearall();
        closenav();
    });

    $("#differentiate").click(function () {
        openit("#differentiatecollapse");
        clearall();
        closenav();
    })

    $("#integrate").click(function () {
        openit("#integralcollapse");
        cleardiv(["resultintegration", "integralplot"])
        closenav();
    })
    $("#partialdiff").click(function () {
        openit("#partialdiffcollapse");
        cleardiv(["resultpardiff"]);
        closenav();
    })

    $("#laplace").click(function () {
        openit("#laplacecollapse");
        cleardiv(["resultlaplace", "laplaceplot", "resultinverselaplace", "inverselaplaceplot"])
        closenav();
    })
    $("#areacalbtn").click(function () {
        openit("#areacal");
        clearall();
        closenav();
    })

    $("#mulsolwithstepsbtn").click(function () {
        openit('#mulsolwithsteps');
        clearall();
        closenav();
    })

    $("#simpletrignocollapsebutton").click(function () {
        openit("#simpletrignocollapse");
        clearall();
        closenav();
    })

    $("#diffsolvebutton").click(function () {
        diffsolve();
    })
    $("#solvepardiff").click(function () {
        partialdiffsolve();
    })
    $("#rootsquadraticbtn").click(function () {
        openit("#rootsquadratic");
        clearall();
        closenav();
    });

});

function loader(action) {
    var body = document.getElementsByTagName("body");
    var head = document.getElementsByTagName("head");
    switch (action) {
        case 'show':
            var style = document.createElement('style');
            var div = document.createElement("div");
            var css = ".sk-chase {\n" +
                "            width: 40px;\n" +
                "            height: 40px;\n" +
                "            position: relative;\n" +
                "            animation: sk-chase 2.5s infinite linear both;\n" +
                "        }\n" +
                "\n" +
                "        .sk-chase-dot {\n" +
                "            width: 100%;\n" +
                "            height: 100%;\n" +
                "            position: absolute;\n" +
                "            left: 0;\n" +
                "            top: 0;\n" +
                "            animation: sk-chase-dot 2.0s infinite ease-in-out both;\n" +
                "        }\n" +
                "\n" +
                "        .sk-chase-dot:before {\n" +
                "            content: '';\n" +
                "            display: block;\n" +
                "            width: 25%;\n" +
                "            height: 25%;\n" +
                "            background-color: #fff;\n" +
                "            border-radius: 100%;\n" +
                "            animation: sk-chase-dot-before 2.0s infinite ease-in-out both;\n" +
                "        }\n" +
                "\n" +
                "        .sk-chase-dot:nth-child(1) { animation-delay: -1.1s; }\n" +
                "        .sk-chase-dot:nth-child(2) { animation-delay: -1.0s; }\n" +
                "        .sk-chase-dot:nth-child(3) { animation-delay: -0.9s; }\n" +
                "        .sk-chase-dot:nth-child(4) { animation-delay: -0.8s; }\n" +
                "        .sk-chase-dot:nth-child(5) { animation-delay: -0.7s; }\n" +
                "        .sk-chase-dot:nth-child(6) { animation-delay: -0.6s; }\n" +
                "        .sk-chase-dot:nth-child(1):before { animation-delay: -1.1s; }\n" +
                "        .sk-chase-dot:nth-child(2):before { animation-delay: -1.0s; }\n" +
                "        .sk-chase-dot:nth-child(3):before { animation-delay: -0.9s; }\n" +
                "        .sk-chase-dot:nth-child(4):before { animation-delay: -0.8s; }\n" +
                "        .sk-chase-dot:nth-child(5):before { animation-delay: -0.7s; }\n" +
                "        .sk-chase-dot:nth-child(6):before { animation-delay: -0.6s; }\n" +
                "\n" +
                "        @keyframes sk-chase {\n" +
                "            100% { transform: rotate(360deg); }\n" +
                "        }\n" +
                "\n" +
                "        @keyframes sk-chase-dot {\n" +
                "            80%, 100% { transform: rotate(360deg); }\n" +
                "        }\n" +
                "\n" +
                   "        @keyframes sk-chase-dot-before {\n" +
                "            50% {\n" +
                "                transform: scale(0.4);\n" +
                "            } 100%, 0% {\n" +
                "                  transform: scale(1.0);\n" +
                "              }\n" +
                "        }"
            style.type = 'text/css';
            if (style.styleSheet) {
                // This is required for IE8 and below.
                style.styleSheet.cssText = css;
            } else {
                style.appendChild(document.createTextNode(css));
            }
            div.id = "loader";
            div.style.cssText = "position: fixed;\n" +
                "            z-index:5000;\n" +
                "            width: 100%;\n" +
                "            height: 100%;\n" +
                "            background: rgba(4,4,4,0.8);";
            div.innerHTML = '<div style="margin:auto;\n' +
                '            position: absolute;\n' +
                '            top:46%;\n' +
                '            left:46%;">\n' +
                '<div class="sk-chase">\n' +
                '  <div class="sk-chase-dot"></div>\n' +
                '  <div class="sk-chase-dot"></div>\n' +
                '  <div class="sk-chase-dot"></div>\n' +
                '  <div class="sk-chase-dot"></div>\n' +
                '  <div class="sk-chase-dot"></div>\n' +
                '  <div class="sk-chase-dot"></div>\n' +
                '</div>' +
                '    </div>'
            head[0].appendChild(style);
            body[0].prepend(div);
            break;
        case 'hide':
            body[0].removeChild(document.getElementById('loader'));
            head[0].removeChild(head[0].lastChild);
            break;
    }

}