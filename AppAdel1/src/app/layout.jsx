import "../styles/index.css";
import "../styles/login.css";
import "../styles/home.css";
import ClientLayout from "@/components/ClientLayout";

export const metadata = {
  title: "Adel App",
  description: "Generated by Next.js",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body>
        <div className="pageContainer">
          <ClientLayout>{children}</ClientLayout>
        </div>
      </body>
    </html>
  );
}
