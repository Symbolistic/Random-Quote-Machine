$(document).ready(function(){
  
  var currentQuote;
  var currentAuthor;
  
  function getQuote(){
    $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&lang=en&format=jsonp&jsonp=?", function(data){
      $(".quote").html(data.quoteText);
      $(".author").html("- " + data.quoteAuthor);
      
      currentQuote = data.quoteText;
      currentAuthor = data.quoteAuthor;
    });
  }
  
  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    
    $(".text").fadeIn("slow");
    $("body").css("background-color", color);
    $("body").css("color", color);
    $("#newQuote").css("background-color", color);
    $("#tweet-quote").css("background-color", color);
    return color;
  }
  
  getQuote();
  getRandomColor();
  
  $(".btn").on("click", function(){
    $(".text").fadeOut(500, function(){
      getQuote();
    });
    getRandomColor();
  });
  
  $("#tweet-quote").on("click",function(){
    
    window.open("https://twitter.com/intent/tweet?button_hashtag=quotes&text=" + encodeURIComponent("\"" + currentQuote + "\" -" + currentAuthor)); 
  });
});