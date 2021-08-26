
let buttonFirst = document.querySelector('.button-content1');
let buttonSecond = document.querySelector('.button-content2');
let buttonThird = document.querySelector('.button-content3');
let buttonFourth = document.querySelector('.button-content4');
let buttonFifth = document.querySelector('.button-content5');
let buttonSixth = document.querySelector('.button-content6');
let buttonSeventh = document.querySelector('.button-content7');
let currentIndexClassicismFirst = 0;
let currentIndexClassicismSecond = 0;
let currentIndexRomanticismFirst = 0;
let currentIndexRomanticismSecond = 0;
let currentIndexRealismFirst = 0;
let currentIndexRealismSecond = 0;
let currentIndexImpressionismFirst = 0;
let currentIndexImpressionismSecond = 0;
let currentIndexPostImpressionismFirst = 0;
let currentIndexPostImpressionismSecond = 0;
let currentIndexModernFirst = 0;
let currentIndexModernSecond = 0;
let currentIndexSymbolismFirst = 0;
let currentIndexSymbolismSecond = 0;





let textClassicism = [
   'Жак-Луи Давид. Портрет мадам Рекамье, 1800 г. Лувр, Париж.',
   'Франсуа Жерар. Портрет Наполеона I в коронационной одежде, 1805 г. Версаль.'
];

let imageClassicism = [
    'https://charybary.ru/wp-content/uploads/gadanie-madam-rekame-1.jpg',
    'https://i.pinimg.com/564x/18/e0/5d/18e05d4229496fd55f1ec1e091de6ce9.jpg'
];


buttonFirst.addEventListener('click', function () {
    document.getElementById('imageClassicism').src = imageClassicism[currentIndexClassicismFirst];
    currentIndexClassicismFirst++;
    if(currentIndexClassicismFirst >= imageClassicism.length) {
        currentIndexClassicismFirst = 0;
    }
});


buttonFirst.addEventListener('click', function () {
    document.getElementById('titleClassicism').textContent = textClassicism[currentIndexClassicismSecond];
    currentIndexClassicismSecond++;
    if(currentIndexClassicismSecond >= textClassicism.length) {
        currentIndexClassicismSecond = 0;
    }
});





let textRomanticism = [
    'Эжен Делакруа. Свобода, ведущая народ, 1830 г. Лувр, Париж.',
    'Франсиско Гойя. Сон разума рождает чудовищ, 1797 г. Национальная библиотека Испании, Мадрид.',
    'Георг Фридрих Кёрстинг. Перед зеркалом, 1827 г. Кунстхалле, Киль.',
    'Каспар Давид Фридрих. Странник над морем тумана, ок. 1817 г. Кунстхалле, Гамбург.',
    'Георг Фридрих Кёрстинг. Пара у окна, 1815 г. Частная коллекция (?).',
    'Отто Рунге. Маленькая Пертес, 1805 г. Веймарский замок, Германия.',
    'Каспар Давид Фридрих. Аббатство в Оквуде, ок. 1810 г. Старая национальная галерея, Берлин.',
    'Уильям Тёрнер. Пожар в здании Парламента, ок. 1834-1835 гг. Музей изящных искусств, Кливленд.',
    'Теодор Жерико. Плот "Медузы", 1819 г. Лувр, Париж.'
];

let imageRomanticism = [
    'https://pbs.twimg.com/media/CeOYV_rWwAAP5ZG.jpg',
    'https://i.pinimg.com/564x/41/ca/0b/41ca0b19e84bf522c03522930d745f17.jpg',
    'https://i.pinimg.com/564x/27/6a/b2/276ab2e12568998e8effbdca327353d1.jpg',
    'https://2.bp.blogspot.com/-ltYjs-8SEPI/TqGW-fClf1I/AAAAAAAAFHI/TZxjoVHOyGM/s1600/0305250011.jpg',
    'https://i.pinimg.com/564x/47/5b/f4/475bf42c7ffed1aba0e9c1c622d24395.jpg',
    'https://i.pinimg.com/originals/49/2f/65/492f65f0d2e39a113de50d89362f9895.jpg',
    'https://img-fotki.yandex.ru/get/23/251413519.1db/0_53ef40_8af55f_XXL.jpg',
    'https://i.pinimg.com/564x/01/84/4d/01844d01088c8cc45feb4324d7f357ed.jpg',
    'https://pbs.twimg.com/media/DxrtL4IXcAASgeq.jpg'
];


