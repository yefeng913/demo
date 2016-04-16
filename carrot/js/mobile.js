$(function(){
    var page_container_swiper = new Swiper("#key_page_container", {
        pagination: "#key_page_paginatin",
        direction: 'vertical',
        slidesPerView: 1,
        mousewheelControl: true,
        noSwiping : true,
        noSwipingClass : 'stop-container-swiping',
        onInit: function(swiper){
            swiperAnimateCache(swiper); 
            swiperAnimate(swiper); 
        }, 
        onSlideChangeEnd: function(swiper){ 
            swiperAnimate(swiper); 
        } 
    });

    var page_index_swiper = new Swiper("#key_page_title", {
        pagination: "#key_pageTitle_pagination",
        loop:true,
    });

    var page_advantage_swiper = new Swiper("#key_page_advantage", {
        effect : 'fade',
        direction: 'vertical',
        noSwiping : true,
        noSwipingClass : 'stop-swiping',
    });
    
    $(".key_advantage_return").click(function(){
        page_advantage_swiper.slideTo(0, 300, false);
    })
    
    $(".key_advantage_to").click(function(){
        var index = $(this).attr("data-slide");
        page_advantage_swiper.slideTo(index, 300, false);
    })

    var page_policy_swiper = new Swiper("#key_page_policy", {
        effect : 'fade',
        direction: 'vertical',
        noSwiping : true,
        noSwipingClass : 'stop-swiping',
    });
    
    var page_dg_swiper = new Swiper("#key_page_dg", {
        pagination: "#key_pageDg_pagination",
        loop:true,
    });
    
    $(".key_policy_to").click(function(event){
        var index = $(this).attr("data-slide");
        page_policy_swiper.slideTo(index, 300, false);
    })
    
    $(".policy-list li").click(function(){
        if($(this).children("span").hasClass("choose-policy")){
            $(".policy-show").removeClass("policy-show");
            $(".choose-policy").removeClass("choose-policy");
            return;
        }
        $(".policy-show").removeClass("policy-show");
        $(".choose-policy").removeClass("choose-policy");
        $(this).children("span").toggleClass("choose-policy");
        $(this).children(".policy-detail").toggleClass("policy-show");
    });
    
    $("#key_page_advantage").on("swipeRight",function(){
        page_advantage_swiper.slideTo(0, 100, false);
    });
    
    $("#key_page_policy").on("swipeRight",function(){
        page_policy_swiper.slideTo(0, 100, false);
    });
    
    $(".key_page_swiper").on("swipeUp",function(){
        page_container_swiper.slideNext();
    });
    
    $(".key_page_swiper").on("swipeDown",function(){
        page_container_swiper.slidePrev();
    });
    
    $(".key_advantage_swiper").on("swipeUp",function(){
        page_advantage_swiper.slideNext();
    });
    
    $(".key_advantage_swiper").on("swipeDown",function(){
        page_advantage_swiper.slidePrev();
    });
    
    $(".key_policy_swiper").on("swipeUp",function(){
        page_policy_swiper.slideNext();
    });
    
    $(".key_policy_swiper").on("swipeDown",function(){
        page_policy_swiper.slidePrev();
    });
    
});