$(function() {

  var musicNotPlayed = true;
  var playMusic = function () {
    $('.music-cover').removeClass('pause');
    $('#music')[0].play();
  };

  var pauseMusic = function () {
    $('.music-cover').addClass('pause');
    $('#music')[0].pause();
  };

  $sectionNumber = $('.full-page .section').length;
  $('.full-page').fullpage({
    controlArrows: true,
    onLeave: function(index, nextIndex, direction) {
      if (nextIndex == $sectionNumber) {
        $('.screen-arrowBox').hide();
      } else {
        $('.screen-arrowBox').show();
      }
      if (nextIndex == 2 && musicNotPlayed) {
        playMusic();
        musicNotPlayed = false;
      }
      return true;
    }
  });

  $('.player').tap(function (e) {
    if (music.paused && music.currentTime > 0) {
      playMusic();
    } else {
      pauseMusic();
    }
  })

  var $movieInfo = $('.movie-info');
  var $nav = $('.nav');
  var $dots = $('.dots');
  var height = $movieInfo.outerHeight();

  setTimeout(function () {
    $movieInfo.css('bottom', '0px');
    $nav.css('top', '5px');
    $dots.css('top', '5px');
  }, 500)

  $('body').tap(function (e) {
    if (parseInt($movieInfo.css('bottom')) == 0) {
      $movieInfo.css('bottom', '-' + height + 'px');
      $nav.css('top', '-20px');
      $dots.css('top', '-20px');
    } else {
      $movieInfo.css('bottom', '0px');
      $nav.css('top', '5px');
      $dots.css('top', '5px');
    }
  }).doubletap(function (e) {
    e.preventDefault();
  }).scrollstart(function (e) {
    e.preventDefault();
  });

  $(".swipe-show").swipeshow({
    autostart: false,
    interval: 4000,
    speed: 700,
    friction: 0.3,
    $dots: $('div.dots')
  });

  $('.video a').click(function (e) {
    $('.video img').hide();
    $('.video a').hide();
    $('.video video').show()[0].play();
    pauseMusic();
    e.preventDefault();
  });

});

$(window).load(function () {
  $('#loader-wrapper').remove();
});
