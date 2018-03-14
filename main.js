$(document).ready(function(){

  var audio = $("audio#picsound")[0];
  $(".pikpic").click(function() {
    audio.play();
  });

});
