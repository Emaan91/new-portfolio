document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("welcome-link").classList.add("active");
});

document.querySelectorAll(".sidebar nav ul li a span").forEach((link) => {
  link.addEventListener("click", function () {
    document.querySelectorAll(".sidebar nav ul li a span").forEach((item) => {
      item.classList.remove("active");
    });
    this.classList.add("active");
  });
});
