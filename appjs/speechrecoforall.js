var SpeechRecognitionforall = SpeechRecognition || webkitSpeechRecognition;
var recognitionforall = new SpeechRecognition();

function runSpeechRecognitionforall(output, logo) {
    count = 0;
    var output = document.getElementById(output);
//		        var action = document.getElementById(input);
    recognitionforall.onstart = function () {
        var c = 0;
//                    action.value = "Listening....";
        document.getElementById(logo).src = "images/listening.gif";
        document.getElementById(logo).style.height = "20px";
        document.getElementById(logo).style.width = "20px";
    };
    recognitionforall.onspeechend = function () {
        document.getElementById(logo).src = "images/speechlogo.png";
        document.getElementById(logo).style.height = "25px";
        document.getElementById(logo).style.width = "17.41px";
        recognition.stop();
    }
    recognitionforall.onresult = function (event) {
        var transcript = event.results[0][0].transcript;
//                    if(transcript.includes("multiply")){
//                        transcript=transcript.replace(/multiply/g, "*");
//                    }
        output.value = transcript;
    };
    try {
        recognitionforall.start();
    } catch (e) {
        recognitionforall.stop();
        document.getElementById(logo).src = "images/speechlogo.png";
//                    document.getElementById('txt').value='';
        document.getElementById(logo).style.height = "25px";
        document.getElementById(logo).style.width = "17.41px"
    }
}
