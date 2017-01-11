/**
 * Created by marcio on 08/01/17.
 */

var HomersObject = {};

HomersObject.init = function () {

    var setNewsletterStorage = function () {
        localStorage.setItem('newsletter', 'true');
    };

    var openModal = function () {
        $("#newsletter-modal").modal();
    };

    var closeModal = function () {
        $("#newsletter-modal").modal('hide');
    };


    return {
        pluginInit: function () {
            $('.slick-carousel').slick();
        },

        newsletterInit: function () {
            $('body').mouseleave(function () {
                if (localStorage.getItem('newsletter') != 'true') {
                    openModal();
                    setNewsletterStorage();
                }
            });

            $("#newsletter-modal").find(".btn.btn-success").click(function () {

                if ($('input[name=newsletter_email]').val().length > 0) {
                    alert('Email cadastrado!');
                    closeModal();
                }
            });


            //Reset : localStorage.setItem('newsletter',null)
        }

    }

}();


$(function () {
    HomersObject.init.pluginInit();
    HomersObject.init.newsletterInit();
});