/*
function is to take in the input a user sends in the bottom text box
it will take the value and send it to another function to handle the parsing
*/

$(document).ready(function(){
    $("#submitButton-IRVA").click(function(){
        var textToSend = $("#input-IRVA").val();
        if(textToSend === "") {
            textToSend = undefined;
        }
        console.log(textToSend);
        var answer = contextHandler(textToSend);

        $("#botMessage").text(answer.str);
        $(".question-IRVA").hide();

        for(let i = 0; i < answer.choices.length; i++) {
            $("#"+i).show();
            $("#"+i).html(answer.choices[i]);
            $("#"+i).attr("prevID", answer.index);
          }
        var dt = new Date();
        $("#dateTime-IRVA").html(dt.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}));
        $("#input-IRVA").val("");
    });
});
