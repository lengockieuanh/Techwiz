# Techwiz

## Development Quickstart

### Clone repository
git clone https://github.com/lengockieuanh/Techwiz.git #clone repo
cd Techwiz
git checkout -b <ten-nhanh> #tạo nhánh và chuyển sang nhánh đó
git branch #kiểm tra xem đang ở nhánh nào

### Backend (Laravel)
cd backend
composer install
cp .env.example .env   # Windows: copy .env.example .env
php artisan key:generate
# chỉnh DB trong .env
php artisan migrate
php artisan serve      # http://127.0.0.1:8000

### Frontend (React)
cd frontend
npm install
# tạo .env
# REACT_APP_API_BASE_URL=http://127.0.0.1:8000
npm start              # http://localhost:3000
