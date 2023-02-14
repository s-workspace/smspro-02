$(function(){

   // 제목 입력
   $('#msg_tit_input').on('keyup keydown', function(){
      var msgTitle = $(this).val();
      $('.msg_title').html(msgTitle);
    });

   // 글자수 세기
   $("#text_box").on('keyup keydown', function (e) {
      var totalByte = 0;
      var textLength = $(this).val();
      var saveText = "";

      for (var i = 0 ; i < textLength.length; i++) {
         var currentByte = textLength.charCodeAt(i);
         if (escape(currentByte).length >= 4) totalByte += 2;
         else totalByte++;

         if (totalByte <= 2000) saveText += textLength.charAt(i);
      }
      textLength = totalByte;

      if(textLength >= 90) {
      $('.msg_write .msg_text').removeClass("sms");
      $('.msg_write .msg_text').addClass("lms");
      $('.msg_write .msg_text.lms .t_byte > span').html('/2000Byte');
      $('.msg_title').addClass('on');
      } else {
         $('.msg_write .msg_text').removeClass("lms");
         $('.msg_write .msg_text').addClass("sms");
         $('.msg_write .t_byte > span').html('/90Byte');
         $('.msg_write .msg_text.mms .t_byte > span').html('/2000Byte');
         $('.msg_title').removeClass('on');
      }
      if (textLength > 2000) {
         alert("2,000Byte 이상 작성하실 수 없습니다.");
         $(this).val(saveText);
      }
      else {
         $('.msg_write .t_byte > b').html(textLength);
      }
   });

   function byte() {
      var textLength = $('#text_box').val();
      var totalByte = 0;
      var saveText = "";

      for (var i = 0 ; i < textLength.length; i++) {
      var currentByte = textLength.charCodeAt(i);
      if (escape(currentByte).length >= 4) totalByte += 2;
      else totalByte++;

      if (totalByte <= 2000) saveText += textLength.charAt(i);

      if (totalByte > 2000) {
         alert("2,000Byte 이상 작성하실 수 없습니다.");
         $(this).val(saveText);
         }
      }
      textLength = totalByte;
      $('.msg_write .t_byte > b').html(textLength);
   }

   // 특수문자 레이어
   $('.sh_btn').click(function(e){
      e.preventDefault();
      var top = $(this).offset().top + 45;
      $(this).toggleClass('on');
      $(this).parents('.btn_box li').siblings().find('.action_btn').removeClass('on');
      $('.return_write').find('.action_btn').removeClass('on');
      $('.sh_layer01').siblings('.dlayer').hide();
      $('.sh_layer01').toggle();
      $('.sh_layer01').css('top',top);
   });

   $('.sh_layer01 li').click(function(){
      var sh = $(this).html();
      var textLength = $('#text_box').val();
      
      $('#text_box').val(textLength + sh);
      $('.msg_view_text > span').html(textLength + sh);
      byte();
   });

   // 변수 레이어
   $('.variable_btn').click(function(e){
      e.preventDefault();
      var top = $(this).offset().top + 45;
      $(this).toggleClass('on');
      $(this).parents('.btn_box li').siblings().find('.action_btn').removeClass('on');
      $('.return_write').find('.action_btn').removeClass('on');
      $('.variable_layer01').siblings('.dlayer').hide();
      $('.variable_layer01').toggle();
      $('.variable_layer01').css('top',top);
   });

   $('.variable_layer01 li').click(function(){
      var variable = $(this).html();
      var textLength = $('#text_box').val();
      
      $('#text_box').val(textLength + variable);
      $('.msg_view_text > span').html(textLength + variable); 
      byte();
   });
})