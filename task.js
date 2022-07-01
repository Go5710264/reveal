let reveal = Array.from(document.getElementsByClassName('reveal')); // поиск элемента при котором должен появиться всплывающий блок

function isVisible(element) {
    const {top, bottom} = element.getBoundingClientRect(); // получение расстояния от верхней границы элемента до окна браузера
 
    if (top < 0 && bottom < 0) { // если margin top и bottom < 0
        return element.classList.remove('reveal_active'); // удалить класс
    } else if (top < window.innerHeight || bottom < window.innerHeight) { // если margin top или bottom во viewport
        return element.classList.add('reveal_active'); // добавить класс
    } else {
        return element.classList.remove('reveal_active');
    }
}
setInterval(() =>{ // каждую 0.1с
    reveal.forEach((popUpWindow) =>{ // происходит итерация по массиву
        window.addEventListener('scroll', isVisible(popUpWindow)); // где при скролле страницы вызывается функция на каждый элемент
    });
}, 100);