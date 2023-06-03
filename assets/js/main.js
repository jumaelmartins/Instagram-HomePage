window.addEventListener("load", () => {
  let img = document.querySelector(".main-img");
  const imgBasePath = "./assets/img/";
  const images = [
    "screenshot1-2x.png",
    "screenshot2-2x.png",
    "screenshot3-2x.png",
    "screenshot4-2x.png",
  ];
  let currentImg = 0;

  setInterval(() => {
    currentImg = (currentImg + 1) % images.length;
    const imgNewPath = imgBasePath + images[currentImg];

    img.src = imgNewPath;
  }, 3000);
});
