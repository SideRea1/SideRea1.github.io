
let buttonFirst = document.querySelector('.button-content1');
let buttonSecond = document.querySelector('.button-content2');
let buttonThird = document.querySelector('.button-content3');
let buttonFourth = document.querySelector('.button-content4');
let buttonFifth = document.querySelector('.button-content5');
let buttonSixth = document.querySelector('.button-content6');
let buttonSeventh = document.querySelector('.button-content7');
let currentIndexProtorenesanceFirst = 0;
let currentIndexProtorenesanceSecond = 0;
let currentIndexQuattrocento1First = 0;
let currentIndexQuattrocento1Second = 0;
let currentIndexQuattrocento2First = 0;
let currentIndexQuattrocento2Second = 0;
let currentIndexHighFirst = 0;
let currentIndexHighSecond = 0;
let currentIndexNorthFirst = 0;
let currentIndexNorthSecond = 0;





let textProtorenesance = [
    'Джотто ди Бондоне. Мадонна Оньисанти, 1310-1312 гг. Галерея Уффици, Флоренция.',
    'Симоне Мартини, Липпо Мемми. Благовещение, 1333 г. Галерея Уффици, Флоренция.',
    'Джотто ди Бондоне. Оплакивание Христа, около 1305 г. Капелла Скровеньи, Падуя.',
    'Джотто ди Бондоне. Возвращение Иоакима к пастухам, около 1305 г. Фреска Капелла Скровеньи, Падуя.',
    'Джованни Чимабуэ. Мадонна с ангелами, 1280-1285 гг. Лувр, Париж.'
];

let imageProtorenesance = [
    'https://i.pinimg.com/564x/f6/a4/7c/f6a47c0e0b899b708447163c15e6d5ea.jpg',
    'https://i.pinimg.com/564x/5a/2b/ce/5a2bce368c024cf661af8792da14864f.jpg',
    'https://1.bp.blogspot.com/-tOfwNqM9_GQ/X8OuFQu8dyI/AAAAAAABHD0/Av2EKzQ4HRotLTC4oIzMF-lD-0dwRxzqwCNcBGAsYHQ/s1600/36.1.%25D0%2596%25D0%25B8%25D0%25B7%25D0%25BD%25D1%258C%2B%25D0%25A5%25D1%2580%25D0%25B8%25D1%2581%25D1%2582%25D0%25B0.%2B%25D0%259E%25D0%25BF%25D0%25BB%25D0%25B0%25D0%25BA%25D0%25B8%25D0%25B2%25D0%25B0%25D0%25BD%25D0%25B8%25D0%25B5%2B%2528200%2B%25D1%2585%2B185%2529.jpg',
    'https://i.pinimg.com/564x/19/fe/8f/19fe8f264cff985cd462828078e4baf0.jpg',
    'https://i.pinimg.com/564x/0d/b5/29/0db5295941f8a800d0c7d557e555ce41.jpg'
];


buttonFirst.addEventListener('click', function () {
    document.getElementById('imageProtorenesance').src = imageProtorenesance[currentIndexProtorenesanceFirst];
    currentIndexProtorenesanceFirst++;
    if(currentIndexProtorenesanceFirst >= imageProtorenesance.length) {
        currentIndexProtorenesanceFirst = 0;
    }
});


buttonFirst.addEventListener('click', function () {
    document.getElementById('titleProtorenesance').textContent = textProtorenesance[currentIndexProtorenesanceSecond];
    currentIndexProtorenesanceSecond++;
    if(currentIndexProtorenesanceSecond >= textProtorenesance.length) {
        currentIndexProtorenesanceSecond = 0;
    }
});





let textQuattrocento1 = [
    'Пьеро делла Франческа. Портреты Федериго да Монтефельтро и Баттисты Сфорца, 1465-1472 гг. Галерея Уффици, Флоренция.',
    `Якопо Беллини. Мадонна с младенцем и донатором Лионелло д'Эсте, XV в. Лувр, Париж`,
    'Сандро Боттичелли. Портрет мужчины с медалью Козимо Медичи, XV в. Галерея Уффици, Флоренция.',
    'Сандро Боттичелли. Иллюстрация к новелле о Настаджо дельи Онести, XV в. Музей Прадо, Мадрид.',
    'Сандро Боттичелли. Рождение Венеры, 1482-1486 гг. Галерея Уффици, Флоренция.',
    'Доменико Гирландайо. Рождество Марии, XV в. Базилика Санта-Мария-Новелла, Флоренция.',
    'Витторе Карпаччо. Рождество Марии, 1502-1504 гг. Академия Каррара, Бергамо.',
    'Пьетро Перуджино. Передача ключей апостолу Петру, XV в. Сикстинская капелла, Ватикан.',
    'Андреа Мантенья. Оплакивание Христа, XV в. Пинакоттека Брера, Милан.',
    'Мазаччо. Троица, 1425-1427 гг. Базилика Санта-Мария-Новелла, Флоренция.'
];

