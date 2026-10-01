document.addEventListener("DOMContentLoaded", () => {
  // Lấy tên file hiện tại từ đường dẫn (ví dụ: index.html, about.html,...)
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  
  // Lấy tất cả các thẻ a trong thanh điều hướng
  const navLinks = document.querySelectorAll("nav ul li a");

  navLinks.forEach(link => {
    const href = link.getAttribute("href");
    // Nếu href khớp với trang hiện tại thì thêm class active
    if (href === currentPath) {
      link.classList.add("active");
    }
  });
});