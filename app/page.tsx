import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { IdentityHook } from "@/components/IdentityHook";
import { WhatIsThis } from "@/components/WhatIsThis";
import { DayBreakdown } from "@/components/DayBreakdown";
import { WhoThisIsFor } from "@/components/WhoThisIsFor";
import { SocialProofSection } from "@/components/SocialProofSection";
import { WhatYouLearn } from "@/components/WhatYouLearn";
import { PricingTiers } from "@/components/PricingTiers";
import { SelectionCriteria } from "@/components/SelectionCriteria";
import { BonusesSection } from "@/components/BonusesSection";
import { FAQSection } from "@/components/FAQSection";
import { WaitlistCTA } from "@/components/WaitlistCTA";
import { FinalCTA } from "@/components/FinalCTA";

export default function Home() {
  return (
    <main>
      <Navigation />
      <div className="pt-16">
        <section id="hero">
          <HeroSection />
        </section>
        <section id="identity">
          <IdentityHook />
        </section>
        <section id="what-is-this">
          <WhatIsThis />
        </section>
        <section id="3-days">
          <DayBreakdown />
        </section>
        <section id="who">
          <WhoThisIsFor />
        </section>
        <section id="proof">
          <SocialProofSection />
        </section>
        <section id="learn">
          <WhatYouLearn />
        </section>
        <section id="pricing">
          <PricingTiers />
        </section>
        <section id="selection">
          <SelectionCriteria />
        </section>
        <section id="bonuses">
          <BonusesSection />
        </section>
        <section id="faq">
          <FAQSection />
        </section>
        <section id="waitlist">
          <WaitlistCTA />
        </section>
        <section id="apply">
          <FinalCTA />
        </section>
      </div>
    </main>
  );
}
