$(function(){

	// add a burger
	$(".create-form").on("submit", function(event){
		event.preventDefault();

		var newBurger = {
			burger_name: $("#burg").val().trim()
		};

		$.ajax("/api/burgers", {
			type: "POST",
			data: newBurger
		}).then(
			function(){
				console.log("added a new burger");

				location.reload();
			}
		);
	});

	// update burger state (toggle devoured from false (default) to true)
	$(".change-devour").on("click", function(event) {
		var id = $(this).data("id");

		var updatedBurger = {
			devoured: true
		};

		$.ajax("/api/burgers/" + id, {
			type: "PUT",
			data: updatedBurger
		}).then(
			function(){
				console.log("burger devoured");

				location.reload();
			}
		);
	});
});