let correct = 
        [
        { color1: "red", color2: "blue", color3: "purple", color4: "green", color5: "yellow"  },
        { same: "no" },
        { explain: "user defined" },
        { Java1: "everything", Java2: "nothing", Java3: "yes", Java4: "Krissi" }
        ];

const answer1 = document.querySelector('input[type=radio][name="colour"]:checked.value');
const answer2 = document.querySelector('input[type=radio][name="java"]:checked.value');
const answer3 = document.querySelector('input[type=text].value');
const answer4 = document.querySelectorAll('input[type="checkbox"][name="like"]:checked.value');

function checkAnswers()
{
    let answer =  answer1;
    alert(answer);
}

btn.addEventListener("submit", checkAnswers());