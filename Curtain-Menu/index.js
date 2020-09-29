let myNav = document.getElementById("myNav");
let open = document.getElementById("open");
let close = document.getElementById('close');
open.addEventListener('click', () => {
    myNav.style.width = "100%";
});
close.addEventListener('click', () => {
    myNav.style.width = "0%";
});