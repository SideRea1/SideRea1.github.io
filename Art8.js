
let buttonFirst = document.querySelector('.button-content1');
let buttonSecond = document.querySelector('.button-content2');
let buttonThird = document.querySelector('.button-content3');
let buttonFourth = document.querySelector('.button-content4');
let buttonFifth = document.querySelector('.button-content5');
let buttonSixth = document.querySelector('.button-content6');
let buttonSeventh = document.querySelector('.button-content7');
let buttonEighth = document.querySelector('.button-content8');
let buttonNinth = document.querySelector('.button-content9');
let buttonTenth = document.querySelector('.button-content10');
let currentIndexAvangardFirst = 0;
let currentIndexAvangardSecond = 0;
let currentIndexFauvismFirst = 0;
let currentIndexFauvismSecond = 0;
let currentIndexPrimitivismFirst = 0;
let currentIndexPrimitivismSecond = 0;
let currentIndexExpressionismFirst = 0;
let currentIndexExpressionismSecond = 0;
let currentIndexCubismFirst = 0;
let currentIndexCubismSecond = 0;
let currentIndexAbstractFirst = 0;
let currentIndexAbstractSecond = 0;
let currentIndexFuturismFirst = 0;
let currentIndexFuturismSecond = 0;
let currentIndexDadaismFirst = 0;
let currentIndexDadaismSecond = 0;
let currentIndexSurrealismFirst = 0;
let currentIndexSurrealismSecond = 0;
let currentIndexPostmodernismFirst = 0;
let currentIndexPostmodernismSecond = 0;





let textAvangard = [
'Казимир Малевич. «Икона» мирового авангарда — «Чёрный квадрат» (1915).',
'Казимир Малевич. Спортсмены. 1930-1931.'
];

let imageAvangard = [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Чёрный_супрематический_квадрат._1915._ГТГ.png/420px-Чёрный_супрематический_квадрат._1915._ГТГ.png',
    'https://i.pinimg.com/564x/45/2e/aa/452eaa9d99aa3a3bfa46188049293874.jpg'
];


buttonFirst.addEventListener('click', function () {
    document.getElementById('imageAvangard').src = imageAvangard[currentIndexAvangardFirst];
    currentIndexAvangardFirst++;
    if(currentIndexAvangardFirst >= imageAvangard.length) {
        currentIndexAvangardFirst = 0;
    }
});


buttonFirst.addEventListener('click', function () {
    document.getElementById('titleAvangard').textContent = textAvangard[currentIndexAvangardSecond];
    currentIndexAvangardSecond++;
    if(currentIndexAvangardSecond >= textAvangard.length) {
        currentIndexAvangardSecond = 0;
    }
});





let textFauvism = [
    'Анри Матисс. Разговор, 1908-1912 гг. Эрмитаж, Санкт-Петербург.',
    'Анри Матисс. Танец, 1910 г. Эрмитаж, Санкт-Петербург.'
];

let imageFauvism = [
    'https://static.tildacdn.com/tild3965-6662-4333-a462-373534646661/____1912_____REGNUM.jpg',
    'https://i.pinimg.com/originals/54/fd/45/54fd456b59b0eb9bedf58bbb7892502c.jpg'
];


buttonSecond.addEventListener('click', function () {
    document.getElementById('imageFauvism').src = imageFauvism[currentIndexFauvismFirst];
    currentIndexFauvismFirst++;
    if(currentIndexFauvismFirst >= imageFauvism.length) {
        currentIndexFauvismFirst = 0;
    }
});


buttonSecond.addEventListener('click', function () {
    document.getElementById('titleFauvism').textContent = textFauvism[currentIndexFauvismSecond];
    currentIndexFauvismSecond++;
    if(currentIndexFauvismSecond >= textFauvism.length) {
        currentIndexFauvismSecond = 0;
    }
});







let textPrimitivism = [
    'Нико Пиросмани. Актриса Маргарита. 1909.',
    'Анри Руссо. Сон, 1910 г. Музей современного искусства, Нью-Йорк.'
];

