# 💬 Live Chat App

A full-stack real-time chat application built with **React (Vite)** and **Tailwind CSS** on the frontend, and **Express.js**, **Prisma ORM**, and **MongoDB** on the backend.  
Supports secure authentication, real-time private messaging, and scalable architecture ready for Socket.IO integration.

---

## 🌐 Live Demo

🚧 **Coming Soon** – Deployment via Vercel & Render planned.

---

## 📸 Preview

> _(Tambahkan screenshot UI jika sudah tersedia)_

---

## 🧰 Tech Stack

### Frontend
- ⚛️ React (Vite)
- 💨 Tailwind CSS
- 🔐 JWT Auth via Axios
- 📦 Zustand (opsional untuk state management)

### Backend
- 🟢 Express.js
- 🧬 Prisma ORM
- 🍃 MongoDB (lokal atau Atlas)
- 🔐 JSON Web Token (JWT)
- 🧪 express-validator
- 🔌 Socket.IO *(coming soon)*

---

## 🗂️ Project Structure
```
live-chat/
├── frontend/ # React frontend
│ └── src/
│ ├── pages/
│ ├── components/
│ ├── hooks/
│ └── ...
├── backend/ # Express backend
│ ├── src/
│ │ ├── controllers/
│ │ ├── routes/
│ │ ├── utils/
│ │ └── validators/
│ ├── prisma/
│ │ └── schema.prisma
│ └── server.js
├── .env
└── README.md
```
---

## ⚙️ Setup & Installation

### 1. Clone Repository

```bash
git clone https://github.com/ikhsan-kun/live-chat.git
cd live-chat
2. Backend Setup
📦 Install Dependencies
cd backend
npm install
⚙️ Create .env
Buat file .env:
DATABASE_URL="mongodb://localhost:27017/livechat"
JWT_SECRET="your_jwt_secret"
Gunakan MongoDB Atlas jika ingin pakai cloud database.

🔧 Prisma Setup (MongoDB)
npx prisma generate
Tidak perlu prisma db push karena MongoDB tidak pakai migrasi.

▶️ Run Backend
npm run devback
Backend berjalan di: http://localhost:3000

3. Frontend Setup
cd ../frontend
npm install
npm run dev
Frontend berjalan di: http://localhost:5173

✅ Sudah Selesai
 User registration & login

 JWT authentication

 Password hashing (bcrypt)

 Prisma + MongoDB setup

🔜 Dalam Perencanaan
 Real-time messaging (Socket.IO)

 Online/offline status

 Upload image support

 Group chat

 Admin panel

📦 Deployment Plan
Platform	Layanan	Status
Frontend	Vercel	🔜 Soon
Backend	Render	🔜 Soon
Database	MongoDB Atlas	✅ Ready

🤝 Contributing
Pull requests are welcome! Untuk perubahan besar, silakan buka issue terlebih dahulu.

🪪 License
MIT © Ikhsan Kun

🙋‍♂️ Author
Made with ❤️ by Mohammad Maulana Ikhsan
📧 xsanofficial@gmail.com
🔗 GitHub

---

