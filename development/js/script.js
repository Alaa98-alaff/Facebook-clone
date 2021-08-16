// Changing hightlights on pages navbar
const headerPage = document.querySelectorAll(".page");

headerPage.forEach((page) =>
  page.addEventListener("click", (e) => {
    headerPage.forEach((page) => page.classList?.remove("active"));
    page.classList.toggle("active");
  })
);

// Handling Post share modal
const postMaker = document.querySelector(".postMaker-container");

const sharePost = document.querySelector(".share__input");

const closeModalBtn = document.querySelector(".close-modal");

const overlay = document.querySelector(".overlay");

const body = document.querySelector("*");

const openModal = () => {
  postMaker.classList.remove("hidden");
  overlay.classList.remove("hidden");
  body.style.overflow = "hidden";
  window.scrollTo(0, 0);
};

const closeModal = () => {
  postMaker.classList.add("hidden");
  overlay.classList.add("hidden");
  body.style.overflow = "scroll";
};

sharePost.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// Enable post btn while writing post
const postInput = document.querySelector(".details-box__description");

const postShare = document.querySelector(".post-btn");

postInput.addEventListener("keyup", (e) => {
  console.log(postInput.value);
  if (postInput.value === "") {
    postShare.style.backgroundColor = "#e4e6eb";
  } else {
    console.log(false);
    postShare.style.backgroundColor = "#1876f2";
  }
});
