$(document).ready(function() {
    masks();
    callSelect2();

    $('body').on('click', '.changeStep', function(e) {
        e.preventDefault();

        var target = $(this).attr('href');
        var currentStep = parseInt($('.show').attr('step'));
        var targetStep = parseInt($(this).attr('step'));

        if (validateForm('.show .form-control', true) && (currentStep + 1 == targetStep || currentStep - 1 == targetStep)) {
            $('.changeStep').removeClass('active');
            $('a[href="'+target+'"].nav-link').addClass('active');
            $('.step').hide();
            $('.show').removeClass('show');
            $(target).show();
            $(target).addClass('show');
        }
    });
});
