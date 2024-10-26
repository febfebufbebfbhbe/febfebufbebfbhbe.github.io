if (localStorage.getItem("darkMode") === "enabled") {
  document.body.classList.add("dark-theme");
  document.querySelector(".theme-toggle").classList.add("active");
}

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

window.onload = function () {
  let timerValue = localStorage.getItem("timerValue") || 30;

  updatetimer(timerValue);
};

function updatetimer(timeLeft1) {
  let timerElement1 = document.getElementById("timer");

  function updateTimer() {
    let seconds1 = timeLeft1 % 60;

    if (seconds1 < 10) {
      seconds1 = "0" + seconds1;
    }

    timerElement1.textContent = `${seconds1}sec.`;

    if (timeLeft1 > 0) {
      timeLeft1--;
      localStorage.setItem("timerValue", timeLeft1);
    } else {
      timeLeft1 = 30;
      localStorage.setItem("timerValue", timeLeft1);
    }

    setTimeout(updateTimer, 1000);
  }

  updateTimer();
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

document.addEventListener("DOMContentLoaded", function () {
  const url = `https://dash.deboticz.online/`;
  const resultDiv = document.getElementById("status-txt1");

  async function checkStatus() {
    try {
      const response = await fetch(
        `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`
      );
      if (!response.ok) {
        resultDiv.textContent = "Status: OFFLINE";
        resultDiv.style.color = "red";
      }
      if (response.ok) {
        const data = await response.json();
        const status = data.status.http_code;
        if (status === 200) {
          resultDiv.textContent = "Status: ONLINE";
          resultDiv.style.color = "green";
        } else {
          resultDiv.textContent = "Status: OFFLINE";
          resultDiv.style.color = "red";
        }
      } else {
        resultDiv.textContent = "Status: OFFLINE";
        resultDiv.style.color = "red";
        console.clear();
      }
    } catch (error) {
      console.clear();
    }
  }

  setTimeout(() => {
    checkStatus();

    setInterval(() => {
      checkStatus();
    }, 30000);
  }, 2000);
});

document.addEventListener("DOMContentLoaded", function () {
  const url = `https://panel.deboticz.online/`;
  const resultDiv = document.getElementById("status-txt2");

  async function checkStatus() {
    try {
      const response = await fetch(
        `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`
      );
      if (!response.ok) {
        resultDiv.textContent = "Status: OFFLINE";
        resultDiv.style.color = "red";
      }
      if (response.ok) {
        const data = await response.json();
        const status = data.status.http_code;
        if (status === 200) {
          resultDiv.textContent = "Status: ONLINE";
          resultDiv.style.color = "green";
        } else {
          resultDiv.textContent = "Status: OFFLINE";
          resultDiv.style.color = "red";
        }
      } else {
        resultDiv.textContent = "Status: OFFLINE";
        resultDiv.style.color = "red";
        console.clear();
      }
    } catch (error) {
      console.clear();
    }
  }

  setTimeout(() => {
    checkStatus();

    setInterval(() => {
      checkStatus();
    }, 30000);
  }, 2000);
});
