// Mỗi section chỉ khởi tạo MỘT LẦN, khi người dùng cuộn gần tới.
const lazySections = [
    { selector: '.hero-section',              init: initSlider },
    { selector: '.featured-property-section', init: initFeature },
    { selector: '.testimonials-section',      init: initCustomer },
    { selector: '.blog-section',              init: initBlog }
];

document.addEventListener('DOMContentLoaded', () => {
    initMenu();

    if (!('IntersectionObserver' in window)) {   // trình duyệt cũ: chạy hết
        lazySections.forEach(item => item.init());
        return;
    }

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const item = lazySections.find(s => entry.target.matches(s.selector));
            if (item) item.init();
            obs.unobserve(entry.target);          // chạy 1 lần rồi thôi theo dõi
        });
    }, { rootMargin: '200px 0px' });              // tải trước 200px

    lazySections.forEach(({ selector }) => {
        const el = document.querySelector(selector);
        if (el) observer.observe(el);
    });
});