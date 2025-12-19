# 📦 Orders 

A simple full-stack Order Management System built using **React.js** for the frontend, **Node.js & Express.js** for the backend, and **MongoDB Atlas** for the database.  
The application supports responsive UI for **Desktop, Tablet, and Mobile**, along with order planning, drag-and-drop task management, and real-time data persistence.

---

## 🚀 Features

### Frontend
- Responsive UI (Desktop / Tablet / Mobile)
- Separate mobile and desktop layouts
- Order planning with sections:
  - Sourcing
  - Order Creation
  - Trims & Fabrics
- Drag & drop to reorder tasks
- Date picker for start and end dates
- Remove date fields using close (X) icon
- Success and failure popups for order creation
- Built using Tailwind CSS and Bootstrap 5

### Backend
- RESTful API using Node.js and Express.js
- API to create and store orders
- Centralized error handling
- CORS enabled for frontend-backend communication

### Database
- MongoDB Atlas (Cloud database)
- Orders stored as structured documents
- Mongoose used as ODM for schema validation

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Tailwind CSS
- Bootstrap 5
- Axios
- @hello-pangea/dnd
- react-datepicker

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- CORS

---

## ⚙️ Prerequisites

Make sure the following are installed:

- Node.js (v18+ recommended)
- npm
- Git
- MongoDB Atlas account

---

## 🔧 Setup Instructions

### 1️⃣ Clone the Repository

git clone https://github.com/JadhavAbhijith/Orders.git

cd Orders


---

## 🔹 Backend Setup

### 2️⃣ Navigate to Backend Folder

cd server


### 3️⃣ Install Backend Dependencies

npm install



### 4️⃣ Create `.env` File in `server/`

Create a file named `.env` inside the `server` folder and add:

PORT=5000

MONGO_URI=your_mongodb_atlas_connection_string



( `.env` file is ignored in GitHub for security reasons.)

---

### 5️⃣ Start Backend Server

npm run build


Backend runs on:

http://localhost:5000


---

## 🔹 Frontend Setup

### 6️⃣ Open New Terminal and Navigate to Client Folder

cd client


### 7️⃣ Install Frontend Dependencies

npm install


### 8️⃣ Start Frontend Application

npm start


## 🔁 API Endpoint

### Create Order

POST /api/orders


- Accepts full order plan data
- Saves order in MongoDB
- Returns success or failure response

---

## ✅ Git & Environment Handling

- `node_modules/` ignored for both client and server
- `.env` files ignored
- Clean monorepo structure
- Uses `main` branch as default


---

## 👨‍💻 Author

**Abhijith Jadhav**  
GitHub: https://github.com/JadhavAbhijith
