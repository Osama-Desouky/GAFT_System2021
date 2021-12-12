// loading 
$(window).on("load",function() {
	$(".loader").fadeOut("slow");
  // $("#overlayer").delay().fadeOut("slow");
})

$( document ).ready(function() {
    

    // AO show and hide password 
    $(".toggle-password").click(function() {
        var input = $($(this).attr("toggle"));
        if (input.attr("type") == "password") {
          input.attr("type", "text");
        } else {
          input.attr("type", "password");
        }
      });

    // AO just validation for matching password
    $(".ValidationPassword").keyup(function(){
      let inputValue = $('.ValidationPassword').val();
      let inputValue2 = $('.matchValidation').val();

      if(inputValue.length >= 6){
        $(".ValidationPassword:not(.matchValidation)").addClass('validMatch')
        if(inputValue === inputValue2 && inputValue.length > 1 ) {
          $(".matchValidation").addClass('validMatch')
        }else {
          $(".matchValidation").removeClass('validMatch')
        }
      }else {
        $(".ValidationPassword:not(.matchValidation)").removeClass('validMatch')
 
      }
    })
    // open list item side menu
    $(".openLI").click(function(e){
      e.preventDefault()
      $(this).toggleClass('opend').next().slideToggle()
    })
    // visited link style
    // $(".notificationA a").click(function(e){
    //   $(this).addClass('visitedLink')
    // })

});

