import type { FeatureCard } from '@/types';
import Link from 'next/link';

interface FeatureGridProps {
  featureCards: FeatureCard[];
}

export default function FeatureGrid({ featureCards }: FeatureGridProps) {
  // Sort by display_order if available
  const sortedCards = featureCards.sort((a, b) => {
    const orderA = a.metadata.display_order || 0;
    const orderB = b.metadata.display_order || 0;
    return orderA - orderB;
  });

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Powerful Features</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our comprehensive suite of DeFi tools designed to optimize your portfolio performance
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {sortedCards.map((card, index) => (
            <FeatureCardItem key={card.id} card={card} index={index} />
          ))}
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
    </section>
  );
}

interface FeatureCardItemProps {
  card: FeatureCard;
  index: number;
}

function FeatureCardItem({ card, index }: FeatureCardItemProps) {
  const { metadata } = card;
  const backgroundImage = metadata.background_image?.imgix_url;
  const cardTitle = metadata.card_title || card.title;
  const cardDescription = metadata.card_description || '';
  const actionText = metadata.primary_action_text || 'Learn More';
  const actionLink = metadata.primary_action_link || '#';
  const cardTypeValue = metadata.card_type?.value || 'Feature';

  return (
    <div className={`feature-card card-hover ${index % 2 === 0 ? 'lg:translate-y-8' : 'lg:-translate-y-8'}`}>
      {/* Background Image */}
      {backgroundImage && (
        <div className="absolute inset-0 rounded-2xl overflow-hidden">
          <img
            src={`${backgroundImage}?w=800&h=600&fit=crop&auto=format,compress`}
            alt={cardTitle}
            className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-card/80 via-card/60 to-card/80" />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10">
        {/* Card Type Badge */}
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-accent text-sm font-medium mb-6">
          {cardTypeValue}
        </div>

        {/* Title */}
        <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-gradient transition-colors duration-300">
          {cardTitle}
        </h3>

        {/* Description */}
        {cardDescription && (
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            {cardDescription}
          </p>
        )}

        {/* Action Button */}
        <div className="flex items-center justify-between">
          <Link href={actionLink}>
            <button className="flex items-center space-x-2 text-white font-semibold px-6 py-3 rounded-lg glass-effect hover:bg-white/20 transition-all duration-300 group">
              <span>{actionText}</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </Link>

          {/* Decorative Element */}
          <div className="w-12 h-12 rounded-full bg-gradient-primary/20 flex items-center justify-center">
            <div className="w-6 h-6 rounded-full bg-gradient-primary animate-pulse" />
          </div>
        </div>
      </div>

      {/* Hover Effect Overlay */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
    </div>
  );
}