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
        document.getElementById("imgClickAndChange10").src = 'icons/down-chevron.svg';
    } else {
        document.getElementById("imgClickAndChange10").src = 'icons/chevron-arrow-up.svg';
    }
}

function changeImage11() {
    k++;

    if (k % 2 == 0) {
        document.getElementById("imgClickAndChange11").src = 'icons/down-chevron.svg';
    } else {
        document.getElementById("imgClickAndChange11").src = 'icons/chevron-arrow-up.svg';
    }
}

function changeImage12() {
    l++;

    if (l % 2 == 0) {
        document.getElementById("imgClickAndChange12").src = 'icons/down-chevron.svg';
    } else {
        document.getElementById("imgClickAndChange12").src = 'icons/chevron-arrow-up.svg';
    }
}

function changeImage13() {
    m++;

    if (m % 2 == 0) {
        document.getElementById("imgClickAndChange13").src = 'icons/down-chevron.svg';
    } else {
        document.getElementById("imgClickAndChange13").src = 'icons/chevron-arrow-up.svg';
    }
}

function collapseit(openit) {
    $(String("#" + openit)).slideToggle();
}

function openit(id) {
    var ids = [
        "#emripnum",
        "#magicnum",
        "#pellnum",
        "#trimornum",
        "#happynum",
        "#eurnum",
        "#delnum",
        "#harnum",
        "#pronum",
        "#autonum",
        "#specialnum",
        "#ducknum",
        "#armnum",
        "#pallindromenum",
        "#perfectnum",
        "#disnum",
        "#gammaDist",
        "#expoDist",
        "#ackermann",
        "#culnum",
        "#carnum",
        "#lucNum",
        "#smNum",
        "#catNum",
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
        "#etc",
        "#krishnum",
        "#lancentarc",
        "#neonnum",
        "#equationssolver",
        "#quadeqncal",
        "#mulsolwithsteps",
        "#secarea",
        "#table",
        "#ssts",
        "#arcs",
        "#crescentLune",
        "#sigma",
        "#tria_octa",
        "#negbino",
        "#chng-vol-cube",
        "#sosqs",
        "#sosqsn",
        "#chng-vol-cuboid",
        "#squaresRanges",
        "#favourite",
        "#relrisk",
        "#cubesRanges",
        "#numcubesRanges",
        "#segcals",
        "#hydroz",
        "#odshapescal",
        "#shapescal",
        "#tdshapescal",
        "#fdshapescal",
        "#archimedean",
        "#divide",
        "#simpletrignocollapse",
        "#trigonovaluestable",
        "#trigonoiden",
        "#trigonofun",
        "#factors",
        "#stats",
        "#math",
        "#des",
        "#gcd",
        "#oloid",
        "#woods",
        "#dbltime",
        "#perchng",
        "#peroff",
        "#antilog",
        "#logbase",
        "#kaps",
        "#chitest",
        "#leadtest",
        "#takttest",
        "#throughputtest",
        "#cycletest",
        "#adams",
        "#integralcollapse",
        "#integration-idencollapse",
        "#defintegration-idencollapse",
        "#differentiatecollapse",
        "#partialdiffcollapse",
        "#3d-solid",
        "#chng-vol-sphere",
        "#laplacecollapse",
        "#limitscollapse",
        "#parab",
        "#binomialcoeff",
        "#binoexp",
        "#foil",
        "#matrixcollapse",
        "#pows",
        "#beta",
        "#imprtopr",
        "#sieve",
        "#ali",
        "#ineqtri",
        "#excircum",
        "#shapeinscribed",
        "#matrixprops",
        "#cylcarcal",
        "#2d-shape-ins",
        "#carpolarcal",
        "#cramer",
        "#lns",
        "#fractions",
        "#multiplematrixcollapse",
        "#expgrwths",
        "#pentakis",
        "#singlematrixcollapse",
        "#algebraic-idencollapse",
        "#about",
        "#pentatop",
        "#propcircle",
        "#propquad",
        "#rhomtria",
        "#pythtriple",
        "#rootsquadratic",
        "#planeintercept",
        "#plotgraph",
        "#3dgeocalc",
        "#plotbargraph",
        "#roundoff",
        "#euclid",
        "#aod",
        "#vecalg",
        "#volume",
        "#thdif",
        "#corgeo",
        "#ttest",
        "#regressiontest",
        "#abundants",
        "#abtest",
        "#ftest",
        "#ztest",
        "#golds",
        "#cchart",
        "#pchart",
        "#rchart",
        "#sheppard",
        "#momentcal",
        "#npchart",
        "#xchart",
        "#betagamma",
        "#parallel",
        "#circumradiusarea",
        "#dri",
        "#expansionc",
        "#unitconcal",
        "#giff",
        "#incenterexcenter",
        "#qrtl",
        "#decl",
        "#typenum",
        "#dip",
        "#cross",
        "#diamond",
        "#wandt",
        "#bulge",
        "#spiconcal",
        "#barrel",
        "#home",
        "#curconcal",
        "#wags",
        "#factorial",
        "#setop",
        "#rootsunity",
        "#half_tetra",
        "#trans",
        "#hp",
        "#ppmfs",
        "#flatcy",
        "#right_wedge",
        "#hypers",
        "#bool",
        "#suppangs",
        "#compang",
        "#cotermang",
        "#halfcy",
        "#eirs",
        "#tricorn",
        "#zscores",
        "#pvalues",
        "#ppv",
        "#npv",
        "#errpers",
        "#log_values",
        "#oops",
        "#cirtri",
        "#halfcone",
        "#astroid",
        "#squarecube",
        "#tetrakis_t",
        "#deca_prism",
        "#cardiod",
        "#log-collapse",
        "#bt-collapse",
        "#bt-collapse1",
        "#antipodal",
        "#manhats",
        "#doublept",
        "#bilinear",
        "#elliptic_cone",
        "#bicone",
        "#pandc",
        "#per_chng_vol",
        "#trunbicone",
        "#enna_prism",
        "#confi-inter",
        "#odds",
        "#pairfacts",
        "#interest",
        "#sphere_shell",
        "#bitwise-calc",
        "#adding-all",
        "#subtract-all",
        "#multiplying-all",
        "#divide-all",
        "#onetwocom-calc",
        "#2d-shape",
        "#salinon",
        "#3d-shape",
        "#hamming-calc",
        "#3dgeo",
        "#bpmfs",
        "#straightline",
        "#binary-hexadecimal",
        "#mis",
        "#ais",
        "#cay",
        "#utcs",
        "#anticube",
        "#halfsphere_shell",
        "#inversetrigonoiden",
        "#hyptrigonoiden",
        "#invhyptrigonoiden",
        "#circlecollapse",
        "#parabolacollapse",
        "#ellipsecollapse",
        "#hyperbolacollapse",
        "#datecal",
        "#yin_yang",
        "#prime",
        "#sum_n_AP",
        "#sum_n_GP",
        "#sum_n_HP",
        "#trun_anticone",
        "#algebraic_formulascollapse",
        "#expansion",
        "#solutiontri",
        "#sumAndDiffTri",
        "#diagcy",
        "#plotangle",
        "#profitloss",
        "#cylin_shell",
        "#obcyshell",
        "#differentiate-rulecollapse",
        "#emical",
        "#gstcal",
        "#anticone",
        "#goldr",
        "#goldrec",
        "#platonic",
        "#unitcirc",
        "#deviation",
        "#degcal",
        "#trigsolcollapse",
        "#grey-bin",
        "#consim",
        "#modulo",
        "#spherewedge",
        "#convdiv",
        "#gamma",
        "#curve",
        "#coor",
        "#sph",
        "#polar",
        "#cyl",
        "#ci",
        "#mean",
        "#cart",
        "#Meanit",
        "#midrange",
        "#sensi",
        "#bcd",
        "#vector",
        "#elonsquare",
        "#vec",
        "#diffeqn",
        "#pdiffeqn",
        "#maxmin",
        "#locroots",
        "#tangent",
        "#co_prime",
        "#srf",
        "#probabilitycollapse",
        "#joint-probabilitycollapse",
        "#idevent",
        "#dec2421",
        "#ex3",
        "#lappro",
        "#coprimeex",
        "#bmis",
        "#rankcal",
        "#bayes-probabilitycollapse",
        "#elonpentpyr",
        "#hypergeos",
        "#condprobability",
        "#randommean",
        "#geoprobability",
        "#prism",
        "#pentprism",
        "#pyramid",
        "#tripyramid",
        "#octpyramid",
        "#height1",
        "#hexpyramid",
        "#octahedron",
        "#repp",
        "#partial_sphere",
        "#hypergeomeans",
        "#wedge_cuboid",
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
        "#vects",
        "#prices",
        "#centcal",
        "#madcs",
        "#cevtha",
        "#sum_n",
        "#percal",
        "#parabolic_arc",
        "#lyear",
        "#analytical",
        "#faul",
        "#isoright",
        "#rsqrs",
        "#ellipsoid",
        "#expo",
        "#setformula",
        "#wedge",
        "#fourier_series",
        "#wmcs",
        "#cvs",
        "#confIntrvl",
        "#rmss",
        "#relationtypes",
        "#skews",
        "#kurt",
        "#clocks",
        "#slvxs",
        "#rankcals",
        "#halflife",
        "#hyperbolicratios",
        "#covs",
        "#corr",
        "#lrcs",
        "#perats",
        "#mecs",
        "#chng-vol-cube",
        "#squarerootcalc",
        "#sqseries",
        "#impse",
        "#n_baseroot",
        "#binomial",
        "#interquartile",
        "#outlier",
        "#proportion",
        "#threestar",
        "#probability",
        "#fourstar",
        "#convolution",
        "#incircle",
        "#circularsector",
        "#ucontrol",
        "#amicable",
        "#luminosity",
    ];
    for (i = 0; i < ids.length; i++) {
        if (ids[i] != id) {
            $(ids[i]).slideUp();
        } else {
            $(String(id)).slideToggle();
        }
    }
}

