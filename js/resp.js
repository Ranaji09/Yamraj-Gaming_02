burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navlist = document.querySelector('.nav-list')
rightNav = document.querySelector('.rightNav')



burger.addEventListener('click', ()=>{
    rightNav.classList.toggle('v-class-resp');
    rightlist.classList.toggle('v-class-resp');
    rightbar.classList.toggle('h-nav-resp');

})