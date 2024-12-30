let slideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll(".slide");

    // پنهان کردن تمام اسلایدها
    slides.forEach(slide => (slide.style.display = "none"));

    // نشان دادن اسلاید فعلی
    slideIndex++;
    if (slideIndex > slides.length) slideIndex = 1;
    slides[slideIndex - 1].style.display = "block";

    // تغییر اسلاید هر ۳ ثانیه
    setTimeout(showSlides, 3000);
}

// اجرای اسلایدشو هنگام بارگذاری صفحه
window.onload = showSlides;