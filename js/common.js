//included config
function getConfigData() {
    var jqXHR = $.ajax({
        url: "/local/templates/mobile/js/config.json",
        async: false
    });

    return $.parseJSON(jqXHR.responseText);
}
var isEnabledScroll = true;
var config = getConfigData();

function initOpenMenu() {
    var btnOpen = $('.container-btn-menu');
    var btnClose = $('.container-btn-close-menu');
    var boxMenu = $('.container-menu');
    var boxLogo = $('.company-header-logo');
    var boxFeedback = $('.container-lang-feedback');

    $(btnOpen).click(function () {
        $(this).css('right', '-100%');
        $(btnClose).css('right', '0');
        $(boxMenu).addClass('open-menu').css('top', '0');
        $(boxLogo).addClass('open-menu');
        $(boxFeedback).addClass('open-menu');
        setTimeout(function () {
            $('.container-wrapper-menu').css('opacity', '1')
        }, 1000)
        $('body').addClass('overflow-hidden');
        event.preventDefault();
    });

    $(btnClose).click(function () {
        $(this).css('right', '-100%');
        $(btnOpen).css('right', '0');
        $(boxMenu).removeClass('open-menu').css('top', '-100%');
        $(boxLogo).removeClass('open-menu');
        $(boxFeedback).removeClass('open-menu');
        $('.container-wrapper-menu').css('opacity', '0');
        $('body').removeClass('overflow-hidden');
        setTimeout(function () {

        }, 400)
    });
}

function initCloseMenu() {
    var btnOpen = $('.container-btn-menu');
    var btnClose = $('.container-btn-close-menu');
    var boxMenu = $('.container-menu');
    var boxLogo = $('.company-header-logo');
    var boxFeedback = $('.container-lang-feedback');
    var btnCloseMenu = $('.wrapper-menu-header_link');

    $(btnCloseMenu).click(function () {
        setTimeout(function () {
            $(btnClose).css('right', '-100%');
            $(btnOpen).css('right', '0');
            $(boxMenu).removeClass('open-menu').css('top', '-100%');
            $(boxLogo).removeClass('open-menu');
            $(boxFeedback).removeClass('open-menu');
            $('body').removeClass('overflow-hidden');
            $('.container-wrapper-menu').css('opacity', '0');
        }, 250)
    });
}


function initSliderWorking() {
    var swiper = new Swiper('.swiper-slider-working', {
        paginationClickable: true,
        loop: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        speed: 800
    });
}

function focusInput() {
    var inputFocus = $('.input-box');
    var inputLabel = $('.input-label');

    $(inputFocus).on('focus', function () {
        $(this).parents().closest('.box-input').find('.form-label').find(inputLabel).addClass('label-focus');
    });

    $(inputFocus).on('focusout', function () {
        if (this != null && this.value.length == 0) {
            $(this).parents().closest('.box-input').find('.form-label').find(inputLabel).removeClass('label-focus');
        } else {
            $(this).parents().closest('.box-input').find('.form-label').find(inputLabel).addClass('label-focus');
        }
    });
}

function initDropzone() {
    Dropzone.options.myAwesomeDropzone = {
        paramName: "file",
        maxFilesize: 2,
        dictDefaultMessage: 'Attach file',
        addRemoveLinks: true,
        previewTemplate: document.getElementById('preview-template').innerHTML,
        accept: function (file, done) {
            if (file.name == "justinbieber.jpg") {
                done("Naha, you don't.");
            }
            else {
                done();
            }
        },
        init: function () {
            this.on("addedfile", function (file) {
                $('.dropzone').append('<input type="hidden" name="files[]" value="' + file.name + '">');
            });
            this.on("removedfile", function (file) {
                var del = $('.dropzone').find('input[value="' + file.name + '"]');
                del.remove();
            });
        }
    };
}

function scrollUp() {
    $('.btn-scroll-top').click(function () {
        $('body,html').animate({scrollTop: 0}, 800);
    });

    $('.link-footer').click(function () {
        $('body,html').animate({scrollTop: 0}, 500);
    });

    $('.wrapper-menu-header_link').click(function () {
        $('body,html').animate({scrollTop: 0}, 0);
    });
}

