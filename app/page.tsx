import Hero from "@/components/Hero";
import CampaignBar from "@/components/CampaignBar";
import Mission from "@/components/Mission";
import InstagramGallery from "@/components/InstagramGallery";
import ImpactStats from "@/components/ImpactStats";
import ProgramsPreview from "@/components/ProgramsPreview";
import GiftImpact from "@/components/GiftImpact";
import CampaignSection from "@/components/CampaignSection";
import GivingCircles from "@/components/GivingCircles";
import LeadershipPreview from "@/components/LeadershipPreview";
import JoinSection from "@/components/JoinSection";

export default function Home() {
  return (
    <>
      <Hero />
      <CampaignBar />
      <Mission />
      <InstagramGallery />
      <ImpactStats />
      <ProgramsPreview />
      <GiftImpact />
      <CampaignSection />
      <GivingCircles />
      <LeadershipPreview />
      <JoinSection />
    </>
  );
}
