const games = [
  { name: "Doom 1", url: "https://diekmann.github.io/wasm-fizzbuzz/doom/" },
  { name: "Getaway Shootout", url: "https://sites.google.com/site/classroom6x/getaway-shootout?authuser=0" },
  { name: "Ovo", url: "https://sites.google.com/site/classroom6x/ovo" },
  { name: "Run 3", url: "https://lekug.github.io/tn6pS9dCf37xAhkJv/" },
  { name: "Swerve", url: "https://s3-eu-west-1.amazonaws.com/apps.playcanvas.com/VecAxR3e/index.html" },
  { name: "bitlife", url: "https://canvas.gamehaven.tech/misc/bitlife/" },
  { name: "Ice Dice", url: "https://sites.google.com/site/coolmathgames247/home" },
  { name: "Really Cool Game", url: "https://artsology.com/bezier-art-game.php" },
  // Add more games as needed
];


document.addEventListener("DOMContentLoaded", function () {
  const gameListContainer = document.getElementById("gameList");

  games.forEach((game) => {
    const button = document.createElement("button");
    button.textContent = game.name;
    button.className = "button";
    button.addEventListener("click", () => {
      window.location.href = game.url;
    });
    gameListContainer.appendChild(button);
  });
});
