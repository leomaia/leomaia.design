$(document) .ready(function()
{
    // Menu select de Projetos
    $('.mainNav .current').click(function(event)
    {
        event.stopPropagation();
        $('.mainNav .navList').slideToggle('fast')
        $(this).parent().toggleClass('active')
															 			
    });
    
    $('html').click(function()
    {
        $('.mainNav .navList').slideUp('fast')
        $('.mainNav').removeClass('active')
    });


    // Ícone de status Ativo / Inativo
    // $('.status').click(function(event)
    // {    
    //    $(this).toggleClass('inativo')
    // });
    
    // Fechar mensagem de feedback
    $('.feedbackMessage .fechar').click(function (e) {
        e.preventDefault();
        
        $(this).parent().fadeOut(300);
    });

    
										
});
