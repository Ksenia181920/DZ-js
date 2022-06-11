////1
let user = prompt('Ваше имя?');
let age = prompt('Сколько вам лет?', 100);
let city = prompt('Город проживания?');
let company = prompt('Где вы работаете?');
let phone = prompt('Ваш телефон?');
let email = prompt('Укажите адрес электронной почты?');

alert(`Меня зовут  ${user}.` + ' ' + 'Мне ' + age + ' лет.' + ' ' + `Я проживаю в городе ${city} .` + ' ' + `Я работаю в компании ${company} `+ ' ' + `Мои контактные данные ${phone}` + ' '+ `Email ${email}` );

//2 

let year=(2022 - age);

console.log(year);
console.log(user + 'родился в ' + year + 'году' );

//3

let str = "123123";
// let str = "123456";

    if ((Number(str[0]) + Number(str[1]) + Number(str[2])) == (Number(str[3]) + Number(str[4]) + Number(str[5]))){
        console.log("Да");
    } else {
        console.log("Нет");
    }


//4

let e = -3;

    if (e > 0){
        console.log("Верно");
    } else {
        console.log("Неверно");
    }


//5
let a = 10;
let b = 2;


alert(a + b);
alert(a - b);
alert(a * b);
alert(a / b);

    if (a+b > 1){
        console.log((a + b) * (a + b));
    } else {
        console.log("Неверно");
    }



//6

    if ((a > 2 && a < 11) || (b >= 6 && b <= 14)){
        console.log('Верно');
    } else {
        console.log('Неверно');
    }

//7

let minut = 12;

    if (minut >= 1 && minut <= 15)
    console.log('Первая четверть часа');
    if (minut >= 16 && minut <= 30)
    console.log('Вторая четверть часа');
    if (minut >= 31 && minut <= 45)
    console.log('Тертья четверть часа');
    if (minut >= 45 && minut <= 60)
    console.log('Четвертая четверть часа');


//8

let day = 28;

    if (day >= 1 && day <= 10)
    console.log('Первая декада месяца');
    if (day >= 11 && day <= 20)
    console.log('вторая декада месяца');
    if (day >= 21 && day <= 31)
    console.log('Третья декада месяца');

//9
let f= 35;

let years= f / 365 ;

    if (years > 1){
        console.log(years);
    } else {
        console.log('Меньше года');
    }


let mon= (f * 12) / 365;

    if (mon > 1){
        console.log('Месяцев-' + mon);
    } else {
        console.log('Меньше месяца');
    }

let week= f / 7;

    if (week > 1){
        console.log(week);
    } else {
        console.log('Меньше недели');
    }

let clock = f * 24;
console.log('часов-' + clock);

let min = f * 1440;
console.log('минут-' + min);

let seconds = f * 86400;
console.log('секунд-' + seconds);



//10 

let d = 256;

    if (d >= 1 && d <= 30)
    console.log(1);
    if (d >= 31 && d <= 62)
    console.log(2);
    if (d >= 63 && d <= 93)
    console.log(3);
    if (d >= 94 && d <= 122)
    console.log(4);
    if (d >= 123 && d <= 154)
    console.log(5)
    if (d >= 155 && d <= 185)
    console.log(6)
    if (d >= 186 && d <= 217)
    console.log(7)
    if (d >= 218 && d <= 249)
    console.log(8)
    if (d >= 250 && d <= 281)
    console.log(9)
    if (d >= 282 && d <= 312)
    console.log(10)
    if (d >= 313 && d <= 334)
    console.log(11)
    if (d >= 334 && d <= 365)
    console.log(12)

let m= 11;

switch (m) {
    case 1:
        console.log('Январь')
    break;
    case 2:
        console.log('Февраль')
    break;
    case 3:
        console.log('Март')
    break;
    case 4:
        console.log('Апрель')
    break;
    case 5:
        console.log('Май')
    break;
    case 6:
        console.log('Июнь')
    break;
    case 7:
        console.log('Июль')
    break;
    case 8:
        console.log('Август')
    break;
    case 9:
        console.log('Сентябрь')
    break;
    case 10:
        console.log('Октябрь')
    break;
    case 11:
        console.log('Ноябрь')
    break;
    case 12:
        console.log('Декабрь')
    break;
    default :
    console.log('я такого значения не знаю');
}

    if (m == 12 || m<= 2) {
    console.log('Зима') ;
    }
    if (m >= 3 && m <= 5) {
    console.log('Весна');
    }
    if (m >= 6 && m <= 8) {
        console.log('Лето');
    }
    if (m >= 9 && m <= 11) {
        console.log('Весна');
    }


