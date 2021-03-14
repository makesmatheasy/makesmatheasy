var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function runSpeechRecognition(output, input, logo) {
    var output = document.getElementById(output);
    var action = document.getElementById(input);
    recognition.onstart = function () {
        var c = 0;
//                    action.value = "Listening....";
        document.getElementById('soltxt').value = '';
        document.getElementById(logo).src = "images/listening.gif";
        document.getElementById(logo).style.height = "80px";
        document.getElementById(logo).style.width = "80px";
    };
    recognition.onspeechend = function () {

        action.value = "";
        document.getElementById(logo).src = "images/speechlogo.png";
        document.getElementById('soltxt').value = '';
        document.getElementById(logo).style.height = "30px";
        document.getElementById(logo).style.width = "20.91px";
        recognition.stop();
    }
    recognition.onresult = function (event) {
        var transcript = event.results[0][0].transcript;

        transcript=transcript.toLowerCase()
        if (transcript.includes("multiply")) {
            transcript = transcript.replace(/multiply/ig, "*");
        }
        if (transcript.includes("X")) {
            transcript = transcript.replace(/X/ig, "*");
        }
        if (transcript.includes("into")) {
            transcript = transcript.replace(/into/ig, "*");
        }
        if (transcript.includes("x")) {
            transcript = transcript.replace(/x/ig, "*");
        }
        if (transcript.includes("divided by")) {
            transcript = transcript.replace(/divided by/ig, "/");
        }
        if (transcript.includes("minus")) {
            transcript = transcript.replace(/minus/ig, "-");
        }
        if (transcript.includes("by")) {
            transcript = transcript.replace(/by/ig, "/");
        }
        if (transcript.includes("plus")) {
            transcript = transcript.replace(/plus/ig, "+");
        }
        if (transcript.includes("to")) {
            transcript = transcript.replace(/to/ig, "2");
        }
        if (transcript.includes("too")) {
            transcript = transcript.replace(/too/ig, "2");
        }
        if (transcript.includes("six")) {
            transcript = transcript.replace(/six/ig, "6");
        }
        if (transcript.includes("class")) {
            transcript = transcript.replace(/class/ig, "+");
        }
        if (transcript.includes("divide")) {
            transcript = transcript.replace(/divide/ig, "/");
        }
        if (transcript.includes("divide by")) {
            transcript = transcript.replace(/divide by/ig, "/");
        }
        if (transcript.includes("in2")) {
            transcript = transcript.replace(/in2/ig, "*");
        }
        if (transcript.includes("close")) {
            transcript = transcript.replace(/close/ig, "");
        }
        if (transcript.includes("thousand")) {
            transcript = transcript.replace(/thousand/ig, "1000");
        }
        if (transcript.includes("hundred")) {
            transcript = transcript.replace(/hundred/ig, "100");
        }
        if(transcript.includes("basetenlog")){
            transcript=transcript.replace(/base10log/ig,"log10(");
        }
        if (transcript.includes("ten")) {
            transcript = transcript.replace(/ten/ig, "10");
        }
        if (transcript.includes("one")) {
            transcript = transcript.replace(/one/ig, "1");
        }
        if (transcript.includes("lakh")) {
            transcript = transcript.replace(/lakh/ig, "100000");
        }
        if(transcript.includes("sin")){
            transcript=transcript.replace(/sin/ig,"sin(");
        }
        if(transcript.includes("sine")){
            transcript=transcript.replace(/sin/ig,"sin(");
        }
        if(transcript.includes("cos")){
            transcript=transcript.replace(/cos/ig,"cos(");
        }
        if(transcript.includes("course")){
            transcript=transcript.replace(/course/ig,"cos(");
        }
        if(transcript.includes("cose")){
            transcript=transcript.replace(/cose/ig,"cos(");
        }
        if(transcript.includes("quotes")){
            transcript=transcript.replace(/quotes/ig,"cos(");
        }
        if(transcript.includes("tan")){
            transcript=transcript.replace(/tan/ig,"tan(");
        }
        if(transcript.includes("secant")){
            transcript=transcript.replace(/secant/ig,"secant(");
        }
        if(transcript.includes("cosecant")){
            transcript=transcript.replace(/cosecant/ig,"cosecantcsc(");
        }
        if(transcript.includes("kosikant")){
            transcript=transcript.replace(/kosikant/ig,"cosecantcsc(");
        }
        if(transcript.includes("cot")){
            transcript=transcript.replace(/cot/ig,"cot(");
        }
        if(transcript.includes("Court")){
            transcript=transcript.replace(/court/ig,"cot(");
        }
        if(transcript.includes("pi")){
            transcript=transcript.replace(/pi/ig,"3.14");
        }
        if(transcript.includes("pie")){
            transcript=transcript.replace(/pie/ig,"3.14");
        }
        if(transcript.includes("/e")){
            transcript=transcript.replace(/\//ig,"3.14");
        }
        if(transcript.includes("underroot")){
            transcript=transcript.replace(/underroot/ig,"sqrt(");
        }
        if(transcript.includes("squareroot")){
            transcript=transcript.replace(/squareroot/ig,"sqrt(");
        }
        if(transcript.includes("log")){
            transcript=transcript.replace(/log/ig,"log(");
        }
        if(transcript.includes("asign")){
            transcript=transcript.replace(/asign/ig,"asin(");
        }
        if(transcript.includes("asine")){
            transcript=transcript.replace(/asine/ig,"asin(");
        }
        if(transcript.includes("asin")){
            transcript=transcript.replace(/asin/ig,"asin(");
        }
        if(transcript.includes("ekosh")){
            transcript=transcript.replace(/asin/ig,"acos(");
        }
        if(transcript.includes("acose")){
            transcript=transcript.replace(/asin/ig,"acos(");
        }
        if(transcript.includes("acos")){
            transcript=transcript.replace(/asin/ig,"acos(");
        }
        if(transcript.includes("a10")){
            transcript=transcript.replace(/asin/ig,"atan(");
        }
        if(transcript.includes("atan")){
            transcript=transcript.replace(/asin/ig,"atan(");
        }


        let check=transcript.match(/\d+/)
        check2=check===null&&!transcript.includes("(");
        // console.log(check2)
        if(check2)
        {
            // console.log(transcript)
            transcript=""
        }
        output.value += transcript;
        if (document.getElementById('soltxt').value != "Invalid Expression") {
            calsol(output.value);
        }
        if (document.getElementById('soltxt').value == "Invalid Expression") {

            document.getElementById('soltxt').value = "";
        }
    };
    try {
        recognition.start();
    } catch (e) {
        recognition.stop();
        document.getElementById(logo).src = "images/speechlogo.png";
//                    document.getElementById('txt').value='';
        document.getElementById(logo).style.height = "30px";
        document.getElementById(logo).style.width = "20.91px"

    }

}

function stoprecognition(output2, input2, logo2) {
    recognition.stop();
    var output2 = document.getElementById(output2);
    var action2 = document.getElementById(input2);
    output2.value = "";
    input2.value = "";
    document.getElementById(logo2).src = "images/speechlogo.png";
}
