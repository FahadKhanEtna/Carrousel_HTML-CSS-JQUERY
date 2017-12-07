'use strict';

$(document).ready(function()
{
	var $slider			= $('#carrousel'),
		$content		= $('#carrousel #carrousel_img'),
		$indexImg		= $content.length - 1,
		i = 0,
		$currentImg		= $content.eq(i);
		$content.css('display', 'none');
		$currentImg.css('display', 'block');
		var time 		= 3000;
		var interval;		

	function startSlider()
	{
			$('.next img').css('display','none');
			$('.back img').css('display','none');
			$('#message_stop').css('display','none');			
			$('#message_suivant').css('display','none');
			$('#message_precedent').css('display','none');
		interval = setTimeout(function()
		{
			if(i < $indexImg)
			{
				i++;
			}
			else
			{
				i=0;
			}
			$currentImg		= $content.eq(i);
			$content.css('display', 'none');
			$currentImg.css('display', 'block');

			startSlider();
		}, time);
	}


		$(".next").click(function()
	{


		$('#message_suivant').css('display','block');

		i++;

		if( i <= $indexImg)
		{
			$currentImg		= $content.eq(i);
			$content.css('display', 'none');
			$currentImg.css('display', 'block');
		}
		else
		{
			i=0;
			$currentImg		= $content.eq(i);
			$content.css('display', 'none');
			$currentImg.css('display', 'block');
		}
	});

	$(".back").click(function()
	{

		$('#message_precedent').css('display','block');

		i--;

		if (i >= 0) 
		{
			$currentImg		= $content.eq(i);
			$content.css('display', 'none');
			$currentImg.css('display', 'block');
		}
		else
		{
			i = $indexImg;
			$currentImg		= $content.eq(i);
			$content.css('display', 'none');
			$currentImg.css('display', 'block');
		}
	});

	function pauseSlider()
	{
		clearInterval(interval);
		$('.next img').css('display','block');
		$('.back img').css('display','block');
		$('#message_stop').css('display','block');
	}

	$slider.on('mouseover', pauseSlider).on('mouseout', startSlider);
	startSlider();
});