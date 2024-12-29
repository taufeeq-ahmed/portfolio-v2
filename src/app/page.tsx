import About from "@/components/about";
import Hero from "@/components/hero";
import NavigationDock from "@/components/navigation-dock";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export default function Home() {

  return (
    <main>
      <div className="absolute top-4 right-4">
        <ThemeToggle className="w-12 h-12" />
      </div>
      <Hero />
      <About />
      <NavigationDock />
    </main>
  );

}
