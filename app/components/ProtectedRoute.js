'use client'

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../components/contexts/AuthContext";

export default function ProtectedRoute({ children }) {
  const { isLoggedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/");
    }
  }, [isLoggedIn, router]);

  return isLoggedIn ? children : null;
}