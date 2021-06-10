function cal_func_parabola_y()
{

    var number = document.getElementById('a-number').value;
    // console.log(typeof(number))

    if(number=="")
    {
       document.getElementById('result_cal_func_parabola_y').innerHTML = "";
    }
    else {
        number = parseInt(number);
        // console.log(typeof(number))
        var string = "<h4>Focus: <span style='color: white; font-weight: light;'>&emsp;("+number+",0)</span></h4>"
                    +"<h4>Length of LR: <span style='color: white; font-weight: light;'>&emsp;"+4*Math.abs(number)+"</span></h4>"
                    +"<h4>Equation of Directrix: <span style='color: white; font-weight: light;'>&emsp;x = ( "+(-number)+" )</span></h4>"
                    +"<h4>Equation of Axis: <span style='color: white; font-weight: light;'>&emsp;y = 0</span></h4>"
                    +"<h4>Eccentricity: <span style='color: white; font-weight: light;'>&emsp;1</span></h4>"
                    +"<br><p>Equations of Tangent to Parabola in slope form - </p>"
                    +"<h4>Equation of Tangent in terms of slope(m): <span style='color: white; font-weight: light;'>&emsp;y = mx + ("+number+"/m)</span></h4>"
                    +"<h4>Condition of Tangency: <span style='color: white; font-weight: light;'>&emsp;c = ("+number+"/m)</span></h4>"
                    +"<br><p>Equations of Normal to Parabola in slope form - </p>"
                    +"<h4>Equation of Normal in terms of slope(m): <span style='color: white; font-weight: light;'>&emsp;y = mx + ("+(-number)*2+"m) + ("+(-number)+"m<sup>3</sup>)</span></h4>"
                    +"<h4>Condition of Normality: <span style='color: white; font-weight: light;'>&emsp;c = "+(-number)*2+"m + ("+(-number)+"m<sup>3</sup>)</span></h4>"
                    +"<br><p>Director Circle of Parabola - </p>"
                    +"<h4>Equation of Director Circle: <span style='color: white; font-weight: light;'>&emsp;x + ( "+number+" ) = 0</span></h4>"
       document.getElementById('result_cal_func_parabola_y').innerHTML = string;


    }
} 


function cal_func_parabola_x()
{

    var number = document.getElementById('b-number').value;
    // console.log(typeof(number))

    if(number=="")
    {
       document.getElementById('result_cal_func_parabola_x').innerHTML = "";
    }
    else {
        number = parseInt(number);
        // console.log(typeof(number))
        var string = "<h4>Focus: <span style='color: white; font-weight: light;'>&emsp;(0,"+number+")</span></h4>"
                    +"<h4>Length of LR: <span style='color: white; font-weight: light;'>&emsp;"+4*Math.abs(number)+"</span></h4>"
                    +"<h4>Equation of Directrix: <span style='color: white; font-weight: light;'>&emsp;y = ( "+(-number)+" )</span></h4>"
                    +"<h4>Equation of Axis: <span style='color: white; font-weight: light;'>&emsp;x = 0</span></h4>"
                    +"<h4>Eccentricity: <span style='color: white; font-weight: light;'>&emsp;1</span></h4>"
                    +"<br><p>Equations of Tangent to Parabola in slope form - </p>"
                    +"<h4>Equation of Tangent in terms of slope(m): <span style='color: white; font-weight: light;'>&emsp;y = mx + ("+(-number)+"m<sup>2</sup>)</span></h4>"
                    +"<h4>Condition of Tangency: <span style='color: white; font-weight: light;'>&emsp;c = ("+(-number)+"m<sup>2</sup>)</span></h4>"
                    +"<br><p>Equations of Normal to Parabola in slope form - </p>"
                    +"<h4>Equation of Normal in terms of slope(m): <span style='color: white; font-weight: light;'>&emsp;y = mx + ( "+(number)*2+" ) + ("+(number)+"/m<sup>2</sup>)</span></h4>"
                    +"<h4>Condition of Normality: <span style='color: white; font-weight: light;'>&emsp;c = "+(number)*2+" + ("+(number)+"/m<sup>2</sup>)</span></h4>"
                    +"<br><p>Director Circle of Parabola - </p>"
                    +"<h4>Equation of Director Circle: <span style='color: white; font-weight: light;'>&emsp;y + ( "+number+" ) = 0</span></h4>"
       document.getElementById('result_cal_func_parabola_x').innerHTML = string;


    }
} 


