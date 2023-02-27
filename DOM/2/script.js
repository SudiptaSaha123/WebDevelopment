function clickedFunction(){
    console.log('I am clicked');
};

document.addEventListener('click', clickedFunction);

document.removeEventListener('click', clickedFunction);

const content = document.querySelector('h1');

content.addEventListener('click', function(event){
    console.log(event);
})

let links = document.querySelectorAll('a');
let thirdLink = links[2];

thirdLink.addEventListener('click', function(event){
    event.preventDefault();
    console.log('No');
});