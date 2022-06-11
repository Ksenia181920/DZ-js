//1
let a = 1;
while (a <= 50) {
	document.write(a);
	a++;
}

let b = 35;
while(b >= 8){
document.write(b);
b--;
}
//2
let c = 89;
while(c >= 11){
document.write(c + '<br>');
c--;
}

//3

let sum = 0;
for(let d = 1; d <= 100; d++){
sum += d;
}
alert(sum);

//4
let str = "12345";
let  i= Number(str[0]);
alert(i);
let e = (Number(str[0]) + Number(str[1]));
alert(e);
let k = (Number(str[0]) + Number(str[1]) + Number(str[2]));
alert(k);
let l = (Number(str[0]) + Number(str[1]) + Number(str[2])+ Number(str[3]));
alert(l);
let m = (Number(str[0]) + Number(str[1]) + Number(str[2])+ Number(str[3])+ Number(str[4]));
alert(m);
let n = (Number(str[0]) + Number(str[1]) + Number(str[2])+ Number(str[3])+ Number(str[4]) + Number(str[5]));
alert(n);

//4
let sum2 = 0;

for(let i = 1; i <= 5; i++){
    sum = 0;
    for(let j = 1; j <= i; j++){
        sum += j;
    }
    console.log(`Сумма  ${i} = ${sum2}`);
}


//5

let x = 8;
while(x <= 56){
document.write(x + '<br>');
x += 2;
}
for(let y = 8; y <= 56; y +=2){
	document.write(y + '<br>');
	}

//6
let multipl = 0;
for(let i = 2; i <= 3; i++){
    multipl = 0;
    for(let j = 1; j <= 10; j++){
        multipl = i * j;
        console.log(`${i} * ${j} = ${multipl}`);
    }
}

//7
for (let v = 1000, num = 0; v >= 50; v /= 2, num++)


console.log(v);
console.log(num);

//8

