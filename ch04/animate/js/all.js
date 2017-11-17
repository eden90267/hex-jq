$.fn.extend({
    animateCss: function (animationName, callback) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
            if (callback) {
              callback();
            }
        });
        return this;
    }
});

$(document).ready(function() {
  $('.open').click(function(event) {
    /* Act on the event */
    $('.box').animateCss('bounceInLeft', function() {
      $('.box').removeClass('bounceInLeft');
    });
  });
});