function bodyload() {
    var displaynamear = JSON.parse(localStorage.getItem("displaynamearray"));
    var filenamenamear = JSON.parse(localStorage.getItem("filenamearray"));
    var imgar = JSON.parse(localStorage.getItem("imgarray"));
    var favar = JSON.parse(localStorage.getItem("favarray"));
    if (filenamenamear != null) {
        filename = filenamenamear;
        displayname=displaynamear;
        imgarray = imgar;
        favarray = favar;
        checkfavourite();
    }
    numbersapi();
}

var displayname = [];
var filename = [];
var imgarray = [];
var favarray = [];

function addtofavourite(displaynamear, filenamear, img) {
    var filenmar=JSON.parse(localStorage.getItem('filenamearray'));
    var flag = 0;
    if (filename != null) {
        for (i = 0; i < filename.length; i++) {
            if (filename == filenmar[i]) {
                flag = 1;
            }
        }
    }
    if (flag == 0) {
        displayname.push(displaynamear);
        filename.push(filenamear);
        imgarray.push(img);
        favarray.push("images/favourite.png");
        localStorage.setItem("displaynamearray", JSON.stringify(displayname));
        localStorage.setItem("filenamearray", JSON.stringify(filename));
        localStorage.setItem("imgarray", JSON.stringify(imgarray));
        localStorage.setItem("favarray", JSON.stringify(favarray));
        checkfavourite();
    }
    if (flag == 1) {
        var index = filenamear.indexOf(filename);
        if (index > -1) {
            document.getElementById(imgarray[index]).src = "images/unfavourite.png";
            displayname.splice(index, 1);
            filename.splice(index, 1);
            imgarray.splice(index, 1);
            favarray.splice(index, 1);
        }
        localStorage.setItem("displaynamearray", JSON.stringify(displayname));
        localStorage.setItem("filenamearray", JSON.stringify(filename));
        localStorage.setItem("imgarray", JSON.stringify(imgarray));
        localStorage.setItem("favarray", JSON.stringify(favarray));
        checkfavourite(filenamear);
    }
}

function checkfavourite(filenamear) {
    removeall("favourite");
    var imgar = JSON.parse(localStorage.getItem("imgarray"));
    var favar = JSON.parse(localStorage.getItem("favarray"));

    $("#favourite").addClass("favouritecontainer");
    if (filename.length != 0) {
        for (i = 0; i < filename.length; i++) {
            var el = document.createElement("li");
            el.textContent = displayname[i];
            el.className = "favourites";
            el.style.color = "white";

            el.setAttribute("onclick", 'loadcalculator("' + String(filename[i]) + '")');

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
    localStorage.removeItem("filenamearray");
    localStorage.removeItem("displaynamearray");
    localStorage.removeItem("imgarray");
    localStorage.removeItem("favarray");
    $("#favourite").removeClass("headingdiv");
    checkfavourite();
}

function getfacts() {
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
    return val;
}

$(document).on('click', ' .list_menu_items ', function () {
    $(this).siblings().removeClass('home');
    $(this).addClass('home');
});
