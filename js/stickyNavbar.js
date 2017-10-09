var navbar = document.getElementById("introNavbar");
var sticky = navbar.offsetTop;

function detectStickyNavbar() 
{
	if (window.pageYOffset >= sticky) 
		navbar.classList.add("stickyNavbar");
	else 
		navbar.classList.remove("stickyNavbar");
}