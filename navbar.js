window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  const navbar = document.getElementById("navbar");
  const links = navbar.querySelectorAll("a");
  const logo = navbar.querySelector("img");
  const logoArrowDown = document.getElementById("logoArrowDown");
  const darkArrowDown = document.getElementById("darkArrowDown");

  if (window.pageYOffset > 50) {
      navbar.classList.remove("bg-transparent");
      navbar.classList.add("bg-white");

      links.forEach(link => {
          link.classList.remove("text-white");
          link.classList.add("text-black");
      });

      logo.src = "https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/9/97f3e7a54e9c6987283b78e016664776.svg";
      logoArrowDown.src = "https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/4/4dc239187a96e2c5b5bf278af10fe414.svg";
      darkArrowDown.innerHTML = `<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
      <svg width="21" height="21" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 10L12 15L17 10" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`;
  } else {
      navbar.classList.remove("bg-white");
      navbar.classList.add("bg-transparent");

      links.forEach(link => {
          link.classList.remove("text-black");
          link.classList.add("text-white");
      });

      logo.src = "https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/f/fbab4f587da2242fbe9858fe3e5ba717.svg";
      logoArrowDown.src = "https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/3/3de2bccd750fe7e9a102505064b03a37.svg";
      darkArrowDown.innerHTML = `<img importance="low" loading="lazy" id="logoArrowDown" src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/3/3de2bccd750fe7e9a102505064b03a37.svg" decoding="async" width="12" height="12" style="object-fit: fill; object-position: 50% 50%;margin-top: 0.2em;margin-left: 0.2em;" class="r-13hce6t">`;
  }
}
