// Überprüfen, ob der Benutzer bereits den Dark Mode aktiviert hat
if (localStorage.getItem("darkMode") === "enabled") {
  document.body.classList.add("dark-theme");
  document.querySelector(".theme-toggle").classList.add("active");
}

// Funktion zum Umschalten zwischen Dark Mode und Light Mode
function toggleTheme() {
  const body = document.body;
  const themeToggle = document.getElementById("theme-toggle");

  if (body.classList.contains("dark-theme")) {
    body.classList.remove("dark-theme");
    themeToggle.classList.remove("active");
    localStorage.setItem("darkMode", "disabled");
  } else {
    body.classList.add("dark-theme");
    themeToggle.classList.add("active");
    localStorage.setItem("darkMode", "enabled");
  }
}

if (localStorage.getItem("darkMode") === "enabled") {
  enableDarkMode();
}

function toggleTheme() {
  if (localStorage.getItem("darkMode") === "enabled") {
    disableDarkMode();
  } else {
    enableDarkMode();
  }
}

function enableDarkMode() {
  document.body.classList.add("dark-theme");
  document.querySelector(".theme-toggle").classList.add("active");
  localStorage.setItem("darkMode", "enabled");
}

function disableDarkMode() {
  document.body.classList.remove("dark-theme");
  document.querySelector(".theme-toggle").classList.remove("active");
  localStorage.setItem("darkMode", "disabled");
}

function redirectToMainSite() {
  window.location.href = "https://nino-os.deboticz.online/";
}

function sendEmail() {
  var name = document.getElementById("name").value;
  var message = document.getElementById("message").value;

  if (!name) {
    alert("Bitte gib deinen Namen ein (Discord-Name) 👤");
    return false;
  }

  if (!message) {
    alert("Bitte gib eine Nachricht an 📧");
    return false;
  }

  var mailtoLink =
    "mailto:ninoos.mail@gmail.com" +
    "?subject=Supportanfrage von " +
    name +
    "&body=" +
    message;

  window.location.href = mailtoLink;

  window.location.href = "https://nino-os.deboticz.online/";

  return false;
}

function scrollToElement(elementSelector) {
  const element = document.querySelector(elementSelector);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const link1 = document.getElementById("FAQ");
  const link2 = document.getElementById("Kontakt");

  link1.addEventListener("click", (event) => {
    event.preventDefault();
    scrollToElement(".section1");
  });

  link2.addEventListener("click", (event) => {
    event.preventDefault();
    scrollToElement(".section2");
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
