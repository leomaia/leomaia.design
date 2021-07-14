
//mudando o estilo do box quando seleciona o desafio tecnologico
$('.select-desafio-tecnologico').change(function(){
	//alert ($(this).val());
	//se diferente de null
	if ($(this).val()) {
		//remove a classe para alterar o estilo
		$(this).parents('fieldset').parents('.box-form').find('.box-input-check').children('div').show();
		$(this).parents('fieldset').parents('.box-form').find('.box-input-check').removeClass('no-register');
	} else {
		//remove o conteudo do box .box-input-check
		$(this).parents('fieldset').parents('.box-form').find('.box-input-check').children('div').hide();
		//adiciona a classe para alterar o estilo
		$(this).parents('fieldset').parents('.box-form').find('.box-input-check').addClass('no-register');
	}
})

//funções complementares para o collapse na tela de cadastrar disciplinas
//alterando o status do box
$('.accordion-heading').hover(
	function(){
		//adiciona a classe hover ao elemento pai
		$(this).parent('.accordion-group').addClass('hover');
	},
	function() {
		//remove a classe hover do elemento pai
		$(this).parent('.accordion-group').removeClass('hover');
	}
)

$('.accordion-heading a').click(function () {
	/*
	*oculta as opções editar/excluir para evitar o bug de manter mostrando nos demais boxes.
	*se o box collapse nao esta aberto no momento do click, oculta o box de opções editar/excluir
	*/
	if (!$(this).parent().next('.collapse').hasClass('in')) {
		$('.accordion-options').hide();
	}
	//alterando o status do item clicado
	$(this).parents().toggleClass('on');
	//mostrando as opções editar/excluir
	$(this).parent().children('.accordion-options').toggleClass('on').fadeToggle("slow", "swing");
	//alert ($(this).parent().next('.collapse').html())
})

//fim

//chamada do plugin de zebrado
$('.table-style-one tbody, .table-result-thead-2 tbody tr').stripe({
	style1 : '',
	style2 : 'impar'
});	


//componente tooltip da tela de acompanhamento
$('.show-tooltip').hover(function(){
	//mostrando o tooltip
	$(this).next('.tooltip-box').stop(true,false).fadeToggle('slow');
})

//chamada tooltip na página de listagem
$('a.ico-list').tooltip();

//fazendo a marcação da linha selecionada no modal de incluir profissional na disciplina
$('#modalSelecionaProfissional input[type="radio"]').click(function(){
	//removendo a classe selected das tr, para evitar duplicidade
	$('#modalSelecionaProfissional tr').removeClass('selected');
	//adicionando classe selected ao tr pai do item clicado
	$(this).parents('tr').addClass('selected');
})


// This adds 'placeholder' to the items listed in the jQuery .support object. 
jQuery(function() {
   jQuery.support.placeholder = false;
   test = document.createElement('input');
   if('placeholder' in test) jQuery.support.placeholder = true;
});
// This adds placeholder support to browsers that wouldn't otherwise support it. 
$(function() {
   if(!$.support.placeholder) { 
      var active = document.activeElement;
      $(':text').focus(function () {
         if ($(this).attr('placeholder') != '' && $(this).val() == $(this).attr('placeholder')) {
            $(this).val('').removeClass('hasPlaceholder');
         }
      }).blur(function () {
         if ($(this).attr('placeholder') != '' && ($(this).val() == '' || $(this).val() == $(this).attr('placeholder'))) {
            $(this).val($(this).attr('placeholder')).addClass('hasPlaceholder');
         }
      });
      $(':text').blur();
      $(active).focus();
      $('form:eq(0)').submit(function () {
         $(':text.hasPlaceholder').val('');
      });
   }
});

//abri o modal com o loading
function openLoading() {

	$('#modalLoading').modal({
		show: true,
		keyboard: false,
		backdrop: false
	});
}

//fecha o modal com o loading
function closeLoading() {
	$('#modalLoading').modal('hide');
}