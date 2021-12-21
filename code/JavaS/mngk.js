window.onload = sendApiRequest
async function sendApiRequest(){
    let response = await fetch(`https://opentdb.com/api.php?amount=10&category=9&type=multiple`);
    console.log(response)
    let data = await response.json()
    console.log(data)
    useApiData(data)
}
let user_name = sessionStorage.getItem("name");
document.querySelector("span.name").innerHTML = user_name;
function useApiData(data){
      document.querySelector("#question").innerHTML = `Question: ${data.results[0].question}`
      document.querySelector("#answer1").innerHTML = data.results[0].correct_answer
      document.querySelector("#answer2").innerHTML = data.results[0].incorrect_answer[0]
      document.querySelector("#answer3").innerHTML = data.results[0].incorrect_answer[1]
      document.querySelector("#answer4").innerHTML = data.results[0].incorrect_answer[2]
}
      let correctButton = document.querySelector("answer1")
      correctButton.addEventListener("click",()=>{
         alert("Correct")
      
}) 
let dt = new Date(new Date().setTime(0));
let ctime = dt.getTime();
let seconds = Math.floor((ctime % (1000 * 60))/ 1000);
let minutes = Math.floor((ctime % (1000 * 60 * 60))/( 1000 * 60));
console.log(seconds, minutes);
let time = 0;
let mytime = setInterval(function(){
        time++;
        
        if(seconds < 59) {
            seconds++;
        } else {
            seconds = 0;
            minutes++;
        }
        let formatted_sec = seconds < 10 ? `0${seconds}`: `${seconds}`;
        let formatted_min = minutes < 10 ? `0${minutes}`: `${minutes}`
        document.querySelector("span.time").innerHTML = `${formatted_min} : ${formatted_sec}`;
    }, 1000);

    let question_count = 0;
    let points = 0;
    
    window.onload = function() {
      show(question_count);
    
    };
    
    function next() {
    
       
      // if the question is last then redirect to final page
      if (question_count == questions.length - 1) {
        sessionStorage.setItem("time", time);
        clearInterval(mytime);
        location.href = "end.html";
      }
      console.log(question_count);
    
      let user_answer = document.querySelector("li.option.active").innerHTML;
      // check if the answer is right or wrong
      if (user_answer == questions[question_count].answer) {
        points += 10;
        sessionStorage.setItem("points", points);
      }
      console.log(points);
    
      question_count++;
      show(question_count);
    }
    
    function show(count) {
      let question = document.getElementById("questions");
      let [first, second, third, fourth] = questions[count].options;
    
      question.innerHTML = `
      <h2>Q${count + 1}. ${questions[count].question}</h2>
       <ul class="option_group">
      <li class="option">${first}</li>
      <li class="option">${second}</li>
      <li class="option">${third}</li>
      <li class="option">${fourth}</li>
    </ul> 
      `;
      toggleActive();
    }
    
    function toggleActive() {
      let option = document.querySelectorAll("li.option");
      for (let i = 0; i < option.length; i++) {
        option[i].onclick = function() {
          for (let i = 0; i < option.length; i++) {
            if (option[i].classList.contains("active")) {
              option[i].classList.remove("active");
            }
          }
          option[i].classList.add("active");
        };
      }
    }
    