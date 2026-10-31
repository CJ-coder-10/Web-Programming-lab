const galleryItems = Array.from(document.querySelectorAll(".gallery-item"));
const lightbox = document.getElementById("lightbox");
const slideImage = document.getElementById("slideImage");
const slideCaption = document.getElementById("slideCaption");
const slideCount = document.getElementById("slideCount");
const closeBtn = document.getElementById("closeBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const playBtn = document.getElementById("playBtn");

let currentIndex = 0;
let autoPlayTimer = null;

function showSlide(index) {
    currentIndex = (index + galleryItems.length) % galleryItems.length;

    const thumbnail = galleryItems[currentIndex].querySelector("img");
    const caption = galleryItems[currentIndex].querySelector("span").textContent;

    // Use the same image URL as the selected gallery thumbnail.
    slideImage.src = thumbnail.src;
    slideImage.alt = thumbnail.alt;
    slideCaption.textContent = caption;
    slideCount.textContent = `${currentIndex + 1} / ${galleryItems.length}`;
}

function openSlideshow(index) {
    showSlide(index);
    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    closeBtn.focus();
}

function closeSlideshow() {
    lightbox.classList.remove("open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    stopAutoPlay();
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function previousSlide() {
    showSlide(currentIndex - 1);
}

function startAutoPlay() {
    if (autoPlayTimer !== null) return;

    autoPlayTimer = window.setInterval(nextSlide, 3000);
    playBtn.textContent = "⏸ Stop auto-play";
}

function stopAutoPlay() {
    if (autoPlayTimer !== null) {
        window.clearInterval(autoPlayTimer);
        autoPlayTimer = null;
    }
    playBtn.textContent = "▶ Start auto-play";
}

galleryItems.forEach((item) => {
    item.addEventListener("click", () => {
        const index = Number(item.dataset.index);
        openSlideshow(index);
    });
});

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", previousSlide);
closeBtn.addEventListener("click", closeSlideshow);

playBtn.addEventListener("click", () => {
    if (autoPlayTimer === null) {
        startAutoPlay();
    } else {
        stopAutoPlay();
    }
});

lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) closeSlideshow();
});

document.addEventListener("keydown", (event) => {
    if (!lightbox.classList.contains("open")) return;

    if (event.key === "Escape") closeSlideshow();
    if (event.key === "ArrowRight") nextSlide();
    if (event.key === "ArrowLeft") previousSlide();
});
