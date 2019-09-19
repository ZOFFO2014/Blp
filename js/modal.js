$(document).ready(function() {
    $('.trigger').on('click', function() {
        $('.modal-wrapper').toggleClass('open');
        $('.ordernow').toggleClass('blur-it');
        return false;
    });
});