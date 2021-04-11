(function ($)
  { "use strict"
  
/* 1. Proloder */
    $(window).on('load', function () {
      $('#preloader-active').delay(450).fadeOut('slow');
      $('body').delay(450).css({
        'overflow': 'visible'
      });
    });


/* 2. Navbar */
    // onScroll
    $(window).on('scroll', () => {
        $("header#navbar").css({
          position: "fixed",
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 10,
        })
    })
    // Change Active Class
      let locationhref = window.location.href;
      if(locationhref.indexOf('index') != -1){
        $('header#navbar .nav-item').first().addClass('active')
      } else if(locationhref.indexOf('products') != -1){
        $('header#navbar .nav-item:nth-of-type(2)').addClass('active')
      } else if(locationhref.indexOf('about') != -1){
        $('header#navbar .nav-item:nth-of-type(3)').addClass('active')
      } else if(locationhref.indexOf('contact') != -1){
        $('header#navbar .nav-item').last().addClass('active')
      }
      else {
        $('header#navbar .nav-item').removeClass('active')
      }
    // Modal Activation
      $('#search-switch').on('click', function (){
        $('.search-model-box').fadeIn(400);
      });

      $('.search-close-btn').on('click', () => {
        $('.search-model-box').fadeOut(400, () => {
            $('#search-input').val('');
        });
      });
/* 3.OWL Carousel */
    let home_slide = $('.owl-carousel');
    home_slide.owlCarousel({
      items: 1,
      autoplay: true,
      autoplayTimeout: 5000,
      navText: [" <i class='fas fa-arrow-circle-left'></i> ", "<i class='fas fa-arrow-circle-right'></i> "],
      responsive: {
        0: {
          nav: false
        },
        768: {
          nav: true
        },
        991: {
          nav: true
        }
      }
    });
/* 4. ScrollUp */
    $(window).on('scroll', () => {
      if(window.pageYOffset >= 200){
        $('#scrollUp').fadeIn(500);
      } else{
        $('#scrollUp').hide(500);
      }
    })
    $('#scrollUp').on('click', ()=>{
      $(window).scrollTop(0);
    })
/* ----------------- Other Inner page Start ------------------ */
      // Search Box Toggle
      $("#search_input_box").hide();
      $("#search_1").on("click", function () {
        $("#search_input_box").slideToggle();
        $("#search_input").focus();
      });
      $("#close_search").on("click", function () {
        $('#search_input_box').slideUp(500);
      });

      // Products Counter
      let decrement = $('#decrement');
      let increment = $('#increment');
      let itemsCountElem = $('#items-count');
      let priceElem = $('#price');
      decrement.on('click',() => {
        let itemsCount = parseInt(itemsCountElem.text());
        let price = parseInt(priceElem.text());
        if(price > 200 && itemsCount > 1){
          console.log(true)
          priceElem.text(price - 200 + "$");
          itemsCountElem.text(itemsCount - 1);
        }else{
          console.log(false)
        }
      });
      increment.on('click',() => {
        let itemsCount = parseInt(itemsCountElem.text());
        let price = parseInt(priceElem.text());
        priceElem.text(price + 200 + "$");
        itemsCountElem.text(itemsCount + 1);
        console.log(true)
      })
      /* ----------------- Other Inner page End ------------------ */
    
// Grid view and list View

    $(document).ready(function() {
      $('#list').click(function(event){event.preventDefault();$('#products .item').addClass('list-group-item');});
      $('#grid').click(function(event){event.preventDefault();$('#products .item').removeClass('list-group-item');$('#products .item').addClass('grid-group-item');});
    });

})(jQuery);
