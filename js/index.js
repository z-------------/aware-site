/* register form */

$("#form--register").on("submit", function(e) {
    e.preventDefault();

    var $form = $(this);

    window.location.href =
    "https://docs.google.com/forms/d/1UYBsolfnjSFcrEfGNj7Thk9L3OuvdYsDdVh4PopKN1o/viewform" +
    "?entry.1023200351=" + $form.find("[data-form-field='name']").val() +
    "&entry.1587312325=" + $form.find("[data-form-field='school']").val() +
    "&entry.89500747=" + $form.find("[data-form-field='role']").val() +
    "&entry.1918135830=" + $form.find("[data-form-field='year']").val() +
    "&entry.1723236513=" + $form.find("[data-form-field='email']").val() +
    "";
});
