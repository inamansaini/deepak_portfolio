let section=document.querySelectorAll('section');
let navlinks=document.querySelectorAll('header nav a');
window.onscroll=()=>{
    section.forEach(sec =>{
        let top=window.scrollY;
        let offset=sec.offsetTop
    })
}