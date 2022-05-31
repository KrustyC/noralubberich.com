import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export const Layout = ({ children }) => (
  <>
    <Navbar />
    <main>{children}</main>
    <Footer />
  </>
);
