function ReNewCaptchaById(imageId, captchaKey, captchaHeight) {
	// Пытаемся получить скрытый объект для input-а
	var captchaObject = document.getElementById(imageId);

	// Элемента нет, добавим его
	if (null != captchaObject && undefined !== captchaObject) {
		var antiCache = Math.floor(Math.random()*100000);
		captchaObject.src = "/captcha.php?get_captcha=" + captchaKey + "&height=" + captchaHeight + "&anc=" + antiCache;
	}
}

var galleryWidth = 0; // ширина самой галлереи
var shag = 200; // при каждом шаге будем двигать карусель на 100 пиксел
var speed = 200; // время в миллисекундах, за которое галерея пройдет 1 шаг, т.е. сдвинется на shag или 200px
var $gallery = 0;
var $carusel = 0; 
var caruselWidth = function(){
	var w = 0;
	$carusel.find('a').each(function(){
		w+=$(this).find('img').width()+5;
	})
	return w;
}

function movieContainer(video_container, video_file) {
	var code_video = '<video id="movieContainer" width="500" autoplay style="margin-top:-28px;"><source src="/video/' + video_file + '.mp4" type="video/mp4; codecs=&quot;avc1.42E01E, mp4a.40.2&quot;"><source src="/video/' + video_file + '.webm" type="video/webm; codecs=&quot;vp8, vorbis&quot;"><source src="/video/' + video_file + '.ogv" type="video/ogg; codecs=&quot;theora, vorbis&quot;"></video>';
	//var code_video = '<video id="movieContainer" width="500" autoplay controls style="margin-top:-56px;"><source src="/video/' + video_file + '.mp4" type="video/mp4; codecs=&quot;avc1.42E01E, mp4a.40.2&quot;"><source src="/video/' + video_file + '.webm" type="video/webm; codecs=&quot;vp8, vorbis&quot;"><source src="/video/' + video_file + '.ogv" type="video/ogg; codecs=&quot;theora, vorbis&quot;"></video>';
	$.when( $('#'+video_container).html(code_video) ).then(function(){
		var video = document.getElementById("movieContainer");
		video.addEventListener('suspend', function(e) {
			this.play();
		}, false);
		video.addEventListener('click', function(e) {
			this.play();
		}, false);
		video.addEventListener('ended', function(e) {
				initFromFlash(1);
		}, false);
	});
}

function BesplatnoeKino(UseForceLuke) {
	var flashvars = {};
	var params = {
		wmode: "transparent",
		quality: "high",
		scale: "noscale",
		menu: "none"
	};
	var attributes = {};

	/*
	var show = true;
	if ((!$.cookie ('videl-j')|| UseForceLuke) && ($('#movieContainerJaluzi').length>0)) swfobject.embedSWF("/video/jaluzi.swf", "movieContainerJaluzi", "500", "225", "9.0.0", "/jaluzi.swf", flashvars, params, attributes);
	else if ((!$.cookie ('videl-r')|| UseForceLuke) && ($('#movieContainerRolstavni').length>0)) swfobject.embedSWF("/video/rolstavni.swf", "movieContainerRolstavni", "500", "225", "9.0.0", "/rolstavni.swf", flashvars, params, attributes);
	else if ((!$.cookie ('videl-v')|| UseForceLuke) && ($('#movieContainerVorota').length>0)) swfobject.embedSWF("/video/vorota.swf", "movieContainerVorota", "500", "225", "9.0.0", "/vorota.swf", flashvars, params, attributes);
	else show = false;
	*/

	var show = true;
	if ((!$.cookie ('videl-j')|| UseForceLuke) && ($('#movieContainerJaluzi').length>0)) movieContainer('movieContainerJaluzi', 'jaluzirf-1');
	else if ((!$.cookie ('videl-r')|| UseForceLuke) && ($('#movieContainerRolstavni').length>0)) movieContainer('movieContainerRolstavni', 'jaluzirf-1');
	else if ((!$.cookie ('videl-v')|| UseForceLuke) && ($('#movieContainerVorota').length>0)) movieContainer('movieContainerVorota', 'jaluzirf-1');
	else show = false;

	if (show) {
		$('.mini_flash').hide();
		$('#movie').show();
	}
	else $('.mini_flash').show();

	/* close movie */
	$('.close-movie').click(function() {
		initFromFlash(1);
		//$('#movie').hide();
		//$('.mini_flash').show();
	});
}




