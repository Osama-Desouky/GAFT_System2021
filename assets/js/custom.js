// loading 
$(window).on("load",function() {
	$(".loader").fadeOut("slow");
  // $("#overlayer").delay().fadeOut("slow");
})

$( document ).ready(function() {
    if ($(".menuSystem")[0]){
      $(".menuSystem").parents(".inner-container").addClass("inner-container-custom")
      
    } else {
      console.log("not exist") 
    }
    $(".navbar .dropdown #navbarDropdown span").text(function(){
      
     let oldString = $(this).text().trim()
      var newString = oldString.split('@', 1)[0];
      $(this).html(document.createTextNode(newString));

    })
    
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

    // progress bar calc with number
    $(".progress-bar-custom").each(function(){
      let minValue = $(this).attr("aria-valuenow")
      let maxValue = $(this).attr("aria-valuemax")
      let percentageValue  = (minValue / maxValue) * 100

    //  console.log(minValue,maxValue);
    //  console.log(percentageValue);

     if(percentageValue >= 80 && percentageValue <= 99.9) {
      $(this).addClass('prog80')
     }else if(percentageValue >= 100) {
      $(this).removeClass('prog80').addClass('prog100')
     }
     $(this).attr('aria-valuenow', percentageValue).css('width', percentageValue+'%');
    })

    // toggle show / hid password
    $(".toggle-password").click(function() {
      let shown = $(this).toggleClass('shown')
      shown.hasClass('shown') ?  $(this).attr('src', '../assets/images/showPassword.svg') :  $(this).attr('src', '../assets/images/eye-off-2.svg');
    });
    
});



// function check_percentage(){
//   let percentage = document.querySelector('.percentage');
//   let percentageValue =  +percentage.textContent;
//   let title = document.querySelector('h1');
  
//   setTimeout(function(){
//     if (percentageValue < 100) {
//       update_percentage(); 
    
//     } else {
//       // percentage.textContent = 100;   
//       // title.textContent = 'Done!'; 
//       // title.style.color = '#568259';
//     }
//   }, 100)
// }

// function update_percentage(){   
//   let percentage = document.querySelector('.percentage');
//   let percentageValue =  +percentage.textContent;
//   let progress = document.querySelector('.progress');
   
//   percentage.textContent = percentageValue + Math.ceil(Math.random() * 5);
//   progress.setAttribute('style', `width:${percentageValue + Math.ceil(Math.random() * 5)}%`);
 
//   check_percentage();
// }

// check_percentage();