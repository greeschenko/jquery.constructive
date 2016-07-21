(function($) {

    $.fn.constructiveParallax = function(options) {

        var settings = $.extend({
            "speed": "15"
        }, options);

        return this.each(function() {

            var self = $(this);

            self
                .addClass('parallax_wrap')
                .wrapInner("<div class='parallax_content'>")
                .prepend("<div class='parallax_img' style='background-image:url(" + self.data('image') + ");'>");

            function parallaxInit() {

                var pheight = self.height();

                self.children(".parallax_img").css({
                    "height": pheight * 2,
                    "top": -pheight
                });

                var st = $(document).scrollTop();
                var sp = self.offset().top - $(window).height();
                var ob = self.offset().top + pheight;
                var sr = st - sp;

                if (st >= sp && st <= ob) {

                    self.children(".parallax_img").css({
                        "transform": "translate3d(0px, " + sr / settings.speed + "%, .01px)",
                        "-webkit-transform": "translate3d(0px, " + sr / settings.speed + "%, .01px)"
                    });

                };

            };

            $(window).on('scroll', function() {
                parallaxInit();
            }).on('load', function() {
                parallaxInit();
            });
            $("*").on('resize', function() {
                parallaxInit();
            });

        });

    };

})(jQuery);