let imageQuattrocento1 = [
    'https://ic.pics.livejournal.com/rafik_jan/84480785/188337/188337_original.jpg',
    'https://veryimportantlot.com/uploads/over/files/Новости/2020/Октябрь%202020/Статья%2015%20(2)%20Якопо%20Беллини.%20Картина%20«Мадонна%20с%20младенцем%20и%20преклоняющимся%20Леонелло%20д’Эсте»%2C%20предположительно%2C%201440.jpg',
    'https://i.pinimg.com/564x/e4/a9/28/e4a928aeb0c9c662606676ad4d1156b6.jpg',
    'https://i.etsystatic.com/9303363/r/il/243e71/970022652/il_1588xN.970022652_amji.jpg',
    'https://istorik.net/uploads/posts/2021-07/1625680175_rozhdeniye-venery.jpg',
    'https://www.e-reading.life/illustrations/1053/1053357-_118.jpg',
    'https://i.pinimg.com/564x/2f/0b/ef/2f0befa1eea770a5590d893c09ffd782.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Pietro_Perugino_034.jpg/1200px-Pietro_Perugino_034.jpg',
    'https://latuaitalia.ru/images/lombardia/milano/weekend/cristo.jpg',
    'https://i.pinimg.com/originals/07/7c/7f/077c7f58e87aadc4bf03e75b3bedb738.jpg'
];


buttonSecond.addEventListener('click', function () {
    document.getElementById('imageQuattrocento1').src = imageQuattrocento1[currentIndexQuattrocento1First];
    currentIndexQuattrocento1First++;
    if(currentIndexQuattrocento1First >= imageQuattrocento1.length) {
        currentIndexQuattrocento1First = 0;
    }
});


buttonSecond.addEventListener('click', function () {
    document.getElementById('titleQuattrocento1').textContent = textQuattrocento1[currentIndexQuattrocento1Second];
    currentIndexQuattrocento1Second++;
    if(currentIndexQuattrocento1Second >= textQuattrocento1.length) {
        currentIndexQuattrocento1Second = 0;
    }
});


let textQuattrocento2 = [
    'Донателло. Конная статуя кондотьера Гаттамелаты, Падуя.',
    'Донаттелло. Давид, около 1440 г. Национальный музей Барджелло, Флоренция.',
    'Лоренцо Гиберти. Райские врата, XV в. Баптистерий Сан-Джованни, Флоренция.'
];

let imageQuattrocento2 = [
    'https://i.pinimg.com/originals/e8/95/3f/e8953f561334bb9d0c9a8a7774786ce0.jpg',
    'https://i.pinimg.com/564x/8c/90/4a/8c904a7e6a096446be619c67629f63d6.jpg',
    'https://i.pinimg.com/564x/9d/f5/43/9df5433652e18964f0883603dffec1e4.jpg'
    
];


buttonThird.addEventListener('click', function () {
    document.getElementById('imageQuattrocento2').src = imageQuattrocento2[currentIndexQuattrocento2First];
    currentIndexQuattrocento2First++;
    if(currentIndexQuattrocento2First >= imageQuattrocento2.length) {
        currentIndexQuattrocento2First = 0;
    }
});


buttonThird.addEventListener('click', function () {
    document.getElementById('titleQuattrocento2').textContent = textQuattrocento2[currentIndexQuattrocento2Second];
    currentIndexQuattrocento2Second++;
    if(currentIndexQuattrocento2Second >= textQuattrocento2.length) {
        currentIndexQuattrocento2Second = 0;
    }
});








