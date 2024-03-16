import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ProjectSection from "@/components/ProjectSection";
import SkillSection from "@/components/SkillSection";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { twMerge } from "tailwind-merge";

export default function Home() {
  return (
    <>
      <TracingBeam className="bg-black px-6">
      <div className="max-w-full antialiased pt-4 relative">
          <HeroSection />
          <AboutSection />
          <ProjectSection />
          <SkillSection />
          <ContactSection />
          <Footer />
        </div>
      </TracingBeam>

    </>

  );
}
