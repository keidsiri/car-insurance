$(document).ready(function() {
  $("form#survey").submit(function(event) {
    event.preventDefault();
    const name = $("#name").val();
    const food = $("input:radio[name=foods]:checked").val();
    const music = $("#music").val();
    const color = $("#color").val();

    $("#results").text("Thanks for your input, " + name + " " + "I also like" + " " + food + " " + music + " " + color + "!")
  });
});