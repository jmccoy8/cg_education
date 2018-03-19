$(document).ready(function(){

  let audio = $("audio#picsound")[0];
  $(".pikpic").click(function() {
    audio.play();
  });

  $("#char").click(function(){
    alert("Congratulations! Take care of Charmander");
  });

  $("#squir").click(function(){
    alert("Congratulations! Take care of Squirtle");
  });

  $("#bul").click(function(){
    alert("Congratulations! Take care of Bulbasaur");
  });
});
