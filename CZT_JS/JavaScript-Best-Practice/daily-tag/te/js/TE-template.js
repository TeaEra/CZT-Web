/**
 * Created by TeaEra @ 2014-10-26.
 */

(function () {
    "use strict";

    // TETemplate
    window.TETemplate = window.TETemplate || {};

    window.TETemplate.tpl_title = _.template('\
    <!-- -->\
    <div class="container">\
        <div class="col-lg-3 col-lg-offset-2 col-md-3 col-md-offset-2 col-sm-5 col-sm-offset-1 col-xs-7">\
            <h1 class="text-center"><span class="label label-info">Daily Tag</span></h1>\
        </div>\
    </div>\
    <br />\
    ');

    window.TETemplate.tpl_login = _.template('\
    <!-- -->\
    <div class="container">\
        <div class="col-lg-3 col-lg-offset-2 col-md-3 col-md-offset-2 col-sm-5 col-sm-offset-1 col-xs-5 col-xs-offset-1">\
            <div class="form-group">\
                <input class="form-control" type="text" placeholder="id" />\
            </div>\
            <div class="form-group">\
                <input class="form-control" type="password" placeholder="password" />\
            </div>\
            <input class="btn btn-lg btn-info btn-block" type="submit" value="Login"/>\
        </div>\
    </div>\
    <br />\
    ');

    window.TETemplate.tpl_tag_buttons = _.template('\
    <!-- -->\
    <div class="container">\
        <div class="col-lg-3 col-lg-offset-2 col-md-3 col-md-offset-2 col-sm-5 col-sm-offset-1 col-xs-5 col-xs-offset-1">\
            <div class="row">\
                <button class="btn-block btn btn-warning" type="button">Morning Tag</button>\
                <button class="btn-block btn btn-success" type="button">Evening Tag</button>\
            </div>\
        </div>\
    </div>\
    <br />\
    ');

})();