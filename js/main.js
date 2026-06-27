// ===========================
// KARIBU FLAVORS RESTAURANT
// main.js
// ===========================

// Mobile Navigation

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    if(navLinks.classList.contains("active")){
        menuBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    }else{
        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }
});

// Close mobile menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(link=>{

    link.addEventListener("click",()=>{

        navLinks.classList.remove("active");

        menuBtn.innerHTML='<i class="fa-solid fa-bars"></i>';

    });

});

// ===========================
// Scroll To Top Button
// ===========================

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

    if(window.scrollY>300){

        topBtn.style.display="block";

    }else{

        topBtn.style.display="none";

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

// ===========================
// Navbar Shadow On Scroll
// ===========================

const navbar=document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

    if(window.scrollY>30){

        navbar.style.boxShadow="0 5px 15px rgba(0,0,0,.3)";

    }else{

        navbar.style.boxShadow="none";

    }

});

// ===========================
// Fade In Animation
// ===========================

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

const hiddenElements=document.querySelectorAll(".card,.food-card,.review");

hiddenElements.forEach(el=>{

el.classList.add("hidden");

observer.observe(el);

});

// ===========================
// Statistics Counter
// ===========================

const counters=document.querySelectorAll(".stats h2");

counters.forEach(counter=>{

const update=()=>{

const text=counter.innerText;

const target=parseInt(text.replace(/\D/g,""));

if(isNaN(target)) return;

let current=+counter.getAttribute("data-count")||0;

const increment=Math.ceil(target/60);

if(current<target){

current+=increment;

if(current>target){

current=target;

}

counter.setAttribute("data-count",current);

if(text.includes("+")){

counter.innerText=current+"+";

}

else if(text.includes("★")){

counter.innerText="5★";

}

else{

counter.innerText=current;

}

setTimeout(update,30);

}

};

update();

});

// ===========================
// Welcome Message
// ===========================

window.addEventListener("load",()=>{

console.log("Welcome to Karibu Flavors Restaurant!");

});

// ===========================
// Button Hover Effect
// ===========================

document.querySelectorAll(".btn").forEach(button=>{

button.addEventListener("mouseenter",()=>{

button.style.transform="scale(1.05)";

});

button.addEventListener("mouseleave",()=>{

button.style.transform="scale(1)";

});

});