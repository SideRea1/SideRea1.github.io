
let buttonFirst = document.querySelector('.button-content1');
let buttonSecond = document.querySelector('.button-content2');
let buttonThird = document.querySelector('.button-content3');
let buttonFourth = document.querySelector('.button-content4');
let buttonFifth = document.querySelector('.button-content5');
let buttonSixth = document.querySelector('.button-content6');
let currentIndexByzantiumFirst = 0;
let currentIndexByzantiumSecond = 0;
let currentIndexWestFirst = 0;
let currentIndexWestSecond = 0;
let currentIndexRomanicFirst = 0;
let currentIndexRomanicSecond = 0;
let currentIndexGothicFirst = 0;
let currentIndexGothicSecond = 0;






let textByzantium = [
    'Оранта, ок. III в. Катакомбы Прасциллы, Рим.',
    'Мозаика с изображением императора Юстиниана I со свитой, VI в. Базилика Сан-Витале, Равенна.',
    'Богоматерь Оранта, XI в. Софийский собор, Киев.',
    'Икона Сергий и Вакх, VI в. Музей Варвары и Богдана Ханенко, Киев.',
    'Владимирская икона Божией матери, нач. XII в. Храм Святителя Николая в Толмачах, Государственная Третьяковская галерея, Москва.',
    'Двенадцать апостолов, начало XIV в. Государственный музей изобразительных искусств им. А.С. Пушкина, Москва.',
    'Благословение Константина VII Багрянородного, пластина из слоновой кости, X в. Государственный музей изобразительных искусств им. А.С. Пушкина, Москва.',
    'Рыба в окружении якорей, ок. III в. Катакомбы Домициллы, Рим.'
];

let imageByzantium = [
    'https://holidaygid.ru/wp-content/uploads/2014/08/Martin-Conde.jpg',
    'https://www.luigi-bevilacqua.com/wp-content/uploads/2014/10/Velluto-Mosaico-Bevlacqua.jpg',
    'https://veryimportantlot.com/uploads/over/files/Новости/2020/Декабрь%202020/Статья%20для%20блога.%20Живопись%20132%20(3.4)%20Мозаика.%20Мозаика%20Богоматерь%20Оранта%20в%20Софийском%20соборе%20Киева%2C%20XI%20век.jpg',
    'https://ic.pics.livejournal.com/vitaviktoria/85877414/1656791/1656791_original.jpg',
    'https://iknigi.net/books_files/online_html/102591/i_064.jpg',
    'https://foma.ru/wp-content/uploads/2016/07/12Apostol.jpg',
    'https://megabook.ru/stream/mediapreview?Key=Музей%20изобразительных%20искусств%20им.%20А.С.%20Пушкина%20(Музеи%20мира)%20(слайд%2004)&Width=654&Height=654',
    'https://psmb-neos-resources.hb.bizmrg.com/target/kateheo/b2de27df65df8fe5d3cb28053f88c633e3624f8b/2fishloaf-905x653.jpg'
];


buttonFirst.addEventListener('click', function () {
    document.getElementById('imageByzantium').src = imageByzantium[currentIndexByzantiumFirst];
    currentIndexByzantiumFirst++;
    if(currentIndexByzantiumFirst >= imageByzantium.length) {
        currentIndexByzantiumFirst = 0;
    }
});


buttonFirst.addEventListener('click', function () {
    document.getElementById('titleByzantium').textContent = textByzantium[currentIndexByzantiumSecond];
    currentIndexByzantiumSecond++;
    if(currentIndexByzantiumSecond >= textByzantium.length) {
        currentIndexByzantiumSecond = 0;
    }
});





let textWest = [
    'Фибула в виде орла, ок. 500 г. Нюрнберг.',
    'Поклонение волхвов, Алтарь Рахиса, VIII в. Собор Санта-Мария-Ассунта, Чивидалле-дель-Фриули.',
    'Христос во славе, алтарь Рахиса, передняя стенка, VIII в. Баптистерий Каллистуса, Чивидалле-дель-Фриули.',
    'Монограмма Христа, Келлское Евангелие, VIII в. Тринити Колледж, Дублин.',
    'Взятие Христа под стражу, Келлское Евангелие, VIII в. Тринити Колледж, Дублин.',
    'Миниатюра с изображением евангелиста Луки, Евангелие аббатисы Ады, ок. 800 г. Городская библиотека, Трир.',
    'Конная статуэтка Карла Великого, ок. 870 г. Лувр, Париж.',
    'Украшение корабля в виде головы зверя из Осеберга, IX в. Музей кораблей викингов на полуострове Бугдё, Осло.'
];

