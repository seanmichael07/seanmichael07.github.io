$(document).ready(function () {
    var btn;
    $("#about-me__btn").click(function () {
        if (!$("#about-me__btn").hasClass('detached')) {
            $('#about-me__btn').addClass('detached');
            btn = $("#about-me__btn").detach();
            btn.appendTo("#about-me__inner");
            btn.text("Read Less");
        } else if ($("#about-me__btn").hasClass('detached')) {
            btn = $("#about-me__btn").detach();
            btn.appendTo("#btn-append__end");
            $('#about-me__btn').removeClass('detached');
            btn.text("Read More");
        }
    });
});