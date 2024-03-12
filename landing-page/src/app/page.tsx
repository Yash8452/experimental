import { AboutSection } from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";
import { Spotlight } from "@/components/ui/Spotlight";
import Image from "next/image";

export default function Home() {
  return (<>

    <main className="flex min-h-screen flex-col justify-center items-center">
      <HeroSection/>
      <AboutSection/>
    </main>
  </>
  );
}
