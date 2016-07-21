(function($) {
    $.fn.constructiveTelescope = function( options ) {
        var settings = $.extend({
            "speed" : '15',
        }, options);

        var active = {};
        var lock = 0;

        function itemScroll(event,delta) {
            if (lock == 0 ) {
                var h = ah = active.height();
                if (active.data('max')) {
                    h = active.data('max');
                }
                var t = Number(active.position().top);

                if (delta < 0 && active.next().hasClass('telescope')) {
                    var d = t - ah*0.07;
                }else if (delta > 0){
                    var d = t + ah*0.07;
                }

                console.log([active.index(),t,d,h]);

                if (d > 0) {
                    d = 0;
                }else if(0-h >= d) {
                    d = 0-h;
                }

                active.css({
                    "transform" : "translate3d(0px, " + d + "px, .01px)",
                    "-webkit-transform" : "translate3d(0px, " + d + "px, .01px)"
                });
                console.log([active.index(),t,d,h]);
                if (d == 0-h) {
                    if (active.next().hasClass('telescope')) {
                        active = active.next();
                    }
                }else if( d == 0 ){
                    if (active.prev().hasClass('telescope')) {
                        active = active.prev();
                    }
                }
                lock = 1;
                setTimeout(function(){
                    lock=0;
                },10);
            }
        }

        $(document).bind('mousewheel DOMMouseScroll', function(event) {
            event.preventDefault();
            var delta = event.originalEvent.wheelDelta || -event.originalEvent.detail;
            itemScroll(event, delta);
        });

        return this.each(function(i) {
            var self = $(this);
            self.addClass('telescope');
            if (i == 0) {
                active = self;
            }
            self.css({
                'position' : 'absolute',
                'z-index' : 1000-i,
                'height' : $(window).height(),
                'top' : 0,
                'left' : 0,
            });
        });

    };
})(jQuery);
