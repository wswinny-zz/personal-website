var slideIndex = -1;

function changeSlide() 
{
	var slides = document.getElementsByClassName('slides');

	slideIndex = (slideIndex + 1) % slides.length;

	for (var i = 0; i < slides.length; i++)
		slides[i].style.display = 'none';
	
	slides[slideIndex].style.display = 'block';

	setTimeout(changeSlide, 5000);
}