(function ($) {
    'use strict';
    var form = $('#contact'),
        form_data;
    
    form.submit(function (e) {
        e.preventDefault();
        form_data = $(this).serialize();
        $.ajax({
            type: 'POST',
            url: form.attr('action'),
            data: form_data
        })
    });
    
})(jQuery);