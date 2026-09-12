import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { NewsTicker } from "@/components/sections/news-ticker";
import { About } from "@/components/sections/about";
import { MarqueeBand } from "@/components/sections/marquee-band";
import { Service } from "@/components/sections/service";
import { Works } from "@/components/sections/works";
import { Member } from "@/components/sections/member";
import { Company } from "@/components/sections/company";
import { Recruit } from "@/components/sections/recruit";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-col">
        <Hero />
        <NewsTicker />
        <About />
        <MarqueeBand />
        <Service />
        <Works />
        <Member />
        <Company />
        <Recruit />
      </main>
      <SiteFooter />
    </>
  );
}
