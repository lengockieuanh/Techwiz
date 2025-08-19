# 🚀 Techwiz Project

Fullstack Web Application using **Laravel (Backend)** and **React (Frontend)**.

---

## 📦 Development Quickstart

### 🔹 1. Clone repository
```bash
git clone https://github.com/lengockieuanh/Techwiz.git
cd Techwiz
```
# Tạo nhánh và chuyển sang nhánh mới
```bash
git checkout -b <ten-nhanh>
```

# Kiểm tra nhánh hiện tại
git branch

cd backend

# Cài đặt dependencies PHP
composer install

# Tạo file .env từ file mẫu
cp .env.example .env   # Windows: copy .env.example .env

# Sinh APP_KEY cho Laravel
php artisan key:generate

# Cấu hình Database trong file .env

# Chạy migrate database
php artisan migrate

# Start server (http://127.0.0.1:8000)
php artisan serve

cd frontend

# Cài đặt dependencies NodeJS
npm install

# Tạo file .env và thêm API base URL
# .env
REACT_APP_API_BASE_URL=http://127.0.0.1:8000

# Start React dev server (http://localhost:3000)
npm start
