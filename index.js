$(document).ready(function() {


var $audio = $("audio");
//var $body = $("body");

//$("body").click(function (event){
///  $(this).css();

//});


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

});
