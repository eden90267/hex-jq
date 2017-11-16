$(document).ready(function() {
  
  $('.button').click(function(event) {
    // 滑動效果 (dynamic height)
    // $('.text').slideToggle(2000);

    // 淡入淡出效果 (dynamic opacity)
    // $('.text').fadeToggle(2000); 
    // fadeIn  隱藏東西開啟
    // fadeOut 開啟東西隱藏

    // 自訂
    $('.text').toggleClass('active');
    // addClass
    // removeClass
  });

});