let imagePrimitivism = [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Niko_Pirosmani_Margarita_1909.jpg/330px-Niko_Pirosmani_Margarita_1909.jpg',
    'https://avatars.mds.yandex.net/get-zen_doc/5231890/pub_60d5a9b0548a76196f23daae_60d5ab0f41086e684cb495fe/scale_1200'
];


buttonThird.addEventListener('click', function () {
    document.getElementById('imagePrimitivism').src = imagePrimitivism[currentIndexPrimitivismFirst];
    currentIndexPrimitivismFirst++;
    if(currentIndexPrimitivismFirst >= imagePrimitivism.length) {
        currentIndexPrimitivismFirst = 0;
    }
});


buttonThird.addEventListener('click', function () {
    document.getElementById('titlePrimitivism').textContent = textPrimitivism[currentIndexPrimitivismSecond];
    currentIndexPrimitivismSecond++;
    if(currentIndexPrimitivismSecond >= textPrimitivism.length) {
        currentIndexPrimitivismSecond = 0;
    }
});








let textExpressionism = [
    'Франц Марк. Свиньи, 1911 г.',
    'Эдвард Мунк. Крик, 1893 г. Национальная галерея, Осло.'
];

let imageExpressionism = [
    'https://i.pinimg.com/originals/d4/0f/1a/d40f1a8f6cb35404701c09d0ada8fe78.jpg',
    'https://i.pinimg.com/236x/95/15/a2/9515a24db2efefae9bc64bf6a447f473.jpg'
];


buttonFourth.addEventListener('click', function () {
    document.getElementById('imageExpressionism').src = imageExpressionism[currentIndexExpressionismFirst];
    currentIndexExpressionismFirst++;
    if(currentIndexExpressionismFirst >= imageExpressionism.length) {
        currentIndexExpressionismFirst = 0;
    }
});


buttonFourth.addEventListener('click', function () {
    document.getElementById('titleExpressionism').textContent = textExpressionism[currentIndexExpressionismSecond];
    currentIndexExpressionismSecond++;
    if(currentIndexExpressionismSecond >= textExpressionism.length) {
        currentIndexExpressionismSecond = 0;
    }
});



let textCubism = [
    'Пит Мондриан. Композиция с красным, желтым, синим и  чёрным.',
    'Пабло Пикассо. Авиньонские девицы, 1908 г. Музей современного искусства, Нью-Йорк.'
];

let imageCubism = [
    'https://i.pinimg.com/originals/e9/1b/f3/e91bf3d0d2bd396c30ae9d1550a5b315.jpg',
    'https://artalebrio.com/frontend/web/upload/5ff2186f5f62c.jpg'
];


buttonFifth.addEventListener('click', function () {
    document.getElementById('imageCubism').src = imageCubism[currentIndexCubismFirst];
    currentIndexCubismFirst++;
    if(currentIndexCubismFirst >= imageCubism.length) {
        currentIndexCubismFirst = 0;
    }
});


buttonFifth.addEventListener('click', function () {
    document.getElementById('titleCubism').textContent = textCubism[currentIndexCubismSecond];
    currentIndexCubismSecond++;
    if(currentIndexCubismSecond >= textCubism.length) {
        currentIndexCubismSecond = 0;
    }
});




let textAbstract = [ 
    'Василий Кандинский. Композиция VIII, 1923 г. Музей современного искусства Соломона Гуггенхайма, Нью-Йорк.',
    'Джексон Поллок. Осенний ритм, 1950 г. Метрополитен, Нью-Йорк.',
    'Пабло Пикассо. Гитара и Скрипка, 1913 г. Эрмитаж, Санкт-Петербург.'
];

let imageAbstract = [
    'https://i.pinimg.com/564x/88/7c/21/887c21b8e2bcac53bbbb4736264fc4a5.jpg',
    'https://i.pinimg.com/564x/6d/49/2a/6d492a657e85b202cb57c5a2a0ed3aee.jpg',
    'https://i.pinimg.com/564x/8c/70/40/8c7040b1530e7c570a1dc03093bb55d6.jpg'
];


