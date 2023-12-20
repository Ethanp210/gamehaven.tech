const games = [
  { name: "1994 Warfare", url: "https://sites.google.com/site/unblockedgames66ez/warfare-1944" },
  { name: "Sonic", url: "https://www.radyolojinet.com/oyun/oyun_15/sonic_1.html" },
  { name: "Street Fighter", url: "https://www.radyolojinet.com/arcade/arcade_05/street_fighter_2_champion_edition.html" },
  { name: "Mortal Combat", url: "https://www.radyolojinet.com/arcade/arcade_10/mortal_kombat_1.html" },
  { name: "Doom 1", url: "https://diekmann.github.io/wasm-fizzbuzz/doom/" },
  { name: "Getaway Shootout", url: "" },
  { name: "swordbattle.io", url: "https://swordbattleio-1--deeznutz59.repl.co" },
  { name: "Getaway Shootout", url: "https://sites.google.com/site/classroom6x/getaway-shootout?authuser=0" },
  { name: "AG94", url: "https://separatethisfacts--deeznutz59.repl.co" },
  { name: "Sonic 2", url: "https://www.radyolojinet.com/oyun/oyun_15/sonic_2.html" },
  { name: "Sonic 3", url: "https://www.radyolojinet.com/oyun/oyun_15/sonic_3.html" },
  { name: "Kirby Nightmare", url: "https://mixtapeisfire.github.io/gba/launcher.html#kirbynightmare" },
  { name: "Jelly Truck", url: "https://sites.google.com/site/unblockedgames66ez/jelly-truck" },
  { name: "Chess", url: "https://lichess" },
  { name: "Ovo", url: "https://sites.google.com/site/classroom6x/ovo" },
  { name: "Run 3", url: "https://lekug.github.io/tn6pS9dCf37xAhkJv/" },
  { name: "Swerve", url: "https://s3-eu-west-1.amazonaws.com/apps.playcanvas.com/VecAxR3e/index.html" },
  { name: "Painting Sand", url: "https://atsology.com/sandpainting2.html" },
  { name: "bitlife", url: "https://canvas2.gamehaven.tech/misc/bitlife/" },
  { name: "Ice Dice", url: "https://sites.google.com/site/coolmathgames247/home" },
  { name: "Really Cool Game", url: "https://artsology.com/bezier-art-game.php" },
  { name: "Drive Mad", url: "https://drive-mad--deeznutz59.repl.co" }
  { name: "Movies", url: "https://movie.gamehaven.tech" }
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
