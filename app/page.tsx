import { getLandingPage, getFeatureCards, getStats } from '@/lib/cosmic';
import HeroSection from '@/components/HeroSection';
import FeatureGrid from '@/components/FeatureGrid';
import StatsSection from '@/components/StatsSection';
import type { LandingPage, FeatureCard, Stat } from '@/types';

export default async function HomePage() {
  try {
    // Fetch all data from Cosmic CMS
    const [landingPage, featureCards, stats] = await Promise.all([
      getLandingPage(),
      getFeatureCards(),
      getStats(),
    ]);

    // Cast to proper types with validation
    const landingPageData = landingPage as LandingPage | null;
    const featureCardsData = featureCards as FeatureCard[];
    const statsData = stats as Stat[];

    // Fallback data if no landing page is found
    if (!landingPageData) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Landing page not found</h1>
            <p className="text-muted-foreground">Please check your Cosmic CMS configuration.</p>
          </div>
        </div>
      );
    }

    return (
      <main className="min-h-screen bg-background text-foreground overflow-hidden">
        <HeroSection 
          landingPage={landingPageData} 
        />
        
        {featureCardsData.length > 0 && (
          <FeatureGrid 
            featureCards={featureCardsData}
          />
        )}
        
        {statsData.length > 0 && (
          <StatsSection 
            stats={statsData}
          />
        )}
      </main>
    );
  } catch (error) {
    console.error('Error loading page data:', error);
    
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Something went wrong</h1>
          <p className="text-muted-foreground">Failed to load page content. Please try again later.</p>
        </div>
      </div>
    );
  }
}