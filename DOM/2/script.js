// document.addEventListener('click',function(){
//     console.log('You clicked me');
// })

// function clicked(){
//     console.log('You clicked');
// }

// document.addEventListener('click',clicked);
// document.removeEventListener('click',clicked);

// let links = document.querySelectorAll('a');
// let link = links[2];

// link.addEventListener('click', function(event){
//     event.preventDefault();
//     console.log('NOOOOOOOOOO');
// });

// let myDiv = document.createElement('div');

// function paraStatus(event){
//     console.log('Para '+ event.target.textContent);
// };

// myDiv.addEventListener('click', paraStatus);

// for(let i=1;i<=100;i++){
//     let para = document.createElement('p');
//     para.textContent = 'I AM PARA'+ i;
//     myDiv.appendChild(para);
// }

// document.body.appendChild(myDiv);

let element = document.querySelector('#wrapper');
element.addEventListener('click', function(event){
    if(event.target.nodeName === 'SPAN'){
        console.log('Span I am '+ event.target.textContent);
    }
})