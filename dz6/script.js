//1Дана строка 'aaa@bbb@ccc'. Замените все @ на ! с помощью глобального поиска и замены.

let str = 'aaa@bbb@ccc';
alert(str.replace(/@/g, '!'));

//2
let str2 = '2025-12-31';
let result = str2.split('-').reverse().join('/');
 console.log(result);

 //3
 var str3 = 'Я учу javascript!';
alert(str3.substr(2, 3)); //substr(откуда отрезать, сколько отрезать)
alert(str3.substring(2, 5)); //substring(откуда отрезать, докуда отрезать)
alert(str3.slice(2, 5)); //slice(откуда отрезать, докуда отрезать)

alert(str3.substr(6, 10)); 
alert(str3.substring(6, 16)); 
alert(str3.slice(6, 16)); 
//4

let arr = ['4', '2', '5', '19', '13', '0', '10'], sum = 0, i, result2;
for (i = 0; i < arr.length; i++) {
result = Math.sqrt(sum += Math.pow(arr[i], 3));
}
console.log(result2);

//5
let a = 3;
let b = 5;
let c = Math.abs(a - b);
alert(c);

let a2 = 6;
let b2 = 1;
let c2 = Math.abs(a - b);
alert(c);

//6

function add (num) {
	if (num >= 0 && num <= 9) {
		return '0' + num;
	} else {
		return num;
	}
}
let date = new Date();
console.log(add (date.getFullYear()) + '.' + add(date.getMonth() + 1) + '.' + add(date.getDate()));

//7
let str6 = 'aa aba abba abbba abca abea';
console.log(str.replace(/ab*a/g, '!'));


//8
number = +375293456789;   // return true


regexp = ;

console.log(regexp.test(number));
number2 = 80293456789;

//

