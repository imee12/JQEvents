

/*$(document).ready(function() {

document.getElementById('j').style.backgroundPosition = '-40px 0px';


function run_right(){
  // Move slightly to the right ...
  // Change to the next frame of animation ...

  // this will call 'run_right' again after 200 milliseconds
  setTimeout(function(){run_right();}, 200);
}

function run_right(slide){
  // Move slightly to the right ...
  switch (slide){ // this switch statement checks for different possibilities for 'slide'
  case 1: // if 'slide' equals '1' ...
  document.getElementById('j').style.backgroundPosition = "-40px 0px";
  setTimeout(function(){run_right(2);}, 200);
  break;
  case 2: // if 'slide' equals '2' ...
  document.getElementById('j').style.backgroundPosition = "-80px 0px";
  setTimeout(function(){run_right(3);}, 200);
  break;
  case 3: // if 'slide' equals '3' ...
  document.getElementById('j').style.backgroundPosition = "-120px 0px";
  setTimeout(function(){run_right(4);}, 200);
  break;
  case 4: // if 'slide' equals '4' ...
  document.getElementById('j').style.backgroundPosition = "-80px 0px";
  setTimeout(function(){run_right(1);}, 200);
  break;
}
}
function run_right(slide, left){

  left = left + 15; // Increase his left attribute by 15px
  document.getElementById('j').style.left = left+"px";

  switch (slide){ // this switch statement checks for different possibilities for 'slide'
  case 1: // if 'slide' equals '1' ...
  document.getElementById('j').style.backgroundPosition = "-40px 0px";
  setTimeout(function(){run_right(2, left);}, 200);
  break;
  case 2: // if 'slide' equals '2' ...
  document.getElementById('j').style.backgroundPosition = "-80px 0px";
  setTimeout(function(){run_right(3, left);}, 200);
  break;
  case 3: // if 'slide' equals '3' ...
  document.getElementById('j').style.backgroundPosition = "-120px 0px";
  setTimeout(function(){run_right(4, left);}, 200);
  break;
  case 4: // if 'slide' equals '4' ...
  document.getElementById('j').style.backgroundPosition = "-80px 0px";
  setTimeout(function(){run_right(1, left);}, 200);
  break;
}
}



function run_right(slide, left){
  // If we can add 15 pixels to the left and have J's right edge not be at the stage's right edge ...
  if ((left + 15) < (document.getElementById('stage').offsetWidth - document.getElementById('j').offsetWidth)){
    // We have room! Continue like normal here
  } else { // if we are on the right edge, we need to stop calling the function and return to standing
    document.getElementById('j').style.backgroundPosition = "0px 0px";
  }
}

var timer;

function run_right(slide, left){
  if ((left + 15) < (document.getElementById('stage').offsetWidth - document.getElementById('j').offsetWidth)){
    left = left + 15; // Increase his left attribute by 15px
    document.getElementById('j').style.left = left+"px";

    switch (slide){ // this switch statement checks for different possibilities for 'slide'
    case 1: // if 'slide' equals '1' ...
    document.getElementById('j').style.backgroundPosition = "-40px 0px";
    setTimeout(function(){run_right(2, left);}, 200);
    break;
    case 2: // if 'slide' equals '2' ...
    document.getElementById('j').style.backgroundPosition = "-80px 0px";
    setTimeout(function(){run_right(3, left);}, 200);
    break;
    case 3: // if 'slide' equals '3' ...
    document.getElementById('j').style.backgroundPosition = "-120px 0px";
    setTimeout(function(){run_right(4, left);}, 200);
    break;
    case 4: // if 'slide' equals '4' ...
    document.getElementById('j').style.backgroundPosition = "-80px 0px";
    setTimeout(function(){run_right(1, left);}, 200);
    break;
  }
} else {
  document.getElementById('j').style.backgroundPosition = "0px 0px";
}
}

function stop_running(){
  document.getElementById('j').style.backgroundPosition = "0px 0px";
  clearTimeout(timer);
}

function run_left(stage, left){
  if ((left - 15) > 0){
    left = left - 15;
    document.getElementById('j').style.left = left+"px";
    switch (stage){
      case 1:
        document.getElementById('j').style.backgroundPosition = "-40px -50px";
        timer = setTimeout(function(){run_left(2, left);}, 200);
        break;
        case 2:
          document.getElementById('j').style.backgroundPosition = "-80px -50px";
          timer = setTimeout(function(){run_left(3, left);}, 200);
          break;
          case 3:
            document.getElementById('j').style.backgroundPosition = "-120px -50px";
            timer = setTimeout(function(){run_left(4, left);}, 200);
            break;
            case 4:
              document.getElementById('j').style.backgroundPosition = "-80px -50px";
              timer = setTimeout(function(){run_left(1, left);}, 200);
              break;
            }
          } else {
            document.getElementById('j').style.backgroundPosition = "0px -50px";
          }
        }





});

*/
