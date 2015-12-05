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
