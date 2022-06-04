import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export const Layout: React.FC<React.PropsWithChildren<unknown>> = ({
  children,
}) => (
  <>
    <Navbar />
    <main>{children}</main>
    <Footer />
  </>
);
