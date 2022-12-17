$(function () {
  $("#word").keyup(function () {
    if ($("#word").val() != "") {
      $.ajax({
        url: "searchAjax.php",
        type: "post",
        data: {
          name: $("#word").val(),
          check: $("input[type='radio']:checked").val(),
        },
        success: function (data) {
          $("ol").empty();
          $("ol").append(data);
        },
        error: function (e) {
          alert(e.reponseText);
        },
      });
    }
  });
});

$(function () {
  $("#add").click(function () {
    $.ajax({
      url: "addAjax.php",
      type: "post",
      data: {
        add_dept: $("#dept").val(),
        add_name: $("#name").val(),
      },
      success: function (data) {
        $("p").empty();
        $("p").append(data);
      },
    });
  });
});