function initFixBlock() {
    $('.sticky').Stickyfill();
}
function initFixSliderAbout() {
    var heightW = $(this).scrollTop();
    var totalW = $('.container-wrapper-contant').height() + $('.container-wrapper-what-did').height() + $('.container-wrapper-about').height() + $('.wrapper-stages-production_title').height() + 140;
    var height1 = $('#slide-img-1');
    var height2 = $('#slide-img-2');
    var height3 = $('#slide-img-3');
    var height4 = $('#slide-img-4');
    var img1 = $('#img-1');
    var img2 = $('#img-2');
    var img3 = $('#img-3');
    var img4 = $('#img-4');

    var totalH1 = totalW + height1.height() * 1.55;
    var totalH2 = totalH1 + height2.height() * 1.25;
    var totalH3 = totalH2 + height3.height() * 1.75;
    var totalH4 = totalH3 + height4.height() * 1.3;


    if (heightW >= totalW && heightW < totalH1) {
        height1.find('.wrapper-stages-production_list_number').addClass('greenOpacity');
        // img1.addClass('display-block')
        img1.css({'opacity': '1', 'left': '0'})
    } else {
        height1.find('.wrapper-stages-production_list_number').removeClass('greenOpacity');
        // img1.removeClass('display-block')
        img1.css({'opacity': '0', 'left': '-50%'})
    }

    if (heightW >= totalH1 && heightW < totalH2) {
        height2.find('.wrapper-stages-production_list_number').addClass('greenOpacity');
        img2.css({'opacity': '1', 'left': '0'})
    } else {
        height2.find('.wrapper-stages-production_list_number').removeClass('greenOpacity');
        img2.css({'opacity': '0', 'left': '-50%'})
    }

    if (heightW >= totalH2 && heightW < totalH3) {
        height3.find('.wrapper-stages-production_list_number').addClass('greenOpacity');
        img3.css({'opacity': '1', 'left': '0'})
    } else {
        height3.find('.wrapper-stages-production_list_number').removeClass('greenOpacity');
        img3.css({'opacity': '0', 'left': '-50%'})
    }

    if (heightW >= totalH3 && heightW < totalH4) {
        height4.find('.wrapper-stages-production_list_number').addClass('greenOpacity');
        img4.css({'opacity': '1', 'left': '0'})
    } else {
        height4.find('.wrapper-stages-production_list_number').removeClass('greenOpacity');
        img4.css({'opacity': '0', 'left': '-50%'})
    }

    Revealator.effects_padding = '-220';
}

function initOpacityBest() {
    var heightOpacity = $(this).scrollTop();
    var scrollHeightOpacity = $('.container-wrapper-contant').height() + $('.container-wrapper-what-did').height() + $('.container-wrapper-about').height() + $('.container-wrapper-stages-production').height() - 100;

    if (heightOpacity >= scrollHeightOpacity) {
        $('.container-wrapper-best').css('opacity', '1');
    } else {
        $('.container-wrapper-best').css('opacity', '0');
    }
}

function initSwiperGallery() {
    var swiper = new Swiper('.swiper-slider-about-gallery', {
        paginationClickable: true,
        loop: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        speed: 800
    });
}

