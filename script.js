const images = [
  "images/foto1.jpg",
  "images/foto2.jpg",
  "images/foto3.jpg",
  "images/foto4.jpg"
];

const gallery = document.getElementById("gallery");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const closeBtn = document.getElementById("close");

images.forEach(src => {
  const img = document.createElement("img");
  img.src = src;

  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = src;
  });

  gallery.appendChild(img);
});

closeBtn.onclick = () => modal.style.display = "none";
modal.onclick = () => modal.style.display = "none";
