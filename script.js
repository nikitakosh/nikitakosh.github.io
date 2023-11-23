
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

            // Вызываем функцию addToBasket с данными карточки
            addToBasket({ name: cardName, price: cardPrice });
        });
    });

    // Функция для добавления карточки в корзину
    function addToBasket(cardData) {
        // Преобразуем объект в строку и сохраняем в localStorage
        localStorage.setItem('selectedCard', JSON.stringify(cardData));
        // Переходим на другую страницу
        window.location.href = 'shoppingCart.html';
    }
});
