import Navbar from "./navbar";
import Footer from "./footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen w-screen bg-gray-50 flex md:flex-col">
      <Navbar />
      <hr />
      <main className="flex-1 h-40 bg-gray-50">{children}</main>
      <Footer />
    </div>
  );
}
