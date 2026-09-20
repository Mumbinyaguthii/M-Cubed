console.log("M-Cubed JavaScript is connected!");

const galleryGrid = document.querySelector("#galleryGrid");

const galleryImages = [
  {
    Image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819",
    alt: "Lounge entertainment area",
  },
  {
    image: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f",
    alt: "Restaurant and dining area",
  },
  {
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    alt: "Comfortable accommodation",
  },
];

function loadGallery() {
  if (!galleryGrid) {
    return;
  }

  galleryImages.forEach(function (galleryItem) {
    const imageContainer = document.createElement("div");
    imageContainer.classList.add("gallery-item");

    const image = document.createElement("img");
    image.src = galleryItem.image;
    image.alt = galleryItem.alt;

    imageContainer.appendChild(image);
    galleryGrid.appendChild(imageContainer);
  });
}

loadGallery();
