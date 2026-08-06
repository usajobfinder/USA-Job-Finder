// ==========================
// USA Job Finder - Final Script
// ==========================

// Search Jobs
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

if (searchBtn) {
  searchBtn.addEventListener("click", function () {
    const keyword = searchInput.value.toLowerCase();
    const cards = document.querySelectorAll(".job-card");

    cards.forEach(card => {
      const text = card.innerText.toLowerCase();

      if (text.includes(keyword)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
}

// Save Job
document.querySelectorAll(".save-btn").forEach(btn => {
  btn.addEventListener("click", function () {
    this.innerHTML = "✅ Saved";
    this.disabled = true;
    alert("Job saved successfully!");
  });
});

// Share Job
document.querySelectorAll(".share-btn").forEach(btn => {
  btn.addEventListener("click", function () {

    if (navigator.share) {

      navigator.share({
        title: document.title,
        text: "Check out this USA Job!",
        url: window.location.href
      });

    } else {

      navigator.clipboard.writeText(window.location.href);
      alert("Job link copied successfully!");

    }

  });
});

// Back To Top Button
const topBtn = document.getElementById("topBtn");

window.onscroll = function () {

  if (!topBtn) return;

  if (document.documentElement.scrollTop > 300) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }

};

if (topBtn) {
  topBtn.onclick = function () {

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  };
}

// Dark Mode
const darkBtn = document.getElementById("darkModeBtn");

if (darkBtn) {

  darkBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

  });

}