const slideData = [
    { img: "./images/property-1.jpg" },
    { img: "./images/property-2.jpg" },
    { img: "./images/property-3.jpg" }
];

function initSlider() {
    // --- 1. XỬ LÝ CHO HERO SECTION ---
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        const heroTabs = heroSection.querySelectorAll('.house-tab');
        const heroPageNums = heroSection.querySelectorAll('.page-num');
        const heroLines = heroSection.querySelectorAll('.pagination-lines .line');
        const heroImg = document.getElementById('hero-img');

        function goToHeroSlide(index) {
            heroTabs.forEach(t => t.classList.remove('active'));
            heroPageNums.forEach(p => p.classList.remove('active'));
            heroLines.forEach(l => l.classList.remove('active'));

            if (heroTabs[index]) heroTabs[index].classList.add('active');
            if (heroPageNums[index]) heroPageNums[index].classList.add('active');
            if (heroLines[index]) heroLines[index].classList.add('active');
            if (heroImg && slideData[index]) heroImg.src = slideData[index].img;
        }

        heroTabs.forEach((tab, index) => tab.addEventListener('click', () => goToHeroSlide(index)));
        heroPageNums.forEach((num, index) => num.addEventListener('click', () => goToHeroSlide(index)));
        heroLines.forEach((line, index) => line.addEventListener('click', () => goToHeroSlide(index)));
    }

    // --- 2. XỬ LÝ CHO TODAY SELLS SECTION ---
    const sellsSection = document.querySelector('.today-sells-section');
    if (sellsSection) {
        const sellsTabs = sellsSection.querySelectorAll('.house-tab');
        const sellsPageNums = sellsSection.querySelectorAll('.page-num');
        const sellsLines = sellsSection.querySelectorAll('.pagination-lines .line');
        const sellsImgBoxes = sellsSection.querySelectorAll('.sells-img-box');

        function goToSellsSlide(index) {
            sellsTabs.forEach(t => t.classList.remove('active'));
            sellsPageNums.forEach(p => p.classList.remove('active'));
            sellsLines.forEach(l => l.classList.remove('active'));
            sellsImgBoxes.forEach(box => box.classList.remove('active'));

            if (sellsTabs[index]) sellsTabs[index].classList.add('active');
            if (sellsPageNums[index]) sellsPageNums[index].classList.add('active');
            if (sellsLines[index]) sellsLines[index].classList.add('active');
            if (sellsImgBoxes[index]) sellsImgBoxes[index].classList.add('active');
        }

        sellsTabs.forEach((tab, index) => tab.addEventListener('click', () => goToSellsSlide(index)));
        sellsPageNums.forEach((num, index) => num.addEventListener('click', () => goToSellsSlide(index)));
        sellsLines.forEach((line, index) => line.addEventListener('click', () => goToSellsSlide(index)));
        sellsImgBoxes.forEach((box, index) => box.addEventListener('click', () => goToSellsSlide(index)));
    }
}