function initSwiperNews() {
    var swiper = new Swiper('.swiper-slider-news', {
        paginationClickable: true,
        loop: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        speed: 800
    });
}
//Handler news page for not barba.js
function initPopupNews() {
    $("body").find("[data-link-news]").unbind("click");

    $('.popup-news').click(function () {
        var clickNews = $(this).data("link-news"),
            typeQuery = '';
        if (!$('div').is("[data-news='" + clickNews + "']")) {
            if ($(this).data("typequery") === 'barba') {
                typeQuery = {'X-Barba': 'yes'};
            }
            $.ajax({
                url: $(this).data("url"),
                type: 'GET',
                dataType: "html",
                headers: typeQuery,
                success: function (data, textStatus, jqXHR) {
                    $('.container-overflow').remove();
                    $('.container-overflow-back-page').remove();
                    $("[data-namespace = news-page] .container-wrapper").after(data);
                    initPopupNews();
                    initSwiperNews();
                    var openPopupNews = $("body").find("[data-news='" + clickNews + "']");
                    $(this).addClass('open-popup');
                    $('.container-overflow').addClass('overflow-open');
                    $('.container-overflow-back-page').addClass('overflow-open');
                    openPopupNews.css('right', '0');
                    $('body').addClass('overflow-hidden');
                }
            });
        } else {
            setTimeout(function () {
                var openPopupNews = $("body").find("[data-news='" + clickNews + "']");
                $(this).addClass('open-popup');
                $('.container-overflow').addClass('overflow-open');
                $('.container-overflow-back-page').addClass('overflow-open');
                openPopupNews.css('right', '0');
                $('body').addClass('overflow-hidden');
            }, 10);
        }
    });

    $('.container-overflow').click(function () {
        $(this).removeClass('overflow-open');
        $('.container-popup-news').css('right', '-100%');
        $('.container-btn-news').css('right', '-115%');
        $('body').removeClass('overflow-hidden');
    });

    $('.container-overflow-back-page').click(function () {
        $(this).removeClass('overflow-open');
        $('.container-popup-news').css('right', '-100%');
        $('.container-btn-news').css('right', '-115%');
        $('body').removeClass('overflow-hidden');
    });

    $('.brn-close-popup').click(function () {
        $('.container-overflow').removeClass('overflow-open');
        $('.container-popup-news').css('right', '-100%');
        $('.container-btn-news').css('right', '-115%');
        $('body').removeClass('overflow-hidden');
    });

    $('.brn-close-page').click(function () {
        $('.container-overflow').removeClass('overflow-open');
        $('.container-popup-news').css('right', '-100%');
        $('.container-btn-news').css('right', '-115%');
        $('body').removeClass('overflow-hidden');
    });

    $('.popup-news').click(function () {
        $('.container-overflow').removeClass('overflow-open');
        $('.container-popup-news').css('right', '-115%');
        $('.container-btn-news').css('right', '-115%');
        $('body').removeClass('overflow-hidden');
    });
}

function initMakeOrder() {
    $('.make-order-popup').click(function () {
        isEnabledScroll = false;
        $('.ajax-pager-link').off('click');
        $('.container-overflow').removeClass('overflow-open');
        $('.container-popup-portfolio').css('right', '-115%');
        $('.container-btn-portfolio').css('right', '-115%');
        $('body').removeClass('overflow-hidden');
        $('.container-overflow-back-page').remove();

        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;

        function setTimeAncour() {
            $("html:not(:animated),body:not(:animated)").animate({
                scrollTop: destination
            }, 800);
            $('.input-name').focus();
        }

        setTimeout(setTimeAncour, 450);

        setTimeout(function () {
                isEnabledScroll = true;
                initInfinityScroll();
            }, 1500
        );

        return false;
    });
}

