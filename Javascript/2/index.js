console.log("Hello World");

// let rectangle = {
//     height: 2,
//     width: 4,

//     draw: function(){
//         console.log("Drawing");
//     }
// };

// function createRectangle() {
//     return rectangle = {
//         width:1,
//         height:2,
//         draw(){
//             console.log("Draw Rectangle");
//         }
//     };
// };

// function createRectangle(h, w){
//     return rectange = {
//         height: h,
//         width: w,
//         draw(){
//             console.log("Drwaing Reactangle");
//         }
//     };
// };

// let rectangle1 = createRectangle(324,43);

// let rectangle1 = createRectangle();

function Reactangle(l,w){
    this.length = l;
    this.breadth = w;
    this.draw = function(){
        console.log('Drawing Rectangle');
    };
};

let rectangle1 = new Reactangle(20,40);

rectangle1.color = 'yellow';
console.log(rectangle1);

delete rectangle1.color;
console.log(rectangle1);

