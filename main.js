// console.log("Hello world!");
// let color ='green';
// console.log(color);
// const birthyear = 2001;
// console.log(birthyear);

//fisrt comment in js!

let language = "JavaSciprt";
let message = "Welcome To ";
// console.log(language.length);
// console.log(message + language);
//  console.log(language[1]);
// let colors = ["red","green","blue"];
// console.log(colors);
// console.log(colors[1]);
// colors[2] = "third color";
// console.log(colors.length);
// console.log(colors.includes("green"));
// colors.unshift("third color");       //تشيل العنصر من مكانه وتحطه بالبداية
// colors.shift();                   //تشيل اول عنصر
// console.log(colors);

// colors.push("hhh")    //يضيف بآحر القائمة
// console.log(colors);
// colors.pop()             //يحذف بآخر القائمة
// console.log(colors);

// console.log(Array.isArray(colors));
//array.split method
//array.join method

//-----------

// let age = 20;

// if (age < 12){
//     console.log("you are young!");
// }
// else if (age >= 60) {
// console.log("You are too old!");
// }
// else {
// console.log("Welcome to the game");
// }

// switch (age) {
//     case 0:
//     case age < 12:
//         console.log("you are young!");
//         break;
//     case age >= 60:
//         console.log("You are too old!")
//         break;
//     default:
//         console.log("Welcome to the game");
// }

// for (let i = 1; i<= 5; i++) {
//     console.log(i); 
// }
const colors = ["red","green","blue"];
for (let color of colors) {
    console.log(color);
}
const messages = "Welcoem to javaScript";
for (let charecter of messages) {
    console.log(charecter);
    if(messages > 10)
    break;
}
let i = 0;
while (i < colors.length) {
    console.log(colors[i]);
    i++;
    if(i == 4)
    continue;
}
let j =0;
do {
    console.log(colors[j]);
    j++;
}
while(j < colors.length);
//------------------------------------
function greeting(name) {
  return `Hello, ${name}!!`
}
function printYourName(name) {
    return "Your name is " + name
}
let functionOutput = printYourName("Reem")
console.log(functionOutput)