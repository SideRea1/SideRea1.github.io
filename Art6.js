
let buttonFirst = document.querySelector('.button-content1');
let buttonSecond = document.querySelector('.button-content2');
let buttonThird = document.querySelector('.button-content3');
let buttonFourth = document.querySelector('.button-content4');
let currentIndexVedutaFirst = 0;
let currentIndexVedutaSecond = 0;
let currentIndexRococoFirst = 0;
let currentIndexRococoSecond = 0;
let currentIndexСaricatureFirst = 0;
let currentIndexСaricatureSecond = 0;
let currentIndexNeoclassicismFirst = 0;
let currentIndexNeoclassicismSecond = 0;






let textVeduta = [
    'Бернардо Белотто. Вид Варшавы с терассы королевского замка, 1773 г. Национальный музей, Варшава.',
    'Антонио Каналетто. Вход в Гран Канале, ок. 1730 г. Музей изящных искусств, Хьюстон.'
];

let imageVeduta= [
    'https://trip-together.ru/wp-content/uploads/2016/08/12.jpg',
    'https://i.pinimg.com/564x/4c/45/7f/4c457f8eeda2c012ff490bd5a25771c8.jpg'
];


buttonFirst.addEventListener('click', function () {
    document.getElementById('imageVeduta').src = imageVeduta[currentIndexVedutaFirst];
    currentIndexVedutaFirst++;
    if(currentIndexVedutaFirst >= imageVeduta.length) {
        currentIndexVedutaFirst = 0;
    }
});


buttonFirst.addEventListener('click', function () {
    document.getElementById('titleVeduta').textContent = textVeduta[currentIndexVedutaSecond];
    currentIndexVedutaSecond++;
    if(currentIndexVedutaSecond >= textVeduta.length) {
        currentIndexVedutaSecond = 0;
    }
});





let textRococo = [
   'Франсуа Буше. Прелести сельской жизни, 1740 г. Лувр, Париж.',
   'Антуан Ватто. Капризнице, ок. 1718 г. Эрмитаж, Санкт-Петербург.',
   'Жан Оноре Фрагонар. Щеколда, ок. 1777 г. Лувр, Париж.',
   'Франсуа Буше. Геркулес и Омфала, 1732-1734 гг. Государственный музей изобразительного искусства им. А.С. Пушкина, Москва.',
   'Антуан Ватто. Жиль, 1719 г. Лувр, Париж.',
   'Жан-Этьен Лиотар. Шоколадница, ок. 1743-45 гг. Галерея старых мастеров, Дрезден.',
   'Франсуа Буше. Туалет Венеры, 1751 г. Метрополитен-музей, Нью-Йорк.',
   'Франсуа Буше. Портрет Маркизы де Помпадур, 1756 г. Старая Пинакотерка, Мюнхен.',
   'Томас Гейнсборо. Портрет Элизабет Шеридан, ок. 1775 г. Национальная галерея искусств, Вашингтон.',
   'Антуан Ватто. Праздник любви, 1719 г. Галерея Старых мастеров, Дрезден.'
];
let imageRococo = [
   'https://img-fotki.yandex.ru/get/64820/144337373.2a8/0_129945_7fd5b21e_XXL.jpg',
   'https://i.pinimg.com/564x/3f/a3/ae/3fa3aef69f918bf3d4545693fd603da3.jpg',
   'https://u.livelib.ru/reader/AkademikKrupiza/o/7jmajj91/o-o.jpeg',
   'https://cdn.iz.ru/sites/default/files/inline/RIAN_330494.HR_.ru_.jpg',
   'https://i.pinimg.com/564x/3c/61/09/3c6109dc78c3af67ad4baa4e4f034b82.jpg',
   'https://portrets.ru/natyurmort/liotar-zhan-ehten/kartina-shokoladnica-avtor.jpg',
   'https://i.etsystatic.com/13984062/r/il/1d02e2/1202824889/il_1588xN.1202824889_19w6.jpg',
   'https://i.etsystatic.com/6126662/r/il/4589b9/688564246/il_1588xN.688564246_eo7a.jpg',
   'https://artsdot.com/ADC/Art-ImgScreen-3.nsf/O/A-8BWVRJ/$FILE/Thomas_gainsborough-mrs_sheridan.Jpg',
   'https://img-fotki.yandex.ru/get/15492/251413519.104/0_50a182_f2bfa34e_XXL.jpg'
];


buttonSecond.addEventListener('click', function () {
    document.getElementById('imageRococo').src = imageRococo[currentIndexRococoFirst];
    currentIndexRococoFirst++;
    if(currentIndexRococoFirst >= imageRococo.length) {
        currentIndexRococoFirst = 0;
    }
});


buttonSecond.addEventListener('click', function () {
    document.getElementById('titleRococo').textContent = textRococo[currentIndexRococoSecond];
    currentIndexRococoSecond++;
    if(currentIndexRococoSecond >= textRococo.length) {
        currentIndexRococoSecond = 0;
    }
});







let textСaricature = [
    'Жан-Батист Шарден. Кухарка, 1738 г. Национальная галерея искусств. Вашингтон.',
    'Уильям Хогарт. Гравюра "Переулок Джина", 1750-1751 гг.'
];

let imageСaricature = [
   'https://i.pinimg.com/564x/5c/d6/ef/5cd6ef0db03ac451d393070b91800269.jpg',
   'https://artifex.ru/wp-content/uploads/2016/12/Гравюра_Уильям-Хогарт_Переулок-джина-1751.jpg'
];


buttonThird.addEventListener('click', function () {
    document.getElementById('imageСaricature').src = imageСaricature[currentIndexСaricatureFirst];
    currentIndexСaricatureFirst++;
    if(currentIndexСaricatureFirst >= imageСaricature.length) {
        currentIndexСaricatureFirst = 0;
    }
});


buttonThird.addEventListener('click', function () {
    document.getElementById('titleСaricature').textContent = textСaricature[currentIndexСaricatureSecond];
    currentIndexСaricatureSecond++;
    if(currentIndexСaricatureSecond >= textСaricature.length) {
        currentIndexСaricatureSecond = 0;
    }
});






