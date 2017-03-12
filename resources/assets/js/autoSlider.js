/**
 * Created by abisalazar on 11/03/2017.
 */

/*
 By Abi Salazar, www.abisalazar.co.uk
 Available for use under the MIT License
 */


(function( $ ) {
    $.fn.autoSlider = function(options) {
        var settings = $.extend({
            // These are the defaults.
            auto: true,
            activateBtn: null,
            closeBtnShow: true,
            closeBtnWord: "Close",
            closeBtnColor: "black",
            closeBtnSize: "17px",
            sliderTimer: "3s"
        }, options );

        var elm = $(this);
        this.CloseBtn = null;
        this.isSliderUp = settings.auto;


        var init = function () {
            AddClasses();
            if(settings.closeBtnShow){
                AddCloseBtn();
            }
            ToggleCloseBtn();
            if(settings.auto) {
                AutoSlide();
            }
            if(settings.activateBtn != null){
                ActivateSlider();
            }


        };

       var AddClasses = function () {
             elm.parent().addClass('autoSlider__MainContainer');
             elm.addClass('autoSlider__Image');
         };

       var ActivateSlider = function () {
             $(settings.activateBtn).on('click', function () {
                  if( ! this.isSliderUp){
                     AutoSlide();
                 }else{
                     this.CloseBtn.click();
                 }

             }.bind(this));
         };

       var AddCloseBtn = function () {
            this.CloseBtn = $('<div class="autoSlider__CloseBtn">'+ settings.closeBtnWord + '</div>');
            this.CloseBtn.css({
                'font-size' : settings.closeBtnSize,
                'color' : settings.closeBtnColor
            });

            elm.parent().append(this.CloseBtn);

            this.CloseBtn.on('click', function () {
                elm.css("transform", "translateY(0px)");
                this.isSliderUp = false;
                ToggleCloseBtn();
            }.bind(this));

            return this;
       };

       var ToggleCloseBtn = function () {
           if(this.isSliderUp === true){
               this.CloseBtn.show();
           }else{
               this.CloseBtn.hide();
           }
       };

       var AutoSlide = function () {
           elm.css({"transform" : "translateY(-100%)", "transition-duration" : settings.sliderTimer});
           this.isSliderUp = true;
           ToggleCloseBtn();
         };

       init();

    }
}( jQuery ));

