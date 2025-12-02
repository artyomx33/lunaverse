import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { IdentityHook } from "@/components/IdentityHook";
import { WhatIsThis } from "@/components/WhatIsThis";
import { DayBreakdown } from "@/components/DayBreakdown";
import { WhoThisIsFor } from "@/components/WhoThisIsFor";
import { WhatYouLearn } from "@/components/WhatYouLearn";
import { PricingTiers } from "@/components/PricingTiers";
import { BonusesSection } from "@/components/BonusesSection";
import { FAQSection } from "@/components/FAQSection";
import { FinalCTA } from "@/components/FinalCTA";

export default function Home() {
  return (
    <main>
      <Navigation />
      <div className="pt-16">
        <HeroSection />
        <IdentityHook />
        <WhatIsThis />
        <DayBreakdown />
        <WhoThisIsFor />
        <WhatYouLearn />
        <PricingTiers />
        <BonusesSection />
        <FAQSection />
        <FinalCTA />
      </div>
    </main>
  );
}
