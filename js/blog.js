const blogData = [
  {
    category: "Rentals",
    title: "How to rent a home very easily?",
    description: "How to rent a home very easily in this pandemic situation...",
    date: "3 years ago",
    author: "Mike Hesson",
    image: "./images/blog_1.jpg"
  },
  {
    category: "Market",
    title: "Why commercial real estate is booming",
    description: "An in-depth look at recent trends influencing commercial properties...",
    date: "2 years ago",
    author: "Sarah Jenkins",
    image: "./images/blog_2.jpg"
  },
  {
    category: "Design",
    title: "The future of smart and sustainable homes",
    description: "How eco-friendly architecture is shaping modern living spaces...",
    date: "1 year ago",
    author: "David Miller",
    image: "./images/blog_3.jpg"
  }
];

export function initBlog() {
  const container = document.getElementById('blog-container');
  if (!container) return;

  container.innerHTML = blogData.map(blog => `
    <div class="blog-card">
        <div class="blog-img">
            <img src="${blog.image}" alt="${blog.title}" style="width:100%; height:100%; object-fit:cover;">
        </div>
        <div class="blog-content">
            <div class="blog-meta">
                <span>${blog.category}</span>
            </div>
            <h3>${blog.title}</h3>
            <p style="font-size: 13px; color: var(--text-light); margin-bottom: 20px;">${blog.description}</p>
            <div class="blog-footer">
                <span><i class="fa-regular fa-clock"></i> ${blog.date}</span>
                <span><i class="fa-regular fa-user"></i> By ${blog.author}</span>
            </div>
        </div>
    </div>
  `).join('');
}