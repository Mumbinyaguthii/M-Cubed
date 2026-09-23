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

const contactForm = document.querySelector("#contactForm");

if (contactForm) {
  const contactName = document.querySelector("#contactName");
  const contactEmail = document.querySelector("#contactEmail");
  const contactMessage = document.querySelector("#message");

  const nameError = document.querySelector("#nameError");
  const emailError = document.querySelector("#emailError");
  const messageError = document.querySelector("#messageError");

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = contactName.value.trim();
    const email = contactEmail.value.trim();
    const message = contactMessage.value.trim();

    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";

    let isValid = true;

    if (name === "") {
      nameError.textContent = "Name is required.";
      isValid = false;
    }

    if (email === "") {
      emailError.textContent = "Email is required.";
      isValid = false;
    } else if (!emailPattern.test(email)) {
      emailError.textContent = "Please enter a valid email address.";
      isValid = false;
    }

    if (message === "") {
      messageError.textContent = "Message is required.";
      isValid = false;
    } else if (message.length < 10) {
      messageError.textContent = "Message must be at least 10 characters.";
      isValid = false;
    }

    if (!isValid) {
      return;
    }

    alert("Your message has been prepared successfully.");
  });
}

const roomBookingForm = document.querySelector("#roomBookingForm");

if (roomBookingForm) {
  const roomName = document.querySelector("#roomName");
  const roomEmail = document.querySelector("#roomEmail");
  const roomPhone = document.querySelector("#roomPhone");
  const roomType = document.querySelector("#roomType");
  const checkIn = document.querySelector("#checkIn");
  const checkOut = document.querySelector("#checkOut");
  const guests = document.querySelector("#guests");

  roomBookingForm.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("room booking form submitted");

    const name = roomName.value.trim();
    const email = roomEmail.value.trim();
    const phone = roomPhone.value.trim();
    const selectedRoom = roomType.value;
    const arrivalDate = checkIn.value;
    const departureDate = checkOut.value;
    const numberOfGuests = guests.value;

    if (name === "") {
      alert("Please enter your full name.");
      return;
    }

    if (email === "") {
      alert("Please enter your email address.");
      return;
    }

    if (phone === "") {
      alert("Please enter your phone number.");
      return;
    }

    if (selectedRoom === "") {
      alert("Please select a room.");
      return;
    }

    if (arrivalDate === "") {
      alert("Please select your check-in date.");
      return;
    }

    if (departureDate === "") {
      alert("Please select your check-out date.");
      return;
    }

    if (numberOfGuests === "" || Number(numberOfGuests) < 1) {
      alert("Please enter a valid number of guests.");
      return;
    }

    if (departureDate <= arrivalDate) {
      alert("Check-out must be after check-in.");
      return;
    }

    alert("Room booking details are valid");
  });
}

const tableBookingForm = document.querySelector("#tableBookingForm");

if (tableBookingForm) {
  const tableName = document.querySelector("#tableName");
  const tableEmail = document.querySelector("#tableEmail");
  const tablePhone = document.querySelector("#tablePhone");
  const tableDate = document.querySelector("#tableDate");
  const tableGuests = document.querySelector("#tableGuests");
  const tableMessage = document.querySelector("#tableMessage");

  tableBookingForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = tableName.value.trim();
    const email = tableEmail.value.trim();
    const phone = tablePhone.value.trim();
    const reservationDate = tableDate.value;
    const numberOfGuests = tableGuests.value;
    const additionalMessage = tableMessage.value.trim();

    if (name === "") {
      alert("Please enter your full name.");
      return;
    }

    if (email === "") {
      alert("Please enter your email address.");
      return;
    }

    if (phone === "") {
      alert("Please enter your phone number.");
      return;
    }

    if (reservationDate === "") {
      alert("Please select a reservation date.");
      return;
    }

    if (numberOfGuests === "" || Number(numberOfGuests) < 1) {
      alert("Please enter a valid number of guests.");
      return;
    }

    if (additionalMessage === "") {
      alert("Please add aditional information.");
      return;
    }

    alert("VIP reservation details are valid.");
  });
}
