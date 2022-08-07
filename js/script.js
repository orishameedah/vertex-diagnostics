const showMenu = (toggleId, navId)=>{
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)
        console.log(toggle);
        console.log(nav);
        
        if(toggle && nav){
            toggle.addEventListener('click', ()=>{
                nav.classList.toggle('show'); //javascript css to display nav menu
            })
        }
};
showMenu('menu-btn','nav_menu')