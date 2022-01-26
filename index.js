let firstNewsHeaderText = 'Пока белорусам запрещают выезжать за границу по земле, в Польше не стало популярной торговой сети Tesco'
let firstNewsText = 'Магазины Netto это новое название на торговой карте Белостока, Сокулки и других городов приграничной Польши'
let firstNewsPhotoAddress = './Photo/firstNewsImage.jpg'
let firstNewsAddress = 'https://s13.ru/archives/tesco-1'
let secondNewsHeaderText = 'Посмотрите, какие квартиры в Гродно продаются в домах ХIX века (есть и очень дешевая)'
let secondNewsText = `В Беларуси редко, но все же продается жилье, построенное до 1900 года. Таких объявлений не много, и большую часть квартир «почтенного возраста» можно найти в гродненском историческом центре`
let secondNewsPhotoAddress = './Photo/secondNewsImage.jpg'
let secondNewsAddress = 'https://s13.ru/archives/kvartriry-2'
let thirdNewsHeaderText = 'Египет напугал новыми правилами въезда, но все оказалось не так страшно: Куда белорусы летят зимой и сколько за это платят'
let thirdNewsText = 'Этой осенью многие ждали, что Египет подешевеет, но цена стала еще выше. Скорее всего, скоро Египет проиграет другим направлениям, ведь оно стало дороже даже Кубы.'
let thirdNewsPhotoAddress = './Photo/thirdNewsImage.jpg'
let thirdNewsAddress = 'https://s13.ru/archives/otdyh-6'
let fourthNewsHeaderText = 'Телефонные мошенники совсем обнаглели. Гродненцу угрожали убийством'
let fourthNewsText = 'В редакцию Onliner.by написал Николай из Гродно. Мужчина рассказал, что ему на Whatsapp от незнакомого номера пришло сообщение о том, что кто-то заказал его убийство за $2900.'
let fourthNewsPhotoAddress = './Photo/fourthNewsImage.jpg'
let fourthNewsAddress = 'https://s13.ru/archives/moshenniki-117'
let fifthNewsHeaderText = 'Что будет с ценами в Беларуси до конца марта?'
let fifthNewsText = 'Многие белорусы в прошлом году ощутили на себе сильный рост цен на продовольствие. Дорожало практически все – от муки и до детского питания.'
let fifthNewsPhotoAddress = './Photo/fifthNewsImage.jpg'
let fifthNewsAddress = 'https://s13.ru/archives/ceny-84'
let sixthNewsHeaderText = 'На легендарном «пьяном углу» в Гродно построят ретроран или кафе'
let sixthNewsText = 'Городские власти все-таки выделили землю под строительство ресторана или кафе рядом с кольцом на улице Горновых в Гродно.'
let sixthNewsPhotoAddress = './Photo/sixthNewsImage.jpg'
let sixthNewsAddress = 'https://s13.ru/archives/aukcion-122'
let first = 'first'
let second = 'second'
let third = 'third'
let fourth = 'fourth'
let fifth = 'fifth'
let sixth = 'sixth'
let counterVizitors = [];
let isInitialize = false;
let firstOldNewsHeaderText = '«БЕЛТЕХОСМОТР»: Рассчитываем, что камеры начнут выявлять авто без техосмотра в полную силу в этом году'
let firstOldNewsText = 'Если камеры зафиксируют несколько таких нарушений в течение суток (с 00:00 до 23:59), собственник транспортного средства будет привлечен к административной ответственности только один раз.'
let firstOldNewsAddress = 'https://s13.ru/archives/tehosmotr-57'
let secondOldNewsHeaderText = 'Что делать гуманитариям в IT? Два направления на выбор и два бесплатных митапа в Гродно для старта'
let secondOldNewsText = `Сегодня в IT стремится попасть большое количество людей, но многие из них не имеют профильного образования и не мечтали работать в этой сфере с детства.`
let secondOldNewsAddress = 'https://s13.ru/archives/it-27'
let thirdOldNewsHeaderText = 'Прогноз по валютам: для доллара пригло время дорожать'
let thirdOldNewsText = 'Какие изменения наметились в курсах иностранных валют накануне февраля? Доллар на минувшей неделе начал расти, а у евро и российского рубля на валютном рынке были отмечены спады.'
let thirdOldNewsAddress = 'https://s13.ru/archives/dollar-124'
let fourthOldNewsHeaderText = '«Не видим причин, почему нас не должны пропустить в Германию». Мигранты уже 2,5 месяца сидят на белорусскопольской границе под Гродно'
let fourthOldNewsText = 'Места в кризисном центре освобождаются все реже. Те, кто мог вернуться на Родину, уже это сделали.'
let fourthOldNewsAddress = 'https://s13.ru/archives/migranty-112'
let fifthOldNewsHeaderText = 'Минздрав: около 50% случаев коронавируса приходится на омикрон'
let fifthOldNewsText = 'Штамм омикрон быстро распространяется в том числе и в Беларуси: в Минске среди всех циркулирующих штаммов COVID-19 он превышает половину.'
let fifthOldNewsAddress = 'https://s13.ru/archives/koronavirus-476'
let counterVizitorsOldNews = [];

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
document.body.onload = addElement(sixthNewsHeaderText, sixthNewsText, sixthNewsPhotoAddress, sixthNewsAddress, sixth, counterVizitors[5] = 0, 0, 'new');
document.body.onload = addElement(fifthNewsHeaderText, fifthNewsText, fifthNewsPhotoAddress, fifthNewsAddress, fifth, counterVizitors[4] = 0, 0, 'new');
document.body.onload = addElement(fourthNewsHeaderText, fourthNewsText, fourthNewsPhotoAddress, fourthNewsAddress, fourth, counterVizitors[3] = 0, 0, 'new');
document.body.onload = addElement(thirdNewsHeaderText, thirdNewsText, thirdNewsPhotoAddress, thirdNewsAddress, third, counterVizitors[2] = 0, 0, 'new');
document.body.onload = addElement(secondNewsHeaderText, secondNewsText, secondNewsPhotoAddress, secondNewsAddress, second, counterVizitors[1] = 0, 0, 'new');
document.body.onload = addElement(firstNewsHeaderText, firstNewsText, firstNewsPhotoAddress, firstNewsAddress, first, counterVizitors[0] = 0, 0, 'new');

