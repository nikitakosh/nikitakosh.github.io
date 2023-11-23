document.addEventListener('DOMContentLoaded', function () {
    // Находим все кнопки и счетчики
    const minusBtns = document.querySelectorAll('.minusBtn');
    const plusBtns = document.querySelectorAll('.plusBtn');
    const amountValues = document.querySelectorAll('.amountValue');

    // Функция для обновления значения счетчика
    function updateCount(index, increment) {
        let count = parseInt(amountValues[index].textContent, 10);
        count = increment ? count + 1 : Math.max(count - 1, 0);
        amountValues[index].textContent = count;

        // Проверяем, равно ли значение счетчика 0, и скрываем/показываем соответствующую карточку
        const card = amountValues[index].closest('.card');
        if (count === 0) {
            card.style.display = 'none';
        }
    }

    // Обработчики событий для кнопок "minus"
    minusBtns.forEach((btn, index) => {
        btn.addEventListener('click', function (event) {
            updateCount(index, false);
            event.preventDefault();
        });
    });

    // Обработчики событий для кнопок "plus"
    plusBtns.forEach((btn, index) => {
        btn.addEventListener('click', function (event) {
            updateCount(index, true);
            event.preventDefault();
        });
    });

    // Инициализация начального состояния
    amountValues.forEach((value, index) => {
        // Получаем начальное значение счет
        updateCount(index, true); // Показываем карточку, если счетчик больше 0
    });


    const selectedCardString = localStorage.getItem('selectedCard');

    // Проверяем наличие данных
    if (selectedCardString) {
        // Преобразуем строку JSON в объект
        const selectedCard = JSON.parse(selectedCardString);

        // Создаем элемент карточки
        const cardContainer = document.querySelector('.cards');
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div class="card card1">
            <img class="cardImg1" src="resources/imgCard1.svg" alt="imgCard">
            <div class="cardInfo">
                <span class="name">${selectedCard.name}</span>
                <div class="priceAndBasket">
                    <span class="price">${selectedCard.price}</span>
                    <div class="amount">
                        <img src="resources/minus.svg" alt="minus" width="20px" height="20px" class="minusBtn">
                        <span class="amountValue">1</span>
                        <img src="resources/plus.svg" alt="plus" width="20px" height="20px" class="plusBtn">
                    </div>
                </div>
            </div>
        </div>
        `;
        cardContainer.appendChild(card);
    }
});
