function toggleMenu(){
    /*we are targetting these two elements*/
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburguer-icon");
    /*when we click it  */
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}