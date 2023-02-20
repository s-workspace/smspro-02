$(function (){

   // 배너 이벤트
   var swiper = new Swiper(".banner", {
      slidesPerView: 'auto',
      parallax: true,
      speed: 1000,
       autoplay: {
          delay: 6000,
          disableOnInteraction: false,
       },
       pagination: {
        el: ".swiper-pagination",
        clickable: true,
      }
    });
    // 배너 이벤트 끝

   //  서비스 안내
   var swiper = new Swiper(".msg_kind_wrap", {
      slidesPerView: 1,
      spaceBetween: 100,
      speed: 1000,
      autoplay: {
         delay: 6000,
         disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
    //  서비스 안내 끝
      
  // 체험하기
  $('.inner_close span').click(function(){
     $('.inner').slideUp();
  });
  // 체험하기 끝

  // 체험하기 일주일 닫기
  $('#week').click(function(){
      dateClose();
   });

   $(document).ready(function() {
      cookiedata = document.cookie; 
   
      if ( cookiedata.indexOf("dateSetClose=done") < 0) $('.modal_wrap').show();
      else {
         $('.inner').hide();
      }
   });

   function setCookie(name, value, expiredays) { 
      var todayDate = new Date(); 
      todayDate.setDate(todayDate.getDate() + expiredays);
      document.cookie = name + "=" + escape( value ) + "; path=/; expires=" + todayDate.toGMTString() + ";"
   }

   function dateClose() { 
      setCookie( "dateSetClose", "done", 7);
      $('.inner').hide();
   }

  // Scroll Top
  $(".move_top").click(function(){
     $('html, body').animate({ scrollTop: $("body").offset().top }, 300);
  });
  // Scroll Top 끝

  // 네비 이벤트
  var offsetTop = $('.nav').offset().top;
  

  $(window).scroll(function(){
     var scrollTop = 0;
     var s1Top = $('#s1').offset().top -60;
     var s2Top = $('#s2').offset().top -60;
     var s3Top = $('#s3').offset().top -60;
     var s4Top = $('#s4').offset().top -60;

     scrollTop = $(window).scrollTop();

     if (scrollTop > offsetTop) $(".header").addClass('on');
     else $(".header").removeClass('on');

     if(scrollTop > s1Top) {
        $('.nav li').eq(0).addClass('this');
        $('.nav li').eq(0).siblings().removeClass('this');
     }
     else $('.nav li').removeClass('this');

     if(scrollTop > s2Top) {
        $('.nav li').eq(1).addClass('this');
        $('.nav li').eq(1).siblings().removeClass('this');
     } 
     if(scrollTop > s3Top) {
        $('.nav li').eq(2).addClass('this');
        $('.nav li').eq(2).siblings().removeClass('this');
     } 
     if(scrollTop > s4Top) {
        $('.nav li').eq(3).addClass('this');
        $('.nav li').eq(3).siblings().removeClass('this');
     } 
  });

  $('.tag').click(function(e){
     e.preventDefault();
     $(".nav").addClass('on');
     var scrollTop = 0;
     var offsetTop = $('.section').offset().top - 60;
     scrollTop = $(window).scrollTop();
     if(scrollTop > offsetTop) $('html,body').animate({scrollTop:$(this.hash).offset().top - 40}, 500);
     else $('html,body').animate({scrollTop:$(this.hash).offset().top - 120}, 500);
  });
  // 네비 이벤트 끝

  // 스크롤 이벤트
  var amount = $('.active').length;
  var obj = {};

  for (var i = 0; i < amount; i++) {
     obj['active_'+ i] = $('.active').eq(i).offset().top - 800;
  }

  $(window).on('scroll', function() {
     var scroll = $(window).scrollTop();
     
     for (var i = 0; i < amount; i++) {
        if (scroll > obj['active_' + i]) {
           $('.active').eq(i).addClass('on');
        }
     }
  });

  var d_amount = $('.d_active').length;
  var d_obj = {};

  for (var i = 0; i < d_amount; i++) {
     d_obj['d_active_'+ i] = $('.d_active').eq(i).offset().top - 1300;
  }

  $(window).on('scroll', function() {
     var scroll = $(window).scrollTop();
     
     for (var i = 0; i < d_amount; i++) {
        if (scroll > d_obj['d_active_' + i]) {
           $('.d_active').eq(i).addClass('on');
        }
     }
  });
  // 스크롤 이벤트 끝

  // RCS 미리보기
  var swiper = new Swiper(".phone_wrap", {
    speed: 1000,
     autoplay: {
        delay: 6000,
        disableOnInteraction: false,
     },
    effect: "creative",
    creativeEffect: {
      prev: {
        translate: ["-120%", 0, -500],
      },
      next: {
        translate: ["120%", 0, -500],
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  // RCS 미리보기 끝
});