let scoreel = document.getElementById("score-el");
let guestel = document.getElementById("guest-el");
let score = 0;
let score1 = 0;

function updateLeadingScore() {
    const homeScore = document.getElementById("home-score");
    const guestScore = document.getElementById("guest-score");
    
    if (score > score1) {
        homeScore.classList.add("leading");
        guestScore.classList.remove("leading");
    } else if (score1 > score) {
        guestScore.classList.add("leading");
        homeScore.classList.remove("leading");
    } else {
        homeScore.classList.remove("leading");
        guestScore.classList.remove("leading");
    }
}

function add1() {
    score += 1;
    scoreel.textContent = score;
    updateLeadingScore();
}

function guest1() {
    score1 += 1;
    guestel.textContent = score1;
    updateLeadingScore();
}

function add2() {
    score += 2;
    scoreel.textContent = score;
    updateLeadingScore();
}

function guest2() {
    score1 += 2;
    guestel.textContent = score1;
    updateLeadingScore();
}

function add3() {
    score += 3;
    scoreel.textContent = score;
    updateLeadingScore();
}

function guest3() {
    score1 += 3;
    guestel.textContent = score1;
    updateLeadingScore();
}



function reset() {
    score = 0;
    score1 = 0;
    guestel.textContent = score1;
    scoreel.textContent = score;
    updateLeadingScore();
}
