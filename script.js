// Improved Studio Ghibli Inspired JavaScript

document.addEventListener("DOMContentLoaded", function () {
  // Create soot sprites
  const sootContainer = document.getElementById("soot-container");
  const spriteCount = Math.min(20, Math.floor(window.innerWidth / 50));

  for (let i = 0; i < spriteCount; i++) {
    createSootSprite(sootContainer);
  }

  // Create Kodamas (forest spirits)
  const kodamaContainer = document.getElementById("kodama-container");
  const kodamaCount = Math.min(8, Math.floor(window.innerWidth / 120));

  for (let i = 0; i < kodamaCount; i++) {
    createKodama();
  }

  // Parallax effect for landscape elements
  window.addEventListener("scroll", function () {
    const scrollY = window.scrollY;
    const hills = document.querySelectorAll(".hills");

    hills.forEach((hill, index) => {
      const speed = 0.1 + index * 0.05;
      hill.style.transform = `translateY(${scrollY * speed}px)`;
    });
  });

  // Photo hover sound effect (subtle)
  const photoFrame = document.querySelector(".photo-frame");

  photoFrame.addEventListener("mouseenter", function () {
    playGhibliSound();
  });

  // Add random movement to soot sprites every few seconds
  setInterval(() => {
    const sprites = document.querySelectorAll(".soot-sprite");
    sprites.forEach((sprite) => {
      const xMove = Math.random() * 20 - 10;
      sprite.style.transform = `translateX(${xMove}px)`;
    });
  }, 3000);

  // Slowly fade in landscape elements
  const landscapeElements = document.querySelectorAll(".landscape > div");
  landscapeElements.forEach((element, index) => {
    element.style.opacity = 0;
    setTimeout(() => {
      element.style.transition = "opacity 1s ease-in-out";
      element.style.opacity = 1;
    }, 500 + index * 200);
  });

  // Create gentle wind effect on the grass
  animateGrass();
});

// Create and position a soot sprite
function createSootSprite(container) {
  const sprite = document.createElement("div");
  sprite.classList.add("soot-sprite");

  // Random position
  sprite.style.left = Math.random() * 95 + "%";
  sprite.style.bottom = Math.random() * 50 + "%";

  // Random size variation
  const size = 8 + Math.random() * 8;
  sprite.style.width = size + "px";
  sprite.style.height = size + "px";

  // Random animation delay
  sprite.style.animationDelay = Math.random() * 2 + "s";

  container.appendChild(sprite);
}

// Create and position a Kodama (forest spirit)
function createKodama() {
  const kodama = document.createElement("div");
  kodama.classList.add("kodama");

  // Random position along the bottom edge
  kodama.style.left = Math.random() * 95 + "%";
  kodama.style.bottom = Math.random() * 20 + 60 + "px";

  // Random size variation
  const size = 15 + Math.random() * 10;
  kodama.style.width = size + "px";
  kodama.style.height = size * 1.6 + "px";

  // Random head rotation
  kodama.style.animation = `head-turn 3s ease-in-out ${
    Math.random() * 5
  }s infinite`;

  // Add CSS for head turning animation
  const style = document.createElement("style");
  style.innerHTML = `
        @keyframes head-turn {
            0%, 100% { transform: rotate(0deg); }
            50% { transform: rotate(${Math.random() > 0.5 ? "" : "-"}${
    10 + Math.random() * 15
  }deg); }
        }
    `;
  document.head.appendChild(style);

  document.body.appendChild(kodama);

  // Randomly make the kodama appear and disappear
  setInterval(() => {
    if (Math.random() > 0.5) {
      kodama.style.opacity = Math.random();
    } else {
      kodama.style.opacity = 0;
    }
  }, 5000 + Math.random() * 5000);
}

// Create a subtle Ghibli-like sound effect
function playGhibliSound() {
  try {
    const audioContext = new (window.AudioContext ||
      window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(523.25, audioContext.currentTime); // C5
    oscillator.frequency.exponentialRampToValueAtTime(
      783.99,
      audioContext.currentTime + 0.5
    ); // G5

    gainNode.gain.setValueAtTime(0, audioContext.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.1, audioContext.currentTime + 0.1);
    gainNode.gain.linearRampToValueAtTime(0, audioContext.currentTime + 0.5);

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.start();
    oscillator.stop(audioContext.currentTime + 0.5);
  } catch (e) {
    // Silently fail if audio context is not supported
  }
}

// Animate grass to simulate wind
function animateGrass() {
  const grass = document.querySelector(".grass");
  let phase = 0;

  function animate() {
    phase += 0.01;

    // Create a wave pattern for the top of the grass
    const wavePattern = `polygon(
            0% 0%, 
            10% ${Math.sin(phase) * 5 + 5}%, 
            20% ${Math.sin(phase + 0.5) * 5}%, 
            30% ${Math.sin(phase + 1) * 5 + 5}%, 
            40% ${Math.sin(phase + 1.5) * 5}%, 
            50% ${Math.sin(phase + 2) * 5 + 5}%, 
            60% ${Math.sin(phase + 2.5) * 5}%, 
            70% ${Math.sin(phase + 3) * 5 + 5}%, 
            80% ${Math.sin(phase + 3.5) * 5}%, 
            90% ${Math.sin(phase + 4) * 5 + 5}%, 
            100% 0%, 
            100% 100%, 
            0% 100%
        )`;

    grass.style.clipPath = wavePattern;

    requestAnimationFrame(animate);
  }

  animate();
}
