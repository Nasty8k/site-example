


// News-slider
$(document).ready(function () {
    $('.poster__slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoPlaySpeed: 3000,
        centerMode: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 568,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.nav-toggle').on('click', function(){
        $('#menu').toggleClass('active');
    });

      
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
    
    $("#tophead").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });

    

// Отправка данных на сервер
$("form").submit(function() { //Change
  var th = $(this);
  $.ajax({
    type: "POST",
    url: "./php/mail.php",
    data: th.serialize()
  }).done(function() {
    alert("Спасибо за заявку!");
    setTimeout(function() {
      th.trigger("reset");    }, 1000);
  });
  return false;
});

});



