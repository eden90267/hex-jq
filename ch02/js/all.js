$(document).ready(function () { // 瀏覽器載入好 jQuery，就執行裡面程式碼

  // 這是標題的事件
  $('.button').click(function(event) {
    $('.title1').toggle();
  });

  // 這是次標題的事件
  $('.button2').click(function(event) {
    $('.title2').toggle();
  });


});