function cal_func_ecllipse()
{
    var numbera = document.getElementById('aec-number').value;
    var numberb = document.getElementById('bec-number').value;

    // console.log(numbera)
    // console.log(numberb)
    // console.log(numbera!="" && numberb!="")

    var string = ""
    
    if(numbera!="" && numberb!="")
    {
        string = "There are three conditions that occur while analysing equation of ecllipse - <br>"
                +"(1) a > b <br> (2) a < b <br> (3) a = b (Condition for circle)<br>";

        numbera = parseInt(numbera);
        numberb = parseInt(numberb);

        

        var e;

        if(numbera>numberb)
        {
            e = Math.sqrt(numbera*numbera - numberb*numberb)/numbera;
            string +="<br><h4>Here case (1) occurs i.e.,  a > b</h4><br>"
                    + "<h4>Focus: <span style='color: white; font-weight: light;'>&emsp;(±"+(Math.abs(numbera)*Math.abs(e)).toFixed(3)+" , 0)</span></h4>"
                    +"<h4>Length of LR: <span style='color: white; font-weight: light;'>&emsp;"+((2*Math.abs(numberb)*Math.abs(numberb))/Math.abs(numbera)).toFixed(3)+"</span></h4>"
                    +"<h4>Equation of Directrix: <span style='color: white; font-weight: light;'>&emsp;x = ±"+(Math.abs(numbera)/Math.abs(e)).toFixed(3)+"</span></h4>"
                    +"<h4>Length of Major Axis: <span style='color: white; font-weight: light;'>&emsp;"+ (2*(Math.abs(numbera))).toFixed(3) +"</span></h4>"
                    +"<h4>Length of Minor Axis: <span style='color: white; font-weight: light;'>&emsp;"+ (2*(Math.abs(numberb))).toFixed(3) +"</span></h4>"
                    +"<h4>Eccentricity: <span style='color: white; font-weight: light;'>&emsp;"+e+"</span></h4>"
                    +"<br><p>Equations of Tangent and Normal to Ecllipse - </p>"
                    +"<h4>Parametric coordinates: <span style='color: white; font-weight: light;'>&emsp;("+(Math.abs(numbera)).toFixed(3)+"cosΘ , "+(Math.abs(numberb)).toFixed(3)+"sinΘ)</span></h4>"
                    +"<h4>Equation of Tangent: <span style='color: white; font-weight: light;'>&emsp; x cosΘ/"+(Math.abs(numbera)).toFixed(3)+" + ysinΘ/"+(Math.abs(numberb)).toFixed(3)+" = 1</span></h4>"
                    +"<h4>Equation of Normal: <span style='color: white; font-weight: light;'>&emsp; ("+(Math.abs(numbera)).toFixed(3)+"x)/cosΘ - ("+(Math.abs(numberb)).toFixed(3)+"y)/sinΘ = "+(Math.abs(Math.abs(numbera)*Math.abs(numbera)-Math.abs(numberb)*Math.abs(numberb))).toFixed(3)+"</span></h4>"
                    +"<br><p>Director Circle of Ecllipse - </p>"
                    +"<h4>Equation of Director Circle: <span style='color: white; font-weight: light;'>&emsp;x<sup>2</sup> + y<sup>2</sup> = "+(Math.abs(numbera)*Math.abs(numbera)+Math.abs(numberb)*Math.abs(numberb)).toFixed(3)+"</span></h4>"
        }
        else if(numbera<numberb)
        {
            e = Math.sqrt(numberb*numberb - numbera*numbera)/numberb;
            string +="<br><h4>Here case (2) occurs i.e.,  a < b</h4><br>"
                    + "<h4>Focus: <span style='color: white; font-weight: light;'>&emsp;(0 , ±"+(Math.abs(numberb)*Math.abs(e)).toFixed(3)+")</span></h4>"
                    +"<h4>Length of LR: <span style='color: white; font-weight: light;'>&emsp;"+((2*Math.abs(numbera)*Math.abs(numbera))/Math.abs(numberb)).toFixed(3)+"</span></h4>"
                    +"<h4>Equation of Directrix: <span style='color: white; font-weight: light;'>&emsp;x = ±"+(Math.abs(numberb)/Math.abs(e)).toFixed(3)+"</span></h4>"
                    +"<h4>Length of Major Axis: <span style='color: white; font-weight: light;'>&emsp;"+ (2*(Math.abs(numberb))).toFixed(3) +"</span></h4>"
                    +"<h4>Length of Minor Axis: <span style='color: white; font-weight: light;'>&emsp;"+ (2*(Math.abs(numbera))).toFixed(3) +"</span></h4>"
                    +"<h4>Perimeter of Ellipse: <span style='color: white; font-weight: light;'>&emsp; 	&nbsp; = 	&nbsp; &radic;2 * &pi; * &radic;(a<sup>2</sup>+b<sup>2</sup>) 	&nbsp; = 	&nbsp; "+ parseFloat((Math.sqrt(2)*3.14*parseFloat((Math.sqrt(parseFloat(parseFloat(Math.pow(numbera,2))+parseFloat(Math.pow(numberb,2)))))))) +"</span></h4>"
                    +"<h4>Area: <span style='color: white; font-weight: light;'>&emsp; 	&nbsp; = 	&nbsp; &pi; * a * b &nbsp; = &nbsp;"+ parseFloat(3.14 * numbera * numberb) +"</span></h4>"
                    +"<h4>Eccentricity: <span style='color: white; font-weight: light;'>&emsp;"+e+"</span></h4>"
                    +"<br><p>Equations of Tangent and Normal to Ecllipse - </p>"
                    +"<h4>Parametric coordinates: <span style='color: white; font-weight: light;'>&emsp;("+(Math.abs(numberb)).toFixed(3)+"cosΘ , "+(Math.abs(numbera)).toFixed(3)+"sinΘ)</span></h4>"
                    +"<h4>Equation of Tangent: <span style='color: white; font-weight: light;'>&emsp; xcosΘ/"+(Math.abs(numberb)).toFixed(3)+" + ysinΘ/"+(Math.abs(numbera)).toFixed(3)+" = 1</span></h4>"
                    +"<h4>Equation of Normal: <span style='color: white; font-weight: light;'>&emsp; ("+(Math.abs(numberb)).toFixed(3)+"x)/cosΘ - ("+(Math.abs(numbera)).toFixed(3)+"y)/sinΘ = "+(Math.abs(Math.abs(numbera)*Math.abs(numbera)-Math.abs(numberb)*Math.abs(numberb))).toFixed(3)+"</span></h4>"
                    +"<br><p>Director Circle of Ecllipse - </p>"
                    +"<h4>Equation of Director Circle: <span style='color: white; font-weight: light;'>&emsp;x<sup>2</sup> + y<sup>2</sup> = "+(Math.abs(numbera)*Math.abs(numbera)+Math.abs(numberb)*Math.abs(numberb)).toFixed(3)+"</span></h4>"
        }
        else
        {
            e = Math.sqrt(numberb*numberb - numbera*numbera)/numberb;
            string +="<br><h4>Here case (3) occurs i.e.,  a = b</h4><br>"
                    + "<h4>Focus: <span style='color: white; font-weight: light;'>&emsp;(0 , 0)</span></h4>"
                    +"<h4>Length of LR: <span style='color: white; font-weight: light;'>&emsp;"+(2*Math.abs(numbera)).toFixed(3)+"</span></h4>"
                    +"<h4>Equation of Directrix: <span style='color: white; font-weight: light;'>&emsp;x = ±"+(Math.abs(numberb)/Math.abs(e)).toFixed(3)+"</span></h4>"
                    +"<h4>Length of Major Axis: <span style='color: white; font-weight: light;'>&emsp;"+ (2*(Math.abs(numberb))).toFixed(3) +"</span></h4>"
                    +"<h4>Length of Minor Axis: <span style='color: white; font-weight: light;'>&emsp;"+ (2*(Math.abs(numbera))).toFixed(3) +"</span></h4>"
                    +"<h4>Eccentricity: <span style='color: white; font-weight: light;'>&emsp;"+e+"</span></h4>"
                    +"<br><p>Equations of Tangent and Normal to Ecllipse - </p>"
                    +"<h4>Parametric coordinates: <span style='color: white; font-weight: light;'>&emsp;("+(Math.abs(numberb)).toFixed(3)+"cosΘ , "+(Math.abs(numbera)).toFixed(3)+"sinΘ)</span></h4>"
                    +"<h4>Equation of Tangent: <span style='color: white; font-weight: light;'>&emsp; xcosΘ/"+(Math.abs(numberb)).toFixed(3)+" + ysinΘ/"+(Math.abs(numbera)).toFixed(3)+" = 1</span></h4>"
                    +"<h4>Equation of Normal: <span style='color: white; font-weight: light;'>&emsp; ("+(Math.abs(numberb)).toFixed(3)+"x)/cosΘ - ("+(Math.abs(numbera)).toFixed(3)+"y)/sinΘ = "+(Math.abs(Math.abs(numbera)*Math.abs(numbera)-Math.abs(numberb)*Math.abs(numberb))).toFixed(3)+"</span></h4>"
                    +"<br><p>Director Circle of Ecllipse - </p>"
                    +"<h4>Equation of Director Circle: <span style='color: white; font-weight: light;'>&emsp;x<sup>2</sup> + y<sup>2</sup> = "+(Math.abs(numbera)*Math.abs(numbera)+Math.abs(numberb)*Math.abs(numberb)).toFixed(3)+"</span></h4>"
        }
    }
        document.getElementById('ecllipse_intro').innerHTML = string;
}


