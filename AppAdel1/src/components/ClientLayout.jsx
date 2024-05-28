"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import { LoadingProvider } from "@/context/LoadingContext";
import { UserProvider } from "@/context/UserContext";

const ClientLayout = ({ children }) => {
  const pathName = usePathname();
  const showHeader = pathName !== "/" && pathName !== "/register";

  return (
    <>
      <UserProvider>
        {showHeader && (
          <LoadingProvider>
            <Header />
          </LoadingProvider>
        )}
        <main>{children}</main>
      </UserProvider>
    </>
  );
};

export default ClientLayout;
