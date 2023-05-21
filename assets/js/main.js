jQuery(document).ready(function($){
    
    
    function show_popup() {
      
        // Create array containing Fancybox slides
        const slides = [...document.querySelectorAll(".fancybox-slide")].map(
            (node) => {
                return {
                    src: node,
                    type: "inline",
                };
            }
        );
        // Strt Fancybox with custom options
        Fancybox.show(slides, {
            dragToClose: false,
            Carousel: {
                friction: 0.8,
                Panzoom: {
                    touch: false
                },
                Navigation: false,
            },
        });
        
    }
    
    
    $('.popup .close').click(function(){
        $('.popup').removeClass('open');
    });
    $('.btn-order').click(function(e){
        
        let phone = $('#phone').val();
        if ( phone && phone.length > 14 ){
            $.ajax({
                type: 'POST',
                dataType: 'json',
                url: obj.ajaxurl,
                data: {
                    'action': 'send_email_phone',
                    'phone': phone
                },
                success: function(data){
                    if ( data.response ) {
                        $('#phone').attr('style', ' ');
                        $('#phone').val('');
                        show_popup();
                    } else {
                        $('.fancybox-slide').hide();
                    }
                }
            });
        } else {
            $('#phone').attr('style', 'border: 1px solid #ff0000;');
        }
        
    });
    
    $('.carousel__button.is-close').on('click', function () {
        $('#phone').attr('style', ' ');
    });
    
    
    $('.burger-nav').click(function (event) {
        $('.primary-nav-menu, .menu, .burger-menu').toggleClass('active');
    });
        $('.toggleLink').click(function (event) {
            $('.menu, .burger-icon, .primary-nav-menu').toggleClass('active');
        });
    
    $('.dropdownlink').click(function (event) {
        $('i').toggleClass('open');
    });
    
    $(document).on("click", "#primary-nav a", function (event) {
        event.preventDefault();
        if ( $(this).hasClass('not-link') ) {
            // nothing
        } else {
            var id = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({
                scrollTop: top
            }, 2500);
        }
    });
    
    $('.primary-nav-item > a').on('click', function(e){
        var $dropMenu = $(this).parent().find('.submenu');
        if($dropMenu.is(':visible')){
            $dropMenu.hide();
        } else {
            $('.submenu:visible').hide();
            $dropMenu.show();
        }
    });
    
    $("#phone").mask("+38(999) 999-99-99");
    
    var allPanels = $('.accordion > dd').hide();
    $('.accordion > dt > a').click(function() {
        allPanels.slideUp();
        $(this).parent().next().slideDown();
        return false;
    });
    
    // POPUP ORDER BUTTON
    $('.popup .close').click(function(){
        $('.popup').removeClass('open');
    });
    $('.btn-order').click(function(){
        $('.popup_order').addClass('open');
    });
    
});

var swiper = new Swiper(".mySwiper", {
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1.3,
            spaceBetween: 20,
            mousewheel: true,
            mousewheelControl: true,
            speed: 600,
            mousewheel: {
                sensitivity: 1,
            },
            scrollbar: {
                el: '.swiper-scrollbar-main',
                draggable: true,
            },
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 1.3,
            spaceBetween: 30,
            mousewheel: true,
            mousewheelControl: true,
            speed: 600,
            mousewheel: {
                sensitivity: 1,
            },
            scrollbar: {
                el: '.swiper-scrollbar-main',
                draggable: true,
            },
        },
        768: {
            slidesPerView: 1.3,
            spaceBetween: 30,
            mousewheel: true,
            mousewheelControl: true,
            speed: 600,
            mousewheel: {
                sensitivity: 1,
            },
            scrollbar: {
                el: '.swiper-scrollbar-main',
                draggable: true,
            },
        },
        769: {
            slidesPerView: 4,
            spaceBetween: 0,
            mousewheel: false,
            mousewheelControl: false,
            speed: 600,
        },
        1920: {
            slidesPerView: 99,
            spaceBetween: 0,
            mousewheel: false,
            mousewheelControl: false,
        },
        2044: {
            slidesPerView: 1,
            spaceBetween: 0,
            mousewheel: false,
            mousewheelControl: false,
            scrollbar: {
                el: '.swiper-scrollbar-main',
                draggable: true,
            },
        },
    },
});




