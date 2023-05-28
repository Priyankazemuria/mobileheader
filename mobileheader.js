//hamburger js
var hamburger= document.getElementById('hamburger');
hamburger.addEventListener('click',mobheadOpen);
var showmob =document.getElementById('headershow_mobile');
const ullist = document.querySelector('.ullist_mob');
function mobheadOpen(){
    showmob.style.display = "block";
    // showmob.style.transition = "all .3s ease-in";
    //showmob.classList.add('show_trans');
    document.querySelector('body').setAttribute("class","no-scroll");
    document.querySelector(".overlay-span").style.visibility = "visible";
}
function closeNav(){
        showmob.style.display = "none";
        document.querySelector('body').removeAttribute("class","no-scroll");
        document.querySelector(".overlay-span").style.visibility = "hidden";
}