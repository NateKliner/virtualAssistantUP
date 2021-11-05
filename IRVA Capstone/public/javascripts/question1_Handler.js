$(document).ready(function() {
    $(".question").click(function(e) {

      var questionClicked = e.target.id;
      var prevQuestion = e.target.getAttribute('prevID');
      var prevNum = parseInt(prevQuestion);

      // call other function here:
      var questionIndices = choice1Handler(questionClicked, prevNum);
      console.log(questionIndices.choices[0]);
      console.log(questionIndices.index);
      // continue here
      $("#botMessage").text(questionIndices.str)
      console.log(questionIndices.str);

      // var currentQuestion = document.createElement("button");
      // currentQuestion.setAttribute("id", questionIndices.index);
      // currentQuestion.setAttribute("class", "question");

      $(".question").hide();

      for(let i = 0; i < questionIndices.choices.length; i++) {
        $("#"+i).show();
        console.log("Current iteration: "+ i);
        $("#"+i).html(questionIndices.choices[i]);
        console.log(questionIndices.choices[i]);
        $("#"+i).attr("prevID", questionIndices.index);
      }
    })
  });
