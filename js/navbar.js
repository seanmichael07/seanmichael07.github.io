$(document).ready(function() {
    $(document).scroll(function() {
        // If the document is scrolled past 40px, remove transparency on navbar and make it dark
        // else if user has scrolled to top, make navbar transparent again 
        if ($(document).scrollTop() > 60) {
             $(".navbar").removeClass("bg-transparent").addClass("navbar-dark").addClass("bg-dark");
        } else if ($(document).scrollTop() < 10) {
            $(".navbar").removeClass("navbar-dark").removeClass("bg-dark").addClass("bg-transparent");
        }
    }); 
});
