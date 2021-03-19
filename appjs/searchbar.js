function autocomplete(inp, arr) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function (e) {
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
                b.addEventListener("click", function (e) {
                    /*insert the value for the autocomplete text field:*/
                    inp.value = this.getElementsByTagName("input")[0].value;

                    /*close the list of autocompleted values,
                    (or any other open lists of autocompleted values:*/
                    closeAllLists();
                    if (inp.value.toUpperCase() == "INTEGRATION") {
                        $("#integralcollapse").slideToggle();
                    } else if (inp.value.toUpperCase() == "DIFFERENTIATION") {
                        $("#differentiatecollapse").slideToggle();
                    } else if (inp.value.toUpperCase() == "DIVIDE") {
                        $("#divide").slideToggle();
                    } else if (inp.value.toUpperCase() == "ABOUT") {
                        $("#about").slideToggle();
                    }else if (inp.value.toUpperCase() == "HOME") {
                        $("#home").slideToggle();
                    } else if (inp.value.toUpperCase() == "FACTORS") {
                        $("#factors").slideToggle();
                    } else if (inp.value.toUpperCase() == "MATRIX") {
                        $("#matrixcollapse").slideToggle();
                    } else if (inp.value.toUpperCase() == "MULTIPLICATION TABLE") {
                        $("#table").slideToggle();
                    } else if (inp.value.toUpperCase() == "PARTIAL DIFFERENTIATION") {
                        $("#partialdiffcollapse").slideToggle();
                    } else if (inp.value.toUpperCase() == "LAPLACE") {
                        $("#laplacecollapse").slideDown();

                        $("#laplacecollapseit").slideToggle();
                        $("#inverselaplacecollapse").slideUp();
                    } else if (inp.value.toUpperCase() == "SHAPES") {
                        $("#shapescal").slideToggle();
                    } else if (inp.value.toUpperCase() == "SIMPLE TRIGONOMETRY") {
                        $("#simpletrignocollapse").slideToggle();
                    } else if (inp.value.toUpperCase() == "INVERSE LAPLACE") {
                        $("#laplacecollapse").slideDown();
                        $("#inverselaplacecollapse").slideToggle();
                        $("#laplacecollapseit").slideToggle();

                    }else if (inp.value.toUpperCase() == "GRAPH") {
                        $("#plotgraph").slideToggle();
                    }  else if (inp.value.toUpperCase() == "MULTIPLY WITH STEPS") {
                        $("#mulsolwithsteps").slideToggle();
                    }  else if (inp.value.toUpperCase() == "PLAY WITH EQUATIONS") {
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
                    } else if (inp.value.toUpperCase() == "TRIGONOMETRIC IDENTITIES") {
                        $("#trigonoiden").slideToggle();
                    } else if (inp.value.toUpperCase() == "UNIT CONVERTER") {
                        $("#unitconcal").slideToggle();
                    } else if (inp.value.toUpperCase() == "ROMAN TO ARABIC") {
                        document.getElementById('romaracov').click();
                    } else if (inp.value.toUpperCase() == "ARABIC TO ROMAN") {
                        document.getElementById('romaracov').click();
                    } else if (inp.value.toUpperCase() == "ASCENDING ORDER") {
                        document.getElementById('order').click();
                    } else if (inp.value.toUpperCase() == "DESCENDING ORDER") {
                        document.getElementById('order').click();
                    }  else if (inp.value.toUpperCase() == "CONVERSION TO WORDS") {
                          document.getElementById('covtowords').click();                      
                    } else if (inp.value.toUpperCase() == "LOG CALCULATOR") {
                         $("#log_values").slideToggle();
                        }


                });
                a.appendChild(b);
            }
        }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function (e) {
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
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
}

var arrayofelements =  ["Divide", "Integration", "Differentiation", "Laplace", "Inverse Laplace", "Multiplication Table", "Partial Differentiation", "Shapes", "Factors", "Matrix",
                        "Simple Trigonometry", "Graph", "Roman to Arabic", "Arabic to Roman", "Multiply With Steps", "Roots of Equation", "Play With Equations", "Ascending Order", "Descending Order",
                        "Conversion to Words", "Roundoff", "LCM", "HCF", "Trigonometric Values", "Unit Converter" ,"Log Calculator"];
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
    }else if (inp.value.toUpperCase() == "HOME") {
        $("#home").slideToggle();
    } else if (value.toUpperCase() == "FACTORS") {
        $("#factors").slideToggle();
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
    } else if (inp.value.toUpperCase() == "TRIGONOMETRIC IDENTITIES") {
        $("#trigonoiden").slideToggle();
    } else if (inp.value.toUpperCase() == "UNIT CONVERTER") {
        $("#unitconcal").slideToggle();
    } else if (inp.value.toUpperCase() == "ROMAN TO ARABIC") {
        document.getElementById('romaracov').click();
    } else if (inp.value.toUpperCase() == "ARABIC TO ROMAN") {
        document.getElementById('romaracov').click();
    } else if (inp.value.toUpperCase() == "ASCENDING ORDER") {
        document.getElementById('order').click();
    } else if (inp.value.toUpperCase() == "DESCENDING ORDER") {
        document.getElementById('order').click();
    }  else if (inp.value.toUpperCase() == "CONVERSION TO WORDS") {
          document.getElementById('covtowords').click();                      
    }  else if (inp.value.toUpperCase() == "LOG CALCULATOR") {
         $("#log_values").slideToggle();
    }

}