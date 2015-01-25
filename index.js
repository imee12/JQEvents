$(document).ready(function() {


//var $body = $("body");

$("body").mousemove(function (event){
  $(this).css({"background-image": "none", "background-color": "black"});
//  $(this).css({"background-image": "images/hellokittyred.jpg" });
});


$("h1").click(function (event){
  $(this).slidedown();
})

$(".box").eq(0).mouseover(function(event){
  $(this).css("transform", "scale(2.0)");

});

$(".box").eq(0).mouseout(function(event){
  $(this).css("transform", "scale(1.0)");

});

$(".box").eq(1).click(function(event){
  $(this).prepend('<img id="theImg" src="images/yodaKitty.jpg"/>');
  $(this).addClass("small");
  $(this).find("audio").trigger('play');
    ///prepend('<img id="theImg" src="theImg.png" />')
});

$(".box").eq(2).dblclick(function(event){
  $(this).find("audio").trigger('play');

});

$(".box").eq(3).click(function(event) {
  $(this).fadeTo('fast',0.2);
});

$(".box").eq(4).on("click", function(event) {
  alert("You Love Hello Kitty!");
});

$(".box").eq(5).mouseleave(function(event) {
  $(this).addClass("ball");
});

$(".box").eq(6).click(function(event) {
  $(this).addClass("spin");
});


$(".box").eq(7).hover(function(event) {
  $(this).addClass("wiggle");
  $(this).find("img").css({"padding": "15px"});
});

$(".box").eq(9).mouseenter(function(event) {
  $(this).addClass("slide");
});

$(".box").eq(8).click(function(event) {
  $(this).find("audio").trigger('play');

});

$(function() {
  var $newItemButton = $('#newItemButton');
  var $newItemForm =$('#newItemForm');
  var $textInput = $('input:text');

$newItemForm.on('submit', function() {
  event.preventDefault();
  var newText=$('input:text').val();
  $(".box").eq(9).after('<h2> Thank you '  + newText  +  '! </h2>');

});

});

$(function() {
  var $body = $("body");
  var $slideAd = $('#slideAd');
  var endZone = $('#footer').offset().top - ($body.height() - 500);
  console.log(endZone);
  $(window).scroll(function (event) {

  if ( endZone < $body.scrollTop() ) {
    //$('#slideAd').css("background", "#ff0000");
    $slideAd.css("margin", "0px 0px 0px 900px", 250);
  }else {
    $slideAd.stop(true).animate({'right': '-360px'}, 250);
  }

});



});




});







//});
