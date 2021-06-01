var vals = [
    "#dblFact",
    "#sumDiv",
    "#smPrime",
    "#nextPrime",
    "#hamming-dist",
    "#anyBase",
    "#complex1collapse",
    "#complex2collapse",
    "#complexidentities",
    "#complexproperties",
    "#theo",
    "#impfixs",
    "#etf",
    "#equationssolver",
    "#mulsolwithsteps",
    "#secarea",
    "#table",
    "#ssts",
    "#arcs",
    "#sigma",
    "#chng-vol-cube",
    "#sosqs",
    "#sosqsn",
    "#chng-vol-cuboid",
    "#squaresRanges",
    "#favourite",
    "#cubesRanges",
    "#numcubesRanges",
    "#segcals",
    "#hydroz",
    "#shapescal",
    "#tdshapescal",
    "#divide",
    "#simpletrignocollapse",
    "#trigonovaluestable",
    "#trigonoiden",
    "#trigonofun",
    "#factors",
    "#stats",
    "#math",
    "#chitest",
    "#integralcollapse",
    "#integration-idencollapse",
    "#defintegration-idencollapse",
    "#differentiatecollapse",
    "#partialdiffcollapse",
    "#3d-solid",
    "#parabolacalc",
    "#chng-vol-sphere",
    "#laplacecollapse",
    "#limitscollapse",
    "#parab",
    "#binomialcoeff",
    "#matrixcollapse",
    "#pows",
    "#beta",

    "#imprtopr",

    "#matrixprops",
    "#cramer",
    "#fractions",
    "#multiplematrixcollapse",
    "#singlematrixcollapse",
    "#algebraic-idencollapse",
    "#about",
    "#propcircle",
    "#propquad",
    "#pythtriple",
    "#rootsquadratic",
    "#plotgraph",
    "#3dgeocalc",
    "#plotbargraph",
    "#roundoff",
    "#euclid",
    "#aod",
    "#vecalg",
    "#thdif",
    "#corgeo",
    "#ttest",
    "#ztest",
    "#betagamma",
    "#parallel",
    "#unitconcal",
    "#giff",
    "#dip",
    "#wandt",
    "#spiconcal",
    "#home",
    "#curconcal",
    "#factorial",
    "#setop",
    "#trans",
    "#hp",
    "#ppmfs",
    "#bool",
    "#suppangs",
    "#compang",
    "#cotermang",
    "#eirs",
    "#zscores",
    "#errpers",
    "#log_values",
    "#oops",
    "#astroid",
    "#squarecube",
    "#deca_prism",
    "#log-collapse",
    "#bt-collapse",
    "#bt-collapse1",
    "#manhats",
    "#cart",
    "sph",
    "#bilinear",
    "#pandc",
    "#per_chng_vol",
    "#enna_prism",
    "#pairfacts",
    "#interest",
    "#bitwise-calc",
    "#adding-all",
    "#subtract-all",
    "#multiplying-all",
    "#onetwocom-calc",
    "#2d-shape",
    "#3d-shape",
    "#hamming-calc",
    "#3dgeo",
    "#bpmfs",
    "#straightline",
    "#binary-hexadecimal",
    "#mis",
    "#cay",
    "#utcs",
    "#inversetrigonoiden",
    "#hyptrigonoiden",
    "#invhyptrigonoiden",
    "#circlecollapse",
    "#parabolacollapse",
    "#ellipsecollapse",
    "#hyperbolacollapse",
    "#datecal",
    "#prime",
    "#sum_n_AP",
    "#sum_n_GP",
    "#sum_n_HP",
    "#algebraic_formulascollapse",
    "#expansion",
    "#solutiontri",
    "#plotangle",
    "#profitloss",
    "#differentiate-rulecollapse",
    "#emical",
    "#gstcal",
    "#deviation",
    "#degcal",
    "#trigsolcollapse",
    "#grey-bin",
    "#consim",
    "#convdiv",
    "#gamma",
    "#curve",
    "#coor",
    "#ci",
    "#mean",
    "#Meanit",
    "#bcd",
    "#vector",
    "#vec",
    "#diffeqn",
    "#pdiffeqn",
    "#maxmin",
    "#locroots",
    "#tangent",
    "#srf",
    "#probabilitycollapse",
    "#joint-probabilitycollapse",
    "#dec2421",
    "#ex3",
    "#lappro",
    "#rankcal",
    "#bayes-probabilitycollapse",
    "#hypergeos",
    "#condprobability",
    "#prism",
    "#pentprism",
    "#pyramid",
    "#tripyramid",
    "#octpyramid",
    "#hexpyramid",
    "#octahedron",
    "#repp",
    "#partial_sphere",
    "#hypergeomeans",
    "#mtm",
    "#igc",
    "#res1",
    "#clr",
    '#dodecahedron',
    "#vpds",
    "#icosahedron",
    "#anglecon",
    "#frustum",
    "#annulus",
    "#cosine",
    "#obliquecy",
    "#setcal",
    "#mi",
    "#ip",
    "#oocs",
    "#partialcy",
    "#prices",
    "#centcal",
    "#cevtha",
    "#sum_n",
    "#percal",
    "#parabolic_arc",
    "#lyear",
    "#analytical",
    "#isoright",
    "#ellipsoid",
    "#expo",
    "#setformula",
    "#wedge",
    "#fourier_series",
    "#wmcs",
    "#cvs",
    "#rmss",
    "#relationtypes",
    "#skews",
    "#clocks",
    "#slvxs",
    "#rankcals",
    "#hyperbolicratios",
    "#covs",
    "#lrcs",
    "#perats",
    "#mecs",
    "#chng-vol-cube",
    "#squarerootcalc",
];

function clearmaindiv(arrayofclearids) {
    for (var parameterarray of arrayofclearids) {
        $(parameterarray).slideUp()
    }
}
function clearmain() {
    clearmaindiv(vals)
}

