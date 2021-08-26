
let buttonFirst = document.querySelector('.button-content1');
let buttonSecond = document.querySelector('.button-content2');
let buttonThird = document.querySelector('.button-content3');
let currentIndexAcademismFirst = 0;
let currentIndexAcademismSecond = 0;
let currentIndexBaroqueFirst = 0;
let currentIndexBaroqueSecond = 0;
let currentIndexClassicismFirst = 0;
let currentIndexClassicismSecond = 0;







let textAcademism = [
    'Гвидо Рени. Избиение младенцев, 1611 г. Национальная пинакотека. Болонья.',
    'Микеланджело Меризи да Караваджо. Давид и Голиаф, 1601 г. Прадо, Мадрид.', 
    'Микеланджело Меризи да Караваджо. Призвание апостола Матфея, 1599 г. Сан-Луиджи-деи-Франчези, Рим.',
    'Франсиско де Сурбаран. Распятие, 1627 г. Чикагский институт искусств.',
    'Аннибале Карриччи. Пьета, ок. 1600 г. Национальные музей и галерея Каподимонте, Неаполь.'
];

let imageAcademism = [
    'https://klin-demianovo.ru/wp-content/uploads/2020/01/la-strage-degli-innocenti.jpg',
    'https://i.pinimg.com/564x/9c/9a/a5/9c9aa53d8bbfd0e2b6ab1e9ebe5ac168.jpg',
    'https://img4.goodfon.ru/wallpaper/nbig/a/e5/karavadzho-prizvanie-apostola-matfeia-kartina-mifologiia-mik.jpg',
    'https://i.pinimg.com/564x/db/04/e3/db04e3999eaf179bc3d6cd88ccf3cf2b.jpg',
    'https://img-fotki.yandex.ru/get/3314/109816945.c4/0_c98ba_24462c41_orig.jpg'
];


buttonFirst.addEventListener('click', function () {
    document.getElementById('imageAcademism').src = imageAcademism[currentIndexAcademismFirst];
    currentIndexAcademismFirst++;
    if(currentIndexAcademismFirst >= imageAcademism.length) {
        currentIndexAcademismFirst = 0;
    }
});


buttonFirst.addEventListener('click', function () {
    document.getElementById('titleAcademism').textContent = textAcademism[currentIndexAcademismSecond];
    currentIndexAcademismSecond++;
    if(currentIndexAcademismSecond >= textAcademism.length) {
        currentIndexAcademismSecond = 0;
    }
});





let textBaroque = [
    'Питер Пауль Рубенс. Похищение дочерей Левкиппа, ок. 1617-1618 гг. Старая пинакотека, Мюнхен. ',
    'Франс Снейдерс. Рыночная сцена на набережной, 1640. Художественный музей Северной Каролины, Роли.',
    'Питер Пауль Рубенс. Охота на львов, 1621 г. Старая Пинакотека, Мюнхен.',
    'Альберхт Дюрер. Заяц, 1502 г. Галерея Альбертина, Вена.',
    'Антонис ван Дейк. Портрет графа Йохана 8 фон Нассау-Зиген, ок. 1626-1627 гг. Коллекция Лихтенштейнов.',
    'Диего Веласкес. Менины. 1656 г. Прадо, Мадрид.',
    'Диего Веласкес. Портрет придворного карлика дона Себастьяна дель Морра, ок. 1645 г. Прадо, Мадрид.',
    'Франц Халс. Цыганка, ок. 1628 г. Лувр, Париж.',
    'Хармес ван Рейк Рембранд. Автопортрет в 23 года, 1629 г. Музей Изабеллы Стюарт Гарднер, Бостон.',
    'Хармес ван Рейк Рембранд. Автопортрет в возрасте 34 лет, 1640 г. Национальная галерея, Лондон.',
    'Хармес ван Рейк Рембранд. Портрет старика в красном, 1652-1654 гг. Эрмитаж, Санкт-Петербург.',
    'Ян Стен. Гуляки, 1660 г. Эрмитаж, Санкт-Петербург.',
    'Ян Вермеер. Молочница, 1652-1654 гг. Рейксмюсеум, Амстердам.',
    'Питер Клаас. Натюрморт с едой для странника, 1664 г. Частная коллекция.',
    'Адриан ван Утрехт. Ванитас, 1642 г. Частная коллекция.',
    'Якоб ван Рейсдаль. Пшеничные поля, ок. 1670 г. Музей Метрополитен.',
    'Джованни Лоренцо Бернини. Экстаз святой Терезы, 1645-1652 гг. Санта-Мария-дела-Витториа, Рим.',
    'Джованни Лоренцо Бернини. Похищение Прозерпины, 1621-1622 гг. Галерея Боргезе, Рим.',
    'Питер Пауль Рубенс. Воздвижение креста, 1610 г. Собор Антверпенской Богоматери.'
];

