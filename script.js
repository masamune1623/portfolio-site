$(function(){


$('#bar').click(function(){

	if($('.menu1').hasClass('active')){
		$('.menu1').animate({
			'right' : '-190px'
		},500);
		$('.menu1').removeClass('active');
	}else{
		$('.menu1').addClass('active');
		$('.menu1').animate({
			'right' : '0px'
		},500);
	}

});

$('.content').hover(
	function(){
	$(this).find('.content-bar').animate({
		width:'130px'
	},300);
},
	function(){
	$('.content').find('.content-bar').animate({
		width:'0px'
	},300);

});

$('.wrapper4-4').click(function(){

	if($(this).hasClass('slide-active')){
		$(this).find('.answer').slideUp();
		$(this).find('span').text('+');
		$(this).removeClass('slide-active');
	}else{
		$(this).find('.answer').slideDown()
		$(this).find('span').text('-');
		$(this).addClass('slide-active')
	}

})



});