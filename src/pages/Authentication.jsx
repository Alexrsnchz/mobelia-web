import AuthLayout from "@/components/layouts/AuthLayout.jsx";
import { Outlet } from "react-router";

export default function Authentication() {
  return (
    <AuthLayout>
      <Outlet />
    </AuthLayout>
  );
}
