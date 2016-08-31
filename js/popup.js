var link = document.querySelector(".hotel-search-btn");
var popup = document.querySelector(".hotel-search-form");
link.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.toggle("hotel-search-form-show");
});