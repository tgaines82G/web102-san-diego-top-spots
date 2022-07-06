$(document).ready(function() {
    // write your code here
    $.getJSON("data.json", function(data) {
        $.each(data, function(key, value) {
            $("#data_table").append(
                `<tr data-lat="${value.location[0]}" data-lng="${value.location[1]}">
            <td id="name">${value.name}</td> 
            <td>${value.description}</td>
        </tr>`
            );

            $(function() {
                $('tr').each(function(i, tr) {
                    $(tr).mouseover(function() {
                        var el = $(this)[0];
                        var lat = el.dataset.lat;
                        var lng = el.dataset.lng;
                        $("iframe").attr("src", `https://maps.google.com/maps?q=${lat},${lng}&t=&z=12&ie=UTF8&iwloc=&output=embed`);
                    });
                });
            });
        });

    });

});