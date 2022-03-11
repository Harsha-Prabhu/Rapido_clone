// nav js
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

//chooser js
var cusb = document.querySelector('.bl14');
var capb = document.querySelector('.bl24');
var customer = document.querySelector('.customers');
var captains = document.querySelector('.Captains');
cusb.onclick = function(){
    captains.classList.add('vanish');
    customer.classList.remove('vanish');
    cusb.classList.add('yelltog');
    capb.classList.remove('yelltog');
}
capb.onclick = function(){
    customer.classList.add('vanish');
    captains.classList.remove('vanish');
    capb.classList.add('yelltog');
    cusb.classList.remove('yelltog');
}
