document.addEventListener("DOMContentLoaded", function(){
    
    var startjokes = document.getElementById('startbutton');
    var darkbutton = document.querySelector(".darkmode");
    var sharebutton = document.getElementById("shareontwitter");
    var nextbutton = document.getElementById("new-joke");
    startjokes.addEventListener("click", function startfunction()
    {
        getJoke();
        var start = document.body;
        start.classList.add("started");
    });
    darkbutton.addEventListener("click", function myFunction(){
      var element = document.body;
      element.classList.toggle("dark");
      var x = document.getElementById("turn");
      if(x.innerHTML=="DARK")
      {
          x.innerHTML="LIGHT";
          x.style.color='black';
      }
      else
      {
          x.innerHTML="DARK";
          x.style.color='white';
      }
    });
    sharebutton.addEventListener("click", function sharefunction()
    {
        if(index<2){
            index=0;
        }
        else{
            index=index-2;;
        }
        getJoke();
    });
    nextbutton.addEventListener("click", function nextjoke(){
        getJoke();
    });
});

    var index = 0;
    
  const joketitle = document.querySelector("#title");
  const jokebody = document.querySelector("#body");
  const token = document.querySelector("#token");
  const a = document.getElementById("tweet_joke");
  var index = 0;
  
  async function getJoke() {
  joketitle.innerHTML = "<br><br>🚀🚀🚀";
  // joketitle.innerHTML = "";
  jokebody.innerHTML="";
  token.innerHTML="";
  const response = await fetch("data.json")
  const joke = await response.json();
  document.body.classList.add("token-visible");
//   let index = Math.floor(Math.random()*joke.length);
  joketitle.innerHTML = joke[index].microtale;
  jokebody.innerHTML = "Word Count: " + joke[index].Words;
  token.innerHTML = "TOKEN NUMBER: " + joke[index].token;
  if(joke[index].Words > 40){
      document.body.classList.add("exceeded");
  }   
  else{
    document.body.classList.remove("exceeded");
  }
  index++;
  } 

