for (let i = 0; i < 5; i++) {
    initSliderAndModal(i === 0 ? '' : i);  // Passe '' pour le premier ensemble, puis 1, 2, 3 pour les suivants
}



const menuIcon = document.getElementById('menu-icon');
const nav = document.getElementById('nav-menu');

menuIcon.addEventListener('click', function() {
    menuIcon.classList.toggle('change');
    nav.classList.toggle('active');
});


function initSliderAndModal(suffix) {
let slideIndex = 0;
const slides = document.querySelectorAll(`.slide${suffix}`);
const modal = document.getElementById(`myModal${suffix}`);
const mainImage = document.querySelector(`.main-image${suffix}`);
const thumbnails = document.querySelectorAll(`.thumbnail${suffix}`);
const span = document.querySelector(`.close${suffix}`);



function showSlides(n) {
    if (n >= slides.length) slideIndex = 0;
    if (n < 0) slideIndex = slides.length - 1;
    slides.forEach(slide => slide.style.display = "none");
    slides[slideIndex].style.display = "block";
}

document.querySelector(`.prev${suffix}`).addEventListener('click', (event) => {
    event.stopPropagation();
    showSlides(--slideIndex);
});

document.querySelector(`.next${suffix}`).addEventListener('click', (event) => {
    event.stopPropagation();
    showSlides(++slideIndex);
});

thumbnails.forEach(thumb => {
    thumb.addEventListener('click', (event) => {
        event.stopPropagation();
        mainImage.src = thumb.src;
        mainImage.alt = thumb.alt;
    });
});

span.onclick = () => modal.style.display = "none";

window.onclick = (event) => {
    if (event.target === modal) modal.style.display = "none";
};

document.querySelectorAll(`.card${suffix} .info`).forEach(info => {
    info.addEventListener('click', () => modal.style.display = "block");
});







}
const urlParams = new URLSearchParams(window.location.search);
const searchParam = urlParams.get('search');

if (searchParam) {
    // Sélectionnez tous les éléments de logement
    const housingItems = document.querySelectorAll('.housing-item');

    housingItems.forEach(item => {
        // Vérifiez si l'élément contient le terme de recherche
        if (item.textContent.toLowerCase().includes(searchParam.toLowerCase())) {
            // Ajoutez une classe pour encadrer l'élément
            item.classList.add('highlight');
        }
    
    });




       
        
        
 
    
}