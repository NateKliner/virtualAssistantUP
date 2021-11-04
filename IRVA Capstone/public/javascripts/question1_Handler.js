$(document).ready(function() {
    $("#.question").click(function(e) {
      var nextMessage = document.createElement("speechBubble");
      var nextQuestions = document.createElement("questionButtons");
      var questionClicked = e.target.id;
      var prevQuestion = e.target.prevID;

      // call other function here:
      var questionIndices = choice1Handler(questionClicked, prevQuestion);
      // continue here

      nextMessage.innerHTML(questionIndices.message);
      nextMessage.setAttribute("id", questionIndices.returnIndex);
      nextQuestions.setAttribute("id", questionIndices.returnIndex);
      document.getElementById('innerChat').appendChild(nextMessage);
      document.getElementById('innerChat').appendChild(nextQuestions);

      var currentQuestion = document.createElement("question");
      for(let i = 0; i < questionIndices.choices.length; i++) {
        currentQuestion.innerHTML(questionIndices.choices[i].value);
        currentQuestion.setAttribute("prevID", questionIndices.returnIndex);
        document.getElementById(questionIndices.returnIndex).appendChild(currentQuestion);
      }
    })
  });
