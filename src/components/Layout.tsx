import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ParticleField from "./ParticleField";

const Layout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen flex flex-col">
    <ParticleField />
    <Navbar />
    <main className="flex-1">{children}</main>
    <Footer />
  </div>
);

export default Layout;
