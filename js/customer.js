const customers = [
    {
        name: "Yunus Seyhan",
        title: "Postgraduate Student",
        text: "We make sure you have a fine distance with the sickness. We make you never lose hope. We make sure you have with the sickness.",
        image: "./images/man_avata_1.jpg"
    },
    {
        name: "David Miller",
        title: "Software Engineer",
        text: "Amazing experience! The support team was extremely helpful and made everything so smooth and stress-free.",
        image: "./images/man_avata_2.jpg"
    },
    {
        name: "Sarah Jenkins",
        title: "UX Designer",
        text: "The interface design and layout structure are extremely clean. It saved me a ton of time on my frontend project.",
        image: "./images/woman_avata_1.jpg"
    },
    {
        name: "Emily Watson",
        title: "Product Manager",
        text: "Outstanding quality and attention to detail. Highly recommend this to anyone looking for professional results.",
        image: "./images/woman_avata_2.jpg"
    }
];

export function initCustomer() {
    let currentIndex = 0;

    const imgEl = document.getElementById('customerImg');
    const bgImgEl = document.getElementById('bgCustomerImg');
    const nameEl = document.getElementById('customerName');
    const titleEl = document.getElementById('customerTitle');
    const textEl = document.getElementById('customerText');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');

    if (!imgEl) return;

    function updateCustomer(index) {
        currentIndex = index;
        const nextIndex = (currentIndex + 1) % customers.length;

        imgEl.src = customers[currentIndex].image;
        nameEl.textContent = customers[currentIndex].name;
        titleEl.textContent = customers[currentIndex].title;
        textEl.textContent = customers[currentIndex].text;
        bgImgEl.src = customers[nextIndex].image;
    }

    updateCustomer(0);

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % customers.length;
            updateCustomer(currentIndex);
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + customers.length) % customers.length;
            updateCustomer(currentIndex);
        });
    }
}