document.body.onload = addElement(fifthOldNewsHeaderText, fifthOldNewsText, null, fifthOldNewsAddress, fifth, counterVizitorsOldNews[4] = 0, 'old');
document.body.onload = addElement(fourthOldNewsHeaderText, fourthOldNewsText, null, fourthOldNewsAddress, fourth, counterVizitorsOldNews[3] = 0, 'old');
document.body.onload = addElement(thirdOldNewsHeaderText, thirdOldNewsText, null, thirdOldNewsAddress, third, counterVizitorsOldNews[2] = 0, 'old');
document.body.onload = addElement(secondOldNewsHeaderText, secondOldNewsText, null, secondOldNewsAddress, second, counterVizitorsOldNews[1] = 0, 'old');
document.body.onload = addElement(firstOldNewsHeaderText, firstOldNewsText, null, firstOldNewsAddress, first, counterVizitorsOldNews[0] = 0, 'old');
//инициализация страницы завершена
isInitialize = true;
let link = document.querySelectorAll('.newsBox')
// добавляем слушателя на каждый элемент массива link, в котором хранятся все отрисованные div.newsBox
for (let i = 0; i < link.length; i++) {
    link[i].addEventListener('click', changeCounterOfVizitors)
    counterVizitors[i] = 0;
}
let oldLink = document.querySelectorAll('.oldNewsBox')

// добавляем слушателя на каждый элемент массива OldLink, в котором хранятся все отрисованные div.oldNewsBox
for (let i = 0; i < oldLink.length; i++) {
    oldLink[i].addEventListener('click', changeCounterOfVizitors)
    counterVizitorsOldNews[i] = 0;
}

