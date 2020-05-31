let t = 5;
let startTime = 0;
let timeElapsed = 0;

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



