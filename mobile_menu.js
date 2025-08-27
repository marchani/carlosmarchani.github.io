(function(){
    var burger = document.querySelector('.burger-container'),
        header = document.querySelector('.menu');
    
    burger.onclick = function() {
        header.classList.toggle('menu-opened');
    }
}());