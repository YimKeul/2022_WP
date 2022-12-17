$(() => {
  $("#search").change(() => {
    const searchValue = $("input#search").val();
    const key = $("input[name='key']:checked").val();

    console.log(key);

    $.post(
      "./search.php",
      {
        value: searchValue,
        key: key,
      },
      (data, status, xhr) => {
        $("#content").empty();

        const jsonData = JSON.parse(data);

        for (const obj of jsonData) {
          const li = document.createElement("li");

          const dept = document.createElement("span");
          dept.classList.add("dept");
          dept.appendChild(document.createTextNode(obj.dept + ", "));

          const name = document.createElement("span");
          name.classList.add("name");
          name.appendChild(document.createTextNode(obj.name));

          li.appendChild(dept);
          li.appendChild(name);

          $("#content").append(li);
        }

        $(".dept").css("color", key == "dept" ? "blue" : "black");
        $(".name").css("color", key == "name" ? "blue" : "black");
      }
    );
  });
});