function initApplicationForm() {
    $('.btn-appl-form').click(function () {
        isEnabledScroll = false;
        $('.container-btn-close-menu').css('right', '-100%');
        $('.container-btn-menu').css('right', '0');
        $('.open-menu').removeClass('open-menu').css('top', '-100%');
        $('.company-header-logo').removeClass('open-menu');
        $('.container-lang-feedback').removeClass('open-menu');
        $('.container-wrapper-menu').css('opacity', '0');
        $('body').removeClass('overflow-hidden');

        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;

        function setTimeAncour() {
            $("html:not(:animated),body:not(:animated)").animate({
                scrollTop: destination
            }, 800);
            $('.input-name').focus();
            setTimeout(function () {
                    isEnabledScroll = true;
                    initInfinityScroll();
                }, 1500
            );
        }

        setTimeout(setTimeAncour, 1000);

        return false;

    });
}
//Handler portfolio page for not barba.js
function initPopupPortfolio() {
    $("body").find("[data-link-portfolio]").unbind("click");
    $('.popup-portfolio').click(function () {
        var clickPortfolio = $(this).data("link-portfolio"),
            typeQuery = '';

        if (!$('div').is("[data-portfolio='" + clickPortfolio + "']")) {
            if ($(this).data("typequery") === 'barba') {
                typeQuery = {'X-Barba': 'yes'};
            }
            $.ajax({
                url: $(this).data("url"),
                type: 'GET',
                dataType: "html",
                headers: typeQuery,
                success: function (data, textStatus, jqXHR) {
                    $('.container-overflow').remove();
                    $('.container-overflow-back-page').remove();
                    $("[data-namespace = portfolio-page] .container-wrapper").after(data);
                    initPopupPortfolio();
                    initMakeOrder();
                    setTimeout(function () {
                        var openPopupPortfolio = $("body").find("[data-portfolio='" + clickPortfolio + "']");
                        $(this).addClass('open-popup');
                        $('.container-overflow').addClass('overflow-open');
                        $('.container-overflow-back-page').addClass('overflow-open');
                        openPopupPortfolio.css('right', '0');
                        $('[data-portfolio="' + clickPortfolio + '"] .container-btn-portfolio').css('right', '0');
                        $('body').addClass('overflow-hidden');
                    }, 10);
                }
            });
        } else {
            setTimeout(function () {
                var openPopupPortfolio = $("body").find("[data-portfolio='" + clickPortfolio + "']");
                $(this).addClass('open-popup');
                $('.container-overflow').addClass('overflow-open');
                $('.container-overflow-back-page').addClass('overflow-open');
                openPopupPortfolio.css('right', '0');
                $('[data-portfolio="' + clickPortfolio + '"] .container-btn-portfolio').css('right', '0');
                $('body').addClass('overflow-hidden');
            }, 10);
        }
    });

    $('.container-overflow').click(function () {
        $(this).removeClass('overflow-open');
        $('.container-popup-portfolio').css('right', '-115%');
        $('.container-btn-portfolio').css('right', '-115%');
        $('body').removeClass('overflow-hidden');
    });

    $('.brn-close-popup').click(function () {
        $('.container-overflow').removeClass('overflow-open');
        $('.container-popup-portfolio').css('right', '-115%');
        $('.container-btn-portfolio').css('right', '-115%');
        $('body').removeClass('overflow-hidden');
    });

    $('.container-overflow-back-page').click(function () {
        $(this).removeClass('overflow-open');
        $('.container-popup-portfolio').css('right', '-100%');
        $('.container-btn-portfolio').css('right', '-115%');
        $('body').removeClass('overflow-hidden');
    });

    $('.brn-close-page').click(function () {
        $('.container-overflow').removeClass('overflow-open');
        $('.container-popup-portfolio').css('right', '-100%');
        $('.container-btn-portfolio').css('right', '-115%');
        $('body').removeClass('overflow-hidden');
    });

    $('.popup-portfolio').click(function () {
        $('.container-overflow').removeClass('overflow-open');
        $('.container-popup-portfolio').css('right', '-115%');
        $('.container-btn-portfolio').css('right', '-115%');
        $('body').removeClass('overflow-hidden');
    });
}

function initValidForm() {
    var form_valid = $(".js-form");
    if (form_valid.length) {
        form_valid.each(function () {
            var form_this = $(this);
            $.validate({
                form: form_this,
                borderColorOnError: true,
                scrollToTopOnError: false,
                modules: 'html5'
                // onSuccess: function($form) {
                //     if (!$form.parent().parent().hasClass('js-popup-sing-in'))
                //         if ($form.hasClass('js-no-popup')) {
                //             $($form).trigger("reset");
                //         }
                //         else {
                //             $form.parent().parent().fadeOut().next().fadeIn();
                //         }
                //
                //     return false;
                // }
            });
        });
    }
}


//Barba.js

