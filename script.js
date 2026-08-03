alert("welcome to my website:");
const menuBtn = document.getElementById("menu-btn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", function () {
    navbar.classList.toggle("active");
});

const buttons = document.querySelectorAll(".service-card button");

buttons.forEach(function(button){
    button.addEventListener("click", function(){
        alert("More details will be added soon!");
    });
});
const form = document.getElementById("contactForm");

form.addEventListener("submit", function(event){

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if(name === "" || email === "" || message === ""){
        alert("Please fill all the fields.");
        return;
    }

    alert("Thank you! Your message has been sent.");

    form.reset();

});
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function(){

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        themeBtn.innerHTML = "☀️ Light Mode";
    }else{
        themeBtn.innerHTML = "🌙 Dark Mode";
    }

});

const topBtn = document.getElementById("topBtn");

topBtn.addEventListener("click", function(){

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});