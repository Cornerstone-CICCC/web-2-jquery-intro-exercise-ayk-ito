$(function () {
  // YOUR CODE HERE
  // Exercise 1: Hide and Show Elements
  $("#toggleButton").click(function () {
    $("#myParagraph").toggle();
  });

  // Exercise 2: Change CSS Properties
  $("#colorButton").click(function () {
    $("#colorDiv").css("background-color", "yellow");
  });

  // Exercise 3: Add and Remove CSS Class
  $("#addClassButton").click(function () {
    $("#classDiv").addClass("grey");
  });

  $("#removeClassButton").click(function () {
    $("#classDiv").removeClass("grey");
  });

  // Exercise 4: Fade In and Fade Out
  $("#fadeInButton").click(function () {
    $("#fadeDiv").fadeIn();
  });

  $("#fadeOutButton").click(function () {
    $("#fadeDiv").fadeOut();
  });

  // Exercise 5: Slide Up and Slide Down
  $("#slideUpButton").click(function () {
    $("#slideDiv").slideUp();
  });

  $("#slideDownButton").click(function () {
    $("#slideDiv").slideDown();
  });
});
