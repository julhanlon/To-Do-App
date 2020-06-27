$(document).ready(function () {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");
  
    $.ajax({
      type: "GET",
      url: `/api/find/${id}`,
    }).then((todo) => {
      console.log(todo);
  
      todo[0].completed
        ? $("#completedCheck").prop("checked", true)
        : $("#completedCheck").prop("checked", false);
  
      $("#editTextInput").prop("placeholder", todo[0].text);
    });
  
    $("#btnConfirm").on("click", (e) => {
      e.preventDefault();
  
      const editedText = $("#editTextInput").val()
        ? $("#editTextInput").val()
        : $("#editTextInput").prop("placeholder");
  
      const completeStatus = $("#completedCheck").prop("checked")
        ? "true"
        : "false";
  
      $.ajax({
        type: "PATCH",
        url: "/api",
        data: { todoText: editedText, todoId: id, todoCompleted: completeStatus },
      })
        .then(() => {
          window.location.href = "/";
        })
        .catch((err) => console.log(err));
    });
  });