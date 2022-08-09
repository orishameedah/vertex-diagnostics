const showMenu = (toggleId, navId)=>{
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)
        // console.log(toggle);
        // console.log(nav);
        
        if(toggle && nav){
            toggle.addEventListener('click', ()=>{
                nav.classList.toggle('show'); //javascript css to display nav menu
            })
        }
};
showMenu('menu-btn','nav_menu')

const navLink = document.querySelectorAll('.nav__link');

// console.log({ navLink });

function linkAction() {
    const navMenu = document.getElementById('nav_menu');
    navMenu.classList.remove('show'); //when we click on each nav__link, we remove the show class
}
navLink.forEach((n) => n.addEventListener('click', linkAction));