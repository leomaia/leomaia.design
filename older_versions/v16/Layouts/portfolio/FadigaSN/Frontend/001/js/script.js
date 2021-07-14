/* Author: Leonardo da Cunha Maia (BWR0) - TIC-Cenpes */
$(document) .ready(function()
{
	
	$('.expandirOcultar').click(function(event)
    {
        $(this).siblings().slideToggle('fast')
        $(this).toggleClass('aberto')
															 			
    });
	
	$('.selectBox li:even').addClass("even");

})


