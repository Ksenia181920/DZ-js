//1 Сделайте функцию, которая отнимает от первого числа второе и делит на третье. Числа передаются параметром.

let f = function (a, b, c) {
    return (a- b) / c;
};
console.log (f(5, 3, 4));

//2 Сделайте функцию, которая возвращает куб числа и его квадрат. Число передается параметром.
let cub = function(num) {
    return num * num * num;
};
console.log(cub(5));

let kv = function(num2) {
    return num2 * num2;
}
console.log(kv(5));
//3 Напишите функции min и max, которые возвращают меньшее и большее из чисел a и b.

function min(a, b) {
    if (a < b) {
      return a;
    } else {
      return b;
    }
}

console.log(min(2,5));

function max(a,b) {
    if (a >b) {
        return a;
    }else {
        return b;
    }
};
console.log(max(2,5));


//Напишите ф-цию, которая возвращает массив заполненный числами Фибоначи от 0 до 1000


//6 Напишите ф-цию, в которую передается массив с целыми числами. Верните новый массив, где останутся лежать только четные из этих чисел. Для этого используйте вспомогательную функцию isEven из предыдущей  задачи.

const getEven = array => {
    return array.filter(number => !(number % 2));
};
console.log(getEven([2, 5, 0, -7, 13, 8, 12, -6]));


//7 Напишите ф-цию, которая рисует следующую пирамидку (исп. вложенные циклы):rол-во рядов должно вводиться параметром. Если пользователь ввел доп. параметр, непредусмотренный ф-цией по умолчанию - один любой символ, кроме пробела, то пирамида должна быть нарисована этим символом, например: 

let s = prompt('символ');
function h(n){
  for(let i = 1; i <= n; i++){
    let m = '';
    for(let j = 0; j < i; j++) {
      m+= s == undefined || s.length-1 || s == ' ' ? i : s;
    };
    console.log(m+'\n')
  }
};

h(prompt('число'))

//8 Напишите ф-цию, которая рисует равнобедренный треугольник из звездочек:Кол-во рядов должно вводиться с клавиатуры. Доп., напишите такую же фуцию, но которая выведет перевернутый треугольник. 


function Tr(rows, isReverse) {
    const indexes = new Array(rows).fill(0).map((_, i) => i);

    if (isReverse) indexes.reverse();

    for (let i of indexes) {
        const spaces = ' '.repeat(rows - 1 - i);

        console.log(spaces + '*'.repeat(1 + i*2) + spaces);
    }
}
 
const n = +prompt('Введите число строк:');
Tr(n);

if (confirm('Вывести перевёрнутый?')) Tr(n, true);

//10/ Дано число. Сложите его цифры. Если сумма получилась более 9-ти, опять сложите его цифры. И так, пока сумма не станет однозначным числом (9 и менее). Исп. Рекурсию.

let num = 472;
function isSumLess(num) {
    if (num === 0) return 0;
    return (num - 1) % 9 + 1;
}

console.log('Конечное число = ', isSumLess(num));


//11  Дан массив с числами (передается параметром). Выведите последовательно его элементы, используя рекурсию и не используя цикл.

let arr = [10, 5, 20, 15, 9, 3, 6];
 
// в цикле.
// for(let i=0; i<arr.length; i++){
//     console.log(arr[i]);
// }


function func(i){
    console.log(arr[i++]);
    if(i < arr.length){
        func(i);
    }
}
func(0);

//12апишите ф-цию, запрашивающую имя, фамилия, отчество и номер группы студента и выводящую введённые данные в следующем виде:
// ***************************** 
// * Домашняя работа: «Функции» * 
// * Выполнил: студент гр. W4017 * 
// * Иванов Иван Иванович * 
// ***************************** 
// Размер рамки должен определятся автоматически по самой длинной строке. 
// Рамку вывести в консоль. 

function Pole(length){
    let ramka = "";
    for (let i=0; i<length; i++){
        ramka += "*";
    }
    console.log(ramka);
}

let str = [];
str.push("Домашняя работа \"Функции\"");

let grN = prompt("Введите номер группы");
str.push("Выполнил студент гр." + grN);

let lastName = prompt("Введите фамилию");
let name = prompt("Введите имя");
let firstName = prompt("Введите отчество");
let fio = lastName + ' ' + name + ' ' + firstName;
str.push(fio);

let dlina = 0;
for (let i=0; i<str.length;i++){
    if (dlina < str[i].length){
        dlina = str[i].length;
    }
}

dlina += 2;

Pole(dlina);
for (var i=0; i<str.length; i++){
    let resultString = "*";
    for (let j=0; j<dlina;j++){
        if (str[i][j] === undefined){
            if (j === dlina-2){
                resultString += '*';
            }
            else{
                resultString += ' ';
            }
        }
        else{
            resultString += str[i][j];
        }
    }
    console.log(resultString);
}
Pole(dlina);
