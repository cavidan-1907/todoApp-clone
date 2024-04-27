const menuIcon = document.getElementById('menuIcon');
const closeIcon = document.querySelector('.menu .bi-x');
const menu = document.querySelector('.menu');

menuIcon.addEventListener('click', () => {
if (menu.style.left==="-100%") {
      menu.style.left = "0";
}
else {
    menu.style.left = "-100%";
}
});

closeIcon.addEventListener('click', () => {
  menu.style.left = "-100%";
});

document.addEventListener('click', (event) => {
  const isClickInsideMenu = menu.contains(event.target);
  const isClickInsideMenuIcon = menuIcon.contains(event.target);

  if (!isClickInsideMenu && !isClickInsideMenuIcon) {
    menu.style.left = "-100%";
  }
});

window.addEventListener("resize",()=>{
    if (window.innerWidth>850) {
        menu.style.left = "-100%";
    }
})