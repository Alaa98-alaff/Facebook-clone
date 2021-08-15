const headerPage = document.querySelectorAll(".page");

headerPage.forEach((page) =>
  page.addEventListener("click", (e) => {
    headerPage.forEach((page) => page.classList?.remove("active"));
    page.classList.toggle("active");
  })
);
