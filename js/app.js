$(document).ready(function(){

	//Menu_Mobile------------------------------------

	$('header .bars i').on('click',function(){
		$('.black').css('display', 'block');
		$('.menu_options').animate({
			marginRight : 0},
			400);
	});

	$('.menu_options .cross i').on('click', function(){
		$('.black').css('display', 'none');
		var options = $('.menu_options').css('width');
		options = parseInt(options) * -1;
		$('.menu_options').animate({
			marginRight : options},
			400);
	});

	//-----------------------------------------------

	//Menu-------------------------------------------

	var ventajas = $('.facil').offset().top,
		requisitos = $('.pasos').offset().top,
		plazas = $('.plazas').offset().top;

	$('.ventajas_btn').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: ventajas - 100
		}, 500);
		$('.black').css('display', 'none');
		var options = $('.menu_options').css('width');
		options = parseInt(options) * -1;
		$('.menu_options').animate({
			marginRight : options},
			400);
	});

	$('.requisitos_btn').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: requisitos - 100
		}, 500);
		$('.black').css('display', 'none');
		var options = $('.menu_options').css('width');
		options = parseInt(options) * -1;
		$('.menu_options').animate({
			marginRight : options},
			400);
	});

	$('.plazas_btn').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: plazas - 100
		}, 500);
		$('.black').css('display', 'none');
		var options = $('.menu_options').css('width');
		options = parseInt(options) * -1;
		$('.menu_options').animate({
			marginRight : options},
			400);
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