const newNews = {
    firstNew: {
        firstNewsHeaderText: 'Пока белорусам запрещают выезжать за границу по земле, в Польше не стало популярной торговой сети Tesco',
        firstNewsText: 'Магазины Netto это новое название на торговой карте Белостока, Сокулки и других городов приграничной Польши',
        firstNewsPhotoAddress: './Photo/firstNewsImage.jpg',
        firstNewsAddress: 'https://s13.ru/archives/tesco-1',
        first: 'first'
    },
    secondNew: {
        secondNewsHeaderText: 'Посмотрите, какие квартиры в Гродно продаются в домах ХIX века (есть и очень дешевая)',
        secondNewsText: `В Беларуси редко, но все же продается жилье, построенное до 1900 года. Таких объявлений не много, и большую часть квартир «почтенного возраста» можно найти в гродненском историческом центре`,
        secondNewsPhotoAddress: './Photo/secondNewsImage.jpg',
        secondNewsAddress: 'https://s13.ru/archives/kvartriry-2',
        second: 'second'
    },
    thirdNew: {
        thirdNewsHeaderText: 'Египет напугал новыми правилами въезда, но все оказалось не так страшно: Куда белорусы летят зимой и сколько за это платят',
        thirdNewsText: 'Этой осенью многие ждали, что Египет подешевеет, но цена стала еще выше. Скорее всего, скоро Египет проиграет другим направлениям, ведь оно стало дороже даже Кубы.',
        thirdNewsPhotoAddress: './Photo/thirdNewsImage.jpg',
        thirdNewsAddress: 'https://s13.ru/archives/otdyh-6',
        third: 'third'
    },
    fourthNew: {
        fourthNewsHeaderText: 'Телефонные мошенники совсем обнаглели. Гродненцу угрожали убийством',
        fourthNewsText: 'В редакцию Onliner.by написал Николай из Гродно. Мужчина рассказал, что ему на Whatsapp от незнакомого номера пришло сообщение о том, что кто-то заказал его убийство за $2900.',
        fourthNewsPhotoAddress: './Photo/fourthNewsImage.jpg',
        fourthNewsAddress:'https://s13.ru/archives/moshenniki-117',
        fourth: 'fourth'
    },
    fifthNew: {
        fifthNewsHeaderText: 'Что будет с ценами в Беларуси до конца марта?',
        fifthNewsText: 'Многие белорусы в прошлом году ощутили на себе сильный рост цен на продовольствие. Дорожало практически все – от муки и до детского питания.',
        fifthNewsPhotoAddress: './Photo/fifthNewsImage.jpg',
        fifthNewsAddress: 'https://s13.ru/archives/ceny-84',
        fifth: 'fifth'
    },
    sixthNew: {
        sixthNewsHeaderText: 'На легендарном «пьяном углу» в Гродно построят ретроран или кафе',
        sixthNewsText: 'Городские власти все-таки выделили землю под строительство ресторана или кафе рядом с кольцом на улице Горновых в Гродно.',
        sixthNewsPhotoAddress: './Photo/sixthNewsImage.jpg',
        sixthNewsAddress: 'https://s13.ru/archives/aukcion-122',
        sixth: 'sixth'
    },
    counterVizitors: []
}

const oldNews = {
    firstOld: {
        firstOldNewsHeaderText: '«БЕЛТЕХОСМОТР»: Рассчитываем, что камеры начнут выявлять авто без техосмотра в полную силу в этом году',
        firstOldNewsText: 'Если камеры зафиксируют несколько таких нарушений в течение суток (с 00:00 до 23:59), собственник транспортного средства будет привлечен к административной ответственности только один раз.',
        firstOldNewsAddress: 'https://s13.ru/archives/tehosmotr-57',
        first: 'first'
    },
    secondOld: {
        secondOldNewsHeaderText: 'Что делать гуманитариям в IT? Два направления на выбор и два бесплатных митапа в Гродно для старта',
        secondOldNewsText: `Сегодня в IT стремится попасть большое количество людей, но многие из них не имеют профильного образования и не мечтали работать в этой сфере с детства.`,
        secondOldNewsAddress: 'https://s13.ru/archives/it-27',
        second: 'second'
    },
    thirdOld: {
        thirdOldNewsHeaderText: 'Прогноз по валютам: для доллара пригло время дорожать',
        thirdOldNewsText: 'Какие изменения наметились в курсах иностранных валют накануне февраля? Доллар на минувшей неделе начал расти, а у евро и российского рубля на валютном рынке были отмечены спады.',
        thirdOldNewsAddress: 'https://s13.ru/archives/dollar-124',
        third: 'third'
    },
    fourthOld: {
        fourthOldNewsHeaderText: '«Не видим причин, почему нас не должны пропустить в Германию». Мигранты уже 2,5 месяца сидят на белорусскопольской границе под Гродно',
        fourthOldNewsText: 'Места в кризисном центре освобождаются все реже. Те, кто мог вернуться на Родину, уже это сделали.',
        fourthOldNewsAddress: 'https://s13.ru/archives/migranty-112',
        fourth: 'fourth'
    },
    fifthOld: {
        fifthOldNewsHeaderText: 'Минздрав: около 50% случаев коронавируса приходится на омикрон',
        fifthOldNewsText: 'Штамм омикрон быстро распространяется в том числе и в Беларуси: в Минске среди всех циркулирующих штаммов COVID-19 он превышает половину.',
        fifthOldNewsAddress: 'https://s13.ru/archives/koronavirus-476',
        fifth: 'fifth'
    },
    counterVizitorsOldNews: []
}