function counter(name) {
	switch(name) {

		case 'zvonok-vizov':
			yaCounter13740904.reachGoal('zvonok-vizov');
			ga('send', 'event', 'zakaz-zvonka-vizov', 'bzvonok-vizov');
			break;

		case 'zvonok-send':
			yaCounter13740904.reachGoal('zvonok-send');
			ga('send', 'event', 'zakaz-zvonka-send', 'bzvonok-send');
			break;

		case 'forma-contact-send':
			yaCounter13740904.reachGoal('forma-contact-send');
			ga('send', 'event', 'forma-contact-send', 'contact-send');
			break;

		case 'forma-price-send':
			yaCounter13740904.reachGoal('forma-price-send');
			ga('send', 'event', 'forma-price-send', 'price-send');
			break;

		case 'forma-upprice-send':
			yaCounter13740904.reachGoal('forma-upprice-send');
			ga('send', 'event', 'forma-upprice-send', 'upprice-send');
			break;

		case 'forma-downprice-send':
			yaCounter13740904.reachGoal('forma-downprice-send');
			ga('send', 'event', 'forma-downprice-send', 'downprice-send');
			break;

		case 'zakaz-produkcuu-vizov':
			yaCounter13740904.reachGoal('zakaz-produkcuu-vizov');
			ga('send', 'event', 'zakaz-produkcuu-vizov', 'zprodukcuu-vizov');
			break;

		case 'zakaz-produkcuu-send':
			yaCounter13740904.reachGoal('zakaz-produkcuu-send');
			ga('send', 'event', 'zakaz-produkcuu-send', 'zprodukcuu-send');
			break;

		case 'faq-vizov':
			yaCounter13740904.reachGoal('faq-vizov');
			ga('send', 'event', 'faq-vizov', 'bfaq-vizov');
			break;

		case 'faq-send':
			yaCounter13740904.reachGoal('faq-send');
			ga('send', 'event', 'faq-send', 'bfaq-send');
			break;



	}
}




