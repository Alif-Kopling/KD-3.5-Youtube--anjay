![Minecraft GIF](https://media.tenor.com/do1MMrPly-wAAAAC/minecraft-grass-block.gif)

# ⚡ Express.js + Prisma + MySQL API

![Prisma](https://img.shields.io/badge/Prisma-6.19-2D3748?style=flat&logo=prisma&logoColor=white)
![Express](https://img.shields.io/badge/Express-4.18-000000?style=flat&logo=express&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-8.0-4479A1?style=flat&logo=mysql&logoColor=white)
![Node](https://img.shields.io/badge/Node-26.x-5FA04E?style=flat&logo=node.js&logoColor=white)

## 🏗️ Project Structure

```
├── app.js                        # Entry point
├── prisma/
│   ├── schema.prisma             # Schema & model User
│   └── migrations/               # Database migrations
├── src/
│   ├── routes/userRoutes.js      # User routes
│   └── controllers/userController.js  # User controller + validasi
├── prisma.config.ts              # Prisma config
├── .env                          # Database URL
└── package.json
```

## 🚀 Quick Start

```bash
npm install
npx prisma migrate dev --name init
npm run dev
```

## 📡 API Endpoints

| Method | Endpoint           | Description        |
|--------|--------------------|--------------------|
| `GET`  | `/api/users`       | Ambil semua user   |
| `POST` | `/api/users`       | Tambah user baru   |

### GET `/api/users`

```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "Rudy",
      "email": "rudy@example.com",
      "createdAt": "2026-06-29T..."
    }
  ]
}
```

### POST `/api/users`

Body:
```json
{
  "name": "Rudy",
  "email": "rudy@example.com"
}
```

Response `201`:
```json
{
  "success": true,
  "data": {
    "id": 1,
    "name": "Rudy",
    "email": "rudy@example.com",
    "createdAt": "2026-06-29T..."
  }
}
```

### ✅ Validasi Error

Response `400` kalo name kosong atau email invalid:

```json
{
  "success": false,
  "errors": [
    { "msg": "Name wajib diisi", "path": "name" },
    { "msg": "Email harus valid", "path": "email" }
  ]
}
```

## 🧱 Prisma Model

```prisma
model User {
  id        Int      @id @default(autoincrement())
  name      String
  email     String   @unique
  createdAt DateTime @default(now())
}
```

## ⚙️ Tech Stack

| Tech            | Version  |
|-----------------|----------|
| Node.js         | 26.x     |
| Express         | 4.18     |
| Prisma          | 6.19     |
| MySQL           | 8.0      |
| express-validator | 7.0    |

---

> *Built with ⛏️ by Rudy*
