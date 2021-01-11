/*global $ */
(function ($) {
    "use strict";

    // $(window).on('load', function(){
    //     $('body').addClass('stopScroll');
    //     $('.loader').fadeOut(500, function () {
    //         $(this).remove();
    //         $('body').removeClass('stopScroll');
    //     }); 
    // });

    // Input Animation
    $('.fieldInput').focus(function () {
        $(this).parent('.field').addClass('focused');
    });

    $('.fieldInput').each(function () {
        if ($(this).val() != "") {
            $(this).parent('.field').addClass('focused');
        }
    });

    $('.fieldInput').focusout(function () {
        if ($(this).val() === "")
            $(this).parent('.field').removeClass('focused');
    });

    // Go through a sentence, wrap its characters with spans
    function setUpCharacters() {
        var $sentences = $('.headerData h1');

        // Run for each sentence
        $sentences.each(function () {
            var $sentence = $(this);
            var newContent = '';

            // Go through all characters of the sentence
            var x = 0.1;
            for (let i = 0; i < $sentence.text().length; i++) {
                var substring = $sentence.text().substr(i, 1);

                // If we have a character, wrap it
                if (substring != " ") {
                    newContent += '<span style="animation-delay:'+x+'s">' + substring + '</span>';
                    x = x + 0.19;
                } else {
                    newContent += substring;
                }
            }

            // Replace content
            $sentence.html(newContent);
        });
    }
    setUpCharacters();


    // Scroll To Top
    let wheight = $(document).height() / 2 - 500;
    $(window).scroll(function(){
        if ($(window).scrollTop() > wheight) $('.scrollTop').addClass('show');
        else $('.scrollTop').removeClass('show');
    });


    // Side Dots
    $('.sideMenu a').on('click', function(e) {
        e.preventDefault();
        $('.sideMenu a').removeClass('active');     
        $(this).addClass('active');
        $('html, body').animate({ 
            scrollTop: $($(this).attr('href')).offset().top 
        }, 1200, 'linear');
    });

    $(window).on('scroll', function(){
        $('.sideMenu a').each(function () {
            let currLink = $(this) ,
                href = $(currLink.attr("href")) ,
                itemPosition = href.position().top;
            if ( $(window).scrollTop() >= itemPosition - 150 ) {
                $('.sideMenu a').removeClass("active");
                currLink.addClass("active");
            }
            else{
                currLink.removeClass("active");
            }
        });
    });
    
    



    // Start Animation 
    AOS.init();

})(jQuery);

