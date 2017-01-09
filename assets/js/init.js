/**
 * Created by marcio on 08/01/17.
 */

var HomersObject = {};

HomersObject.init = function () {

    return {
        pluginInit: function () {
            $('.slick-carousel').slick();
        }
    }

}();


$(function () {
    HomersObject.init.pluginInit();
});