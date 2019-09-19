 
       let $buttonTop = $('.ReturnTop');
       $(window).on('scroll', function(){
        if ($(this).scrollTop() >= 50) {
            $buttonTop.fadeIn();
        } else {
            $buttonTop.fadeOut();
        }
       });

       $buttonTop.on('click', function(){
        e.preventDefault();
        $('html,body').animate({scrollTop: 0}, 900);
       });


