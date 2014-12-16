var pb = function(type, params){
    try{
        var uniqueid = (new Date().getTime())*1000+Math.round(Math.random()*1000), refer = document.referrer;
        var imgurl = ["http://pb.sogou.com/"+type+".gif?uigs_productid=appsearch&type=app_tongcheng&uigs_t="];
        imgurl.push((new Date()).getTime());
        for(var k in params) {
            imgurl.push('&', k, '=', params[k]);
        }
        imgurl.push("&uniqueid=", uniqueid);
        imgurl.push('&uigs_refer=', refer);
        (new Image()).src = imgurl.join("");
    }catch(E){

    }
};