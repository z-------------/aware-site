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

/* highlight current nav link */

$(".nav_list a").each(function(i, elem) {
    var $elem = $(elem);

    if (window.location.href.indexOf($elem.attr("href")) != -1) {
        $elem.find("li").addClass("highlight");
    }
})
