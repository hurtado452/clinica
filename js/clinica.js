// Closes the sidebar menu
$("#close-button").click(function(e) {
    e.preventDefault();
    $("#navbar-main").collapse('hide');
});

$(function() {
    $('.nav a').on('click', function(){ 
        if($('.navbar-toggle').css('display') !='none'){
            $(".navbar-toggle").trigger( "click" );
        }
    });
});

// Scrolls to the selected menu item on the page
$(function() {
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
            $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                    return false;
            }
         }
    });
            
});