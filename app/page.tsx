import Experience from "@/components/experience";
import Footer from "@/components/footer";
import Grid from "@/components/grid";
import Hero from "@/components/hero/hero";
import Projects from "@/components/recentProjects";
import Clients from "@/components/testimonials";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { ModeToggle } from "@/components/ui/ToggleMode";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative dark:bg-gray-950 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip ">
      <div className="max-w-7xl w-screen">
        <div className="absolute right-4 top-4 z-1000">
        <ModeToggle />
        </div>
        <FloatingNav 
        navItems={navItems}
        /> 
        <Hero />
        <div className="px-7">
        <Grid />
        <Projects />
        <Clients />
        <Experience />
        <Footer />
        </div>
      </div>
    </main>
  );
}
