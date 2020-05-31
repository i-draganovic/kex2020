let t = 5;
let startTime = 0;
let timeElapsed = 0;
let arrOfQuestions = ['r1', 'r2', 'r3', 'r4', 'r5', 'r6', 'r7', 'r8', 'r9'];
let currentQuestion = 0;

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

function clearMarks() {
    for (i = 0; i < 9; i++) {
        let number = i+1;
        let idOfRow = 'r' + number;
        document.getElementById(idOfRow).style.borderWidth = "0px";
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
        console.log(arrToMark);
        for (i = 0; i < arrToMark.length; i++) {
            let idOfRow = arrToMark[i].replace('q', "r")
            document.getElementById(idOfRow).style.borderWidth = "2px";
        }
        return false;
    }
    else {
        window.location.href = "/pages/thanks.html"
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
        window.location.href = "/pages/thanks.html"
        return true;
    }
}

function doneMsg() {
    window.location.href = "/"
}

function thxMsg() {
    window.location.href = "/pages/thanks.html"
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