import "../styles/index.css";
import "../styles/login.css";
import "../styles/home.css";
import Header from "@/components/Header";

export const metadata = {
  title: "Adel App",
  description: "Generated by Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="pageContainer">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
