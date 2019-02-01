$("#hamburger-btn").click(function() {
  $("#menu").toggleClass("menu--active");
  $(this).toggleClass("is-active");
});
$(function() {
  $(".toggles button").click(function() {
    var get_id = this.id;
    console.log('get_id: ' + get_id);
    var get_current = ".post." + get_id;
    console.log('get_current: ' + get_current);

    $(".post")
      .not($(get_current))
      .hide(500);
    $(get_current).show(500);
  });
  $("#showall").click(function() {
    $(".post").show(500);
  });
});