buttonSixth.addEventListener('click', function () {
    document.getElementById('imageAbstract').src = imageAbstract[currentIndexAbstractFirst];
    currentIndexAbstractFirst++;
    if(currentIndexAbstractFirst >= imageAbstract.length) {
        currentIndexAbstractFirst = 0;
    }
});


buttonSixth.addEventListener('click', function () {
    document.getElementById('titleAbstract').textContent = textAbstract[currentIndexAbstractSecond];
    currentIndexAbstractSecond++;
    if(currentIndexAbstractSecond >= textAbstract.length) {
        currentIndexAbstractSecond = 0;
    }
});


let textFuturism = [
    'Джино Северини. Динамический иероглиф бала Табарэн, 1912 г. Музей современного искусства, Нью-Йорк.', 
    'Джакомо Балла. Уличный фонарь, 1910 г. Музей современного искусства, Нью-Йорк.',
    'Умберто Боччони. Улица входит в дом, 1911 г. Музей Шпрегеля, Ганновер.'
];

let imageFuturism = [
    'https://konspekta.net/studopedianet/baza17/3758893902564.files/image049.jpg',
    'https://gymn1-sochi.ru/800/600/https/ae01.alicdn.com/kf/HTB19_9zLpXXXXX9XXXXq6xXFXXXK/Unframed-Canvas-Prints-Street-Light-By-Giacomo-Balla.jpg',
    'https://i.pinimg.com/736x/e5/62/c7/e562c78447bc9df2bd2b6c6cbe5e864a.jpg'
];


buttonSeventh.addEventListener('click', function () {
    document.getElementById('imageFuturism').src = imageFuturism[currentIndexFuturismFirst];
    currentIndexFuturismFirst++;
    if(currentIndexFuturismFirst >= imageFuturism.length) {
        currentIndexFuturismFirst = 0;
    }
});


buttonSeventh.addEventListener('click', function () {
    document.getElementById('titleFuturism').textContent = textFuturism[currentIndexFuturismSecond];
    currentIndexFuturismSecond++;
    if(currentIndexFuturismSecond >= textFuturism.length) {
        currentIndexFuturismSecond = 0;
    }
});


let textDadaism = [
    'Марсель Дюшан. Велосипедное колесо, 1913 г. Музей Израиля, Иерусалим.', 
    'Марсель Дюшан. Фонтан, 1917 г. Художественный музей Филадельфии.',
    'Рауль Хаусман. ABCD (Автопортрет), 1923-1924 гг. Метрополитен-музей, Нью-Йорк.'
];

let imageDadaism = [
    'https://i.pinimg.com/564x/85/64/a4/8564a4f375eb8225a5ddd5060b1d011a.jpg',
    'https://i.pinimg.com/originals/70/6d/6a/706d6aa7cd07a33671180701872f6389.jpg',
    'https://i.pinimg.com/736x/5e/c6/ef/5ec6ef36dc9dbc4b1ff010a88abdd91c.jpg'
];


buttonEighth.addEventListener('click', function () {
    document.getElementById('imageDadaism').src = imageDadaism[currentIndexDadaismFirst];
    currentIndexDadaismFirst++;
    if(currentIndexDadaismFirst >= imageDadaism.length) {
        currentIndexDadaismFirst = 0;
    }
});


buttonEighth.addEventListener('click', function () {
    document.getElementById('titleDadaism').textContent = textDadaism[currentIndexDadaismSecond];
    currentIndexDadaismSecond++;
    if(currentIndexDadaismSecond >= textDadaism.length) {
        currentIndexDadaismSecond = 0;
    }
});


let textSurrealism = [
    'Рене Магрит, Любовники, 1928 г. Музей современного искусства, Нью-Йорк.',
    'Сальвадор Дали. Постоянство памяти, 1931 г. Музей современного искусства, Нью-Йорк.',
    'Джорджо де Кирико. Метафизический интерьер с печеньем, 1916 г. Менил Коллекшен, Хьюстон.'
];

