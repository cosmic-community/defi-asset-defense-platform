import type { LandingPage } from '@/types';
import Link from 'next/link';

interface HeroSectionProps {
  landingPage: LandingPage;
}

export default function HeroSection({ landingPage }: HeroSectionProps) {
  const { metadata } = landingPage;
  
  const backgroundImage = metadata.hero_background?.imgix_url;
  const heroHeadline = metadata.hero_headline || 'One-click for Asset Defense';
  const heroSubtext = metadata.hero_subtext || 'Protect and optimize your DeFi portfolio with intelligent asset management.';
  const ctaText = metadata.hero_cta_text || 'Get Started';
  const ctaLink = metadata.hero_cta_link || '#';

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image */}
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <img
            src={`${backgroundImage}?w=1920&h=1080&fit=crop&auto=format,compress`}
            alt="Hero Background"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />
        </div>
      )}

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-silver-400/10 rounded-full blur-3xl animate-pulse-slow animation-delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-128 h-128 bg-white/3 rounded-full blur-3xl animate-pulse-slow animation-delay-2000" />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-8 animate-float">
            <span className="text-gradient">{heroHeadline}</span>
          </h1>

          {/* Subtext */}
          <p className="text-xl md:text-2xl text-silver-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            {heroSubtext}
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href={ctaLink}>
              <button className="bg-gradient-primary text-black px-12 py-4 rounded-xl text-lg font-semibold hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-white/20 animate-glow">
                {ctaText}
              </button>
            </Link>
            
            <button className="glass-effect text-white px-12 py-4 rounded-xl text-lg font-semibold hover:bg-white/10 transition-all duration-300 border border-white/10">
              Watch Demo
            </button>
          </div>
        </div>

        {/* Floating Cards Preview */}
        <div className="mt-24 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Analytics Card Preview */}
            <div className="glass-effect rounded-2xl p-6 transform rotate-1 hover:rotate-0 transition-transform duration-500 animate-float border border-white/5">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-white font-semibold">Meet Marvellous Insights</h3>
                <div className="w-3 h-3 bg-silver-400 rounded-full animate-pulse" />
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-silver-400 text-sm">Success Rate</span>
                  <span className="text-silver-300 font-bold">98.2%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-silver-400 text-sm">Transactions</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-silver-300 font-bold">19.2</span>
                    <span className="text-silver-300 font-bold">24</span>
                  </div>
                </div>
                <div className="h-2 bg-silver-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-silver-400 to-silver-300 w-3/4 animate-pulse" />
                </div>
              </div>
            </div>

            {/* Wallet Card Preview */}
            <div className="glass-effect rounded-2xl p-6 transform -rotate-1 hover:rotate-0 transition-transform duration-500 animate-float animation-delay-1000 border border-white/5">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-white font-semibold">DeFi Wallet</h3>
                <div className="w-3 h-3 bg-silver-400 rounded-full animate-pulse" />
              </div>
              <div className="space-y-3">
                <div className="text-center">
                  <div className="text-6xl font-bold text-white mb-2">4</div>
                  <div className="text-sm text-silver-400">Active Connections</div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-silver-400 text-sm">Portfolio Growth</span>
                  <span className="text-silver-300 font-bold">+A3.7</span>
                </div>
                <div className="flex space-x-2 justify-center">
                  <div className="w-2 h-8 bg-silver-600 rounded-sm"></div>
                  <div className="w-2 h-12 bg-silver-500 rounded-sm"></div>
                  <div className="w-2 h-6 bg-silver-400 rounded-sm"></div>
                  <div className="w-2 h-10 bg-silver-500 rounded-sm"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}