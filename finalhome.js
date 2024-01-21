const header = document.querySelector("header");

window.addEventListener("scroll", function() {
  header.classList.toggle("sticky", window.scrollY > 60);
});

// Let keyword is not needed here
Let menu = document.querySelector('#menu-icon');
Let navbar = document.querySelector('.navbar');
// Add this script to handle opening and closing the sidebar
document.getElementById('menu-btn').addEventListener('click', function () {
  document.getElementById('overlay').style.width = '100%';
  document.getElementById('sidebar').style.width = '250px';
});
