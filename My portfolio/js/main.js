// There are a few JS dependancies

// Check the settings to take a look
// at those as they are necessary.

// start button//
$(document).ready(function(){
  $("#start").click(function(){
    $("div").animate({left: '100px'}, 5000);
    $("div").animate({fontSize: '3em'}, 5000);
  });
  
  $("#stop").click(function(){
    $("div").stop();
  });

  $("#stop2").click(function(){
    $("div").stop(true);
  });

  $("#stop3").click(function(){
    $("div").stop(true, true);
  }); 
});

//cover letter//
// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.fontSize = "30px";
  } else {
    document.getElementById("header").style.fontSize = "90px";
  }
}