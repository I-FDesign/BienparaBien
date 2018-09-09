$(document).ready(function(){

	//Menu-------------------------------------------

	var ventajas = $('.facil').offset().top,
		requisitos = $('.pasos').offset().top,
		plazas = $('.plazas').offset().top;

	$('.ventajas_btn').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: ventajas - 100
		}, 500);
	});

	$('.requisitos_btn').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: requisitos - 100
		}, 500);
	});

	$('.plazas_btn').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: plazas - 100
		}, 500);
	});


	//Video----------------------------------------------

	$('#video_btn').on('click', function(){
		$('.video_pasos').css('display', 'block');
		$('.video').slideDown(400);
		$('.video').css('display', 'flex');
	})

	$('.video').on('click', function(e){
		var tt = e.target;
		tt = tt['attributes']['class']['value'];
		if(tt == 'video'){
			$('.video').slideUp(400);	
			$('.video_pasos').slideUp(400);
		}
	});

	//---------------------------------------------------
});