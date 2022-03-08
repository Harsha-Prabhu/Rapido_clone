console.log('hi');
const nav = document.querySelector('.nav');
console.dir(nav.classList)
window.onscroll = function() {myfunc()};


function myfunc(){

    if(window.scrollY>10)
    {
        nav.classList.add('color');
    }
    else{
        nav.classList.remove('color');
    }
}