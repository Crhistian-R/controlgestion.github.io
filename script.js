document.querySelectorAll("nav a").forEach(link => {
  link.onclick = function(event) {
    event.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({behavior: "smooth"});
  }
});
