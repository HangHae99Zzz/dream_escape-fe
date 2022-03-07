import React from "react";
import axios from "axios";

// api 요청 보내는 서버(나중에 .env.local로 옮기기)
export const instance = axios.create({
  baseURL: "https://banwonjae.shop:8080/",
});

// socket.io
// URL: "https://www.roomescape57.shop:3000/";