var BarbaWidget = {
    init: function () {
        var scope = this;
        Barba.Pjax.start();
        // Barba.Prefetch.init();
        Barba.Pjax.getTransition = function () {
            return scope.MovePage;
        };
    },
    MovePage: Barba.BaseTransition.extend({
        start: function () {
            Promise.all([this.newContainerLoading, this.fadeOut()]).then(setTimeout((this.movePages.bind(this)), 1400));
        },

        initFixBlock: function () {
            $('.sticky').Stickyfill();
        },

        initHoverSwiper: function () {
            $('.hoverBtn').mouseover(function () {
                $('.swiper-slider-about-gallery .swiper-slide-img > img').css('transform', 'scale(1.1)')
            });
            $('.hoverBtn').mouseout(function () {
                $('.swiper-slider-about-gallery .swiper-slide-img > img').css('transform', 'scale(1)')
            });

            $('.hoverBtn').mouseover(function () {
                $('.swiper-slider-news .swiper-slide > img').css('transform', 'scale(1.1)')
            });
            $('.hoverBtn').mouseout(function () {
                $('.swiper-slider-news .swiper-slide > img').css('transform', 'scale(1)')
            });
        },

        initMouseMove: function () {
            var movementStrength = 20;
            var height = movementStrength / $(window).height();
            var width = movementStrength / $(window).width();
            $(".container-wrapper").mousemove(function (e) {
                var pageX = e.pageX - ($(window).width() / 2);
                var pageY = e.pageY - ($(window).height() / 2);
                var newvalueX = width * pageX * -1 - 5;
                var newvalueY = height * pageY * -1 - 5;
                $('.mouseov').css("background-position", newvalueX + "px     " + newvalueY + "px");
            })
        },

        scrollForm: function () {
            $("a.anchor-touch").click(function () {
                var elementClick = $(this).attr("href")
                var destination = $(elementClick).offset().top;
                jQuery("html:not(:animated),body:not(:animated)").animate({
                    scrollTop: destination
                }, 800);
                $('.input-name').focus();
                return false;
            });
        },

        focusInput: function () {
            var inputFocus = $('.input-box');
            var inputLabel = $('.input-label');

            $(inputFocus).on('focus', function () {
                $(this).parents().closest('.box-input').find('.form-label').find(inputLabel).addClass('label-focus');
            });

            $(inputFocus).on('focusout', function () {
                if (this != null && this.value.length == 0) {
                    $(this).parents().closest('.box-input').find('.form-label').find(inputLabel).removeClass('label-focus');
                } else {
                    $(this).parents().closest('.box-input').find('.form-label').find(inputLabel).addClass('label-focus');
                }
            });
        },

        initSliderWorking: function () {
            var swiper = new Swiper('.swiper-slider-working', {
                paginationClickable: true,
                loop: true,
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
                pagination: '.swiper-pagination',
                paginationType: 'fraction',
                speed: 800
            });
        },


        fadeOut: function () {
            var btnOpen = $('.container-btn-menu');
            var btnClose = $('.container-btn-close-menu');
            var boxMenu = $('.container-menu');
            var boxLogo = $('.company-header-logo');
            var boxFeedback = $('.container-lang-feedback');
            var btnCloseMenu = $('.wrapper-menu-header_link');

            $(btnCloseMenu).click(function () {
                setTimeout(function () {
                    $(btnClose).css('right', '-100%');
                    $(btnOpen).css('right', '0');
                    $(boxMenu).removeClass('open-menu').css('top', '-100%');
                    $(boxLogo).removeClass('open-menu');
                    $(boxFeedback).removeClass('open-menu');
                    $('.container-wrapper-menu').css('opacity', '0');
                }, 250)
            });

            return $(this.oldContainer).animate({
                opacity: 0
            }).promise();
        },

        movePages: function () {
            var scope = this;
            this.initFixBlock();
            this.initHoverSwiper();
            this.initMouseMove();
            this.scrollForm();
            this.focusInput();
            this.initSliderWorking();
            // if ($("#map").length > 0) window.onload = this.initMaps();


            TweenLite.set(this.newContainer, {
                visibility: 'visible',
                xPercent: 100,
                position: 'absolute',
                left: 0,
                top: 0,
                right: 0
            });

            TweenLite.to(this.oldContainer, 0.6, {xPercent: -100});
            TweenLite.to(this.newContainer, 0.6, {
                xPercent: 0, onComplete: function () {
                    TweenLite.set(scope.newContainer, {clearProps: 'all'});
                    scope.done();
                }
            });

        }

    })
};


