document.addEventListener('DOMContentLoaded', function () {
    const faqItems = document.querySelectorAll('.faq-item');
    const menuIcon = document.getElementById('menu-icon');
    const nav = document.getElementById('nav-menu');
     

    
    menuIcon.addEventListener('click', function() {
        menuIcon.classList.toggle('change');
        nav.classList.toggle('active');
    });
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        const arrow = item.querySelector('.arrow');

        question.addEventListener('click', () => {
            answer.style.display = (answer.style.display === 'block') ? 'none' : 'block';
            arrow.classList.toggle('rotate');
        });
    });
});

