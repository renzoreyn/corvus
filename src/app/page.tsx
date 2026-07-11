import { Cta } from "@/components/site/cta";
import { Features } from "@/components/site/features";
import { Footer } from "@/components/site/footer";
import { Hero } from "@/components/site/hero";
import { Navbar } from "@/components/site/navbar";
import { Showcase } from "@/components/site/showcase";
import { Stats } from "@/components/site/stats";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Stats />
        <Features />
        <Showcase />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