function autocomplete(inp, arr) {
    /*the autocomplete function takes two arguments,
    the text field element and an CIRCLE possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) {
            return false;
        }
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
            /*check if the item starts with the same letters as the text field value:*/
            if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                /*create a DIV element for each matching element:*/
                b = document.createElement("DIV");
                /*make the matching letters bold:*/
                b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
                b.innerHTML += arr[i].substr(val.length);
                /*insert a input field that will hold the current array item's value:*/
                b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                /*execute a function when someone clicks on the item value (DIV element):*/
                b.addEventListener("click", function(e) {
                    /*insert the value for the autocomplete text field:*/
                    inp.value = this.getElementsByTagName("input")[0].value;

                    /*close the list of autocompleted values,
                    (or any other open lists of autocompleted values:*/
                    closeAllLists();
                    if (inp.value.toUpperCase() == "INTEGRATION") {
                        clearmain()
                        $("#integralcollapse").slideDown();
                    } else if (inp.value.toUpperCase() == "DIFFERENTIATION") {
                        clearmain()
                        $("#differentiatecollapse").slideDown();
                    } else if (inp.value.toUpperCase() == "DIVIDE") {
                        clearmain()
                        $("#divide").slideDown();
                    } else if (inp.value.toUpperCase() == "ABOUT") {
                        clearmain()
                        $("#about").slideDown();
                    } else if (inp.value.toUpperCase() == "HOME") {
                        clearmain()
                        $("#home").slideDown();
                    } else if (inp.value.toUpperCase() == "MATRIX") {
                        clearmain()
                        $("#matrixcollapse").slideDown();
                    } else if (inp.value.toUpperCase() == "MULTIPLICATION TABLE") {
                        clearmain()
                        $("#table").slideDown();
                    } else if (inp.value.toUpperCase() == "PARTIAL DIFFERENTIATION") {
                        clearmain()
                        $("#partialdiffcollapse").slideDown();
                    } else if (inp.value.toUpperCase() == "LAPLACE") {
                        clearmain()
                        $("#laplacecollapse").slideDown();
                        $("#laplacecollapseit").slideDown();
                        $("#inverselaplacecollapse").slideUp();
                    } else if (inp.value.toUpperCase() == "SHAPES") {
                        clearmain()
                        $("#shapescal").slideDown();
                    } else if (inp.value.toUpperCase() == "SIMPLE TRIGONOMETRY") {
                        clearmain()
                        $("#simpletrignocollapse").slideDown();
                    } else if (inp.value.toUpperCase() == "INVERSE LAPLACE") {
                        clearmain()
                        $("#laplacecollapse").slideDown();
                        $("#inverselaplacecollapse").slideDown();
                        $("#laplacecollapseit").slideDown();

                    }else if (inp.value.toUpperCase() == "GRAPH") {
                        clearmain()
                        $("#plotgraph").slideDown();                        
                    }
                    else if(inp.value.toUpperCase() == "NEGATIVE BINOMIAL DISTRIBUTION CALCULATOR"){
                        clearmain()
                        document.getElementById('negbino').click(); 
                    }
                    else if (inp.value.toUpperCase() == "NEGATIVE BINOMIAL DISTRIBUTION CALCULATOR") {
                        clearmain()
                        $("#negbino").slideDown(); 
                    } else if (inp.value.toUpperCase() == "OPERATIONS ON FRACTIONS") {
                        clearmain()
                        $("#fractions").slideDown();
                    } else if (inp.value.toUpperCase() == "MULTIPLY WITH STEPS") {
                        clearmain()
                        $("#mulsolwithsteps").slideDown();
                    } else if (inp.value.toUpperCase() == "PLAY WITH EQUATIONS") {
                        clearmain()
                        $("#equationssolver").slideDown();
                    } else if (inp.value.toUpperCase() == "ROOTS OF EQUATION") {
                        clearmain()
                        $("#rootsquadratic").slideDown();
                    } else if (inp.value.toUpperCase() == "ROUNDOFF") {
                        clearmain()
                        $("#roundoff").slideDown();
                    } else if (inp.value.toUpperCase() == "LCM") {
                        clearmain()
                        $("#factors").slideToggle();
                    } else if (inp.value.toUpperCase() == "HCF") {
                        clearmain()
                        $("#factors").slideDown();
                    } else if (inp.value.toUpperCase() == "TRIGONOMETRIC VALUES") {
                        clearmain()
                        $("#trigonovaluestable").slideToggle();
                    } else if (inp.value.toUpperCase() == "TRIGONOMETRIC IDENTITIES") {
                        clearmain()
                        $("#trigonoiden").slideDown();
                    } else if (inp.value.toUpperCase() == "UNIT CONVERTER") {
                        clearmain()
                        $("#unitconcal").slideDown();                       
                    }else if (inp.value.toUpperCase() == "SPI CONVERTER") {
                        clearmain()
                        $("#spiconcal").slideDown(); 
                    }
                    else if(inp.value.toUpperCase() == "MATHEMATICAL REASONING"){
                        clearmain()
                        $("#math").slideDown();
                    }
                    else if(inp.value.toUpperCase() == "MATHEMATICAL REASONING"){
                        clearmain()
                        document.getElementById('math').click();
                    } 
                    else if (inp.value.toUpperCase() == "INVERSE AND PERIODICITY OF FUNCTIONS") {
                        clearmain()
                        $("#ip").slideDown();    
                    }
                    else if(inp.value.toUpperCase() == "INVERSE AND PERIODICITY OF FUNCTIONS"){
                        clearmain()
                        document.getElementById('ip').click();
                    }
                    else if (inp.value.toUpperCase() == "TRIGONOMETRIC FUNCTIONS") {
                        clearmain()
                        $("#trigonofun").slideDown();    
                    }
                    else if(inp.value.toUpperCase() == "TRIGONOMETRIC FUNCTIONS"){
                        clearmain()
                        document.getElementById('trigonofun').click();
                    }
                    else if (inp.value.toUpperCase() == "TRANSFORMATION OF FUNCTIONS") {
                        clearmain()
                        $("#trans").slideDown();    
                    }
                    else if(inp.value.toUpperCase() == "TRANSFORMATION OF FUNCTIONS"){
                        clearmain()
                        document.getElementById('trans').click();
                    } 
                    else if (inp.value.toUpperCase() == "BETA GAMMA FUNCTIONS") {
                        clearmain()
                        $("#betagamma").slideDown();    
                    }
                    else if(inp.value.toUpperCase() == "BETA GAMMA FUNCTIONS"){
                        clearmain()
                        document.getElementById('betagamma').click();
                    } 
                    else if (inp.value.toUpperCase() == "P/B/H TRIGO") {
                        clearmain()
                        $("#simpletrignocollapse").slideDown();    
                    }
                    else if(inp.value.toUpperCase() == "P/B/H TRIGO"){
                        clearmain()
                        document.getElementById('simpletrignocollapse').click();
                    }
                    else if (inp.value.toUpperCase() == "TRIGONOMETRIC IDENTITES") {
                        clearmain()
                        $("#trigonoiden").slideDown();    
                    }
                    else if(inp.value.toUpperCase() == "TRIGONOMETRIC IDENTITES"){
                        clearmain()
                        document.getElementById('trigonoiden').click();
                    }
                    else if (inp.value.toUpperCase() == "INVERSE TRIGONOMETRIC IDENTITIES") {
                        clearmain()
                        $("#inversetrigonoiden").slideDown();    
                    }
                    else if(inp.value.toUpperCase() == "INVERSE TRIGONOMETRIC IDENTITIES"){
                        clearmain()
                        document.getElementById('inversetrigonoiden').click();
                    }
                    else if (inp.value.toUpperCase() == "EXPANSION OF FUNCTIONS") {
                        clearmain()
                        $("#expansion").slideDown();    
                    }
                    else if(inp.value.toUpperCase() == "EXPANSION OF FUNCTIONS"){
                        clearmain()
                        document.getElementById('expansion').click();
                    }
                    else if (inp.value.toUpperCase() == "CIRCLE") {
                        clearmain()
                        $("#circlecollapse").slideDown();    
                    }
                    else if(inp.value.toUpperCase() == "CIRCLE"){
                        clearmain()
                        document.getElementById('circlecollapse').click();
                    }
                    else if (inp.value.toUpperCase() == "IMPROPER TO PROPER INTEGRAL") {
                        $("#imprtopr").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == "IMPROPER TO PROPER INTEGRAL"){
                        document.getElementById('imprtopr').click();
                    }
                    else if (inp.value.toUpperCase() == "ELLIPSE") {
                        clearmain()
                        $("#ellipsecollapse").slideDown();    
                    }
                    else if(inp.value.toUpperCase() == "ELLIPSE"){
                        clearmain()
                        document.getElementById('ellipsecollapse').click();
                    } 
                    else if (inp.value.toUpperCase() == "BETA FUNCTION CALCULATOR") {
                        $("#beta").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == "BETA FUNCTION CALCULATOR"){
                        document.getElementById('beta').click();
                    } 
                    else if (inp.value.toUpperCase() == "HYPERBOLA") {
                        clearmain()
                        $("#hyperbolacollapse").slideDown();    
                    }
                    else if(inp.value.toUpperCase() == "HYPERBOLA"){
                        clearmain()
                        document.getElementById('hyperbolacollapse').click();
                    } 
                    else if (inp.value.toUpperCase() == "ROOTS OF UNITY CALCULATOR") {
                        clearmain()
                        $("#rootsunity").slideDown();    
                    }
                    else if(inp.value.toUpperCase() == "ROOTS OF UNITY CALCULATOR"){
                        clearmain()
                        document.getElementById('rootsunity').click();
                    } 
                    else if (inp.value.toUpperCase() == "ALGEBRAIC EQUATIONS FORMULAS") {
                        clearmain()
                        $("#algebraic_formulascollapse").slideDown();    
                    }
                    else if(inp.value.toUpperCase() == "ALGEBRAIC EQUATIONS FORMULAS"){
                        clearmain()
                        document.getElementById('algebraic_formulascollapse').click();
                    }
                    else if (inp.value.toUpperCase() == "LOCATION OF ROOTS") {
                        clearmain()
                        $("#locroots").slideDown();    
                    }
                    else if(inp.value.toUpperCase() == "LOCATION OF ROOTS"){
                        clearmain()
                        document.getElementById('locroots').click();
                    }
                    else if (inp.value.toUpperCase() == "PLOT GRAPH") {
                        clearmain()
                        $("#plotgraph").slideDown();    
                    }
                    else if(inp.value.toUpperCase() == "PLOT GRAPH"){
                        clearmain()
                        document.getElementById('plotgraph').click();
                    }
                    else if (inp.value.toUpperCase() == "PLOT ANGLE") {
                        clearmain()
                        $("#plotangle").slideDown();    
                    }
                    else if(inp.value.toUpperCase() == "PLOT ANGLE"){
                        clearmain()
                        document.getElementById('plotangle').click();
                    }
                    else if (inp.value.toUpperCase() == "STRAIGHT LINE") {
                        clearmain()
                        $("#straightline").slideDown();    
                    }
                    else if(inp.value.toUpperCase() == "STRAIGHT LINE"){
                        clearmain()
                        document.getElementById('straightline').click();
                    }
                    else if (inp.value.toUpperCase() == "PROPERTIES OF PARALLEL LINES") {
                        clearmain()
                        $("#parallel").slideDown();    
                    }
                    else if(inp.value.toUpperCase() == "PROPERTIES OF PARALLEL LINES"){
                        clearmain()
                        document.getElementById('parallel').click();
                    }
                    else if (inp.value.toUpperCase() == "COORDINATE SYSTEMS") {
                        clearmain()
                        $("#coor").slideDown();    
                    }
                    else if(inp.value.toUpperCase() == "COORDINATE SYSTEMS"){
                        clearmain()
                        document.getElementById('coor').click();
                    }
                    else if (inp.value.toUpperCase() == "CURVE TRACING") {
                        clearmain()
                        $("#curve").slideDown();    
                    }
                    else if(inp.value.toUpperCase() == "CURVE TRACING"){
                        clearmain()
                        document.getElementById('curve').click();
                    }
                    else if (inp.value.toUpperCase() == "SHAPES CALCULATOR") {
                        clearmain()
                        $("#shapescal").slideDown();    
                    }
                    else if(inp.value.toUpperCase() == "SHAPES CALCULATOR"){
                        clearmain()
                        document.getElementById('shapescal').click();
                    }
                    else if (inp.value.toUpperCase() == "3-D SHAPES CALCULATOR") {
                        clearmain()
                        $("#tdshapescal").slideDown();    
                    }
                    else if(inp.value.toUpperCase() == "3-D SHAPES CALCULATOR"){
                        clearmain()
                        document.getElementById('tdshapescal').click();
                    }
                    else if (inp.value.toUpperCase() == "3-D GEOMETRY") {
                        clearmain()
                        $("#3dgeo").slideDown();    
                    }
                    else if(inp.value.toUpperCase() == "3-D GEOMETRY"){
                        clearmain()
                        document.getElementById('3dgeo').click();
                    }
                    else if (inp.value.toUpperCase() == "SIGMA NOTATION") {

                        $("#sigma").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == "SIGMA NOTATION"){
                        document.getElementById('sigma').click();
                    }
                    else if (inp.value.toUpperCase() == "IDENTITIES") {
                        clearmain()
                        $("#complexidentities").slideDown();    
                    }
                    else if(inp.value.toUpperCase() == "IDENTITIES"){
                        clearmain()
                        document.getElementById('complexidentities').click();
                    }
                    else if (inp.value.toUpperCase() == "PROPERTIES") {
                        clearmain()
                        $("#complexproperties").slideDown();    
                    }
                    else if(inp.value.toUpperCase() == "PROPERTIES"){
                        clearmain()
                        document.getElementById('complexproperties').click();
                    }
                    else if (inp.value.toUpperCase() == "OPS1 ON COMPLEX NUMBERS") {
                        clearmain()
                        $("#complex1collapse").slideDown();    
                    }
                    else if(inp.value.toUpperCase() == "OPS1 ON COMPLEX NUMBERS"){
                        clearmain()
                        document.getElementById('complex1collapse').click();
                    }
                    else if (inp.value.toUpperCase() == "OPS2 ON COMPLEX NUMBERS") {
                        clearmain()
                        $("#complex2collapse").slideDown();    
                    }
                    else if(inp.value.toUpperCase() == "OPS2 ON COMPLEX NUMBERS"){
                        clearmain()
                        document.getElementById('complex2collapse').click();
                    }

                    else if(inp.value.toUpperCase() == "EMPIRICAL PROBABILITY"){
                        clearmain()
                        document.getElementById('probabilitycollapse').click();
                    }
                    else if (inp.value.toUpperCase() == "EMPIRICAL PROBABILITY") {
                        clearmain()
                        $("#probabilitycollapse").slideDown();    
                    }
                    else if(inp.value.toUpperCase() == "PROBABILITY PROPERTIES"){
                        clearmain()
                        document.getElementById('bt-collapse1').click();
                    }
                    else if (inp.value.toUpperCase() == "PROBABILITY PROPERTIES") {
                        clearmain()
                        $("#bt-collapse1").slideDown();    
                    }
                    else if (inp.value.toUpperCase() == "LAPLACE TRANSFORMS AND PROPERTIES") {
                        clearmain()
                        $("#lappro").slideDown();    
                    }
                    else if(inp.value.toUpperCase() == "LAPLACE TRANSFORMS AND PROPERTIES"){
                        clearmain()
                        document.getElementById('lappro').click();
                    } 
                    else if (inp.value.toUpperCase() == "MAXIMA AND MINIMA OF FUNCTIONS") {
                        clearmain()
                        $("#maxmin").slideDown();    
                    }
                    else if(inp.value.toUpperCase() == "MAXIMA AND MINIMA OF FUNCTIONS"){
                        clearmain()
                        document.getElementById('maxmin').click();
                    } 
                    else if (inp.value.toUpperCase() == "APPLICATION OF DERIVATIVES") {
                        clearmain()
                        $("#maxmin").slideDown();    
                    }
                    else if(inp.value.toUpperCase() == "APPLICATION OF DERIVATIVES"){
                        clearmain()
                        document.getElementById('maxmin').click();
                    }
                    else if (inp.value.toUpperCase() == "TANGENT AND NORMAL") {
                        clearmain()
                        $("#tangent").slideDown();    
                    }
                    else if(inp.value.toUpperCase() == "TANGENT AND NORMAL"){
                        clearmain()
                        document.getElementById('tangent').click();
                    }
                    else if (inp.value.toUpperCase() == "BOOLEAN ALGEBRA") {
                        clearmain()
                        $("#bool").slideDown();    
                    }
                    else if(inp.value.toUpperCase() == "BOOLEAN ALGEBRA"){
                        clearmain()
                        document.getElementById('bool').click();
                    }
                    else if (inp.value.toUpperCase() == "BINARY/HEXADECIMAL CONVERTOR") {
                        clearmain()
                        $("#adding-all").slideDown();    
                    }
                    else if(inp.value.toUpperCase() == "BINARY/HEXADECIMAL CONVERTOR"){
                        clearmain()
                        document.getElementById('adding-all').click();
                    }
                    else if (inp.value.toUpperCase() == "BITWISE CALCULATOR") {
                        clearmain()
                        $("#bitwise-calc").slideDown();    
                    }
                    else if(inp.value.toUpperCase() == "BITWISE CALCULATOR"){
                        clearmain()
                        document.getElementById('bitwise-calc').click();
                    }
                    else if (inp.value.toUpperCase() == "GREY CODE CALCULATOR") {
                        clearmain()
                        $("#grey-bin").slideDown();    
                    }
                    else if(inp.value.toUpperCase() == "GREY CODE CALCULATOR"){
                        clearmain()
                        document.getElementById('grey-bin').click();
                    }
                    else if (inp.value.toUpperCase() == "EXCESS-3 CODE CONVERTOR") {
                        clearmain()
                        $("#ex3").slideDown();    
                    }
                    else if(inp.value.toUpperCase() == "EXCESS-3 CODE CONVERTOR"){
                        clearmain()
                        document.getElementById('ex3').click();
                    }      
                    else if (inp.value.toUpperCase() == "LINEAR REGRESSION CALCULATOR") {
                        $("#lrcs").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == "LINEAR REGRESSION CALCULATOR"){
                        document.getElementById('lrcs').click();
                    }      
                    else if (inp.value.toUpperCase() == "COVARIANCE CALCULATOR") {
                        $("#covs").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == "COVARIANCE CALCULATOR"){
                        document.getElementById('covs').click();
                    }
                    else if(inp.value.toUpperCase() == "RELATIVE RISK CALCULATOR"){
                        clearmain()
                        document.getElementById('relrisk').click(); 
                    }
                    else if (inp.value.toUpperCase() == "RELATIVE RISK CALCULATO") {
                        clearmain()
                        $("#relrisk").slideDown(); 
                    }  
                    else if (inp.value.toUpperCase() == "SKEWNESS CALCULATOR") {
                        $("#skews").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == "SKEWNESS CALCULATOR"){
                        document.getElementById('skews').click();
                    }     
                    else if (inp.value.toUpperCase() == "IMPROPER TO MIXED FRACTION") {
                        $("#impfixs").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == "IMPROPER TO MIXED FRACTION"){
                        document.getElementById('impfixs').click();
                    }
                    else if (inp.value.toUpperCase() == "SUPPLEMENTARY ANGLE CALCULATOR") {
                        $("#suppangs").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == "SUPPLEMENTARY ANGLE CALCULATOR"){
                        document.getElementById('suppangs').click();
                    }
                    else if (inp.value.toUpperCase() == "COMPLEMENTARY ANGLE CALCULATOR") {
                        $("#compang").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == "COMPLEMENTARY ANGLE CALCULATOR"){
                        document.getElementById('compang').click();
                    }
                    else if (inp.value.toUpperCase() == "COTERMINAL ANGLE CALCULATOR") {
                        $("#cotermang").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == "COTERMINAL ANGLE CALCULATOR"){
                        document.getElementById('cotermang').click();
                    }
                    else if (inp.value.toUpperCase() == "SSS TRIANGLES ANGLE CALCULATOR") {
                        $("#ssts").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == "SSS TRIANGLES ANGLE CALCULATOR"){
                        document.getElementById('ssts').click();
                    }
                    else if (inp.value.toUpperCase() == "CEVAS AND THALES THEOREM") {
                        $("#cevtha").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == "CEVAS AND THALES THEOREM"){
                        document.getElementById('cevtha').click();
                    }
                    else if (inp.value.toUpperCase() == "PROPERTIES OF CIRCLES") {
                        $("#propcircle").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == "PROPERTIES OF CIRCLES"){
                        document.getElementById('propcircle').click();
                    }
                    else if (inp.value.toUpperCase() == "TRIANGLE CALCULATOR") {
                        $("#centcal").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == "TRIANGLE CALCULATOR"){
                        document.getElementById('centcal').click();
                    }
                    else if (inp.value.toUpperCase() == "2-D SHAPES INSCRIBED") {
                        $("#2d-shape-ins").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == "2-D SHAPES INSCRIBED"){
                        document.getElementById('2d-shape-ins').click();
                    }
                    else if (inp.value.toUpperCase() == "3-D SHAPES INSCRIBED") {
                        $("#shapeinscribed").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == "3-D SHAPES INSCRIBED"){
                        document.getElementById('shapeinscribed').click();
                    }
                    else if (inp.value.toUpperCase() == "PROPERTIES OF QUADRILATERALS") {
                        $("#propquad").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == "PROPERTIES OF QUADRILATERALS"){
                        document.getElementById('propquad').click();
                    }
                    else if (inp.value.toUpperCase() == "ARC LENGTH CALCULATOR") {
                        $("#arcs").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == "ARC LENGTH CALCULATOR"){
                        document.getElementById('arcs').click();
                    }
                    else if (inp.value.toUpperCase() == "PARABOLOID") {
                        $("#parab").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == "PARABOLOID"){
                        document.getElementById('parab').click();
                    }
                    else if (inp.value.toUpperCase() == "VOLUME, CSA, TSA") {
                        $("#3d-solid").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == "VOLUME, CSA, TSA"){
                        document.getElementById('3d-solid').click();
                    }
                    else if (inp.value.toUpperCase() == "PERCENTAGE CHANGE IN VOLUME CALCULATOR") {
                        $("#per_chng_vol").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == "PERCENTAGE CHANGE IN VOLUME CALCULATOR"){
                        document.getElementById('per_chng_vol').click();
                    }
                    else if (inp.value.toUpperCase() == "CONGRUENCE AND SIMILARITY OF TRIANGLES") {
                        $("#consim").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == "CONGRUENCE AND SIMILARITY OF TRIANGLES"){
                        document.getElementById('consim').click();
                    }
                    else if (inp.value.toUpperCase() == "TYPES OF RELATIONS") {
                        $("#relationtypes").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == "TYPES OF RELATIONS"){
                        document.getElementById('relationtypes').click();
                    }
                    else if (inp.value.toUpperCase() == "CRAMERS RULE CALCULATOR") {
                        $("#cramer").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == "CRAMERS RULE CALCULATOR"){
                        document.getElementById('cramer').click();
                    }
                    else if (inp.value.toUpperCase() == "SIEVE OF ERATOSTHENES") {
                        $("#sieve").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == "SIEVE OF ERATOSTHENES"){
                        document.getElementById('sieve').click();
                    }
                    else if (inp.value.toUpperCase() == "NAME OF 3D SHAPES") {
                        $("#3d-shape").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == "NAME OF 3D SHAPES"){
                        document.getElementById('3d-shape').click();
                    }
                    else if (inp.value.toUpperCase() == "DESARGUES THEOREM") {
                        $("#des").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == "DESARGUES THEOREM"){
                        document.getElementById('des').click();
                    }
                    else if (inp.value.toUpperCase() == "GOLDEN RATIO CALCULATOR") {
                        $("#goldr").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == "GOLDEN RATIO CALCULATOR"){
                        document.getElementById('goldr').click();
                    }
                    else if (inp.value.toUpperCase() == "GOLDEN RECTANGLE CALCULATOR") {
                        $("#goldrec").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == "GOLDEN RECTANGLE CALCULATOR"){
                        document.getElementById('goldrec').click();
                    }
                    else if (inp.value.toUpperCase() == "CROSS MULTIPLICATION CALCULATOR") {
                        $("#cross").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == "CROSS MULTIPLICATION CALCULATOR"){
                        document.getElementById('cross').click();
                    }
                    else if (inp.value.toUpperCase() == "DIAMOND PROBLEM CALCULATOR") {
                        $("#diamond").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == "DIAMOND PROBLEM CALCULATOR"){
                        document.getElementById('diamond').click();
                    }
                    else if (inp.value.toUpperCase() == "F-TEST") {
                        $("#ftest").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == "F-TEST"){
                        document.getElementById('ftest').click();
                    }
                    else if (inp.value.toUpperCase() == "CATALAN NUMBERS") {
                        $("#catNum").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == "CATALAN NUMBERS"){
                        document.getElementById('catNum').click();
                    }
                    else if (inp.value.toUpperCase() == "EUCLID GCD") {
                        $("#gcd").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == "EUCLID GCD"){
                        document.getElementById('gcd').click();
                    }
                    else if (inp.value.toUpperCase() == "NEXT PRIME NUMBER") {
                        $("#nextPrime").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == "NEXT PRIME NUMBER"){
                        document.getElementById('nextPrime').click();
                    }
                    else if (inp.value.toUpperCase() == "DOUBLE FACTORIAL") {
                        $("#dblFact").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == "DOUBLE FACTORIAL"){
                        document.getElementById('dblFact').click();
                    }
                    else if (inp.value.toUpperCase() == "SMALLEST PRIME FACTOR") {
                        $("#smPrime").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == "SMALLEST PRIME FACTOR"){
                        document.getElementById('smPrime').click();
                    }
                    else if (inp.value.toUpperCase() == "SUM OF N TERMS OF AP,GP & HP") {
                        $("#sum_n").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == "SUM OF N TERMS OF AP,GP & HP"){
                        document.getElementById('sum_n').click();
                    }
                    else if (inp.value.toUpperCase() == "CONDITIONAL PROBABILITY") {
                        $("#condprobability").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == "CONDITIONAL PROBABILITY"){
                        document.getElementById('condprobability').click();
                    }
                    else if (inp.value.toUpperCase() == "MEAN AND VARIANCE OF RANDOM VARIABLE") {
                        $("#randommean").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == "MEAN AND VARIANCE OF RANDOM VARIABLE"){
                        document.getElementById('randommean').click();
                    }
                    else if (inp.value.toUpperCase() == "GEOMETRIC PROBABILITY DISTRIBUTION") {
                        $("#geoprobability").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == "GEOMETRIC PROBABILITY DISTRIBUTION"){
                        document.getElementById('geoprobability').click();
                    }
                    else if (inp.value.toUpperCase() == "ADDITIVE INVERSE") {
                        $("#ais").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == "ADDITIVE INVERSE"){
                        document.getElementById('ais').click();
                    }
                    else if(inp.value.toUpperCase() == "CONFIDENCE INTERVAL CALCULATOR"){
                        document.getElementById('#confi-inter').click();
                    }
                    else if (inp.value.toUpperCase() == "CONFIDENCE INTERVAL CALCULATOR") {
                        $("confi-inter").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == "ODDS CALCULATOR"){
                        document.getElementById('#odds').click();
                    }
                    else if (inp.value.toUpperCase() == "ODDS CALCULATOR") {
                        $("odds").slideToggle();    
                    }
                   
                    else if (inp.value.toUpperCase() == "JOINT PROBABILITY") {
                        $("#joint-probabilitycollapse").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == "JOINT PROBABILITY"){
                        document.getElementById('joint-probabilitycollapse').click();
                    }
                    else if (inp.value.toUpperCase() == "INDEPENDENT AND DEPENDENT EVENT PROBABILITY") {
                        $("#idevent").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == "INDEPENDENT AND DEPENDENT EVENT PROBABILITY"){
                        document.getElementById('idevent').click();
                    }
                    else if (inp.value.toUpperCase() == "BINOMIAL DISTRIBUTION CALCULATOR") {
                        $("#bpmfs").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == "BINOMIAL DISTRIBUTION CALCULATOR"){
                        document.getElementById('bpmfs').click();
                    }
                    else if (inp.value.toUpperCase() == "POISSON DISTRIBUTION CALCULATOR") {
                        $("#bpmfs").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == "POISSON DISTRIBUTION CALCULATOR"){
                        document.getElementById('bpmfs').click();
                    }
                    else if (inp.value.toUpperCase() == "INVERSE HYPERBOLIC TRIGONOMETRIC IDENTITIES") {
                        $("#invhyptrigonoiden").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == "INVERSE HYPERBOLIC TRIGONOMETRIC IDENTITIES"){
                        document.getElementById('invhyptrigonoiden').click();
                    }
                    else if (inp.value.toUpperCase() == "DE-MOIVRES THEOREM AND CAUCHY-REIMAAN THEOREM") {
                        $("#theo").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == "DE-MOIVRES THEOREM AND CAUCHY-REIMAAN THEOREM"){
                        document.getElementById('theo').click();
                    }
                    else if (inp.value.toUpperCase() == "MILNE THOMSON METHOD") {
                        $("#mtm").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == "MILNE THOMSON METHOD"){
                        document.getElementById('mtm').click();
                    }
                    else if (inp.value.toUpperCase() == "RESIDUE METHODS") {
                        $("#res1").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == "RESIDUE METHODS"){
                        document.getElementById('res1').click();
                    }
                    else if (inp.value.toUpperCase() == "BIN/DEC/OCT/HEX CONVERTER") {
                        $("#binary-hexadecimal").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == "BIN/DEC/OCT/HEX CONVERTER"){
                        document.getElementById('binary-hexadecimal').click();
                    }
                    else if (inp.value.toUpperCase() == "ANY BASE TO ANY BASE CONVERTER") {
                        $("#anyBase").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == "ANY BASE TO ANY BASE CONVERTER"){
                        document.getElementById('anyBase').click();
                    }
                    else if (inp.value.toUpperCase() == "ADDITION OF ANY NUMBER SYSTEM") {
                        $("#adding-all").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == "ADDITION OF ANY NUMBER SYSTEM"){
                        document.getElementById('adding-all').click();
                    }
                    else if (inp.value.toUpperCase() == "SUBTRACTION OF ANY NUMBER SYSTEM") {
                        $("#subtract-all").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == "SUBTRACTION OF ANY NUMBER SYSTEM"){
                        document.getElementById('subtract-all').click();
                    }
                    else if (inp.value.toUpperCase() == "MULTIPLICATION OF ANY NUMBER SYSTEM") {
                        $("#multiplying-all").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == "MULTIPLICATION OF ANY NUMBER SYSTEM"){
                        document.getElementById('multiplying-all').click();
                    }
                    else if (inp.value.toUpperCase() == "FACTORIAL") {
                        $("#factorial").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == "FACTORIAL"){
                        document.getElementById('factorial').click();
                    }
                    else if (inp.value.toUpperCase() == "PERMUTATION AND COMBINATION") {
                        $("#pandc").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == "PERMUTATION AND COMBINATION"){
                        document.getElementById('pandc').click();
                    }
                    else if (inp.value.toUpperCase() == "Z SCORE CALCULATOR") {
                        $("#zscores").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == "Z SCORE CALCULATOR"){
                        document.getElementById('zscores').click();
                    }
                    else if (inp.value.toUpperCase() == "P VALUE CALCULATOR") {
                        $("#pvalue").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == "P VALUE CALCULATOR"){
                        document.getElementById('pvalue').click();
                    }
                    else if (inp.value.toUpperCase() == "PPV CALCULATOR") {
                        $("#ppv").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == "PPV CALCULATOR"){
                        document.getElementById('ppv').click();
                    }
                    else if (inp.value.toUpperCase() == "WEIGHTED MEAN CALCULATOR") {
                        $("#wmcs").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == "WEIGHTED MEAN CALCULATOR"){
                        document.getElementById('wmcs').click();
                    }
                    else if (inp.value.toUpperCase() == "LOGARITHM CALCULATOR") {
                        $("#log_values").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == "LOGARITHM CALCULATOR"){
                        document.getElementById('log_values').click();
                    }
                    else if (inp.value.toUpperCase() == "VOLUMETRIC WEIGHT CALCULATOR") {
                        $("#volume").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == "VOLUMETRIC WEIGHT CALCULATOR"){
                        document.getElementById('volume').click();
                    }
                    else if (inp.value.toUpperCase() == "BINOMIAL THEOREM PROPERTIES") {
                        $("#bt-collapse").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == "BINOMIAL THEOREM PROPERTIES"){
                        document.getElementById('bt-collapse').click();
                    }
                    else if (inp.value.toUpperCase() == "BCD CODE CONVERTER") {
                        $("#bcd").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == "BCD CODE CONVERTER"){
                        document.getElementById('bcd').click();
                    }
                    else if (inp.value.toUpperCase() == "2421 CODE CONVERTER") {
                        $("#dec2421").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == "2421 CODE CONVERTER"){
                        document.getElementById('dec2421').click();
                    }
                    else if (inp.value.toUpperCase() == "R-1 S AND R S COMPLEMENT CALCULATOR") {
                        $("#onetwocom-calc").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == "(R-1) S AND R S COMPLEMENT CALCULATOR"){
                        document.getElementById('onetwocom-calc').click();
                    }
                    else if (inp.value.toUpperCase() == "HAMMING CODE") {
                        $("#hamming-calc").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == "HAMMING CODE"){
                        document.getElementById('hamming-calc').click();
                    }      
                    else if (inp.value.toUpperCase() == "HAMMING DISTANCE") {
                        $("#hamming-dist").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == "HAMMING DISTANCE"){
                        document.getElementById('hamming-dist').click();
                    }      
                    else if (inp.value.toUpperCase() == "FACTORIZATION") {
                        $("#pairfacts").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == "FACTORIZATION"){
                        document.getElementById('pairfacts').click();
                    }      
                    else if (inp.value.toUpperCase() == "PERFECT SQUARES & CUBES IN A RANGE") {
                        $("#squaresRanges").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == "PERFECT SQUARES & CUBES IN A RANGE"){
                        document.getElementById('squaresRanges').click();
                    }      
                    else if (inp.value.toUpperCase() == "ERROR PERCENTAGE CALCULATOR") {
                        $("#errpers").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == "ERROR PERCENTAGE CALCULATOR"){
                        document.getElementById('errpers').click();
                    }      
                    else if (inp.value.toUpperCase() == "EFFECTIVE INTEREST RATE") {
                        $("#eirs").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == "EFFECTIVE INTEREST RATE"){
                        document.getElementById('eirs').click();
                    }      
                    else if (inp.value.toUpperCase() == "COEFFICIENT OF VARIATION") {
                        $("#cvs").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == "COEFFICIENT OF VARIATION"){
                        document.getElementById('cvs').click();
                    }      
                    else if (inp.value.toUpperCase() == "ROOT MEAN SQUARE") {
                        $("#rmss").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == "ROOT MEAN SQUARE"){
                        document.getElementById('rmss').click();
                    }      
                    else if (inp.value.toUpperCase() == "SUM OF SQUARE OF GIVEN NUMBER") {
                        $("#sosqs").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == "SUM OF SQUARE OF GIVEN NUMBER"){
                        document.getElementById('sosqs').click();
                    }      
                    else if (inp.value.toUpperCase() == "NATURAL NUMBERS") {
                        $("#sosqsn").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == "NATURAL NUMBERS"){
                        document.getElementById('sosqsn').click();
                    }       
                    else if (inp.value.toUpperCase() == "MULTIPLICATIVE INVERSE") {
                        $("#mis").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == "MULTIPLICATIVE INVERSE"){
                        document.getElementById('mis').click();
                    }       
                    else if (inp.value.toUpperCase() == "VECTOR CALCULUS") {
                        $("#vector").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == "VECTOR CALCULUS"){
                        document.getElementById('vector').click();
                    }
                    else if (inp.value.toUpperCase() == "VECTOR ALGEBRA") {
                        $("#vecalg").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == "VECTOR ALGEBRA"){
                        document.getElementById('vecalg').click();
                    } 
                    else if (inp.value.toUpperCase() == "DIFFERENTIATION FORMULAE") {
                        $("#differentiate-rulecollapse").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == "DIFFERENTIATION FORMULAE"){
                        document.getElementById('differentiate-rulecollapse').click();
                    } 
                    else if (inp.value.toUpperCase() == "DISTANCE BETWEEN INCENTER AND EXCENTER") {
                        $("#incenterexcenter").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == "DISTANCE BETWEEN INCENTER AND EXCENTER"){
                        document.getElementById('incenterexcenter').click();
                    } 
                    else if (inp.value.toUpperCase() == "PENTATOPE CALCULATOR") {
                        $("#pentatop").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == "PENTATOPE CALCULATOR"){
                        document.getElementById('pentatop').click();
                    } 
                    else if (inp.value.toUpperCase() == "DISTANCE BETWEEN EXCENTRE AND CIRCUMCENTRE") {
                        $("#excircum").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == "DISTANCE BETWEEN EXCENTRE AND CIRCUMCENTRE"){
                        document.getElementById('excircum').click();
                    } 
                    else if (inp.value.toUpperCase() == " GOLDEN AND SILVER RATIO ") {
                        $("#golds").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == " GOLDEN AND SILVER RATIO "){
                        document.getElementById('golds').click();
                    } 
                    else if (inp.value.toUpperCase() == "BETA FUNCTION CALCULATOR ") {
                        $("#beta").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == "BETA FUNCTION CALCULATOR "){
                        document.getElementById('beta').click();
                    } 
                    else if (inp.value.toUpperCase() == "GAMMA FUNCTION CALCULATOR") {
                        $("#gamma").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == "GAMMA FUNCTION CALCULATOR"){
                        document.getElementById('gamma').click();
                    } 
                    else if (inp.value.toUpperCase() == "VECTOR MAGNITUDE CALCULATOR") {
                        $("#vects").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == " VECTOR MAGNITUDE CALCULATOR"){
                        document.getElementById('vects').click();
                    } 
                    else if (inp.value.toUpperCase() == "ORDER OF MAGNITUDE CALCULATOR") {
                        $("#oocs").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == "ORDER OF MAGNITUDE CALCULATOR"){
                        document.getElementById('oocs').click();
                    } 
                    else if (inp.value.toUpperCase() == "LOGARITHM PROPERTIES") {
                        $("#log-collapse").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == "LOGARITHM PROPERTIES"){
                        document.getElementById('log-collapse').click();
                    } 
                    else if (inp.value.toUpperCase() == "PRONIC NUMBER") {
                        $("#pronum").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == "PRONIC NUMBER"){
                        document.getElementById('pronum').click();
                    } 
                    else if (inp.value.toUpperCase() == "ROOTS OF UNITY CALCULATOR") {
                        $("#rootsunity").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == "ROOTS OF UNITY CALCULATOR"){
                        document.getElementById(' rootsunity').click();
                    } 
                    else if (inp.value.toUpperCase() == "QUADRATIC EQUATION CALCULATOR") {
                        $("#quadeqncal").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == "QUADRATIC EQUATION CALCULATOR"){
                        document.getElementById('quadeqncal').click();
                    } 
                    else if (inp.value.toUpperCase() == "INTERCEPT FORM OF PLANE") {
                        $("#planeintercept").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == "INTERCEPT FORM OF PLANE"){
                        document.getElementById('planeintercept').click();
                    } 
                    else if (inp.value.toUpperCase() == "NAME OF 2D SHAPES") {
                        $("#2d-shape").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == "NAME OF 2D SHAPES"){
                        document.getElementById('2d-shape').click();
                    } 
                    else if (inp.value.toUpperCase() == "AREA OF CRESCENT AND LUNE") {
                        $("#crescentLune").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == "AREA OF CRESCENT AND LUNE"){
                        document.getElementById('crescentLune').click();
                    } 
                    else if (inp.value.toUpperCase() == "UNIT CIRCLE") {
                        $("#unitcirc").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == "UNIT CIRCLE"){
                        document.getElementById('unitcirc').click();
                    } 
                    else if (inp.value.toUpperCase() == "EXPANSION CALCULATOR") {
                        $("#expansionc").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == "EXPANSION CALCULATOR"){
                        document.getElementById('expansionc').click();
                    } 
                    else if (inp.value.toUpperCase() == "TYPES OF NUMBERS") {
                        $("#typenum").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == "TYPES OF NUMBERS"){
                        document.getElementById('typenum').click();
                    } 
                    else if (inp.value.toUpperCase() == "SMALLEST NUMBER DIVISIBLE") {
                        $("#smNum").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == "SMALLEST NUMBER DIVISIBLE"){
                        document.getElementById('smNum').click();
                    } 
                    else if (inp.value.toUpperCase() == "FAULHABER FORMULA") {
                        $("#faul").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == "FAULHABER FORMULA"){
                        document.getElementById('faul').click();
                    } 
                    else if (inp.value.toUpperCase() == "PLATONIC SOLIDS") {
                        $("#platonic").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == "PLATONIC SOLIDS"){
                        document.getElementById('platonic').click();
                    } 
                    else if (inp.value.toUpperCase() == "Bilinear INTERPOLATION CALCULATOR") {
                        $("#bilinear").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == "Bilinear INTERPOLATION CALCULATOR"){
                        document.getElementById('bilinear').click();
                    } 
                    else if (inp.value.toUpperCase() == "DISARIUM NUMBER") {
                        $("#disnum").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == "DISARIUM NUMBER"){
                        document.getElementById('disnum').click();
                    } 
                    else if (inp.value.toUpperCase() == "LN CALCULATOR") {
                        $("#lns").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == "LN CALCULATOR"){
                        document.getElementById('lns').click();
                    } 
                    else if (inp.value.toUpperCase() == "PERCENTAGE OFF") {
                        $("#peroff").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == "PERCENTAGE OFF"){
                        document.getElementById('peroff').click();
                    } 
                    else if (inp.value.toUpperCase() == "PERCENTAGE CHANGE") {
                        $("#perchng").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == "PERCENTAGE CHANGE"){
                        document.getElementById('perchng').click();
                    } 
                    else if (inp.value.toUpperCase() == "ANTILOG CALCULATOR") {
                        $("#antilog").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == "ANTILOG CALCULATOR"){
                        document.getElementById('antilog').click();
                    } 
                    else if (inp.value.toUpperCase() == "POLAR COORDINATES CALCULATOR") {
                        $("#polar").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == "POLAR COORDINATES CALCULATOR"){
                        document.getElementById('polar').click();
                    } 
                    else if (inp.value.toUpperCase() == "SPHERICAL COORDINATES CALCULATOR") {
                        $("#sph").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == "SPHERICAL COORDINATES CALCULATOR"){
                        document.getElementById('sph').click();
                    } 
                    else if (inp.value.toUpperCase() == "KAPREKAR NUMBER") {
                        $("#kaps").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == "KAPREKAR NUMBER"){
                        document.getElementById('kaps').click();
                    } 
                    else if (inp.value.toUpperCase() == "WAGSTAFF NUMBER") {
                        $("#wags").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == "WAGSTAFF NUMBER"){
                        document.getElementById('wags').click();
                    } 
                    else if (inp.value.toUpperCase() == "WOODALL NUMBER") {
                        $("#woods").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == "WOODALL NUMBER"){
                        document.getElementById('woods').click();
                    } 
                    else if (inp.value.toUpperCase() == "HYPERPERFECT NUMBER") {
                        $("#hypers").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == " HYPERPERFECT NUMBER "){
                        document.getElementById('hypers').click();
                    } 
                    else if (inp.value.toUpperCase() == "EULER TOTIENT CALCULATOR") {
                        $("#etc").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == "EULER TOTIENT CALCULATOR"){
                        document.getElementById('etc').click();
                    } 
                    else if (inp.value.toUpperCase() == "VECTOR CALCULATOR") {
                        $("#vec").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == "VECTOR CALCULATOR"){
                        document.getElementById('vec').click();
                    } 
                    else if (inp.value.toUpperCase() == "FOURIER SERIES") {
                        $("#fourier_series").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == "FOURIER SERIES"){
                        document.getElementById('fourier_series').click();
                    } 
                    else if (inp.value.toUpperCase() == "THEOREMS ON DIFFERENTIATION") {
                        $("#thdif").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == "THEOREMS ON DIFFERENTIATION"){
                        document.getElementById('thdif').click();
                    } 
                    else if (inp.value.toUpperCase() == "PARTIAL DIFFERENTIAL EQUATIONS") {
                        $("#pdiffeqn").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == "PARTIAL DIFFERENTIAL EQUATIONS"){
                        document.getElementById('pdiffeqn').click();
                    } 
                    else if (inp.value.toUpperCase() == "METHODS OF INTEGRATION") {
                        $("#mi").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == "METHODS OF INTEGRATION"){
                        document.getElementById('mi').click();
                    } 
                    else if (inp.value.toUpperCase() == "DIRECT AND INDIRECT PROPORTION") {
                        $("#mi").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == "DIRECT AND INDIRECT PROPORTION"){
                        document.getElementById('mi').click();
                    } 
                    else if (inp.value.toUpperCase() == "CLOCK ANGLE CALCULATOR") {
                        $("#clocks").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == "CLOCK ANGLE CALCULATOR"){
                        document.getElementById('clocks').click();
                    }   
                    else if (inp.value.toUpperCase() == "LCM/HCF/FACTORS") {
                        clearmain()
                        $("#factors").slideDown();    
                    }
                    else if(inp.value.toUpperCase() == "LCM/HCF/FACTORS"){
                        clearmain()
                        document.getElementById('factors').click();
                    }
                    else if (inp.value.toUpperCase() == "PROFIT/LOSS CALCULATIONS") {
                        clearmain()
                        $("#profitloss").slideDown();    
                    }
                    else if(inp.value.toUpperCase() == "PROFIT/LOSS CALCULATIONS"){
                        clearmain()
                        document.getElementById('profitloss').click();
                    }
                    else if (inp.value.toUpperCase() == "PYTHAGOREAN TRIPLETS") {
                        clearmain()
                        $("#pythtriple").slideDown();    
                    }
                    else if(inp.value.toUpperCase() == "PYTHAGOREAN TRIPLETS"){
                        clearmain()
                        document.getElementById('pythtriple').click();
                    }
                    else if (inp.value.toUpperCase() == "RANK CALCULATOR") {
                        clearmain()
                        $("#rankcal").slideDown();    
                    }
                    else if(inp.value.toUpperCase() == "RANK CALCULATOR"){
                        clearmain()
                        document.getElementById('rankcal').click();
                    } 
                    else if (inp.value.toUpperCase() == "LEAP YEAR") {
                        clearmain()
                        $("#lyear").slideDown();    
                    }
                    else if(inp.value.toUpperCase() == "LEAP YEAR"){
                        clearmain()
                        document.getElementById('lyear').click();
                    }
                    else if (inp.value.toUpperCase() == "COORDINATE GEOMETRY CALCULATOR") {
                        clearmain()
                        $("#analytical").slideDown();    
                    }
                    else if(inp.value.toUpperCase() == "COORDINATE GEOMETRY CALCULATOR"){
                        clearmain()
                        document.getElementById('analytical').click();
                    }
                    else if (inp.value.toUpperCase() == "COORDINATE GEOMETRY FORMULA AND THEOREM") {
                        clearmain()
                        $("#corgeo").slideDown();    
                    }
                    else if(inp.value.toUpperCase() == "COORDINATE GEOMETRY FORMULA AND THEOREM"){
                        clearmain()
                        document.getElementById('corgeo').click();
                    }
                    else if (inp.value.toUpperCase() == "STATISTICS FORMULAE") {
                        clearmain()
                        $("#stats").slideDown();    
                    }
                    else if(inp.value.toUpperCase() == "STATISTICS FORMULAE"){
                        clearmain()
                        document.getElementById('stats').click();
                    } 
                    else if (inp.value.toUpperCase() == "P CHART CALCULATOR") {
                        clearmain()
                        $("#pchart").slideDown();    
                    }
                    else if(inp.value.toUpperCase() == "P CHART CALCULATOR"){
                        clearmain()
                        document.getElementById('pchart').click();
                    } 
                    else if (inp.value.toUpperCase() == "MIDRANGE CALCULATOR") {
                        clearmain()
                        $("#midrange").slideDown();    
                    }
                    else if(inp.value.toUpperCase() == "MIDRANGE CALCULATOR"){
                        clearmain()
                        document.getElementById('midrange').click();
                    } 
                    else if (inp.value.toUpperCase() == "SENSITIVITY AND SPECIFICITY") {
                        clearmain()
                        $("#sensi").slideDown();    
                    }
                    else if(inp.value.toUpperCase() == "SENSITIVITY AND SPECIFICITY"){
                        clearmain()
                        document.getElementById('sensi').click();
                    } 
                    else if (inp.value.toUpperCase() == "T-TEST") {
                        clearmain()
                        $("#ttest").slideDown();    
                    }
                    else if(inp.value.toUpperCase() == "T-TEST"){
                        clearmain()
                        document.getElementById('ttest').click();
                    } 
                    else if (inp.value.toUpperCase() == "AB-TEST") {
                        clearmain()
                        $("#abtest").slideDown();    
                    }
                    else if(inp.value.toUpperCase() == "AB-TEST"){
                        clearmain()
                        document.getElementById('abtest').click();
                    } 
                    else if (inp.value.toUpperCase() == "MEAN CALCULATOR") {
                        clearmain()
                        $("#mean").slideDown();    
                    }
                    else if(inp.value.toUpperCase() == "MEAN CALCULATOR"){
                        clearmain()
                        document.getElementById('mean').click();
                    } 
                    else if (inp.value.toUpperCase() == "INTEREST(SIMPLE,COMPOUND)") {
                        clearmain()
                        $("#interest").slideDown();    
                    }
                    else if(inp.value.toUpperCase() == "INTEREST(SIMPLE,COMPOUND)"){
                        clearmain()
                        document.getElementById('interest').click();
                    } 
                    else if (inp.value.toUpperCase() == "COST AND SELLING PRICES") {
                        clearmain()
                        $("#prices").slideDown();    
                    }
                    else if(inp.value.toUpperCase() == "COST AND SELLING PRICES"){
                        clearmain()
                        document.getElementById('prices').click();
                    } 
                    else if (inp.value.toUpperCase() == "SETS,RELATIONS AND FUNCTIONS") {
                        clearmain()
                        $("#srf").slideDown();    
                    }
                    else if(inp.value.toUpperCase() == "SETS,RELATIONS AND FUNCTIONS"){
                        clearmain()
                        document.getElementById('srf').click();
                    } 
                    else if (inp.value.toUpperCase() == "SETS FORMULAS LIST") {
                        $("#setformula").slideDown();    
                    }
                    else if(inp.value.toUpperCase() == "SETS FORMULAS LIST"){
                        clearmain()
                        document.getElementById('setformula').click();
                    }
                    else if (inp.value.toUpperCase() == "PROPERTIES OF MATRICES AND DETERMINANTS") {
                        clearmain()
                        $("#matrixprops").slideDown();    
                    }
                    else if(inp.value.toUpperCase() == "PROPERTIES OF MATRICES AND DETERMINANTS"){
                        clearmain()
                        document.getElementById('matrixprops').click();
                    } 
                    else if (inp.value.toUpperCase() == "CAYLEY HAMILTON THEOREM AND DIAGONALIZATION") {
                        clearmain()
                        $("#cay").slideDown();    
                    }
                    else if(inp.value.toUpperCase() == "CAYLEY HAMILTON THEOREM AND DIAGONALIZATION"){
                        clearmain()
                        document.getElementById('cay').click();
                    } 
                    else if (inp.value.toUpperCase() == "INTEGRATION FORMULAE") {
                        clearmain()
                        $("#integration-idencollapse").slideDown();    
                    }
                    else if(inp.value.toUpperCase() == "INTEGRATION FORMULAE"){
                        clearmain()
                        document.getElementById('integration-idencollapse').click();
                    } 
                    else if (inp.value.toUpperCase() == "DEFINITE INTEGRATION FORMULAE") {
                        clearmain()
                        $("#defintegration-idencollapse").slideDown();    
                    }
                    else if(inp.value.toUpperCase() == "DEFINITE INTEGRATION FORMULAE"){
                        clearmain()
                        document.getElementById('defintegration-idencollapse').click();
                    } 
                    else if (inp.value.toUpperCase() == "DIFFERENTIAL EQUATIONS") {
                        clearmain()
                        $("#diffeqn").slideDown();    
                    }
                    else if(inp.value.toUpperCase() == "DIFFERENTIAL EQUATIONS"){
                        clearmain()
                        document.getElementById('diffeqn').click();
                    } 
                    else if (inp.value.toUpperCase() == "CONVERGENCE AND DIVERGENCE OF SERIES") {
                        clearmain()
                        $("#convdiv").slideDown();    
                    }
                    else if(inp.value.toUpperCase() == "CONVERGENCE AND DIVERGENCE OF SERIES"){
                        clearmain()
                        document.getElementById('convdiv').click();
                    }
                    else if (inp.value.toUpperCase() == "HYPERBOLIC TRIGONOMETRIC IDENTITIES") {
                        clearmain()
                        $("#hyptrigonoiden").slideDown();    
                    }
                    else if(inp.value.toUpperCase() == "HYPERBOLIC TRIGONOMETRIC IDENTITIES"){
                        clearmain()
                        document.getElementById('hyptrigonoiden').click();
                    } 
                    else if (inp.value.toUpperCase() == "GENERAL SOLUTION OF TRIGONOMETRIC EQUATIONS") {
                        clearmain()
                        $("#trigsolcollapse").slideDown();    
                    }
                    else if(inp.value.toUpperCase() == "GENERAL SOLUTION OF TRIGONOMETRIC EQUATIONS"){
                        clearmain()
                        document.getElementById('trigsolcollapse').click();
                    } 
                    else if (inp.value.toUpperCase() == "SOLUTION OF TRIANGLES") {
                        clearmain()
                        $("#solutiontri").slideDown();    
                    }
                    else if(inp.value.toUpperCase() == "SOLUTION OF TRIANGLES"){
                        clearmain()
                        document.getElementById('solutiontri').click();
                    } 
                    else if (inp.value.toUpperCase() == "SUM AND DIFFERENCE OF TRIGNOMETRIC FUNCTION") {
                        clearmain()
                        $("#sumAndDiffTri").slideDown();    
                    }
                    else if(inp.value.toUpperCase() == "SUM AND DIFFERENCE OF TRIGNOMETRIC FUNCTION"){
                        clearmain()
                        document.getElementById('sumAndDiffTri').click();
                    } 
                    else if (inp.value.toUpperCase() == "GREATEST INTEGER FUNCTION AND FRACTIONAL PART") {
                        clearmain()
                        $("#giff").slideDown();    
                    }
                    else if(inp.value.toUpperCase() == "GREATEST INTEGER FUNCTION AND FRACTIONAL PART"){
                        clearmain()
                        document.getElementById('giff').click();
                    } 
                    else if (inp.value.toUpperCase() == "QUARTILES") {
                        clearmain()
                        $("#qrtl").slideDown();    
                    }
                    else if(inp.value.toUpperCase() == "QUARTILES"){
                        clearmain()
                        document.getElementById('qrtl').click();
                    } 
                    else if (inp.value.toUpperCase() == "DECILES") {
                        clearmain()
                        $("#decl").slideDown();    
                    }
                    else if(inp.value.toUpperCase() == "DECILES"){
                        clearmain()
                        document.getElementById('decl').click();
                    } 
                    else if (inp.value.toUpperCase() == "WORK AND TIME CALCULATOR") {
                        clearmain()
                        $("#wandt").slideDown();    
                    }
                    else if(inp.value.toUpperCase() == "WORK AND TIME CALCULATOR"){
                        clearmain()
                        document.getElementById('wandt').click();

                    } 
                    else if (inp.value.toUpperCase() == "SOLVE FOR EXPONENTS") {
                        clearmain()
                        $("#expo").slideDown();    
                    }
                    else if(inp.value.toUpperCase() == "SOLVE FOR EXPONENTS"){
                        clearmain()
                        document.getElementById('expo').click();
                    } 
                    else if (inp.value.toUpperCase() == "PERCENTAGE CALCULATOR") {
                        clearmain()
                        $("#percal").slideDown();    
                    }
                    else if(inp.value.toUpperCase() == "PERCENTAGE CALCULATOR"){
                        clearmain()
                        document.getElementById('percal').click();
                    } 
                    else if (inp.value.toUpperCase() == "STANDARD DEVIATION") {
                        clearmain()
                        $("#deviation").slideDown();    
                    }
                    else if(inp.value.toUpperCase() == "STANDARD DEVIATION"){
                        clearmain()
                        document.getElementById('deviation').click();
                    } 
                    else if (inp.value.toUpperCase() == "PRIME NUMBERS") {
                        clearmain()
                        $("#prime").slideDown();    
                    }
                    else if(inp.value.toUpperCase() == "PRIME NUMBERS"){
                        clearmain()
                        document.getElementById('prime').click();
                    }
                    else if (inp.value.toUpperCase() == "PARABOLA") {
                        clearmain()
                        $("#parabolacollapse").slideDown();    
                    }
                    else if(inp.value.toUpperCase() == "PARABOLA"){
                        clearmain()
                        document.getElementById('parabolacollapse').click();
                    }
                    else if (inp.value.toUpperCase() == "ACKERMANN FUNCTION") {
                        clearmain()
                        $("#ackermann").slideDown();    
                    }
                    else if(inp.value.toUpperCase() == "ACKERMANN FUNCTION"){
                        clearmain()
                        document.getElementById('ackermann').click();
                    }                    
                    else if (inp.value.toUpperCase() == "MODULO CALCULATOR") {
                        clearmain()
                        $("#modulo").slideDown();    
                    }
                    else if(inp.value.toUpperCase() == "MODULO CALCULATOR"){
                        clearmain()
                        document.getElementById('modulo').click();
                    }                    
                    else if (inp.value.toUpperCase() == "EXPONENTIAL GROWTH CALCULATOR") {
                        clearmain()
                        $("#expgrwths").slideDown();    
                    }
                    else if(inp.value.toUpperCase() == "EXPONENTIAL GROWTH CALCULATOR"){
                        clearmain()
                        document.getElementById('#expgrwths').click();
                    }                 
                       else if (inp.value.toUpperCase() == "ABUNDANT NUMBER") {
                        clearmain()
                        $("#abundants").slideDown();    
                    }
                    else if(inp.value.toUpperCase() == "ABUNDANT NUMBER"){
                        clearmain()
                        document.getElementById('abundants').click();
                    }                  
                      else if (inp.value.toUpperCase() == "FOIL CALCULATOR") {
                        clearmain()
                        $("#foil").slideDown();    
                    }
                    else if(inp.value.toUpperCase() == "FOIL CALCULATOR"){
                        clearmain()
                        document.getElementById('foil').click();
                    }                  
                      else if (inp.value.toUpperCase() == "BINOMIAL EXPRESSION MULTIPLICATION") {
                        clearmain()
                        $("#binoexpcollapse").slideDown();    
                    }
                    else if(inp.value.toUpperCase() == "BINOMIAL EXPRESSION MULTIPLICATION"){
                        clearmain()
                        document.getElementById('binoexpcollapse').click();
                    }                   
                     else if (inp.value.toUpperCase() == "SUM OF DIVISORS") {
                        clearmain()
                        $("#sumDiv").slideDown();    
                    }
                    else if(inp.value.toUpperCase() == "SUM OF DIVISORS"){
                        clearmain()
                        document.getElementById('sumDiv').click();
                    }             
                           else if (inp.value.toUpperCase() == ">HEIGHT AND DISTANCE") {
                        clearmain()
                        $("#height1").slideDown();    
                    }
                    else if(inp.value.toUpperCase() == "HEIGHT AND DISTANCE"){
                        clearmain()
                        document.getElementById('height1').click();
                    }
                    else if (inp.value.toUpperCase() == "ALIQUOT SUMS") {
                        clearmain()
                        $("#ali").slideDown();    
                    }
                    else if(inp.value.toUpperCase() == "ALIQUOT SUMS"){
                        clearmain()
                        document.getElementById('ali').click();
                    }
                    else if (inp.value.toUpperCase() == "IMPORTANT SERIES AND SEQUENCES") {
                        clearmain()
                        $("#impse").slideDown();    
                    }
                    else if(inp.value.toUpperCase() == "IMPORTANT SERIES AND SEQUENCES"){
                        clearmain()
                        document.getElementById('impse').click();
                    }
                    else if (inp.value.toUpperCase() == "SOLVE FOR X") {
                        clearmain()
                        $("#slvxs").slideDown();    
                    }
                    else if(inp.value.toUpperCase() == "SOLVE FOR X"){
                        clearmain()
                        document.getElementById('slvxs').click();
                    }
                    else if (inp.value.toUpperCase() == "DOUBLING TIME") {
                        clearmain()
                        $("#dbltime").slideDown();    
                    }
                    else if(inp.value.toUpperCase() == "DOUBLING TIME"){
                        clearmain()
                        document.getElementById('dbltime').click();
                    }
                    else if (inp.value.toUpperCase() == "PERCENTAGE CHANGE") {
                        clearmain()
                        $("#perchng").slideDown();    
                    }
                    else if(inp.value.toUpperCase() == "PERCENTAGE CHANGE"){
                        clearmain()
                        document.getElementById('perchng').click();
                    }
                    else if (inp.value.toUpperCase() == "ANTILOG CALCULATOR") {
                        clearmain()
                        $("#antilog").slideDown();    
                    }
                    else if(inp.value.toUpperCase() == "ANTILOG CALCULATOR"){
                        clearmain()
                        document.getElementById('antilog').click();
                    }
                    else if (inp.value.toUpperCase() == "PERCENTAGE OFF") {
                        clearmain()
                        $("#peroff").slideDown();    
                    }
                    else if(inp.value.toUpperCase() == "PERCENTAGE OFF"){
                        clearmain()
                        document.getElementById('peroff').click();
                    }
                    else if (inp.value.toUpperCase() == "ADAM NUMBERS") {
                        clearmain()
                        $("#adams").slideDown();    
                    }
                    else if(inp.value.toUpperCase() == "ADAM NUMBERS"){
                        clearmain()
                        document.getElementById('adams').click();
                    }
                    else if (inp.value.toUpperCase() == "HALF LIFE CALCULATOR") {
                        clearmain()
                        $("#halflife").slideDown();    
                    }
                    else if(inp.value.toUpperCase() == "HALF LIFE CALCULATOR"){
                        clearmain()
                        document.getElementById('halflife').click();
                    }
                    else if (inp.value.toUpperCase() == "CONTOUR INTEGRATION") {
                        $("#ci").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == "CONTOUR INTEGRATION"){
                        document.getElementById('ci').click();
                    }
                    else if (inp.value.toUpperCase() == "CAUCHY INTEGRAL,LIOUVILLE AND ROUCHE THEOREM") {
                        clearmain()
                        $("#clr").slideDown();    
                    }
                    else if(inp.value.toUpperCase() == "CAUCHY INTEGRAL,LIOUVILLE AND ROUCHE THEOREM"){
                        clearmain()
                        document.getElementById('clr').click();
                    }

                    else if (inp.value.toUpperCase() == "REPRESENTATION BY POWER SERIES") {
                        clearmain()
                        $("#repp").slideDown();    
                    }
                    else if(inp.value.toUpperCase() == "REPRESENTATION BY POWER SERIES"){
                        clearmain()
                        document.getElementById('repp').click();
                    }
                    else if (inp.value.toUpperCase() == "POWER SERIES") {
                        clearmain()
                        $("#pows").slideDown();    
                    }
                    else if(inp.value.toUpperCase() == "POWER SERIES"){
                        clearmain()
                        document.getElementById('pows').click();
                    } 
                    else if (inp.value.toUpperCase() == "CURRENCY CONVERTOR") {
                        clearmain()
                        $("#curconcal").slideDown();    
                    }
                    else if(inp.value.toUpperCase() == "CURRENCY CONVERTOR"){
                        clearmain()
                        document.getElementById('curconcal').click();
                    } 
                    else if (inp.value.toUpperCase() == "CONTOUR INTEGRATION") {
                        $("#ci").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == "CONTOUR INTEGRATION"){
                        document.getElementById('ci').click();
                    }
                    else if (inp.value.toUpperCase() == "SPI/CGPA CONVERTOR") {
                        clearmain()
                        $("#spiconcal").slideDown();    
                    }
                    else if(inp.value.toUpperCase() == "SPI/CGPA CONVERTOR"){
                        clearmain()
                        document.getElementById('spiconcal').click();
                    } 
                    else if (inp.value.toUpperCase() == "DATE") {
                        clearmain()
                        $("#datecal").slideDown();    
                    }
                    else if(inp.value.toUpperCase() == "DATE"){
                        clearmain()
                        document.getElementById('datecal').click();
                    }
                    else if (inp.value.toUpperCase() == "DESARGUES THEOREM") {
                        clearmain()
                        $("#des").slideDown();    
                    }
                    else if(inp.value.toUpperCase() == "DESARGUES THEOREM"){
                        clearmain()
                        document.getElementById('des').click();
                    }                    
                    else if (inp.value.toUpperCase() == "DRICHLET THEOREM") {
                        clearmain()
                        $("#dri").slideDown();    
                    }
                    else if(inp.value.toUpperCase() == "DRICHLET THEOREM"){
                        clearmain()
                        document.getElementById('dri').click();
                    }
                    else if (inp.value.toUpperCase() == "TYPES OF NUMBERS") {
                        clearmain()
                        $("#typenum").slideDown();    
                    }
                    else if(inp.value.toUpperCase() == "TYPES OF NUMBERS"){
                        clearmain()
                        document.getElementById('typenum').click();
                    }
                    else if (inp.value.toUpperCase() == "EUCLID GCD") {
                        clearmain()
                        $("#gcd").slideDown();    
                    }
                    else if(inp.value.toUpperCase() == "EUCLID GCD"){
                        clearmain()
                        document.getElementById('gcd').click();
                    }
                    else if (inp.value.toUpperCase() == "SQUARE AND CUBE CALCULATOR") {
                        $("#datecal").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == "SQUARE AND CUBE CALCULATOR"){
                        document.getElementById('datecal').click();
                    }
                    else if (inp.value.toUpperCase() == "MANHATTAN DISTANCE CALCULATOR") {
                        $("#manhats").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == "MANHATTAN DISTANCE CALCULATOR"){
                        document.getElementById('manhats').click();
                    }
                    else if (inp.value.toUpperCase() == "CARTESIAN COORDINATE CALCULATOR") {
                        $("#cart").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == "CARTESIAN COORDINATE CALCULATOR"){
                        document.getElementById('cart').click();
                    }
                    else if (inp.value.toUpperCase() == "SPHERICAL COORDINATE CALCULATOR") {
                        $("#sph").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == "SPHERICAL COORDINATE CALCULATOR"){
                        document.getElementById('sph').click();
                    }
                    else if (inp.value.toUpperCase() == "CYLINDRICAL COORDINATE CALCULATOR") {
                        $("#cyl").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == "CYLINDRICAL COORDINATE CALCULATOR"){
                        document.getElementById('cyl').click();
                    }
                    else if (inp.value.toUpperCase() == "SPHERICAL COORDINATE CALCULATOR") {
                        $("#sph").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == "SPHERICAL COORDINATE CALCULATOR"){
                        document.getElementById('sph').click();
                    }
                    else if (inp.value.toUpperCase() == "POLAR COORDINATE CALCULATOR") {
                        $("#polar").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == "POLAR COORDINATE CALCULATOR"){
                        document.getElementById('polar').click();
                    }
                    else if (inp.value.toUpperCase() == "BILINEAR INTERPOLATION CALCULATOR") {
                        $("#bilinear").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == "BILINEAR INTERPOLATION CALCULATOR"){
                        document.getElementById('bilinear').click();
                    }
                    else if(inp.value.toUpperCase() == "EULER TOTIENT FUNCTION"){
                        $("#etf").slideToggle(); 
                    }
                    else if (inp.value.toUpperCase() == "EULER TOTIENT FUNCTION") {
                        document.getElementById('etf').click(); 
                    }
                    else if (inp.value.toUpperCase() == "UNIT RATE CALCULATOR") {
                        $("#utcs").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == "UNIT RATE CALCULATOR"){
                        document.getElementById('utcs').click();
                    }
                    else if (inp.value.toUpperCase() == "IMPORTANT GRAPH CALCULATORS") {
                        $("#igc").slideDown();    
                    }
                    else if(inp.value.toUpperCase() == "IMPORTANT GRAPH CALCULATORS"){
                        document.getElementById('igc').click();
                    }
                    else if (inp.value.toUpperCase() == "EMI CALCULATOR") {
                        clearmain()
                        $("#emical").slideDown();    
                    }
                    else if(inp.value.toUpperCase() == "EMI CALCULATOR"){
                        clearmain()
                        document.getElementById('emical').click();
                    }
                    else if (inp.value.toUpperCase() == "BINOMIAL COEFFICIENT CALCULATOR") {

                        $("#binomialcoeff").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == "BINOMIAL COEFFICIENT CALCULATOR"){
                        document.getElementById('binomialcoeff').click();
                    }
                    else if (inp.value.toUpperCase() == "BAYES PROBABILITY THEOREM") {

                        $("#bayes-probabilitycollapse").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == "BAYES PROBABILITY THEOREM"){
                        document.getElementById('bayes-probabilitycollapse').click();
                    }
                    else if (inp.value.toUpperCase() == "HYPERGEOMETRIC DISTRIBUTION P.M.F CALCULATOR") {

                        $("#hypergeos").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == "HYPERGEOMETRIC DISTRIBUTION P.M.F CALCULATOR"){
                        document.getElementById('hypergeos').click();
                    }
                    else if (inp.value.toUpperCase() == "POISSON DISTRIBUTION STATISTICS") {

                        $("#vpds").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == "POISSON DISTRIBUTION STATISTICS"){
                        document.getElementById('vpds').click();
                    }
                    else if (inp.value.toUpperCase() == "HYPERGEOMETRIC DISTRIBUTION  STATISTICS") {

                        $("#hypergeomeans").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == "HYPERGEOMETRIC DISTRIBUTION  STATISTICS"){
                        document.getElementById('hypergeomeans').click();
                    }
                    else if (inp.value.toUpperCase() == "GEOMETRIC PROBABILITY DISTRIBUTION") {

                        $("#geoprobability").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == "GEOMETRIC PROBABILITY DISTRIBUTION"){
                        document.getElementById('geoprobability').click();
                    }
                    else if (inp.value.toUpperCase() == "ENNEADECAGON CALCULATOR") {

                        $("#enneadecagon").slideToggle();    
                    }
                    else if(inp.value.toUpperCase() == "ENNEADECAGON CALCULATOR"){
                        document.getElementById('enneadecagon').click();
                    }
                    else if (inp.value.toUpperCase() == "GST CALCULATOR") {
                        clearmain()
                        $("#gstcal").slideDown();    
                    }
                    else if(inp.value.toUpperCase() == "GST CALCULATOR"){
                        clearmain()
                        document.getElementById('gstcal').click();
                    }
                    else if (inp.value.toUpperCase() == "SET CALCULATOR") {
                        clearmain()
                        $("#setcal").slideDown();    
                    }
                    else if(inp.value.toUpperCase() == "SET CALCULATOR"){
                        clearmain()
                        document.getElementById('setcal').click();
                    }
                    else if (inp.value.toUpperCase() == "POLYNOMIAL DEGREE") {
                        clearmain()
                        $("#degcal").slideDown();    
                    }
                    else if(inp.value.toUpperCase() == "POLYNOMIAL DEGREE"){
                        clearmain()
                        document.getElementById('degcal').click();
                    }
                    else if (inp.value.toUpperCase() == "STRAIN CALCULATOR") {
                        clearmain()
                        $("#straincalc").slideDown();    
                    }
                    else if(inp.value.toUpperCase() == "STRAIN CALCULATOR"){
                        clearmain()
                        document.getElementById('straincalc').click();
                    }
                    else if (inp.value.toUpperCase() == "STRESS CALCULATOR") {
                        clearmain()
                        $("#stresscalc").slideDown();    
                    }
                    else if(inp.value.toUpperCase() == "STRESS CALCULATOR"){
                        clearmain()
                        document.getElementById('stresscalc').click();
                    }
                    else if (inp.value.toUpperCase() == "HYDROSTATIC PRESSURE") {
                        clearmain()
                        $("#hydroz").slideDown();    
                    }
                    else if(inp.value.toUpperCase() == "HYDROSTATIC PRESSURE"){
                        clearmain()
                        document.getElementById('hydroz').click();
                    }
                    else if(inp.value.toUpperCase() == "LIMITS"){
                        clearmain()
                        document.getElementById('limitscollapse').click(); 
                    }
                    else if (inp.value.toUpperCase() == "LIMITS") {
                        clearmain()
                        $("#limitscollapse").slideDown(); 
                    }
                    else if(inp.value.toUpperCase() == "3-D GEOMETRY CALCULATOR"){
                        clearmain()
                        document.getElementById('3dgeocalc').click(); 
                    }
                    else if (inp.value.toUpperCase() == "3-D GEOMETRY CALCULATOR") {
                        clearmain()
                        $("#3dgeocalc").slideDown(); 
                    }
                    else if(inp.value.toUpperCase() == "EULER TOTIENT CALCULATOR"){
                        $("#etc").slideToggle(); 
                    }
                    else if (inp.value.toUpperCase() == "EULER TOTIENT CALCULATOR") {
                        document.getElementById('etc').click(); 
                    }

                    else if(inp.value.toUpperCase() == "EUCLID GEOMETRY"){
                        clearmain()
                        $("#euclid").slideDown();
                    }
                    else if(inp.value.toUpperCase() == "EUCLID GEOMETRY"){
                        clearmain()
                        document.getElementById('euclid').click();
                    }
                    else if(inp.value.toUpperCase() == "OPERATIONS ON SETS"){
                        clearmain()
                        $("#setop").slideDown();
                    }
                    else if(inp.value.toUpperCase() == "OPERATIONS ON SETS"){
                        clearmain()
                        document.getElementById('setop').click();
                    }
                    else if (inp.value.toUpperCase() == "ROMAN TO ARABIC") {
                        clearmain()
                        $("#ttest").slideToggle(); 
                    }else if(inp.value.toUpperCase() == "Z TEST"){
                        document.getElementById('ztest').click(); 
                    }
                    else if (inp.value.toUpperCase() == "Z TEST") {
                        $("#ztest").slideToggle(); 
                    }
                    else if (inp.value.toUpperCase() == "CHI-SQUARE TEST") {
                        $("#chitest").slideToggle(); 
                    }
                    else if(inp.value.toUpperCase() == "AB TEST"){
                        clearmain()
                        document.getElementById('abtest').click(); 
                    }
                    else if (inp.value.toUpperCase() == "AB TEST") {
                        clearmain()
                        $("#abtest").slideDown(); 
                    }
                    else if(inp.value.toUpperCase() == "PERCENTILE RANK CALCULTOR"){
                        document.getElementById('rankcals').click(); 
                    }
                    else if (inp.value.toUpperCase() == "PERCENTILE RANK CALCULATOR") {
                        $("#rankcals").slideToggle(); 
                    }
                    else if (inp.value.toUpperCase() == "ROMAN TO ARABIC") {
                        document.getElementById('romaracov').click();
                    } else if (inp.value.toUpperCase() == "ARABIC TO ROMAN") {
                        clearmain()
                        document.getElementById('romaracov').click();
                    } else if (inp.value.toUpperCase() == "ASCENDING ORDER") {
                        clearmain()
                        document.getElementById('order').click();
                    } else if (inp.value.toUpperCase() == "DESCENDING ORDER") {
                        clearmain()
                        document.getElementById('order').click();
                    } else if (inp.value.toUpperCase() == "CONVERSION TO WORDS") {
                        clearmain()
                        document.getElementById('covtowords').click();
                    } else if (inp.value.toUpperCase() == "PLOT BAR GRAPH") {
                        clearmain()
                        $("#plotbargraph").slideDown();
                    }


                });
                a.appendChild(b);
            }
        }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
            /*If the arrow DOWN key is pressed,
            increase the currentFocus variable:*/
            currentFocus++;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode == 38) { //up
            /*If the arrow UP key is pressed,
            decrease the currentFocus variable:*/
            currentFocus--;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode == 13) {
            /*If the ENTER key is pressed, prevent the form from being submitted,*/
            e.preventDefault();
            if (currentFocus > -1) {
                /*and simulate a click on the "active" item:*/
                if (x) x[currentFocus].click();
            }
        }
    });

    function addActive(x) {
        /*a function to classify an item as "active":*/
        if (!x) return false;
        /*start by removing the "active" class on all items:*/
        removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = (x.length - 1);
        /*add class "autocomplete-active":*/
        x[currentFocus].classList.add("autocomplete-active");
    }

    function removeActive(x) {
        /*a function to remove the "active" class from all autocomplete items:*/
        for (var i = 0; i < x.length; i++) {
            x[i].classList.remove("autocomplete-active");
        }
    }

    function closeAllLists(elmnt) {
        /*close all autocomplete lists in the document,
        except the one passed as an argument:*/
        var x = document.getElementsByClassName("autocomplete-items");
        for (var i = 0; i < x.length; i++) {
            if (elmnt != x[i] && elmnt != inp) {
                x[i].parentNode.removeChild(x[i]);
            }
        }
    }

    /*execute a function when someone clicks in the document:*/
    document.addEventListener("click", function(e) {
        closeAllLists(e.target);
    });
}


