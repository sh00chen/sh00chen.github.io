$(document).ready(function() {
// alert("[Are you ready to catch Nian?]");
$("#rectangle1").draggable();
$("#video").draggable();
          $("#fire").click(function(){
            $("#fire_gif").show();
          });
          $("#learn").click(function(){
            $("#video").show();
             $("#video")[0].play()
          });
          $("#red").click(function(){
            $(this).css("background","red");
          });
          $("#noises").click(function(){
            $("#bianpao")[0].play();
          });



})
