$(document) .ready(function()
{

//	// Forçar a altura vertical do Painel de Gráficos //
//	if ($('.graficos').height() < $(document).height()){
//		$('.graficos').css('height', $(document).height()+'px');
//	}
	
	//// Forçar a altura de 100% //
//	$('.temMenu').height($(document).height()-'105');	
//	$('.temMenu .miolo').height($(document).height()-'180');
//	
	
	// Painel de Gráficos / Abre e fecha calculando a largura do documento mas mantendo a coluna do menu de variáveis exposta //
	/*$(".barraGraficos").click(function(){
		if( $('.painelGraficosAberto .graficos').width() == $(document).width()-'220' ){
			$('.painelGraficosAberto .graficos').width('0');
		}
		else {
			$('.painelGraficosAberto .graficos').width($(document).width()-'220');
		}
	});*/
	$(".barraGraficos").click(function(){
		$('html').toggleClass("painelGraficosAberto");
		/*if( $('.painelGraficosAberto .graficos').width() == $(document).width()-'220' ){
			$('.painelGraficosAberto .graficos').width('0');
		}
		else {
			$('.painelGraficosAberto .graficos').width($(document).width()-'220');
		}*/
	});
	
	// Menu Lateral em Accordion
	$('.accordion').dcAccordion({
		eventType: 'click',
		autoClose: false,
		saveState: true,
		disableLink: false,
		speed: 'fast',
		showCount: false,
		autoExpand: true,
		cookie	: 'dcjq-accordion-1',
		classExpand	 : 'dcjq-current-parent'
	});
	
	// Cores Alternadas nas tabelas
	$('.variaveisDataset tr:odd').addClass("odd");
	$('.variaveisDataset tr:even').addClass("even");
	$('.modal .tabelaVariaveis tr:odd').addClass("odd");
	$('.listaObjetos > li:odd').addClass("odd");
	$('.tabelaPadrao tr:even').addClass("even");
	
	// Alteração de cor de linha de tabela selecionada via checkbox
    $(".tabelaPadrao td input:checkbox").click(function() {
        $(this).parent().parent().toggleClass("highlight")
    })
	
	
	 // Tabela de Variáveis dos Datasets - Menu de opções da variável
    $('.variaveisDataset .variavel').toggle(function(){
    	//
    	$('.variaveisDataset .active').click();
    	$(this).addClass('active');
    	$(this).children('.menuVariavel').slideDown('fast');
    },
    //callback
    function(){
    	$(this).removeClass('active');
    	$(this).children('.menuVariavel').slideUp('fast');
    })

	
	$(".painelGraficosConteudo").organicTabs();
	$(".criarModelo").organicTabs();
	$(".propriedadesDatasets").organicTabs();
	
	// Aplicar classe no quarto thumbnail de cada linha de thumbs de gráficos
    $(".gradeGraficos li:nth-child(4n+4)").addClass("fourth");
	
	//menu drop down
	$('.opcoes img').toggle(function(){
			//remove qualquer elemento para evitar duplicidade
			$('.opcoesLista#active').remove();
			$('.opcoes').removeClass('active');
			//adiciona a classe active ao elemento pai do item clicado
			$(this).parents('.opcoes').addClass('active');
			//no click da imagem clona a estrutura do menu e adiciona a classe active ao novo elemento que foi clonado
			var menu = $(this).next('.opcoesLista').clone().attr({'id':'active'});
			//inseri o elemento clonado no html da página
			$('body').append(menu);
			/*
			 *adiciona as regras de estilo inline para posicionamento do menu baseado na posição do item clicado.
			 *var posMenuTop = posicao absoluta em relação ao topo + altura do elemento clicado
			 *var posMenuLeft = posicao absoluta em relação a esquerda
			 *os valores numericos adicionados apenas para posicionar com uma melhor precisao
			*/
			var posMenuTop  = $(this).offset().top+$(this).height()+2;
			var posMenuLeft = $(this).offset().left-4;
			$('.opcoesLista#active').css({'top':posMenuTop,'left':posMenuLeft}).fadeIn('fast');

			//associa o elemento criado ao evento mouseover e mouseleave
	        $('body').delegate('.opcoesLista#active', 'mouseover',
	        	function(){
	        		//adiciona uma classe para ser usada como flag
					$(this).addClass('on');
				}
	        ).delegate('.opcoesLista#active', 'mouseleave',
	        	function(){
					$(this).removeClass('on');
	        	}
	        );

			//funcao callback
		}, function() {
			//anima o elemento na saida
			$('.opcoesLista#active').fadeOut('slow');
			//remove o elemento para evitar duplicidade
			$('.opcoesLista#active').remove();	
			//remove a classe active do elemento pai do item clicado
			$(this).parents('.opcoes').removeClass('active');		
		}
	)

	//associando o click ao elemento a para o funcionamento do modal
	$('body').delegate('a[name=modal]','click',
		function(){
		//dispara o click para fechar o menu antes da abertura do modal
		$('.opcoes.active img').click();		
		//chama a função que abre o modal (plugins.js) | passa como parametro o valor do href do elemento clicado
		openModal($(this).attr('href'));
	});		

	/*
	*ocultando o menu dropdown
	*oculta o menu no click fora do menu dropdown
	*oculta o menu quando acontece a rolagem dentro do menu lateral
	*/
	//ao clicar no body, verifica a flag
	$('body').click(function(){
		//se a flag no menudropdown nao estiver on, oculta!
		if (!$('.opcoesLista#active').hasClass('on')) {
			//dispara um click no elemento do menu clicado anteriormente
			$('.opcoes.active img').click(); //pq disparar um evento click? para nao perder a funcao callback do toggle ;)
		}
		//ocultando o menu de opções da variável
		if ($('.variaveisDataset .variavel').hasClass('active')) {
    		//dispara o click para nao perder a funcao de callback do toggle
    		$('.variavel.active').click();
    		//remove a classe active
			$('.variaveisDataset .variavel').removeClass('active');
		}
	})

	//ao executar o scroll da ul.menuScrollBox.segundoNivel verifica a flag
	$('.menuScrollBox.segundoNivel').scroll(function(){
		//se a flag nao estiver on, oculta!
		if (!$('.opcoesLista#active').hasClass('on')) {
			//dispara um click no elemento do menu clicado anteriormente
			$('.opcoes.active img').click(); //pq disparar um evento click? para nao perder a funcao callback do toggle ;)
		}
	})

	/*fim ocultar menu dropdown*/

});	
