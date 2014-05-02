$(document).ready(function() {
  $('.logo').delay(3000).fadeIn();
  $('.wallpaper').delay(4000).fadeOut();
  $('.logo').delay(5000).fadeOut();
  $('.throw').delay(9000).fadeIn();
  $('.strike').delay(10000).fadeIn();
  $('.jump').delay(11000).fadeIn();
  $('.button').delay(12000).fadeIn();
  $('body').keydown(function(event) {
  if(event.keyCode==88) {
    $('.ryu-still').hide();
    $('.ryu-ready').hide();
    $('.ryu-throwing').hide();
    $('.ryu-cool').show();
  }
})
    $('body').keyup(function(event) {
        if (event.keyCode == 88) {
            $('.ryu-cool').hide();
            $('.ryu-ready').hide();
            $('.ryu-throwing').hide();
            $('.ryu-still').show();
        }
    })
  $('.ryu').mouseenter(function() {
    $('.ryu-still').hide();
    $('.ryu-ready').show();
  })
  .mouseleave(function() {
    $('.ryu-ready').hide();
    $('.ryu-still').show();
  })

  .mousedown(function() {
    playHadouken();
    $('.ryu-ready').hide();
    $('.ryu-throwing').show();
    $('.hadouken').show();
   $('.hadouken').finish().show()
  .animate(
    {'left': '300px'},
    500,
    function() {
      $(this).hide();
      $(this).css('left', '-212px');
    }
  );
  })
  .mouseup(function() {
    $('.ryu-throwing').hide();
    $('.ryu-ready').show();
  });
});


function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}

