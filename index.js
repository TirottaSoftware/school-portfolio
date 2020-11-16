const burger = document.querySelector(".burger");
const sidebar = document.querySelector(".sidebar");
const cardImages = document.querySelectorAll(".card img");
const banner = document.querySelector(".banner");
const navbar = document.querySelector("nav")
   

cardImages.forEach(cardImage => {
    cardImage.addEventListener("click", () =>{
        cardImage.classList.toggle("translated");
    })
});

burger.addEventListener("click", () => {
    sidebar.classList.toggle("sidebar-hidden");
})

window.addEventListener('scroll', () =>{
    if(window.scrollY > banner.clientHeight/2){
        navbar.style.background = '#0f5298'
    }
    else{
        navbar.style.background = 'transparent';
    }
})