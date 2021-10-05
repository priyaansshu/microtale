document.addEventListener("DOMContentLoaded", function(){
    
    var startjokes = document.getElementById('startbutton');
    var darkbutton = document.querySelector(".darkmode");
    var backbutton = document.getElementById("shareontwitter");
    var nextbutton = document.getElementById("new-joke");
    var f=0;
    var tempindex=0;
    startjokes.addEventListener("click", function startfunction()
    {
        f=0;
        getJoke(f);
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
    backbutton.addEventListener("click", function sharefunction()
    {
        if(index<2){
            index=0;
        }
        else{
            index=index-2;;
        }
        f=0;
        getJoke(f);
    });
    nextbutton.addEventListener("click", function nextjoke(){
        f=0;
        getJoke(f);
    });
});
    
    const joketitle = document.querySelector("#title");
    const jokebody = document.querySelector("#body");
    const token = document.querySelector("#token");
    const a = document.getElementById("tweet_joke");
    var index = 0;
  
    document.addEventListener("keyup", function(event){
        if(event.keyCode === 13){
            var jumpindex = document.querySelector(".jump").value;
                // console.log("enter pressed after " + jumpindex);
            index=jumpindex-1;
            f=1;
            getJoke(f);
        }
    });

    async function getJoke(f) {
        if(index==120){
            index=0;
        }
        joketitle.innerHTML = "<br><br>🚀🚀🚀";
        jokebody.innerHTML="";
        token.innerHTML="";
        const response = await fetch("complete-microtale.json")
        const joke = await response.json();
        document.body.classList.add("token-visible");

        // const arr=[3, 7, 9, 11, 14, 17, 19, 20, 21, 22, 33, 34, 38, 39, 42, 44, 46, 52, 56, 62, 64, 72, 73, 76, 77, 79, 82, 86, 94, 4, 6, 10, 12, 13, 15, 16, 18, 28, 30, 31, 32, 37, 41, 43, 47, 48, 49, 50, 51, 54, 57, 58, 67, 68, 69, 70, 74, 75, 78, 80, 83, 89, 96, 98, 105, 110, 115];
        // arr.sort(function(a, b){return a - b});

        // if(index>arr.length){
        //     index=0;
        // }
        // if(f==0){
        //     tempindex = arr[index]-1;
        // }
        //     console.log("tempindex: " + (tempindex+1));
        //     console.log("index: " + index);

        var statustext = document.getElementById("status-text");
        // console.log(joke[tempindex].status);
        if(index==5 || index==30 || index==36 || index==67 || index==74 || index==77 || index==79 || index==109 || index==114){
            document.body.classList.remove("no");
            document.body.classList.remove("maybe");
            document.body.classList.remove("yes");
            document.body.classList.remove("win");
            document.body.classList.add("top");
            statustext.innerHTML = "TOP 12";
        }
        else if(index==95){
            document.body.classList.remove("no");
            document.body.classList.remove("maybe");
            document.body.classList.remove("yes");
            document.body.classList.add("win");
            document.body.classList.remove("top");
            statustext.innerHTML = "3rd";
        }
        else if(index==82){
            document.body.classList.remove("no");
            document.body.classList.remove("maybe");
            document.body.classList.remove("yes");
            document.body.classList.add("win");
            document.body.classList.remove("top");
            statustext.innerHTML = "2nd";
        }
        else if(index==15){
            document.body.classList.remove("no");
            document.body.classList.remove("maybe");
            document.body.classList.remove("yes");
            document.body.classList.add("win");
            document.body.classList.remove("top");
            statustext.innerHTML = "1st";
        }
        else if(joke[index].status=='y'){
            document.body.classList.remove("no");
            document.body.classList.remove("maybe");
            document.body.classList.add("yes");
            document.body.classList.remove("win");
            document.body.classList.remove("top");
            statustext.innerHTML = "YES";
        }
        else if(joke[index].status=='m'){
            document.body.classList.remove("no");
            document.body.classList.remove("yes");
            document.body.classList.add("maybe");
            document.body.classList.remove("win");
            document.body.classList.remove("top");
            statustext.innerHTML = "MAYBE";
        }
        else{
            document.body.classList.remove("yes");
            document.body.classList.remove("maybe");
            document.body.classList.add("no");
            document.body.classList.remove("win");
            document.body.classList.remove("top");
            statustext.innerHTML = "NO";
        }
        joketitle.innerHTML = joke[index].microtale;
        jokebody.innerHTML = "Word Count: " + joke[index].Words;
        token.innerHTML = "TOKEN NUMBER: " + joke[index].token;
        // if(joke[index].Words > 40){
        //     document.body.classList.add("exceeded");
        // }   
        // else{
        //     document.body.classList.remove("exceeded");
        // }
        index++;
    } 

