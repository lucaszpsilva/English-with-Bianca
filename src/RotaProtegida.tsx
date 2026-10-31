import { Navigate } from "react-router-dom";
import { useAuth } from "./components/AuthContext";
import { ReactNode } from "react";

interface RotaProtegidaProps {
  children: ReactNode;
}

export function RotaProtegida({ children }: RotaProtegidaProps) {
  const { isAuthenticated } = useAuth() as { isAuthenticated: boolean };

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
