const images = [
  "https://picsum.photos/600/300?random=1",
  "https://picsum.photos/600/300?random=2",
  "https://picsum.photos/600/300?random=3"
];

let index = 0;

function nextImage() {
  index = (index + 1) % images.length;
  document.getElementById("slider").src = images[index];
}

function prevImage() {
  index = (index - 1 + images.length) % images.length;
  document.getElementById("slider").src = images[index];
}

async function getJoke() {
  try {
    const response = await fetch("https://official-joke-api.appspot.com/random_joke");
    const data = await response.json();
    document.getElementById("joke").innerText =
      `${data.setup} — ${data.punchline}`;
  } catch (error) {
    document.getElementById("joke").innerText =
      "Unable to load joke right now.";
  }
}

getJoke();