$(document).ready(function() {


	/* красивое появление картинок */
	function animAvatars(){
		function isScrolledIntoView(elem) {
			if ($(elem).length == 0) {
				return false;
			}
			var docViewTop = $(window).scrollTop();
			var docViewBottom = docViewTop + $(window).height();

			var elemTop = $(elem).offset().top;
			var elemBottom = elemTop + $(elem).height();
			var elemON = $(elem).is('.on');
			return (docViewBottom >= elemTop && docViewTop <= elemBottom && !elemON);
		}
		function isShow(ava) {
			var i = 0;
			$(ava).each(function() {
				var th = this;
				if(isScrolledIntoView(this)==true) {
					var isPrev = $(th).prev().hasClass("isShow");
					if(!isPrev) i=0;
					i+=1;
					setTimeout(function() { $(th).addClass('on'); }, 100*i);
				}
			});
		}
		isShow('.isShow');
		$(window).on('scroll', function(){ isShow('.isShow'); });
		$(window).on('resize', function(){ isShow('.isShow'); });
	}
	function isShowAdd(){
		$('.imgContent a').addClass('isShow');
		$('.subsect').addClass('isShow');
		$('.slider_h .image.medium').parent().addClass('isShow');
		$('.slider_v .item-inner').addClass('isShow');
		$('.preference .callback').addClass('isShow');
		/* $('.mainItem .xmedium').addClass('isShow'); */
	}
	$.when(isShowAdd()).then(function(){
		animAvatars();
	});






	/* прокрутка скрола до контекста */
	$("a").not(".showallcateg, .contacts a").click(function() {
		var url = document.location.href;
		url = url.replace('http://xn--80aleen8i.xn--p1ai','');
		url = url.replace('http://жалюзи.рф','');
		var link = $(this).attr('href');

		if (!$.cookie ('videl-j') && link=='/') var videl = 0;
		else if (!$.cookie ('videl-r') && link=='/rolstavni/') var videl = 0;
		else if (!$.cookie ('videl-v') && link=='/vorota/') var videl = 0;
		else videl = 1;

		if(url==link) {
			var sTop = $(".content_block").offset().top - 30;
			$('html,body').animate({ scrollTop: sTop }, 500);
			return false;
		} else if(videl==1) {
			$.cookie('sTop', 'content', {path: "/"});
		}
	});
	$(".catFilter select[name=group], .catFilter select[name=subGroups]").click(function() {
		$.cookie('sTop', 'catFilter', {path: "/"});
	});
	if($.cookie("sTop")=='content') {
		var sTop = $("a[name=top]").offset().top - 90;
		if(!$(this).scrollTop()) $(this).scrollTop(sTop);
		$.cookie('sTop', null, { expires: -1, path: "/" } );
	}
	else if($.cookie("sTop")=='catFilter') {
		var sTop = $(".catFilter").offset().top - 70;
		if(!$(this).scrollTop()) $(this).scrollTop(sTop);
		$.cookie('sTop', null, { expires: -1, path: "/" } );
	}




	$("div.box:not(.visible)").hide();
	$("ul.box li:not(.current)").live("click", function() {
		$(this).addClass('current').siblings().removeClass('current').parents('div.section').find('div.box').hide().eq($(this).index()).show();
	});


	BesplatnoeKino(0);

	$('.mini_flash img').hover(function() {
		$(this).attr('src', '/theme/img/mini_movie_hover.png');
	}, function() {
		$(this).attr('src', '/theme/img/mini_movie.png');
	});
	$('.mini_flash').click(function () { BesplatnoeKino(1); } );

	var prevHTML = '<a title="Назад"><span></span></a>',
	nextHTML = '<a title="Вперед"><span></span></a>';

	$.preloadImages = function() {
		for(var i = 0; i<arguments.length; i++) {
			$("<img>").attr("src", arguments[i]);
		}
	};
	$.preloadImages("/theme/img/header_text_icon_hover.gif", "/theme/img/topmenu_a1_bg.png", "/theme/img/topmenu_a2_bg.png", "/theme/img/topmenu_a3_bg.png", "/theme/img/topmenu_a4_bg.png", "/theme/img/topmenu_a5_bg.png");

	$('#search_string').click(function() {
		$(this).val("");
	});

	$('#search_string2').click(function() {
		$(this).val("");
	});



	$('.scroll').click(function() {
		$('html, body').animate({scrollTop: '0px'}, 'slow');
	});

	// expand/collapse handler
	$('.expand').click(function() {
		$(this).toggleClass('active').next('.collapsed_hide').slideToggle();
	});

	$('.opencontacts').hover(function() {
		$(this).next('.showcontacts').slideToggle('high');
	});



	function logo(data) {
		if(data=='on') {
			$('.nothover').stop(true, true).fadeOut(1000);
			$('.hover').stop(true, true).fadeIn(1000);
			$('#logo_img').stop(true, true).fadeIn(1000);
		} else {
			$('.nothover').stop(true, true).fadeIn(1000);
			$('.hover').stop(true, true).fadeOut(1000);
			$('#logo_img').stop(true, true).fadeOut(1000);
		}
	}
	$('#logo').hover(function() { logo('on'); }, function() { logo('off'); });
	logo('on'); setTimeout(function() { logo('off'); }, 1000); 

	

	/*
	$('#header div.text').hover(function() {
		$(this).css('backgroundImage', 'url(/theme/img/header_text_icon_hover.gif)');
	}, function() {
		$(this).css('backgroundImage', 'url(/theme/img/header_text_icon.gif)');
	});
	*/

	
	$('.filterItems').change(function(e){
		$('body').append('<img src="/theme/img/ajax_loader.gif" alt="идёт загрузка..." id="ajax_loader" style="position: fixed; top: 50%; left: 50%; margin: -16px 0 0 -16px; "/>');
		$('#listItems').ajaxSubmit(function(data) {
			$('#ajax_loader').remove();
			$('.vertical_catalog').html(data);
		});
	});

	$('.showallcateg').click(function() {
		if ($(this).next().next('.allcateg').is(':visible')) {
			$(this).next().next('.allcateg').slideUp('normal');
		} else {
			$('.allcateg:visible').slideUp('normal');
			$(this).next().next('.allcateg').slideToggle('normal', function() {
				$(this).find('.closeallcateg').css('display', 'block');
			});
		}
		return false;
	});

	$('.closeallcateg').click(function() {
		$(this).css('display', 'none');
		$('.allcateg:visible').slideUp('normal');
	});

	$('.jcarousel-next-vertical').dblclick(function() {
		return false;
	});

	$('#formazamerit').click(function() {
		$.get('/ajax/?loadform=1', function (data) {
			popup(data);
		});
		return false;
	});






	if($("input[name=phone]").length > 0) $("input[name=phone]").mask("+7 (999) 999-99-99");


	$("#loadform, .form_container, .callback").on("click", ".button", function() {
		var cb = $(this).parents('.form_front');
		var url = location.href;
		var name = cb.find("input[name=name]").val();
		var phone = cb.find("input[name=phone]").val();
		var email = cb.find("input[name=email]").val();
		var time = cb.find("input[name=time]").val();
		var msg = cb.find("textarea[name=msg]").val();
		var info = cb.find(".info").length > 0 ? cb.find(".info").html() : '';
		var form = cb.find("input[name=form]").val();
		$.post('/include/callback_save.php', { url: url, name: name, phone: phone, email: email, time: time, msg: msg, info: info, form: form }, function(r){
			var result = $.trim(r).split('||');
			if(result[0]=='OK') {
				popup(result[1]);
				cb.find(':input').not(':button, :submit, :reset, :hidden, :checkbox, :radio, :image').val('');

				counter(form);	//yaCounter, ga

			}
			else popup(r);
		});
		return false;
	});

	$('.callback_up').on("click", "a", function() {
		$.post('/include/callback_up.php', function (data) {
			popup(data);
		});
		return false;
	});

	$('.callback').on("click", "a[href=#callback]", function() {
		$.post('/include/callback_up.php', function (data) {
			popup(data);
		});
		return false;
	});

	$('.callback_buy').on("click", ".button", function() {
		var izdelie = $(this).val();
		var info = $(this).parents('.callback_buy').find('.info').html();
		$.post('/include/callback_buy.php', function (data) {
			popup(data, izdelie, info);
		});
		return false;
	});

	$('.callback_faq').on("click", ".button", function() {
		var izdelie = $(this).val();
		var info = $(this).parents('.callback_faq').find('.info').html();
		$.post('/include/callback_faq.php', function (data) {
            blog_popup(data, izdelie, info);
		});
		return false;
	});

	function popup(data, izdelie, info) {
		$('body').addClass('overflow_hidden');
		$('#loadform_overlay').css('display', 'block');
		$('#loadform').show().html('<div class="inner_bg_1"><div class="inner_bg_2 clearfix"><span class="close" title="Закрыть">Закрыть</span>'+data+'</div></div>').dialog({width:500, position:'center', closeText:'', close: function(){$('body').removeClass('overflow_hidden');$('#loadform_overlay').css('display', 'none');} });
		if(izdelie) {
			$('#loadform').find('.title').text(izdelie);
			$('#loadform').find('.button').val(izdelie);
		}
		if(info) $('#loadform').find('p').append(info);
		$('#loadform').find("input[name=phone]").mask("+7 (999) 999-99-99");
		$('.close').click(function(){
			$('#loadform').dialog('close');
			//$('#loadform_overlay').css('display', 'none');
		});
	}

	$(document).click(function(e) { 
		// Check for left button
		if (e.button == 0 && $('#loadform').is(':visible')) {
			$('#loadform').dialog('close');
			$('#loadform_overlay').css('display', 'none');
		}
	});

	$('#loadform').click(function(e) {
		e.stopPropagation();
	});

	$('.half').hover(function() {
		$(this).find('.icon img').css('marginTop', '-61px');
	}, function() {
		$(this).find('.icon img').css('marginTop', '0px');
	});

	$('#h_carousel, #h_carousel_certificates, #h_carousel_opinions').jcarousel({
		wrap: 'circular',
		scroll: 1,
		buttonPrevHTML: prevHTML,
		buttonNextHTML: nextHTML
	});	
	$('#v_carousel, #v_carousel_2, #v_carousel_3').jcarousel({
		wrap: 'circular',
		scroll: 1,
		vertical:true,
		buttonPrevHTML: prevHTML,
		buttonNextHTML: nextHTML
	});

	$carusel = $('#h_carousel');
	$gallery = $('.slider-h'); // находим нашу галерею
	galleryWidth = $gallery.width()

	$('.jcarousel-clip ul').mousewheel(function(event, delta) {
		if (delta > 0) {
			$(this).parent().parent().children('.jcarousel-prev-horizontal').click();
			$(this).parent().parent().children('.jcarousel-prev-vertical').click();
		} else {
			$(this).parent().parent().children('.jcarousel-next-horizontal').click();
			$(this).parent().parent().children('.jcarousel-next-vertical').click();
		}
		return false; // prevent default
	});






	function TimeString() {
		function declense(n,a) {
			x = '';
			if ((n%100 > 10) && (n%100<=20) || (n%10 >= 5) || (n%10 == 0)) x = a[2];
			else if ((n%10 == 1)) x = a[0];
			else x = a[1];
			return '<b>'+n+'</b> '+x;
		}
		d0 = new Date('March 18, 2002 11:00');
		dt = new Date();
		dt.setTime(dt.getTime() - d0.getTime());
		y_declension = new Array ('год','года','лет');
		m_declension = new Array ('месяц','месяца','месяцев');
		d_declension = new Array ('день','дня','дней');
		t = Math.floor(dt.getTime()/1000);

		return 'Нам '+declense(dt.getFullYear()-1970,y_declension)+', '+declense(dt.getMonth(),m_declension)+', '+declense(dt.getDate(),d_declension)+'<br>'+'<b>'+Math.floor(t%(24*3600)/3600)+'</b> ч. <b>'+Math.floor((t%3600)/60)+'</b> мин. <b>'+t%60+'</b> сек.'
	}
	$('#age').html(TimeString());
	setInterval(function(){$('#age').html(TimeString())}, 1000);



});



