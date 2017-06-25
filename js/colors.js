var bgColors = [
		'#DA3B01',
		'#FF8C00',
		'#107C10',
		'#0063B1'
		];

var fgColors = [
		'#EF6950',
		'#FFB900',
		'#498205',
		'#0078D7'
		];

function fillColors()
{
	var backgroundBoxes = document.getElementsByClassName('contentSectionBackground');

	for(var i = 0; i < backgroundBoxes.length; ++i)
	{
		var randNum = Math.floor(Math.random() * bgColors.length);

		backgroundBoxes[i]
			.style.backgroundColor =
					bgColors[i % bgColors.length];

		backgroundBoxes[i]
			.getElementsByClassName('contentSection')[0]
			.style.backgroundColor =
					fgColors[i % fgColors.length];
	}
}

function fillColorsReverse()
{
	var backgroundBoxes = document.getElementsByClassName('contentSectionBackground');

	for(var i = 0; i < backgroundBoxes.length; ++i)
	{
		backgroundBoxes[i]
			.style.backgroundColor =
					fgColors[i % fgColors.length];

		backgroundBoxes[i]
			.getElementsByClassName('contentSection')[0]
			.style.backgroundColor =
					bgColors[i % bgColors.length];
	}
}
