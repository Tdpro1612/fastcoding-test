# Fastcoding Frontend Test - Real Estate Landing Page

Dự án dựng giao diện trang chủ bất động sản từ file thiết kế Figma theo tiêu chuẩn code thuần (Vanilla HTML/CSS/JS), hỗ trợ Responsive trên cả PC và Smartphone (SP).

## 📂 Cấu trúc thư mục dự án

```text
fastcoding-test/
│
├── index.html              # Trang chủ (Home)
│
├── css/
│   ├── style.css           # File CSS chính
│
├── js/
│   ├── main.js             # Logic chính (slider, tab chuyển đổi, xử lý form...)
│   └── ....              
│
├── images/                 # Thư mục chứa hình ảnh icon, banner, avatar từ thiết kế
│   ├── background_colum.svg
│   ├── Ellipse 1890.svg
│   └── ...
│
└── README.md               # Tài liệu hướng dẫn cài đặt và chạy dự án
```
---

## 🚀 Công nghệ sử dụng
HTML5 / CSS3 (Vanilla Code - Không sử dụng framework như Tailwind hay Bootstrap).

CSS Flexbox & CSS Grid để dàn trang layout.

Responsive Design tương thích hoàn hảo trên màn hình PC và Smartphone.

---

## 2. Hướng dẫn cách thiết kế & xây dựng cơ bản (Workflow)

Để hoàn thành bài test một cách mượt mà, đúng yêu cầu và tránh bị rối, bạn hãy triển khai theo các bước chiến lược sau:

### Bước 1: Khai thác tài nguyên từ Figma
* Truy cập link Figma được cấp[cite: 1], xuất (`export`) toàn bộ hình ảnh, icon cần thiết về thư mục `images/`.
* Lấy mã màu chủ đạo (ví dụ màu cam đặc trưng `#FF4500` hoặc mã màu trên Figma) và font chữ chính để cài đặt chung.

### Bước 2: Dựng khung sườn HTML (Macro Layout)
* Mở file `index.html`, sử dụng thẻ `<main>` làm trung tâm và bọc lần lượt **12 khối giao diện** từ trên xuống dưới bằng các thẻ ngữ nghĩa (`<header>`, `<section>`, `<footer>`):
  1. Header & Hero Section
  2. Commercial Real Estate
  3. Dream Living Space
  4. Today Sells Properties
  5. Services provide for you
  6. Featured Property
  7. Unit no. 9A
  8. What our customers are saying
  9. We build more projects successful (Newsletter)
  10. From our blog
  11. Contact with us (Form liên hệ)
  12. Footer

### Bước 3: Viết CSS chi tiết cho từng khối (Micro Layout)
* **Dùng Flexbox:** Cho các thanh điều hướng (Navbar), canh chỉnh icon ngang hàng với chữ, hoặc căn giữa các nút bấm (`display: flex; align-items: center; justify-content: space-between;`).
* **Dùng CSS Grid:** Cho các khối có nhiều ô lặp lại (như khối 6 dịch vụ, khối 3 card bất động sản, khối blog) để tự động chia cột đều nhau tăm tắp mà không cần tính toán thủ công (`display: grid; grid-template-columns: repeat(3, 1fr);`).
* **Đường dẫn tương đối:** Lưu ý mọi đường dẫn ảnh hoặc file CSS đều phải dùng dạng `./images/...` hoặc `./css/...` đúng theo yêu cầu đề bài.

### Bước 4: Xử lý Responsive (PC & Smartphone)
* Viết thêm các đoạn `@media (max-width: 768px)` (cho thiết bị di động/SP):
  * Chuyển đổi các khối đang nằm ngang (3 cột, 2 cột) thành **1 cột dọc** (`grid-template-columns: 1fr;`).
  * Ẩn/hiện hoặc thu nhỏ menu header thành dạng nút bấm gọn gàng nếu cần thiết để giao diện trên điện thoại không bị tràn khung hoặc xuất hiện thanh cuộn ngang.

### Bước 5: Đưa lên GitHub và Deploy lấy link nộp bài
* Đẩy toàn bộ source code lên một GitHub Repository công khai.
* Kết nối repo đó với **GitHub Pages**để sinh ra link URL máy chủ thử nghiệm (Live Demo URL) sạch sẽ, kèm theo link data/source 