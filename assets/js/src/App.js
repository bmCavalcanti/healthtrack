$.validator.setDefaults({
    focusInvalid: false,
    focusCleanup: false,
    errorClass: "invalid",
    lang: "pt-BR",
    highlight: function (element, errorClass, validClass) {
        var elem = $(element);
        if (elem.hasClass("select2-hidden-accessible")) {
            elem.next().find(".select2-selection").addClass(errorClass);
        } else {
            elem.addClass(errorClass);
        }
    },
    unhighlight: function (element, errorClass, validClass) {
        var elem = $(element);
        if (elem.hasClass("select2-hidden-accessible")) {
            elem.next().find(".select2-selection").removeClass(errorClass);
        } else {
            elem.removeClass(errorClass);
        }
    },
    errorPlacement: function(error, element) {
        var elem = $(element);
        if (elem.hasClass("select2-hidden-accessible")) {
            error.insertAfter(elem.next().find(".select2-selection"));
        } else {
            error.insertAfter(element);
        }
    }
});

$.validator.addMethod("fullName", function(value, element) {
    var val = $.trim(value);
    return this.optional(element) || val.indexOf(" ") >= 0;
}, "Nome inválido. Por favor, insira seu nome completo.");

function masks() {
    $(".cm").mask("#0.00", {reverse: true});
    $(".kg").mask("#0.00", {reverse: true});
    $(".blood-pressure").mask("000/000");
}

function callSelect2() {
    $("select:not(.d-none)").select2({
        allowClear: true,
        width: "100%",
        placeholder: "Selecione uma opção"
    });
}

function validateForm(form, response = false) {
    $("body").find(form).validate();
    if (response) {
        return $(form).valid();
    }
}
