document.addEventListener("DOMContentLoaded", () => {
  // --- 1. TỰ ĐỘNG ACTIVE MENU ---
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll("nav ul li a");
  
  navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPath) {
      link.classList.add("active");
    }
  });

  // --- 2. CHẾ ĐỘ TỐI (DARK MODE) ---
  const themeToggleBtn = document.getElementById("theme-toggle");
  const currentTheme = localStorage.getItem("theme");

  // Kiểm tra trạng thái đã lưu trước đó
  if (currentTheme === "dark") {
    document.body.classList.add("dark-mode");
    if (themeToggleBtn) themeToggleBtn.textContent = "☀️ Light Mode";
  }

  // Sự kiện khi bấm nút chuyển đổi
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      let theme = "light";
      
      if (document.body.classList.contains("dark-mode")) {
        theme = "dark";
        themeToggleBtn.textContent = "☀️ Light Mode";
      } else {
        themeToggleBtn.textContent = "🌙 Dark Mode";
      }
      
      // Lưu lựa chọn vào bộ nhớ trình duyệt
      localStorage.setItem("theme", theme);
    });
  }

  // --- 3. HIỆU ỨNG GÕ CHỮ (TYPING EFFECT) CHO TRANG CHỦ ---
  const typingElement = document.getElementById("typing-text");
  if (typingElement) {
    const textToType = typingElement.getAttribute("data-text");
    typingElement.textContent = ""; // Xóa text ban đầu để tạo hiệu ứng
    let i = 0;
    
    function typeWriter() {
      if (i < textToType.length) {
        typingElement.textContent += textToType.charAt(i);
        i++;
        setTimeout(typeWriter, 40); // Tốc độ gõ chữ (40ms)
      }
    }
    
    // Đợi 0.5s sau khi tải trang mới bắt đầu gõ
    setTimeout(typeWriter, 500);
  }
});