$(document).ready(function() {
  $("#formUserSentence").submit(function(event) {

    var userSentence = $("#userSentence").val().split('');
    var count = 0;
    for (var index = 0; index < userSentence.length; ++index) {
      if (userSentence[index] === 'a' || userSentence[index] === "e"|| userSentence[index] === "i"|| userSentence[index] === "o"|| userSentence[index] ==="u") {
        count++;
      }  else if (userSentence[index] ==="A" || userSentence[index] === "E"|| userSentence[index] == "I"|| userSentence[index] === "O"|| userSentence[index] === "U") {
        count++;
       }
    }
      $("#editSentence").append("<p>"+count+"</p>");
      $("#formUserSentence").hide();
    event.preventDefault();
  });

  $("form#leap-year").submit(function(event) {
     event.preventDefault();
     var year = parseInt($("input#year").val());
     var result = leapYear(year);
     $(".year").text(year);
     if (!result) {                 // same as writing if (result === false)
       $(".not").text("not");
     } else {
       $(".not").text("");
     }
     $("#result").show();
   });

 // business logic
 var leapYear = function(year) {
   if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
     return true;
   } else {
     return false;
   }
 };

 $("form#pigLatin").submit(function(event) {

    event.preventDefault();
    var userPlatin = $("#pLatin").val().split('');
    var vowels = ['a','A', 'e','E', 'i','I', 'o','O', 'u', 'U'];
    var constants ='bcdfghjklmnpqrstvwxyz'.split('');
    function translatePigLatin(inputWord) {
    for (var index = 0; index < vowels.length; index++){
      if(inputWord[0] === vowels[index]){
      return  userPlatin.join("") +'way';
    }
    else if (constants.includes(userPlatin[userPlatin.length -1])){
      return userPlatin.join('')+'ay';
    }
    }
  };

  var translatedWord = translatePigLatin(userPlatin);
  console.log(translatedWord);
$("#pSentence").append("<p>"+translatedWord+"</p>");

});
});
