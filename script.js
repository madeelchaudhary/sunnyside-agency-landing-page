document.querySelector(".nav-toggle").addEventListener("click", function (e) {
  const header = e.currentTarget.parentElement;
  header.classList.toggle("nav-visible");
});

const navLinks = document.querySelectorAll(".nav-list-item a");
for (let link of navLinks) {
  link.addEventListener("click", function (e) {
    const size = window.matchMedia("(max-width: 760px)");
    if (size.matches)
      this.closest(".nav-visible").classList.remove("nav-visible");
  });
}
window.onscroll = function () {
  const size = window.matchMedia("(max-width: 760px)");
  const header = document.querySelector("header");
  if (size.matches) {
    if (document.documentElement.scrollTop > 80) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  } else {
    header.classList.remove("scrolled");
  }
};
