(function () {
    //
    $.ajax({
        url: "list.csv",
        type: "get",
        data: "",
        dataType: "text",
        success: function (data, status, jqxhr) {
            var data_list = data.split("\r\n");
            var prov_dict = {};
            for (var idx in data_list) {
                var each_row = data_list[idx];
                if (!each_row || each_row === "" || each_row.indexOf(",") === -1) {
                    continue;
                }
                var each_list = each_row.split(",");
                var prov = each_list[0];
                var scene = each_list[1];
                //
                if (!(prov in prov_dict)) {
                    prov_dict[prov] = new Array();
                }
                prov_dict[prov].push(scene);
            }
            //
            var prov_list = Object.keys(prov_dict);
            var out_html = "<option disabled selected value='省份'>请选择省份</option>";
            for (var idx in prov_list) {
                out_html += "<option value='" + prov_list[idx] + "'>" + prov_list[idx] + "</option>";
            }
            $("#id-tc-addr-select").html(out_html);
            //
            $("#id-tc-addr-select").bind("change", function () {
                //
                var prov = $("#id-tc-addr-select").val();
                var temp_list = prov_dict[prov];
                var temp_html = "";
                for (var idx in temp_list) {
                    var temp_addr = temp_list[idx];
                    temp_html += "<span style='margin-right:12px'>" + temp_addr + "</span>";
                }
                $("#id-tc-addr-list").html(temp_html);
                //
                location.hash = "#id-tc-addr-list";
            });
            //
            /*var prov = $("#id-tc-addr-select").val("省份");
            var temp_list = prov_dict[prov];
            var temp_html = "";
            for (var idx in temp_list) {
                var temp_addr = temp_list[idx];
                temp_html += "<span style='margin-right:10px'>" + temp_addr + "</span>";
            }
            $("#id-tc-addr-list").html(temp_html);
            $("#id-tc-addr-select-after").bind("click", function () {
                $("#id-tc-addr-select")[0].click();
            });*/
        },
        error: function (jqxhr, status, error) {
            console.log(error);
        }
    });
})();