function changeCounterOfVizitors(e) {
debugger
    // в зависимости от того, слушатель какого элемента срабатывает - вызываем функцию для конкретно этого элемента
   
    
    if (e.target.classList[0] === 'newsHeader' || e.target.classList[0] === 'img') {
        switch (e.target.classList[1]) {
            case 'first': {
                addRedrawnedNewDiv(0, firstNewsHeaderText, firstNewsText, firstNewsPhotoAddress, firstNewsAddress, first, counterVizitors, 'new')
                break;
            }
            case 'second': {
                addRedrawnedNewDiv(1, secondNewsHeaderText, secondNewsText, secondNewsPhotoAddress, secondNewsAddress, second, counterVizitors, 'new');
                break;
            }
            case 'third': {
                addRedrawnedNewDiv(2, thirdNewsHeaderText, thirdNewsText, thirdNewsPhotoAddress, thirdNewsAddress, third, counterVizitors, 'new');
                break;
            }
            case 'fourth': {
                addRedrawnedNewDiv(3, fourthNewsHeaderText, fourthNewsText, fourthNewsPhotoAddress, fourthNewsAddress, fourth, counterVizitors, 'new');
                break;
            }
            case 'fifth': {
                addRedrawnedNewDiv(4, fifthNewsHeaderText, fifthNewsText, fifthNewsPhotoAddress, fifthNewsAddress, fifth, counterVizitors, 'new');
                break;
            }
            case 'sixth': {
                addRedrawnedNewDiv(5, sixthNewsHeaderText, sixthNewsText, sixthNewsPhotoAddress, sixthNewsAddress, sixth, counterVizitors, 'new');
                break;
            }
        }
    } else {
        switch (e.target.classList[1]) {
            case 'first': {
                addRedrawnedNewDiv(0, firstOldNewsHeaderText, firstOldNewsText, null, firstOldNewsAddress, first, counterVizitorsOldNews, 'old')
                break;
            }
            case 'second': {
                addRedrawnedNewDiv(1, secondOldNewsHeaderText, secondOldNewsText, null, secondOldNewsAddress, second, counterVizitorsOldNews, 'old');
                break;
            }
            case 'third': {
                addRedrawnedNewDiv(2, thirdOldNewsHeaderText, thirdOldNewsText, null, thirdOldNewsAddress, third, counterVizitorsOldNews, 'old');
                break;
            }
            case 'fourth': {
                addRedrawnedNewDiv(3, fourthOldNewsHeaderText, fourthOldNewsText, null, fourthOldNewsAddress, fourth, counterVizitorsOldNews, 'old');
                break;
            }
            case 'fifth': {
                addRedrawnedNewDiv(4, fifthOldNewsHeaderText, fifthOldNewsText, null, fifthOldNewsAddress, fifth, counterVizitorsOldNews, 'old');
                break;
            }

        }

    }

   

}

function addRedrawnedNewDiv(eleNumber, headerText, newstext, photoAddress, newsAddress, className, counter, newsSection) {
   
    if (newsSection === 'new') {
        // увеличиваем счётчик читателей конкретной новости
        counterVizitors[eleNumber]++;
        // удаляем элемент с нвоостью
        link[eleNumber].remove();
        // добавляем на страницу эту же новость с обновлённым счётчиком
        document.body.onload = addElement(headerText, newstext, photoAddress, newsAddress, className, counter[eleNumber], eleNumber, newsSection);
        link = document.querySelectorAll('.newsBox')
        //добавляем слушателя на новый div.newsBox
        link[eleNumber].addEventListener('click', changeCounterOfVizitors)
    } else {

        // увеличиваем счётчик читателей конкретной новости
        counterVizitorsOldNews[eleNumber]++;
        // удаляем элемент с нвоостью
        oldLink[eleNumber].remove();
        // добавляем на страницу эту же новость с обновлённым счётчиком
        document.body.onload = addElement(headerText, newstext, photoAddress, newsAddress, className, counter[eleNumber], eleNumber, newsSection);
        oldLink = document.querySelectorAll('.oldNewsBox')
        //добавляем слушателя на новый div.newsBox
        oldLink[eleNumber].addEventListener('click', changeCounterOfVizitors)
    }
}
