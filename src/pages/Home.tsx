import Navigation from "../sections/Navigation";
import HeroForm from "../sections/HeroForm";
import AntiGalere from "../sections/AntiGalere";
import Timeline from "../sections/Timeline";
import Formateur from "../sections/Formateur";
import FAQ from "../sections/FAQ";
import FinalCTA from "../sections/FinalCTA";
import Footer from "../sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <HeroForm />
        <AntiGalere />
        <Timeline />
        <Formateur />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
