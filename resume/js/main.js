jQuery(function($){
			    
    new WOW().init();
    
    var swiper = new Swiper("#key_job", {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        loop:true,
    });
    
    var jobSwiper = new Swiper("#key_page", {
        direction: "vertical",
        onInit: function(swiper){
        	swiperAnimateCache(swiper); 
        	swiperAnimate(swiper); 
      	}, 
      	onSlideChangeEnd: function(swiper){ 
        	swiperAnimate(swiper); 
      	},
      	watchSlidesProgress: true,
        onProgress: function(swiper){
          for (var i = 0; i < swiper.slides.length; i++){
            var slide = swiper.slides[i];
            var progress = slide.progress;
            var translate = progress*swiper.height/4;  
  		  	scale = 1 - Math.min(Math.abs(progress * 0.5), 1);
            var opacity = 1 - Math.min(Math.abs(progress/2),0.5);
            slide.style.opacity = opacity;
  		  	es = slide.style;
  		  	es.webkitTransform = es.MsTransform = es.msTransform = es.MozTransform = es.OTransform = es.transform = 'translate3d(0,'+translate+'px,-'+translate+'px) scaleY(' + scale + ')';
          }
        },
  	   	onSetTransition: function(swiper, speed) {
          for (var i = 0; i < swiper.slides.length; i++){
            es = swiper.slides[i].style;
  		  	es.webkitTransitionDuration = es.MsTransitionDuration = es.msTransitionDuration = es.MozTransitionDuration = es.OTransitionDuration = es.transitionDuration = speed + 'ms';
          }
        },
    });
    
    $(".key_page_to").click(function(){
        jobSwiper.slideTo($(this).attr("data-slide"), 300, false);
        $(".active-menu").removeClass("active-menu");
        $(this).addClass("active-menu");
    })
    
    $("#key_music").click(function(){
        $(this).toggleClass("off");
        $(this).toggleClass("rotate-music");
        if($(this).hasClass("off")){
            document.getElementById("key_audio").pause();
        }else{
            document.getElementById("key_audio").play();
        }
    });
    
	$(".key_slide_forward").click(function(){
    	var swiperIndex = $(this).attr("data-index");
    	console.info(swiperIndex);
		jobSwiper.slideTo(swiperIndex, 1000, false);//切换到第一个slide，速度为1秒
	})
    
});