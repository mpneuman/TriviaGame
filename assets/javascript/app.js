var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;
var number = 45;
var intervalId;
function checker(){
  function check1() {
    var selected = $("input[name = 'q1']:checked").val();
    if (selected == "true") {
      incorrectAnswers++
      console.log(incorrectAnswers);
    } else if (selected == "false") {
      correctAnswers++
      console.log(correctAnswers);
    }
  }
  function check2() {
    var selected = $("input[name = 'q2']:checked").val();
    if (selected == "true") {
      incorrectAnswers++
      console.log(incorrectAnswers);
    } else if (selected == "false") {
      correctAnswers++
      console.log(correctAnswers);
    }
  }
  function check3() {
    var selected = $("input[name = 'q3']:checked").val();
    if (selected == "true") {
      correctAnswers++
      console.log(incorrectAnswers);
    } else if (selected == "false") {
      incorrectAnswers++
      console.log(correctAnswers);
    }
  }
  check1();
  check2();
  check3();
  check4();
  check5();
}


function check1() {
  var selected = $("input[name = 'q1']:checked").val();
  if (selected == "true") {
    incorrectAnswers++
    console.log(incorrectAnswers);
  } else if (selected == "false") {
    correctAnswers++
    console.log(correctAnswers);
  }
}
function check2() {
  var selected = $("input[name = 'q2']:checked").val();
  if (selected == "true") {
    incorrectAnswers++
    console.log(incorrectAnswers);
  } else if (selected == "false") {
    correctAnswers++
    console.log(correctAnswers);
  }
}
function check3() {
  var selected = $("input[name = 'q3']:checked").val();
  if (selected == "true") {
    correctAnswers++
    console.log(incorrectAnswers);
  } else if (selected == "false") {
    incorrectAnswers++
    console.log(correctAnswers);
  }
}
function check4() {
  var selected = $("input[name = 'q4']:checked").val();
  if (selected == "true") {
    correctAnswers++
    console.log(incorrectAnswers);
  } else if (selected == "false") {
    incorrectAnswers++
    console.log(correctAnswers);
  }
}
function check5() {
  var selected = $("input[name = 'q5']:checked").val();
  if (selected == "true") {
    incorrectAnswers++
    console.log(incorrectAnswers);
  } else if (selected == "false") {
    correctAnswers++
    console.log(correctAnswers);
  }
}

$(document).ready(function () {
  $("#Start").on("click", function () {

    $("#Start").text("Star Trek Trivia");
    $("#Start").unbind( "click");
    $("#countdown").text("Seconds left: ");



    $("#question1").text("Kirk was the Captian on The Enterprise NCC-1701-D?");
    $("#answer1").html("<input type = 'radio' name = 'q1' value ='true'> true </input> "
      + "<input type = 'radio' name = 'q1' value ='false'> false </input>")

    $("#question2").text("Captian Picard was killed by the Borg at Wolf 359?");
    $("#answer2").html("<input type = 'radio' name = 'q2' value ='true'> true </input> "
      + "<input type = 'radio' name = 'q2' value ='false'> false </input>")

    $("#question3").text("Lt.Commander Data had a brother named Lore?");
    $("#answer3").html("<input type = 'radio' name = 'q3' value ='true'> true </input> "
      + "<input type = 'radio' name = 'q3' value ='false'> false </input>")

    $("#question4").text("The Klingons home world is called Kronos?");
    $("#answer4").html("<input type = 'radio' name = 'q4' value ='true'> true </input> "
      + "<input type = 'radio' name = 'q4' value ='false'> false </input>")

    $("#question5").text("The Xindi in Star Trek: Enterprise destroyed California");
    $("#answer5").html("<input type = 'radio' name = 'q5' value ='true'> true </input> "
      + "<input type = 'radio' name = 'q5' value ='false'> false </input>")

    function run() {
      intervalId = setInterval(decrement, 1000);
    }

    function decrement() {
      number--;
      $("#countdown").text("Seconds left: " + number);

      if (number === 0) {
        
        stop();
        checker();
        $("#trivia").remove();
        unanswered = (5 - (correctAnswers + incorrectAnswers));
        $("#Correct").text("Correct answers: " + correctAnswers);
        $("#incorrect").text("incorrect answers: " + incorrectAnswers);
        $("#unanswered").text("unanswered : " + unanswered);
      }
    }

    function stop() {
      clearInterval(intervalId);
    }

    run();
  });
});