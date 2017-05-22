var bgColors = [
		// '#E81123',
		'#DA3B01',
		// '#CA5010',
		'#FF8C00',
		'#107C10',
		// '#10893E',
		// '#018574',
		// '#038387',
		// '#2D7D9A',
		'#0063B1',
		// '#6B69D6',
		// '#744DA9',
		// '#881798',
		// '#9A0089',
		// '#BF0077',
		// '#C30052'
		];

var fgColors = [
		// '#E74856',
		'#EF6950',
		// '#F7630C',
		'#FFB900',
		'#498205',
		// '#00CC6A',
		// '#00B294',
		// '#00B7C3',
		// '#0099BC',
		'#0078D7',
		// '#8E8CD8',
		// '#8764B8',
		// '#B146C2',
		// '#C239B3',
		// '#E300BC',
		// '#EA005E'
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