# 🚀 Techwiz Project

Fullstack Web Application using **Laravel (Backend)** and **React (Frontend)**.

---

## 📦 Development Quickstart

### 1. Clone repository
```bash
git clone https://github.com/lengockieuanh/Techwiz.git
cd Techwiz
```
# Tạo nhánh và chuyển sang nhánh mới
```bash
git checkout -b <ten-nhanh>
```

# Kiểm tra nhánh hiện tại
```bash
git branch
```

### 2. Backend Setup (Laravel)
```bash
cd backend
```

# Cài đặt dependencies PHP
```bash
composer install
```

# Tạo file .env từ file mẫu
```bash
cp .env.example .env   # Windows: copy .env.example .env
```

```bash
# Sinh APP_KEY cho Laravel
php artisan key:generate
```

# Cấu hình Database trong file .env

# Chạy migrate database
```bash
php artisan migrate
```

# Start server (http://127.0.0.1:8000)
```bash
php artisan serve
```

### 3. Frontend Setup (React)
```bash
cd frontend
```

# Cài đặt dependencies NodeJS
```bash
npm install
```

# Tạo file .env và thêm API base URL
# .env
```bash
REACT_APP_API_BASE_URL=http://127.0.0.1:8000
```

# Start React dev server (http://localhost:3000)
```bash
npm start
```
