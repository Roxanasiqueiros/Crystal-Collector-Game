$(document).ready(function () {
    

    let crystal1 = Math.floor(Math.random() * 12 + 1);
    // console.log(crystal1);
    let crystal2 = Math.floor(Math.random() * 12 + 1);
    let crystal3 = Math.floor(Math.random() * 12 + 1);
    let crystal4 = Math.floor(Math.random() * 12 + 1);
    let compChoice = Math.floor(Math.random() * 102 + 19);
    // console.log(compChoice);

  
    $("#compNum").text("Match this number: " + compChoice);
    let result = 0; 
    $("#userNum").text(result);
    let wins = 0; 
    $(".wins").text("Wins: " + wins)
    let losses = 0; 
    $(".losses").text("Losses: " + losses);

    
    function winner() {
        wins++;
        $(".wins").text("Wins: " + wins);
    }

    function loser() {
        losses++;
        $(".losses").text("Losses: " + losses);
    };

    function surpassed() {
        if (result > compChoice)
        result = 0;
        $("#userNum").text(result);
        crystal1 = Math.floor(Math.random() * 12 + 1);
        crystal2 = Math.floor(Math.random() * 12 + 1);
        crystal3 = Math.floor(Math.random() * 12 + 1);
        crystal4 = Math.floor(Math.random() * 12 + 1);
        compChoice = Math.floor(Math.random() * 102 + 19);

        $("#compNum").text("Match this number: " + compChoice);
    }

    $(".crystal1").on("click", function () {
        result = result + crystal1;
        // console.log(result);
        $("#userNum").text(result);

        if (result === compChoice) {
            winner();
        } else if (result > compChoice) {
            loser();
            surpassed();
        }
    })

    $(".crystal2").on("click", function () {
        result = result + crystal2;
        // console.log(result);
        $("#userNum").text(result);

        if (result === compChoice) {
            winner();
        } else if (result > compChoice) {
            loser();
            surpassed();
        }
    })

    $(".crystal3").on("click", function () {
        result = result + crystal3;
        // console.log(result);
        $("#userNum").text(result);

        if (result === compChoice) {
            winner();
        } else if (result > compChoice) {
            loser();
            surpassed();
        }
    })

    $(".crystal4").on("click", function () {
        result = result + crystal4;
        // console.log(result);
        $("#userNum").text(result);

        if (result === compChoice) {
            winner();
        } else if (result > compChoice) {
            loser();
            surpassed();
        }
    })

});
