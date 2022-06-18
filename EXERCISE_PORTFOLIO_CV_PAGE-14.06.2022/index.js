$(document).ready(function() {
  $('#adaptive').lightSlider({
    item:3,
    loop:true,
    slideMove:2,
    easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
    speed:600,
    responsive : [
        {
            breakpoint:800,
            settings: {
                item:2,
                slideMove:1,
                slideMargin:6,
              }
        },
        {
            breakpoint:480,
            settings: {
                item:1,
                slideMove:1
              }
        }
    ]
  });


  $(".home-page a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

  // Get the modal
  let modal01 = document.getElementById("sokan");
  let modal02 = document.getElementById("emmemedia");
  let modal03 = document.getElementById("freelance");
  let modal04 = document.getElementById("brent");

  // Get the button that opens the modal
  let btn01 = document.getElementById("myBtn01");
  let btn02 = document.getElementById("myBtn02");
  let btn03 = document.getElementById("myBtn03");
  let btn04 = document.getElementById("myBtn04");

  let span01 = document.getElementById("myspan01");
  let span02 = document.getElementById("myspan02");
  let span03 = document.getElementById("myspan03");
  let span04 = document.getElementById("myspan04");
  // Get the <span> element that closes the modal
  let span = document.querySelectorAll(".close");
  // let btn = document.querySelectorAll(".myBtn");
  let modal = document.querySelectorAll(".modal");
  
  // When the user clicks on the button, open the modal
  btn01.onclick = function() {
    modal01.style.display = "block";
  }
  btn02.onclick = function() {
    modal02.style.display = "block";
  }
  btn03.onclick = function() {
    modal03.style.display = "block";
  }
  btn04.onclick = function() {
    modal04.style.display = "block";
  }
  span01.onclick = function() {
    modal01.style.display = "none";
  }
  span02.onclick = function() {
    modal02.style.display = "none";
  }
  span03.onclick = function() {
    modal03.style.display = "none";
  }
  span04.onclick = function() {
    modal04.style.display = "none";
  }
  // When the user clicks on <span> (x), close the modal
  // span.onclick = function(event) {
  //   if (event.target == modal01) {
  //     modal01.style.display = "none";
  //   } else if (event.target == modal02) {
  //     modal02.style.display = "none";
  //   } else if (event.target == modal03) {
  //     modal03.style.display = "none";
  //   }
  // }

  // for (let i = 0; i < span.length; i++) {
    // span.click= function(event) {
    //   if (event.target == modal01) {
    //     modal01.style.display = "none";
    //   } else if (event.target == modal02) {
    //     modal02.style.display = "none";
    //   } else if (event.target == modal03) {
    //     modal03.style.display = "none";
    //   }
    
    // };
  // }

  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    switch(event.target){
      case modal01:
        modal01.style.display = "none";
      break;
      case modal02:
        modal02.style.display = "none";
      break;
      case modal03:
        modal03.style.display = "none";
      break;
      case modal04:
        modal04.style.display = "none";
      break;
      default:
        console.log('Non hai selezionato alcuna modale');
    }
  }



});