var inter_swiper = new Swiper(".inter_swiper", {
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
            mousewheel: true,
            mousewheelControl: true,
            speed: 600,
            mousewheel: {
                sensitivity: 1,
            },
            scrollbar: {
                el: '.swiper-scrollbar-inter',
                draggable: true,
            },
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 1.3,
            spaceBetween: 30,
            mousewheel: true,
            mousewheelControl: true,
            speed: 600,
            mousewheel: {
                sensitivity: 1,
            },
            scrollbar: {
                el: '.swiper-scrollbar-inter',
                draggable: true,
            },
        },
        768: {
            slidesPerView: 1.3,
            spaceBetween: 30,
            mousewheel: true,
            mousewheelControl: true,
            speed: 600,
            mousewheel: {
                sensitivity: 1,
            },
            scrollbar: {
                el: '.swiper-scrollbar-inter',
                draggable: true,
            },
        },
        769: {
            slidesPerView: 4,
            spaceBetween: 0,
            mousewheel: false,
            mousewheelControl: false,
            speed: 600,
        },
        1920: {
            slidesPerView: 99,
            spaceBetween: 0,
            mousewheel: false,
            mousewheelControl: false,
        },
        2044: {
            slidesPerView: 1,
            spaceBetween: 0,
            mousewheel: false,
            mousewheelControl: false,
            scrollbar: {
                el: '.swiper-scrollbar-inter',
                draggable: true,
            },
        },
    },
});




var ultra_swiper = new Swiper(".ultra_swiper", {
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
            mousewheel: true,
            mousewheelControl: true,
            speed: 600,
            mousewheel: {
                sensitivity: 1,
            },
            scrollbar: {
                el: '.swiper-scrollbar-ultra',
                draggable: true,
            },
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 1.3,
            spaceBetween: 30,
            mousewheel: true,
            mousewheelControl: true,
            speed: 600,
            mousewheel: {
                sensitivity: 1,
            },
            scrollbar: {
                el: '.swiper-scrollbar-ultra',
                draggable: true,
            },
        },
        768: {
            slidesPerView: 1.3,
            spaceBetween: 30,
            mousewheel: true,
            mousewheelControl: true,
            speed: 600,
            mousewheel: {
                sensitivity: 1,
            },
            scrollbar: {
                el: '.swiper-scrollbar-ultra',
                draggable: true,
            },
        },
        769: {
            slidesPerView: 4,
            spaceBetween: 0,
            mousewheel: false,
            mousewheelControl: false,
            speed: 600,
        },
        1920: {
            slidesPerView: 99,
            spaceBetween: 0,
            mousewheel: false,
            mousewheelControl: false,
        },
        2044: {
            slidesPerView: 1,
            spaceBetween: 0,
            mousewheel: false,
            mousewheelControl: false,
            scrollbar: {
                el: '.swiper-scrollbar-ultra',
                draggable: true,
            },
        },
    },
});



var table_swiper = new Swiper(".table_swiper", {
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
            mousewheel: true,
            mousewheelControl: true,
            speed: 600,
            mousewheel: {
                sensitivity: 1,
            },
            scrollbar: {
                el: '.swiper-scrollbar-table',
                draggable: true,
            },
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 1.3,
            spaceBetween: 30,
            mousewheel: true,
            mousewheelControl: true,
            speed: 600,
            mousewheel: {
                sensitivity: 1,
            },
            scrollbar: {
                el: '.swiper-scrollbar-table',
                draggable: true,
            },
        },
        768: {
            slidesPerView: 1.3,
            spaceBetween: 30,
            mousewheel: true,
            mousewheelControl: true,
            speed: 600,
            mousewheel: {
                sensitivity: 1,
            },
            scrollbar: {
                el: '.swiper-scrollbar-table',
                draggable: true,
            },
        },
        769: {
            slidesPerView: 4,
            spaceBetween: 0,
            mousewheel: false,
            mousewheelControl: false,
            speed: 600,
        },
        1920: {
            slidesPerView: 99,
            spaceBetween: 0,
            mousewheel: false,
            mousewheelControl: false,
        },
        2044: {
            slidesPerView: 1,
            spaceBetween: 0,
            mousewheel: false,
            mousewheelControl: false,
            scrollbar: {
                el: '.swiper-scrollbar-table',
                draggable: true,
            },
        },
    },

});




