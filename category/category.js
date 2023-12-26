document.addEventListener("DOMContentLoaded", function () {
    const imageForCarousel1 = document.getElementById('imgForСarousel1');
    const imageForCarousel2 = document.getElementById('imgForСarousel2');
    const imageForCarousel3 = document.getElementById('imgForСarousel3');

    function handleResizeForCarousel1() {

        imageForCarousel1.src = getSrc();
        function getSrc() {
            const windowWidth = window.innerWidth;
            if (windowWidth < 700) {
                return "resources/imgCard1.svg";
            } else {
                return "resources/sliderBackground10.jpg";
            }
        }
    }
    function handleResizeForCarousel2() {

        imageForCarousel2.src = getSrc();
        function getSrc() {
            const windowWidth = window.innerWidth;
            if (windowWidth < 700) {
                return "resources/imgCard2.svg";
            } else {
                return "resources/sliderBackground11.jpg";
            }
        }
    }
    function handleResizeForCarousel3() {

        imageForCarousel3.src = getSrc();
        function getSrc () {
            const windowWidth = window.innerWidth;
            if (windowWidth < 700) {
                return "resources/imgCard3.svg";
            } else {
                return "resources/sliderBackground12.jpg";
            }
        }
    }
    handleResizeForCarousel1();
    handleResizeForCarousel2();
    handleResizeForCarousel3();

    const addToBasketButtons = document.querySelectorAll('.addInBasket');

    // Добавляем слушателя события на каждую кнопку
    addToBasketButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            // Получаем данные о карточке из соответствующего элемента
            const cardContainer = button.closest('.card');
            const cardName = cardContainer.querySelector('.name').textContent;
            const cardPrice = parseFloat(cardContainer.querySelector('.price').textContent.replace('P', '').trim());
            const imgSrc = document.querySelector(".card img").src;
            // Создаем объект с данными карточки
            const cardData = { name: cardName, price: cardPrice, imgSrc: imgSrc };

            // Получаем текущий массив карточек из localStorage
            const existingCards = JSON.parse(localStorage.getItem('selectedCards')) || [];

            // Добавляем новую карточку в массив
            existingCards.push(cardData);

            // Сохраняем обновленный массив в localStorage
            localStorage.setItem('selectedCards', JSON.stringify(existingCards));

            alert('Карточка добавлена в корзину!');
        });
    });
});


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}
document.querySelector(".bucket").addEventListener("click", function() {
    window.location.href = "index.html";
});
document.querySelector(".profile").addEventListener("click", function() {
    window.location.href = "registration.html";
});
document.querySelector(".card").addEventListener("click", function() {
    window.location.href = "productPage.html";
});