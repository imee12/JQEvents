$(document).ready(function() {


var $audio = $("audio");
var $audio2 =$("audio2");
//var $body = $("body");

$("body").click(function (event){
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
    ///prepend('<img id="theImg" src="theImg.png" />')
});

$(".box").eq(2).dblclick(function(event){
  $(this).find("audio").trigger('play');

});

$(".box").eq(3).click(function(event) {
  $(this).fadeTo('fast',0.2);
});

$(".box").eq(4).on("click", function(event) {
  alert("You Love Helly Kitty!");
});

$(".box").eq(5).click(function(event) {
  $(this).addClass("ball");
});

$(".box").eq(6).click(function(event) {
  $(this).addClass("spin");
});


$(".box").eq(7).click(function(event) {
  $(this).addClass("wiggle");
  $(this).find("img").css({"padding": "15px"});
});

$(".box").eq(9).click(function(event) {
  $(this).addClass("slide");
});

$(".box").eq(8).click(function(event) {
  $(this).find("audio2").trigger('play');

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






});
