import type { Stat } from '@/types';

interface StatsSectionProps {
  stats: Stat[];
}

// Custom TrendingUp Icon Component
function TrendingUpIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  );
}

// Custom TrendingDown Icon Component
function TrendingDownIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
    </svg>
  );
}

export default function StatsSection({ stats }: StatsSectionProps) {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Performance Metrics</span>
          </h2>
          <p className="text-xl text-silver-300 max-w-3xl mx-auto">
            Real-time statistics showcasing our platform's performance and reliability
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <StatCard key={stat.id} stat={stat} index={index} />
          ))}
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-silver-400/10 rounded-full blur-3xl animate-pulse-slow animation-delay-2000" />
    </section>
  );
}

interface StatCardProps {
  stat: Stat;
  index: number;
}

function StatCard({ stat, index }: StatCardProps) {
  const { metadata } = stat;
  const statLabel = metadata.stat_label || stat.title;
  const statValue = metadata.stat_value || '0';
  const statDescription = metadata.stat_description || '';
  const trendDirection = metadata.trend_direction?.key || 'neutral';
  
  // Determine trend icon and color - using minimal silver/white colors
  const getTrendIcon = () => {
    switch (trendDirection) {
      case 'up':
        return <TrendingUpIcon className="w-5 h-5 text-silver-300" />;
      case 'down':
        return <TrendingDownIcon className="w-5 h-5 text-silver-500" />;
      default:
        return null;
    }
  };

  const getTrendColor = () => {
    switch (trendDirection) {
      case 'up':
        return 'text-silver-200';
      case 'down':
        return 'text-silver-400';
      default:
        return 'text-silver-300';
    }
  };

  return (
    <div className={`stat-card card-hover animate-float`} style={{ animationDelay: `${index * 0.5}s` }}>
      {/* Silver Accent */}
      <div className="absolute top-0 left-0 w-full h-1 rounded-t-xl bg-silver-400" />

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-silver-300">
            {statLabel}
          </h3>
          {getTrendIcon()}
        </div>

        {/* Main Value */}
        <div className="mb-4">
          <span className={`text-4xl md:text-5xl font-bold text-white`}>
            {statValue}
          </span>
        </div>

        {/* Description */}
        {statDescription && (
          <p className="text-silver-400 text-sm leading-relaxed">
            {statDescription}
          </p>
        )}

        {/* Trend Indicator */}
        {trendDirection !== 'neutral' && (
          <div className={`mt-4 flex items-center space-x-2 text-sm ${getTrendColor()}`}>
            <div 
              className="w-2 h-2 rounded-full animate-pulse bg-silver-400"
            />
            <span className="font-medium">
              {trendDirection === 'up' ? 'Trending Up' : 'Trending Down'}
            </span>
          </div>
        )}
      </div>

      {/* Background Glow Effect */}
      <div className="absolute inset-0 rounded-xl opacity-5 blur-xl bg-silver-400" />
    </div>
  );
}