var cube1 = document.querySelectorAll('.cube1');
var menu = document.querySelector('.menu-btn');
var menuRight = document.querySelector('.btn-right');
var menuBack = document.querySelector('.menu-btn-back')
var test = document.querySelectorAll('.cube1-container');
var checked = 1;


//Top cube function
cube1[0].addEventListener('click', function(){
      checked--;
    if (cube1[0].classList.contains('rotate-right-to-front') && checked === 0 || cube1[0].classList.contains('rotate-left-to-front')  && checked === 0 || cube1[0].classList.contains('rotate-back-to-front') && checked === 0 || checked === 0) {
      for (var i = 0; i < cube1.length; i++) {
      cube1[i].classList.add('rotate-to-left');
      cube1[i].classList.remove('rotate-left-to-front');
      cube1[i].classList.remove('rotate-right-to-front');
      cube1[i].classList.remove('rotate-back-to-front');
    }
  }
});

//seconde cube function
cube1[1].addEventListener('click', function(){
  checked--;
  if (cube1[0].classList.contains('rotate-right-to-front') && checked === 0 || cube1[0].classList.contains('rotate-left-to-front')  && checked === 0 || cube1[0].classList.contains('rotate-back-to-front') && checked === 0 || checked === 0) {
      for (var i = 0; i < cube1.length; i++) {
      cube1[i].classList.add('rotate-to-right');
      cube1[i].classList.remove('rotate-left-to-front');
      cube1[i].classList.remove('rotate-right-to-front');
      cube1[i].classList.remove('rotate-back-to-front');
    }
  }
});

//thirdcube function
cube1[2].addEventListener('click', function(){
  checked--;
    if (cube1[0].classList.contains('rotate-right-to-front') && checked === 0 || cube1[0].classList.contains('rotate-left-to-front')  && checked === 0 || cube1[0].classList.contains('rotate-back-to-front') && checked === 0 || checked === 0) {
      for (var i = 0; i < cube1.length; i++) {
      cube1[i].classList.add('rotate-to-back');
      cube1[i].classList.remove('rotate-left-to-front');
      cube1[i].classList.remove('rotate-right-to-front');
      cube1[i].classList.remove('rotate-back-to-front');
    }
  }
});

//When on project page press arrow to go back to menu
menuRight.addEventListener('click', function(){
    if (cube1[0].classList.contains('rotate-to-right')) {
      for (var i = 0; i < cube1.length; i++) {
      cube1[i].classList.add('rotate-right-to-front');
      cube1[i].classList.remove('rotate-to-right');
      cube1[i].classList.remove('rotate-to-left');
      cube1[i].classList.remove('rotate-to-back');
      checked = 2;
    }
  }
});

//When on about page press arrow to go back to menu
menu.addEventListener('click', function(){
    if (cube1[0].classList.contains('rotate-to-left')) {
      for (var i = 0; i < cube1.length; i++) {
      cube1[i].classList.remove('rotate-to-left');
      cube1[i].classList.remove('rotate-to-right');
      cube1[i].classList.remove('rotate-to-back');
      cube1[i].classList.add('rotate-left-to-front');
      checked = 2;
    }
  }
});

//When on about page press arrow to go back to menu
menuBack.addEventListener('click', function(){
  if (cube1[0].classList.contains('rotate-to-back')) {
    for (var i = 0; i < cube1.length; i++) {
    cube1[i].classList.remove('rotate-to-back');
    cube1[i].classList.add('rotate-back-to-front');
    checked = 2;
  }
}
});
//Quickfix
window.addEventListener('keyup', function(event){
  if (event.keyCode === 27) {
    for (var i = 0; i < cube1.length; i++) {
      cube1[i].classList.add('rotate-left-to-front');
      cube1[i].classList.remove('rotate-to-left');
      cube1[i].classList.remove('rotate-to-right');
      cube1[i].classList.remove('rotate-to-back');
    }
  }
});
