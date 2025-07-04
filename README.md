## 📘 RESTful API: Todo App with Express, PostgreSQL & Sequelize

Project ini adalah RESTful API menggunakan **Node.js**, **Express**, dan **PostgreSQL**, dengan **Sequelize** sebagai ORM (Object-Relational Mapping) dan sudah terhubung ke halaman website login & register menggunakan HTML vanilla.

---
## Demo 
https://shorturl.at/USppx
## 📄 Dokumentasi Postman
https://documenter.getpostman.com/view/45884667/2sB34Zsjcj

---

### 🚀 Fitur

* ✅ Register & Login user
* 🔒 Autentikasi dengan JWT
* 📋 CRUD Todo
* 🗂️ CR Kategori, Prioritas, dan Log Status
* ✅ Validasi input menggunakan Joi
* 🌐 Integrasi frontend (login & register HTML) ke backend

---

### 🛠️ Teknologi yang Digunakan

* Node.js + Express
* PostgreSQL (`pg`)
* Sequelize (ORM)
* bcryptjs
* JWT (`jsonwebtoken`)
* Joi (validation)
* HTML + CSS (Frontend login & register)

---

### 🧩 Implementasi Sequelize

Model-model berikut diimplementasikan untuk mengelola data:
- `User` → autentikasi user
- `Todo` → daftar tugas
- `Category` → kategori tugas
- `Priority` → tingkat prioritas
- `StatusLog` → histori status todo

Setiap model disimpan dalam folder `/models` dan digunakan dalam controller dan service untuk menjalankan query berbasis ORM (tanpa raw SQL).

---

### 🌐 Integrasi Frontend

Frontend menggunakan file HTML biasa yang di-load dari folder `views`, tanpa template engine. Form login & register mengirimkan request ke backend menggunakan metode POST:

- Login → `POST /login`  
- Register → `POST /register`  

Respon JSON dari backend di-handle untuk redirect ke halaman utama atau menampilkan pesan error.

---

### 🗃️ ERD
<img width="295" alt="image" src="https://github.com/user-attachments/assets/a84b54da-94bd-46d2-8927-c202315cc6d2" />

---

### 📦 Instalasi

```bash
git clone https://github.com/ilhamhafizha/restfull-express-postgres.git
cd restfull-express-postgres
npm install
```

### ▶️ Menjalankan Server

```bash
npm run dev
```

Server akan berjalan di: http://localhost:3000

---
