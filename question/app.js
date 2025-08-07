/* 基礎編 Q1 */

let nickname = "佐藤貴裕"
let age = 28
console.log("私のニックネームは" + nickname + "です。年齢は"+ age + "歳です。")

/* 基礎編 Q2 */

let languages = ["JavaScript", "PHP", "Ruby", "Python", "Go"]
let languagesText = `私の好きな言語は${languages[0]}です。次は${languages[3]}を勉強してみたいです。`;
console.log(languagesText);

/* 基礎編 Q3 */

let user = {
  name: "John",
  age: 26,
  bloodtype: "A",
  favorite: "card",
};

console.log(user.age)

/* 基礎編 Q4 */

let playerList = [
  {
    name: 'John',
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites: ['Football', 'Smash Bros.'],
  },
];

console.log(playerList[1].favorites[1]);

/* 基礎編 Q5 */

let ageAvr = Math.round(playerList[0].age + playerList[1].age + playerList[2].age / 3);
console.log(ageAvr);

/* 基礎編 Q6 */

function sayHello() {
  console.log("Hello");
}

sayHello();

let sayWorld = function() {
 console.log("World");
}

sayWorld();

/* 基礎編 Q7 */

user.birthday = "2000-09-27";
user.sayHello = function() {
  console.log("Hello！")
}

user.sayHello();

/* 基礎編 Q8 */

let calc ={};

calc = {
add:function() {
 console.log(2 + 5);},

subtract:function() {
  console.log(15 - 5);},

multiply:function() {
  console.log(7 * 7);},

divide:function() {
  console.log(10 / 2);},
};

calc.add();
calc.subtract();
calc.multiply();
calc.divide();


/* 基礎編 Q9 */

function remainder(x, y) {
 let remainder = x % y;
 return remainder;
}

console.log( 5 + " を " + 3 + " で割った余りは " + remainder(5,3) + " です。");


/* 基礎編 Q10 

xは関数内でだけスコープが有効な変数のため関数の外から参照できない　*/


/* -------------------------------------------------------------------------------------- */



/* 応用問題 Q1 */

let random = Math.random()*10;
let floor = Math.floor(random);
console.log(floor);

/* 応用問題 Q2-1 */

setTimeout(() => {
  console.log("Hello World!");
}, 3000);

/* 応用問題 Q2-2 */

function printName(firstName, formatter) {
  console.log(formatter(firstName));
}

const addIntro = (name) => '私の名前は' + name + 'です。';

printName("佐藤",addIntro);


/* 応用問題 Q3 */

let num = 2;

if (num > 0) {
  console.log("num is greater than 0");
} else if (num === 0) {
  console.log("num is 0");
} else {
  console.log("num is less than 0");
}

/* 応用問題 Q4 */

let numbers = [];
numbers = new Array(100);

for (let i = 0; i < numbers.length; i++) {
numbers[i] = i;
}

for (let i = 0; i < numbers.length; i++) {
console.log(numbers[i]);
}


/* 応用問題 Q5 */

let mixed = [4, '2', 5, '8', '9', 0, 1];

for (let i = 0; i < 7; i++) {
if(typeof mixed[i] === "string") {
  console.log("not number");
} else if(mixed[i] % 2 == 0) {
 console.log("even");
} else { console.log("odd");
}
}