let isInitialize = false;

// смена иконки отображения новостей в header
let view = document.querySelector('#view')
view.addEventListener('click', changeViewOfSite)
function changeViewOfSite(e) {
    (e.currentTarget.className === 'viewList') ? (e.currentTarget.className = 'viewIcons') : (e.currentTarget.className = 'viewList')
}

function addElement(newsHeaderText, newsText, NewsPhotoAddress, NewsAddress, className, counterVizitors, numberForInsert, newsSection) {

    if (newsSection === 'new') {
        // Создаём новый элемент div
        let newDiv = `<div class='newsBox'><div class='newsPhoto ${className}'>
            <a href=${NewsAddress}>
             <div class='counterVizitors'><p>${counterVizitors}</p></div>
             <img src =${NewsPhotoAddress} class='img ${className}'></a></div><a href=${NewsAddress}>
             <div class='newsHeader ${className}'>${newsHeaderText}</div>
            </a>
             <div class='newsText'>${newsText}</div>
        </div>`;
        // Добавляем только что созданный элемент в дерево DOM
        //если это первоначальная загрузка, то добавляем элемент в пустой div #emptyNewsBox
        //если это перерисовка отдельного элемента, то определяем между какими div.newsBox вставлем перерисованный элемент 
        if (isInitialize) {
            let header = document.querySelectorAll(".newsBox");
            (numberForInsert === 5) ? header[numberForInsert - 1].insertAdjacentHTML('afterend', newDiv) : header[numberForInsert].insertAdjacentHTML('beforebegin', newDiv)
        } else {
            let header = document.querySelector(".emptyNewsBox");
            header.insertAdjacentHTML('afterBegin', newDiv);
        }
    } else {
        // Создаём новый элемент div
        let newDiv = `<div class='oldNewsBox'>
            <div class='counterVizitors'><p>${counterVizitors}</p></div>
            <a href=${NewsAddress}>
                <div class='oldNewsBoxHeader ${className}'>${newsHeaderText}</div>
            </a>
                <div class='oldNewsBoxText'>${newsText}</div>
        </div>`;
        // Добавляем только что созданный элемент в дерево DOM
        //если это первоначальная загрузка, то добавляем элемент в пустой div #emptyOldNewsBox
        //если это перерисовка отдельного элемента, то определяем между какими div.newsBox вставлем перерисованный элемент 
        if (isInitialize) {
            let header = document.querySelectorAll(".oldNewsBox");
            (numberForInsert === 4) ? header[numberForInsert - 1].insertAdjacentHTML('afterend', newDiv) : header[numberForInsert].insertAdjacentHTML('beforebegin', newDiv)
        } else {
            let header = document.querySelector(".emptyOldNewsBox");
            header.insertAdjacentHTML('afterBegin', newDiv);
        }
    }

}
//добавляем элементы каждой отдельной новости на страницу
document.body.onload = addElement(newNews.sixthNew.sixthNewsHeaderText, newNews.sixthNew.sixthNewsText, newNews.sixthNew.sixthNewsPhotoAddress, newNews.sixthNew.sixthNewsAddress, newNews.sixthNew.sixth, newNews.counterVizitors[5] = 0, 0, 'new');
document.body.onload = addElement(newNews.fifthNew.fifthNewsHeaderText, newNews.fifthNew.fifthNewsText, newNews.fifthNew.fifthNewsPhotoAddress, newNews.fifthNew.fifthNewsAddress, newNews.fifthNew.fifth, newNews.counterVizitors[4] = 0, 0, 'new');
document.body.onload = addElement(newNews.fourthNew.fourthNewsHeaderText, newNews.fourthNew.fourthNewsText, newNews.fourthNew.fourthNewsPhotoAddress, newNews.fourthNew.NewsAddress, newNews.fourthNew.fourth, newNews.counterVizitors[3] = 0, 0, 'new');
document.body.onload = addElement(newNews.thirdNew.thirdNewsHeaderText, newNews.thirdNew.thirdNewsText, newNews.thirdNew.thirdNewsPhotoAddress, newNews.thirdNew.thirdNewsAddress, newNews.thirdNew.third, newNews.counterVizitors[2] = 0, 0, 'new');
document.body.onload = addElement(newNews.secondNew.secondNewsHeaderText, newNews.secondNew.secondNewsText, newNews.secondNew.secondNewsPhotoAddress, newNews.secondNew.secondNewsAddress, newNews.secondNew.second, newNews.counterVizitors[1] = 0, 0, 'new');
document.body.onload = addElement(newNews.firstNew.firstNewsHeaderText, newNews.firstNew.firstNewsText, newNews.firstNew.firstNewsPhotoAddress, newNews.firstNew.firstNewsAddress, newNews.firstNew.first, newNews.counterVizitors[0] = 0, 0, 'new');

