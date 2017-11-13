$(function(){

    $("#add").on("click", function(event) {
        // Make sure to preventDefault on a submit event.
        console.log("Button Click");
        event.preventDefault();
        console.log(event);
        var newBurger = {
          burger_name: $("#add-burger").val().trim(),
          devoured: false,
          burger_date: Date.now(),
        };
        console.log(newBurger);
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

    $(".burger-btn").on("click", function(event) {

        // var id = $(this).data("id");
        var id = $(this).attr("id");
        var devouredState = $(this).attr("data-state");
        console.log(id);
        console.log(devouredState);

        var devouredState = {
          id: id,
          devoured: devouredState,

        };

        console.log("burger is clicked");
        
            $.ajax("/burger/update/"+ id , {
               type:"PUT",
               data: devouredState     
            }).then(function() {
                console.log("Update Burger");
                location.reload();

              }
            );

    });


    $(".delete").on("click", function(event) {

      var id = $(this).attr("id"); //stores event id

      console.log("Button Click");
      event.preventDefault(); //prevents the page from being reload since button behavior refreshes page

      $.ajax("/burger/delete/" + id, {
        type: "DELETE",
      }).then(
        function(){
          console.log("burger has been eaten id:", id);
          location.reload();
        }
      )
    });

});
