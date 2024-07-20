
let con = document.querySelectorAll(".con");
let computer = document.querySelectorAll(".Computer");
let triangle = document.querySelector(".triangle");
let user = document.querySelector(".user");
let mc = document.querySelector(".mc");
let randomNo = Math.floor(Math.random() * 3);
let winner = document.querySelector(".winner");
let msg = document.querySelector(".msg");
let play = document.querySelector(".play");

let computerScore = JSON.parse(localStorage.getItem("cs")) || 0;
let userScore = JSON.parse(localStorage.getItem("ys")) || 0;

let scorecount = document.querySelector(".score-count");
let scorecount1 = document.querySelector(".score-count1");

let rule = document.querySelector("#rule");

let modal = document.querySelector(".modal");
let close = document.querySelector(".close");


let next = document.querySelector("#next");

if (computerScore) {

    scorecount.innerText = computerScore;
}

if (userScore) {
    scorecount1.innerText = userScore;
}



con.forEach((element, index) => {

    element.addEventListener("click", () => {


        user.style.opacity = "1";

        triangle.style.display = "none";

        con.forEach(items => {

            items.style.display = "none";

        });

        element.style.display = "block"
        element.classList.add("showjs");


        setTimeout(() => {
            setTimeout(() => {

                mc.style.opacity = "1";
                computer[randomNo].style.display = "block"
                computer[randomNo].classList.add("jsRight");


                setTimeout(() => {

                    if (randomNo == index) {

                        winner.style.display = "flex";
                        winner.style.opacity = "1";
                        console.log("hey i am if Tie conditions")
                        msg.innerHTML = "<h1>TIE Up<br></h1>";




                    } else if (index == 0 && randomNo == 1 || index == 1 && randomNo == 2 || index == 2 && randomNo == 0) {

                        // console.log("hey i am if conditions")

                        winner.style.display = "flex";
                        winner.style.opacity = "1";
                        msg.innerHTML = "<h1>You Win<br>Against Pc</h1>";

                        userScore++;
                        scorecount1.innerText = userScore;
                        next.style.display="block";
                        localStorage.setItem("ys", JSON.stringify(userScore));


                    } else {

                        console.log("hey i am else conditions")
                        winner.style.display = "flex";
                        winner.style.opacity = "1";
                        msg.innerHTML = "<h1>You Loose <br>Against Pc</h1>";
                        computerScore++;
                        scorecount.innerText = computerScore;
                        localStorage.setItem("cs", JSON.stringify(computerScore));

                    }


                }, 900)


            }, 700);

        }, 500);
    });

});

play.addEventListener("click", () => {

    window.location.reload();
});

rule.addEventListener("click", () => {

    modal.style.opacity = "1";

})

close.addEventListener("click", () => {

    modal.style.opacity = "0";

})

next.addEventListener('click', () => {

    window.location.href = 'celibration.html';
});








