;(function($){
    $(function (){
        //Show toggle menu
        $('header label').on('click', function () {
            $('nav').toggleClass('nav__list');
        });
        //Hide toggle menu
        $('nav a').on('click', function (){
            $('nav').toggleClass('nav__list');
            $('#hamburger').prop('checked', false);
        });
    });
})(jQuery);

