jQuery(function(){
    $(".key-baner-img").css({
        width:$(window).width(),
        height:$(window).height()
    });
    $(".swiper-container,.swiper-slide").css({
        height: $(window).height()
    });
    $("#key_swiper_news").css({
        height: 250
    });
    
    setTimeout(function(){
        $(".invisible").removeClass("invisible");
    },300);
   
    $("img.lazy").lazyload({
        threshold : 500,
        effect : "fadeIn"
    });
    $("div.lazy").lazyload({
        threshold : 500,
        effect : "fadeIn"
    });
        
    $("#key_full_page").fullpage({
       anchors: ["A", "B", "C", "D"],
     /*anchors: ["A", "B", "C","D","E"],*/
        menu: "#key_menu",
  //      autoScrolling: false,
        scrollBar: true
    });

    var img_swiper = new Swiper("#key_swiper_img", {
        autoplay: 6000,
        loop: true,
        speed:800,
        progress:true,
        onProgressChange: function(swiper){
          for (var i = 0; i < swiper.slides.length; i++){
            var slide = swiper.slides[i];
            var progress = slide.progress;
            var translate = progress*swiper.width;  
            var opacity = 1 - Math.min(Math.abs(progress),1);
            slide.style.opacity = opacity;
            swiper.setTransform(slide,"translate3d("+translate+"px,0,0)");
          }
        },
        onTouchStart:function(swiper){
          for (var i = 0; i < swiper.slides.length; i++){
            swiper.setTransition(swiper.slides[i], 0);
          }
        },
        onSetWrapperTransition: function(swiper, speed) {
          for (var i = 0; i < swiper.slides.length; i++){
            swiper.setTransition(swiper.slides[i], speed);
          }
        }
    });
    var dg_swiper = new Swiper("#key_dg_img", {
        autoplay: 6000,
        loop: true,
        speed:800,
    });
    $("#key_dg_left").on('click', function(e){
        e.preventDefault()
        dg_swiper.swipePrev()
    })
    $("#key_dg_right").on('click', function(e){
        e.preventDefault()
        dg_swiper.swipeNext()
    })
    
    var title_swiper = new Swiper("#key_swiper_title", {
        autoplay: 8000,
        loop: true,
        speed:800,
        progress:true,
        onProgressChange: function(swiper){
          for (var i = 0; i < swiper.slides.length; i++){
            var slide = swiper.slides[i];
            var progress = slide.progress;
            var scale, translate, opacity;
            if (progress<=0) {
              opacity = 1 - Math.min(Math.abs(progress),1);
              scale = 1 - Math.min(Math.abs(progress/2),1);
              translate = progress*swiper.width;  
            }
            else {
              opacity = 1 - Math.min(Math.abs(progress/2),1);
              scale=1;
              translate=0; 
            }
            slide.style.opacity = opacity;
            swiper.setTransform(slide,'translate3d('+(translate)+'px,0,0) scale('+scale+')');
          }
        },
        onTouchStart:function(swiper){
          for (var i = 0; i < swiper.slides.length; i++){
            swiper.setTransition(swiper.slides[i], 0);
          }
        },
        onSetWrapperTransition: function(swiper, speed) {
          for (var i = 0; i < swiper.slides.length; i++){
            swiper.setTransition(swiper.slides[i], speed);
          }
        }
    });
    
    $("#key_title_left").on('click', function(e){
        e.preventDefault()
        title_swiper.swipePrev()
    })
    $("#key_title_right").on('click', function(e){
        e.preventDefault()
        title_swiper.swipeNext()
    })
    
    for (var i = 0; i < title_swiper.slides.length; i++){
        title_swiper.slides[i].style.zIndex = title_swiper.slides.length - i;
    }

    var advantage_swiper = new Swiper("#key_swiper_advantage", {
        pagination: '.pagination',
        paginationClickable: true,
        progress:true,
        onProgressChange: function(swiper){
          for (var i = 0; i < swiper.slides.length; i++){
            var slide = swiper.slides[i];
            var progress = slide.progress;
            var translate = progress*swiper.width;  
            var opacity = 1 - Math.min(Math.abs(progress),1);
            slide.style.opacity = opacity;
            swiper.setTransform(slide,'translate3d('+translate+'px,0,0)');
          }
        },
        onTouchStart:function(swiper){
          for (var i = 0; i < swiper.slides.length; i++){
            swiper.setTransition(swiper.slides[i], 0);
          }
        },
        onSetWrapperTransition: function(swiper, speed) {
          for (var i = 0; i < swiper.slides.length; i++){
            swiper.setTransition(swiper.slides[i], speed);
          }
        },
        onSlideChangeEnd:function(swiper){
            if(advantage_swiper.activeIndex == 0)
                advantage_swiper.slides[0].style.zIndex = advantage_swiper.slides.length;
        }
    });
    
    for (var i = 0; i < advantage_swiper.slides.length; i++){
        advantage_swiper.slides[i].style.zIndex = advantage_swiper.slides.length - i;
    }
    
    $(".key_advantage_to").click(function(){
        var slide = $(this).attr("data-slide");
        if(slide == 0){
            advantage_swiper.slides[0].style.zIndex = advantage_swiper.slides.length;
        }else{
            advantage_swiper.slides[0].style.zIndex = -1;
        }
        advantage_swiper.swipeTo(slide,400,false);
    });
    
    var plicy_swiper = new Swiper("#key_swiper_policy", {
        pagination: '.policy-paginatino',
        paginationClickable: true,
        progress:true,
        onProgressChange: function(swiper){
          for (var i = 0; i < swiper.slides.length; i++){
            var slide = swiper.slides[i];
            var progress = slide.progress;
            var translate = progress*swiper.width;  
            var opacity = 1 - Math.min(Math.abs(progress),1);
            slide.style.opacity = opacity;
            swiper.setTransform(slide,'translate3d('+translate+'px,0,0)');
          }
        },
        onTouchStart:function(swiper){
          for (var i = 0; i < swiper.slides.length; i++){
            swiper.setTransition(swiper.slides[i], 0);
          }
        },
        onSetWrapperTransition: function(swiper, speed) {
          for (var i = 0; i < swiper.slides.length; i++){
            swiper.setTransition(swiper.slides[i], speed);
          }
        },
        onSlideChangeStart:function(swiper){
            if(plicy_swiper.activeIndex > 0)
                $("#key_policy_menu").fadeIn();
            else{
                $("#key_policy_menu").hide();
            }
        },
        onSlideChangeEnd:function(swiper){
            if(plicy_swiper.activeIndex == 0)
                plicy_swiper.slides[0].style.zIndex = plicy_swiper.slides.length;
            $(".policy-menu-active").removeClass("policy-menu-active");
            $(".sub-policy-menu li[data-slide='"+plicy_swiper.activeIndex+"']").addClass("policy-menu-active");
        }
    });
    
    for (var i = 0; i < plicy_swiper.slides.length; i++){
        plicy_swiper.slides[i].style.zIndex = plicy_swiper.slides.length - i;
    }
    
    $(".key_policy_to").click(function(){
        var slide = $(this).attr("data-slide");
        $(".policy-menu-active").removeClass("policy-menu-active");
        if($(this).is(".sub-policy-menu li")){
            if($(this).hasClass("policy-menu-active"))
                return;
        }
        $(".sub-policy-menu li[data-slide='"+slide+"']").addClass("policy-menu-active");
        if(slide == 0){
            $("#key_policy_menu").hide();
            plicy_swiper.slides[0].style.zIndex = plicy_swiper.slides.length;
        }else{
            $("#key_policy_menu").fadeIn();
            plicy_swiper.slides[0].style.zIndex = -1;
        }
        setTimeout(function(){
            plicy_swiper.swipeTo(slide,100,false);
        },100);
    });
    
    var news_swiper = new Swiper("#key_swiper_news", {
        loop:true,
        paginationClickable: true,
        slidesPerView: 3,
        autoplay: 10000
    });
    $("#key_news_next").on("click", function(e){
        e.preventDefault()
        news_swiper.swipePrev()
    })
    $("#key_news_prev").on("click", function(e){
        e.preventDefault()
        news_swiper.swipeNext()
    })

    $(document).scroll(function(){
        if (($(document).scrollTop()+20)>=$(window).height()) {
            $("#key_menu").addClass("menu-active");
        }else{
            $("#key_menu").removeClass("menu-active");
        }
    });

    $(".key_view_news").click(function(){
        var newsId = $(this).attr("data-id");
        $.ajax({
            type: "GET",
            url: "index/readNews?newsId="+newsId,
            dataType: "json",
            success:function(news){
                $("#gridSystemModalLabel").html("<strong>"+news.title+"</strong>");
                $("#key_news_date").html("发表时间："+news.newsDt);
                $("#key_news_content").html(news.content);
            }
        });
    });
    
});

setTimeout("loadImg()",3000);
function loadImg(){
    $(".lazy-img").each(function(i){
        $(this).attr("src",$(this).attr("data-src"))
    });
} 