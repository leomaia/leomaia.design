// usage: log('inside coolFunc', this, arguments);
// paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
window.log = function f(){ log.history = log.history || []; log.history.push(arguments); if(this.console) { var args = arguments, newarr; args.callee = args.callee.caller; newarr = [].slice.call(args); if (typeof console.log === 'object') log.apply.call(console.log, console, newarr); else console.log.apply(console, newarr);}};

// make it safe to use console.log always
(function(a){function b(){}for(var c="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","),d;!!(d=c.pop());){a[d]=a[d]||b;}})
(function(){try{console.log();return window.console;}catch(a){return (window.console={});}}());


// place any jQuery/helper plugins in here, instead of separate, slower script files.
/*
*funcao de chamada do modal
*recebe como parametro do valor do href do elemento clicado.
*/
function openModal(elem) {
		//e.preventDefault();
		
		//var id = $(this).attr('href');
		var id = elem; //href do elemento clicado
	
		var maskHeight = $(document).height();
		var maskWidth = $(window).width();
	
		$('#mask').css({'width':maskWidth,'height':maskHeight});
		$('#mask').fadeIn(500);	
	
		//Get the window height and width
		var winH = $(window).height();
		var winW = $(window).width();
              
		$(id).css('top',  winH/2-$(id).height()/2);
		$(id).css('left', winW/2-$(id).width()/2);
	
		$(id).fadeIn(500); 
}


// Janela Modal / Feedback Usuário
$('a[name=modal]').click(function(e) {
		openModal($(this).attr('href'));	
	});
	
	$('.modal .fechar').click(function (e) {
		e.preventDefault();
		
		$('#mask').fadeOut(200);
		$('.modal').fadeOut(200);	
	});	
	
	$('.modal .discard').click(function (e) {
		e.preventDefault();
		
		$('#mask').fadeOut(200);
		$('.modal').fadeOut(200);	
	});	
	
	$('#mask').click(function () {
		$('#mask').fadeOut(200);
		$('.modal').fadeOut(200);
	});	