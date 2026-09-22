// 宮路工業所(miyaji-kougyousho.jp)トレース × 東海システムのトップページ。
// ネイビー+レッドを基調に、写真と斜めカットでセクションをつなぐ。
import { HeroKv } from "@/components/neom/hero-kv";
import { IntroStatement } from "@/components/neom/intro-statement";
import { ConceptSection } from "@/components/neom/concept-section";
import { ReasonCards } from "@/components/neom/reason-cards";
import { AboutExplainer } from "@/components/neom/about-explainer";
import { StrengthSticky } from "@/components/neom/strength-sticky";
import { BottomMessage } from "@/components/neom/bottom-message";
import {
  NeomHeader,
  FloatingContact,
  NeomFooter,
} from "@/components/neom/site-chrome";
import { Preloader } from "@/components/neom/preloader";

export default function Home() {
  return (
    <div id="top" className="bg-white text-foreground overflow-x-clip">
      <Preloader />
      <NeomHeader />
      <FloatingContact />
      <main className="pt-16 md:pt-20">
        <HeroKv />
        <IntroStatement />
        <ConceptSection />
        <ReasonCards />
        <AboutExplainer />
        <StrengthSticky />
        <BottomMessage />
      </main>
      <NeomFooter />
    </div>
  );
}
