$(document).ready(function () {
    $("#record_form").submit(function (e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "api/createRecord",
            data: {
                'fullname': $("#fullname").val(),
                'email': $("#email").val(),
                'password': $("#password").val()
            },
            success: function (response) {
                console.log(response);
            }
        });
    });
}); 