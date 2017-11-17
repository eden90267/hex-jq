$(document).ready(function() {
  $('.start').click(function(event) {
    /* Act on the event */
    $('.box').stop().slideToggle(3000); // 這樣就可以中斷動畫，在往下作另外的動畫效果
  });
});