//Handler map page for barba.js
var MapPage = Barba.BaseView.extend({
    namespace: 'map-page',

    onEnterCompleted: function () {
        function initMap() {
            var coordinates = {lat: config['about']['map']['lat'], lng: config['about']['map']['lng']},
                map = new google.maps.Map(document.getElementById('map'), {
                    center: coordinates,
                    zoom: 15,
                    disableDefaultUI: false,
                    scrollwheel: false,
                    mapTypeControl: false,
                    styles: [
                        {
                            "featureType": "water",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#e9e9e9"
                                },
                                {
                                    "lightness": 17
                                }
                            ]
                        },
                        {
                            "featureType": "landscape",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#f5f5f5"
                                },
                                {
                                    "lightness": 20
                                }
                            ]
                        },
                        {
                            "featureType": "road.highway",
                            "elementType": "geometry.fill",
                            "stylers": [
                                {
                                    "color": "#ffffff"
                                },
                                {
                                    "lightness": 17
                                }
                            ]
                        },
                        {
                            "featureType": "road.highway",
                            "elementType": "geometry.stroke",
                            "stylers": [
                                {
                                    "color": "#ffffff"
                                },
                                {
                                    "lightness": 29
                                },
                                {
                                    "weight": 0.2
                                }
                            ]
                        },
                        {
                            "featureType": "road.arterial",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#ffffff"
                                },
                                {
                                    "lightness": 18
                                }
                            ]
                        },
                        {
                            "featureType": "road.local",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#ffffff"
                                },
                                {
                                    "lightness": 16
                                }
                            ]
                        },
                        {
                            "featureType": "poi",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#f5f5f5"
                                },
                                {
                                    "lightness": 21
                                }
                            ]
                        },
                        {
                            "featureType": "poi.park",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#dedede"
                                },
                                {
                                    "lightness": 21
                                }
                            ]
                        },
                        {
                            "elementType": "labels.text.stroke",
                            "stylers": [
                                {
                                    "visibility": "on"
                                },
                                {
                                    "color": "#ffffff"
                                },
                                {
                                    "lightness": 16
                                }
                            ]
                        },
                        {
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "saturation": 36
                                },
                                {
                                    "color": "#333333"
                                },
                                {
                                    "lightness": 40
                                }
                            ]
                        },
                        {
                            "elementType": "labels.icon",
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "featureType": "transit",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#f2f2f2"
                                },
                                {
                                    "lightness": 19
                                }
                            ]
                        },
                        {
                            "featureType": "administrative",
                            "elementType": "geometry.fill",
                            "stylers": [
                                {
                                    "color": "#fefefe"
                                },
                                {
                                    "lightness": 20
                                }
                            ]
                        },
                        {
                            "featureType": "administrative",
                            "elementType": "geometry.stroke",
                            "stylers": [
                                {
                                    "color": "#fefefe"
                                },
                                {
                                    "lightness": 17
                                },
                                {
                                    "weight": 1.2
                                }
                            ]
                        }
                    ]
                });

            var markerImage = {
                url: config['about']['map']['markerImage'],
                size: new google.maps.Size(80, 80),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(17, 34),
                scaledSize: new google.maps.Size(35, 35)
            };

            marker = new google.maps.Marker({
                position: coordinates,
                map: map,
                icon: markerImage
            });
        }

        setTimeout(initMap, 500)
    }
});
//Handler news page for barba.js
var NewsPage = Barba.BaseView.extend({
    namespace: 'news-page',

    onEnterCompleted: function () {
        function initSwiperNews() {
            var swiper = new Swiper('.swiper-slider-news', {
                paginationClickable: true,
                loop: true,
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
                speed: 800
            });
        }

        initPopupNews();
        initSwiperNews();
    }
});
//Handler about page for barba.js
var AboutPage = Barba.BaseView.extend({
    namespace: 'about-page',

    onEnterCompleted: function () {
        function initVideo() {
            $('.wrapper-about_video-img-box').mouseover(function () {
                $('.wrapper-about_img').css('opacity', '0');
                if ($(this).find("video").length) {
                    $(this).find("video")[0].play();
                }
            });

            $('.wrapper-about_video-img-box').mouseout(function () {
                $('.wrapper-about_img').css('opacity', '1');
                if ($(this).find("video").length) {
                    $(this).find("video")[0].pause();
                }
            });
        }

        function initSwiperGallery() {
            var swiper = new Swiper('.swiper-slider-about-gallery', {
                paginationClickable: true,
                loop: true,
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
                pagination: '.swiper-pagination',
                paginationType: 'fraction',
                speed: 800
            });
        }

        function initSliderWorking() {
            var swiper = new Swiper('.swiper-slider-working', {
                paginationClickable: true,
                loop: true,
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
                pagination: '.swiper-pagination',
                paginationType: 'fraction',
                speed: 800
            });
        }

        // initVideo();
        initSwiperGallery();
        initSliderWorking();
    }
});
//Handler portfolio page for barba.js
var PortfolioPage = Barba.BaseView.extend({
    namespace: 'portfolio-page',

    onEnterCompleted: function () {

        function initMakeOrder() {
            $('.make-order-popup').click(function () {
                $('.container-overflow').removeClass('overflow-open');
                $('.container-popup-portfolio').css('right', '-115%');
                $('.container-btn-portfolio').css('right', '-115%');
                $('body').removeClass('overflow-hidden');

                var elementClick = $(this).attr("href");
                var destination = $(elementClick).offset().top;

                function setTimeAncour() {
                    $("html:not(:animated),body:not(:animated)").animate({
                        scrollTop: destination
                    }, 800);
                    $('.input-name').focus();
                }

                setTimeout(setTimeAncour, 450);

                return false;
            });
        }

        initPopupPortfolio();
        initMakeOrder();
    }
});


