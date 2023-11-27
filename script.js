document.addEventListener('DOMContentLoaded', function () {
    // Находим все кнопки "Add to Basket"
    const addToBasketButtons = document.querySelectorAll('.addInBasket');

    // Добавляем слушателя события на каждую кнопку
    addToBasketButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            // Получаем данные о карточке из соответствующего элемента
            const cardContainer = button.closest('.card');
            const cardName = cardContainer.querySelector('.name').textContent;
            const cardPrice = parseFloat(cardContainer.querySelector('.price').textContent.replace('P', '').trim());

            // Создаем объект с данными карточки
            const cardData = { name: cardName, price: cardPrice };

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


window.addEventListener('beforeunload', function () {
    localStorage.clear();
});

