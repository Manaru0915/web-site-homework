$(document).ready(function() {
    $('.container').scroll(function() {
        $('.js-fade').each(function() {
            var pos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > pos - windowHeight + 100) {
                $(this).addClass('scroll');
            }
        });

        let scroll = $('.container').scrollTop();
        console.log(scroll);
        if (scroll >= 1310) {
            $('#smooth1').addClass('is-animated');
        }
				if (scroll >= 4800) {
            $('#smooth2').addClass('is-animated');
        }
				if(scroll >= 8300) {
            $('#smooth3').addClass('is-animated');
        }
    });
        $('#scroll-btn').click(function() {
            console.log('Scroll button clicked');
            window.scrollBy({
                top: window.innerHeight, // 画面の高さ分スクロール
                left: 0,
                behavior: 'smooth' // スムーズにスクロール
            });
    });
});
