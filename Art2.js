
let buttonFirst = document.querySelector('.button-content1');
let buttonSecond = document.querySelector('.button-content2');
let buttonThird = document.querySelector('.button-content3');
let buttonFourth = document.querySelector('.button-content4');
let buttonFifth = document.querySelector('.button-content5');
let buttonSixth = document.querySelector('.button-content6');
let currentIndexGomerFirst = 0;
let currentIndexGomerSecond = 0;
let currentIndexArchaicFirst = 0;
let currentIndexArchaicSecond = 0;
let currentIndexClassicFirst = 0;
let currentIndexClassicSecond = 0;
let currentIndexLateClassicFirst = 0;
let currentIndexLateClassicSecond = 0;
let currentIndexHellenismFirst = 0;
let currentIndexHellenismSecond = 0;
let currentIndexRomeFirst = 0;
let currentIndexRomeSecond = 0;





let textGomer = [
    'Дипилонская амфора, VIII в. до н.э. Национальный археологический музей, Афины',
    'Статуэтка герой и кентавр VIII в. до н.э. из Олимпии. Метрополитен-музей, Нью-Йорк.',
    'Протогеометрическая амфора, ок. 975-950 гг. до н.э. Изготовлена в Афинах. Коллекция Британского музея.'
];

let imageGomer = [
    'https://i.pinimg.com/236x/cc/64/ee/cc64eeea9d765c1aaff1a30d5d5d02dd.jpg',
    'https://i.pinimg.com/236x/20/50/98/205098bc426325df2c285400770c5837.jpg',
    'https://i.pinimg.com/564x/a9/6b/b6/a96bb66b6ebf320b495b502d6f52e301.jpg'
];


buttonFirst.addEventListener('click', function () {
    document.getElementById('imageGomer').src = imageGomer[currentIndexGomerFirst];
    currentIndexGomerFirst++;
    if(currentIndexGomerFirst >= imageGomer.length) {
        currentIndexGomerFirst = 0;
    }
});


buttonFirst.addEventListener('click', function () {
    document.getElementById('titleGomer').textContent = textGomer[currentIndexGomerSecond];
    currentIndexGomerSecond++;
    if(currentIndexGomerSecond >= textGomer.length) {
        currentIndexGomerSecond = 0;
    }
});





let textArchaic = [
    'Аполлон Тенейский, ок. 550 г. до н.э. Мюнхенская глиптотека, Мюнхен',
    'Мосхофор, VI в.до н.э. Национальный археологический музей, Афины.',
    'Кора в пеплосе, 530 г. до н.э.Новый музей Акрополя, Афины.',
    'Умирающий воин с восточного фронтона храма в Эгине. Мюнхенская глиптотека. 490-480 гг. до н.э.'

];

let imageArchaic = [
    'https://www.la-fa.ru/history/1/71.jpg',
    'https://i.pinimg.com/236x/5a/3e/05/5a3e05eb4afc8e58432682888e998e80.jpg',
    'https://classconnection.s3.amazonaws.com/967/flashcards/2697967/jpg/14peplos1361725273487.jpg',
    'https://studfile.net/html/2706/956/html_MyyP2ISEJK.XutX/img-elybKU.jpg'
];


buttonSecond.addEventListener('click', function () {
    document.getElementById('imageArchaic').src = imageArchaic[currentIndexArchaicFirst];
    currentIndexArchaicFirst++;
    if(currentIndexArchaicFirst >= imageArchaic.length) {
        currentIndexArchaicFirst = 0;
    }
});


buttonSecond.addEventListener('click', function () {
    document.getElementById('titleArchaic').textContent = textArchaic[currentIndexArchaicSecond];
    currentIndexArchaicSecond++;
    if(currentIndexArchaicSecond >= textArchaic.length) {
        currentIndexArchaicSecond = 0;
    }
});