Barba.Dispatcher.on('newPageReady', function (currentStatus, oldStatus, container, newPageRawHTML) {
    var url = window.location.href;
    var path = window.location.pathname;
    var dataPathNews = $('.container-popup-news').data('path');
    var dataPathPortfolio = $('.container-popup-portfolio').data('path');

    //Dispatcher for lang switcher
    if (path.indexOf(config['root']['de']) !== -1) {
        $('#de').addClass('active disabled');
        $('#en').removeClass('active disabled')/*.attr('href', path.replace(config['root']['de'], config['root']['en']))*/;
    } else {
        $('#de').removeClass('active disabled');
        if (path !== '/') {
            $('#de').attr('href', config['root']['de'] + path)
        }
        $('#en').addClass('active disabled');
    }

    //Dispatcher for nav.link into portfolio
    if (path.indexOf(config['portfolio']['pageUrl']) === -1) {
        $("a[href^='/'].nav_link").removeClass('active');
        $("a[href='" + path + "'].nav_link").addClass('active');
    } else if (path === config['portfolio']['pageUrl']) {
        $("a[href^='/'].nav_link").removeClass('active');
        $("a[href='" + path + "'].nav_link").addClass('active');
    } else {
        //for filter
        $("a[href^='/'].link-menu_list").removeClass('active');
        $("a[href='" + path + "'].link-menu_list").addClass('active');
    }

    //Dispatcher for detail link news/portfolio
    if (path.indexOf(config['news']['pageUrl']) !== -1 && path.length > 6) {
        $('.btn-scroll-top').click();

        $('[data-url="' + path + '"].popup-news').click();
    }
    if (path.indexOf(config['portfolio']['pageUrl']) !== -1 && path.length > 11) {
        $('.btn-scroll-top').click();
        initPopupPortfolio();
    }

    //Dispatcher for detailing news page opening from external page
    if (dataPathNews === path) {
        setTimeout(function () {
            $('.container-overflow').addClass('overflow-open');
            $('.container-overflow-back-page').addClass('overflow-open');
            $('[data-path="' + dataPathNews + '"].container-popup-news').css('right', '0');
            $('body').addClass('overflow-hidden');
        }, 500);
    }

    //Dispatcher for detailing portfolio page opening from external page
    if (dataPathPortfolio === path) {
        setTimeout(function () {
            $('.container-overflow').addClass('overflow-open');
            $('.container-overflow-back-page').addClass('overflow-open');
            $('[data-path="' + dataPathPortfolio + '"].container-popup-portfolio').css('right', '0');
            $('[data-path="' + dataPathPortfolio + '"] .container-btn-portfolio').css('right', '0');
            $('body').addClass('overflow-hidden');
        }, 500);
    }

    initInfinityScroll();

    //Go to up into new page
    if ((path === config['root']['en'] || path === config['root']['de']) && oldStatus.url) {
        $('body,html').animate({scrollTop: 0}, 800);
    }
});

