/*!
 @Cenpes/Petrobras
 @Code by Front End Team [BWR0, BE1E, BE5B, B2G4]
 @Description: Gerenciador de zebrado para as linhas das tabelas
 @version: 1.0
 @since january/2013
 @exemple $('identificador').stripe({style1 : '.nomeDaClasse', style2 : '.nomeDaClasse2'});	
!*/

$.fn.stripe = function(options) {

this.each(function() {

var opts = $.extend({}, $.fn.stripe.defaults, options);

var elem = $(this), //identificador da elemento "tag" que receberá o zebrado
	style1 = opts.style1, //cor da linha par
	style2 = opts.style2 //cor da da linha impar
	//se passado valor para linha par
	if (opts.style1) {
		//fazendo o zebrado da linha par
		$(elem).children(':even').addClass(opts.style1);
	}	
	//se passado valor para linha impar
	if (opts.style2) {
		//fazendo o zemrabdo da linha impar
  		$(elem).children(':odd').addClass(opts.style2);
	}
  })

}