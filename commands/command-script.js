// Redirect to main site
function redirectToMainSite() {
  window.location.href = "https://nino-os.deboticz.online/";
}

// Copy command to clipboard
function copyCommand(command) {
  const commandElement = document.querySelector(
    `code[id="command"][onclick*="${command}"]`
  );
  if (commandElement) {
    const commandText = commandElement.textContent;

    navigator.clipboard
      .writeText(commandText)
      .then(function () {
        const alert = document.createElement("div");
        alert.className = "alert alert-success";
        alert.textContent = "Command copied: " + commandText;
        document.body.appendChild(alert);

        setTimeout(() => {
          alert.style.display = "none";
        }, 2000);
      })
      .catch(function (error) {
        return;
      });
  } else {
    return;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("search-input");
  const commands = document.querySelectorAll("li");
  const paragraphs = document.querySelectorAll("p");
  const clearButton = document.getElementById("clear-button");

  function performSearch() {
    const value = searchInput.value.toLowerCase();

    commands.forEach((command) => {
      const isVisible = command.innerText.toLowerCase().includes(value);
      command.classList.toggle("hide", !isVisible);
    });
    paragraphs.forEach((paragraph) => {
      const isVisible = paragraph.innerText.toLowerCase().includes(value);
      paragraph.classList.toggle("hide", !isVisible);
    });

    clearButton.classList.toggle(
      "hide",
      commands.length > 0 && !commands[0].classList.contains("hide")
    );
  }

  // Event listener for search input
  searchInput.addEventListener("input", performSearch);

  searchInput.addEventListener("input", performSearch);

  clearButton.addEventListener("click", () => {
    searchInput.value = "";
    performSearch();
    sections.forEach((section) => section.classList.remove("hide")).then();
  });

  searchInput.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      if (searchInput.value === "") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        performSearch();
      }
    }
  });

  window.addEventListener("load", function () {
    searchInput.value = "";
    performSearch();
  });
});

// Toggle search input visibility
function toggleSearch() {
  const searchInput = document.getElementById("search-input");
  if (
    searchInput.style.display === "none" ||
    searchInput.style.display === ""
  ) {
    activateSearch();
  } else {
    deactivateSearch();
  }
}

function activateSearch() {
  const searchButton = document.getElementById("ri-search-line");
  const searchInput = document.getElementById("search-input");

  searchButton.style.display = "none";
  searchInput.style.display = "inline-block";
  searchInput.focus();
}

function deactivateSearch() {
  const searchButton = document.getElementById("ri-search-line");
  const searchInput = document.getElementById("search-input");

  searchButton.style.display = "inline-block";
  searchInput.style.display = "none";
}

// Toggle search input visibility
function toggleSearch() {
  const searchInput = document.getElementById("search-input");
  if (
    searchInput.style.display === "none" ||
    searchInput.style.display === ""
  ) {
    activateSearch();
  } else {
    deactivateSearch();
  }
}

function activateSearch() {
  const searchButton = document.getElementById("ri-search-line");
  const searchInput = document.getElementById("search-input");

  searchButton.style.display = "none";
  searchInput.style.display = "inline-block";
  searchInput.focus();
}

function deactivateSearch() {
  const searchButton = document.getElementById("ri-search-line");
  const searchInput = document.getElementById("search-input");

  searchButton.style.display = "inline-block";
  searchInput.style.display = "none";
}

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
