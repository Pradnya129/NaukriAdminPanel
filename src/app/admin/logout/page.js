"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LogoutPage() {
  const router = useRouter();

  useEffect(() => {
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");

    router.replace("/login"); // better than push
  }, [router]);

  return null; // ✅ no UI rendered
}