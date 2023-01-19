var dropdownItems = document.querySelectorAll(".dropdown-item");
dropdownItems.forEach(function (item) {
  item.addEventListener("click", function () {
    var menu = item.querySelector(".dropdown-menu");
    menu.classList.toggle("show-dropdown");
  });
});
