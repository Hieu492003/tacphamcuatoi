document.addEventListener("DOMContentLoaded", () => {
    // 1. Hiển thị thông báo chào mừng trong Console
    console.log("Chào mừng bạn đến với góc nhỏ của Trung Hiếu!");

    // 2. Làm nổi bật menu (Navigation) của trang hiện tại đang xem
    const currentLocation = window.location.pathname;
    const navLinks = document.querySelectorAll("nav ul li a");
    
    navLinks.forEach(link => {
        // Lấy tên file từ href (ví dụ: "index.html", "about.html")
        const linkPath = new URL(link.href).pathname;
        
        if (currentLocation === linkPath || (currentLocation.endsWith('/') && linkPath.endsWith('index.html'))) {
            link.classList.add("active");
        }
    });

    // 3. Hiệu ứng Fade-in nhẹ nhàng khi tải trang
    const mainContent = document.querySelector("main");
    if (mainContent) {
        mainContent.style.opacity = "0";
        mainContent.style.transform = "translateY(10px)";
        mainContent.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";
        
        // Kích hoạt hiệu ứng sau một khoảng trễ ngắn
        setTimeout(() => {
            mainContent.style.opacity = "1";
            mainContent.style.transform = "translateY(0)";
        }, 100);
    }
    document.addEventListener("DOMContentLoaded", () => {
    // 1. Hiển thị thông báo trong Console
    console.log("Chào mừng bạn đến với góc nhỏ của Trung Hiếu!");

    // 2. Làm nổi bật menu (Navigation) của trang hiện tại
    const currentLocation = window.location.pathname;
    const navLinks = document.querySelectorAll("nav ul li a");
    
    navLinks.forEach(link => {
        const linkPath = new URL(link.href).pathname;
        if (currentLocation === linkPath || (currentLocation.endsWith('/') && linkPath.endsWith('index.html'))) {
            link.classList.add("active");
        }
    });

    // 3. Hiệu ứng Fade-in nhẹ nhàng khi tải trang
    const mainContent = document.querySelector("main");
    if (mainContent) {
        mainContent.style.opacity = "0";
        mainContent.style.transform = "translateY(15px)";
        mainContent.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
        
        setTimeout(() => {
            mainContent.style.opacity = "1";
            mainContent.style.transform = "translateY(0)";
        }, 50);
    }
});
});