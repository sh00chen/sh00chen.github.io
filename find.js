$(document).ready(function() {
// alert("[Are you ready to catch Nian?]");
$("#rectangle1").draggable();
$("#video").draggable();
          // $("#find_me10").hover(function(){
          //   $("#maybe").show();
          // });
          $("#find_me10").click(function(){
            $(this).hide();
            $("#find_me1").hide();
            $("#find_me2").hide();
            $("#find_me3").hide();
            $("#find_me4").hide();
            $("#find_me5").hide();
            $("#find_me6").hide();
            $("#find_me7").hide();
            $("#find_me8").hide();
            $("#find_me9").hide();
            $("#no1").hide();
            $("#no2").hide();
            $("#no3").hide();
            $("#no4").hide();
            $("#no5").hide();
            $("#no6").hide();
            $("#no7").hide();
            $("#no8").hide();
            $("#no9").hide();
            $("#yes").show();
            $("#maybe").hide();
            $("#game_title").hide();

          });

          $("#find_me1").click(function(){
            $(this).hide();
            $("#no1").show();
          });

          $("#find_me2").click(function(){
            $(this).hide();
            $("#no2").show();
          });

          $("#find_me3").click(function(){
            $(this).hide();
            $("#no3").show();
          });

          $("#find_me4").click(function(){
            $(this).hide();
            $("#no4").show();
          });

          $("#find_me5").click(function(){
            $(this).hide();
            $("#no5").show();
          });

          $("#find_me6").click(function(){
            $(this).hide();
            $("#no6").show();
          });

          $("#find_me7").hover(function(){
            $(this).hide();
            $("#no7").show();
          });

          $("#find_me8").click(function(){
            $(this).hide();
            $("#no8").show();
          });

          $("#find_me9").click(function(){
            $(this).hide();
            $("#no9").show();
          });

          $("#red").click(function(){
          $("#bg1").css("background", "#FF0000");
          });


})
