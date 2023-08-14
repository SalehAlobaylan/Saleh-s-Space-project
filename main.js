// console.log("Hello world!");
// let color ='green';
// console.log(color);
// const birthyear = 2001;
// console.log(birthyear);

//fisrt comment in js!

//// let language = "JavaSciprt";
//// let message = "Welcome To ";
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
// const colors = ["red","green","blue"];
// for (let color of colors) {
//     console.log(color);
// }
// const messages = "Welcoem to javaScript";
// for (let charecter of messages) {
//     console.log(charecter);
//     if(messages > 10)
//     break;
// }
// let i = 0;
// while (i < colors.length) {
//     console.log(colors[i]);
//     i++;
//     if(i == 4)
//     continue;
// }
// let j =0;
// do {
//     console.log(colors[j]);
//     j++;
// }
// while(j < colors.length);
// //------------------------------------
// function greeting(name) {
//   return `Hello, ${name}!!`
// }
// function printYourName(name) {
//     return "Your name is " + name
// }
// let functionOutput = printYourName("Reem")
// console.log(functionOutput)



// here End the first course of JS and starts the second course of JS


// const d = new Date(2020,9,17)
// console.log(d.getDate())
// console.log(d.getDay())
// console.log(d.getMonth())
// console.log(d.getFullYear())
// ----------------
// const num = Math.ceil(-9.12)
// const num = Math.floor(-9.12)
// const num = Math.round(-9.49 + 0.02)
// const num = Math.abs(-9.12)
// // console.log(num)
// const number = [4,2,-9,9,7]
// const num = Math.min(...numbers) //الثلاث نقاط هنا تحلينا نفكك المصفوفة وناخذ كل عنصر لحال
// // const num = Math.max(...numbers)
// console.log(numbers)
// ---------------------------------
// const str = "1.45"
// const floatnum = parseFloat(str)
// console.log(floatnum + 0.5)
// const intnum = parseInt(str)
// console.log(intnum + 1)
// const number = Math.trunc(4.16) // تشيل الي بعد الفاصلة
// console.log(number) 

// const str.isIntger()
// ---------------------

// const num = Math.pow(2,3)
// const num = 2 ** 3
// console.log(num)

// const sqr = MAth.sqrt(num)

// console.log(Math.sign(num)) //ترجع اشارة الرقم
// const result = 
// console.log
// 
// 
// ==============================================

// const colors = ['red' , 'green ', 'blue']
// colors.forEach(function(currentValue, index, array){        //بتمر عليها كلها
// console.log(index, currentValue,array)
// })
// --------------------------
// const ages = [11,13,26,15,12]
// hasAdult = ages.some(function(element/*, index, array*/){  //لازم وحدة صحيحة
//     return element >= 18
// })
// console.log(hasAdult);
// ---------------------------------
// const ages  = [21 ,23, 27,25,22]
// const areAdults = ages.every(function(element/* ,index ,array */){   // لازم تكون كلها صحيحة
//     return element >= 18 
// })
// -----------------------------------
// console.log(areAdults);
const colors = ['red' , 'green','blue','green']

// const isContainRed = colors.includes('red', 1) // الواحد هو يبدأ البحث من بعد العنصر 1
// console.log(isContainRed)

// const index = colors.indexOf('green')
// console.log(index)
// const Index = colors.indexOf('green',2)
// console.log(Index)

// const ind = colors.lastIndexOf('green',2)
// console.log(ind)

const ages = [12,14,19,21]

// const index =ages.findIndex(function(element/* ,index,array */){
//     return element >= 18
// })
// console.log(index)

// const el = ages.find(function(element, /* index ,array */){
//     return element % 3 === 0
// })
// console.log(el);

const numbers = [2,3,7,4,9]


// const evenNumbers = numbers.filter(function(currentValue/*  , index,array */){ //دالة تجيب لك الاعداد الزوجية
//     return currentValue % 2 === 0
// }) 
// console.log(evenNumbers)

const primaryColors = ['red','yellow','blue']
const secondaryColors = ['green','orange','violet']

// const Colors = primaryColors.concat(secondaryColors)// تدمج مصفوفتين في مصفوفة جديدة
// const moreColors = primaryColors.concat(secondaryColors,'black','white')//نقدر نضيف عناصر اثناء الدمج
// console.log(Colors)

// const rgbcolors = colors.slice(1,4)
// console.log(rgbcolors)

// colors.splice(3)
// colors.splice(3,2) //لها تعديلات واجد يمديك تضيف مدخل زيادة كل شوي فوقتها يمديك تخليه يبدأ بد العنصر الثاني بمرتين ويمديك تبدل العناصر
// console.log(colors)


// const StrColors = colors.join('-') //تدمج المصفوفة
// console.log(StrColors)
   
// colors.sort()

// colors.reverse()

//  const num = [3,7,9]
//  const suqaredNumbers = num.map(function(currentValue,index,array){//دالة ماب تسوي لي مصفوفة جديدة
//     return currentValue * currentValue //أبي أربع المصفوفة كلها
//  })
//  console.log(suqaredNumbers)

//  const strColors = 'red green blue black'
//  const arrColors = strColors.split(' ')
//  console.log(arrColors)

//  const total = numbers.reduce(function(accumulator,currentValue,index,array){
    // console.log(`index: ${index}`);
    // console.log(`currest value: ${currentValue}`)

    // console.log(`accumultaor: ${accumulator}`);
    // return accumulator + 1

    
//     console.log(`accumultaor: ${accumulator}`);
//     return accumulator + currentValue
// }, 100)
// console.log(total)

//==================================================

// const car = {
//     // key: value
//     name: 'camry',
//     color: 'white',
//     currentSpeed: 0,
//     move: function(speed) {//objectsName.key
//         // car.currentSpeed = speed //first way
//         // console.log(this/*car*/)   //second way
//         this.currentSpeed = speed  //third way
//         return `The ${this.name} is moving at speed of ${this.currentSpeed}km per hour`
//     },
//     stop: function() {console.log('Stop method')}
// }
// Object.key
// console.log(car.name);
// car.stop()
// car.move(100)
// console.log(cr.move(100))
//====================================================

// class Car {
//     constructor(name,color,currentSpeed) {
//         // console.log('constructor');
//         this.name=name
//         this.color=color
//         this.currentSpeed = currentSpeed
//     }
// }
// const car1 = new Car('camry','blue',)
// const car2 = new Car('corella','white')
// console.log(car1)
// console.log(car2)

//------------------

let user1 = {
    firstName: " Fatima", 
    lastName: "khaled"
}
let printFullName = function(age) {
    console.log('hello' + this.firstName+' '+this.lastName+' your age is '+ age);
}
printFullName.call(user1,"25"); //  ميثود مهمةالcall
printFullName.apply(user1,[25]);  // زفيه الapply  ميثود برضه مهمة
// all the two of them is the same the diff is the apply use arguement with array
// and notice that the first arguement (user1) is not arguement

//----------------------------------
//bind now is similar to call method with using this statement but 
//it returns "this" values
// but it has ti be called later
let newfunction = printFullName.bind(user1,'25')
newfunction();
//---------------------------
let add1 = (num1,num2) => {  // this called arrow function and it has many forms
    return num1 + num2;
} 

//==============================================================================================
// ==============================================================================================

