const propertyData = {
    apartment: [
        { img: "./images/apartment_1.jpg", title: "The Stokes Appartment", location: "Cleveland, United States", price: "$2,32,120" },
        { img: "./images/apartment_2.jpg", title: "Modern City Apartment", location: "New York, United States", price: "$3,10,000" },
        { img: "./images/apartment_3.jpg", title: "Luxury Glass Apartment", location: "Chicago, United States", price: "$2,85,000" }
    ],
    vila: [
        { img: "./images/vila_1.jpg", title: "The Suburban Luxury Villa", location: "Los Angeles, United States", price: "$8,50,000" },
        { img: "./images/vila_2.jpg", title: "Beachfront Paradise Vila", location: "Miami, United States", price: "$1,200,000" },
        { img: "./images/vila_3.jpg", title: "Modern Glass Villa", location: "Seattle, United States", price: "$7,50,000" }
    ],
    land: [
        { img: "./images/land_1.jpg", title: "Prime Commercial Land", location: "Texas, United States", price: "$1,50,000" },
        { img: "./images/land_2.jpg", title: "Mountain View Land Plot", location: "Denver, United States", price: "$95,000" },
        { img: "./images/land_3.jpg", title: "Suburban Residential Land", location: "Boston, United States", price: "$1,80,000" }
    ]
};

function initFeature() {
    const propertyTabs = document.querySelectorAll('.property-tab');
    const propertyGrid = document.getElementById('property-grid');
    if (!propertyGrid) return;

    function renderProperties(category) {
        const items = propertyData[category];
        if (!items) return;

        propertyGrid.innerHTML = items.map(item => `
            <div class="property-card">
                <div class="property-img">
                    <img src="${item.img}" alt="${item.title}" style="width:100%; height:100%; object-fit:cover;">
                </div>
                <div class="property-details">
                    <h3>${item.title}</h3>
                    <div class="property-location"><i class="fa-solid fa-location-dot"></i> ${item.location}</div>
                    <div class="property-footer">
                        <span class="property-price">${item.price}</span>
                        <button class="property-action-btn"><i class="fa-solid fa-arrow-right"></i></button>
                    </div>
                </div>
            </div>
        `).join('');
    }

    propertyTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            propertyTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            renderProperties(tab.getAttribute('data-category'));
        });
    });

    renderProperties('apartment');
}