let textHigh = [
    'Леонардо да Винчи. Мадонна в скалах, первая версия, 1483 г. Лувр, Париж.',
    'Леонардо да Винчи. Тайная вечеря, 1495-1498 гг. Санта-Мария-делле-Грацие, Милан.',
    'Рафаэль Санти. Афинская школа, 1511 г. Апостольский дворец, Ватикан.',
    'Рафаэль Санти. Автопортрет, 1506 г. Галерея Уффици, Флоренция.',
    'Рафаэль Санти. Сикстинская Мадонна, 1512-1513 гг. Галерея старых мастеров, Дрезден.',
    'Микеланджело Буонарроти. Давид, 1501-1504 гг. Галерея Академия, Флоренция.',
    'Микеланджело Буонарроти. Кумская сивилла, 1508-1512 гг. Сикстинская капелла, Ватикан.',
    `Антонио Виварини и Джованни Д'Алеманья. Алтарь Отцов Церкви, 1446 г. Галерея академии, Венеция.`,
    'Джотто да Кастельфранко. Спящая Венера, 1510 г. Галерея старых мастеров, Дрезден.',
    'Джотто да Кастельфранко. Гроза, 1506-1508 гг. Галерея Академии, Венеция.',
    'Джотто да Кастельфранко. Сельский концерт, 1508-1510 гг. Лувр, Париж.',
    'Тициан Вечеллио. Венера Урбинская, 1538 г. Галерея Уффици, Флоренция.',
    'Тициан Вечеллио. Венера перед зеркалом, 1555 г. Национальная галерея искусства, Вашингтон.',
    'Тициан Вечеллио. Портрет молодого англичанина, 1545 г. Палаццо Питти, Флоренция.',
    'Тициан Вечеллио. Портреты Папы Павла III с Алессандро и Оттавио Фернезе, 1546 г. Национальный Музей Каподимонте, Неаполь.',
    'Тициан Вечеллио. Коронование тернием, ок. 1570 г. Старая Пинакотека, Мюнхен.',
    'Леонардо да Винчи. Мона Лиза, 1503-1505 гг. Лувр, Париж.'
];

let imageHigh = [
    'https://2.bp.blogspot.com/-K1OpjnF0_AU/WKHsOzjrBLI/AAAAAAAAA-c/vzj4sRO__FQF0iuHuf_DX_TOLFyrQlXbgCLcB/s1600/5.jpg',
    'https://avatars.mds.yandex.net/get-zen_doc/4471199/pub_60d3671658bb871d599a3b14_60d370555b23a43cd1b104db/scale_1200',
    'https://i.pinimg.com/564x/88/14/7a/88147ac287da7f64fadcc1997aadd6e1.jpg',
    'https://i.pinimg.com/564x/1a/0e/bb/1a0ebb369c7dd874336b7d61570d0bcd.jpg',
    'https://i.pinimg.com/564x/cb/bf/f5/cbbff5827a2a39025fc196b1140d25ad.jpg',
    'https://flashmomentcontinued.files.wordpress.com/2015/03/florence-2014-1054.jpg',
    'https://i.pinimg.com/originals/b9/d8/90/b9d890377690abf4ee144e102af01bee.jpg',
    'https://nibiryukov.mgimo.ru/nb_pinacoteca/nb_pinacoteca_painting/nb_pinacoteca_vivarini_antonio_triptych.jpg',
    'https://avatars.mds.yandex.net/get-zen_doc/1901671/pub_5e7efb4e76040914a4678d44_5e7f3f6ce76e9e2043c7dde2/scale_1200',
    'https://artguide.com/storage/event/2520/preview_picture.jpg',
    'https://muzei.club/wp-content/uploads/2020/03/fmg5e71ee54e4acc7-768x584.jpg',
    'https://im0-tub-ru.yandex.net/i?id=6e7caa6f0b071c573c5196990f0afb80-l&ref=rim&n=13&w=1080&h=751',
    'https://avatars.mds.yandex.net/get-turbo/2352307/rth60bf734cd35570dad57d318bbd814042/max_g480_c12_r3x4_pd10',
    'https://ru.artsviewer.com/images/T/titian/1545-5.jpg',
    'https://ru.artsdot.com/ADC/Art-ImgScreen-4.nsf/O/A-8Y2UFG/$FILE/Tiziano-vecellio-titian-pope-paul-iii-with-his-grandsons-alessandro-and-ottavio-farnese.Jpg',
    'https://ru.artsviewer.com/images/T/titian/1570-1575-2.jpg',
    'https://i.pinimg.com/564x/54/56/fd/5456fd5bef859a128065f62f32b5dd4a.jpg'
];


buttonFourth.addEventListener('click', function () {
    document.getElementById('imageHigh').src = imageHigh[currentIndexHighFirst];
    currentIndexHighFirst++;
    if(currentIndexHighFirst >= imageHigh.length) {
        currentIndexHighFirst = 0;
    }
});