let imageBaroque = [
    'https://avatars.mds.yandex.net/get-zen_doc/177006/pub_5b7a8768f83f0400a8dcbf1a_5b7a9422f1ab7d00a9b78679/scale_1200',
    'https://www.kathimerini.gr/wp-content/uploads/2021/01/mise-4.jpg',
    'https://i.pinimg.com/564x/b1/6f/8f/b16f8f4c1d29b597640caae72c107c51.jpg',
    'https://i.pinimg.com/564x/0f/a0/5c/0fa05c596b9683145abec77976ce4a2b.jpg',
    'https://sr.gallerix.ru/_UNK/95098395/1172284810.jpg',
    'https://pbs.twimg.com/media/ELXASe-WoAAOKgR.jpg',
    'https://i.pinimg.com/564x/5d/4d/7a/5d4d7a46991dc411b70398b6dd2128b3.jpg',
    'https://i.pinimg.com/564x/59/ad/de/59added066b7f5a6159c6b1fcf5e0e1e.jpg',
    'https://im0-tub-ru.yandex.net/i?id=e487dd43fdeaaddee9f218c0d8418649&n=13',
    'https://i.pinimg.com/564x/71/5f/e7/715fe799329599dd0c94002893f7c83c.jpg',
    'https://ru.artsviewer.com/images/R/rembrandt/1652-1654-1.jpg',
    'https://i.pinimg.com/564x/da/71/41/da71411e1feca608d5828d72245daccb.jpg',
    'https://i.pinimg.com/564x/ce/7d/8d/ce7d8d02ece4241e6ad73ea3e5829a45.jpg',
    'https://i.pinimg.com/originals/b0/bb/4d/b0bb4de0b86c6ff3e2b2b9c62e8f645b.jpg',
    'https://i.pinimg.com/564x/e7/6f/98/e76f98b289a76fac4607796c1b82ed4f.jpg',
    'https://risovanye.ru/sites/default/files/hudozhniki-76.jpg',
    'https://i.pinimg.com/564x/91/7d/a1/917da1c6abeb98dbf39c44167b95cb9c.jpg',
    'https://i.pinimg.com/564x/02/1a/59/021a59b7c658e82a80fbacc44c10b93a.jpg',
    'https://dic.academic.ru/pictures/wiki/files/82/Rubens_Kreuzaufrichtung2.JPG'
];


buttonSecond.addEventListener('click', function () {
    document.getElementById('imageBaroque').src = imageBaroque[currentIndexBaroqueFirst];
    currentIndexBaroqueFirst++;
    if(currentIndexBaroqueFirst >= imageBaroque.length) {
        currentIndexBaroqueFirst = 0;
    }
});


buttonSecond.addEventListener('click', function () {
    document.getElementById('titleBaroque').textContent = textBaroque[currentIndexBaroqueSecond];
    currentIndexBaroqueSecond++;
    if(currentIndexBaroqueSecond >= textBaroque.length) {
        currentIndexBaroqueSecond = 0;
    }
});







let textClassicism = [
    'Никола Пуссен. Святое семейство в Египте, 1655-1657 гг. Эрмитаж, Санкт-Петербург.',
    'Клод Лоррен. Отплытие царицы Савской (фрагмент), 1648 г. Национальная галерея, Лондон.',
    'Франсуа Жирардон. Конная статуя Людовика XIV, 1692 г. Лувр, Париж.',
    'Франсуа Жирардон. Портрет Никола Буало, 2-я половина XVII в. Лувр, Париж.',
    'Никола Пуссен. Смерть Германика, ок. 1625 г. Институт искусств, Миннеаполис.'
];

let imageClassicism = [
    'https://1.bp.blogspot.com/-3Bul_VbSv1k/XnIgvQHoP2I/AAAAAAAAw-o/PFaSShdBJzAPdEMLOhIvFVI8Ang0KuU9gCNcBGAsYHQ/s1600/%25D0%25A1%25D0%25B2%25D1%258F%25D1%2582%25D0%25BE%25D0%25B5%2B%25D0%25A1%25D0%25B5%25D0%25BC%25D0%25B5%25D0%25B9%25D1%2581%25D1%2582%25D0%25B2%25D0%25BE%2B%25D0%25B2%2B%25D0%2595%25D0%25B3%25D0%25B8%25D0%25BF%25D1%2582%25D0%25B5%2B%25281655-1657%2529%2B%2528105%2Bx%2B145%2529%2B%2528%25D0%25A1-%25D0%259F%25D0%25B5%25D1%2582%25D0%25B5%25D1%2580%25D0%25B1%25D1%2583%25D1%2580%25D0%25B3%252C%2B%25D0%25AD%25D1%2580%25D0%25BC%25D0%25B8%25D1%2582%25D0%25B0%25D0%25B6%2529.jpg',
    'https://i.pinimg.com/originals/e0/53/42/e05342e3a0418f16920f52bbe29c3487.jpg',
    'https://sc01.alicdn.com/kf/HTB1ny4iK4YaK1RjSZFnq6y80pXa9/Artificial-life-size-knight-hero-sculpture-bronze.jpg',
    'https://pbs.twimg.com/media/C60dsxxXUAEonJr.jpg',
    'https://i.pinimg.com/originals/76/3f/6b/763f6bbe57fcdb7411da6e8c10c63c0e.jpg'
];


buttonThird.addEventListener('click', function () {
    document.getElementById('imageClassicism').src = imageClassicism[currentIndexClassicismFirst];
    currentIndexClassicismFirst++;
    if(currentIndexClassicismFirst >= imageClassicism.length) {
        currentIndexClassicismFirst = 0;
    }
});


buttonThird.addEventListener('click', function () {
    document.getElementById('titleClassicism').textContent = textClassicism[currentIndexClassicismSecond];
    currentIndexClassicismSecond++;
    if(currentIndexClassicismSecond >= textClassicism.length) {
        currentIndexClassicismSecond = 0;
    }
});

