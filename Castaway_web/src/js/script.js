const currentUrl = window.location.href;

if (currentUrl.includes("index.html")) {
  const Home = document.querySelectorAll(".Home");

  Home.forEach(Home => {
    Home.classList.add("active");
  });
}