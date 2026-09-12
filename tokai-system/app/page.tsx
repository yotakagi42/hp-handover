// 東海システム コーポレートサイトのトップページ。
// セクション間は Wave で有機的に接続する（背景色の流れ: 濃紺→シアン→白→グレー→シアン→グレー→白→濃淡コラージュ→シアン）。
import { Wave } from "@/components/layout/wave";
import { HeroKv } from "@/components/layout/hero-kv";
import { IntroStatement } from "@/components/layout/intro-statement";
import { ConceptSection } from "@/components/layout/concept-section";
import { ReasonCards } from "@/components/layout/reason-cards";
import { AboutExplainer } from "@/components/layout/about-explainer";
import { FaqTabs } from "@/components/layout/faq-tabs";
import { InterviewCarousel } from "@/components/layout/interview-carousel";
import { StrengthSticky } from "@/components/layout/strength-sticky";
import { NewsSection } from "@/components/layout/news-section";
import { BottomMessage } from "@/components/layout/bottom-message";
import {
  GlobalHeader,
  FloatingContact,
  GlobalFooter,
} from "@/components/layout/site-chrome";
import { Preloader } from "@/components/layout/preloader";

export default function Home() {
  return (
    <div id="top" className="bg-white text-foreground overflow-x-clip">
      <Preloader />
      <GlobalHeader />
      <FloatingContact />
      <main>
        <HeroKv />
        <IntroStatement />
        <ConceptSection />
        <ReasonCards />
        <AboutExplainer />
        <div className="bg-[#45a6dc]">
          <Wave fill="#ececec" />
        </div>
        <FaqTabs />
        <Wave fill="#ececec" flip />
        <InterviewCarousel />
        <StrengthSticky />
        <NewsSection />
        <BottomMessage />
      </main>
      <GlobalFooter />
    </div>
  );
}
