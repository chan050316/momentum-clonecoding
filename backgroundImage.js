const images = [
  "5.jpg",
  "6.jpg",
  "9.jpeg",
  "11-1.jpeg",
  "12.jpeg",
  "14-1.jpeg",
  "14-2.jpeg",
  "15-1.jpeg",
  "15-2.jpeg",
  "16-1.jpeg",
  "16-2.jpeg",
]

const bodyEl = document.querySelector('body');
const chooseimg = images[Math.floor(Math.random() * images.length)];

bodyEl.style.backgroundImage = `url(IMG/${chooseimg})`;