buttonSecond.addEventListener('click', function () {
    document.getElementById('imageRomanticism').src = imageRomanticism[currentIndexRomanticismFirst];
    currentIndexRomanticismFirst++;
    if(currentIndexRomanticismFirst >= imageRomanticism.length) {
        currentIndexRomanticismFirst = 0;
    }
});


buttonSecond.addEventListener('click', function () {
    document.getElementById('titleRomanticism').textContent = textRomanticism[currentIndexRomanticismSecond];
    currentIndexRomanticismSecond++;
    if(currentIndexRomanticismSecond >= textRomanticism.length) {
        currentIndexRomanticismSecond = 0;
    }
});







let textRealism = [
    'Уильям Бугро. Сборщица колосьев, 1894 г. Частная коллекция.',
    'Оноре Домье. Гаргантюа, 1831 г. Национальная библиотека Франции, Париж.',
    'Гюстав Курбе. Похороны в Орнане, 1849-1850 г. Музей Орсе, Париж.',
    'Жан-Франсуа Милле. Сборщицы колосьев, 1857 г. Музей Орсе, Париж.',
    'Камиль Коро. Воспоминание о Коброне, 1872 г. Музей изобразительного искусства, Будапешт.',
    'Поль Бодри. Жемчужина и волна, 1862 г. Прадо, Мадрид.'
];

let imageRealism = [
    'https://i.pinimg.com/564x/9c/20/ea/9c20eaf22ee8b859dcbcee7ffaa54904.jpg',
    'https://images.lvltravels.com/img/usa/0/15-most-influential-political-cartoons-all-time_6.jpg',
    'https://lh3.googleusercontent.com/-s3bmlRqzkbQ/TW7ZoBzkMyI/AAAAAAAABQ4/DKnYDpTZyAE/w1200-h630-p-k-no-nu/ornans.jpeg',
    'https://i.pinimg.com/564x/3a/75/f2/3a75f2752d5d26370255e17345320a0d.jpg',
    'https://i.pinimg.com/564x/54/e9/36/54e93640c4f24d28e12f6e7d4b9df12c.jpg',
    'https://sun9-20.userapi.com/impg/cbgKgh0gRliy9hlVdVbY5A2uhNHTtZDUjAGmUQ/hOwXD24pnaM.jpg?size=604x318&quality=96&sign=9e963fb76f730ba9188c2b753ac81e31&type=album'
];


buttonThird.addEventListener('click', function () {
    document.getElementById('imageRealism').src = imageRealism[currentIndexRealismFirst];
    currentIndexRealismFirst++;
    if(currentIndexRealismFirst >= imageRealism.length) {
        currentIndexRealismFirst = 0;
    }
});


buttonThird.addEventListener('click', function () {
    document.getElementById('titleRealism').textContent = textRealism[currentIndexRealismSecond];
    currentIndexRealismSecond++;
    if(currentIndexRealismSecond >= textRealism.length) {
        currentIndexRealismSecond = 0;
    }
});








let textImpressionism = [
    'Эдуард Мане. Олимпия, Музей Орсе, 1863 г. Париж.',
    'Клод Моне. Впечатление. Восход солнца, 1872 г. Музей Мармоттан-Моне, Париж.',
    'Камиль Писсаро. Фруктовый сад в Понтуазе, 1877 г. Музей Орсе, Париж.',
    'Клод Моне. Сорока, 1869 г. Музей Орсе, Париж.',
    'Клод Моне. Прогулка, 1875 г. Национальная галерея искусств, Вашингтон.',
    'Огюст Ренуар. Бал в Мулен де ла Галетт, 1876 г. Музей Орсе, Париж.',
    'Клод Моне. Собор в Руане в солнце 1894 г. Музей Орсе, Париж.',
    'Клод Моне. Главный вход в Руанский собор, 1894 г. Музей Орсе, Париж.',
    'Клод Моне. Руанский собор, Западный портал и башня в полдень, Гармония голубого и золота. 1893 г. Музей Орсе, Париж.',
    'Эдуард Мане. Завтрак на траве, 1863 г. Музей Орсе, Париж.'
];

