// console.log('JAVASCRIPT BASICS');

//CREATION OF OBJECT

// let rectangle = {
//     length:2,
//     width:2,
//     draw: function(){
//         console.log("DRAWING A RECTANGLE");
//     }
// };

// //FACTORY FUNCTION

// function createRectangle(len, bre){
//     return rectangle = {
//         length:len,
//         breadth:bre,
//         draw(){
//             console.log("DRAWING A RECTANGLE");
//         }        
//     };
// };

// let rectangle1 = createRectangle(2,4);
// let rectangle2 = createRectangle(2,34);
// let rectangle3 = createRectangle(6,14);

//Camelcase -> numberOfStudents
//Constructor Function -> Pascal Notation -> First letter of every word is capital -> NumberOfStudents

function Rectangle(len,bre){
    this.length = len;
    this.breadth = bre;
    this.draw = function(){
        console.log("DRAWING A RECTANGLE");
    }
}

let rectangleObject = new Rectangle(6,7);

// rectangleObject.color = 'yellow';
// console.log(rectangleObject);

// delete rectangleObject.color;
// console.log(rectangleObject);

// let Rectangle1 = new Function(
//     'length', 'breadth',
//     `this.length = length;
//      this.breadth = breadth;
//      this.draw= function() {
//      console.log('drawing');
//      }`);

//Object Creation Using Rectangle1
// let rect = new Rectangle1(2,3);

// rect.length;

// console.log(rect);


// rectangle.length;
// rectangle.breadth;

// let a = 10;
// let b = a;

// a++;
// console.log(a);
// console.log(b);


// let a = { value: 10};
// let b = a;

// a.value++;

// console.log(a.value);
// console.log(b.value);

// let a = 10;

// function inc(a) {
//     a++;
// }

// inc(a);

// console.log(a);

// let a = {value:10 };

// function inc(a) {
//     a.value++;
// }

// inc(a);

// console.log(a.value);


//for-in loop 
// for(let key in rectangle ) {
//     //keys are reflected through key variable 
//     //values are reflected through rectangle[key]
//     console.log(key,rectangle[key]);
// }

//for-of loop
// for(let key of Object.entries(rectangle)) {
//     console.log(key);
// }

// if('length' in rectangle) {
//     console.log('Present');
// }
// else {
//     console.log('Absent');
// }


//object - colone #1
// let src = {
//     a:10,
//     b:20,
//     c:30
// };

// let dest = {};

// for(let key in src) {
//     dest[key] = src[key];
// }

// console.log(dest);

// src.a++;
// console.log(dest);

//Object Cloning #2
// let src = {
//     a:10,
//     b:20,
//     c:30
// };

// let src2 = { value: 25};

// let dest = Object.assign({}, src, src2);

// console.log(dest);

// src.a++;

// console.log(dest);

//Object Cloning #3
// let src = {
//     a: 10,
//     b:20,
//     c:30
// };

// let dest = {...src};

// console.log(dest);

// src.a++;

// console.log(dest);