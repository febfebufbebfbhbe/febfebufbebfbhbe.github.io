document.addEventListener("DOMContentLoaded", async function () {
  setTimeout(() => {
    document.querySelector(".all-load").style.display = "none";
    document.querySelector(".loading-footer").style.display = "none";
    document.querySelector(".all").style.display = "block";
    document.body.classList.add("fade-in");
  }, 3000);
});

function scrollToElement(elementSelector, instance = 0) {
  const elements = document.querySelectorAll(elementSelector);
  if (elements.length > instance) {
    elements[instance].scrollIntoView({ behavior: "smooth" });
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const link1 = document.getElementById("link1");
  const link2 = document.getElementById("link2");
  const link3 = document.getElementById("link3");

  link1.addEventListener("click", (event) => {
    event.preventDefault();
    scrollToElement("#f");
  });

  link2.addEventListener("click", (event) => {
    event.preventDefault();
    scrollToElement("#pf");
  });

  link3.addEventListener("click", (event) => {
    event.preventDefault();
    scrollToElement(".column");
  });
});

document.addEventListener("contextmenu", function (event) {
  event.preventDefault();
});

(function () {
  function preventDevTools() {
    if (window.devtools.open) {
      window.location.reload();
    }
  }

  window.devtools = { open: false };
  window.addEventListener("devtoolschange", preventDevTools);

  (function () {
    var devtools = window.devtools;
    var element = new Image();
    Object.defineProperty(element, "id", {
      get: function () {
        devtools.open = true;
        window.dispatchEvent(new Event("devtoolschange"));
      },
    });
    return;
  })();
})();

document.addEventListener("keydown", function (event) {
  if (event.key == "F12") {
    event.preventDefault();
  }
  if (
    (event.ctrlKey || event.metaKey) &&
    event.shiftKey &&
    event.keyCode == "I".charCodeAt(0)
  ) {
    event.preventDefault();
  }
  if (
    (event.ctrlKey || event.metaKey) &&
    event.shiftKey &&
    event.keyCode == "J".charCodeAt(0)
  ) {
    event.preventDefault();
  }
  if ((event.ctrlKey || event.metaKey) && event.keyCode == "U".charCodeAt(0)) {
    event.preventDefault();
  }
  if (
    (event.ctrlKey || event.metaKey) &&
    event.shiftKey &&
    event.keyCode == 67
  ) {
    event.preventDefault();
  }
  if ((event.ctrlKey || event.metaKey) && event.keyCode == 83) {
    event.preventDefault();
  }
});

var options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.8,
};

var observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
      observer.unobserve(entry.target);
    }
  });
}, options);

var targets = document.querySelectorAll(".pricing .card");
targets.forEach(function (target) {
  observer.observe(target);
});

//e

var targets = document.querySelectorAll(".card");
targets.forEach(function (target) {
  observer.observe(target);
});
