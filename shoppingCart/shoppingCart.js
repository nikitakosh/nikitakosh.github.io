document.addEventListener('DOMContentLoaded', function () {
    const selectedCards = JSON.parse(localStorage.getItem('selectedCards')) || [];

    // Перебираем массив и отображаем карточки на странице
    selectedCards.forEach(function (cardData) {
        // Создаем элемент карточки
        const cardContainer = document.querySelector('.cards');
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img class="cardImg1" src="${cardData.imgSrc}" alt="imgCard">
            <div class="cardInfo">
                <span class="name">${cardData.name}</span>
                <div class="priceAndBasket">
                    <span class="price">${cardData.price + " Р"}</span>
                    <div class="amount">
                        <img src="../resources/minus.svg" alt="minus" width="20px" height="20px" class="minusBtn">
                        <span class="amountValue">1</span>
                        <img src="../resources/plus.svg" alt="plus" width="20px" height="20px" class="plusBtn">
                    </div>
                </div>
            </div>
        `;

        // Добавляем карточку на страницу
        cardContainer.appendChild(card);
    });
    // Функция для обновления значения счетчика
    function updateCount(amountValue, increment) {
        let count = parseInt(amountValue.textContent, 10);
        count = increment ? count + 1 : Math.max(count - 1, 0);
        amountValue.textContent = count;

        // Проверяем, равно ли значение счетчика 0, и скрываем/показываем соответствующую карточку
        const card = amountValue.closest('.card');
        if (count === 0) {
            card.style.display = 'none';
        }
    }

    // Обработчики событий для кнопок "minus"
    function attachMinusEvent(minusBtn, amountValue) {
        minusBtn.addEventListener('click', function (event) {
            updateCount(amountValue, false);
            event.preventDefault();
        });
    }

    // Обработчики событий для кнопок "plus"
    function attachPlusEvent(plusBtn, amountValue) {
        plusBtn.addEventListener('click', function (event) {
            updateCount(amountValue, true);
            event.preventDefault();
        });
    }

    const cards = document.querySelectorAll('.card');

    cards.forEach(function (card) {
        const minusBtn = card.querySelector('.minusBtn');
        const plusBtn = card.querySelector('.plusBtn');
        const amountValue = card.querySelector('.amountValue');

        attachMinusEvent(minusBtn, amountValue);
        attachPlusEvent(plusBtn, amountValue);
    });
});
document.querySelector(".bucket").addEventListener("click", function() {
    window.location.href = "../mainPage/index.html";
});
document.querySelector(".profile").addEventListener("click", function() {
    window.location.href = "../registration/registration.html";
});