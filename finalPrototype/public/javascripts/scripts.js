let t = 5;
let startTime = 0;
let timeElapsed = 0;
let arrOfQuestions = ['r1', 'r2', 'r3', 'r4', 'r5', 'r6', 'r7', 'r8', 'r9'];
let currentQuestion = 0;
let currentStyle = 0;

function changeCSS() {
    if (document.getElementById("cssText").innerHTML == "Dark mode") {
        document.getElementById("cssLink").setAttribute("href", "/stylesheets/styleDark.css");
        document.getElementById("cssText").innerHTML = "Light mode";
        currentStyle = 1;
    }
    else {
        document.getElementById("cssLink").setAttribute("href", "/stylesheets/style.css");
        document.getElementById("cssText").innerHTML = "Dark mode";
        currentStyle = 0;
    }

}

function myFunction() {
    t = t+10;
    document.getElementById("demo").innerHTML = t;
}

function start() {
    document.getElementById("bStart").style.display = "none";
    document.getElementById("bDone").style.display = "inline-block";
    document.getElementById("surveyWrapper").style.display = "block";
    let millisec = Date.now();
    startTime = Math.floor(millisec / 1000);
    console.log(startTime);
}

function stop() {
    timeElapsed = Math.floor(Date.now() / 1000) - startTime;

    document.getElementById("bDone").style.display = "none";
    document.getElementById("surveyWrapper").style.display = "none";
    document.getElementById("time").style.display = "block";
    document.getElementById("time").innerHTML = timeElapsed + " sec";
    console.log(timeElapsed);

    localStorage.setItem('eTime', timeElapsed);

    document.getElementById("timeToSend").setAttribute('value', timeElapsed);
    document.getElementById("sendInfo").submit();

}

function clearMarkOfRow(rowID) {
    console.log(rowID);
    if (currentStyle == 0) {
        document.getElementById(rowID).style.borderColor = "#fff";
    } else {
        document.getElementById(rowID).style.borderColor = "#141d26";
    }
}

function clearMarks() {
    for (i = 0; i < 15; i++) {
        let number = i+1;
        let idOfRow = 'r' + number;
        if (currentStyle == 0) {
            document.getElementById(idOfRow).style.borderColor = "#fff";
        } else {
            document.getElementById(idOfRow).style.borderColor = "#141d26";
        }
    }
}

function radioValidatorColor() {
    clearMarks();
    var radiosToMarkRed = '';
    var allElements = window.document.getElementById("survey").elements;
    for (i = 0; i < allElements.length; i++) {
        if (allElements[i].type == 'radio') {
            var currentRadio = allElements[i].name;
            var checked = 'no';
            var allRadioOptions = document.getElementsByName(currentRadio);

            for (x = 0; x < allRadioOptions.length; x++) {
                 if (allRadioOptions[x].checked && checked == 'no') {
                     checked = 'yes';
                     break;
                 } 
            }   
            var alreadyChecked = radiosToMarkRed.indexOf(currentRadio);
            if (checked == 'no' && alreadyChecked == -1) {
                radiosToMarkRed = radiosToMarkRed + currentRadio + '-';
            }     
        }
    }
    if (radiosToMarkRed != '') {
        let arrToMark = radiosToMarkRed.split('-');
        arrToMark.pop();
        for (i = 0; i < arrToMark.length; i++) {
            let idOfRow = arrToMark[i].replace('q', "r")
            document.getElementById(idOfRow).style.borderColor = "red";
        }
        alert('Vänligen fyll i alla obligatorisak frågor!');
        return false;
    }
    else {
        if (document.getElementById("bDone").innerHTML == 'KLAR ✓') {
            window.location.href = "/pages/thanks.html";
        } else {
            window.location.href = "/pages/thanksEng.html";
        }
        return true;
    }
}

function radioValidatorMessage() {
    var radiosToMarkRed = '';
    var allElements = window.document.getElementById("survey").elements;
    for (i = 0; i < allElements.length; i++) {
        if (allElements[i].type == 'radio') {
            var currentRadio = allElements[i].name;
            var checked = 'no';
            var allRadioOptions = document.getElementsByName(currentRadio);

            for (x = 0; x < allRadioOptions.length; x++) {
                 if (allRadioOptions[x].checked && checked == 'no') {
                     checked = 'yes';
                     break;
                 } 
            }   
            var alreadyChecked = radiosToMarkRed.indexOf(currentRadio);
            if (checked == 'no' && alreadyChecked == -1) {
                radiosToMarkRed = radiosToMarkRed + currentRadio + '-';
            }     
        }
    }
    if (radiosToMarkRed != '') {
        alert('Vänligen fyll i alla frågor!');
        return false;
    }
    else {
        if (document.getElementById("bDone").innerHTML == 'KLAR ✓') {
            window.location.href = "/pages/thanks.html";
        } else {
            window.location.href = "/pages/thanksEng.html";
        }
        return true;
    }
}

function doneMsg() {
    window.location.href = "/"
}

function thxMsg() {
    window.location.href = "/pages/thanks.html"
}

function thxMsgEng() {
    window.location.href = "/pages/thanksEng.html"
}

function toEnglish() {
    window.location.href = "/pages/questionsEng.html"
}

function toSwedish() {
    window.location.href = "/pages/questions.html"
}

function nextQuestion() {
    let nextIndex = currentQuestion + 1;
    if (nextIndex < (arrOfQuestions.length - 1)) {
        document.getElementById(arrOfQuestions[currentQuestion]).style.display = "none";
        document.getElementById(arrOfQuestions[nextIndex]).style.display = "block";
        document.getElementById('bPrevious').style.display = "inline-block";

    } else {
        // Kommit till sissta frågan ta bort next knapp o lägg klar knapp
        document.getElementById(arrOfQuestions[currentQuestion]).style.display = "none";
        document.getElementById(arrOfQuestions[nextIndex]).style.display = "block";
        document.getElementById('bDone').style.display = "inline-block";
        document.getElementById('bNext').style.display = "none";
    }
    currentQuestion = nextIndex;
    document.getElementById("numQ").innerHTML = currentQuestion + 1;
}

function previousQuestion() {
    let nextIndex = currentQuestion - 1;
    if (nextIndex == 0) {
        // Kommit till första frågan ta bort previous knapp
        document.getElementById(arrOfQuestions[currentQuestion]).style.display = "none";
        document.getElementById(arrOfQuestions[nextIndex]).style.display = "block";
        document.getElementById('bPrevious').style.display = "none";

    } else if (nextIndex == 7) {
        // Backar från sista kanppen, ta bort klar o lägg next
        document.getElementById(arrOfQuestions[currentQuestion]).style.display = "none";
        document.getElementById(arrOfQuestions[nextIndex]).style.display = "block";
        document.getElementById('bNext').style.display = "inline-block";
        document.getElementById('bDone').style.display = "none";
    } else {
        document.getElementById(arrOfQuestions[currentQuestion]).style.display = "none";
        document.getElementById(arrOfQuestions[nextIndex]).style.display = "block";
    }
    currentQuestion = nextIndex;
    document.getElementById("numQ").innerHTML = currentQuestion + 1;
}