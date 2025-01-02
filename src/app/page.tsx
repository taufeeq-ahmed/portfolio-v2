import About from "@/components/about";
import Experience from "@/components/experience";
import Hero from "@/components/hero";
import MyStack from "@/components/my-stack";
import NavigationDock from "@/components/navigation-dock";

export default function Home() {
  return (
    <main className="h-screen">
      <Hero />
      <About />
      <Experience />
      {/* <MyStack /> */}
      <NavigationDock />
    </main>
  );
}
