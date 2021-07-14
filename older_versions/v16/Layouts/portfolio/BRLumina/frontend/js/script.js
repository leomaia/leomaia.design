/* Author: Leonardo Maia - Chave BWR0

*/

$(document) .ready(function()
{
    // Menu select de Projetos
    $('.current').click(function(event)
    {
        event.stopPropagation();
        $('.listaProjetos').slideToggle('fast')
        $(this).toggleClass('active')
															 			
    });
    
    $('.navProjetos ul').click(function( e ){  
        e.stopPropagation();  
    });    
    
    $('body').click(function()
    {
        $('.listaProjetos').slideUp('fast')
        $('.current').removeClass('active')
    });

    // Botão de expandir conteúdo de seleção de variáveis para geração de gráficos nos Resultados
    $('.selecaoVariaveis .expandirRetrair').click(function()
    {
        retrairPainelSelecaoVariaveis();
    });
    
    $('.thumbsGraficos .expandirRetrair').click(function()
    {
        $('.thumbsGraficos .conteudoRetratil').slideToggle('fast')
        $(this).toggleClass('retrair')
        $('.thumbsGraficos').toggleClass('retraido')
    });
	
    $('.graficosDerivados .expandirRetrair').click(function()
    {
        $('.graficosDerivados .conteudoRetratil').slideToggle('fast')
        $(this).toggleClass('retrair')
        $('.graficosDerivados').toggleClass('retraido')
    });
	
	$('.preOpcoes .selecionarVariaveis').click(function()
    {
        $('.preOpcoes .conteudoRetratil').slideToggle('fast')
        $(this).toggleClass('active')
    });
        
    // Acrescentar classe na variável selecionada para geração de gráfico
    $(".tableVariaveis input").click(function() {
        $(this).parent().toggleClass("active")
    })
	
    // Acrescentar classe nos Cenários selecionados para Comparação de Cenários
    $(".boxCenarios input").click(function() {
        $(this).parent().toggleClass("active")
    })
	
    // Menu select de Cen?rios
    $('.cenarioSelect').click(function()
    {
        $('.opcoesCenarios').slideToggle('fast')
        $(this).toggleClass('active')
															 			
    });

    

    // Renomear arquivo DLL
    // Impedir que vários box sejam abertos. Quando um abrir, o que estiver aberto deve fechar
    $('.listaDLL .editar').click(function()
    {
        $(this).parent().siblings('.renomear').slideToggle('fast')
        $(this).toggleClass('active')
    });


	
    // Ajuda no cabe?alho
    $('.header .ajuda').click(function()
    {
        
        $('.header .ajudaContent').slideToggle('fast')
        $(this).toggleClass('active')
															 			
    });
	    
    aplicarDesignPainelRange();
    aplicarDesign();
										
});

function aplicarDesignPainelRange(){
    // Botões de Alterar Escala
    $(".botaoEscala a").click(function() {
        $(this).parent().toggleClass("active")
        return false;
    })
	
    $(".botaoEscala .fechar").click(function() {
        $(this).parent().parent().removeClass("active")
    })
	
    $(".varAlterarEscala .iconeEscala").click(function() {
        $(this).parent().toggleClass("active")
        return false;
    })
	
    $(".varAlterarEscala .fechar").click(function() {
        $(this).parent().parent().removeClass("active")
    })
    
}


function retrairPainelSelecaoVariaveis(){
    $('.selecaoVariaveis .conteudoRetratil').slideToggle('fast');
    $('.selecaoVariaveis .expandirRetrair').toggleClass('retrair');
    $('.selecaoVariaveis').toggleClass('retraido');

}

function aplicarDesign(){
    // Efeito de cores alternadas em tabelas
    $('.listagem .projeto:even, tr:even') .css({
        'background-color': '#f4f5f6'
    })
		
    $('.tablesorter tr:even') .css({
        'background-color': 'transparent'
    })
    
    // Aplicar classe no quarto thumbnail de cada linha de thumbs de gráficos
    $(".gradeGraficos li:nth-child(4n+4)").addClass("fourth");
	
// Tablesorter plugin - ordena??o via cabe?alho de tabela
/*    $("table").tablesorter( {
        // sort on the first column and third column, order asc 
        sortList: [[0,0]]
    });
*/
}