/** @deprecated not used */
function newsDetailAjax(link, typeQuery) {
    $.ajax({
        url: link,
        type: 'GET',
        dataType: "html",
        headers: typeQuery,
        success: function (data, textStatus, jqXHR) {
            $('.container-overflow').remove();
            $('.container-overflow-back-page').remove();
            $("[data-namespace = news-page] .container-wrapper").after(data);
            initPopupNews();
            initSwiperNews();
        }
    });
}

/** @deprecated not used */
function portfolioDetailAjax(link, typeQuery) {
    $.ajax({
        url: link,
        type: 'GET',
        dataType: "html",
        headers: typeQuery,
        success: function (data, textStatus, jqXHR) {
            $('.container-overflow').remove();
            $('.container-overflow-back-page').remove();
            $("[data-namespace = portfolio-page] .container-wrapper").after(data);
            initPopupPortfolio();
            initMakeOrder();
        }
    });
}

function initInfinityScroll() {
    (function () {
        var ajaxPagerLoadingClass = 'ajax-pager-loading',
            ajaxPagerWrapClass = 'ajax-pager-wrap',
            ajaxPagerLinkClass = 'ajax-pager-link',
            ajaxWrapAttribute = 'wrapper-class',
            ajaxPagerLoadingTpl = ['<span class="' + ajaxPagerLoadingClass + '">',
                'Загрузка…',
                '</span>'].join(''),
            busy = false,


            attachPagination = function (wrapperClass) {
                var $wrapper = $('.' + wrapperClass),
                    $window = $(window);

                if ($wrapper.length && $('.' + ajaxPagerWrapClass).length && isEnabledScroll) {
                    $window.on('scroll', function () {
                        if (($window.scrollTop() + $window.height()) >
                            ($wrapper.offset().top + $wrapper.height()) && !busy) {
                            busy = true;
                            $('.' + ajaxPagerLinkClass).click();
                        }
                    });
                }
            },


            ajaxPagination = function (e) {
                e.preventDefault();

                busy = true;
                var wrapperClass = $('.' + ajaxPagerLinkClass).data(ajaxWrapAttribute),
                    $wrapper = $('.' + wrapperClass),
                    $link = $(this);

                if ($wrapper.length && isEnabledScroll) {
                    $('.' + ajaxPagerWrapClass).append(ajaxPagerLoadingTpl);
                    $.get($link.attr('href'), {'AJAX_PAGE': 'Y'}, function (data) {
                        $('.' + ajaxPagerWrapClass).remove();
                        $wrapper.append(data);
                        initPopupNews();
                        initPopupPortfolio();
                        attachPagination(wrapperClass);
                        busy = false;
                    });
                }
            };

        $(function () {
            if ($('.' + ajaxPagerLinkClass).length
                && $('.' + ajaxPagerLinkClass).data(ajaxWrapAttribute).length) {
                attachPagination($('.' + ajaxPagerLinkClass).data(ajaxWrapAttribute));
                $(document).off().on('click', '.' + ajaxPagerLinkClass, ajaxPagination);
            }
        });

    })();
}


$(window).scroll(function (e) {
    initFixBlock();
    initFixSliderAbout();
    initOpacityBest();
});


focusInput();
initOpenMenu();
initSliderWorking();
initDropzone();
scrollUp();
initFixBlock();
initFixSliderAbout();
initOpacityBest();
initSwiperGallery();
initSwiperNews();
initPopupNews();
initMakeOrder();
initPopupPortfolio();
initValidForm();
initApplicationForm();
initCloseMenu();


MapPage.init();
NewsPage.init();
AboutPage.init();
PortfolioPage.init();
BarbaWidget.init();