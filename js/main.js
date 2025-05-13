document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent form from reloading page

  // Get the form data
  const formData = new FormData(this);

  // Send data to form-handler.php using fetch (AJAX)
  fetch('form-handler.php', {
      method: 'POST',
      body: formData
  })
  .then(response => response.text()) // Get response text (success or failure message)
  .then(data => {
      // Update the message section with the response
      document.getElementById('formMessage').innerHTML = data;

      // Optional: Reset the form after submission
      document.getElementById('contactForm').reset();
  })
  .catch(error => {
      // Handle errors if any
      document.getElementById('formMessage').innerHTML = "<p style='color:red;'>An error occurred. Please try again later.</p>";
  });
});
/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }
  
  /* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
  }
$(document).ready(function(){
    $('.show-slider').slick({
      arrows: true,         
      dots: false,         
      autoplay: true,
      autoplaySpeed: 4000,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
    //   prevArrow: '<button type="button" class="slick-prev">&#8592;</button>', // Left Arrow
    //   nextArrow: '<button type="button" class="slick-next">&#8594;</button>'  // Right Arrow
    });
  });
  $(document).ready(function(){
    $('.leaders-slider').slick({
      centerMode: true,
      centerPadding: '80px', // you can adjust this (like '60px', '100px' etc)
      slidesToShow: 7,
      slidesToScroll: 1,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 4000,
      dots:false,
      responsive: [
        {
          breakpoint: 1200, // for tablets/desktops
          settings: {
            slidesToShow: 5,
            centerPadding: '30px'
          }
        },
        {
          breakpoint: 768, // for tablets
          settings: {
            slidesToShow: 3,
            centerPadding: '20px'
          }
        },
        {
          breakpoint: 480, // for mobile
          settings: {
            slidesToShow: 1,
            centerPadding: '0px'
          }
        }
      ]
    });
  });
  
  $(document).ready(function(){
    $('.testimonial-slider').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      autoplay: true,
      autoplaySpeed: 4000,
      responsive: [
        {
          breakpoint: 1300,
          settings: {
            slidesToShow: 4
          }
        },
        {
          breakpoint: 992,
          settings: {
            adaptiveHeight: true,
            slidesToShow: 3
          }
        },
        {
          breakpoint: 768,
          settings: {
            adaptiveHeight: true,
            slidesToShow: 2
          }
        },
        {
          breakpoint: 576,
          settings: {
            adaptiveHeight: true,
            slidesToShow: 1
          }
        }
      ]
    });
  });
  $(document).ready(function(){
    $('.team-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      autoplay: true,
      autoplaySpeed: 4000,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            adaptiveHeight: true,
            slidesToShow: 1
          }
        },
        {
          breakpoint: 576,
          settings: {
            adaptiveHeight: true,
            slidesToShow: 1
          }
        }
      ]
    });
  });
  