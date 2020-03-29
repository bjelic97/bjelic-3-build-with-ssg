const vibes = [
  "...and you shock!",
  "... and you stack!",
  "... and you've got this!",
  "... and you just rock again!"
];

// choose random good vibe

var vibe = vibes[Math.floor(Math.random() * Math.floor(vibes.length))];

// display

document.querySelector(".vibe").append(vibe);
