import { FloatingControls } from "@/features/navigation/components/FloatingControls";
import { BackgroundDepth } from "@/features/canvas/components/BackgroundDepth";
import { HeroSection } from "@/features/home/components/HeroSection";
import { WorkSection } from "@/features/work/components/WorkSection";
import { ProjectOrbit } from "@/features/projects/components/ProjectOrbit";
import { SkillsSection } from "@/features/skills/components/SkillsSection";

export default function Home() {
  return (
    <main className="relative h-screen overflow-hidden bg-[#F7F2EA] text-[#171717]">
      <BackgroundDepth />
      <FloatingControls />

      {/* Continuous horizontal canvas */}
      <section className="horizontal-scroll scroll-smooth relative z-10 flex h-full w-screen overflow-x-auto overflow-y-hidden">
        <div className="flex h-full w-[400vw] shrink-0 items-center">
          {/* Slide 01 / About */}
          <div
            id="about"
            className="flex h-full w-screen shrink-0 items-center px-20"
          >
            <HeroSection />
          </div>

          {/* Slide 02 / Work */}
          <div
            id="work"
            className="flex h-full w-screen shrink-0 items-center px-20"
          >
            <WorkSection />
          </div>

          {/* Slide 03 / Projects */}
          <div
            id="projects"
            className="flex h-full w-screen shrink-0 items-center px-20"
          >
            <ProjectOrbit />
          </div>
        </div>
      </section>
    </main>
  );
}