buttonFourth.addEventListener('click', function () {
    document.getElementById('titleHigh').textContent = textHigh[currentIndexHighSecond];
    currentIndexHighSecond++;
    if(currentIndexHighSecond >= textHigh.length) {
        currentIndexHighSecond = 0;
    }
});

let textNorth = [
    'Джузеппе Арчимбольдо. Лето, 1563 г. Музей истории искусств, Вена.',
    'Ян Ван Эйк. Мадонна в церкви, 1438-1440 гг. Берлинская картинная галерея.',
    'Рогир ван дер Вейден. Благовещение, центральная часть Триптиха из Турне, 1450 г. Лувр, Париж.',
    'Иероним Босх. Извлечение камня глупости, 1475-1480 гг. Прадо, Мадрид.',
    'Иероним Босх. Триптих "Сад земных наслаждений", 1500-1510 гг. Прадо, Мадрид.',
    'Альберхт Дюрер. Диптих "Адам и Ева", 1507 г. Прадо, Мадрид.',
    'Альберхт Дюрер. Крыло синебрюхой сизоворонки, 1512 г. Галерея Альбертина, Вена.',
    'Альберхт Дюрер. Вид на долину Арко в Тироле, 1495 г. Лувр, Париж.',
    'Альберхт Дюрер. Портрет Михиэля Вольгемута, 1516 г. Германский национальный музей, Нюрнберг.',
    'Альберхт Дюрер. Поклонение волхвов, 1504 г. Галерея Уффици, Флоренция.',
    'Лукас Кранах. Оплакивание Христа, 1538 г. Музей изящных искусств, Бостон.', 
    'Питер Брейгель. Падение Икара, 1558 г. Королевский музей изящных искусств, Брюссель.',
    'Питер Брейгель. Крестьянский танец, 1568 г. Музей истории искусств, Вена.',
    'Франческо Пармиджанино. Мадонна с длинной шеей, 1535 г. Галерея Уффици, Флоренция.'
];

let imageNorth = [
    'https://i.pinimg.com/564x/a3/45/c1/a345c1394d8325f034bb588f5b7f9431.jpg',
    'https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_episode/2843398/2843398-1592003870879-323ccc7746fe7.jpg',
    'https://i.pinimg.com/564x/72/0f/39/720f399025e12893373903babd8ba9ac.jpg',
    'https://godeye.ru/wp-content/uploads/2021/07/000-3.jpg',
    'https://cs6.livemaster.ru/storage/12/2e/877afbd772786fa3372434457cgt.jpg',
    'https://ja-tora.com/wp-content/uploads/Albrecht_Durer.jpg',
    'https://muzei-mira.com/templates/museum/images/paint/krilo-durer+.jpg',
    'https://ru.artsdot.com/ADC/Art-ImgScreen-3.nsf/O/A-8XZE66/$FILE/Albrecht-durer-view-of-the-arco-valley-in-the-tyrol.Jpg',
    'https://sun9-71.userapi.com/impg/_hcKj2MdutJCW9LXXuKiFPQwLZjA-4OyUwVFNA/WkKm_79gyHU.jpg?size=583x604&quality=96&sign=2e64887572cb20dda36e908a10be93f9&type=album',
    'https://i.pinimg.com/564x/50/6f/e4/506fe42b3bc497436e37d3a23bf3c4fd.jpg',
    'https://i.pinimg.com/originals/e3/ce/52/e3ce521e982ae75de693db974388e972.jpg',
    'https://i.pinimg.com/originals/84/fb/11/84fb1125c7810210833ff4a84f05b839.jpg',
    'https://pbs.twimg.com/media/EEEQVXSXoAAbAD_.jpg',
    'https://i.pinimg.com/564x/6c/ec/60/6cec60b9e6b17fd17b747fa36f3a63dc.jpg'
];


buttonSeventh.addEventListener('click', function () {
    document.getElementById('imageNorth').src = imageNorth[currentIndexNorthFirst];
    currentIndexNorthFirst++;
    if(currentIndexNorthFirst >= imageNorth.length) {
        currentIndexNorthFirst = 0;
    }
});


buttonSeventh.addEventListener('click', function () {
    document.getElementById('titleNorth').textContent = textNorth[currentIndexNorthSecond];
    currentIndexNorthSecond++;
    if(currentIndexNorthSecond >= textNorth.length) {
        currentIndexNorthSecond = 0;
    }
});

