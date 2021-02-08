function openit(id) {
    var ids = ['#mulsolwithsteps', '#table', '#areacal', '#divide', '#simpletrignocollapse', '#factors', '#integralcollapse', '#differentiatecollapse', '#partialdiffcollapse', '#laplacecollapse', '#matrixcollapse', '#multiplematrixcollapse', '#singlematrixcollapse', '#about']
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

});
