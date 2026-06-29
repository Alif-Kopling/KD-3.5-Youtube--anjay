GET http://localhost:3000/api/users
Di Postman: pilih method GET, masukin URL, klik Send.
Response sukses:
{
  "success": true,
  "data": []
}
2. POST create user
POST http://localhost:3000/api/users
Di Postman: pilih method POST, masukin URL, tab Body → raw → pilih JSON, tulis:
{
  "name": "Rudy",
  "email": "rudy@example.com"
}
Response sukses (201):
{
  "success": true,
  "data": {
    "id": 1,
    "name": "Rudy",
    "email": "rudy@example.com",
    "createdAt": "2026-06-29T..."
  }
}
Test validasi — kirim body kosong atau email gak valid, bakal dapet:
{
  "success": false,
  "errors": [
    { "msg": "Name wajib diisi", "path": "name", ... },
    { "msg": "Email harus valid", "path": "email", ... }
  ]
}