let imageSurrealism = [
    'https://i.pinimg.com/736x/df/67/b2/df67b28e16c8c3a45e0ed542a7335001.jpg',
    'https://i.pinimg.com/564x/6c/d9/26/6cd926348e11d680491ff04aa8a7219a.jpg',
    'https://i.pinimg.com/564x/8b/e2/19/8be219abe2c434a78aed693334aa28d6.jpg'
];


buttonNinth.addEventListener('click', function () {
    document.getElementById('imageSurrealism').src = imageSurrealism[currentIndexSurrealismFirst];
    currentIndexSurrealismFirst++;
    if(currentIndexSurrealismFirst >= imageSurrealism.length) {
        currentIndexSurrealismFirst = 0;
    }
});


buttonNinth.addEventListener('click', function () {
    document.getElementById('titleSurrealism').textContent = textSurrealism[currentIndexSurrealismSecond];
    currentIndexSurrealismSecond++;
    if(currentIndexSurrealismSecond >= textSurrealism.length) {
        currentIndexSurrealismSecond = 0;
    }
});

let textPostmodernism = [
    'Диего Веласкес. Менины, 1656 г. Прадо, Мадрид.',
   'Сальвадор Дали. Жемчужина. По мотивам "Инфанты Маргариты", 1981 г. Частная коллекция.', 
   'Сальвадор Дали. Телефон-лобстер, 1936 г. Современная галерея Тейт, Лондон.', 
   'Рой Лихтенштейн. Whaam, 1963 г. Современная галерея Тейт, Лондон.',
   'Пабло Пикассо. Менины. По Веласкесу, 1957 г. Музей Пикассо, Барселона.',
   'Керолл Фейерманн. The Midpoint, 2017 г.',
   'Дмитрий Владимирович Врубель. Графити на Берлинской стене "Господи! Помоги мне выжить среди этой смертной любви", 1990 г.'
];

let imagePostmodernism = [
    'https://pbs.twimg.com/media/ELXASe-WoAAOKgR.jpg',
    'https://i.pinimg.com/564x/f4/cf/54/f4cf54917f6654fbb369c8c716b035cf.jpg',
    'https://i.pinimg.com/564x/9b/09/4f/9b094f8b410cb63718130178ca40f8b9.jpg',
    'https://i.pinimg.com/564x/49/d5/c4/49d5c465c6d0928661f69a2158d19ca6.jpg',
    'https://i.pinimg.com/564x/0d/ae/ad/0daeadf0b10a77ef7f6fbe91de8edeff.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Hyperrealistic_sculpture_“The_Midpoint”_by_Carole_A._Feuerman%2C_at_Giardino_della_Marinaressa_by_2017_Venice_Biennale_DSCN0308.jpg/330px-Hyperrealistic_sculpture_“The_Midpoint”_by_Carole_A._Feuerman%2C_at_Giardino_della_Marinaressa_by_2017_Venice_Biennale_DSCN0308.jpg',
    'https://avatars.mds.yandex.net/get-zen_doc/751940/pub_5b5950a81b7d0a00ac54f1c1_5b59623b0537b500ab046283/scale_1200'
];


buttonTenth.addEventListener('click', function () {
    document.getElementById('imagePostmodernism').src = imagePostmodernism[currentIndexPostmodernismFirst];
    currentIndexPostmodernismFirst++;
    if(currentIndexPostmodernismFirst >= imagePostmodernism.length) {
        currentIndexPostmodernismFirst = 0;
    }
});


buttonTenth.addEventListener('click', function () {
    document.getElementById('titlePostmodernism').textContent = textPostmodernism[currentIndexPostmodernismSecond];
    currentIndexPostmodernismSecond++;
    if(currentIndexPostmodernismSecond >= textPostmodernism.length) {
        currentIndexPostmodernismSecond = 0;
    }
});

