// src/api.js
const BASE_URL =
  import.meta.env.MODE === "development"
    ? "http://localhost:5555"
    : "https://book-store-backend-myup.onrender.com";

export default BASE_URL;
