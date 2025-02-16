

let times = document.querySelector('#times');
let nav = document.querySelector('.nav');

nav.addEventListener('click', function(){
  nav.classList.add('open');  
});

times.addEventListener('click', function(){
    nav.classList.remove('open');  
});