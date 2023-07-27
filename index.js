
let navbar = document.querySelector ('#bars');
let menulist = document.querySelector ('.menu');

navbar.onclick = ()=>{
    navbar.classList.toggle('fa-times');
    menulist.classList.toggle('active');
};
window.onscroll = () =>{
    navbar.classList.remove('fa-times');
    menulist.classList.remove('active');
}
document.querySelector('#search-icon').onclick = () =>{
    document.querySelector('#overlay').classList.toggle('active');
}
document.querySelector('#close').onclick = () =>{
    document.querySelector('#overlay').classList.remove('active');
}






