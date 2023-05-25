const sidebar = document.querySelector(".sidebar");
const toggleBtn = document.querySelector(".btn-toggle");
const closeBtn = document.querySelector(".btn-close");

toggleBtn.addEventListener("click", function () {
  sidebar.classList.add("open-sidebar");
});

closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("open-sidebar");
});