document.body.onload = addElement(oldNews.fifthOld.fifthOldNewsHeaderText, oldNews.fifthOld.fifthOldNewsText, null, oldNews.fifthOld.fifthOldNewsAddress, oldNews.fifthOld.fifth, oldNews.counterVizitorsOldNews[4] = 0, 'old');
document.body.onload = addElement(oldNews.fourthOld.fourthOldNewsHeaderText, oldNews.fourthOld.fourthOldNewsText, null, oldNews.fourthOld.fourthOldNewsAddress, oldNews.fourthOld.fourth, oldNews.counterVizitorsOldNews[3] = 0, 'old');
document.body.onload = addElement(oldNews.thirdOld.thirdOldNewsHeaderText, oldNews.thirdOld.thirdOldNewsText, null, oldNews.thirdOld.thirdOldNewsAddress, oldNews.thirdOld.third, oldNews.counterVizitorsOldNews[2] = 0, 'old');
document.body.onload = addElement(oldNews.secondOld.secondOldNewsHeaderText, oldNews.secondOld.secondOldNewsText, null, oldNews.secondOld.secondOldNewsAddress, oldNews.secondOld.second, oldNews.counterVizitorsOldNews[1] = 0, 'old');
document.body.onload = addElement(oldNews.firstOld.firstOldNewsHeaderText, oldNews.firstOld.firstOldNewsText, null, oldNews.firstOld.firstOldNewsAddress, oldNews.firstOld.first, oldNews.counterVizitorsOldNews[0] = 0, 'old');
//инициализация страницы завершена
isInitialize = true;
let link = document.querySelectorAll('.newsBox')
// добавляем слушателя на каждый элемент массива link, в котором хранятся все отрисованные div.newsBox
for (let i = 0; i < link.length; i++) {
    link[i].addEventListener('click', changeCounterOfVizitors)
    newNews.counterVizitors[i] = 0;
}
let oldLink = document.querySelectorAll('.oldNewsBox')

// добавляем слушателя на каждый элемент массива OldLink, в котором хранятся все отрисованные div.oldNewsBox
for (let i = 0; i < oldLink.length; i++) {
    oldLink[i].addEventListener('click', changeCounterOfVizitors)
    oldNews.counterVizitorsOldNews[i] = 0;
}

