let deadline = new Date("Dec 31, 2024 23:59:59").getTime();

let countdown = setInterval(function() {
    let now = new Date().getTime();
    let timeLeft = deadline - now;

    let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("countdown-timer").innerHTML =
      days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    if (timeLeft < 0) {
        clearInterval(countdown);
        document.getElementById("countdown-timer").innerHTML = "Fundraising is complete";
    }
}, 1000);
