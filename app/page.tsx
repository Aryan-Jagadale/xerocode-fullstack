import BoostSection from "./components/BoostSection";
import FeaturesSection from "./components/FeaturesSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar/Navbar";
import WorkFlow from "./components/WorkFlow";

import { UserProvider } from "@auth0/nextjs-auth0/client";

export default function Home() {
  return (
    <>
      <UserProvider>
        <main>
          <Navbar />
          <HeroSection />
          <BoostSection />
          <FeaturesSection />
          <WorkFlow />
          <Footer />
        </main>
      </UserProvider>
    </>
  );
}
