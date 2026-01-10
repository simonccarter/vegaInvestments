import { useLocalStorage } from "@/hooks/useLocalStorage";
import { Navigate, Outlet } from "react-router-dom";

export function ProtectedRoutes() {
  const { getItem } = useLocalStorage();
  const isLoggedIn = getItem('isLoggedIn') === 'true'

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}