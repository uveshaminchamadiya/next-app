import Navbar from "../navbar/page";
import Footer from "../Footer/page";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}