$(document).ready(function() {

var tags = ["h1", "p", "img"];

tags.forEach(function(tag) {

  // var results = $("tag" + tags)
  $(tag).click(function(){
  alert("This is a " + tag)}
);
});

});
