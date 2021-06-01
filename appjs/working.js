var toggle = false
function opencal() {
    $('#cal').slideToggle(function () {
        toggle = !toggle
    });
    if (!toggle) {
        $('#cal')[0].scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
}
function cleardiv(arrayofclearids) {
    for (var parameterarray of arrayofclearids) {
        document.getElementById(parameterarray).innerHTML = "";
    }
}
function clearall() {
    setTimeout(function () {
        cleardiv(["eurans","harans","proans","autoans","disans","gammaprobAns","negbinoans","ackermannResult","nLucNumResult","lucNumResult","smNumResult","catNumResult","dblFactResult","smDivResult","smPrimeResult","nextPrimeResult","distResult","resultintegration", "integralplot","etfResult", "resultdiff", "diffplot", "resulttable", "generatedmatrixsingle", "singlematrixresult", "singlematrixexplanation", "generatedmatrix1", "signofmatrix", "generatedmatrix2", "matrixresult", "explanationmatrixresult", "rootsquadraticresult", "inputroundoffoutput", "plotequationresult", "resultlaplace", "laplaceplot", "resultinverselaplace", "inverselaplaceplot", "resultpardiff", "resultmulsol", "soltri", "resultofdivsteps", "resultdivi", "divisibilitycheckresult", "divisibilitycheckresultexplanation", "dividefactor", "dividefactorresult", "factorresult", "resultfac", "resultlcm", "resultlcms", "hcfprimefactor", "resulthcf", "displayequation", "resultsimplifyequation", "resultexpandequation", "equationsmany", "resultsolverequation", "compresult"]);
    }, 1000);
}

$("#clock").click(function(){
    openit("#clocks");
    closenav();
    clearall();
});

$("#wag").click(function () {
    openit("#wags");
    closenav();
    clearall();
});


$("#wag").click(function () {
    openit("#wags");
    closenav();
    clearall();
});

$("#specialbtn").click(function(){
    openit("#specialnum");
$("#ducknumbtn").click(function(){
    openit("#ducknum");
    closenav();
    clearall();
});
$("#armnumbtn").click(function(){
    openit("#armnum");
    closenav();
    clearall();
});
$("#pallindromebtn").click(function(){
    openit("#pallindromenum");
    closenav();
    clearall();
});
$("#perfectbtn").click(function(){
    openit("#perfectnum");
    closenav();
    clearall();
});
$("#emripbtn").click(function(){
    openit("#emripnum");
    closenav();
    clearall();
});
// Disarium Number
$("#disnumbtn").click(function(){
    openit("#disnum");
    closenav();
    clearall();
});
$("#happybtn").click(function(){
    openit("#happynum");
    closenav();
    clearall();
});
// Automorphic Number
$("#autonumbtn").click(function(){
    openit("#autonum");
    closenav();
    clearall();
});
//Cullen Number
$("#culnumbtn").click(function(){
    openit("#culnum");
    closenav();
    clearall();
});
//Cullen Number
$("#carnumbtn").click(function(){
    openit("#carnum");
    closenav();
    clearall();
});
// Pronic Number
$("#pronumbtn").click(function(){
    openit("#pronum");
    closenav();
    clearall();
});
// Harshad Number
$("#harnumbtn").click(function(){
    openit("#harnum");
    closenav();
    clearall();
});
//Trimorphic Number
$("#trimornumbtn").click(function(){
    openit("#trimornum");
    closenav();
    clearall();
});
$("#bmi").click(function(){
    openit("#bmis");
    closenav();
    clearall();
});
//Eulerian Number
$("#eurnumbtn").click(function(){
    openit("#eurnum");
    closenav();
    clearall();
});
//Delannoy Number
$("#delnumbtn").click(function(){
    openit("#delnum");
    closenav();
    clearall();
});
$("#wag").click(function () {
    openit("#wags");
    closenav();
    clearall();
});

$("#midrangebtn").click(function () {
    openit("#midrange");
    closenav();
    clearall();
});

$("#utc").click(function(){
    openit("#utcs");
    closenav();
    clearall();
});

$("#bilinearbtn").click(function(){
    openit("#bilinear");
    closenav();
    clearall();
});

$("#madc").click(function(){
    openit("#madcs");
    closenav();
    clearall();
});

// Krishnamurthy Number
$("#krishnumbtn").click(function(){
    openit("#krishnum");
    closenav();
    clearall();
});

$("#manhat").click(function(){
    openit("#manhats");
    closenav();
    clearall();
});

$("#cartbtn").click(function(){
    openit("#cart");
    closenav();
    clearall();
});
 // Neon Number
 $("#neonnumbtn").click(function(){
    openit("#neonnum");
    closenav();
    clearall();
});
function closenav() {
    $('#slide-out').addClass('sidenav-close');
    setTimeout(function () {
        $('#slide-out').removeClass('sidenav-close');
    }, 100);
}

$(document).ready(function () {
    $("#divideoption").click(function () {
        openit("#divide");
        closenav();
        clearall();
    });
    $("#std_dvtn").click(function () {
        openit("#deviation");
        closenav();
        clearall();
    });
    $("#sensibtn").click(function () {
        openit("#sensi");
        closenav();
        clearall();
    });
    $("#fractions_op").click(function () {
        openit("#fractions");
        closenav();
        clearall();
    });
    $("#logValues").click(function () {
        openit("#log_values");
        closenav();
        clearall();
    });
    $("#kap").click(function () {
        openit("#kaps");
        closenav();
        clearall();
    });
    $("#mathrbtn").click(function () {
        openit("#math");
        closenav();
        clearall();
    });
    $("#wood").click(function () {
        openit("#woods");
        closenav();
        clearall();
    });

    $("#minv").click(function () {
        openit("#mis");
        closenav();
        clearall();
    });

    $("#midrangebtn").click(function () {
        openit("#midrange");
        closenav();
        clearall();
    });

    $("#ainv").click(function () {
        openit("#ais");
        closenav();
        clearall();
    });

    $("#adam").click(function () {
        openit("#adams");
        closenav();
        clearall();
    });

    $("#per-chng-cuboid").click(function () {
        openit("#chng-vol-cuboid");
        closenav();
        clearall();
    })
    $("#abundant").click(function () {
        openit("#abundants");
        closenav();
        clearall();
    })

    $("#per-chng-cube").click(function () {
        openit("#chng-vol-cube");
        closenav();
        clearall();
    })
    $("#aboutbutton").click(function () {
        openit("#about");
        closenav();
    });
    $("#centcalbut").click(function () {
        openit("#centcal");
        closenav();
    });
    $("#stbut").click(function () {
        openit("#setcal");
        closenav();
    });
    $("#leapyearbtn").click(function () {
        openit("#lyear");
        closenav();
    });
    $("#homeoption").click(function () {
        openit("#home");
        closenav();
    });
    $("#factorsoption").click(function () {
        openit("#factors");
        closenav();
        clearall();
    });
    $("#corrbtn").click(function () {
        openit("#corr");
        closenav();
        clearall();
    });
    $("#cov").click(function () {
        openit("#covs");
        closenav();
        clearall();
    });
    $("#lrc").click(function () {
        openit("#lrcs");
        closenav();
        clearall();
    });
    $("#tableoption").click(function () {
        openit("#table");
        closenav();
        clearall();

    });
    $("#mec").click(function () {
        openit("#mecs");
        closenav();
        clearall();

    });
    //            matrix
    $("#matrixcollapsebtn").click(function () {
        openit("#matrixcollapse");
        closenav();
        clearall();
    });
    $("#rankcalbtn").click(function () {
        openit("#rankcal");
        closenav();
        clearall();
    });
    $("#dec2421btn").click(function () {
        openit("#dec2421");
        closenav();
        clearall();
    });
    $("#bpmf").click(function () {
        openit("#bpmfs");
        closenav();
        clearall();
    });
    $("#pentatop").click(function () {
        openit("#pentatop");
        closenav();
        clearall();
    });
    $("#perat").click(function () {
        openit("#perats");
        closenav();
        clearall();
    });
    $("#sreslc").click(function () {
        openit("#stresscalc");
        closenav();
        clearall();
    });
    $("#impfix").click(function () {
        openit("#impfixs");
        closenav();
        clearall();
    });
    $("#ssst").click(function () {
        openit("#ssts");
        closenav();
        clearall();
    });
    $("#sosq").click(function () {
        openit("#sosqs");
        closenav();
        clearall();
    });
    $("#numcubesRange").click(function () {
        openit("#numcubesRanges");
        closenav();
        clearall();
    });
    $("#sosqn").click(function () {
        openit("#sosqsn");
        closenav();
        clearall();
    });
    $("#squaresRange").click(function () {
        openit("#squaresRanges");
        closenav();
        clearall();
    });
    $("#cubesRange").click(function () {
        openit("#cubesRanges");
        closenav();
        clearall();
    });
    $("#arc").click(function () {
        openit("#arcs");
        closenav();
        clearall();
    });
    $("#hyper").click(function () {
        openit("#hypers");
        closenav();
        clearall();
    });
    $("#crescent").click(function () {
        openit("#crescentLune");
        closenav();
        clearall();
    });
    $("#ex3btn").click(function () {
        openit("#ex3");
        closenav();
        clearall();
    });
    $("#vecalgbtn").click(function () {
        openit("#vecalg");
        closenav();
        clearall();
    });
    $("#squarecubebtn").click(function () {
        openit("#squarecube");
        closenav();
        clearall();
    });
    $("#betabtn").click(function () {
        openit("#beta");
         closenav();
        clearall();
    });
    $("#ooc").click(function () {
        openit("#oocs");
         closenav();
        clearall();
    });
    $("#imprtoprbtn").click(function () {
        openit("#imprtopr");

        closenav();
        clearall();
    });
    $("#vpd").click(function () {
        openit("#vpds");
        closenav();
        clearall();
    });
    $("#thdifbtn").click(function () {
        openit("#thdif");
        closenav();
        clearall();
    });
    $("#aodbtn").click(function () {
        openit("#aod");
        closenav();
        clearall();
    });
    $("#corgeobtn").click(function () {
        openit("#corgeo");
        closenav();
        clearall();
    });
    $("#matrixpropsbtn").click(function () {
        openit("#matrixprops");
        closenav();
        clearall();
    });
    $("#3dgeocalcbtn").click(function () {
        openit("#3dgeocalc");
        closenav();
        clearall();
    });
    $("#straightlinebtn").click(function () {
        openit("#straightline");
        closenav();
        clearall();
    });
    $("#algebraic-idencollapsebtn").click(function () {
        openit("#algebraic-idencollapse");
        closenav();
        clearall();
    });
    $("#differentiate").click(function () {
        openit("#differentiatecollapse");
        closenav();
        clearall();
    });
    $("#3dgeobtn").click(function () {
        openit("#3dgeo");
        closenav();
        clearall();
    });
    $("#desbtn").click(function () {
        openit("#des");
        closenav();
        clearall();
    });
    $("#dribtn").click(function () {
        openit("#dri");
        closenav();
        clearall();
    });
    $("#expansioncbtn").click(function () {
        openit("#expansionc");
        closenav();
        clearall();
    });
    $("#integrate").click(function () {
        openit("#integralcollapse");
        closenav();
        clearall();
    });
    $("#hypergeo").click(function () {
        openit("#hypergeos");
        closenav();
        clearall();
    });
    $("#integration-idencollapsebtn").click(function () {
        openit("#integration-idencollapse");
        closenav();
        clearall();
    });
    $("#defintegration-idencollapsebtn").click(function () {
        openit("#defintegration-idencollapse");
        closenav();
        clearall();
    });
    $("#3d-solid-btn").click(function () {
        openit("#3d-solid");
        closenav();
        clearall();
    })

    $("#2d-shape-btn").click(function () {
        openit("#2d-shape");
        closenav();
        clearall();
    });

    $("#3d-shape-btn").click(function () {
        openit("#3d-shape");
        closenav();
        clearall();
    });

    $("#per-chng-sphere").click(function () {
        openit("#chng-vol-sphere");
        closenav();
        clearall();
    })

    $("#pythtriplebtn").click(function () {
        openit("#pythtriple");
        closenav();
        clearall();
    });
    $("#partialdiff").click(function () {
        openit("#partialdiffcollapse");
        closenav();
        clearall();
    });
    $("#laplace").click(function () {
        openit("#laplacecollapse");
        closenav();
        clearall();
    });
    $("#limits").click(function () {
        openit("#limitscollapse");
        closenav();
        clearall();
    });
    $("#shapescalbtn").click(function () {
        openit("#shapescal");
        closenav();
        clearall();
    });
    $("#ppmf").click(function () {
        openit("#ppmfs");
        closenav();
        clearall();
    });
    $("#giffbtn").click(function () {
        openit("#giff");
        closenav();
        clearall();

    });
    $("#qrtlbtn").click(function () {
        openit("#qrtl");
        closenav();
        clearall();

    });
    $("#planeinterceptbtn").click(function () {
        openit("#planeintercept");
        closenav();
        clearall();
    });
    $("#declbtn").click(function () {
        openit("#decl");
        closenav();
        clearall();

    });

    $("#dipbtn").click(function () {
        openit("#dip");
        closenav();
        clearall();
    })
    $("#crossbtn").click(function () {
        openit("#cross");
        closenav();
        clearall();
    })
    $("#diamondbtn").click(function () {
        openit("#diamond");
        closenav();
        clearall();
    }) 
    $("#wandtbtn").click(function () {
        openit("#wandt");
        closenav();
        clearall();
    })
    $("#rootsunitybtn").click(function () {
        openit("#rootsunity");
        closenav();
        clearall();
    })
    $("#HPbttn").click(function () {
        openit("#hp");
        closenav();
        clearall();
    });
    $("#eir").click(function () {
        openit("#eirs");
        closenav();
        clearall();
    });
    $("#secareabtn").click(function () {
        openit("#secarea");
        closenav();
        clearall();
    });
    $("#propcirclebtn").click(function () {
        openit("#propcircle");
        closenav();
        clearall();
    });
    $("#propquadbtn").click(function () {
        openit("#propquad");
        closenav();
        clearall();
    });
    $("#theobtn").click(function () {
        openit("#theo");
        closenav();
        clearall();
    });
    $("#coorbtn").click(function () {
        openit("#coor");
        closenav();
        clearall();
    });
    $("#errper").click(function () {
        openit("#errpers");
        closenav();
        clearall();
    });
    $("#suppang").click(function () {
        openit("#suppangs");
        closenav();
        clearall();
    });
    $("#compangbtn").click(function () {
        openit("#compang");
        closenav();
        clearall();
    });
    $("#cotermangbtn").click(function () {
        openit("#cotermang");
        closenav();
        clearall();
    });
    $("#ttestbtn").click(function () {
        openit("#ttest");
        closenav();
        clearall();
    });   
    $("#regressionbtn").click(function () {
        openit("#regressiontest");
        closenav();
        clearall();
    });   
    $("#abtestbtn").click(function () {
        openit("#abtest");
        closenav();
        clearall();
    });   
    $("#ftestbtn").click(function () {
        openit("#ftest");
        closenav();
        clearall();
    }); 
    $("#ztestbtn").click(function () {
        openit("#ztest");
        closenav();
        clearall();
    }); 
    $("#ccbtn").click(function () {
        openit("#cchart");
        closenav();
        clearall();
    }); 
    $("#pbtn").click(function () {
        openit("#pchart");
        closenav();
        clearall();
    });   
    $("#rbtn").click(function () {
        openit("#rchart");
        closenav();
        clearall();
    });   
    $("#shepbtn").click(function () {
        openit("#sheppard");
        closenav();
        clearall();
    });
    $("#momentbtn").click(function () {
        openit("#momentcal");
        closenav();
        clearall();
    });  
    $("#npbtn").click(function () {
        openit("#npchart");
        closenav();
        clearall();
    });   
    $("#xbtn").click(function () {
        openit("#xchart");
        closenav();
        clearall();
    }); 
    $("#chitestbtn").click(function () {
        openit("#chitest");
        closenav();
        clearall();
    }); 
    $("#leadbtn").click(function () {
        openit("#leadtest");
        closenav();
        clearall();
    });    
    $("#taktbtn").click(function () {
        openit("#takttest");
        closenav();
        clearall();
    });   
    $("#throughputbtn").click(function () {
        openit("#throughputtest");
        closenav();
        clearall();
    });  
    $("#cyclebtn").click(function () {
        openit("#cycletest");
        closenav();
        clearall();
    }); 
    $("#gammabtn").click(function () {
        openit("#gamma");
        closenav();
        clearall();
    }); 
    $("#pairfact").click(function () {
        openit("#pairfacts");
        closenav();
        clearall();
    });
    $("#diffeqnbtn").click(function () {
        openit("#diffeqn");
        closenav();
        clearall();
    });
    $("#pdiffeqnbtn").click(function () {
        openit("#pdiffeqn");
        closenav();
        clearall();
    });
    $("#sigmabtn").click(function () {
        openit("#sigma");
        closenav();
        clearall();
    });
    $("#alibtn").click(function () {
        openit("#ali");
        closenav();
        clearall();
    });
    $("#goldsbtn").click(function () {
        openit("#golds");
        closenav();
        clearall();
    });
    $("#zscore").click(function () {
        openit("#zscores");
        closenav();
        clearall();
    });
    $("#pvaluebtn").click(function () {
        openit("#pvalues");
        closenav();
        clearall();
    });
    $("#ipbtn").click(function () {
        openit("#ip");
        closenav();
        clearall();
    });
    $("#ineqtribtn").click(function () {
        openit("#ineqtri");
        closenav();
        clearall();
    });
    $("#gcdbtn").click(function () {
        openit("#gcd");
        closenav();
        clearall();
    });
    $("#antilogbtn").click(function () {
        openit("#antilog");
        closenav();
        clearall();
    });
    $("#logbasebtn").click(function () {
        openit("#logbase");
        closenav();
        clearall();
    });
    $("#dbltimebtn").click(function () {
        openit("#dbltime");
        closenav();
        clearall();
    });
    $("#perchngbtn").click(function () {
        openit("#perchng");
        closenav();
        clearall();
    });
    $("#peroffbtn").click(function () {
        openit("#peroff");
        closenav();
        clearall();
    });
    $("#sphbtn").click(function(){
        openit("#sph");
        closenav();
        clearall();
    });
    $("#polarbtn").click(function(){
        openit("#polar");
        closenav();
        clearall();
    });
    $("#cylbtn").click(function(){
        openit("#cyl");
        closenav();
        clearall();
    });
    $("#modulobtn").click(function () {
        openit("#modulo");
        closenav();
        clearall();
    });
    $("#per_chng_volbtn").click(function () {
        openit("#per_chng_vol");
        closenav();
        clearall();

    });
    $("#rsqr").click(function () {
        openit("#rsqrs");
        closenav();
        clearall();

    });

    $("#vect").click(function () {
        openit("#vects");
        closenav();
        clearall();

    });
    //Euler's Totient Function
    $("#etfbtn").click(function () {
        openit("#etf");
        closenav();
        clearall();
    })
    $("#etcbtn").click(function () {
        openit("#etc");
        closenav();
        clearall();
    })
    //Next Prime Function
    $("#next-pri-btn").click(function () {
        openit("#nextPrime");
        closenav();
        clearall();
    })
    //Smallest prime factor calculator
    $("#sml-pri-btn").click(function () {
        openit("#smPrime");
        closenav();
        clearall();
    })
    //Sum of divisors calculator
    $("#sum-div-btn").click(function () {
        openit("#sumDiv");
        closenav();
        clearall();
    })
    //Double Factorial calculator
    $("#dbl-fact-btn").click(function () {
        openit("#dblFact");
        closenav();
        clearall();
    })
    //Catalan numbers calculator
    $("#cat-btn").click(function () {
        openit("#catNum");
        closenav();
        clearall();
    })
    //Smallest number divisible calculator
    $("#sm-num-btn").click(function () {
        openit("#smNum");
        closenav();
        clearall();
    })
    //Lucas series calculator
    $("#luc-btn").click(function () {
        openit("#lucNum");
        closenav();
        clearall();
    })
    //Ackermann function
    $("#ackermann-btn").click(function () {
        openit("#ackermann");
        closenav();
        clearall();
    })
    //Exponential Distribution Calculator
    $("#expo-dist-btn").click(function () {
        openit("#expoDist");
        closenav();
        clearall();
    })
    //Gamma Distribution Calculator Calculator
    $("#gamma-dist-btn").click(function () {
        openit("#gammaDist");
        closenav();
        clearall();
    })
    //Negative Binomial Distribution Calculator
    $("#negbinobtn").click(function () {
        openit("#negbino");
        closenav();
        clearall();
    })
    $("#hydrops").click(function () {
        openit("#hydroz");
        closenav();
        clearall();
    });

    $("#segcal").click(function () {
        openit("#segcals");
        closenav();
        clearall();
    });

    $("#confi-inter-btn").click(function () {
        openit("#confi-inter");
        closenav();
        clearall();
    });

    $("#oddsbtn").click(function () {
        openit("#odds");
        closenav();
        clearall();
    });

    $("#skew").click(function () {
        openit("#skews");
        closenav();
        clearall();
    });
    $("#kurtbtn").click(function () {
        openit("#kurt");
        closenav();
        clearall();
    });

    $("#igcbtn").click(function () {
        openit("#igc");
        closenav();
        clearall();
    });
    $("#typenumbtn").click(function () {
        openit("#typenum");
        closenav();
        clearall();
    });

    $("#resbtn").click(function () {
        openit("#res1");
        closenav();
        clearall();
    })

    $("#vectorbtn").click(function () {
        openit("#vector");
        closenav();
        clearall();

    });

    $("#mtmbtn").click(function () {
        openit("#mtm");
        closenav();
        clearall();

    });

    $("#cramerbtn").click(function () {
        openit("#cramer");
        closenav();
        clearall();
    })
    $("#binomialcoeffbtn").click(function () {
        openit("#binomialcoeff");
        closenav();
        clearall();
    });
    $("#binoexpbtn").click(function () {
        openit("#binoexp");
        closenav();
        clearall();
    });

    $("#foilbtn").click(function () {
        openit("#foil");
        closenav();
        clearall();
    });
    $("#clrbtn").click(function () {
        openit("#clr");
        closenav();
        clearall();
    });
    $("#reppbtn").click(function () {
        openit("#repp");
        closenav();
        clearall();
    });
    $("#height1btn").click(function () {
        openit("#height1");
        closenav();
        clearall();
    });
    $("#volumebtn").click(function () {
        openit("#volume");
        closenav();
        clearall();
    });
    $("#oop").click(function () {
        openit("#oops");
        closenav();
        clearall();
    });
    $("#vecbtn").click(function () {
        openit("#vec");
        closenav();
        clearall();
    });
    $("#curvebtn").click(function () {
        openit("#curve");
        closenav();
        clearall();
    });
    $("#parallelbtn").click(function () {
        openit("#parallel");
        closenav();
        clearall();
    });
    $("#betagammabtn").click(function () {
        openit("#betagamma");
        closenav();
        clearall();
    });
    $("#euclidbtn").click(function () {
        openit("#euclid");
        closenav();
        clearall();
    })

    $("#tdshapescalbtn").click(function () {
        openit("#tdshapescal");
        closenav();
        clearall();
    });
    $("#odshapescalbtn").click(function () {
        openit("#odshapescal");
        closenav();
        clearall();
    });
    $("#fdshapescalbtn").click(function () {
        openit("#fdshapescal");
        closenav();
        clearall();
    });
    $("#transbtn").click(function () {
        openit("#trans");
        closenav();
        clearall();
    });
    $("#consimbtn").click(function () {
        openit("#consim");
        closenav();
        clearall();
    });
    $("#cevthabtn").click(function () {
        openit("#cevtha");
        closenav();
        clearall();
    });
    $("#mibtn").click(function () {
        openit("#mi");
        closenav();
        clearall();
    });
    $("#boolbtn").click(function () {
        openit("#bool");
        closenav();
        clearall();
    });
    $("#setformulalistbtn").click(function () {
        openit("#setformula");
        closenav();
        clearall();
    });
    $("#convdivbtn").click(function () {
        openit("#convdiv");
        closenav();
        clearall();
    });
    $("#impsebtn").click(function () {
        openit("#impse");
        closenav();
        clearall();
    });
    $("#setopbtn").click(function () {
        openit("#setop");
        closenav();
        clearall();
    });
    $("#faulbtn").click(function () {
        openit("#faul");
        closenav();
        clearall();
    });
    $("#mulsolwithstepsbtn").click(function () {
        openit('#mulsolwithsteps');
        closenav();
        clearall();
    });
    $("#interestbtn").click(function () {
        openit('#interest');
        closenav();
        clearall();
    });
    $("#pricesbtn").click(function () {
        openit('#prices');
        closenav();
        clearall();
    });
    $("#simpletrignocollapsebutton").click(function () {
        openit("#simpletrignocollapse");
        closenav();
        clearall();
    });
    $("#trigonovaluestablebutton").click(function () {
        openit("#trigonovaluestable");
        closenav();
        clearall();
    });
    $("#srfbtn").click(function () {
        openit("#srf");
        closenav();
        clearall();
    });
    $("#maxminbtn").click(function () {
        openit("#maxmin");
        closenav();
        clearall();
    });
    $("#locrootsbtn").click(function () {
        openit("#locroots");
        closenav();
        clearall();
    });
    $("#datebtn").click(function () {
        openit("#datecal");
        closenav();
        clearall();
    });
    $("#trigonoidenbutton").click(function () {
        openit("#trigonoiden");
        closenav();
        clearall();
    });
    $("#trigonofunbutton").click(function () {
        openit("#trigonofun");
        closenav();
        clearall();
    });
    $("#expansionbutton").click(function () {
        openit("#expansion");
        closenav();
        clearall();
    });
    $("#solutiontributton").click(function () {
        openit("#solutiontri");
        closenav();
        clearall();
    });
    $("#sumAndDiffTribtn").click(function () {
        openit("#sumAndDiffTri");
        closenav();
        clearall();
    });
    $("#profitlossbutton").click(function () {
        openit("#profitloss");
        closenav();
        clearall();
    });
    $("#caybtn").click(function () {
        openit("#cay");
        closenav();
        clearall();
    });
    $("#inversetrigonoidenbutton").click(function () {
        openit("#inversetrigonoiden");
        closenav();
        clearall();
    });
    $("#hyptrigonoidenbutton").click(function () {
        openit("#hyptrigonoiden");
        closenav();
        clearall();
    });
    $("#invhyptrigonoidenbutton").click(function () {
        openit("#invhyptrigonoiden");
        closenav();
        clearall();
    });
    $("#unitcircbtn").click(function () {
        openit("#unitcirc");
        closenav();
        clearall();
    });
    $("#trigsolcollapsebtn").click(function () {
        openit("#trigsolcollapse");
        closenav();
        clearall();
    });
    $("#diffsolvebutton").click(function () {
        diffsolve();
    });
    $("#solvepardiff").click(function () {
        partialdiffsolve();
    });
    $("#rootsquadraticbtn").click(function () {
        openit("#rootsquadratic");
        closenav();
        clearall();
    });
    $("#equationssolverbtn").click(function () {
        openit("#equationssolver");
        closenav();
        clearall();
    });
    $("#circumradiusareabtn").click(function () {
        openit("#circumradiusarea");
        closenav();
        clearall();
    });
    $("#excircumbtn").click(function () {
        openit("#excircum");
        closenav();
        clearall();
    });

    $("#quadeqncalbtn").click(function () {
        openit("#quadeqncal");
        closenav();
        clearall();
    });
  
    $("#plotgraphoption").click(function () {
        openit("#plotgraph");
        closenav();
        clearall();
    });
    $("#incenterexcenterbtn").click(function () {
        openit("#incenterexcenter");
        closenav();
        clearall();
    });
    $("#roundoffbtn").click(function () {
        openit("#roundoff");
        closenav();
        clearall();
    });
    $("#unitconbtn").click(function () {
        openit("#unitconcal");
        closenav();
        clearall();
    });
    $("#spiconbtn").click(function () {
        openit("#spiconcal");
        closenav();
        clearall();
    });
    $("#factorialbtn").click(function () {
        openit("#factorial");
        closenav();
        clearall();
    });
    $("#pandcbtn").click(function () {
        openit("#pandc");
        closenav();
        clearall();
    });
    $("#expgrwth").click(function () {
        openit("#expgrwths");
        closenav();
        clearall();
    });

    // Prime
    $("#primebtn").click(function () {
        openit("#prime");
        closenav();
        clearall();
    });
    $("#powsbtn").click(function () {
        openit("#pows");
        closenav();
        clearall();
    });
    $("#curconbtn").click(function () {
        openit("#curconcal");
        closenav();
        clearall();
    });
    $("#sumbtn").click(function () {
        openit("#sum_n");
        closenav();
        clearall();
    });
    // Sum of nterms of an Arithmetic Progression
    $("#APbtn").click(function () {
        openit("#sum_n_AP");
        closenav();
        clearall();
    });
    // Sum of nterms of an Geometric Progression
    $("#GPbtn").click(function () {
        openit("#sum_n_GP");
        closenav();
        clearall();
    });
    // Sum of nterms of an Harmonic Progression
    $("#HPbtn").click(function () {
        openit("#sum_n_HP");
        closenav();
        clearall();
    });
    // algebraic equations formula lists
    $("#algebraic_formulacollapsebtn").click(function () {
        openit("#algebraic_formulascollapse");
        closenav();
        clearall();
    });
    //Function of Addition of Any Number System
    $("#add-all-btn").click(function () {
        openit("#adding-all");
        closenav();
        clearall();
    });
    //Function of Subtraction of Any Number System
    $("#subtracting-all-btn").click(function () {
        openit("#subtract-all");
        closenav();
        clearall();
    });
    //Function of Multiplication of Any Number System
    $("#mult-all-btn").click(function () {
        openit("#multiplying-all");
        closenav();
        clearall();
    });
    //Function of Division of Any Number System
    $("#div-all-btn").click(function () {
        openit("#divide-all");
        closenav();
        clearall();
    });

    //Function of collapsing binary/decimal section on click
    $("#decimal-to-binary-btn").click(function () {
        openit("#decimal-binary");
        closenav();
        clearall();
    });

    //Function of collapsing bitwise calculator section on click
    $("#bitwise-calc-btn").click(function () {
        openit("#bitwise-calc");
        closenav();
        clearall();
    });

    $("#onetwocom-calc-btn").click(function () {
        openit("#onetwocom-calc");
        closenav();
        clearall();
    });

    $("#hypergeomean").click(function () {
        openit("#hypergeomeans");
        closenav();
        clearall();
    });

    //Function for hamming code
    $("#hamming-code-btn").click(function(){
        openit("#hamming-calc");
        closenav();
        clearall();
    });

    //Function for hamming distance betn numbers
     $("#hamming-dist-btn").click(function(){
        openit("#hamming-dist");
        closenav();
        clearall();
    });

    //Function of collapsing binary/octal section on click
    $("#octal-to-binary-btn").click(function () {
        openit("#octal-binary");
        closenav();
        clearall();
    });


    $("#octal-to-hexadecimal-btn").click(function () {
        openit("#octal-hexadecimal");
        closenav();
        clearall();
    });

    // anyBase-to-anyBase-btn
    $("#anyBase-to-anyBase-btn").click(function () {
        openit("#anyBase");
        closenav();
        clearall();
    });


    $("#complexidentitiesbtn").click(function () {
        openit("#complexidentities");
        closenav();
        clearall();
    });
    $("#complexpropertiesbtn").click(function () {
        openit("#complexproperties");
        closenav();
        clearall();
    });
    $("#complex1collapsebtn").click(function () {
        openit("#complex1collapse");
        closenav();
        clearall();
    });
    $("#ln").click(function () {
        openit("#lns");
        closenav();
        clearall();
    });
    $("#complex2collapsebtn").click(function () {
        openit("#complex2collapse");
        closenav();
        clearall();
    });
    $("#greybtn").click(function () {
        openit("#grey-bin");
        closenav();
        clearall();
    });


    $("#stats-btn").click(function () {
        openit("#stats");
        closenav();
        clearall();
    });


    $("#log-collapsebtn").click(function () {
        openit("#log-collapse");
        closenav();
        clearall();
    });

    $("#bt-collapsebtn").click(function () {
        openit("#bt-collapse");
        closenav();
        clearall();
    });


    $("#bt-collapsebtn1").click(function () {
        openit("#bt-collapse1");
        closenav();
        clearall();
    });


    $("#bcdbtn").click(function () {
        openit("#bcd");
        closenav();
        clearall();
    });

    //Function of collapsing binary/hexadecimal section on click
    $("#binary-to-hexadecimal-btn").click(function () {
        openit("#binary-hexadecimal");
        closenav();
        clearall();
    });

    $("#circlecollapsebtn").click(function () {
        openit("#circlecollapse");
        closenav();
        clearall();
    });

    $("#parabolacollapsebtn").click(function () {
        openit("#parabolacollapse");
        closenav();
        clearall();
    });
    $("#parabbtn").click(function () {
        openit("#parab");
        closenav();
        clearall();
    });
    $("#ellipsecollapsebtn").click(function () {
        openit("#ellipsecollapse");
        closenav();
        clearall();
    });
    $("#hyperbolacollapsebtn").click(function () {
        openit("#hyperbolacollapse");
        closenav();
        clearall();
    });
    $("#differentiate-rulecollapsebtn").click(function () {
        openit("#differentiate-rulecollapse");
        closenav();
        clearall();
    });

    $("#plotangleoption").click(function () {
        openit("#plotangle");
        closenav();
        clearall();
    });


    $("#emibtn").click(function () {
        openit("#emical");
        closenav();
        clearall();
    });
    $("#expobtn").click(function () {
        openit("#expo");
        closenav();
        clearall();
    });
    $("#cibtn").click(function () {
        openit("#ci");
        closenav();
        clearall();
    });

    $("#gstbtn").click(function () {
        openit("#gstcal");
        closenav();
        clearall();
    });
    $("#goldrbtn").click(function () {
        openit("#goldr");
        closenav();
        clearall();
    });
    $("#goldrecbtn").click(function () {
        openit("#goldrec");
        closenav();
        clearall();
    });
    $("#platonicbtn").click(function () {
        openit("#platonic");
        closenav();
        clearall();
    });
    $("#archimedeanbtn").click(function () {
        openit("#archimedean");
        closenav();
        clearall();
    });
    $("#degbtn").click(function () {
        openit("#degcal");
        closenav();
        clearall();
    });

    $("#percalbtn").click(function () {
        openit("#percal");
        closenav();
        clearall();
    });
    $("#shapeinscribedbtn").click(function () {
        openit("#shapeinscribed");
        closenav();
        clearall();
    });
    $("#sievebtn").click(function () {
        openit("#sieve");
        closenav();
        clearall();
    });
    $("#meanbtn").click(function () {
        openit("#mean");
        closenav();
        clearall();
    });
    $("#tangentbtn").click(function () {
        openit("#tangent");
        closenav();
        clearall();
    });
    $("#probabilitycollapsebtn").click(function () {
        openit("#probabilitycollapse");
        closenav();
        clearall();
    });
    $("#coprimeexbtn").click(function () {
        openit("#coprimeex");
        closenav();
        clearall();
    });

    $("#lapprobtn").click(function () {
        openit("#lappro");
        closenav();
        clearall();
    });
    $("#2d-shape-insbtn").click(function () {
        openit("#2d-shape-ins");
        closenav();
        clearall();
    });

    $("#jointprobabilitycollapsebtn").click(function () {
        openit("#joint-probabilitycollapse");
        closenav();
        clearall();
    });
    $("#ideventbtn").click(function () {
        openit("#idevent");
        closenav();
        clearall();
    });
    $("#carpolarcalbtn").click(function () {
        openit("#carpolarcal");
        closenav();
        clearall();
    });
    $("#cylcarcalbtn").click(function () {
        openit("#cylcarcal");
        closenav();
        clearall();
    });
    $("#lancentarcbtn").click(function () {
        openit("#lancentarc");
        closenav();
        clearall();
    });

    $("#bayesprobabilitycollapsebtn").click(function () {
        openit("#bayes-probabilitycollapse");
        closenav();
        clearall();
    });

    $("#condprobabilitybtn").click(function () {
        openit("#condprobability");
        closenav();
        clearall();
    });
    $("#randommeanbtn").click(function () {
        openit("#randommean");
        closenav();
        clearall();
    });
    
    $("#relriskbtn").click(function () {
        var temp = "\\[Formula:\\space \\frac{[\\frac{a}{(a+b)}]}{[\\frac{c}{(c+d)}]}\\]";
        var output = document.getElementById("relriskform");
        output.innerHTML = temp;
        renderMathInElement(output);
        openit("#relrisk");
        closenav();
        clearall();
    }); 
    $("#geoprobabilitybtn").click(function () {
        openit("#geoprobability");
        closenav();
        clearall();
    });
    
    $("#ppvbtn").click(function () {
        openit("#ppv");
        closenav();
        clearall();
    });
    $("#relriskbtn").click(function () {
        var temp = "\\[Formula:\\space \\frac{[\\frac{a}{(a+b)}]}{[\\frac{c}{(c+d)}]}\\]";
        var output = document.getElementById("relriskform");
        output.innerHTML = temp;
        renderMathInElement(output);
        openit("#relrisk");
        closenav();
        clearall();
    }); 
    $("#geoprobabilitybtn").click(function () {
        openit("#geoprobability");   
        closenav();
        clearall();
    });
    
    $("#npvbtn").click(function () {
        openit("#npv");
        closenav();
        clearall();
    });
    
    $("#ppvbtn").click(function () {
        openit("#ppv");
        closenav();
        clearall();
    });

    $("#analyticalbtn").click(function () {
        openit("#analytical");
        closenav();
        clearall();
    });

    $("#fourier_seriescollapsebtn").click(function () {
        openit("#fourier_series");
        closenav();
        clearall();
    });

    $("#plotbargraphoption").click(function () {
        openit("#plotbargraph");
        closenav();
        clearall();
    });


    $("#wmc").click(function(){
        openit("#wmcs");
        closenav();
        clearall();
    });

    $("#confInterval").click(function () {
        openit("#confIntrvl");
        closenav();
        clearall();
    });

    $("#cv").click(function(){
        openit("#cvs");
        closenav();
        clearall();
    });
    $("#rms").click(function(){
        openit("#rmss");
        closenav();
        clearall();
    });
    $("#relationtypescollapsebtn").click(function(){
        openit("#relationtypes");
        closenav();
        clearall();
    });

    $("#slvx").click(function(){
        openit("#slvxs");
        closenav();
        clearall();
    });

    $("#halflifebtn").click(function () {
        openit("#halflife");
        closenav();
        clearall();
    });
    $("#perrankcalbtn").click(function(){
        openit("#rankcals");
        closenav();
        clearall();
    });
    $("#hyperbolictrignocollapsebtn").click(function(){
        openit("#hyperbolicratios");
        closenav();
        clearall();
    });
    $("#squarerootcollapsebtn").click(function(){
        openit("#squarerootcalc");
        closenav();
        clearall();
    });
    $("#sqseriescollapsebtn").click(function(){
        openit("#sqseries");
        closenav();
        clearall();
    });
    $("#nbaserootcollapsebtn").click(function(){
        openit("#n_baseroot");
        closenav();
        clearall();
    });
    $("#co_primebtn").click(function(){
        openit("#co_prime");
        closenav();
        clearall();
    });


})

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