let textClassic = [
    'Поликлет. Статуя Дорифора. Римская копия с греческого оригинала, 450 г. до н.э. Археологический музей, Неаполь.',
    'Реконструкция западного фронтона храма Зевса в Олимпии, 460 г. до н.э. Археологический музей, Олимпия.',
    'Эксекий. Амфора с изображением Ахилла и Аякса, играющих в кости, V в. до н.э. Этрусский музей, Ватикан.',
    'Ефроний. Пелика с ласточкой, ок. 500 г. до н.э. Эрмитаж, Санкт-Петербург.',
    'Мирон. Дискобол. Римская копия с греческого оригинала, ок. 460г. до н.э. Дворец Массимо, Рим.'
];

let imageClassic = [
    'https://i.pinimg.com/236x/18/07/5e/18075ef00839f9d55085718bb9df19b7.jpg',
    'https://pandia.ru/text/82/063/images/img6_140.jpg',
    'https://i.pinimg.com/236x/39/52/8b/39528bc92c63719a9d907952c22900a9.jpg',
    'https://3.bp.blogspot.com/-9UTmIza8HcU/WDxb3stbkvI/AAAAAAAAAVQ/ymncAHCEnH8568Q-sSF-FDNFm_QUkeFlgCLcB/s1600/03.%2B%25D0%259F%25D0%25B5%25D0%25BB%25D0%25B8%25D0%25BA%25D0%25B0%2B%25D0%259F%25D1%2580%25D0%25B8%25D0%25BB%25D0%25B5%25D1%2582%2B%25D0%25BF%25D0%25B5%25D1%2580%25D0%25B2%25D0%25BE%25D0%25B9%2B%25D0%25BB%25D0%25B0%25D1%2581%25D1%2582%25D0%25BE%25D1%2587%25D0%25BA%25D0%25B8.jpg',
    'https://i.pinimg.com/236x/5b/0b/90/5b0b90332c8499363b702c07921a0d93.jpg'
];


buttonThird.addEventListener('click', function () {
    document.getElementById('imageClassic').src = imageClassic[currentIndexClassicFirst];
    currentIndexClassicFirst++;
    if(currentIndexClassicFirst >= imageClassic.length) {
        currentIndexClassicFirst = 0;
    }
});


buttonThird.addEventListener('click', function () {
    document.getElementById('titleClassic').textContent = textClassic[currentIndexClassicSecond];
    currentIndexClassicSecond++;
    if(currentIndexClassicSecond >= textClassic.length) {
        currentIndexClassicSecond = 0;
    }
});








let textLateClassic = [
    'Скопас. Пляшущая вакханка, IV в. до н.э. Римская копия ок. 350 г. до н.э. Государственные художественные собрания, Дрезден.',
    'Пракситель. Гермес с младенцем Дионисом на руках, ок. 350 г. до н.э. Археологический музей, Олимпия.',
    'Голова Александра Македонского, ок.325-300 гг. до н.э. Мраморная копия с оригинала Лиссиппа, Археологический музей, Стамбул.'
];

let imageLateClassic = [
    'https://otvet.imgsmail.ru/download/u_defcfa64c06a323570f8a0bd16c5f69e_800.jpg',
    'https://lh6.googleusercontent.com/proxy/0pPhUPWmAiGTLxzNQtfLm7odP1c2r0oCd7ecxLgaWlNbYwu6QSZl1sLL9lINwLaL8FKVeYxCtchAEzm0Jyjei8jYPGlvTZIDnE8ds8Czw_hy4etgjjCq3yyNUcr0vki2syrWQD0f7SWhhkJBprw0Ij3Ymm-7gA=s0-d',
    'https://i.pinimg.com/236x/00/21/7f/00217f9ad97d516deba264c35dad46c4.jpg'
];


buttonFourth.addEventListener('click', function () {
    document.getElementById('imageLateClassic').src = imageLateClassic[currentIndexLateClassicFirst];
    currentIndexLateClassicFirst++;
    if(currentIndexLateClassicFirst >= imageLateClassic.length) {
        currentIndexLateClassicFirst = 0;
    }
});


buttonFourth.addEventListener('click', function () {
    document.getElementById('titleLateClassic').textContent = textLateClassic[currentIndexLateClassicSecond];
    currentIndexLateClassicSecond++;
    if(currentIndexLateClassicSecond >= textLateClassic.length) {
        currentIndexLateClassicSecond = 0;
    }
});



