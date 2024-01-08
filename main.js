var gameOver = false;

//Fill blanks only if the character match is found 
$(".clickable").click(function () { 
    var correctGuess = false;

//Get the id of the button clicked 
let id= $(this).attr("id");

//Get the life

var life = parseInt($("#life").text());

//Loop through all the letters

for (var i = 0; i < randomWord.word.length; i++) {
  //Check if the character matches the id of the button

  if (randomWord.word.charAt(i).toLowerCase() == id) {
    //Check if the life is still left and blank is is empty/already filled

    if (
      life > 0 &&
      ($(".fill_blanks").eq(i).html() == "_" ||
        $(".fill_blanks").eq(i).html() == id)
    ) {
      //fill blanks

      $(".fill_blanks").eq(i).html(id);

      correctGuess = true;

      //Check if the word guess is complete

      if ($("#blanks").text() === randomWord.word.toLowerCase()) {
        $("#result").text("You Win!!");

        correctGuess = true;

        gameOver = true;
      }
    }
  }
}


