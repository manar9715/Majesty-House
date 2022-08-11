//========================Load=====================//

$(document).ready(function () {
    "use strict";
    $(window).on('load', function () {
        $(".loader").fadeOut(100, function () {
            $("body").css("overflow", "auto");
            $(this).fadeOut(100, function () {
                $(this).remove();
            });
        });
    });

});

