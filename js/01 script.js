console.log("hello world!");

/////////////////////////////////////////////////////////////
// set current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

/////////////////////////////////////////////////////////////
// mobile navigation
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

// event handling
btnNavEl.addEventListener("click", function () {
  // adds "nav-open" class, if it is not present
  // removes "nav-open" class, if it is present
  headerEl.classList.toggle("nav-open");
});

/////////////////////////////////////////////////////////////
// Smooth scrolling animation

// selects all the anchor element having href property
const allLinks = document.querySelectorAll("a:link");

// adds event listner to all the links using forEach loop
allLinks.forEach(function (l) {
  l.addEventListener("click", function (e) {
    e.preventDefault();
    const href = l.getAttribute("href");

    // scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // scroll to other liks
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({
        behavior: "smooth",
      });

      // close mobile navigation
      if (l.classList.contains("main-nav-link")) {
        headerEl.classList.toggle("nav-open");
      }
    }
  });
});

/////////////////////////////////////////////////////////////
// sticky navigation

const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (e) {
    const ent = e[0];
    if (ent.isIntersecting === false) {
      // adding "sticky" class to body element
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      // removing "sticky" class to body element
      document.body.classList.remove("sticky");
    }
  },
  {
    // in the view port
    root: null,
    // throughs an event as soon as view port reaches section-hero
    threshold: 0,
    // start event when we are 80px above of section-hero
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);
