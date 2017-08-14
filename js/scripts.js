$(document).ready(function(){
  $("#groceries-input").submit(function(event){
    event.preventDefault();
    var items = [];
    $("#groceries-input > div > input").each(function(){
      items.push(this.value);
    });

    items.forEach(function(item){
      $(".groceries").append("<li>" + item + "</li>");
    });
  });

  $("#add-item").click(function() {
    event.preventDefault();
    var newDiv = "<div class=\"form-group\">\n <label for=\"item\">Item</label>\n <input type=\"text\" name=\"item\" class=\"form-control\">\n </div>"
    $("#groceries-input").prepend(newDiv);
  });
});
