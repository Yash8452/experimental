import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ProjectSection from "@/components/ProjectSection";
import SkillSection from "@/components/SkillSection";
import { TracingBeam } from "@/components/ui/tracing-beam";

export default function Home() {
  return (<>

    <TracingBeam className="" >
      <main className="h-screen antialiased">
        <HeroSection />

        <AboutSection />

        <ProjectSection />

        <SkillSection />
        <ContactSection />

        <Footer />

      </main >
    </TracingBeam>
  </>
  );
}
