function showMessage() {

    let email = document.getElementById("email").value;

    if(email === "") {
        alert("Please enter your email!");
    }
    else {
        alert("Welcome to Netflix Clone 🎬");
    }

}


// Navbar background change on scroll
window.addEventListener("scroll", function(){

    const nav = document.querySelector("nav");

    if(window.scrollY > 50){
        nav.style.background = "black";
    }
    else{
        nav.style.background = "transparent";
    }

});


// Movie card hover effect
const cards = document.querySelectorAll(".movie-card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {
        card.style.transform = "scale(1.1)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "scale(1)";
    });

});


// Sign in button action
const signInBtn = document.querySelector(".signin-btn");

signInBtn.addEventListener("click", () => {

    alert("Redirecting to Sign In Page...");

});


// Auto changing title effect
let titles = [
    "Netflix Clone",
    "Watch Movies Online",
    "Unlimited Entertainment",
    "Netflix UI Clone"
];

let index = 0;

setInterval(() => {

    document.title = titles[index];

    index++;

    if(index >= titles.length){
        index = 0;
    }

}, 3000);