/*
function step(direct){
	var marginLeft = parseInt($carusel.css('marginLeft'));// текущее положение карусели
	var wdth = caruselWidth() - galleryWidth; // максимальная прокрутка влево
	if( direct > 0 ){
		// прокрутка влево
		// если текущая прокрутка + shag не превышает максимально допустимую
		if( wdth >= Math.abs(marginLeft)+shag ){
			// то просто прокручиваем на shag
			$carusel.stop().animate({'marginLeft':'-='+shag+'px'},speed)
			// иначе докручиваем до края, и все
		} else $carusel.stop().animate({'marginLeft':'-'+wdth+'px'},speed)
	} else {
		// аналогично для прокрутки вправо, но тут крутим до нуля
		if( 0 <= Math.abs(marginLeft)-shag ){
			$carusel.stop().animate({'marginLeft':'+='+shag+'px'},speed)
		}else $carusel.stop().animate({'marginLeft':'0px'},speed)
	}
}
*/




function initFromFlash(time) {
	var expdays = 3;
	if ($('#movieContainerJaluzi').length>0) $.cookie ('videl-j','1',{expires:expdays, path: "/"});
	if ($('#movieContainerRolstavni').length>0) $.cookie ('videl-r','1',{expires:expdays, path: "/"});
	if ($('#movieContainerVorota').length>0) $.cookie ('videl-v','1',{expires:expdays, path: "/"});
	var timeout = 2500;
	if (time) {
		timeout = time;
	}
	setTimeout ( function() {
		$('#movie').hide();
		$('#movie div div').html('');
		$('.mini_flash').show(); 
	}, timeout); 
}


