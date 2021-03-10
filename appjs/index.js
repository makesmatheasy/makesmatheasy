function removeall(elid) {
  if (document.getElementById(elid).innerHTML != "") {
    var r = document.getElementById(elid);
    while (r.firstChild) {
      r.removeChild(r.lastChild);
    }
  }
}

function collapseit(openit) {
  $(String("#" + openit)).slideToggle();
}
function openit(id) {
  var ids = [
    "#equationssolver",
    "#mulsolwithsteps",
    "#table",
    "#shapescal",
    "#divide",
    "#simpletrignocollapse",
    "#trigonovaluestable",
    "#factors",
    "#integralcollapse",
    "#differentiatecollapse",
    "#partialdiffcollapse",
    "#laplacecollapse",
    "#matrixcollapse",
    "#multiplematrixcollapse",
    "#singlematrixcollapse",
    "#about",
    "#rootsquadratic",
    "#plotgraph",
    "#roundoff",
    "#unitconcal",
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

    "js/math.min.js",
    "js/plotly-1.35.2.min.js",
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
  if (ar.length == 0) {
    $("#favourite").removeClass("favouritecontainer");
  } else {
    $("#favourite").addClass("favouritecontainer");
  }
  if (ar.length != 0) {
    for (i = 0; i < ar.length; i++) {
      var el = document.createElement("span");
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
}

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
  let number = Math.floor(Math.random() * 100);
  let xhttp = new XMLHttpRequest();
  let el = document.getElementById("numberfact");
  //If the fact is successfully retreived
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let val = this.responseText;

      // var valTex='';
      // for(i of val){
      //     if(i==' '){
      //         valTex+=" \\space ";
      //     }else{
      //         valTex+=i;
      //     }
      // }
      // console.log(valTex);
      // el.innerHTML="\\["+valTex+"\\]";
      el.innerHTML = val;
      renderMathInElement(el);
    }
  };

  xhttp.open("GET", "http://numbersapi.com/" + number + "/math", true);

  xhttp.onerror = function () {
    el.innerHTML =
      "Turn on your Internet Connection, to read Interesting facts!";

      
  };
  xhttp.send();
}


$(document).on('click',' .list_menu_items ',function(){
  // $(this).addClass('home').siblings().removeClass('home');
  $(this).siblings().removeClass('home');
  $(this).addClass('home');
});
