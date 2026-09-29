(function ($, window, document, undefined) {
    'use strict';

    $(document).ready(function() {

        // Page Loader
        jQuery("#preloader").delay(500).fadeOut(500);

        // Scroll Reveal
        window.sr = new scrollReveal();

        // Fotokaruselu
        var $carousel = $('#ws-photo-carousel');
        if ($carousel.length) {
            $carousel.owlCarousel({
                items: 4,
                itemsDesktop: [1199, 4],
                itemsDesktopSmall: [980, 3],
                itemsTablet: [768, 2],
                itemsMobile: [479, 1],
                navigation: true,
                navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
                pagination: false,
                loop: true
            });
        }

        // Fotogalerie / Lightbox
        var $galleryOriginals = $('.ws-gallery-item');
        if ($galleryOriginals.length) {
            var slides = $galleryOriginals.map(function() {
                return {
                    caption: $(this).data('caption') || '',
                    full: $(this).data('full') || ''
                };
            }).get();

            var $lightbox = $('.ws-lightbox');
            var $placeholder = $lightbox.find('.ws-photo-placeholder');
            var $img = $lightbox.find('.ws-lightbox-img');
            var $caption = $lightbox.find('.ws-lightbox-caption');
            var current = 0;

            function showSlide(index) {
                current = (index + slides.length) % slides.length;
                var slide = slides[current];
                $caption.text(slide.caption);
                if (slide.full) {
                    $img.attr('src', slide.full).attr('alt', slide.caption).show();
                    $placeholder.hide();
                } else {
                    $placeholder.find('span').text(slide.caption);
                    $placeholder.show();
                    $img.hide();
                }
            }

            $(document).on('click', '.ws-gallery-item', function() {
                showSlide(parseInt($(this).data('index'), 10) || 0);
                $lightbox.addClass('is-open');
            });
            $lightbox.find('.ws-lightbox-close').on('click', function() {
                $lightbox.removeClass('is-open');
            });
            $lightbox.on('click', function(e) {
                if (e.target === this) { $lightbox.removeClass('is-open'); }
            });
            $lightbox.find('.ws-lightbox-prev').on('click', function() { showSlide(current - 1); });
            $lightbox.find('.ws-lightbox-next').on('click', function() { showSlide(current + 1); });
            $(document).on('keydown', function(e) {
                if (!$lightbox.hasClass('is-open')) { return; }
                if (e.key === 'Escape') { $lightbox.removeClass('is-open'); }
                if (e.key === 'ArrowLeft') { showSlide(current - 1); }
                if (e.key === 'ArrowRight') { showSlide(current + 1); }
            });
        }

        // Aktuality - filtr podle štítku (lze prolinkovat přes #tiskove-zpravy apod.)
        var $newsFilter = $('.ws-news-filter');
        if ($newsFilter.length) {
            var $newsButtons = $newsFilter.find('.ws-news-filter-btn');
            var $newsItems = $('.ws-news-grid .ws-journal-item');
            var $newsEmpty = $('.ws-news-empty');

            function applyNewsFilter(filter) {
                if (!$newsButtons.filter('[data-filter="' + filter + '"]').length) { filter = 'vse'; }
                $newsButtons.each(function() {
                    var active = $(this).data('filter') === filter;
                    $(this).toggleClass('is-active', active).attr('aria-pressed', active ? 'true' : 'false');
                });
                var visible = 0;
                $newsItems.each(function() {
                    var show = filter === 'vse' || $(this).data('category') === filter;
                    this.hidden = !show;
                    if (show) { visible++; }
                });
                $newsEmpty.prop('hidden', visible > 0);
            }

            $newsButtons.on('click', function() {
                var filter = $(this).data('filter');
                applyNewsFilter(filter);
                if (window.history && history.replaceState) {
                    history.replaceState(null, '', filter === 'vse' ? window.location.pathname : '#' + filter);
                }
            });
            applyNewsFilter(window.location.hash.replace('#', '') || 'vse');
        }

        // FAQ - ikona +/- podle stavu rozbalení
        $('.ws-faq-box .accordion-body').on('shown.bs.collapse', function() {
            $('.ws-faq-box .accordion-toggle[href="#' + this.id + '"]').addClass('active');
        }).on('hidden.bs.collapse', function() {
            $('.ws-faq-box .accordion-toggle[href="#' + this.id + '"]').removeClass('active');
        });

    });

})(jQuery, window, document);
