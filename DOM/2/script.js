// document.addEventListener('click',function(){
//     console.log('You clicked me');
// })

function clicked(){
    console.log('You clicked');
}

document.addEventListener('click',clicked);
document.removeEventListener('click',clicked);

let links = document.querySelectorAll('a');
let link = links[2];

link.addEventListener('click', function(event){
    event.preventDefault();
    console.log('NOOOOOOOOOO');
});