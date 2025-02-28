# Galeia - Photo Curation App

Galeia is a **photo curation application** inspired by Google Photos, allowing users to **search, save, and organize images** efficiently. Users can store images in collections, add tags, search by tags, and track search history.

## 🚀 Features
- 🔍 **Search Photos** using APIs like Unsplash
- 📁 **Save Images** to user-defined collections
- 🏷️ **Tagging System** for better organization
- 🔄 **Search History Tracking**
- 🗑️ **Delete & Manage Photos**

## 🛠️ Tech Stack
- **Backend:** Node.js, Express.js
- **Database:** SQLite3 (via Sequelize ORM)
- **Testing:** Jest, Supertest
- **API Calls:** Axios
- **Environment Variables:** dotenv

---

## 🛠️ Setup & Installation
### 1️⃣ Clone the Repository
```bash
git clone https://github.com/yourusername/galeia.git
cd galeia
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Setup Environment Variables
Create a `.env` file and add the required variables:
```
PORT=5000
JWT_SECRET=your_secret_key
```

### 4️⃣ Run Database Migrations & Seeders
```bash
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
```

### 5️⃣ Start the Server
```bash
npm start
```
Server runs on `http://localhost:5000`

---

## 🧪 Running Tests
To ensure everything works correctly, run:
```bash
npm test
```
- **Unit Tests**: Test individual functions and controllers.
- **Integration Tests**: Validate API endpoints with Jest & Supertest.

---

## 📌 API Endpoints
| Method | Endpoint                 | Description |
|--------|--------------------------|-------------|
| GET    | `/photos/search?query=`   | Search for images |
| POST   | `/photos/save`            | Save a photo to a collection |
| GET    | `/photos/tags/:tagName`   | Get photos by tag |
| DELETE | `/photos/:id`             | Delete a saved photo |

---

## 🔗 Database Schema & Associations
**Tables:**
- **Users** *(id, name, email, password, createdAt, updatedAt)*
- **Photos** *(id, url, description, userId, createdAt, updatedAt)*
- **Tags** *(id, name, createdAt, updatedAt)*
- **PhotoTags** *(id, photoId, tagId, createdAt, updatedAt)*
- **SearchHistory** *(id, query, userId, createdAt, updatedAt)*

### 🔗 Model Relationships:
- **Users** ↔ **Photos** (One-to-Many)
- **Photos** ↔ **Tags** (Many-to-Many via `PhotoTags`)
- **Users** ↔ **SearchHistory** (One-to-Many)

---

## 📜 License
This project is licensed under the **MIT License**.


