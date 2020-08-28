window.addEventListener("scroll", function () {
  const header = document.getElementById("header-menu");
  if (window.pageYOffset > 0) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});
    