$(function() {
  $(".change-sleep").on("click", function(event) {
    var id = $(this).data("id");
    var newSleep = $(this).data("newsleep");

    var newSleepState = {
      sleepy: newSleep
    };

    // Send the PUT request.
    $.ajax("/api/cats/" + id, {
      type: "PUT",
      data: newSleepState
    }).then(
      function() {
        console.log("changed sleep to", newSleep);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $("#add").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    console.log(event);
    var newBurger = {
      burger_name: $("#add-burger").val().trim(),
      devoured: false,
      burger_date: date.now(),
    };
    // Send the POST request.
    $.ajax("/burger/create", {
      type: "POST",
      data: newBurger
    }).then(
      function() {

        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});