var arrayofelements =  ["Divide","Catalan Numbers","Euclid GCD","F-Test","Diamond Problem Calculator","Cross Multiplication Calculator","Desargues Theorem", "Lucas series","Integration","Z test","Chi-Square test","Independent And Dependent Event Probability","Quartiles","Deciles","Differentiation", "Laplace", "Inverse Laplace", "Multiplication Table", "Partial Differentiation","Shapes","Matrix",
                        "Simple Trigonometry", "Graph", "Roman to Arabic","Golden Ratio Calculator","Golden Rectangle Calculator", "Arabic to Roman", "Multiply With Steps", "Roots of Equation", "Play With Equations", "Ascending Order", "Descending Order",
                        "Conversion to Words","Work And Time Calculator", "Roundoff", "LCM", "HCF","Ellipse","Circle","Expansion of Functions","Inverse Trigonometric Identities","Trigonometric Identities","P/B/H Trigo","Limits",
                        "Vector Algebra","Sigma Notation","Sum And Difference Of Trignometric Function","Laplace Transforms and Properties","Hyperbola","Algebraic Equations Formulas","Date","Currency Convertor","Beta Gamma Functions","Transformation of Functions","Inverse and Periodicity of Functions","Trigonometric Functions", "Operations on Sets","Euclid Geometry",
                        "Trigonometric Values", "Power Series","Unit Converter" ,"Polynomial Degree","Set Calculator","GST Calculator","Representation by Power Series","EMI Calculator","Binomial Coefficient Calculator","Percentile Rank Calculator","Euler Totient Function","Enneadecagon Calculator","Manhattan Distance calculator","Unit Rate Calculator","Hydrostatic Pressure","3-D Geometry Calculator","Leap Year","Rank Calculator","Excess-3 Code Convertor","Linear Regression Calculator","Covariance Calculator","Skewness Calculator","Improper to Mixed Fraction","Complementary angle calculator","Supplementary Angle Calculator","Coterminal Angle Calculator","SSS Triangles Angle Calculator","Cevas and Thales Theorem","Properties of Circles","Triangle Calculator","2-D Shapes Inscribed","3-D shapes Inscribed","Properties of Quadrilaterals","Arc Length Calculator","Paraboloid","Important Graph Calculators","Cartesian coordinates calculator",
                        "Volume, CSA, TSA","Percentage Change in Volume Calculator","Congruence and Similarity of Triangles","Types of Relations","Cramers Rule Calculator","Name of 3d Shapes","Sieve of Eratosthenes","Double Factorial","Next Prime Number","Sum of N terms of AP,GP & HP","Conditional Probability","Smallest Prime Factor","Additive Inverse","Confidence Interval Calculator","Joint Probability","Binomial Distribution Calculator","Poisson Distribution Calculator","Inverse Hyperbolic Trigonometric Identities","De-Moivres Theorem and Cauchy-Reimaan Theorem","Milne Thomson Method","Residue Methods","Bin/Dec/Oct/Hex Converter","Any Base to Any Base Converter","Addition Of any Number System","Subtraction Of any Number System","Multiplication Of any Number System","Factorial","Permutation and Combination","Z Score Calculator","Weighted Mean Calculator","Logarithm Calculator","Volumetric weight Calculator","Binomial Theorem Properties","BCD Code Converter","2421 Code Converter",
                        "R-1 s and R s Complement Calculator","Hamming Code","Hamming Distance","Factorization","Perfect Squares & Cubes in a range","Error Percentage Calculator","Effective Interest Rate","Coefficient of Variation","Root Mean Square","Sum of Square of given number","Natural Numbers","Multiplicative Inverse","Vector Calculus","Vector Algebra","Differentiation Formulae","Distance between Incenter and Excenter","Pentatope calculator","Distance between excentre and circumcentre","Golden and Silver Ratio","Beta Function Calculator" ,"Gamma Function Calculator" ,"Vector Magnitude Calculator" ,"Order of Magnitude Calculator" ,"Logarithm Properties" ,"Pronic number","Roots of Unity calculator","Quadratic Equation Calculator","Intercept form of Plane","Name Of 2D Shapes","Area of Crescent and Lune","Unit Circle","Expansion Calculator","Types of numbers","Smallest Number Divisible","Faulhaber Formula","Platonic Solids","Bilinear Interpolation Calculator","Disarium Number","Ln Calculator","Percentage Off","Percentage Change","Antilog calculator","Polar coordinates calculator","Spherical coordinates calculator","Kaprekar Number","Wagstaff Number","Woodall Number","Hyperperfect Number","Euler Totient Calculator","Vector Calculator","Fourier Series","Theorems on Differentiation","Partial Differential Equations","Methods of Integration","Direct And Indirect Proportion","Clock Angle Calculator","Grey Code Convertor","Bitwise Calculator","Boolean Algebra"
                        ,"Probability Properties","Empirical Probability","OPS1 on Complex Numbers","OPS2 on Complex Numbers","Properties","Identities","3-D Geometry","3-D Shapes Calculator","Shapes Calculator",
                        "Curve Tracing","Coordinate Systems","Coordinate Geometry Calculator","Cauchy Integral,Liouville and Rouche Theorem","Coordinate Geometry Formula and Theorem","Mean Calculator","Statistics Formulae","p chart calculator","Midrange Calculator","Sensitivity and Specificity","T-test","AB-test","Pythagorean Triplets","Profit/Loss Calculations","LCM/HCF/Factors","Binary/Hexadecimal Convertor","Tangent and Normal","Application of Derivatives","Maxima and Minima of Functions","Properties of Parallel Lines","Straight Line","Plot Angle","Plot Graph","Location of Roots",
                        "SPI/CGPA Convertor","Parabola","Ackermann Function","Modulo calculator","Exponential Growth Calculator","Abundant Number","Foil Calculator","Binomial Expression Multiplication","Sum of Divisors","Height and Distance","Aliquot Sums","Important Series and Sequences","Solve for X","Doubling Time","Adam Numbers","Half Life Calculator","Operations on Fractions","Mathematical Reasoning","Interest(Simple,Compound)","Cost and Selling Prices","Sets,Relations and Functions","Sets Formulas List","Properties of Matrices and Determinants","Cayley Hamilton Theorem and Diagonalization","Integration Formulae","Definite Integration Formulae","Differential Equations","Convergence and Divergence of Series","Hyperbolic Trigonometric Identities","General Solution of Trigonometric Equations","Solution of Triangles","Greatest Integer Function and Fractional Part","Solve for Exponents","Percentage Calculator","Standard Deviation","Prime Numbers","Plot Bar Graph",
                        ,"Coordinate Geometry Formula and Theorem","Mean Calculator","Pythagorean Triplets","Profit/Loss Calculations","LCM/HCF/Factors","Binary/Hexadecimal Convertor","Tangent and Normal","Application of Derivatives","Maxima and Minima of Functions","Properties of Parallel Lines","Straight Line","Plot Angle","Plot Graph","Location of Roots",
                        "SPI/CGPA Convertor","Important Graph Calculator","Operations on Fractions","Mathematical Reasoning","Interest(Simple,Compound)","Cost and Selling Prices","Sets,Relations and Functions","Sets Formulas List","Properties of Matrices and Determinants","Cayley Hamilton Theorem and Diagonalization","Integration Formulae","Definite Integration Formulae","Differential Equations","Convergence and Divergence of Series","Hyperbolic Trigonometric Identities","General Solution of Trigonometric Equations",
                        "Coordinate Geometry Calculator","Coordinate Geometry Formula and Theorem","Mean Calculator","Pythagorean Triplets","Profit/Loss Calculations","LCM/HCF/Factors","Binary/Hexadecimal Convertor","Tangent and Normal","Application of Derivatives","Maxima and Minima of Functions","Properties of Parallel Lines","Straight Line","Plot Angle","Plot Graph","Location of Roots",
                        "Mathematical Reasoning","Interest(Simple,Compound)","Cost and Selling Prices","Sets,Relations and Functions","Sets Formulas List","Properties of Matrices and Determinants","Cayley Hamilton Theorem and Diagonalization","Integration Formulae","Definite Integration Formulae","Differential Equations","Convergence and Divergence of Series","Hyperbolic Trigonometric Identities","General Solution of Trigonometric Equations",
                        "Solution of Triangles","Greatest Integer Function and Fractional Part","Direct And Indirect Proportion","Solve for Exponents","Percentage Calculator","Standard Deviation","Prime Numbers","Plot Bar Graph"
                        ,"Contour Integration","Improper to Proper Integral","Beta Function Calculator","Square and Cube Calculator","Roots of Unity Calculator","Sieve of Eratosthenes","Euler Totient Calculator","Euclid GCD","Types of Numbers","Desargues Theorem","Drichlet Theorem"
                    ];


