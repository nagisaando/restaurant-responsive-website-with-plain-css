
const menuOpenBtn = document.querySelector('.menu-icon1');
const menuBar = document.querySelector('.menu')
const menuCloseBtn = document.querySelector('.menu-icon2');
const menulistItems = document.querySelectorAll('li');

const menuOpenHandler = function(){
    menuBar.classList.remove('closeBar');
    menuBar.classList.remove('hidden');
    menuBar.classList.add('visible');

};

const menuCloseHandler = function(){
    menuBar.classList.add('closeBar');
    menuBar.classList.remove('visible');
 
    
    setTimeout(() => {menuBar.classList.add('hidden');}, 300);
};


menuOpenBtn.addEventListener('click', menuOpenHandler);
menuCloseBtn.addEventListener('click', menuCloseHandler);
