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

	var form_l = $('#form-credit').offset().top;

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

	$('.plazas_btn_menu').on('click', function(e){
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

	//Redireccion al form--------------------------------

	$('#want').on('click', function(){
		$('html, body').animate({
			scrollTop: form_l
		}, 400);
	});

	//---------------------------------------------------

	//Mensaje formulario---------------------------------

	function showSubmitMessage(){
		$('.message').slideDown(300);
		$('.message').css('display', 'flex');
	}

	$('.message i').on('click',function(){
		$('.message').slideUp(300);
	})

	//---------------------------------------------------

	//Validacion formulario------------------------------

	function itemValid(item,valid){
		if(valid){
			$(item).addClass('is-valid');
			$(item).removeClass('is-invalid');
		} else {
			$(item).addClass('is-invalid');
			$(item).removeClass('is-valid');
		}
		return valid;
	}

	function validateForm(){
		var valid = true;

		// VALIDACION DE LOS SELECT
		option = ['prestamo','plazo','tipo','estado','municipio']
		option.forEach( function(name){
			var field = $('[name='+name+']')[0];
			valid &= itemValid(field,field.selectedIndex !== 0);
		});
	
		// VALIDACION NOMBRE
		var nombre = $('[name=nombre]');
		var name = /^[a-zA-Z ]{2,30}$/;
		valid &= itemValid(nombre,name.test(nombre.val()));
	
		// VALIDACION EMAIL
		var e_mail = $('[name=email]');
		var email = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		valid &= itemValid(e_mail,email.test(e_mail.val()));
	
		// VALIDACION TELEFONO
		var telephone = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
		var telefono = $('[name=telefono]');
		valid &= itemValid(telefono,telephone.test(telefono.val()));
	
		// VALIDACION VALOR
		var valor = $('[name=valor]');
		var monto = $('[name=prestamo] option:selected').text().replace(/\$ /,'');
		valid &= itemValid(valor,2*parseFloat(valor.val()) > parseFloat(monto));
	
		// VALIDACION DIRECCION
		var direccion = $('[name=direccion]');
		valid &= itemValid(direccion,direccion.val().length>4);
	
		// VALIDACION CODIGO POSTAL
		var postal = /^[0-9a-z ]{0,9}$/i;
		var codigo = $('[name=codigo-postal]');
		valid &= itemValid(codigo,postal.test(codigo.val()) && codigo.val().length > 2);

		return valid;
	}

	$('#form-credit form').on('submit',function(e){
		e.preventDefault();
		console.log(validateForm());
	});
	//---------------------------------------------------
});