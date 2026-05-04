"use client"

import { useRouter } from "next/navigation";

const router = useRouter();

const handleLogout = () => {
  // 🔥 remove token (based on your storage)
  localStorage.removeItem("token");
  sessionStorage.removeItem("token");

  // optional: clear everything
  // localStorage.clear();

  // redirect
  router.push("/login");
};