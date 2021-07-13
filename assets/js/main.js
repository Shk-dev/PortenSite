document.querySelector('.burger').addEventListener('click', function(){
    document.querySelector('.burger span').classList.toggle('active');
    document.querySelector('.menu').classList.toggle("animate");   
  })

document.querySelector('.line-header').classList.toggle('off');

function cont1() {
    content1.classList.toggle('off');
}

function cont2() {
    content2.classList.toggle('off');
}

function cont3() {
    content3.classList.toggle('off');
}


let arrow1 = document.querySelector('#arrow-1');
let arrow2 = document.querySelector('#arrow-2');
let arrow3 = document.querySelector('#arrow-3');

let content1 = document.querySelector('#content-1');
let content2 = document.querySelector('#content-2');
let content3 = document.querySelector('#content-3');

arrow1.addEventListener('click', cont1);
arrow2.addEventListener('click', cont2);
arrow3.addEventListener('click', cont3);


