var a0 = 0, a = 0, b = 0, c = 0, d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0;

function removeall(elid) {
    if (document.getElementById(elid).innerHTML != "") {
        var r = document.getElementById(elid);
        while (r.firstChild) {
            r.removeChild(r.lastChild);
        }
    }
}

function changeImage0() {
    a0++;

    if (a0 % 2 == 0) {
        document.getElementById("imgClickAndChange0").src = 'icons/down-chevron.svg';
    } else {
        document.getElementById("imgClickAndChange0").src = 'icons/chevron-arrow-up.svg';
    }
}

function changeImage1() {
    a++;

    if (a % 2 == 0) {
        document.getElementById("imgClickAndChange1").src = 'icons/down-chevron.svg';
    } else {
        document.getElementById("imgClickAndChange1").src = 'icons/chevron-arrow-up.svg';
    }
}

function changeImage2() {
    b++;

    if (b % 2 == 0) {
        document.getElementById("imgClickAndChange2").src = 'icons/down-chevron.svg';
    } else {
        document.getElementById("imgClickAndChange2").src = 'icons/chevron-arrow-up.svg';
    }
}

function changeImage3() {
    c++;

    if (c % 2 == 0) {
        document.getElementById("imgClickAndChange3").src = 'icons/down-chevron.svg';
    } else {
        document.getElementById("imgClickAndChange3").src = 'icons/chevron-arrow-up.svg';
    }
}

function changeImage4() {
    d++;

    if (d % 2 == 0) {
        document.getElementById("imgClickAndChange4").src = 'icons/down-chevron.svg';
    } else {
        document.getElementById("imgClickAndChange4").src = 'icons/chevron-arrow-up.svg';
    }
}

function changeImage5() {
    e++;

    if (e % 2 == 0) {
        document.getElementById("imgClickAndChange5").src = 'icons/down-chevron.svg';
    } else {
        document.getElementById("imgClickAndChange5").src = 'icons/chevron-arrow-up.svg';
    }


}

function changeImage6() {
    f++;

    if (f % 2 == 0) {
        document.getElementById("imgClickAndChange6").src = 'icons/down-chevron.svg';
    } else {
        document.getElementById("imgClickAndChange6").src = 'icons/chevron-arrow-up.svg';
    }


}

function changeImage7() {
    g++;

    if (g % 2 == 0) {
        document.getElementById("imgClickAndChange7").src = 'icons/down-chevron.svg';
    } else {
        document.getElementById("imgClickAndChange7").src = 'icons/chevron-arrow-up.svg';
    }


}

function changeImage8() {
    h++;
    if (h % 2 == 0) {
        document.getElementById("imgClickAndChange8").src = 'icons/down-chevron.svg';
    } else {
        document.getElementById("imgClickAndChange8").src = 'icons/chevron-arrow-up.svg';
    }
}

function changeImage9() {
    i++;

    if (i % 2 == 0) {
        document.getElementById("imgClickAndChange9").src = 'icons/down-chevron.svg';
    } else {
        document.getElementById("imgClickAndChange9").src = 'icons/chevron-arrow-up.svg';
    }
}

function changeImage10() {
    j++;

    if (j % 2 == 0) {
        document.getElementById("imgClickAndChange9").src = 'icons/down-chevron.svg';
    } else {
        document.getElementById("imgClickAndChange9").src = 'icons/chevron-arrow-up.svg';
    }
}

function collapseit(openit) {
    $(String("#" + openit)).slideToggle();
}

