var toggle = false
function opencal() {
    $('#cal').slideToggle(function () {
        toggle = !toggle
    });
    if (!toggle) {
        $('#cal')[0].scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
}

$("#clock").click(function () {
    openit("#clocks");
    closenav();
});

$("#specialbtn").click(function () {
    openit("#specialnum");
    closenav();

});
$("#ducknumbtn").click(function () {
    openit("#ducknum");
    closenav();    
});
$("#armnumbtn").click(function () {
    openit("#armnum");
    closenav();    
});
$("#pallindromebtn").click(function () {
    openit("#pallindromenum");
    closenav();
});
$("#perfectbtn").click(function () {
    openit("#perfectnum");
    closenav();
});
$("#emripbtn").click(function () {
    openit("#emripnum");
    closenav();    
});
// Disarium Number
$("#disnumbtn").click(function () {
    openit("#disnum");
    closenav();    
});
$("#happybtn").click(function () {
    openit("#happynum");
    closenav();    
});
// Automorphic Number
$("#autonumbtn").click(function () {
    openit("#autonum");
    closenav();    
});
//Cullen Number
$("#culnumbtn").click(function () {
    openit("#culnum");
    closenav();    
});
//Cullen Number
$("#carnumbtn").click(function () {
    openit("#carnum");
    closenav();    
})
$("#magicbtn").click(function () {
    openit("#magicnum");
    closenav();    
});
// Pronic Number
$("#pronumbtn").click(function () {
    openit("#pronum");
    closenav();
});
// Harshad Number
$("#harnumbtn").click(function () {
    openit("#harnum");
    closenav();    
});
//Trimorphic Number
$("#trimornumbtn").click(function () {
    openit("#trimornum");
    closenav();    
});
//Pell Number
$("#pellnumbtn").click(function () {
    openit("#pellnum");
    closenav();    
});
$("#bmi").click(function () {
    openit("#bmis");
    closenav();    
});
//Eulerian Number
$("#eurnumbtn").click(function () {
    openit("#eurnum");
    closenav();    
});
//Delannoy Number
$("#delnumbtn").click(function () {
    openit("#delnum");
    closenav();    
});
$("#wag").click(function () {
    openit("#wags");
    closenav();    
});

$("#midrangebtn").click(function () {
    openit("#midrange");
    closenav();    
});

$("#utc").click(function () {
    openit("#utcs");
    closenav();    
});

$("#bilinearbtn").click(function () {
    openit("#bilinear");
    closenav();
});

$("#madc").click(function () {
    openit("#madcs");
    closenav();    
});

// Krishnamurthy Number
$("#krishnumbtn").click(function () {
    openit("#krishnum");
    closenav();    
});

$("#manhat").click(function () {
    openit("#manhats");
    closenav();    
});

$("#cartbtn").click(function () {
    openit("#cart");
    closenav();    
});
// Neon Number
$("#neonnumbtn").click(function () {
    openit("#neonnum");
    closenav();    
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
        
    });
    $("#std_dvtn").click(function () {
        openit("#deviation");
        closenav();
        
    });
    $("#sensibtn").click(function () {
        openit("#sensi");
        closenav();
        
    });
    $("#fractions_op").click(function () {
        openit("#fractions");
        closenav();
        
    });
    $("#logValues").click(function () {
        openit("#log_values");
        closenav();
        
    });
    $("#kap").click(function () {
        openit("#kaps");
        closenav();
        
    });
    $("#mathrbtn").click(function () {
        openit("#math");
        closenav();
        
    });
    $("#wood").click(function () {
        openit("#woods");
        closenav();
        
    });

    $("#minv").click(function () {
        openit("#mis");
        closenav();
        
    });

    $("#midrangebtn").click(function () {
        openit("#midrange");
        closenav();
        
    });

    $("#ainv").click(function () {
        openit("#ais");
        closenav();
        
    });

    $("#adam").click(function () {
        openit("#adams");
        closenav();
        
    });

    $("#per-chng-cuboid").click(function () {
        openit("#chng-vol-cuboid");
        closenav();
        
    })
    $("#abundant").click(function () {
        openit("#abundants");
        closenav();    
    })

    $("#per-chng-cube").click(function () {
        openit("#chng-vol-cube");
        closenav();        
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
    });
    $("#corrbtn").click(function () {
        openit("#corr");
        closenav();        
    });
    $("#cov").click(function () {
        openit("#covs");
        closenav();        
    });
    $("#lrc").click(function () {
        openit("#lrcs");
        closenav();        
    });
    $("#tableoption").click(function () {
        openit("#table");
        closenav();
    });
    $("#mec").click(function () {
        openit("#mecs");
        closenav();
    });
    //            matrix
    $("#matrixcollapsebtn").click(function () {
        openit("#matrixcollapse");
        closenav();       
    });
    $("#rankcalbtn").click(function () {
        openit("#rankcal");
        closenav();        
    });
    $("#dec2421btn").click(function () {
        openit("#dec2421");
        closenav();        
    });
    $("#bpmf").click(function () {
        openit("#bpmfs");
        closenav();        
    });
    $("#pentatopbtn").click(function () {
        openit("#pentatop");
        closenav();        
    });
    $("#perat").click(function () {
        openit("#perats");
        closenav();        
    });
    $("#sreslc").click(function () {
        openit("#stresscalc");
        closenav();        
    });
    $("#impfix").click(function () {
        openit("#impfixs");
        closenav();        
    });
    $("#ssst").click(function () {
        openit("#ssts");
        closenav();        
    });
    $("#sosq").click(function () {
        openit("#sosqs");
        closenav();        
    });
    $("#numcubesRange").click(function () {
        openit("#numcubesRanges");
        closenav();        
    });
    $("#sosqn").click(function () {
        openit("#sosqsn");
        closenav();        
    });
    $("#squaresRange").click(function () {
        openit("#squaresRanges");
        closenav();        
    });
    $("#cubesRange").click(function () {
        openit("#cubesRanges");
        closenav();        
    });
    $("#arc").click(function () {
        openit("#arcs");
        closenav();        
    });
    $("#hyper").click(function () {
        openit("#hypers");
        closenav();        
    });
    $("#crescent").click(function () {
        openit("#crescentLune");
        closenav();        
    });
    $("#ex3btn").click(function () {
        openit("#ex3");
        closenav();        
    });
    $("#vecalgbtn").click(function () {
        openit("#vecalg");
        closenav();
        
    });
    $("#squarecubebtn").click(function () {
        openit("#squarecube");
        closenav();
        
    });
    $("#betabtn").click(function () {
        openit("#beta");
        closenav();
        
    });
    $("#ooc").click(function () {
        openit("#oocs");
        closenav();
        
    });
    $("#imprtoprbtn").click(function () {
        openit("#imprtopr");

        closenav();
        
    });
    $("#vpd").click(function () {
        openit("#vpds");
        closenav();
        
    });
    $("#thdifbtn").click(function () {
        openit("#thdif");
        closenav();
        
    });
    $("#aodbtn").click(function () {
        openit("#aod");
        closenav();
        
    });
    $("#corgeobtn").click(function () {
        openit("#corgeo");
        closenav();
        
    });
    $("#matrixpropsbtn").click(function () {
        openit("#matrixprops");
        closenav();
        
    });
    $("#3dgeocalcbtn").click(function () {
        openit("#3dgeocalc");
        closenav();
        
    });
    $("#straightlinebtn").click(function () {
        openit("#straightline");
        closenav();
        
    });
    $("#algebraic-idencollapsebtn").click(function () {
        openit("#algebraic-idencollapse");
        closenav();
        
    });
    $("#differentiate").click(function () {
        openit("#differentiatecollapse");
        closenav();
        
    });
    $("#3dgeobtn").click(function () {
        openit("#3dgeo");
        closenav();
        
    });
    $("#desbtn").click(function () {
        openit("#des");
        closenav();
        
    });
    $("#dribtn").click(function () {
        openit("#dri");
        closenav();
        
    });
    $("#expansioncbtn").click(function () {
        openit("#expansionc");
        closenav();
        
    });
    $("#integrate").click(function () {
        openit("#integralcollapse");
        closenav();
        
    });
    $("#hypergeo").click(function () {
        openit("#hypergeos");
        closenav();
        
    });
    $("#integration-idencollapsebtn").click(function () {
        openit("#integration-idencollapse");
        closenav();
        
    });
    $("#defintegration-idencollapsebtn").click(function () {
        openit("#defintegration-idencollapse");
        closenav();
        
    });
    $("#3d-solid-btn").click(function () {
        openit("#3d-solid");
        closenav();
        
    })

    $("#2d-shape-btn").click(function () {
        openit("#2d-shape");
        closenav();
        
    });

    $("#3d-shape-btn").click(function () {
        openit("#3d-shape");
        closenav();
        
    });

    $("#per-chng-sphere").click(function () {
        openit("#chng-vol-sphere");
        closenav();
        
    })

    $("#pythtriplebtn").click(function () {
        openit("#pythtriple");
        closenav();
        
    });
    $("#partialdiff").click(function () {
        openit("#partialdiffcollapse");
        closenav();
        
    });
    $("#laplace").click(function () {
        openit("#laplacecollapse");
        closenav();
        
    });
    $("#limits").click(function () {
        openit("#limitscollapse");
        closenav();
        
    });
    $("#shapescalbtn").click(function () {
        openit("#shapescal");
        closenav();
        
    });
    $("#ppmf").click(function () {
        openit("#ppmfs");
        closenav();
        
    });
    $("#giffbtn").click(function () {
        openit("#giff");
        closenav();
        

    });
    $("#qrtlbtn").click(function () {
        openit("#qrtl");
        closenav();
        

    });
    $("#planeinterceptbtn").click(function () {
        openit("#planeintercept");
        closenav();
        
    });
    $("#declbtn").click(function () {
        openit("#decl");
        closenav();
        

    });

    $("#dipbtn").click(function () {
        openit("#dip");
        closenav();
        
    })
    $("#crossbtn").click(function () {
        openit("#cross");
        closenav();
        
    })
    $("#diamondbtn").click(function () {
        openit("#diamond");
        closenav();
        
    })
    $("#wandtbtn").click(function () {
        openit("#wandt");
        closenav();
        
    })
    $("#rootsunitybtn").click(function () {
        openit("#rootsunity");
        closenav();
        
    })
    $("#HPbttn").click(function () {
        openit("#hp");
        closenav();
        
    });
    $("#eir").click(function () {
        openit("#eirs");
        closenav();
        
    });
    $("#secareabtn").click(function () {
        openit("#secarea");
        closenav();
        
    });
    $("#propcirclebtn").click(function () {
        openit("#propcircle");
        closenav();
        
    });
    $("#propquadbtn").click(function () {
        openit("#propquad");
        closenav();
        
    });
    $("#theobtn").click(function () {
        openit("#theo");
        closenav();
        
    });
    $("#coorbtn").click(function () {
        openit("#coor");
        closenav();
        
    });
    $("#errper").click(function () {
        openit("#errpers");
        closenav();
        
    });
    $("#suppang").click(function () {
        openit("#suppangs");
        closenav();
        
    });
    $("#compangbtn").click(function () {
        openit("#compang");
        closenav();
        
    });
    $("#cotermangbtn").click(function () {
        openit("#cotermang");
        closenav();
        
    });
    $("#ttestbtn").click(function () {
        openit("#ttest");
        closenav();
        
    });
    $("#regressionbtn").click(function () {
        openit("#regressiontest");
        closenav();
        
    });
    $("#abtestbtn").click(function () {
        openit("#abtest");
        closenav();
        
    });
    $("#ftestbtn").click(function () {
        openit("#ftest");
        closenav();
        
    });
    $("#ztestbtn").click(function () {
        openit("#ztest");
        closenav();
        
    });
    $("#ccbtn").click(function () {
        openit("#cchart");
        closenav();
        
    });
    $("#pbtn").click(function () {
        openit("#pchart");
        closenav();
        
    });
    $("#rbtn").click(function () {
        openit("#rchart");
        closenav();
        
    });
    $("#shepbtn").click(function () {
        openit("#sheppard");
        closenav();
        
    });
    $("#momentbtn").click(function () {
        openit("#momentcal");
        closenav();
        
    });
    $("#npbtn").click(function () {
        openit("#npchart");
        closenav();
        
    });
    $("#xbtn").click(function () {
        openit("#xchart");
        closenav();
        
    });
    $("#chitestbtn").click(function () {
        openit("#chitest");
        closenav();
        
    });
    $("#leadbtn").click(function () {
        openit("#leadtest");
        closenav();
        
    });
    $("#taktbtn").click(function () {
        openit("#takttest");
        closenav();
        
    });
    $("#throughputbtn").click(function () {
        openit("#throughputtest");
        closenav();
        
    });
    $("#cyclebtn").click(function () {
        openit("#cycletest");
        closenav();
        
    });
    $("#gammabtn").click(function () {
        openit("#gamma");
        closenav();
        
    });
    $("#pairfact").click(function () {
        openit("#pairfacts");
        closenav();
        
    });
    $("#diffeqnbtn").click(function () {
        openit("#diffeqn");
        closenav();
        
    });
    $("#pdiffeqnbtn").click(function () {
        openit("#pdiffeqn");
        closenav();
        
    });
    $("#sigmabtn").click(function () {
        openit("#sigma");
        closenav();
        
    });
    $("#alibtn").click(function () {
        openit("#ali");
        closenav();
        
    });
    $("#goldsbtn").click(function () {
        openit("#golds");
        closenav();
        
    });
    $("#zscore").click(function () {
        openit("#zscores");
        closenav();
        
    });
    $("#pvaluebtn").click(function () {
        openit("#pvalues");
        closenav();
        
    });
    $("#ipbtn").click(function () {
        openit("#ip");
        closenav();
        
    });
    $("#ineqtribtn").click(function () {
        openit("#ineqtri");
        closenav();
        
    });
    $("#gcdbtn").click(function () {
        openit("#gcd");
        closenav();
        
    });
    $("#antilogbtn").click(function () {
        openit("#antilog");
        closenav();
        
    });
    $("#logbasebtn").click(function () {
        openit("#logbase");
        closenav();
        
    });
    $("#dbltimebtn").click(function () {
        openit("#dbltime");
        closenav();
        
    });
    $("#perchngbtn").click(function () {
        openit("#perchng");
        closenav();
        
    });
    $("#peroffbtn").click(function () {
        openit("#peroff");
        closenav();
        
    });
    $("#sphbtn").click(function () {
        openit("#sph");
        closenav();
        
    });
    $("#polarbtn").click(function () {
        openit("#polar");
        closenav();
        
    });
    $("#cylbtn").click(function () {
        openit("#cyl");
        closenav();
        
    });
    $("#modulobtn").click(function () {
        openit("#modulo");
        closenav();
        
    });
    $("#per_chng_volbtn").click(function () {
        openit("#per_chng_vol");
        closenav();
        

    });
    $("#rsqr").click(function () {
        openit("#rsqrs");
        closenav();
        

    });

    $("#vect").click(function () {
        openit("#vects");
        closenav();
        

    });
    //Euler's Totient Function
    $("#etfbtn").click(function () {
        openit("#etf");
        closenav();
        
    })
    $("#etcbtn").click(function () {
        openit("#etc");
        closenav();
        
    })
    //Next Prime Function
    $("#next-pri-btn").click(function () {
        openit("#nextPrime");
        closenav();
        
    })
    //Smallest prime factor calculator
    $("#sml-pri-btn").click(function () {
        openit("#smPrime");
        closenav();
        
    })
    //Sum of divisors calculator
    $("#sum-div-btn").click(function () {
        openit("#sumDiv");
        closenav();
        
    })
    //Double Factorial calculator
    $("#dbl-fact-btn").click(function () {
        openit("#dblFact");
        closenav();
        
    })
    //Catalan numbers calculator
    $("#cat-btn").click(function () {
        openit("#catNum");
        closenav();
        
    })
    //Smallest number divisible calculator
    $("#sm-num-btn").click(function () {
        openit("#smNum");
        closenav();
        
    })
    //Lucas series calculator
    $("#luc-btn").click(function () {
        openit("#lucNum");
        closenav();
        
    })
    //Ackermann function
    $("#ackermann-btn").click(function () {
        openit("#ackermann");
        closenav();
        
    })
    //Exponential Distribution Calculator
    $("#expo-dist-btn").click(function () {
        openit("#expoDist");
        closenav();
        
    })
    //Gamma Distribution Calculator Calculator
    $("#gamma-dist-btn").click(function () {
        openit("#gammaDist");
        closenav();
        
    })
    //Negative Binomial Distribution Calculator
    $("#negbinobtn").click(function () {
        openit("#negbino");
        closenav();
        
    })
    $("#hydrops").click(function () {
        openit("#hydroz");
        closenav();
        
    });

    $("#segcal").click(function () {
        openit("#segcals");
        closenav();
        
    });

    $("#confi-inter-btn").click(function () {
        openit("#confi-inter");
        closenav();
        
    });

    $("#oddsbtn").click(function () {
        openit("#odds");
        closenav();
        
    });

    $("#skew").click(function () {
        openit("#skews");
        closenav();
        
    });
    $("#kurtbtn").click(function () {
        openit("#kurt");
        closenav();
        
    });

    $("#igcbtn").click(function () {
        openit("#igc");
        closenav();
        
    });
    $("#typenumbtn").click(function () {
        openit("#typenum");
        closenav();
        
    });

    $("#resbtn").click(function () {
        openit("#res1");
        closenav();
        
    })

    $("#vectorbtn").click(function () {
        openit("#vector");
        closenav();
        

    });

    $("#mtmbtn").click(function () {
        openit("#mtm");
        closenav();
        

    });

    $("#cramerbtn").click(function () {
        openit("#cramer");
        closenav();
        
    })
    $("#binomialcoeffbtn").click(function () {
        openit("#binomialcoeff");
        closenav();
        
    });
    $("#binoexpbtn").click(function () {
        openit("#binoexp");
        closenav();
        
    });

    $("#foilbtn").click(function () {
        openit("#foil");
        closenav();
        
    });
    $("#clrbtn").click(function () {
        openit("#clr");
        closenav();
        
    });
    $("#reppbtn").click(function () {
        openit("#repp");
        closenav();
        
    });
    $("#height1btn").click(function () {
        openit("#height1");
        closenav();
        
    });
    $("#volumebtn").click(function () {
        openit("#volume");
        closenav();
        
    });
    $("#oop").click(function () {
        openit("#oops");
        closenav();
        
    });
    $("#vecbtn").click(function () {
        openit("#vec");
        closenav();
        
    });
    $("#curvebtn").click(function () {
        openit("#curve");
        closenav();
        
    });
    $("#parallelbtn").click(function () {
        openit("#parallel");
        closenav();
        
    });
    $("#betagammabtn").click(function () {
        openit("#betagamma");
        closenav();
        
    });

    $("#tdshapescalbtn").click(function () {
        openit("#tdshapescal");
        closenav();
        
    });
    $("#odshapescalbtn").click(function () {
        openit("#odshapescal");
        closenav();
        
    });
    $("#fdshapescalbtn").click(function () {
        openit("#fdshapescal");
        closenav();
        
    });
    $("#transbtn").click(function () {
        openit("#trans");
        closenav();
        
    });
    $("#consimbtn").click(function () {
        openit("#consim");
        closenav();
        
    });
    $("#cevthabtn").click(function () {
        openit("#cevtha");
        closenav();
        
    });
    $("#mibtn").click(function () {
        openit("#mi");
        closenav();
        
    });
    $("#boolbtn").click(function () {
        openit("#bool");
        closenav();
        
    });
    $("#setformulalistbtn").click(function () {
        openit("#setformula");
        closenav();
        
    });
    $("#convdivbtn").click(function () {
        openit("#convdiv");
        closenav();
        
    });
    $("#impsebtn").click(function () {
        openit("#impse");
        closenav();
        
    });
    $("#setopbtn").click(function () {
        openit("#setop");
        closenav();
        
    });
    $("#faulbtn").click(function () {
        openit("#faul");
        closenav();
        
    });
    $("#mulsolwithstepsbtn").click(function () {
        openit('#mulsolwithsteps');
        closenav();
        
    });
    $("#interestbtn").click(function () {
        openit('#interest');
        closenav();
        
    });
    $("#pricesbtn").click(function () {
        openit('#prices');
        closenav();
        
    });
    $("#simpletrignocollapsebutton").click(function () {
        openit("#simpletrignocollapse");
        closenav();
        
    });
    $("#trigonovaluestablebutton").click(function () {
        openit("#trigonovaluestable");
        closenav();
        
    });
    $("#srfbtn").click(function () {
        openit("#srf");
        closenav();
        
    });
    $("#maxminbtn").click(function () {
        openit("#maxmin");
        closenav();
        
    });
    $("#locrootsbtn").click(function () {
        openit("#locroots");
        closenav();
        
    });
    $("#datebtn").click(function () {
        openit("#datecal");
        closenav();
        
    });
    $("#trigonoidenbutton").click(function () {
        openit("#trigonoiden");
        closenav();
        
    });
    $("#trigonofunbutton").click(function () {
        openit("#trigonofun");
        closenav();
        
    });
    $("#expansionbutton").click(function () {
        openit("#expansion");
        closenav();
        
    });
    $("#solutiontributton").click(function () {
        openit("#solutiontri");
        closenav();
        
    });
    $("#sumAndDiffTribtn").click(function () {
        openit("#sumAndDiffTri");
        closenav();
        
    });
    $("#profitlossbutton").click(function () {
        openit("#profitloss");
        closenav();
        
    });
    $("#caybtn").click(function () {
        openit("#cay");
        closenav();
        
    });
    $("#inversetrigonoidenbutton").click(function () {
        openit("#inversetrigonoiden");
        closenav();
        
    });
    $("#hyptrigonoidenbutton").click(function () {
        openit("#hyptrigonoiden");
        closenav();
        
    });
    $("#invhyptrigonoidenbutton").click(function () {
        openit("#invhyptrigonoiden");
        closenav();
        
    });
    $("#unitcircbtn").click(function () {
        openit("#unitcirc");
        closenav();
        
    });
    $("#trigsolcollapsebtn").click(function () {
        openit("#trigsolcollapse");
        closenav();
        
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
        
    });
    $("#equationssolverbtn").click(function () {
        openit("#equationssolver");
        closenav();
        
    });
    $("#circumradiusareabtn").click(function () {
        openit("#circumradiusarea");
        closenav();
        
    });
    $("#excircumbtn").click(function () {
        openit("#excircum");
        closenav();
        
    });

    $("#quadeqncalbtn").click(function () {
        openit("#quadeqncal");
        closenav();
        
    });

    $("#plotgraphoption").click(function () {
        openit("#plotgraph");
        closenav();
        
    });
    $("#incenterexcenterbtn").click(function () {
        openit("#incenterexcenter");
        closenav();
        
    });
    $("#roundoffbtn").click(function () {
        openit("#roundoff");
        closenav();
        
    });
    $("#unitconbtn").click(function () {
        openit("#unitconcal");
        closenav();
        
    });
    $("#spiconbtn").click(function () {
        openit("#spiconcal");
        closenav();
        
    });
    $("#factorialbtn").click(function () {
        openit("#factorial");
        closenav();
        
    });
    $("#pandcbtn").click(function () {
        openit("#pandc");
        closenav();
        
    });
    $("#expgrwth").click(function () {
        openit("#expgrwths");
        closenav();
        
    });

    // Prime
    $("#primebtn").click(function () {
        openit("#prime");
        closenav();
        
    });
    $("#powsbtn").click(function () {
        openit("#pows");
        closenav();
        
    });
    $("#curconbtn").click(function () {
        openit("#curconcal");
        closenav();
        
    });
    $("#sumbtn").click(function () {
        openit("#sum_n");
        closenav();
        
    });
    // Sum of nterms of an Arithmetic Progression
    $("#APbtn").click(function () {
        openit("#sum_n_AP");
        closenav();
        
    });
    // Sum of nterms of an Geometric Progression
    $("#GPbtn").click(function () {
        openit("#sum_n_GP");
        closenav();
        
    });
    // Sum of nterms of an Harmonic Progression
    $("#HPbtn").click(function () {
        openit("#sum_n_HP");
        closenav();
        
    });
    // algebraic equations formula lists
    $("#algebraic_formulacollapsebtn").click(function () {
        openit("#algebraic_formulascollapse");
        closenav();
        
    });
    //Function of Addition of Any Number System
    $("#add-all-btn").click(function () {
        openit("#adding-all");
        closenav();
        
    });
    //Function of Subtraction of Any Number System
    $("#subtracting-all-btn").click(function () {
        openit("#subtract-all");
        closenav();
        
    });
    //Function of Multiplication of Any Number System
    $("#mult-all-btn").click(function () {
        openit("#multiplying-all");
        closenav();
        
    });
    //Function of Division of Any Number System
    $("#div-all-btn").click(function () {
        openit("#divide-all");
        closenav();
        
    });

    //Function of collapsing binary/decimal section on click
    $("#decimal-to-binary-btn").click(function () {
        openit("#decimal-binary");
        closenav();
        
    });

    //Function of collapsing bitwise calculator section on click
    $("#bitwise-calc-btn").click(function () {
        openit("#bitwise-calc");
        closenav();
        
    });

    $("#onetwocom-calc-btn").click(function () {
        openit("#onetwocom-calc");
        closenav();
        
    });

    $("#hypergeomean").click(function () {
        openit("#hypergeomeans");
        closenav();
        
    });

    //Function for hamming code
    $("#hamming-code-btn").click(function () {
        openit("#hamming-calc");
        closenav();
        
    });

    //Function for hamming distance betn numbers
    $("#hamming-dist-btn").click(function () {
        openit("#hamming-dist");
        closenav();
        
    });

    //Function of collapsing binary/octal section on click
    $("#octal-to-binary-btn").click(function () {
        openit("#octal-binary");
        closenav();
        
    });


    $("#octal-to-hexadecimal-btn").click(function () {
        openit("#octal-hexadecimal");
        closenav();
        
    });

    // anyBase-to-anyBase-btn
    $("#anyBase-to-anyBase-btn").click(function () {
        openit("#anyBase");
        closenav();
        
    });


    $("#complexidentitiesbtn").click(function () {
        openit("#complexidentities");
        closenav();
        
    });
    $("#complexpropertiesbtn").click(function () {
        openit("#complexproperties");
        closenav();
        
    });
    $("#complex1collapsebtn").click(function () {
        openit("#complex1collapse");
        closenav();
        
    });
    $("#ln").click(function () {
        openit("#lns");
        closenav();
        
    });
    $("#complex2collapsebtn").click(function () {
        openit("#complex2collapse");
        closenav();
        
    });
    $("#greybtn").click(function () {
        openit("#grey-bin");
        closenav();
        
    });


    $("#stats-btn").click(function () {
        openit("#stats");
        closenav();
        
    });


    $("#log-collapsebtn").click(function () {
        openit("#log-collapse");
        closenav();
        
    });

    $("#bt-collapsebtn").click(function () {
        openit("#bt-collapse");
        closenav();
        
    });


    $("#bt-collapsebtn1").click(function () {
        openit("#bt-collapse1");
        closenav();
        
    });


    $("#bcdbtn").click(function () {
        openit("#bcd");
        closenav();
        
    });

    //Function of collapsing binary/hexadecimal section on click
    $("#binary-to-hexadecimal-btn").click(function () {
        openit("#binary-hexadecimal");
        closenav();
        
    });

    $("#circlecollapsebtn").click(function () {
        openit("#circlecollapse");
        closenav();
        
    });

    $("#parabolacollapsebtn").click(function () {
        openit("#parabolacollapse");
        closenav();
        
    });
    $("#parabbtn").click(function () {
        openit("#parab");
        closenav();
        
    });
    $("#ellipsecollapsebtn").click(function () {
        openit("#ellipsecollapse");
        closenav();
        
    });
    $("#hyperbolacollapsebtn").click(function () {
        openit("#hyperbolacollapse");
        closenav();
        
    });
    $("#differentiate-rulecollapsebtn").click(function () {
        openit("#differentiate-rulecollapse");
        closenav();
        
    });

    $("#plotangleoption").click(function () {
        openit("#plotangle");
        closenav();
        
    });
    $("#pmfbtn").click(function(){
        openit("#binomial_pmf");
        closenav();
    });


    $("#emibtn").click(function () {
        openit("#emical");
        closenav();
        
    });
    $("#expobtn").click(function () {
        openit("#expo");
        closenav();
        
    });
    $("#cibtn").click(function () {
        openit("#ci");
        closenav();
        
    });

    $("#gstbtn").click(function () {
        openit("#gstcal");
        closenav();
        
    });
    $("#goldrbtn").click(function () {
        openit("#goldr");
        closenav();
        
    });
    $("#goldrecbtn").click(function () {
        openit("#goldrec");
        closenav();
        
    });
    $("#platonicbtn").click(function () {
        openit("#platonic");
        closenav();
        
    });
    $("#archimedeanbtn").click(function () {
        openit("#archimedean");
        closenav();
        
    });
    $("#degbtn").click(function () {
        openit("#degcal");
        closenav();
        
    });

    $("#percalbtn").click(function () {
        openit("#percal");
        closenav();
        
    });
    $("#shapeinscribedbtn").click(function () {
        openit("#shapeinscribed");
        closenav();
        
    });
    $("#sievebtn").click(function () {
        openit("#sieve");
        closenav();
        
    });
    $("#meanbtn").click(function () {
        openit("#mean");
        closenav();
        
    });
    $("#tangentbtn").click(function () {
        openit("#tangent");
        closenav();
        
    });
    $("#probabilitycollapsebtn").click(function () {
        openit("#probabilitycollapse");
        closenav();
        
    });
    $("#coprimeexbtn").click(function () {
        openit("#coprimeex");
        closenav();
        
    });

    $("#lapprobtn").click(function () {
        openit("#lappro");
        closenav();
        
    });
    $("#2d-shape-insbtn").click(function () {
        openit("#2d-shape-ins");
        closenav();
        
    });

    $("#jointprobabilitycollapsebtn").click(function () {
        openit("#joint-probabilitycollapse");
        closenav();
        
    });
    $("#ideventbtn").click(function () {
        openit("#idevent");
        closenav();
        
    });
    $("#carpolarcalbtn").click(function () {
        openit("#carpolarcal");
        closenav();
        
    });
    $("#cylcarcalbtn").click(function () {
        openit("#cylcarcal");
        closenav();
        
    });
    $("#lancentarcbtn").click(function () {
        openit("#lancentarc");
        closenav();
        
    });

    $("#bayesprobabilitycollapsebtn").click(function () {
        openit("#bayes-probabilitycollapse");
        closenav();
        
    });

    $("#condprobabilitybtn").click(function () {
        openit("#condprobability");
        closenav();
        
    });
    $("#randommeanbtn").click(function () {
        openit("#randommean");
        closenav();
        
    });

    $("#geoprobabilitybtn").click(function () {
        openit("#geoprobability");
        closenav();
        
    });

    $("#ppvbtn").click(function () {
        openit("#ppv");
        closenav();
        
    });
    $("#relriskbtn").click(function () {
        var temp = "\\[Formula:\\space \\frac{[\\frac{a}{(a+b)}]}{[\\frac{c}{(c+d)}]}\\]";
        var output = document.getElementById("relriskform");
        output.innerHTML = temp;
        renderMathInElement(output);
        openit("#relrisk");
        closenav();
        
    });

    $("#npvbtn").click(function () {
        openit("#npv");
        closenav();
        
    });

    $("#ppvbtn").click(function () {
        openit("#ppv");
        closenav();
        
    });

    $("#analyticalbtn").click(function () {
        openit("#analytical");
        closenav();
        
    });

    $("#fourier_seriescollapsebtn").click(function () {
        openit("#fourier_series");
        closenav();
        
    });

    $("#plotbargraphoption").click(function () {
        openit("#plotbargraph");
        closenav();
        
    });


    $("#wmc").click(function () {
        openit("#wmcs");
        closenav();
        
    });

    $("#confInterval").click(function () {
        openit("#confIntrvl");
        closenav();
        
    });

    $("#cv").click(function () {
        openit("#cvs");
        closenav();
        
    });
    $("#rms").click(function () {
        openit("#rmss");
        closenav();
        
    });
    $("#relationtypescollapsebtn").click(function () {
        openit("#relationtypes");
        closenav();
        
    });

    $("#slvx").click(function () {
        openit("#slvxs");
        closenav();
        
    });

    $("#halflifebtn").click(function () {
        openit("#halflife");
        closenav();
        
    });
    $("#perrankcalbtn").click(function () {
        openit("#rankcals");
        closenav();
        
    });
    $("#hyperbolictrignocollapsebtn").click(function () {
        openit("#hyperbolicratios");
        closenav();
        
    });
    $("#squarerootcollapsebtn").click(function () {
        openit("#squarerootcalc");
        closenav();
        
    });
    $("#sqseriescollapsebtn").click(function () {
        openit("#sqseries");
        closenav();
        
    });
    $("#nbaserootcollapsebtn").click(function () {
        openit("#n_baseroot");
        closenav();
        
    });
    $("#co_primebtn").click(function () {
        openit("#co_prime");
        closenav();
        
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

//single matrix
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

var matrixsingle = [];

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
    else if (parseInt(row) <= 0 || parseInt(column) <= 0) {
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

        } else if (parseInt(row) >= 5 && (parseInt(row) == parseInt(column))) {
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

function calculatetranspose() {
    sendtomatrixsingle();
    loader('show');
    setTimeout(function () {
        var col=document.getElementById('scolumn1').value;
        var row=document.getElementById('srow1').value;

        var data=transpose(matrixsingle,row,col);        
        document.getElementById('singlematrixresult').innerHTML=data['result'];        
        document.getElementById('singlematrixexplanation').innerHTML = data['steps'];

        renderMathInElement(document.getElementById('singlematrixresult'));
        renderMathInElement(document.getElementById('singlematrixexplanation'));        
    }, 100);
    setTimeout(function () {
        loader('hide');
    }, 2000);
}

function calculaterank(){
    loader('show');
    setTimeout(function () {        
        sendtomatrixsingle();
        var row = document.getElementById('srow1').value;
        var column = document.getElementById('scolumn1').value;
        var data=rank(matrixsingle,row,column);
        document.getElementById('singlematrixresult').innerHTML = "\\[Rank \\space Of \\space Matrix=" + data['result'] + "\\]";
        document.getElementById('singlematrixexplanation').innerHTML = data['steps'];
        renderMathInElement(document.getElementById('singlematrixexplanation'));
        renderMathInElement(document.getElementById('singlematrixresult'));
    }, 100);
    setTimeout(function () {
        loader('hide');
    }, 2000);
}

function calculatematrixpower(){
    loader('show');
    setTimeout(function () {
        sendtomatrixsingle();
        var row = document.getElementById('srow1').value;
        var col = document.getElementById('scolumn1').value;
        var pow = document.getElementById('powInp').value;

        var data=matrixPower(matrixsingle,row,col,pow);

        document.getElementById('singlematrixexplanation').innerHTML = data['steps'];
        renderMathInElement(document.getElementById('singlematrixexplanation'));    

    }, 100);
    setTimeout(function () {
        loader('hide');
    }, 2000);
}

function calculateminorsandcofactors(){
    loader('show');
    setTimeout(function () {
        var row = document.getElementById('srow1').value;
        var col = document.getElementById('scolumn1').value;
        sendtomatrixsingle();
        var data=minorsAndCoFactors(matrixsingle,row,col);   

        document.getElementById('singlematrixresult').innerHTML=data['cofactors'];
        
        var el = document.createElement('div')
        el.id = 'minormat'
        el.style.margin = '10px';
        document.getElementById('singlematrixresult').appendChild(el);
        document.getElementById('minormat').innerHTML=data['minors'];
        
        document.getElementById('singlematrixexplanation').innerHTML = data['steps'];
        
        renderMathInElement(document.getElementById('singlematrixexplanation'));    
        renderMathInElement(document.getElementById('minormat'));    
        renderMathInElement(document.getElementById('singlematrixresult'));

    }, 100);
    setTimeout(function () {
        loader('hide');
    }, 2000);
}

function calculateinverse(){
    loader('show');
    setTimeout(function () {
        sendtomatrixsingle();
        var row = document.getElementById('srow1').value;
        var col = document.getElementById('scolumn1').value;
        var data=inverse(matrixsingle,row,col);
        document.getElementById('singlematrixexplanation').innerHTML = data['steps'];
        renderMathInElement(document.getElementById('singlematrixexplanation'));
    }, 100);
    setTimeout(function () {
        loader('hide');
    }, 2000);
}

function soperation(value) {
    if (value == 'Transpose') {
        calculatetranspose();
    } else if (value == 'Rank') {
        calculaterank();
    }
    else if (value == 'Inverse') {
        calculateinverse();
    }
    else if (value == 'Minors & Co-Factors') {
        calculateminorsandcofactors();
    } else if (value == "Determinant") {
        laplacedeterminant();
    } else if (value == 'Matrix Power') {
        calculatematrixpower();
    }
}


// multiple matrix
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

function signofmatrix(value) {
    var el = document.getElementById('signofmatrix');
    el.innerHTML = value;
    document.getElementById('matrixresult').textContent = '';
    document.getElementById('explanationmatrixresult').textContent = '';
}

function calculatesumofmatrix(){
    loader('show');
    setTimeout(function () {
        sendtomatrix1();
        sendtomatrix2();
        var row=document.getElementById('row2').value;
        var col=document.getElementById('column2').value;
        var data=sumofmatrix(matrix1,matrix2,row,col);
        document.getElementById('explanationmatrixresult').innerHTML = data['steps'];
        document.getElementById('matrixresult').innerHTML=data['result'];
        renderMathInElement(document.getElementById('explanationmatrixresult'));        
        renderMathInElement(document.getElementById('matrixresult'));
    }, 100);
    setTimeout(function () {
        loader('hide');
    }, 2000);
}

function calculatesubtractofmatrix(){
    loader('show');
    setTimeout(function () {
        sendtomatrix1();
        sendtomatrix2();
        var row=document.getElementById('row2').value;
        var col=document.getElementById('column2').value;
        var data=subtractofmatrix(matrix1,matrix2,row,col);
        document.getElementById('explanationmatrixresult').innerHTML = data['steps'];
        document.getElementById('matrixresult').innerHTML=data['result'];
        renderMathInElement(document.getElementById('explanationmatrixresult'));        
        renderMathInElement(document.getElementById('matrixresult'));
    }, 100);
    setTimeout(function () {
        loader('hide');
    }, 2000);
}

function calculatemulofmatrix(){
    loader('show');
    setTimeout(function () {
        sendtomatrix1();        
        sendtomatrix2();
        var row1=document.getElementById('row1').value;
        var col2=document.getElementById('column2').value;
        var col1=document.getElementById('column1').value;        
        var data=mulofmatrix(matrix1,matrix2,row1,col1,col2);

        document.getElementById('explanationmatrixresult').innerHTML = data['steps'];
        document.getElementById('matrixresult').innerHTML = data['result'];
        renderMathInElement(document.getElementById('explanationmatrixresult'));
        renderMathInElement(document.getElementById('matrixresult'));        
    }, 100);
    setTimeout(function () {
        loader('hide');
    }, 2000);
}
function calloperation(value) {
    if (value == '+') {
        calculatesumofmatrix();
    } else if (value == '-') {
        calculatesubtractofmatrix();
    } else if (value == '×') {
        calculatemulofmatrix();
    }
}