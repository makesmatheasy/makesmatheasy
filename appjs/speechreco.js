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

        if (transcript.includes("multiply")) {
            transcript = transcript.replace(/multiply/g, "*");
        }
        if (transcript.includes("X")) {
            transcript = transcript.replace(/X/g, "*");
        }
        if (transcript.includes("into")) {
            transcript = transcript.replace(/into/g, "*");
        }
        if (transcript.includes("x")) {
            transcript = transcript.replace(/x/g, "*");
        }
        if (transcript.includes("divided by")) {
            transcript = transcript.replace(/divided by/g, "/");
        }
        if (transcript.includes("minus")) {
            transcript = transcript.replace(/minus/g, "-");
        }
        if (transcript.includes("by")) {
            transcript = transcript.replace(/by/g, "/");
        }
        if (transcript.includes("plus")) {
            transcript = transcript.replace(/plus/g, "+");
        }
        if (transcript.includes("to")) {
            transcript = transcript.replace(/to/g, "2");
        }
        if (transcript.includes("too")) {
            transcript = transcript.replace(/too/g, "2");
        }
        if (transcript.includes("six")) {
            transcript = transcript.replace(/six/g, "6");
        }
        if (transcript.includes("class")) {
            transcript = transcript.replace(/class/g, "+");
        }
        if (transcript.includes("divide")) {
            transcript = transcript.replace(/divide/g, "/");
        }
        if (transcript.includes("divide by")) {
            transcript = transcript.replace(/divide by/g, "/");
        }
        if (transcript.includes("in2")) {
            transcript = transcript.replace(/in2/g, "*");
        }
        if (transcript.includes("close")) {
            transcript = transcript.replace(/close/g, "");
        }
        if (transcript.includes("thousand")) {
            transcript = transcript.replace(/thousand/g, "1000");
        }
        if (transcript.includes("hundred")) {
            transcript = transcript.replace(/hundred/g, "100");
        }
        if (transcript.includes("ten")) {
            transcript = transcript.replace(/ten/g, "10");
        }
        if (transcript.includes("one")) {
            transcript = transcript.replace(/one/g, "1");
        }
        if (transcript.includes("lakh")) {
            transcript = transcript.replace(/lakh/g, "100000");
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