let imageImpressionism = [
    'https://i.pinimg.com/564x/de/86/c8/de86c8aaabd7038ad8df9cdda3bdbce8.jpg',
    'https://i.pinimg.com/564x/1a/4e/af/1a4eafa1e38ef60ac5b1ddbc035730a5.jpg',
    'https://i.pinimg.com/originals/e3/e4/61/e3e461c41454e29ed570268d82b1c7ff.jpg',
    'https://cs2.livemaster.ru/storage/c2/47/4fc9a935d0c4bef1ed28489ba2y7--kartiny-i-panno-kartina-maslom-klod-mone-soroka.jpg',
    'https://i.pinimg.com/originals/6b/19/ac/6b19ac51f0b6e66ba0f3142ad2a6cf5c.jpg',
    'https://i.pinimg.com/564x/e7/5e/7a/e75e7a8394c6673aab8a9f3b615c82ed.jpg',
    'https://www.1st-art-gallery.com/thumbnail/146000/146110/painting_page_800x/Monet/Rouen-Cathedral,-The-Portal-And-The-Tour-Dalbane,-Full-Sunlight.jpg?ts=1505655060',
    'https://i.pinimg.com/564x/28/2e/2b/282e2bb341b5b528abd11ccaa41f1784.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Claude_Monet_-_Rouen_Cathedral%2C_Facade_and_Tour_d%27AlbaneI.JPG/800px-Claude_Monet_-_Rouen_Cathedral%2C_Facade_and_Tour_d%27AlbaneI.JPG',
    'https://libcat.ru/uploads/posts/pictures/164923-i_104.jpg'
];


buttonFourth.addEventListener('click', function () {
    document.getElementById('imageImpressionism').src = imageImpressionism[currentIndexImpressionismFirst];
    currentIndexImpressionismFirst++;
    if(currentIndexImpressionismFirst >= imageImpressionism.length) {
        currentIndexImpressionismFirst = 0;
    }
});


buttonFourth.addEventListener('click', function () {
    document.getElementById('titleImpressionism').textContent = textImpressionism[currentIndexImpressionismSecond];
    currentIndexImpressionismSecond++;
    if(currentIndexImpressionismSecond >= textImpressionism.length) {
        currentIndexImpressionismSecond = 0;
    }
});



let textPostImpressionism = [
    'Поль Сезанн. Скалы в Эстаке, 1879-1882 гг. Художественный музей Сан-Паулу, Бразилия.',
    'Поль Сезанн. Гора Святой Виктории. Вид от Бибемю, ок. 1897 г. Балтиморский художественный музей, США.',
    'Поль Сезанн. Натюрморт с яблоками, 1894 г. Кунстхаус, Цюрих.',
    'Поль Сезанн. Портрет Амбруаза Воллара, 1895 г. Малый дворец, Париж.',
    'Поль Сезанн. Гора Св. Виктории, 1906 г. Собрание Кэррол С.Тайсон, Филадельфия.',
    'Ван Гог. Портрет папаши Танги, 1887 г. Музей Родена, Париж.',
    'Утагава Хиросигэ. Мост Осаши. Из цикла "Сто известных видов Эдо", 1857 г.',
    'Ван Гог. Ночное кафе, 1888 г. Йельский университет.',
    'Ван Гог. Автопортрет с отрезанным ухом, 1889 г. Кунстхаус, Цюрих.',
    'Поль Гоген. Женщина, держащая плод, 1893 г. Эрмитаж, Санкт-Петербург.',
    'Поль Гоген. У моря. 1892 г. Национальная галерея искусства, Вашингтон.',
    'Анри Тулуз-Лотрек. Японский диван, 1892 г. Музей Тулуз-Лотрека, Альби. ',
    'Поль Сезанн. Фруктовый сад в Понтуазе, 1877 г. Собрание г-жи Александр Альберт, Сан-Франциско.'
];