let textHellenism = [
    'Ника Самофракийская, 190 г. до н.э. Лувр, Париж.',
    'Венера Милосская, ок. 130-100 г. до н.э. Лувр, Париж.',
    'Лаокоон и его сыновья, погибающие от змей, 50 г. до н.э. Музей Пия-Климента, Ватикан.'
];

let imageHellenism = [
    'https://i.pinimg.com/236x/f8/40/f4/f840f4a92228e4c8a88c5ce30b78a9e1.jpg',
    'https://i.pinimg.com/236x/79/ab/39/79ab39d28abe68b62bd3c7d2b9bad4b8.jpg',
    'https://i.pinimg.com/236x/82/a4/19/82a419f01589ab3f9bc319aca0490533.jpg'
];


buttonFifth.addEventListener('click', function () {
    document.getElementById('imageHellenism').src = imageHellenism[currentIndexHellenismFirst];
    currentIndexHellenismFirst++;
    if(currentIndexHellenismFirst >= imageHellenism.length) {
        currentIndexHellenismFirst = 0;
    }
});


buttonFifth.addEventListener('click', function () {
    document.getElementById('titleHellenism').textContent = textHellenism[currentIndexHellenismSecond];
    currentIndexHellenismSecond++;
    if(currentIndexHellenismSecond >= textHellenism.length) {
        currentIndexHellenismSecond = 0;
    }
});




let textRome = [
    'Тогатус Барберини, I в. до н.э. Капитолийские музеи, Рим.',
    'Статуя Авла Метелла, ок. 100 г. до н.э. Археологический музей, Флоренция',
    'Статуя императора Августа из Прима-Порта, I в. Музей Кьярамонти, Ватикан.',
    'Статуя Нервы, I в. Музей Пия-Климента, Ватикан.',
    'Портрет Адриана, II в. Британский музей, Лондон.',
    'Конная статуя Марка Аврелия, II в. Палаццо Нуово, Рим.',
    'Портрет римлянки. Мрамор, начало II в. Государственные художественные собрания, Дрезден.',
    'Вилла Арианна, Стабии (инкрустационный стиль), I в. до н.э.',
    'Дом Лукцецио Фронтоне, Помпеи (орнаментальный стиль), XX в. н.э.',
    'Портрет так называемого Брута, III-I вв. до н.э. Капитолийские музеи, Рим.'
];

let imageRome = [
    'https://i.pinimg.com/236x/9d/fc/bf/9dfcbf5bbe308fbd55cfd65f7b03b0e3.jpg',
    'https://i.pinimg.com/236x/4f/18/97/4f1897c0b652961f4181880ed188d719.jpg',
    'https://i.pinimg.com/736x/78/74/7b/78747b7596d72b522d037cfb4f257111--roman-sculpture-st-century.jpg',
    'http://ancientrome.ru/art/artwork/sculp/rom/imp/nerva/ner007.jpg',
    'https://i.pinimg.com/736x/86/64/c4/8664c48e63fbf6a6a4f24ae89f544e56--roma-italia.jpg',
    'https://i.pinimg.com/236x/f2/95/3b/f2953b5fc17d526c641fdcbf500f7024.jpg',
    'https://i.pinimg.com/736x/10/50/d5/1050d57726fa6b8a4eda8f9ecd5744b5--roman-empire-ancient-rome.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/8/86/Stabiae_Stanza_Villa_di_Arianna.jpg',
    'https://newsland.com/static/u/article_image/13/09/28/tmp_x7zgg.jpeg',
    'https://i.pinimg.com/564x/c4/0b/b9/c40bb9a4649c8d3d1b215425628ab072.jpg'
];


buttonSixth.addEventListener('click', function () {
    document.getElementById('imageRome').src = imageRome[currentIndexRomeFirst];
    currentIndexRomeFirst++;
    if(currentIndexRomeFirst >= imageRome.length) {
        currentIndexRomeFirst = 0;
    }
});


buttonSixth.addEventListener('click', function () {
    document.getElementById('titleRome').textContent = textRome[currentIndexRomeSecond];
    currentIndexRomeSecond++;
    if(currentIndexRomeSecond >= textRome.length) {
        currentIndexRomeSecond = 0;
    }
});