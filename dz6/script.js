//1Дана строка 'aaa@bbb@ccc'. Замените все @ на ! с помощью глобального поиска и замены.

let str = 'aaa@bbb@ccc';
alert(str.replace(/@/g, '!'));
//2
let str2 = '2025-12-31';
let result = str2.split('-').reverse().join('/');
 console.log(result);

 