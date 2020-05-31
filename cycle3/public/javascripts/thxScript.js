const timeToShow = localStorage.getItem('eTime');

if (timeToShow != null) {
    document.getElementById("finalTime").innerHTML = "Din tid var " + timeToShow + " sec";
}