(function($) {
	$(function() {
		var menuRight = document.getElementById( 'cbp-spmenu-s2' ),
	      showRightPush = document.getElementById( 'showRightPush' ),
	      body = document.body;

	    showRightPush.onclick = function() {
	      classie.toggle( this, 'active' );
	      classie.toggle( body, 'cbp-spmenu-push-toleft' );
	      classie.toggle( menuRight, 'cbp-spmenu-open' );
	      disableOther( 'showRightPush' );
	    };

	    function disableOther( button ) {
	      if( button !== 'showRightPush' ) {
	        classie.toggle( showRightPush, 'disabled' );
	      }
	    }

	    $('#cbp-spmenu-s2 .callback_up a').on('click', function() {
			$('#cbp-spmenu-s2').removeClass('cbp-spmenu-open');
			$('body').removeClass('cbp-spmenu-push-toleft');
		});


	    $('.swipe-fix').on('click', '.slick-track.no-click .slick-slide', function() {
	    	return false;
	    });

		$('.swipe-fix').on('beforeChange', function(){
		   	$('.swipe-fix .slick-track').addClass('no-click');
		});

		$('.swipe-fix').on('afterChange', function(){
			$('.swipe-fix .slick-track').removeClass('no-click');
		});

		$('.slick-cariousel').slick({
			infinite: true,
		    speed: 300,
			slidesToShow: 9,
			slidesToScroll: 9,
			touchThreshold: 100,
			responsive: [
				{
			      breakpoint: 992,
			      settings: {
			        slidesToShow: 7,
			        slidesToScroll: 7
			      }
			    },
			    {
			      breakpoint: 768,
			      settings: {
			        slidesToShow: 6,
			        slidesToScroll: 6
			      }
			    },
			    {
			      breakpoint: 620,
			      settings: {
			        slidesToShow: 5,
			        slidesToScroll: 5
			      }
			    },
			    {
			      breakpoint: 480,
			      settings: {
			        slidesToShow: 3,
			        slidesToScroll: 3
			      }
			    },
			    {
			      breakpoint: 320,
			      settings: {
			        slidesToShow: 2,
			        slidesToScroll: 2
			      }
			    }
			]
		});

		$('.slick-cariousel-1').slick({
			infinite: true,
		    speed: 300,
			slidesToShow: 6,
			slidesToScroll: 6,
			touchThreshold: 100,
			responsive: [
				{
			      breakpoint: 992,
			      settings: {
			        slidesToShow: 4,
			        slidesToScroll: 4
			      }
			    },
			    {
			      breakpoint: 768,
			      settings: {
			        slidesToShow: 3,
			        slidesToScroll: 3
			      }
			    },
			    {
			      breakpoint: 620,
			      settings: {
			        slidesToShow: 2,
			        slidesToScroll: 2
			      }
			    },
			    {
			      breakpoint: 480,
			      settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1
			      }
			    },
			    {
			      breakpoint: 320,
			      settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1
			      }
			    }
			]
		});

		$('.slick-cariousel-2').slick({
			infinite: true,
		    speed: 300,
			slidesToShow: 5,
			slidesToScroll: 5,
			touchThreshold: 100,
			responsive: [
				{
			      breakpoint: 992,
			      settings: {
			        slidesToShow: 3,
			        slidesToScroll: 3
			      }
			    },
			    {
			      breakpoint: 768,
			      settings: {
			        slidesToShow: 3,
			        slidesToScroll: 3
			      }
			    },
			    {
			      breakpoint: 620,
			      settings: {
			        slidesToShow: 2,
			        slidesToScroll: 2
			      }
			    },
			    {
			      breakpoint: 480,
			      settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1
			      }
			    },
			    {
			      breakpoint: 320,
			      settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1
			      }
			    }
			]
		});

		$('.slick-cariousel-3').slick({
			infinite: true,
		    speed: 300,
			slidesToShow: 2,
			slidesToScroll: 2,
			touchThreshold: 100,
			responsive: [
				{
			      breakpoint: 992,
			      settings: {
			        slidesToShow: 2,
			        slidesToScroll: 2
			      }
			    },
			    {
			      breakpoint: 768,
			      settings: {
			        slidesToShow: 2,
			        slidesToScroll: 2
			      }
			    },
			    {
			      breakpoint: 620,
			      settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1
			      }
			    },
			    {
			      breakpoint: 480,
			      settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1
			      }
			    },
			    {
			      breakpoint: 320,
			      settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1
			      }
			    }
			]
		});
	})
})(jQuery);


var myScroll;

function loaded () {
  myScroll = new IScroll('#cbp-spmenu-s2', {
    scrollbars: true,
    mouseWheel: true,
    interactiveScrollbars: true,
    shrinkScrollbars: 'scale',
    fadeScrollbars: true,
    click: true
  });
}



$(document).on('touchmove', function(e){
  if($('body').is('.cbp-spmenu-push-toleft'))
  e.preventDefault();
});



function jivo_onOpen(){
	var php_ses = $.cookie ('PHPSESSID');
	var utm_izd = $.cookie ('utm_izd');
	var phone = $('.phone').first().text();
	var jivoUserToken = 'PHPSESSID:'+php_ses+';utm_izd:'+utm_izd+';phone:'+phone;
	jivo_api.setUserToken(jivoUserToken);
}