/* timeline */

$(".timeline").each(function(i, elem) {
    var $timelineElem = $(elem);

    $timelineElem
        .append($("<div class='timeline_dates timeline_dates--left'></div>"))
        .append($("<div class='timeline_axis'>"))
        .append($("<div class='timeline_dates timeline_dates--right'></div>"));

    $timelineElem.find("ol").each(function(i, olElem) {
        var $olElem = $(olElem);

        var side = ["left", "right"][i % 2];

        var dateFormatted = moment(olElem.dataset.date).format("MMMM Do YYYY");
        var content = $olElem.html();

        $dateElem = $("<ol class='timeline_date'><h6>" + dateFormatted + "</h6><p>" + content + "</p></ol>");
        if (olElem.classList.contains("timeline_date--highlight")) {
            $dateElem.addClass("timeline_date--highlight");
        }

        $timelineElem.find(".timeline_dates--" + side).append($dateElem);

        $olElem.remove();
    });
});

/* form */

$("form").on("change", function(e) {
    var $form = $(this);

    $form.find("[data-form-showif]").each(function(i, elem) {
        var $elem = $(elem);

        var cond = $elem.attr("data-form-showif");
        var condArr = cond.split("=");

        if (condArr.length === 2) {
            var condField = $form.find("[data-form-field='" + condArr[0] + "']");
            var condValue = condArr[1];

            if (condField.val() === condValue) {
                $elem.removeClass("hidden");
            } else {
                $elem.addClass("hidden");
            }
        }
    });
});

/* nav */

$("#content section").each(function(i, elem) {
    var sectionTitle = $(elem).find("h2").text();
    if (sectionTitle) {
        $(".nav_list").append("<a data-scroll href='#" + $(elem).attr("id") + "'>" + sectionTitle + "</a>");
    }
});