function cal_func_hyperbola()
{
    var numbera = document.getElementById('ahy-number').value;
    var numberb = document.getElementById('bhy-number').value;

    var op = document.getElementsByName('op_hyper');

    // console.log(op)
    // console.log(op[0].checked)
    // console.log(op[1].checked)
    // console.log(op[2].checked)

    var string = ""


    if(numbera!="" && numberb!="")
    {
        numbera = parseInt(numbera);
        numberb = parseInt(numberb);

        var e = Math.sqrt(numbera*numbera + numberb*numberb)/numbera;

        if(op[0].checked)
        {
            string += "<h4>Focus: <span style='color: white; font-weight: light;'>&emsp;(±"+(Math.abs(numbera)*Math.abs(e)).toFixed(3)+" , 0)</span></h4>"
                    +"<h4>Length of LR: <span style='color: white; font-weight: light;'>&emsp;"+((2*Math.abs(numberb)*Math.abs(numberb))/Math.abs(numbera)).toFixed(3)+"</span></h4>"
                    +"<h4>Equation of Directrix: <span style='color: white; font-weight: light;'>&emsp;x = ±"+(Math.abs(numbera)/Math.abs(e)).toFixed(3)+"</span></h4>"
                    +"<h4>Length of Transverse Axis: <span style='color: white; font-weight: light;'>&emsp;"+ (2*(Math.abs(numbera))).toFixed(3) +"</span></h4>"
                    +"<h4>Eccentricity: <span style='color: white; font-weight: light;'>&emsp;"+e+"</span></h4>"
                    +"<br><p>Equations of Tangent and Normal to Hyperbola - </p>"
                    +"<h4>Parametric coordinates: <span style='color: white; font-weight: light;'>&emsp;("+(Math.abs(numbera)).toFixed(3)+"secΘ , "+(Math.abs(numberb)).toFixed(3)+"tanΘ)</span></h4>"
                    +"<h4>Equation of Tangent: <span style='color: white; font-weight: light;'>&emsp;y = mx ± &radic;<span style='text-decoration:overline;'>&nbsp;"+(Math.abs(numbera)).toFixed(3)+"m<sup>2</sup> - "+(Math.abs(numberb)*Math.abs(numberb)).toFixed(3)+"&nbsp;</span></span></h4>"
                    +"<h4>Equation of Normal: <span style='color: white; font-weight: light;'>&emsp; ("+(Math.abs(numbera)).toFixed(3)+"x)/secΘ - ("+(Math.abs(numberb)).toFixed(3)+"y)/tanΘ = "+(Math.abs(Math.abs(numbera)*Math.abs(numbera)+Math.abs(numberb)*Math.abs(numberb))).toFixed(3)+"</span></h4>"
                    +"<br><p>Director Circle of Hyperbola - </p>"
                    +"<h4>Equation of Director Circle: <span style='color: white; font-weight: light;'>&emsp;x<sup>2</sup> + y<sup>2</sup> = "+(Math.abs(numbera)*Math.abs(numbera)-Math.abs(numberb)*Math.abs(numberb)).toFixed(3)+"</span></h4>"     
        }
        else if(op[1].checked)
        {
            string +="<h4>Focus: <span style='color: white; font-weight: light;'>&emsp;(0 , ±"+(Math.abs(numberb)*Math.abs(e)).toFixed(3)+")</span></h4>"
                    +"<h4>Length of LR: <span style='color: white; font-weight: light;'>&emsp;"+((2*Math.abs(numbera)*Math.abs(numbera))/Math.abs(numberb)).toFixed(3)+"</span></h4>"
                    +"<h4>Equation of Directrix: <span style='color: white; font-weight: light;'>&emsp;x = ±"+(Math.abs(numberb)/Math.abs(e)).toFixed(3)+"</span></h4>"
                    +"<h4>Length of Transverse Axis: <span style='color: white; font-weight: light;'>&emsp;"+ (2*(Math.abs(numberb))).toFixed(3) +"</span></h4>"
                    +"<h4>Eccentricity: <span style='color: white; font-weight: light;'>&emsp;"+e+"</span></h4>"
                    +"<br><p>Equations of Tangent and Normal to Hyperbola - </p>"
                    +"<h4>Parametric coordinates: <span style='color: white; font-weight: light;'>&emsp;("+(Math.abs(numberb)).toFixed(3)+"secΘ , "+(Math.abs(numbera)).toFixed(3)+"tanΘ)</span></h4>"
                    +"<h4>Equation of Tangent: <span style='color: white; font-weight: light;'>&emsp;y = mx ± &radic;<span style='text-decoration:overline;'>&nbsp;-"+(Math.abs(numberb)).toFixed(3)+"m<sup>2</sup> + "+(Math.abs(numbera)*Math.abs(numbera)).toFixed(3)+"&nbsp;</span></span></h4>"
                    +"<h4>Equation of Normal: <span style='color: white; font-weight: light;'>&emsp; ("+(Math.abs(numberb)).toFixed(3)+"x)/secΘ - ("+(Math.abs(numbera)).toFixed(3)+"y)/tanΘ = "+(Math.abs(Math.abs(numbera)*Math.abs(numbera)+Math.abs(numberb)*Math.abs(numberb))).toFixed(3)+"</span></h4>"
                    +"<br><p>Director Circle of Hyperbola - </p>"
                    +"<h4>Equation of Director Circle: <span style='color: white; font-weight: light;'>&emsp;x<sup>2</sup> + y<sup>2</sup> = "+(Math.abs(numberb)*Math.abs(numberb)-Math.abs(numbera)*Math.abs(numbera)).toFixed(3)+"</span></h4>"
        }
    }

    if(numbera!="")
    {
        numbera = parseInt(numbera);

        var e = Math.sqrt(2);

        if(op[2].checked)
        {
            string += "<h4>Focus: <span style='color: white; font-weight: light;'>&emsp;(±"+(Math.abs(numbera)*Math.abs(e)).toFixed(3)+" , 0)</span></h4>"
                    +"<h4>Length of LR: <span style='color: white; font-weight: light;'>&emsp;"+(2*Math.abs(numbera)).toFixed(3)+"</span></h4>"
                    +"<h4>Equation of Directrix: <span style='color: white; font-weight: light;'>&emsp;x = ±"+(Math.abs(numbera)/Math.abs(e)).toFixed(3)+"</span></h4>"
                    +"<h4>Length of Transverse Axis: <span style='color: white; font-weight: light;'>&emsp;"+ (2*(Math.abs(numbera))).toFixed(3) +"</span></h4>"
                    +"<h4>Eccentricity: <span style='color: white; font-weight: light;'>&emsp;"+e+"</span></h4>"
                    +"<br><p>Equations of Tangent and Normal to Hyperbola - </p>"
                    +"<h4>Parametric coordinates: <span style='color: white; font-weight: light;'>&emsp;("+(Math.abs(numbera)).toFixed(3)+"secΘ , "+(Math.abs(numbera)).toFixed(3)+"tanΘ)</span></h4>"
                    +"<h4>Equation of Tangent: <span style='color: white; font-weight: light;'>&emsp;y = mx ± &radic;<span style='text-decoration:overline;'>&nbsp;"+(Math.abs(numbera)).toFixed(3)+"m<sup>2</sup> - "+(Math.abs(numbera)*Math.abs(numbera)).toFixed(3)+"&nbsp;</span></span></h4>"
                    +"<h4>Equation of Normal: <span style='color: white; font-weight: light;'>&emsp;  x/secΘ - y/tanΘ = "+(2*Math.abs(numbera)).toFixed(3)+"</span></h4>"
        }
    }

    document.getElementById('hyperbola_intro').innerHTML = string;
}
