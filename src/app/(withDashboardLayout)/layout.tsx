"use client";
import { useEffect } from "react";
import DashboardDrawer from "@/components/Dashboard/DashboardDrawer/DashboardDrawer";
import { useRouter } from "next/navigation";
import { isLogedIn } from "@/services/auth.services";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  useEffect(() => {
    if (!isLogedIn()) {
      router.push("/login");
    }
  }, [router]);

  // Optionally, add a loading state or a fallback UI
  /*  if (!isLogedIn()) {
    return <div>Loading...</div>;
  } */

  return <DashboardDrawer>{children}</DashboardDrawer>;
};

export default DashboardLayout;
