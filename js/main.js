import { initBlog } from './blog.js';
import { initCustomer } from './customer.js';
import { initFeature } from './feature.js';
import { initMenu } from './menu.js';
import { initSlider } from './slider.js';

document.addEventListener('DOMContentLoaded', () => {
    // Luôn chạy menu điều hướng đầu trang
    initMenu();

    const sections = document.querySelectorAll('section[data-index]');

    const observerOptions = {
        root: null,
        rootMargin: '50px', 
        threshold: 0.1       
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const currentIndex = parseInt(entry.target.getAttribute('data-index'));

            // Nếu section này đang hiển thị trên màn hình
            if (entry.isIntersecting) {
                // Kích hoạt section hiện tại và các section lân cận (±1)
                sections.forEach(sec => {
                    const index = parseInt(sec.getAttribute('data-index'));
                    const distance = Math.abs(index - currentIndex);

                    if (distance <= 1) {
                        activateSection(index, sec);
                    } else {
                        deactivateSection(index, sec);
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(sec => observer.observe(sec));
});

// Hàm hiển thị/render nội dung khi cuộn tới
function activateSection(index, sectionEl) {
    // index 0: Hero & Customer slider
    if (index === 0 && !sectionEl.dataset.rendered) {
        initSlider();
        initCustomer();
        sectionEl.dataset.rendered = "true";
    } 
    // index 5 hoặc section Featured Property (bạn xem đúng index của thẻ featured property trong html của bạn nhé)
    else if (sectionEl.classList.contains('featured-property-section') && !sectionEl.dataset.rendered) {
        initFeature();
        sectionEl.dataset.rendered = "true";
    } 
    // section Blog
    else if (sectionEl.classList.contains('blog-section') && !sectionEl.dataset.rendered) {
        initBlog();
        sectionEl.dataset.rendered = "true";
    }
}

// Hàm dọn dẹp nội dung khi cuộn đi xa để giải phóng bộ nhớ
function deactivateSection(index, sectionEl) {
    // Xóa nội dung phần Featured Property nếu ở xa
    if (sectionEl.classList.contains('featured-property-section')) {
        const grid = sectionEl.querySelector('#property-grid');
        if (grid) grid.innerHTML = '';
        sectionEl.dataset.rendered = ""; // Cho phép load lại khi cuộn quay về
    } 
    // Xóa nội dung phần Blog nếu ở xa
    else if (sectionEl.classList.contains('blog-section')) {
        const container = sectionEl.querySelector('#blog-container');
        if (container) container.innerHTML = '';
        sectionEl.dataset.rendered = ""; // Cho phép load lại khi cuộn quay về
    }
}