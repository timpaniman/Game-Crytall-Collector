function playGame(wins, losses, collectedScore, scoreToCollect) {
    //var collectedScore = 0;
    /*  var crystal1Score = Math.floor(Math.random() * 12) + 1;
      var crystal2Score = Math.floor(Math.random() * 12) + 1;
      var crystal3Score = Math.floor(Math.random() * 12) + 1;
      var crystal4Score = Math.floor(Math.random() * 12) + 1;*/
    //  var scoreToCollect = Math.floor(Math.random() * 112) + 19;
    //    var wins = 0;
    //  var losses = 0;
    collectedScore = 0;
    $("#collectedScore").text(collectedScore);
    $("#scoreToCollect").text(scoreToCollect);


    $("#button-1").on("click", function() {
        collectedScore = collectedScore + crystal1Score;
        $("#collectedScore").text(collectedScore);
        if (collectedScore > scoreToCollect) {
            losses = losses + 1;
            collectedScore = 0;
            scoreToCollect = Math.floor(Math.random() * 112) + 19;
            gameOver(wins, losses, collectedScore, scoreToCollect);

        }
        if (collectedScore == scoreToCollect) {
            wins = wins + 1;
            collectedScore = 0;
            scoreToCollect = Math.floor(Math.random() * 112) + 19;
            gameOver(wins, losses, collectedScore, scoreToCollect);

        }
    });

    $("#button-2").on("click", function() {
        collectedScore = collectedScore + crystal2Score;
        $("#collectedScore").text(collectedScore);
        if (collectedScore > scoreToCollect) {
            losses = losses + 1;
            collectedScore = 0;
            scoreToCollect = Math.floor(Math.random() * 112) + 19;
            gameOver(wins, losses, collectedScore, scoreToCollect);
        }
        if (collectedScore == scoreToCollect) {
            wins = wins + 1;
            collectedScore = 0;
            scoreToCollect = Math.floor(Math.random() * 112) + 19;
            gameOver(wins, losses, collectedScore, scoreToCollect);

        }

    });

    $("#button-3").on("click", function() {
        collectedScore = collectedScore + crystal3Score;
        $("#collectedScore").text(collectedScore);
        if (collectedScore > scoreToCollect) {
            losses = losses + 1;
            collectedScore = 0;
            scoreToCollect = Math.floor(Math.random() * 112) + 19;
            gameOver(wins, losses, collectedScore, scoreToCollect);

        }
        if (collectedScore == scoreToCollect) {
            wins = wins + 1;
            collectedScore = 0;
            scoreToCollect = Math.floor(Math.random() * 112) + 19;
            gameOver(wins, losses, collectedScore, scoreToCollect);

        }

    });

    $("#button-4").on("click", function() {
        collectedScore = collectedScore + crystal4Score;
        $("#collectedScore").text(collectedScore);
        if (collectedScore > scoreToCollect) {
            losses = losses + 1;
            collectedScore = 0;
            scoreToCollect = Math.floor(Math.random() * 112) + 19;
            gameOver(wins, losses, collectedScore, scoreToCollect);

        }
        if (collectedScore == scoreToCollect) {
            wins = wins + 1;
            collectedScore = 0;
            scoreToCollect = Math.floor(Math.random() * 112) + 19;
            gameOver(wins, losses, collectedScore, scoreToCollect);

        }

    });
}

function gameOver(wins, losses, collectedScore, scoreToCollect) {
    $("#wins").text(wins);
    $("#losses").text(losses);

    crystal1Score = Math.floor(Math.random() * 12) + 1;
    crystal2Score = Math.floor(Math.random() * 12) + 1;
    crystal3Score = Math.floor(Math.random() * 12) + 1;
    crystal4Score = Math.floor(Math.random() * 12) + 1;

    $("#collectedScore").text(collectedScore);
    $("#scoreToCollect").text(scoreToCollect);

}