function changeCounterOfVizitors(e) {
debugger
    // в зависимости от того, слушатель какого элемента срабатывает - вызываем функцию для конкретно этого элемента
   
    
    if (e.target.classList[0] === 'newsHeader' || e.target.classList[0] === 'img') {
        switch (e.target.classList[1]) {
            case 'first': {
                addRedrawnedNewDiv(0, newNews.firstNew.firstNewsHeaderText, newNews.firstNew.firstNewsText, newNews.firstNew.firstNewsPhotoAddress, newNews.firstNew.firstNewsAddress, newNews.firstNew.first, newNews.counterVizitors, 'new')
                break;
            }
            case 'second': {
                addRedrawnedNewDiv(1, newNews.secondNew.secondNewsHeaderText, newNews.secondNew.secondNewsText, newNews.secondNew.secondNewsPhotoAddress, newNews.secondNew.secondNewsAddress, newNews.secondNew.second, newNews.counterVizitors, 'new');
                break;
            }
            case 'third': {
                addRedrawnedNewDiv(2, newNews.thirdNew.thirdNewsHeaderText, newNews.thirdNew.thirdNewsText, newNews.thirdNew.thirdNewsPhotoAddress, newNews.thirdNew.thirdNewsAddress, newNews.thirdNew.third, newNews.counterVizitors, 'new');
                break;
            }
            case 'fourth': {
                addRedrawnedNewDiv(3, newNews.fourthNew.fourthNewsHeaderText, newNews.fourthNew.fourthNewsText, newNews.fourthNew.fourthNewsPhotoAddress, newNews.fourthNew.fourthNewsAddress, newNews.fourthNew.fourth, newNews.counterVizitors, 'new');
                break;
            }
            case 'fifth': {
                addRedrawnedNewDiv(4, newNews.fifthNew.fifthNewsHeaderText, newNews.fifthNew.fifthNewsText, newNews.fifthNew.fifthNewsPhotoAddress, newNews.fifthNew.fifthNewsAddress, newNews.fifthNew.fifth, newNews.counterVizitors, 'new');
                break;
            }
            case 'sixth': {
                addRedrawnedNewDiv(5, newNews.sixthNew.sixthNewsHeaderText, newNews.sixthNew.sixthNewsText, newNews.sixthNew.sixthNewsPhotoAddress, newNews.sixthNew.sixthNewsAddress, newNews.sixthNew.sixth, newNews.counterVizitors, 'new');
                break;
            }
        }
    } else {
        switch (e.target.classList[1]) {
            case 'first': {
                addRedrawnedNewDiv(0, oldNews.firstOld.firstOldNewsHeaderText, oldNews.firstOld.firstOldNewsText, null, oldNews.firstOld.firstOldNewsAddress, oldNews.firstOld.first, oldNews.counterVizitorsOldNews, 'old')
                break;
            }
            case 'second': {
                addRedrawnedNewDiv(1, oldNews.secondOld.secondOldNewsHeaderText, oldNews.secondOld.secondOldNewsText, null, oldNews.secondOld.secondOldNewsAddress, oldNews.secondOld.second, oldNews.counterVizitorsOldNews, 'old');
                break;
            }
            case 'third': {
                addRedrawnedNewDiv(2, oldNews.thirdOld.thirdOldNewsHeaderText, oldNews.thirdOld.thirdOldNewsText, null, oldNews.thirdOld.thirdOldNewsAddress, oldNews.thirdOld.third, oldNews.counterVizitorsOldNews, 'old');
                break;
            }
            case 'fourth': {
                addRedrawnedNewDiv(3, oldNews.fourthOld.fourthOldNewsHeaderText, oldNews.fourthOld.fourthOldNewsText, null, oldNews.fourthOld.fourthOldNewsAddress, oldNews.fourthOld.fourth, oldNews.counterVizitorsOldNews, 'old');
                break;
            }
            case 'fifth': {
                addRedrawnedNewDiv(4, oldNews.fifthOld.fifthOldNewsHeaderText, oldNews.fifthOld.fifthOldNewsText, null, oldNews.fifthOld.fifthOldNewsAddress, oldNews.fifthOld.fifth, oldNews.counterVizitorsOldNews, 'old');
                break;
            }

        }

    }

   

}

function addRedrawnedNewDiv(eleNumber, headerText, newstext, photoAddress, newsAddress, className, counter, newsSection) {
   
    if (newsSection === 'new') {
        // увеличиваем счётчик читателей конкретной новости
        newNews.counterVizitors[eleNumber]++;
        // удаляем элемент с нвоостью
        link[eleNumber].remove();
        // добавляем на страницу эту же новость с обновлённым счётчиком
        document.body.onload = addElement(headerText, newstext, photoAddress, newsAddress, className, counter[eleNumber], eleNumber, newsSection);
        link = document.querySelectorAll('.newsBox')
        //добавляем слушателя на новый div.newsBox
        link[eleNumber].addEventListener('click', changeCounterOfVizitors)
    } else {

        // увеличиваем счётчик читателей конкретной новости
        oldNews.counterVizitorsOldNews[eleNumber]++;
        // удаляем элемент с нвоостью
        oldLink[eleNumber].remove();
        // добавляем на страницу эту же новость с обновлённым счётчиком
        document.body.onload = addElement(headerText, newstext, photoAddress, newsAddress, className, counter[eleNumber], eleNumber, newsSection);
        oldLink = document.querySelectorAll('.oldNewsBox')
        //добавляем слушателя на новый div.newsBox
        oldLink[eleNumber].addEventListener('click', changeCounterOfVizitors)
    }
}