let imageWest = [
    'https://i.pinimg.com/564x/b6/f4/14/b6f414b2e886adb8690e880a77b454a3.jpg',
    'https://ruicon.ru/images/arts/DPI/Poklonenie_volhvov_1_copy1.jpg',
    'https://sun9-50.userapi.com/impf/c637516/v637516900/bfed/mjtCXirHjYk.jpg?size=800x534&quality=96&sign=56969ff36d0f8d1fc1d2dc74d87c97e6&type=album',
    'https://i.pinimg.com/564x/c8/9e/f6/c89ef67ebb92bc841f276f2c7bc94c0f.jpg',
    'https://i.pinimg.com/236x/51/88/1f/51881fa094de04e82777f5f3e39b9f22.jpg',
    'https://i.pinimg.com/564x/77/b2/4a/77b24a2f059486b186efe54a6c132874.jpg',
    'https://i.pinimg.com/564x/41/51/a5/4151a5a14ca8a7fabbd0e7b329bb08c3.jpg',
    'https://i.pinimg.com/564x/e0/74/1e/e0741e07a511432a60ca9de18ffa23cf.jpg'
];


buttonSecond.addEventListener('click', function () {
    document.getElementById('imageWest').src = imageWest[currentIndexWestFirst];
    currentIndexWestFirst++;
    if(currentIndexWestFirst >= imageWest.length) {
        currentIndexWestFirst = 0;
    }
});


buttonSecond.addEventListener('click', function () {
    document.getElementById('titleWest').textContent = textWest[currentIndexWestSecond];
    currentIndexWestSecond++;
    if(currentIndexWestSecond >= textWest.length) {
        currentIndexWestSecond = 0;
    }
});




let textRomanic = [
    'Гильдесгеймские врата, 1015 г. Собор Св. Михаила, Гильдесгейм, Германия.',
    'Христос Пантократор из церкви Сант-Клименте-де-Тауль, XII в. Национальный музей искусства Каталонии, Барселона.',
    'Статуи с изображением чудовищ, XII в. Аббатство Сен-Жиль.',
    'Ковер из Байё, XI в. Музей города Байё, Франция.',
    'Иллюстрации к 9 главе Откровенная Иоанна Богослова из Сен-Севера, 1047, Национальная библиотека Франции, Париж.',
    'Страшный Суд. Тимпан, 1130-1140 гг. Собора Сен-Лазаро, Отён, Франция.'

];

let imageRomanic = [
    'https://i.ytimg.com/vi/B9EQVFjnMWI/maxresdefault.jpg',
    'https://i.pinimg.com/564x/8b/46/a7/8b46a70e338b01c969dbb2468c3b9394.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/a/ac/Saint-Gilles_du_Gard_02.jpg',
    'https://im3.turbina.ru/photos.4/3/4/6/8/3/1638643/big.photo/Fragment-gobelena.jpg',
    'https://3.bp.blogspot.com/-MzgTvqAFkU4/UCksz-ZMtII/AAAAAAAABRM/iORIqx59NzA/s1600/22_4_cavalrymen.jpg',
    'https://i.pinimg.com/564x/31/0e/e7/310ee7ccf29c6f6a0b02423959a94239.jpg'
];


buttonThird.addEventListener('click', function () {
    document.getElementById('imageRomanic').src = imageRomanic[currentIndexRomanicFirst];
    currentIndexRomanicFirst++;
    if(currentIndexRomanicFirst >= imageRomanic.length) {
        currentIndexRomanicFirst = 0;
    }
});


buttonThird.addEventListener('click', function () {
    document.getElementById('titleRomanic').textContent = textRomanic[currentIndexRomanicSecond];
    currentIndexRomanicSecond++;
    if(currentIndexRomanicSecond >= textRomanic.length) {
        currentIndexRomanicSecond = 0;
    }
});








let textGothic = [
    'Искуситель и дева, XIII в. Страсбургский собор Девы Марии.',
    'Разумные и неразумные девы, XIII в. Собор Св. Маврикия и Св. Екатерины, Магдебург.',
    'Изображение Богоматери в короне, скульптура, XIII в. Амьенский собор.',
    'Статуи донаторов (т.н. портреты князей: Герман, Риглинда, Эккехард, Ута), XIII в. Наумбургский собор.',
    'Миниатюра из "Романа о розе", французский манускрипт, XIV в.',
    'Статуи пророков, XII в. Шартрский собор.'
];

let imageGothic = [
    'https://i.pinimg.com/originals/60/75/f8/6075f87831f147f995d3a347644c4b50.jpg',
    'https://img4.tourbina.ru/photos.4/0/0/1/8/1/1318100/big.photo/Nerazumnye-devy.jpg',
    'https://levelvan.ru/upload/media/n-1001427648744-3765.jpg',
    'https://i.pinimg.com/564x/1c/5f/34/1c5f3481ce327f759465e461aea394e8.jpg',
    'https://i.pinimg.com/originals/86/86/cf/8686cf1f20c7a484fc14ea59ee07960f.jpg',
    'https://img-fotki.yandex.ru/get/370846/374871492.3a5/0_217ace_2cdd2482_orig'
];


buttonFourth.addEventListener('click', function () {
    document.getElementById('imageGothic').src = imageGothic[currentIndexGothicFirst];
    currentIndexGothicFirst++;
    if(currentIndexGothicFirst >= imageGothic.length) {
        currentIndexGothicFirst = 0;
    }
});


buttonFourth.addEventListener('click', function () {
    document.getElementById('titleGothic').textContent = textGothic[currentIndexGothicSecond];
    currentIndexGothicSecond++;
    if(currentIndexGothicSecond >= textGothic.length) {
        currentIndexGothicSecond = 0;
    }
});