let imagePostImpressionism = [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/L%27Estaque_aux_toits_rouges%2C_par_Paul_Cézanne.jpg/1118px-L%27Estaque_aux_toits_rouges%2C_par_Paul_Cézanne.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/a/af/La_Montagne_Sainte-Victoire_vue_de_la_carrière_Bibémus%2C_par_Paul_Cézanne.jpg',
    'https://ru.artsviewer.com/images/C/cezanne/1894-18.jpg',
    'https://i.pinimg.com/564x/57/a9/ca/57a9cae11e115516972043cd4063cb6b.jpg',
    'https://pbs.twimg.com/media/DE6woTMXcAAupI0.jpg',
    'https://i.pinimg.com/564x/f4/a3/35/f4a335fa671b968b8073d63b2a5f8997.jpg',
    'https://i.etsystatic.com/7423915/r/il/ca289f/667705119/il_1588xN.667705119_pnuy.jpg',
    'https://trashbox.ru/files/339313_0dfcc9/f_kopiya-kartiny-vinsenta-van-goga-nochnoe-kafe_kirilchuk_elena_1364465416.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Vincent_van_Gogh_-_Self_Portrait_with_Bandaged_Ear_and_Pipe.jpg/525px-Vincent_van_Gogh_-_Self_Portrait_with_Bandaged_Ear_and_Pipe.jpg',
    'https://i.pinimg.com/564x/9e/c6/9a/9ec69a194910c28a13feee266dbda1ec.jpg',
    'https://u-stena.ru/upload/iblock/014/014dcacb0f4ebabb07abc3681174f02a.jpg',
    'https://i.pinimg.com/564x/92/98/3b/92983b779a4deb3f162e464bf69919a4.jpg',
    'https://www.cvetamira.ru/images/store/Iscusstvos/Iscusstvo86/fac4bf.jpg'
];


buttonFifth.addEventListener('click', function () {
    document.getElementById('imagePostImpressionism').src = imagePostImpressionism[currentIndexPostImpressionismFirst];
    currentIndexPostImpressionismFirst++;
    if(currentIndexPostImpressionismFirst >= imagePostImpressionism.length) {
        currentIndexPostImpressionismFirst = 0;
    }
});


buttonFifth.addEventListener('click', function () {
    document.getElementById('titlePostImpressionism').textContent = textPostImpressionism[currentIndexPostImpressionismSecond];
    currentIndexPostImpressionismSecond++;
    if(currentIndexPostImpressionismSecond >= textPostImpressionism.length) {
        currentIndexPostImpressionismSecond = 0;
    }
});




let textModern = [
    'Обри Бёрдслей. Павлинья юбка, иллюстрация к пьесе Оскара Уальда "Соломея", 1894 г. Музей Виктории и Альберта, Лондон.',
    'Густав Климт. Поцелуй, 1907-1908 гг. Галерея Бельведер, Вена.',
    'Франц фон Штук. Саломея, 1906 г. Городская галерея в доме Ленбаха. Мюнхен.',
    'Альфонс Муха. Реклама сигарет JOB, 1898 г.',
    'Эктор Гимар. Вестибюль станции метро Porte Dauphine, 1900 г. Париж.',
    'Обрист Герман. Вышивка "Удар бича", ок. 1895 г.Городской музей, Мюнхен.'
];

let imageModern = [
    'https://i.pinimg.com/564x/0c/d4/1c/0cd41c262d78f04763cc6750b7912901.jpg',
    'https://i.pinimg.com/564x/b2/2a/b6/b22ab6229457a385abd9c3602b1cbe72.jpg',
    'https://img-fotki.yandex.ru/get/233577/37629529.13e/0_f3a0b_43ff75a4_XL.jpg',
    'https://i.pinimg.com/564x/96/f2/9a/96f29a682d528870f5197ef0ffaba3fd.jpg',
    'https://i.pinimg.com/originals/f2/c1/7e/f2c17e553d891384c7cc08c11d621944.jpg',
    'https://i.pinimg.com/564x/c2/a0/cf/c2a0cfc8ddcd953652e6736e851b6bc8.jpg'
];


buttonSixth.addEventListener('click', function () {
    document.getElementById('imageModern').src = imageModern[currentIndexModernFirst];
    currentIndexModernFirst++;
    if(currentIndexModernFirst >= imageModern.length) {
        currentIndexModernFirst = 0;
    }
});


buttonSixth.addEventListener('click', function () {
    document.getElementById('titleModern').textContent = textModern[currentIndexModernSecond];
    currentIndexModernSecond++;
    if(currentIndexModernSecond >= textModern.length) {
        currentIndexModernSecond = 0;
    }
});