function openit(id) {
    var ids = [
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
    for (i = 0; i < ids.length; i++) {
        if (ids[i] != id) {
            $(ids[i]).slideUp();
        } else {
            $(String(id)).slideToggle();
        }
    }
}

function loadfilesafterload() {
    var aroffiles = [
        "appjs/working.js",
        "appjs/logicjavascript.js",
        "appjs/matrixlogic.js",
        "appjs/simplecallogic.js",
        "appjs/searchbar.js",
        "appjs/speechrecoforall.js",
        "appjs/complexlogic.js",
        "js/math.min.js",
        "js/plotly-1.35.2.min.js",
        "appjs/logValue.js",
        "appjs/operations_on_fraction.js",
        "appjs/conicSolve.js"
    ];
    for (i of aroffiles) {
        var scriptelm = document.createElement("script");
        scriptelm.src = i;
        document.getElementsByTagName("body")[0].appendChild(scriptelm);
    }
}

function bodyload() {
    var ar = JSON.parse(localStorage.getItem("favouritearray"));
    var oid = JSON.parse(localStorage.getItem("openingidarray"));
    var tp = JSON.parse(localStorage.getItem("typearray"));
    var imgar = JSON.parse(localStorage.getItem("imgarray"));
    var favar = JSON.parse(localStorage.getItem("favarray"));
    if (oid != null) {
        favouritearray = ar;
        openingid = oid;
        typearray = tp;
        imgarray = imgar;
        favarray = favar;
        checkfavourite();
    }
    numbersapi();
}

var favouritearray = [];
var openingid = [];
var typearray = [];
var imgarray = [];
var favarray = [];

function addtofavourite(btnid, openid, type, img) {
    var ar = JSON.parse(localStorage.getItem("favouritearray"));
    var oid = JSON.parse(localStorage.getItem("openingidarray"));
    var imgar = JSON.parse(localStorage.getItem("imgarray"));
    var favar = JSON.parse(localStorage.getItem("favarray"));
    var flag = 0;
    if (oid != null) {
        for (i = 0; i < oid.length; i++) {
            if (openid == oid[i]) {
                flag = 1;
            }
        }
    }
    if (flag == 0) {
        favouritearray.push(btnid);
        openingid.push(openid);
        typearray.push(type);
        imgarray.push(img);
        favarray.push("images/favourite.png");
        localStorage.setItem("favouritearray", JSON.stringify(favouritearray));
        localStorage.setItem("openingidarray", JSON.stringify(openingid));
        localStorage.setItem("typearray", JSON.stringify(typearray));
        localStorage.setItem("imgarray", JSON.stringify(imgarray));
        localStorage.setItem("favarray", JSON.stringify(favarray));
        checkfavourite();
    }
    if (flag == 1) {
        var index = oid.indexOf(openid);
        if (index > -1) {
            document.getElementById(imgarray[index]).src = "images/unfavourite.png";
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
        checkfavourite();
    }
}

function checkfavourite() {
    removeall("favourite");
    var ar = JSON.parse(localStorage.getItem("favouritearray"));
    var oid = JSON.parse(localStorage.getItem("openingidarray"));
    var tp = JSON.parse(localStorage.getItem("typearray"));
    var imgar = JSON.parse(localStorage.getItem("imgarray"));
    var favar = JSON.parse(localStorage.getItem("favarray"));

    $("#favourite").addClass("favouritecontainer");

    if (ar.length != 0) {
        for (i = 0; i < ar.length; i++) {
            var el = document.createElement("li");
            el.textContent = ar[i];
            el.className = "favourites";
            el.style.color = "white";
            var idf = oid[i];
            if (tp[i] == "c") {
                el.setAttribute("onclick", 'openit("' + String(idf) + '")');
            } else {
                el.setAttribute("data-toggle", "modal");
                el.setAttribute("data-target", idf);
            }

            document.getElementById("favourite").appendChild(el);
            document.getElementById(imgar[i]).src = favar[i];
        }
    }

    else {
        var el = document.createElement("div");
        el.className = "nofavourites";
        el.id = "nofavourite"
        el.style.color = "white";
        document.getElementById("favourite").appendChild(el);
        var el1 = document.createElement("p");
        el1.textContent = "Nothing in Favourites⭐.";
        document.getElementById("nofavourite").appendChild(el1);
        var el2 = document.createElement("p");
        el2.textContent = " Click 🤍 to add to Favourites";
        document.getElementById("nofavourite").appendChild(el2);

    }
}

$(document).on('click', ' .favourites ', function () {
    $(this).addClass('favnew');
    $(this).siblings().removeClass('favnew');
});
$(document).on('hover', ' .favnew ', function () {
    $(this).addClass('favourites');
});

document.querySelector(".container").addEventListener('click', function () {
    $(".favouritecontainer").slideUp();
})

function removefavourite() {
    localStorage.removeItem("favouritearray");
    localStorage.removeItem("openingidarray");
    localStorage.removeItem("imgarray");
    localStorage.removeItem("favarray");
    localStorage.removeItem("typearray");
    $("#favourite").removeClass("headingdiv");
    checkfavourite();
}

function numbersapi() {
    let el = document.getElementById("numberfact");
    var facts =
        ["The number 4 is the only number spelled with the same number of letters as itself",
            "8 is the largest cube in the Fibonacci series",
            "123 is the tenth Lucas number",
            "3 is the fourth open meandric number",
            "15 is a triangular number, a hexagonal number, a pentatope number and the 4th Bell number.",
            "111 is the smallest possible magic constant of a 3×3 magic square of distinct primes.",
            "55 is the largest triangular number in the Fibonacci sequence.",
            "3 is the second triangular number and it is the only prime triangular number.",
            "2 is a primorial, as well as its own factorial.",
            "7 is the lowest number that cannot be represented as the sum of the squares of three integers.",
            "13 is the number of Archimedian solids.",
            "16 is a centered pentagonal number.",
            "17 is the only positive Genocchi number that is prime, the only negative one being −3.",
            "100 is the smallest number whose common logarithm is a prime number.",
            "100 is the smallest square which is also the sum of 4 consecutive cubes.",
            "99 is the ninth repdigit, a palindromic number and a Kaprekar number.",
            "23 is the ninth prime number, the smallest odd prime that is not a twin prime.",
            "21 is a repdigit in base 4 (111)",
            "20 is the smallest primitive abundant number",
            "72 is the sum of four consecutive primes (13 + 17 + 19 + 23), as well as the sum of six consecutive primes (5 + 7 + 11 + 13 + 17 + 19).",
            "75 is the number of orderings of 4 objects with ties allowed.",
            "79 is the n value of the Wagstaff prime 201487636602438195784363.",
            "80 is the smallest number n where n and n+1 are both products of 4 or more primes.",
            "25 is an aliquot sum of 6 and number 6 is the first (or smallest) number to have an aliquot sequence that does not culminate in 0 through a prime.",
            "37 is a prime number, the fifth lucky prime, the first irregular prime, the third unique prime and the third cuban prime of the form.",
            "101 is the number of partitions of 13.",
            "88 is one of only 2 numbers known whose square has no isolated digits.",
        ];
    i = Math.floor(Math.random() * 27);
    let val = facts[i];
    el.innerHTML = val;
}

$(document).on('click', ' .list_menu_items ', function () {
    // $(this).addClass('home').siblings().removeClass('home');
    $(this).siblings().removeClass('home');
    $(this).addClass('home');
});
