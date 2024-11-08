const menuToggle = document.getElementById("menu-toggle")
const items = document.querySelector(".items")

menuToggle.addEventListener('click', function() {
    items.classList.toggle('active')
})