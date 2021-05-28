(function() {
    $.fn.aba = function(options) {

        var BASE = {};

        var settings = $.extend({
            open: true
        }, options);

        BASE.SETTINGS = settings;
        BASE.THIS = this;
        var _containerTela = $(BASE.THIS);

        _containerTela.find(".item .tabs__label").removeClass('tabs__labelAtivo');
        _containerTela.find(".item .tabs__content").removeClass('tabs__contentAtivo');
        _containerTela.find(".item1 .tabs__label").addClass('tabs__labelAtivo');
        _containerTela.find(".item1 .tabs__content").addClass('tabs__contentAtivo');
        _containerTela.find(".item1").attr('ativo', 1);

        _containerTela.find(".item .tabs__label").on('click', function() {

            var _parent = $(this).parent();
            var _item = parseInt(_parent.attr('item'));

            _parent.attr('ativo', 1);

            _containerTela.find(".item .tabs__label").removeClass('tabs__labelAtivo');
            _containerTela.find(".item .tabs__content").removeClass('tabs__contentAtivo');

            _containerTela.find(".item" + _item + " .tabs__label").addClass('tabs__labelAtivo');
            _containerTela.find(".item" + _item + " .tabs__content").addClass('tabs__contentAtivo');

            var comp = true;
            _containerTela.find(".item").each(function(indice, item) {

                if (!$(item).attr('ativo'))
                    comp = false;

            });

            if (comp) {
                course.liberarNavegacao();
            }

        });
    }


}(jQuery));