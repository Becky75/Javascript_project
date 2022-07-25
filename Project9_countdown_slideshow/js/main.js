function countdown() {
    var seconds = document.getElementById("seconds").value;

    function tick() {
        seconds = seconds - 1;
        Time.innerHTML = seconds;
        setTimeout(tick, 1000);
        if (seconds == -1) {
            alert("time's up");
        }
    }
    tick();
}