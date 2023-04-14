// write your code here
const imgDiv = document.getElementById("ramen-menu");

window.addEventListener("DOMContentLoaded", () => {
  fetch("http://localhost:3000/ramens")
    .then((res) => res.json())
    .then((data) => {
      displayImages(data);
    });
});

//function to display images
function displayImages(data) {
    displayDetails(data[0])
  data.forEach((image) => {
    const imgs = document.createElement("img");
    imgs.src = image.image;
    imgDiv.appendChild(imgs);
    // console.log(image);
    // displayDetails(image);
    imgs.addEventListener("click", () => {
      displayDetails(image);
    });
  });
}

//function to display ramen details
function displayDetails(image) {
  const img = document.querySelector(".detail-image");
  const name = document.querySelector(".name");
  const restaurant = document.querySelector(".restaurant");
  const rating = document.querySelector("#rating-display");
  const comment = document.querySelector("#comment-display");
  img.src = image.image;
  name.textContent = image.name;
  restaurant.textContent = image.restaurant;
  rating.textContent = image.rating;
  comment.innerHTML = image.comment;
}

//function to add new ramen
const form = document.querySelector("#new-ramen");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);
  console.log(data);
  fetch("http://localhost:3000/ramens", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
});
