/**
 * Created by chenzhengtong on 2014/10/17.
 */

(function () {

    "use strict";

    window.TETemplate = window.TETemplate || {};

    /*
    window.TETemplate.demo = _.template('\
    <!-- nav bar -->\
    <nav class="navbar navbar-default navbar-fixed-top">\
        <div class="container">\
        <div class="col-md-12">\
            <label class="label label-info">用户名：aaa</label>\
            <label class="label label-danger">下次刷新时间：18:30:00</label>\
        </div>\
        </div>\
    </nav>\
    <!--  -->\
    <div class="container">\
        <div class="col-md-12">\
            <div class="panel panel-default">\
                <div class="panel-body">\
                    <p>\
                    冷启：\
                        <a class="btn btn-success" role="button">A</a>\
                        <a class="btn btn-primary" role="button">B</a>\
                        <a class="btn btn-danger" role="button">C</a>\
                        <a class="btn btn-default" role="button">D</a>\
                        <a class="btn btn-default" role="button">E</a>\
                        <a class="btn btn-default" role="button">F</a>\
                        <a class="btn btn-default" role="button">G</a>\
                        <a class="btn btn-default" role="button">H</a>\
                        <a class="btn btn-default" role="button">I</a>\
                        <a class="btn btn-default" role="button">J</a>\
                        <a class="btn btn-default" role="button">K</a>\
                        <a class="btn btn-default" role="button">L</a>\
                        <a class="btn btn-default" role="button">M</a>\
                        <a class="btn btn-default" role="button">N</a>\
                    </p>\
                    <p>\
                    补充：\
                        <a class="btn btn-default" role="button">a</a>\
                        <a class="btn btn-default" role="button">b</a>\
                        <a class="btn btn-default" role="button">c</a>\
                        <a class="btn btn-default" role="button">d</a>\
                        <a class="btn btn-default" role="button">e</a>\
                        <a class="btn btn-default" role="button">f</a>\
                        <a class="btn btn-default" role="button">g</a>\
                        <a class="btn btn-default" role="button">h</a>\
                        <a class="btn btn-default" role="button">i</a>\
                        <a class="btn btn-default" role="button">j</a>\
                        <a class="btn btn-default" role="button">k</a>\
                        <a class="btn btn-default" role="button">l</a>\
                        <a class="btn btn-default" role="button">m</a>\
                        <a class="btn btn-default" role="button">n</a>\
                    </p>\
                    <hr />\
                    <p>\
                        <a class="btn btn-primary" role="button" onclick="refresh();">刷新</a>\
                    </p>\
                </div>\
            </div>\
        </div>\
    </div>\
    <!-- -->\
    <div class="container">\
        <div class="col-md-12">\
            <div class="table-responsive">\
                <table class="table table-fixed-layout">\
                    <thead>\
                        <tr>\
                            <td>URL</td>\
                            <td>标题</td>\
                            <td>类别</td>\
                            <td>图片</td>\
                            <td>关键词</td>\
                            <td>理由</td>\
                            <td>审核状态</td>\
                        </tr>\
                    </thead>\
                    <tbody id="id-article-list">\
                        <tr>\
                            <td><a href="#">http://a.b.com/c/d</a></td>\
                            <td><h5>这是个标题</h5></td>\
                            <td>热点</td>\
                            <td><img class="img-thumbnail img-responsive" src="img/avatar_default_small.jpg" /></td>\
                            <td>\
                                <p><label class="label label-default">关键词1</label></p>\
                                <p><label class="label label-default">关键词2</label></p>\
                                <p><label class="label label-default">关键词3</label></p>\
                            </td>\
                            <td>\
                                <p><label class="label label-default">理由1</label></p>\
                                <p><label class="label label-default">理由2</label></p>\
                                <p><label class="label label-default">理由3</label></p>\
                            </td>\
                            <td>通过</td>\
                        </tr>\
                    </tbody>\
                </table>\
            </div>\
        </div>\
    </div>\
    ');
     */

    window.TETemplate.tpl_main_content = _.template('\
    <%\
        var mid = window.localStorage.getItem("mid");\
    %>\
    <!-- nav bar -->\
    <nav class="navbar navbar-default navbar-fixed-top">\
        <div class="container">\
        <div class="col-md-12">\
            <label class="label label-info">用户名：<%=mid%></label>\
            <label class="label label-danger">刷新倒计时：<span id="id-timer"></span></label>\
        </div>\
        </div>\
    </nav>\
    <!--  -->\
    <div class="container">\
        <div class="col-md-12">\
            <div class="panel panel-default">\
                <div class="panel-body">\
                    <p>\
                    冷启：\
                        <span id="id-channel-selected">\
                            <a class="btn btn-success" role="button">A</a>\
                            <a class="btn btn-primary" role="button">B</a>\
                            <a class="btn btn-danger" role="button">C</a>\
                            <a class="btn btn-default" role="button">D</a>\
                            <a class="btn btn-default" role="button">E</a>\
                            <a class="btn btn-default" role="button">F</a>\
                            <a class="btn btn-default" role="button">G</a>\
                            <a class="btn btn-default" role="button">H</a>\
                            <a class="btn btn-default" role="button">I</a>\
                            <a class="btn btn-default" role="button">J</a>\
                            <a class="btn btn-default" role="button">K</a>\
                            <a class="btn btn-default" role="button">L</a>\
                            <a class="btn btn-default" role="button">M</a>\
                            <a class="btn btn-default" role="button">N</a>\
                        </span>\
                    </p>\
                    <p>\
                    补充：\
                        <span id="id-channel-unselected">\
                            <a class="btn btn-default" role="button">a</a>\
                            <a class="btn btn-default" role="button">b</a>\
                            <a class="btn btn-default" role="button">c</a>\
                            <a class="btn btn-default" role="button">d</a>\
                            <a class="btn btn-default" role="button">e</a>\
                            <a class="btn btn-default" role="button">f</a>\
                            <a class="btn btn-default" role="button">g</a>\
                            <a class="btn btn-default" role="button">h</a>\
                            <a class="btn btn-default" role="button">i</a>\
                            <a class="btn btn-default" role="button">j</a>\
                            <a class="btn btn-default" role="button">k</a>\
                            <a class="btn btn-default" role="button">l</a>\
                            <a class="btn btn-default" role="button">m</a>\
                            <a class="btn btn-default" role="button">n</a>\
                        </span>\
                    </p>\
                    <hr />\
                    <p>\
                        <a class="btn btn-primary" role="button" id="id-btn-refresh">刷新</a>\
                    </p>\
                </div>\
            </div>\
        </div>\
    </div>\
    <!-- -->\
    <div class="container">\
        <div class="col-md-12">\
            <div class="table-responsive">\
                <table class="table table-fixed-layout">\
                    <thead>\
                        <tr>\
                            <td>URL</td>\
                            <td>标题</td>\
                            <td>类别</td>\
                            <td>图片</td>\
                            <td>关键词</td>\
                            <td>理由</td>\
                            <td>审核状态</td>\
                        </tr>\
                    </thead>\
                    <tbody id="id-article-list">\
                        \
                    </tbody>\
                </table>\
            </div>\
        </div>\
    </div>\
    ');

    window.TETemplate.tpl_init = _.template('\
    <!-- -->\
    <div class="container">\
        <div class="col-md-4 col-md-offset-4">\
            <div class="panel panel-default">\
                <div class="panel-body">\
                    <fieldset>\
                        <div class="form-group">\
                            <input class="form-control" placeholder="MID" id="id-input-mid" type="text">\
                        </div>\
                        <input class="btn btn-lg btn-success btn-block" type="submit" value="LOGIN" \
                        id="id-btn-login">\
                    </fieldset>\
                </div>\
            </div>\
        </div>\
    </div>\
    ');

})();
