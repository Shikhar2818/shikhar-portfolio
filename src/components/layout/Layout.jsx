import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import AnimatedBackground from "../ui/AnimatedBackground";
import PageTransition from "../ui/PageTransition";

export default function Layout() {
  const location = useLocation();

  return (
    <div className="relative flex min-h-screen flex-col">
      <AnimatedBackground />
      <Navbar />

      <main className="flex-1 pt-24 pb-16">
        <PageTransition key={location.pathname}>
          <Outlet />
        </PageTransition>
      </main>

      <Footer />
    </div>
  );
}
