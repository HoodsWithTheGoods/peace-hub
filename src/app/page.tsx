import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import PeaceFriendsSection from '@/components/PeaceFriendsSection';
import PeaceHUBSection from '@/components/PeaceHUBSection';
import LaunchSection from '@/components/LaunchSection';
import LivingLabsSection from '@/components/LivingLabsSection';
import IntergenerationalDialogueSection from '@/components/IntergenerationalDialogueSection';
import WhatWeLearnedSection from '@/components/WhatWeLearnedSection';
import ActionStreamsSection from '@/components/ActionStreamsSection';
import PeacePlatformSection from '@/components/PeacePlatformSection';
import OngoingProjectsSection from '@/components/OngoingProjectsSection';
import CallToActionSection from '@/components/CallToActionSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background-primary relative pt-20">
      <Navigation />
      <HeroSection />
      <PeaceFriendsSection />
      <PeaceHUBSection />
      <LaunchSection />
      <LivingLabsSection />
      <IntergenerationalDialogueSection />
      <WhatWeLearnedSection />
      <ActionStreamsSection />
      <PeacePlatformSection />
      <OngoingProjectsSection />
      <CallToActionSection />
      <Footer />
    </div>
  );
}
