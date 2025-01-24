// Sample blog data
const blogs = [
  { title: "The Rise of AI", category: "tech", content: "AI is transforming the world of technology." },
  { title: "Healthy Living Tips", category: "lifestyle", content: "Adopt a balanced diet and exercise regularly." },
  { title: "Top 10 Travel Destinations", category: "travel", content: "Explore breathtaking locations across the globe." },
  { title: "Delicious Pasta Recipes", category: "food", content: "Learn how to make mouthwatering pasta dishes." },
  { title: "The Future of Quantum Computing", category: "tech", content: "Quantum computing will revolutionize problem-solving." },
];

// Function to render blogs in the main blogs section
function renderBlogs() {
  const blogPostsContainer = document.getElementById("blog-posts");
  blogPostsContainer.innerHTML = ""; // Clear existing content

  blogs.forEach((blog) => {
    const blogPost = document.createElement("div");
    blogPost.className = "blog-post";
    blogPost.innerHTML = `
      <h3>${blog.title}</h3>
      <small>Category: ${capitalize(blog.category)}</small>
      <p>${blog.content}</p>
    `;
    blogPostsContainer.appendChild(blogPost);
  });
}

// Function to render blogs under their respective categories
function renderCategoryBlogs() {
  const categories = ["tech", "lifestyle", "travel", "food"];
  categories.forEach((category) => {
    const categoryContent = document.querySelector(`#${category} .category-content`);
    categoryContent.innerHTML = ""; // Clear existing content

    blogs
      .filter((blog) => blog.category === category)
      .forEach((blog) => {
        const blogPost = document.createElement("div");
        blogPost.className = "blog-post";
        blogPost.innerHTML = `
          <h4>${blog.title}</h4>
          <p>${blog.content}</p>
        `;
        categoryContent.appendChild(blogPost);
      });
  });
}

// Utility function to capitalize first letter of a word
function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

// Initialize the blog sections
document.addEventListener("DOMContentLoaded", () => {
  renderBlogs();
  renderCategoryBlogs();
});