/*initiate the autocomplete function on the "myInput" element, and pass along the arrayofelements array as possible autocomplete values:*/
autocomplete(document.getElementById("myInput"), arrayofelements);

function handleclick(value) {
    if (value.toUpperCase() == "INTEGRATION") {
        $("#integralcollapse").slideToggle();
    } else if (value.toUpperCase() == "DIFFERENTIATION") {
        $("#differentiatecollapse").slideToggle();
    } else if (value.toUpperCase() == "DIVIDE") {
        $("#divide").slideToggle();
    } else if (value.toUpperCase() == "ABOUT") {
        $("#about").slideToggle();
    } else if (inp.value.toUpperCase() == "HOME") {
        $("#home").slideToggle();
    } else if (value.toUpperCase() == "MATRIX") {
        $("#matrixcollapse").slideToggle();
    } else if (value.toUpperCase() == "MULTIPLICATION TABLE") {
        $("#table").slideToggle();
    } else if (value.toUpperCase() == "PARTIAL DIFFERENTIATION") {
        $("#partialdiffcollapse").slideToggle();
    } else if (value.toUpperCase() == "LAPLACE") {
        $("#laplacecollapse").slideDown();
        $("#inverselaplacecollapse").slideUp();
        $("#laplacecollapseit").slideToggle();
    } else if (inp.value.toUpperCase() == "OPERATIONS ON FRACTIONS") {
        $("#fractions").slideToggle();
    } else if (value.toUpperCase() == "SHAPES") {
        $("#shapescal").slideToggle();
    } else if (value.toUpperCase() == "SIMPLE TRIGONOMETRY") {
        $("#simpletrignocollapse").slideToggle();
    } else if (value.toUpperCase() == "INVERSE LAPLACE") {
        $("#laplacecollapse").slideDown();
        $("#inverselaplacecollapse").slideToggle();
        $("#laplacecollapseit").slideUp();
    } else if (inp.value.toUpperCase() == "GRAPH") {
        $("#plotgraph").slideToggle();
    } else if (inp.value.toUpperCase() == "MULTIPLY WITH STEPS") {
        $("#mulsolwithsteps").slideToggle();
    } else if (inp.value.toUpperCase() == "PLAY WITH EQUATIONS") {
        $("#equationssolver").slideToggle();
    } else if (inp.value.toUpperCase() == "ROOTS OF EQUATION") {
        $("#rootsquadratic").slideToggle();
    } else if (inp.value.toUpperCase() == "ROUNDOFF") {
        $("#roundoff").slideToggle();
    } else if (inp.value.toUpperCase() == "LCM") {
        $("#factors").slideToggle();
    } else if (inp.value.toUpperCase() == "HCF") {
        $("#factors").slideToggle();
    } else if (inp.value.toUpperCase() == "TRIGONOMETRIC VALUES") {
        $("#trigonovaluestable").slideToggle();
    } else if(inp.value.toUpperCase() == "MATHEMATICAL REASONING"){
        $("#math").slideToggle();
    } else if (inp.value.toUpperCase() == "TRIGONOMETRIC IDENTITIES") {
        $("#trigonoiden").slideToggle();
    } else if (inp.value.toUpperCase() == "EUCLID GEOMETRY") {
        $("#euclid").slideToggle(); 
    } else if (inp.value.toUpperCase() == "UNIT CONVERTER") {
        $("#unitconcal").slideToggle();
    } else if (inp.value.toUpperCase() == "SPI CONVERTER") {
        $("#spiconcal").slideToggle();
    } else if (inp.value.toUpperCase() == "OPEARTIONS ON SETS") {
        $("#setop").slideToggle();     
    } else if (inp.value.toUpperCase() == "ROMAN TO ARABIC") {
        document.getElementById('romaracov').click();
    } else if (inp.value.toUpperCase() == "ARABIC TO ROMAN") {
        document.getElementById('romaracov').click();
    } else if (inp.value.toUpperCase() == "ASCENDING ORDER") {
        document.getElementById('order').click();
    } else if (inp.value.toUpperCase() == "DESCENDING ORDER") {
        document.getElementById('order').click();
    } else if (inp.value.toUpperCase() == "CONVERSION TO WORDS") {
        document.getElementById('covtowords').click();
    }
    else if(inp.value.toUpperCase() == "MATHEMATICAL REASONING"){
        document.getElementById('math').click(); 
    } else if(inp.value.toUpperCase() == "EUCLID GEOMETRY"){
        document.getElementById('euclid').click(); 
    }
    else if(inp.value.toUpperCase() == "OPERATIONS ON SETS"){
        document.getElementById('setop').click(); 
    }
    else if(inp.value.toUpperCase() == "INVERSE AND PERIODICITY OF FUNCTIONS"){
        document.getElementById('ip').click(); 
    }
    else if (inp.value.toUpperCase() == "INVERSE AND PERIODICITY OF FUNCTIONS") {
        $("#ip").slideToggle(); 
    } 
    else if(inp.value.toUpperCase() == "TRIGONOMETRIC FUNCTIONS"){
        document.getElementById('trigonofun').click(); 
    }
    else if (inp.value.toUpperCase() == "TRIGONOMETRIC FUNCTIONS") {
        $("#trigonofun").slideToggle(); 
    } 
    else if(inp.value.toUpperCase() == "TRANSFORMATION OF FUNCTIONS"){
        document.getElementById('trans').click(); 
    }
    else if (inp.value.toUpperCase() == "TRANSFORMATION OF FUNCTIONS") {
        $("#trans").slideToggle(); 
    }
    else if (inp.value.toUpperCase() == "CHI-SQUARE TEST") {
        $("#chitest").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "BETA GAMMA FUNCTIONS"){
        document.getElementById('betagamma').click(); 
    }
    else if (inp.value.toUpperCase() == "BETA GAMMA FUNCTIONS") {
        $("#betagamma").slideToggle(); 
    } 
    else if(inp.value.toUpperCase() == "3-D GEOMETRY CALCULATOR"){
        document.getElementById('3dgeocalc').click(); 
    }
    else if (inp.value.toUpperCase() == "3-D GEOMETRY CALCULATOR") {
        $("#3dgeocalc").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "Z TEST"){
        document.getElementById('ztest').click(); 
    }
    else if (inp.value.toUpperCase() == "Z TEST") {
        $("#ztest").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "CONTOUR INTEGRATION"){
        document.getElementById('ci').click(); 
    }
    else if (inp.value.toUpperCase() == "CONTOUR INTEGRATION") {
        $("#ci").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "SIEVE OF ERATOSTHENES"){
        document.getElementById('sieve').click(); 
    }
    else if (inp.value.toUpperCase() == "SIEVE OF ERATOSTHENES") {
        $("#sieve").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "BINOMIAL COEFFICIENT CALCULATOR"){
        document.getElementById('binomialcoeff').click(); 
    }
    else if (inp.value.toUpperCase() == "BINOMIAL COEFFICIENT CALCULATOR") {
        $("#binomialcoeff").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "BAYES PROBABILITY THEOREM"){
        document.getElementById('bayes-probabilitycollapse').click(); 
    }
    else if (inp.value.toUpperCase() == "BAYES PROBABILITY THEOREM") {
        $("#bayes-probabilitycollapse").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "HYPERGEOMETRIC DISTRIBUTION P.M.F CALCULATOR"){
        document.getElementById('hypergeos').click(); 
    }
    else if (inp.value.toUpperCase() == "HYPERGEOMETRIC DISTRIBUTION P.M.F CALCULATOR") {
        $("#hypergeos").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "POISSON DISTRIBUTION STATISTICS"){
        document.getElementById('vpds').click(); 
    }
    else if (inp.value.toUpperCase() == "POISSON DISTRIBUTION STATISTICS") {
        $("#vpds").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "HYPERGEOMETRIC DISTRIBUTION STATISTICS"){
        document.getElementById('hypergeomeans').click(); 
    }
    else if (inp.value.toUpperCase() == "HYPERGEOMETRIC DISTRIBUTION STATISTICS") {
        $("#hypergeomeans").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "GEOMETRIC PROBABILITY DISTRIBUTION"){
        document.getElementById('geoprobability').click(); 
    }
    else if (inp.value.toUpperCase() == "GEOMETRIC PROBABILITY DISTRIBUTION") {
        $("#geoprobability").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "PERCENTILE RANK CALCULATOR"){
        document.getElementById('rankcals').click(); 
    }
    else if (inp.value.toUpperCase() == "PERCENTILE RANK CALCULATOR") {
        $("#rankcals").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "P/B/H TRIGO"){
        document.getElementById('simpletrignocollapse').click(); 
    }
    else if (inp.value.toUpperCase() == "P/B/H TRIGO") {
        $("#simpletrignocollapse").slideToggle(); 
    } 
    else if(inp.value.toUpperCase() == "TRIGONOMETRIC IDENTITES"){
        document.getElementById('trigonoiden').click(); 
    }
    else if (inp.value.toUpperCase() == "TRIGONOMETRIC IDENTITES") {
        $("#trigonoiden").slideToggle(); 
    } 
    else if(inp.value.toUpperCase() == "INVERSE TRIGONOMETRIC IDENTITIES"){
        document.getElementById('inversetrigonoiden').click(); 
    }
    else if (inp.value.toUpperCase() == "INVERSE TRIGONOMETRIC IDENTITIES") {
        $("#inversetrigonoiden").slideToggle(); 
    } 
    else if(inp.value.toUpperCase() == "EXPANSION OF FUNCTIONS"){
        document.getElementById('expansion').click(); 
    }
    else if (inp.value.toUpperCase() == "EXPANSION OF FUNCTIONS") {
        $("#expansion").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "CIRCLE"){
        document.getElementById('circlecollapse').click(); 
    }
    else if (inp.value.toUpperCase() == "CIRCLE") {
        $("#circlecollapse").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "SQAURE AND CUBE CALCULATOR"){
        document.getElementById('squarecube').click(); 
    }
    else if (inp.value.toUpperCase() == "SQAURE AND CUBE CALCULATOR") {
        $("#squarecube").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "IMPROPER TO PROPER INTEGRAL"){
        document.getElementById('imprtopr').click(); 
    }
    else if (inp.value.toUpperCase() == "IMPROPER TO PROPER INTEGRAL") {
        $("#imprtopr").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "ELLIPSE"){
        document.getElementById('ellipsecollapse').click(); 
    }
    else if (inp.value.toUpperCase() == "ELLIPSE") {
        $("#ellipsecollapse").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "SIEVE OF ERATOSTHENES"){
        document.getElementById('sieve').click(); 
    }
    else if (inp.value.toUpperCase() == "SIEVE OF ERATOSTHENES") {
        $("#sieve").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "BETA FUNCTION CALCULATOR"){
        document.getElementById('beta').click(); 
    }
    else if (inp.value.toUpperCase() == "BETA FUNCTION CALCULATOR") {
        $("#beta").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "HYPERBOLA"){
        document.getElementById('hyperbolacollapse').click(); 
    }
    else if (inp.value.toUpperCase() == "HYPERBOLA") {
        $("#hyperbolacollapse").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "PARABOLA"){
        document.getElementById('parabolacollapse').click(); 
    }
    else if (inp.value.toUpperCase() == "PARABOLA") {
        $("#parabolacollapse").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "ACKERMANN FUNCTION"){
        document.getElementById('ackermann').click(); 
    }
    else if (inp.value.toUpperCase() == "ACKERMANN FUNCTION") {
        $("#ackermann").slideToggle(); 
    }  
    else if(inp.value.toUpperCase() == "MODULO CALCULATOR"){
        document.getElementById('modulo').click(); 
    }
    else if (inp.value.toUpperCase() == "MODULO CALCULATOR") {
        $("#modulo").slideToggle(); 
    } 
     else if(inp.value.toUpperCase() == "EXPONENTIAL GROWTH CALCULATOR"){
        document.getElementById('expgrwths').click(); 
    }
    else if (inp.value.toUpperCase() == "EXPONENTIAL GROWTH CALCULATOR") {
        $("#expgrwths").slideToggle(); 
    }
      else if(inp.value.toUpperCase() == "ABUNDANT NUMBER"){
        document.getElementById('abundants').click(); 
    }
    else if (inp.value.toUpperCase() == "ABUNDANT NUMBER") {
        $("#abundants").slideToggle(); 
    }
      else if(inp.value.toUpperCase() == "FOIL CALCULATOR"){
        document.getElementById('foil').click(); 
    }
    else if (inp.value.toUpperCase() == "FOIL CALCULATOR") {
        $("#foil").slideToggle(); 
    } 
     else if(inp.value.toUpperCase() == "BINOMIAL EXPRESSION MULTIPLICATION"){
        document.getElementById('binoexpcollapse').click(); 
    }
    else if (inp.value.toUpperCase() == "BINOMIAL EXPRESSION MULTIPLICATION") {
        $("#binoexpcollapse").slideToggle(); 
    } 
     else if(inp.value.toUpperCase() == "SUM OF DIVISORS"){
        document.getElementById('sumDiv').click(); 
    }
    else if (inp.value.toUpperCase() == "SUM OF DIVISORS") {
        $("#sumDiv").slideToggle(); 
    }
      else if(inp.value.toUpperCase() == "HEIGHT AND DISTANCE"){
        document.getElementById('height1').click(); 
    }
    else if (inp.value.toUpperCase() == "HEIGHT AND DISTANCE") {
        $("#height1").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "ALIQUOT SUMS"){
        document.getElementById('ali').click(); 
    }
    else if (inp.value.toUpperCase() == "ALIQUOT SUMS") {
        $("#ali").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "IMPORTANT SERIES AND SEQUENCES"){
        document.getElementById('impse').click(); 
    }
    else if (inp.value.toUpperCase() == "IMPORTANT SERIES AND SEQUENCES") {
        $("#impse").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "SOLVE FOR X"){
        document.getElementById('slvxs').click(); 
    }
    else if (inp.value.toUpperCase() == "SOLVE FOR X") {
        $("#slvxs").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "DOUBLING TIME"){
        document.getElementById('dbltime').click(); 
    }
    else if (inp.value.toUpperCase() == "DOUBLING TIME") {
        $("#dbltime").slideToggle(); 
    }
    
    else if(inp.value.toUpperCase() == "HALF LIFE CALCULATOR"){
        document.getElementById('halflife').click(); 
    }
    else if (inp.value.toUpperCase() == "HALF LIFE CALCULATOR") {
        $("#halflife").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "ROOTS OF UNITY CALCULATOR"){
        document.getElementById('rootsunity').click(); 
    }
    else if (inp.value.toUpperCase() == "ROOTS OF UNITY CALCULATOR") {
        $("#rootsunity").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "POWER SERIES"){
        document.getElementById('pows').click(); 
    }
    else if (inp.value.toUpperCase() == "POWER SERIES") {
        $("#pows").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "INTEREST(SIMPLE,COMPOUND)"){
        document.getElementById('interest').click(); 
    }
    else if (inp.value.toUpperCase() == "INTEREST(SIMPLE,COMPOUND)") {
        $("#interest").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "INTEREST(SIMPLE,COMPOUND)"){
        document.getElementById('interest').click(); 
    }
    else if (inp.value.toUpperCase() == "COST AND SELLING PRICES") {
        $("#prices").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "COST AND SELLING PRICES"){
        document.getElementById('prices').click(); 
    }
    else if (inp.value.toUpperCase() == "SETS,RELATIONS AND FUNCTIONS") {
        $("#srf").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "SETS,RELATIONS AND FUNCTIONS"){
        document.getElementById('srf').click(); 
    }
    else if (inp.value.toUpperCase() == "SETS FORMULAS LIST") {
        $("#setformula").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "SETS FORMULAS LIST"){
        document.getElementById('setformula').click(); 
    }
    else if (inp.value.toUpperCase() == "PROPERTIES OF MATRICES AND DETERMINANTS") {
        $("#matrixprops").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "PROPERTIES OF MATRICES AND DETERMINANTS"){
        document.getElementById('matrixprops').click(); 
    }
    else if (inp.value.toUpperCase() == "CAYLEY HAMILTON THEOREM AND DIAGONALIZATION") {
        $("#cay").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "CAYLEY HAMILTON THEOREM AND DIAGONALIZATION"){
        document.getElementById('cay').click(); 
    }
    else if (inp.value.toUpperCase() == "INTEGRATION FORMULAE") {
        $("#integration-idencollapse").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "INTEGRATION FORMULAE"){
        document.getElementById('integration-idencollapse').click(); 
    }
    else if (inp.value.toUpperCase() == "DEFINITE INTEGRATION FORMULAE") {
        $("#defintegration-idencollapse").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "DEFINITE INTEGRATION FORMULAE"){
        document.getElementById('defintegration-idencollapse').click(); 
    }
    else if (inp.value.toUpperCase() == "DIFFERENTIAL EQUATIONS") {
        $("#diffeqn").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "DIFFERENTIAL EQUATIONS"){
        document.getElementById('diffeqn').click(); 
    }
    else if (inp.value.toUpperCase() == "CONVERGENCE AND DIVERGENCE OF SERIES") {
        $("#convdiv").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "CONVERGENCE AND DIVERGENCE OF SERIES"){
        document.getElementById('convdiv').click(); 
    }
    else if (inp.value.toUpperCase() == "HYPERBOLIC TRIGONOMETRIC IDENTITIES") {
        $("#hyptrigonoiden").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "HYPERBOLIC TRIGONOMETRIC IDENTITIES"){
        document.getElementById('hyptrigonoiden').click(); 
    }
    else if (inp.value.toUpperCase() == "GENERAL SOLUTION OF TRIGONOMETRIC EQUATIONS") {
        $("#trigsolcollapse").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "GENERAL SOLUTION OF TRIGONOMETRIC EQUATIONS"){
        document.getElementById('trigsolcollapse').click(); 
    }
    else if (inp.value.toUpperCase() == "SOLUTION OF TRIANGLES") {
        $("#solutiontri").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "SOLUTION OF TRIANGLES"){
        document.getElementById('solutiontri').click(); 
    }
    else if (inp.value.toUpperCase() == "SUM AND DIFFERENCE OF TRIGNOMETRIC FUNCTION") {
        clearmain()
        $("#sumAndDiffTri").slideDown();    
    }
    else if(inp.value.toUpperCase() == "SUM AND DIFFERENCE OF TRIGNOMETRIC FUNCTION"){
        clearmain()
        document.getElementById('sumAndDiffTri').click();
    } 
    else if (inp.value.toUpperCase() == "GREATEST INTEGER FUNCTION AND FRACTIONAL PART") {
        $("#giff").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "GREATEST INTEGER FUNCTION AND FRACTIONAL PART"){
        document.getElementById('giff').click(); 
    }
    else if (inp.value.toUpperCase() == "QUARTILES") {
        $("#qrtl").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "QUARTILES"){
        document.getElementById('qrtl').click(); 
    }
    else if (inp.value.toUpperCase() == "DECILES") {
        $("#decl").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "DECILES"){
        document.getElementById('decl').click(); 
    }
    else if (inp.value.toUpperCase() == "WORK AND TIME CALCULATOR") {
        $("#wandt").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "WORK AND TIME CALCULATOR"){
        document.getElementById('wandt').click(); 

    }
    else if (inp.value.toUpperCase() == "SOLVE FOR EXPONENTS") {
        $("#expo").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "SOLVE FOR EXPONENTS"){
        document.getElementById('expo').click(); 
    }
    else if (inp.value.toUpperCase() == "PERCENTAGE CALCULATOR") {
        $("#percal").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "PERCENTAGE CALCULATOR"){
        document.getElementById('percal').click(); 
    }
    else if(inp.value.toUpperCase() == "DESARGUES THEOREM"){
        document.getElementById('des').click(); 
    }
    else if (inp.value.toUpperCase() == "DESARGUES THEOREM") {
        $("#des").slideToggle(); 
    }    
    else if(inp.value.toUpperCase() == "DRICHLET THEOREM"){
        document.getElementById('dri').click(); 
    }
    else if (inp.value.toUpperCase() == "DRICHLET THEOREM") {
        $("#dri").slideToggle(); 
    }
    else if (inp.value.toUpperCase() == "STANDARD DEVIATION") {
        $("#deviation").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "STANDARD DEVIATION"){
        document.getElementById('deviation').click(); 
    }
    else if (inp.value.toUpperCase() == "PRIME NUMBERS") {
        $("#prime").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "PRIME NUMBERS"){
        document.getElementById('prime').click(); 
    }  
    else if (inp.value.toUpperCase() == "CURRENCY CONVERTOR") {
        $("#curconcal").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "SPI/CGPA CONVERTOR"){
        document.getElementById('spiconcal').click(); 
    }
    else if (inp.value.toUpperCase() == "SPI/CGPA CONVERTOR") {
        $("#spiconcal").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "DATE"){
        document.getElementById('datecal').click(); 
    }
    else if (inp.value.toUpperCase() == "DATE") {
        $("#datecal").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "TYPES OF NUMBERS"){
        document.getElementById('typenum').click(); 
    }
    else if (inp.value.toUpperCase() == "TYPES OF NUMBERS") {
        $("#typenum").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "EUCLID GCD"){
        document.getElementById('gcd').click(); 
    }
    else if (inp.value.toUpperCase() == "EUCLID GCD") {
        $("#gcd").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "CAUCHY INTEGRAL,LIOUVILLE AND ROUCHE THEOREM"){
        document.getElementById('clr').click(); 
    }
    else if (inp.value.toUpperCase() == "CAUCHY INTEGRAL,LIOUVILLE AND ROUCHE THEOREM") {
        $("#clr").slideToggle(); 
    }

    else if(inp.value.toUpperCase() == "REPRESENTATION BY POWER SERIES"){
        document.getElementById('repp').click(); 
    }
    else if (inp.value.toUpperCase() == "REPRESENTATION BY POWER SERIES") {
        $("#repp").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "EMI CALCULATOR"){
        document.getElementById('emical').click(); 
    }
    else if (inp.value.toUpperCase() == "EMI CALCULATOR") {
        $("#emical").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "ENNEADECAGON CALCULATOR"){
        document.getElementById('enneadecagon').click(); 
    }
    else if (inp.value.toUpperCase() == "ENNEADECAGON CALCULATOR") {
        $("#enneadecagon").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "GST CALCULATOR"){
        document.getElementById('gstcal').click(); 
    }
    else if (inp.value.toUpperCase() == "GST CALCULATOR") {
        $("#gstcal").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "SET CALCULATOR"){
        document.getElementById('setcal').click(); 
    }
    else if (inp.value.toUpperCase() == "SET CALCULATOR") {
        $("#setcal").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "POLYNOMIAL DEGREE"){
        document.getElementById('degcal').click(); 
    }
    else if (inp.value.toUpperCase() == "POLYNOMIAL DEGREE") {
        $("#degcal").slideToggle(); 
    }

    else if(inp.value.toUpperCase() == "HYDROSTATIC PRESSURE"){
        document.getElementById('hydroz').click(); 
    }
    else if (inp.value.toUpperCase() == "HYDROSTATIC PRESSURE") {
        $("#hydroz").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "MEAN CALCULATOR"){
        document.getElementById('mean').click(); 
    }
    else if (inp.value.toUpperCase() == "MEAN CALCULATOR") {
        $("#mean").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "COORDINATE GEOMETRY CALCULATOR"){
        document.getElementById('analytical').click(); 
    }
    else if (inp.value.toUpperCase() == "COORDINATE GEOMETRY CALCULATOR") {
        $("#analytical").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "COORDINATE GEOMETRY FORMULA AND THEOREM"){
        document.getElementById('corgeo').click(); 
    }
    else if (inp.value.toUpperCase() == "COORDINATE GEOMETRY FORMULA AND THEOREM") {
        $("#corgeo").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "STATISTICS FORMULAE"){
        document.getElementById('stats').click(); 
    }
    else if (inp.value.toUpperCase() == "STATISTICS FORMULAE") {
        $("#stats").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "P CHART CALCULATOR"){
        document.getElementById('pchart').click(); 
    }
    else if (inp.value.toUpperCase() == "P CHART CALCULATOR") {
        $("#pchart").slideToggle(); 
    }else if(inp.value.toUpperCase() == "MIDRANGE CALCULATOR"){
        document.getElementById('midrange').click(); 
    }
    else if (inp.value.toUpperCase() == "MIDRANGE CALCULATOR") {
        $("#midrange").slideToggle(); 
    }else if(inp.value.toUpperCase() == "SENSITIVITY AND SPECIFICITY"){
        document.getElementById('sensi').click(); 
    }
    else if (inp.value.toUpperCase() == "SENSITIVITY AND SPECIFICITY") {
        $("#sensi").slideToggle(); 
    }else if(inp.value.toUpperCase() == "T-TEST"){
        document.getElementById('ttest').click(); 
    }
    else if (inp.value.toUpperCase() == "T-TEST") {
        $("#ttest").slideToggle(); 
    }else if(inp.value.toUpperCase() == "AB-TEST"){
        document.getElementById('abtest').click(); 
    }
    else if (inp.value.toUpperCase() == "AB-TEST") {
        $("#abtest").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "LEAP YEAR"){
        document.getElementById('lyear').click(); 
    }
    else if (inp.value.toUpperCase() == "LEAP YEAR") {
        $("#lyear").slideToggle(); 
    }

    else if(inp.value.toUpperCase() == "IMPORTANT GRAPH CALCULATORS"){
        document.getElementById('igc').click(); 
    }
    else if (inp.value.toUpperCase() == "IMPORTANT GRAPH CALCULATORS") {
        $("#igc").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "MANHATTAN DISTANCE CALCULATOR"){
        document.getElementById('manhats').click(); 
    }
    else if (inp.value.toUpperCase() == "MANHATTAN DISTANCE CALCULATOR") {
        $("#manhats").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "CARTESIAN COORDINATE CALCULATOR"){
        document.getElementById('cart').click();
    }
    else if (inp.value.toUpperCase() == "CARTESIAN COORDINATE CALCULATOR") {
        $("#cart").slideToggle();    
    }
    else if(inp.value.toUpperCase() == "BILINEAR INTERPOLATION CALCULATOR"){
        document.getElementById('bilinear').click(); 
    }
    else if (inp.value.toUpperCase() == "BILINEAR INTERPOLATION CALCULATOR") {
        $("#bilinear").slideToggle(); 
    }

    else if(inp.value.toUpperCase() == "EULER TOTIENT FUNCTION"){
        document.getElementById('etf').click(); 
    }
    else if (inp.value.toUpperCase() == "EULER TOTIENT FUNCTION") {
        $("#etf").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "UNIT RATE CALCULATOR"){
        document.getElementById('utcs').click(); 
    }
    else if (inp.value.toUpperCase() == "UNIT RATE CALCULATOR") {
        $("#utcs").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "RANK CALCULATOR"){
        document.getElementById('rankcal').click(); 
    }
    else if (inp.value.toUpperCase() == "RANK CALCULATOR") {
        $("#rankcal").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "PYTHAGOREAN TRIPLETS"){
        document.getElementById('pythtriple').click(); 
    }
    else if (inp.value.toUpperCase() == "PYTHAGOREAN TRIPLETS") {
        $("#pythtriple").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "EULER TOTIENT CALCULATOR"){
        document.getElementById('etc').click(); 
    }
    else if (inp.value.toUpperCase() == "EULER TOTIENT CALCULATOR") {
        $("#etc").slideToggle(); 
    }

    else if(inp.value.toUpperCase() == "PROFIT/LOSS CALCULATIONS"){
        document.getElementById('profitloss').click(); 
    }
    else if (inp.value.toUpperCase() == "PROFIT/LOSS CALCULATIONS") {
        $("#profitloss").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "LCM/HCF/FACTORS"){
        document.getElementById('factors').click(); 
    }
    else if (inp.value.toUpperCase() == "LCM/HCF/FACTORS") {
        $("#factors").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "EXCESS-3 CODE CONVERTOR"){
        document.getElementById('ex3').click(); 
    }
    else if (inp.value.toUpperCase() == "EXCESS-3 CODE CONVERTOR") {
        $("#ex3").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "LINEAR REGRESSION CALCULATOR"){
        document.getElementById('lrcs').click(); 
    }
    else if (inp.value.toUpperCase() == "LINEAR REGRESSION CALCULATOR") {
        $("#lrcs").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "COVARIANCE CALCULATOR"){
        document.getElementById('covs').click(); 
    }
    else if (inp.value.toUpperCase() == "COVARIANCE CALCULATOR") {
        $("#covs").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "SKEWNESS CALCULATOR"){
        document.getElementById('skews').click(); 
    }
    else if (inp.value.toUpperCase() == "SKEWNESS CALCULATOR") {
        $("#skews").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "IMPROPER TO MIXED FRACTION"){
        document.getElementById('impfixs').click(); 
    }
    else if (inp.value.toUpperCase() == "IMPROPER TO MIXED FRACTION") {
        $("#impfixs").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "SUPPLEMENTARY ANGLE CALCULATOR"){
        document.getElementById('suppangs').click(); 
    }
    else if (inp.value.toUpperCase() == "SUPPLEMENTARY ANGLE CALCULATOR") {
        $("#suppangs").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "COMPLEMENTARY ANGLE CALCULATOR"){
        document.getElementById('compang').click(); 
    }
    else if (inp.value.toUpperCase() == "COMPLEMENTARY ANGLE CALCULATOR") {
        $("#compang").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "COTERMINAL ANGLE CALCULATOR"){
        document.getElementById('cotermang').click(); 
    }
    else if (inp.value.toUpperCase() == "COTERMINAL ANGLE CALCULATOR") {
        $("#cotermang").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "SSS TRIANGLE'S ANGLE CALCULATOR"){
        document.getElementById('ssts').click(); 
    }
    else if (inp.value.toUpperCase() == "SSS TRIANGLE'S ANGLE CALCULATOR") {
        $("#ssts").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "CEVA'S AND THALES' THEOREM"){
        document.getElementById('cevtha').click(); 
    }
    else if (inp.value.toUpperCase() == "CEVA'S AND THALES' THEOREM") {
        $("#cevtha").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "PROPERTIES OF CIRCLES"){
        document.getElementById('propcircle').click(); 
    }
    else if (inp.value.toUpperCase() == "PROPERTIES OF CIRCLES") {
        $("#propcircle").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "TRIANGLE CALCULATOR"){
        document.getElementById('centcal').click(); 
    }
    else if (inp.value.toUpperCase() == "TRIANGLE CALCULATOR") {
        $("#centcal").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "2-D SHAPES INSCRIBED"){
        document.getElementById('2d-shape-ins').click(); 
    }
    else if (inp.value.toUpperCase() == "2-D SHAPES INSCRIBED") {
        $("#2d-shape-ins").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "3-D SHAPES INSCRIBED"){
        document.getElementById('shapeinscribed').click(); 
    }
    else if (inp.value.toUpperCase() == "3-D SHAPES INSCRIBED") {
        $("#shapeinscribed").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "PROPERTIES OF QUADRILATERALS"){
        document.getElementById('propquad').click(); 
    }
    else if (inp.value.toUpperCase() == "PROPERTIES OF QUADRILATERALS") {
        $("#propquad").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "ARC LENGTH CALCULATOR"){
        document.getElementById('arcs').click(); 
    }
    else if (inp.value.toUpperCase() == "ARC LENGTH CALCULATOR") {
        $("#arcs").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "PARABOLOID"){
        document.getElementById('parab').click(); 
    }
    else if (inp.value.toUpperCase() == "PARABOLOID") {
        $("#parab").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "VOLUME, CSA, TSA"){
        document.getElementById('3d-solid').click(); 
    }
    else if (inp.value.toUpperCase() == "VOLUME, CSA, TSA") {
        $("#3d-solid").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "PERCENTAGE CHANGE IN VOLUME CALCULATOR"){
        document.getElementById('per_chng_vol').click(); 
    }
    else if (inp.value.toUpperCase() == "PERCENTAGE CHANGE IN VOLUME CALCULATOR") {
        $("#per_chng_vol").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "CONGRUENCE AND SIMILARITY OF TRIANGLES"){
        document.getElementById('consim').click(); 
    }
    else if (inp.value.toUpperCase() == "CONGRUENCE AND SIMILARITY OF TRIANGLES") {
        $("#consim").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "TYPES OF RELATIONS"){
        document.getElementById('relationtypes').click(); 
    }
    else if (inp.value.toUpperCase() == "TYPES OF RELATIONS") {
        $("#relationtypes").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "CRAMERS RULE CALCULATOR"){
        document.getElementById('cramer').click(); 
    }
    else if (inp.value.toUpperCase() == "CRAMERS RULE CALCULATOR") {
        $("#cramer").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "SIEVE OF ERATOSTHENES"){
        document.getElementById('sieve').click(); 
    }
    else if (inp.value.toUpperCase() == "SIEVE OF ERATOSTHENES") {
        $("#sieve").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "NAME OF 3D SHAPES"){
        document.getElementById('3d-shape').click(); 
    }
    else if (inp.value.toUpperCase() == "NAME OF 3D SHAPES") {
        $("#3d-shape").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "DESARGUES THEOREM"){
        document.getElementById('des').click(); 
    }
    else if (inp.value.toUpperCase() == "DESARGUES THEOREM") {
        $("#des").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "GOLDEN RATIO CALCULATOR"){
        document.getElementById('goldr').click(); 
    }
    else if (inp.value.toUpperCase() == "GOLDEN RATIO CALCULATOR") {
        $("#goldr").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "GOLDEN RECTANGLE CALCULATOR"){
        document.getElementById('goldrec').click(); 
    }
    else if (inp.value.toUpperCase() == "GOLDEN RECTANGLE CALCULATOR") {
        $("#goldrec").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "CROSS MULTIPLICATION CALCULATOR"){
        document.getElementById('cross').click(); 
    }
    else if (inp.value.toUpperCase() == "CROSS MULTIPLICATION CALCULATOR") {
        $("#cross").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "DIAMOND PROBLEM CALCULATOR"){
        document.getElementById('diamond').click(); 
    }
    else if (inp.value.toUpperCase() == "DIAMOND PROBLEM CALCULATOR") {
        $("#diamond").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "F-TEST"){
        document.getElementById('ftest').click(); 
    }
    else if (inp.value.toUpperCase() == "F-TEST") {
        $("#ftest").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "CATALAN NUMBERS"){
        document.getElementById('catNum').click(); 
    }
    else if (inp.value.toUpperCase() == "CATALAN NUMBERS") {
        $("#catNum").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "EUCLID GCD"){
        document.getElementById('gcd').click(); 
    }
    else if (inp.value.toUpperCase() == "EUCLID GCD") {
        $("#gcd").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "NEXT PRIME NUMBER"){
        document.getElementById('nextPrime').click(); 
    }
    else if (inp.value.toUpperCase() == "NEXT PRIME NUMBER") {
        $("#nextPrime").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "DOUBLE FACTORIAL"){
        document.getElementById('dblFact').click(); 
    }
    else if (inp.value.toUpperCase() == "DOUBLE FACTORIAL") {
        $("#dblFact").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "SMALLEST PRIME FACTOR"){
        document.getElementById('smPrime').click(); 
    }
    else if (inp.value.toUpperCase() == "SMALLEST PRIME FACTOR") {
        $("#smPrime").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "SUM OF N TERMS OF AP,GP & HP"){
        document.getElementById('sum_n').click(); 
    }
    else if (inp.value.toUpperCase() == "SUM OF N TERMS OF AP,GP & HP") {
        $("#sum_n").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "CONDITIONAL PROBABILITY"){
        document.getElementById('condprobability').click(); 
    }
    else if (inp.value.toUpperCase() == "CONDITIONAL PROBABILITY") {
        $("#condprobability").slideToggle(); 
    }
    else if (inp.value.toUpperCase() == "ADDITIVE INVERSE") {
        $("ais").slideToggle();    
    }
    else if(inp.value.toUpperCase() == "ADDITIVE INVERSE"){
        document.getElementById('#ais').click();
    }
    else if(inp.value.toUpperCase() == "CONFIDENCE INTERVAL CALCULATOR"){
        document.getElementById('confi-inter').click(); 
    }
    else if (inp.value.toUpperCase() == "CONFIDENCE INTERVAL CALCULATOR") {
        $("#confi-inter").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "JOINT PROBABILITY"){
        document.getElementById('joint-probabilitycollapse').click(); 
    }
    else if (inp.value.toUpperCase() == "JOINT PROBABILITY") {
        $("#joint-probabilitycollapse").slideToggle(); 
    }
    else if (inp.value.toUpperCase() == "INDEPENDENT AND DEPENDENT EVENT PROBABILITY") {
        $("#idevent").slideToggle();    
    }
    else if(inp.value.toUpperCase() == "INDEPENDENT AND DEPENDENT EVENT PROBABILITY"){
        document.getElementById('idevent').click();
    }
    else if(inp.value.toUpperCase() == "BINOMIAL DISTRIBUTION CALCULATOR"){
        document.getElementById('bpmfs').click(); 
    }
    else if (inp.value.toUpperCase() == "BINOMIAL DISTRIBUTION CALCULATOR") {
        $("#bpmfs").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "POISSON DISTRIBUTION CALCULATOR"){
        document.getElementById('bpmfs').click(); 
    }
    else if (inp.value.toUpperCase() == "POISSON DISTRIBUTION CALCULATOR") {
        $("#bpmfs").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "INVERSE HYPERBOLIC TRIGONOMETRIC IDENTITIES"){
        document.getElementById('invhyptrigonoiden').click(); 
    }
    else if (inp.value.toUpperCase() == "INVERSE HYPERBOLIC TRIGONOMETRIC IDENTITIES") {
        $("#invhyptrigonoiden").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "DE-MOIVRES THEOREM AND CAUCHY-REIMAAN THEOREM"){
        document.getElementById('theo').click(); 
    }
    else if (inp.value.toUpperCase() == "DE-MOIVRES THEOREM AND CAUCHY-REIMAAN THEOREM") {
        $("#theo").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "MILNE THOMSON METHOD"){
        document.getElementById('mtm').click(); 
    }
    else if (inp.value.toUpperCase() == "MILNE THOMSON METHOD") {
        $("#mtm").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "RESIDUE METHODS"){
        document.getElementById('res1').click(); 
    }
    else if (inp.value.toUpperCase() == "RESIDUE METHODS") {
        $("#res1").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "BIN/DEC/OCT/HEX CONVERTER"){
        document.getElementById('binary-hexadecimal').click(); 
    }
    else if (inp.value.toUpperCase() == "BIN/DEC/OCT/HEX CONVERTER") {
        $("#binary-hexadecimal").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "ANY BASE TO ANY BASE CONVERTER"){
        document.getElementById('anyBase').click(); 
    }
    else if (inp.value.toUpperCase() == "ANY BASE TO ANY BASE CONVERTER") {
        $("#anyBase").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "ADDITION OF ANY NUMBER SYSTEM"){
        document.getElementById('adding-all').click(); 
    }
    else if (inp.value.toUpperCase() == "ADDITION OF ANY NUMBER SYSTEM") {
        $("#adding-all").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "SUBTRACTION OF ANY NUMBER SYSTEM"){
        document.getElementById('subtract-all').click(); 
    }
    else if (inp.value.toUpperCase() == "SUBTRACTION OF ANY NUMBER SYSTEM") {
        $("#subtract-all").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "MULTIPLICATION OF ANY NUMBER SYSTEM"){
        document.getElementById('multiplying-all').click(); 
    }
    else if (inp.value.toUpperCase() == "MULTIPLICATION OF ANY NUMBER SYSTEM") {
        $("multiplying-all").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "FACTORIAL"){
        document.getElementById('factorial').click(); 
    }
    else if (inp.value.toUpperCase() == "FACTORIAL") {
        $("#factorial").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "PERMUTATION AND COMBINATION"){
        document.getElementById('pandc').click(); 
    }
    else if (inp.value.toUpperCase() == "PERMUTATION AND COMBINATION") {
        $("#pandc").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "Z SCORE CALCULATOR"){
        document.getElementById('zscores').click(); 
    }
    else if (inp.value.toUpperCase() == "Z SCORE CALCULATOR") {
        $("#zscores").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "WEIGHTED MEAN CALCULATOR"){
        document.getElementById('wmcs').click(); 
    }
    else if (inp.value.toUpperCase() == "WEIGHTED MEAN CALCULATOR") {
        $("#wmcs").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "LOGARITHM CALCULATOR"){
        document.getElementById('log_values').click(); 
    }
    else if (inp.value.toUpperCase() == "LOGARITHM CALCULATOR") {
        $("#log_values").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "VOLUMETRIC WEIGHT CALCULATOR"){
        document.getElementById('volume').click(); 
    }
    else if (inp.value.toUpperCase() == "VOLUMETRIC WEIGHT CALCULATOR") {
        $("#volume").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "BINOMIAL THEOREM PROPERTIES"){
        document.getElementById('bt-collapse').click(); 
    }
    else if (inp.value.toUpperCase() == "BINOMIAL THEOREM PROPERTIES") {
        $("#bt-collapse").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "BCD CODE CONVERTER"){
        document.getElementById('bcd').click(); 
    }
    else if (inp.value.toUpperCase() == "BCD CODE CONVERTER") {
        $("#bcd").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "2421 CODE CONVERTER"){
        document.getElementById('dec2421').click(); 
    }
    else if (inp.value.toUpperCase() == "2421 CODE CONVERTER") {
        $("#dec2421").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "(R-1) S AND R S COMPLEMENT CALCULATOR"){
        document.getElementById('onetwocom-calc').click(); 
    }
    else if (inp.value.toUpperCase() == "(R-1) S AND R S COMPLEMENT CALCULATOR") {
        $("#onetwocom-calc").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "HAMMING CODE"){
        document.getElementById('hamming-calc').click(); 
    }
    else if (inp.value.toUpperCase() == "HAMMING CODE") {
        $("#hamming-calc").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "HAMMING DISTANCE"){
        document.getElementById('hamming-dist').click(); 
    }
    else if (inp.value.toUpperCase() == "HAMMING DISTANCE") {
        $("#hamming-dist").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "FACTORIZATION"){
        document.getElementById('pairfacts').click(); 
    }
    else if (inp.value.toUpperCase() == "FACTORIZATION") {
        $("#pairfacts").slideToggle(); 
    }
    else if (inp.value.toUpperCase() == "PERFECT SQUARES & CUBES IN A RANGE") {
        $("#squaresRanges").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "PERFECT SQUARES & CUBES IN A RANGE"){
        document.getElementById('squaresRanges').click(); 
    }
    else if (inp.value.toUpperCase() == "ERROR PERCENTAGE CALCULATOR") {
        $("#errpers").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "ERROR PERCENTAGE CALCULATOR"){
        document.getElementById('errpers').click(); 
    }
    else if (inp.value.toUpperCase() == "EFFECTIVE INTEREST RATE") {
        $("#eirs").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "EFFECTIVE INTEREST RATE"){
        document.getElementById('eirs').click(); 
    }
    else if (inp.value.toUpperCase() == "COEFFICIENT OF VARIATION") {
        $("#cvs").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "COEFFICIENT OF VARIATION"){
        document.getElementById('cvs').click(); 
    }
    else if (inp.value.toUpperCase() == "ROOT MEAN SQUARE") {
        $("#rmss").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "ROOT MEAN SQUARE"){
        document.getElementById('rmss').click(); 
    }
    else if (inp.value.toUpperCase() == "SUM OF SQUARE OF GIVEN NUMBER") {
        $("#sosqs").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "SUM OF SQUARE OF GIVEN NUMBER"){
        document.getElementById('sosqs').click(); 
    }
    else if(inp.value.toUpperCase() == "NATURAL NUMBERS"){
        document.getElementById('sosqsn').click(); 
    }
    else if (inp.value.toUpperCase() == "NATURAL NUMBERS") {
        $("#sosqsn").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "MULTIPLICATIVE INVERSE"){
        document.getElementById('mis').click(); 
    }
    else if (inp.value.toUpperCase() == "MULTIPLICATIVE INVERSE") {
        $("#mis").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "VECTOR CALCULUS"){
        document.getElementById('vector').click(); 
    }
    else if (inp.value.toUpperCase() == "VECTOR CALCULUS") {
        $("#vector").slideToggle(); 
    } 
    else if(inp.value.toUpperCase() == "VECTOR ALGEBRA"){
        document.getElementById('vecalg').click(); 
    }
    else if (inp.value.toUpperCase() == "VECTOR ALGEBRA") {
        $("#vecalg").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "DIFFERENTIATION FORMULAE"){
        document.getElementById('differentiate-rulecollapse').click(); 
    }
    else if (inp.value.toUpperCase() == "DIFFERENTIATION FORMULAE") {
        $("#differentiate-rulecollapse").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "DISTANCE BETWEEN INCENTER AND EXCENTER"){
        document.getElementById('incenterexcenter').click(); 
    }
    else if (inp.value.toUpperCase() == "DISTANCE BETWEEN INCENTER AND EXCENTER") {
        $("#incenterexcenter").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "PENTATOPE CALCULATOR"){
        document.getElementById('pentatop').click(); 
    }
    else if (inp.value.toUpperCase() == "PENTATOPE CALCULATOR") {
        $("#pentatop").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == " DISTANCE BETWEEN EXCENTRE AND CIRCUMCENTRE"){
        document.getElementById('excircum').click(); 
    }
    else if (inp.value.toUpperCase() == " DISTANCE BETWEEN EXCENTRE AND CIRCUMCENTRE") {
        $("#excircum").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "GOLDEN AND SILVER RATIO"){
        document.getElementById('golds').click(); 
    }
    else if (inp.value.toUpperCase() == "GOLDEN AND SILVER RATIO") {
        $("#golds").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "BETA FUNCTION CALCULATOR"){
        document.getElementById('beta').click(); 
    }
    else if (inp.value.toUpperCase() == "BETA FUNCTION CALCULATOR") {
        $("#beta").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "GAMMA FUNCTION CALCULATOR"){
        document.getElementById('gamma').click(); 
    }
    else if (inp.value.toUpperCase() == "GAMMA FUNCTION CALCULATOR") {
        $("#gamma").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "VECTOR MAGNITUDE CALCULATOR"){
        document.getElementById('vects').click(); 
    }
    else if (inp.value.toUpperCase() == "VECTOR MAGNITUDE CALCULATOR") {
        $("#vects").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "ORDER OF MAGNITUDE CALCULATOR"){
        document.getElementById('oocs').click(); 
    }
    else if (inp.value.toUpperCase() == "ORDER OF MAGNITUDE CALCULATOR") {
        $("#oocs").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "LOGARITHM PROPERTIES"){
        document.getElementById('log-collapse').click(); 
    }
    else if (inp.value.toUpperCase() == "LOGARITHM PROPERTIES") {
        $("#log-collapse").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "PRONIC NUMBER"){
        document.getElementById('pronum').click(); 
    }
    else if (inp.value.toUpperCase() == "PRONIC NUMBER") {
        $("#pronum").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "ROOTS OF UNITY CALCULATOR"){
        document.getElementById('rootsunity').click(); 
    }
    else if (inp.value.toUpperCase() == "ROOTS OF UNITY CALCULATOR") {
        $("#rootsunity").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "QUADRATIC EQUATION CALCULATOR"){
        document.getElementById('quadeqncal').click(); 
    }
    else if (inp.value.toUpperCase() == "QUADRATIC EQUATION CALCULATOR") {
        $("#quadeqncal").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "INTERCEPT FORM OF PLANE"){
        document.getElementById('pointintercept').click(); 
    }
    else if (inp.value.toUpperCase() == "INTERCEPT FORM OF PLANE") {
        $("#pointintercept").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "NAME OF 2D SHAPES"){
        document.getElementById('2d-shape').click(); 
    }
    else if (inp.value.toUpperCase() == "NAME OF 2D SHAPES") {
        $("#2d-shape").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "AREA OF CRESCENT AND LUNE"){
        document.getElementById('crescentLune').click(); 
    }
    else if (inp.value.toUpperCase() == "AREA OF CRESCENT AND LUNE") {
        $("#crescentLune").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "UNIT CIRCLE"){
        document.getElementById('unitcirc').click(); 
    }
    else if (inp.value.toUpperCase() == "UNIT CIRCLE") {
        $("#unitcirc").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "EXPANSION CALCULATOR"){
        document.getElementById('expansionc').click(); 
    }
    else if (inp.value.toUpperCase() == "EXPANSION CALCULATOR") {
        $("#expansionc").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "TYPES OF NUMBERS"){
        document.getElementById('typenum').click(); 
    }
    else if (inp.value.toUpperCase() == "TYPES OF NUMBERS") {
        $("#typenum").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "SMALLEST NUMBER DIVISIBLE"){
        document.getElementById('smNum').click(); 
    }
    else if (inp.value.toUpperCase() == "SMALLEST NUMBER DIVISIBLE") {
        $("#smNum").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "FAULHABER FORMULA"){
        document.getElementById('faul').click(); 
    }
    else if (inp.value.toUpperCase() == "FAULHABER FORMULA") {
        $("#faul").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "PLATONIC SOLIDS"){
        document.getElementById('platonic').click(); 
    }
    else if (inp.value.toUpperCase() == "PLATONIC SOLIDS") {
        $("#platonic").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "Bilinear INTERPOLATION CALCULATOR"){
        document.getElementById('bilinear').click(); 
    }
    else if (inp.value.toUpperCase() == "Bilinear INTERPOLATION CALCULATOR") {
        $("#bilinear").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "DISARIUM NUMBER"){
        document.getElementById('disnum').click(); 
    }
    else if (inp.value.toUpperCase() == "DISARIUM NUMBER") {
        $("#disnum").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "LN CALCULATOR"){
        document.getElementById('lns').click(); 
    }
    else if (inp.value.toUpperCase() == "LN CALCULATOR") {
        $("#lns").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "PERCENTAGE OFF"){
        document.getElementById('peroff').click(); 
    }
    else if (inp.value.toUpperCase() == "PERCENTAGE OFF") {
        $("#peroff").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "PERCENTAGE CHANGE"){
        document.getElementById('perchng').click(); 
    }
    else if (inp.value.toUpperCase() == "PERCENTAGE CHANGE") {
        $("#perchng").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "ANTILOG CALCULATOR"){
        document.getElementById('antilog').click(); 
    }
    else if (inp.value.toUpperCase() == "ANTILOG CALCULATOR") {
        $("#antilog").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "POLAR COORDINATES CALCULATOR"){
        document.getElementById('polar').click(); 
    }
    else if (inp.value.toUpperCase() == "POLAR COORDINATES CALCULATOR") {
        $("#polar").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "SPHERICAL COORDINATES CALCULATOR"){
        document.getElementById('sph').click(); 
    }
    else if (inp.value.toUpperCase() == "SPHERICAL COORDINATES CALCULATOR") {
        $("#sph").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "KAPREKAR NUMBER"){
        document.getElementById('kaps').click(); 
    }
    else if (inp.value.toUpperCase() == "KAPREKAR NUMBER") {
        $("#kaps").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "WAGSTAFF NUMBER"){
        document.getElementById('wags').click(); 
    }
    else if (inp.value.toUpperCase() == "WAGSTAFF NUMBER") {
        $("#wags").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "WOODALL NUMBER"){
        document.getElementById('woods').click(); 
    }
    else if (inp.value.toUpperCase() == "WOODALL NUMBER") {
        $("#woods").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "HYPERPERFECT NUMBER"){
        document.getElementById('hypers').click(); 
    }
    else if (inp.value.toUpperCase() == "HYPERPERFECT NUMBER") {
        $("#hypers").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "EULER TOTIENT CALCULATOR"){
        document.getElementById('etc').click(); 
    }
    else if (inp.value.toUpperCase() == "EULER TOTIENT CALCULATOR") {
        $("#etc").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "VECTOR CALCULATOR"){
        document.getElementById('vec').click(); 
    }
    else if (inp.value.toUpperCase() == "VECTOR CALCULATOR") {
        $("#vec").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "FOURIER SERIES"){
        document.getElementById('fourier_series').click(); 
    }
    else if (inp.value.toUpperCase() == "FOURIER SERIES") {
        $("#fourier_series").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "THEOREMS ON DIFFERENTIATION"){
        document.getElementById('thdif').click(); 
    }
    else if (inp.value.toUpperCase() == "THEOREMS ON DIFFERENTIATION") {
        $("#thdif").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "PARTIAL DIFFERENTIAL EQUATIONS"){
        document.getElementById('pdiffeqn').click(); 
    }
    else if (inp.value.toUpperCase() == "PARTIAL DIFFERENTIAL EQUATIONS") {
        $("#pdiffeqn").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "METHODS OF INTEGRATION"){
        document.getElementById('mi').click(); 
    }
    else if (inp.value.toUpperCase() == "METHODS OF INTEGRATION") {
        $("#mi").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "DIRECT AND INDIRECT PROPORTION"){
        document.getElementById('dip').click(); 
    }
    else if (inp.value.toUpperCase() == "DIRECT AND INDIRECT PROPORTION") {
        $("#dip").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "CLOCK ANGLE CALCULATOR"){
        document.getElementById('clocks').click();
    }          
    else if (inp.value.toUpperCase() == "CLOCK ANGLE CALCULATOR") {
        $("#clocks").slideToggle();    
    }
    else if(inp.value.toUpperCase() == "GREY CODE CALCULATOR"){
        document.getElementById('grey-bin').click(); 
    }
    else if (inp.value.toUpperCase() == "GREY CODE CALCULATOR") {
        $("#grey-bin").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "BITWISE CALCULATOR"){
        document.getElementById('bitwise-calc').click(); 
    }
    else if (inp.value.toUpperCase() == "BITWISE CALCULATOR") {
        $("#bitwise-calc").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "BINARY/HEXADECIMAL CONVERTOR"){
        document.getElementById('adding-all').click(); 
    }
    else if (inp.value.toUpperCase() == "BINARY/HEXADECIMAL CONVERTOR") {
        $("#adding-all").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "BOOLEAN ALGEBRA"){
        document.getElementById('bool').click(); 
    }
    else if (inp.value.toUpperCase() == "BOOLEAN ALGEBRA") {
        $("#bool").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "TANGENT AND NORMAL"){
        document.getElementById('tangent').click(); 
    }
    else if (inp.value.toUpperCase() == "TANGENT AND NORMAL") {
        $("#tangent").slideToggle(); 
    }    
    else if(inp.value.toUpperCase() == "ALGEBRAIC EQUATIONS FORMULAS"){
        document.getElementById('algebraic_formulascollapse').click(); 
    }
    else if (inp.value.toUpperCase() == "ALGEBRAIC EQUATIONS FORMULAS") {
        $("#algebraic_formulascollapse").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "LOCATION OF ROOTS"){
        document.getElementById('locroots').click(); 
    }
    else if (inp.value.toUpperCase() == "LOCATION OF ROOTS") {
        $("#locroots").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "PLOT GRAPH"){
        document.getElementById('plotgraph').click(); 
    }
    else if (inp.value.toUpperCase() == "PLOT GRAPH") {
        $("#plotgraph").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "PLOT ANGLE"){
        document.getElementById('plotangle').click(); 
    }
    else if (inp.value.toUpperCase() == "PLOT ANGLE") {
        $("#plotangle").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "STRAIGHT LINE"){
        document.getElementById('straightline').click(); 
    }
    else if (inp.value.toUpperCase() == "STRAIGHT LINE") {
        $("#straightline").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "PROPERTIES OF PARALLEL LINES"){
        document.getElementById('parallel').click(); 
    }
    else if (inp.value.toUpperCase() == "PROPERTIES OF PARALLEL LINES") {
        $("#parallel").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "COORDINATE SYSTEMS"){
        document.getElementById('coor').click(); 
    }
    else if (inp.value.toUpperCase() == "COORDINATE SYSTEMS") {
        $("#coor").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "CURVE TRACING"){
        document.getElementById('curve').click(); 
    }
    else if (inp.value.toUpperCase() == "CURVE TRACING") {
        $("#curve").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "SHAPES CALCULATOR"){
        document.getElementById('shapescal').click(); 
    }
    else if (inp.value.toUpperCase() == "SHAPES CALCULATOR") {
        $("#shapescal").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "3-D SHAPES CALCULATOR"){
        document.getElementById('tdshapescal').click(); 
    }
    else if (inp.value.toUpperCase() == "3-D SHAPES CALCULATOR") {
        $("#tdshapescal").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "3-D GEOMETRY"){
        document.getElementById('3dgeo').click(); 
    }
    else if (inp.value.toUpperCase() == "3-D GEOMETRY") {
        $("#3dgeo").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "SIGMA NOTATION"){
        document.getElementById('sigma').click(); 
    }
    else if (inp.value.toUpperCase() == "SIGMA NOTATION") {
        $("#sigma").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "IDENTITIES"){
        document.getElementById('complexidentities').click(); 
    }
    else if (inp.value.toUpperCase() == "IDENTITIES") {
        $("#complexidentities").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "PROPERTIES"){
        document.getElementById('complexproperties').click(); 
    }
    else if (inp.value.toUpperCase() == "PROPERTIES") {
        $("#complexproperties").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "OPS1 ON COMPLEX NUMBERS"){
        document.getElementById('complex1collapse').click(); 
    }
    else if (inp.value.toUpperCase() == "OPS1 ON COMPLEX NUMBERS") {
        $("#complex1collapse").slideToggle(); 
    }
    else if(inp.value.toUpperCase() == "OPS2 ON COMPLEX NUMBERS"){
        document.getElementById('complex2collapse').click(); 
    }
    else if (inp.value.toUpperCase() == "OPS2 ON COMPLEX NUMBERS") {
        $("#complex2collapse").slideToggle(); 
    }
    else if (inp.value.toUpperCase() == "PLOT BAR GRAPH") {
        $("#plotbargraph").slideToggle(); 
    }

}

/*To change the search bar design based on the condition whether input is empty or not*/
var myInput = document.getElementById("myInput");

function checkInput() {
    if (myInput.value.length != 0)
        return $('#search-txt').css("width", "240px");
    else return $('#search-txt').css("width", "0px");
}

function openSearchBar() {
    return $('#search-txt').css("width", "240px");
}
