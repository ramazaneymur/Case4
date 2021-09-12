const appHeight = () => {
  const doc = document.documentElement;
  doc.style.setProperty("--app-height", `${window.innerHeight}px`);
};
window.addEventListener("resize", appHeight);
appHeight();

const keyItemToggle = (e) => {
  const key = document.querySelectorAll(".key-item");
  if (e.target.classList.contains("key-item") || e.target.closest("key-item")) {
    key.forEach((element) => {
      element.classList.remove("active");
    });
    e.target.classList.add("active");
  }
};

const windowLoad = () => {
  setTimeout(() => {
    // $("#loader").fadeOut("slow", function() {
    //   $(this).hide();
    // });
    // $("#hideLoad").removeClass("opacity");
    // document.getElementById("loader").remove();
    // document.getElementById("hideLoad").classList.remove("opacity");
  }, 5000);
};

let old = 0;
const stickyHeader = () => {
  let body = document.querySelector(".body");
  if (window.scrollY > 50) {
    body.classList.add("headerClose");
    if (old > window.scrollY) {
      body.classList.add("headerFix");
    }
  } else {
    body.classList.remove("headerClose");
    body.classList.remove("headerFix");
  }
  old = window.scrollY;
};

// Event Listener
document.addEventListener("scroll", () => {
  // scrollUp();
  stickyHeader();
});
window.addEventListener("load", () => {
  windowLoad();
});

var dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach((element) => {
  const dropdown = new bootstrap.Dropdown(
    element.querySelector(".dropdown-toggle")
  );
  element.addEventListener("mouseenter", () => {
    dropdown.show();
  });
  element.addEventListener("mouseleave", () => {
    dropdown.hide();
  });
});

/* Search */
let search = document.querySelector(".search-button");
search.addEventListener("click", () => {
  document.querySelector(".body").classList.add("searchShow");
});

let searchClose = document.querySelector(".search-close");
searchClose.addEventListener("click", () => {
  document.querySelector(".body").classList.remove("searchShow");
});

/* Menü */

let menu = document.querySelector(".menu-button");
menu.addEventListener("click", () => {
  document.querySelector(".body").classList.add("menuShow");
});

let menuClose = document.querySelector(".menu-close");
menuClose.addEventListener("click", () => {
  document.querySelector(".body").classList.remove("menuShow");
});

let backdrop = document.querySelector(".content-backdrop");
backdrop.addEventListener("click", () => {
  document.querySelector(".body").classList.remove("searchShow");
  document.querySelector(".body").classList.remove("menuShow");
});

/* Key */

document.querySelector(".key").addEventListener("click", (e) => {
  keyItemToggle(e);
});
