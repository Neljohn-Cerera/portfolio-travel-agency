import Navbar from "./navbar";
import Footer from "./footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full w-full bg-gray-50 flex flex-col">
      <Navbar />
      <hr />
      <main className="bg-gray-50">{children}</main>
      <Footer />
    </div>
  );
}
