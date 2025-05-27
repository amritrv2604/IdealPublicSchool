// Your YouTube Video IDs
const youtubeVideos = [
  "3WqgxQlLIhw",
  "3U6wEKNKCz4",
  "5JEOR0oiHeQ",
  "2-uBj31tmU8",
  "86XqeQ2lmkE",
  "ev24tByLNFc",
  "hRt-az3JYIs",
  "-T8CG1S6p-U",
  "w_Oswp47_4c",
  "5Ah8TX1fHEY",
  "WUy7PpIQufc",
  "aW_9srhk04o",
  "Ma9uJoj7oPo",
  "LzHdWwGXgqk",
  "R33P9eAfGUo",
  "z4wIqsJdLtw",
  "efx-eaay5zM",
  "YL0vydoxjnU",
  "7Uz686ygLqA",
  "LBKiyQMD0Ic",
];

// Video Pagination
let currentVideoPage = 1;
const videosPerPage = 9; // 3x3 grid

// --- IMAGE SECTION (6-Column Grid) ---
function loadImages() {
  const container = document.getElementById("images-section");
  container.innerHTML = "";

  for (let i = 1; i <= 20; i++) {
    container.innerHTML += `
            <div class="gallery-item">
                <div class="image-container">
                    <img src="images/event${i}.jpg" alt="Event ${i}">
                </div>
            </div>
        `;
  }
}

// --- VIDEO SECTION (3x3 Grid) ---
function loadVideos(page = 1) {
  const container = document.getElementById("video-grid");
  container.innerHTML = "";

  const startIdx = (page - 1) * videosPerPage;
  const endIdx = Math.min(startIdx + videosPerPage, youtubeVideos.length);

  // Create 3x3 grid
  let gridHTML = "";
  for (let i = startIdx; i < endIdx; i++) {
    if (i % 3 === 0) gridHTML += `<div class="video-row">`;
    gridHTML += `
            <div class="video-item">
                <iframe src="https://www.youtube.com/embed/${youtubeVideos[i]}" 
                        frameborder="0" 
                        allowfullscreen></iframe>
            </div>
        `;
    if (i % 3 === 2 || i === endIdx - 1) gridHTML += `</div>`;
  }

  container.innerHTML = gridHTML;

  // Update pagination
  document.getElementById(
    "page-info"
  ).textContent = `Page ${page} of ${Math.ceil(
    youtubeVideos.length / videosPerPage
  )}`;
  document.getElementById("prev-btn").disabled = page === 1;
  document.getElementById("next-btn").disabled = endIdx >= youtubeVideos.length;
}

// Toggle Sections
document.getElementById("show-images").addEventListener("click", () => {
  document.getElementById("images-section").style.display = "grid";
  document.getElementById("videos-section").style.display = "none";
  document.getElementById("show-images").classList.add("active");
  document.getElementById("show-videos").classList.remove("active");
});

document.getElementById("show-videos").addEventListener("click", () => {
  document.getElementById("images-section").style.display = "none";
  document.getElementById("videos-section").style.display = "block";
  document.getElementById("show-videos").classList.add("active");
  document.getElementById("show-images").classList.remove("active");
  loadVideos(currentVideoPage);
});

// Pagination Controls
document.getElementById("prev-btn").addEventListener("click", () => {
  if (currentVideoPage > 1) {
    currentVideoPage--;
    loadVideos(currentVideoPage);
  }
});

document.getElementById("next-btn").addEventListener("click", () => {
  if (currentVideoPage * videosPerPage < youtubeVideos.length) {
    currentVideoPage++;
    loadVideos(currentVideoPage);
  }
});

// Initialize
loadImages();
