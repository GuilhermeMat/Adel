"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import { UserProvider } from "@/context/UserContext";
import { LoadingProvider } from "@/context/LoadingContext";

const ClientLayout = ({ children }) => {
  const pathName = usePathname();
  const showHeader = pathName !== "/" && pathName !== "/register";

  return (
    <>
      <UserProvider>
        <LoadingProvider>
          {showHeader && <Header />}
          <main>{children}</main>
        </LoadingProvider>
      </UserProvider>
    </>
  );
};

export default ClientLayout;
