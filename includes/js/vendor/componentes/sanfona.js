(function() {
    $.fn.sanfona_horizontal = function(options) {

        var BASE = {};

        var settings = $.extend({
            open: true
        }, options);

        BASE.SETTINGS = settings;
        BASE.THIS = this;
        var _containerTela = $(BASE.THIS);
        var section = _containerTela.find(".flexbox-slide");

        function toggleAccordion() {

            section.removeClass('activeSlide');
            $(this).addClass('activeSlide');
            $(this).attr('comp', 1);

            var _comp = true;
            section.each(function(indice, item) {
                if (!$(item).attr('comp'))
                    _comp = false;
            });

            if (_comp) {
                course.liberarNavegacao();
            }
        }

        section.on('click', toggleAccordion);
    }


}(jQuery));