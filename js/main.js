const button = document.querySelector('.hambuerger-btn');

const close = document.querySelector('.close');
button.addEventListener('click', function() {
    console.log("click");
    document.querySelector('.menu').classList.toggle('active');




});