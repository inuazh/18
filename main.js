// Get the elements by class name
var hamburger = document.querySelector(".hamburger");
var headerNavigation = document.querySelector(".header-navigation");

// Add a click event listener to the hamburger icon
hamburger.addEventListener("click", function() {
  // Toggle the display of the navigation menu
  headerNavigation.classList.toggle("show");

  // Toggle the appearance of the hamburger icon
  var spans = hamburger.querySelectorAll("span");
  spans[0].classList.toggle("rotate-top");
  spans[1].classList.toggle("hide-middle");
  spans[2].classList.toggle("rotate-bottom");
});