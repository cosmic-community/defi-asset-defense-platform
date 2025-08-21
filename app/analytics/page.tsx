import { getStats } from '@/lib/cosmic';
import type { Stat } from '@/types';
import { TrendingUp, TrendingDown, Activity } from 'lucide-react';

export const metadata = {
  title: 'Analytics - DeFi Asset Defense Platform',
  description: 'Advanced analytics and market intelligence for your DeFi investments',
};

export default async function AnalyticsPage() {
  try {
    const stats = await getStats() as Stat[];

    return (
      <div className="min-h-screen bg-background text-foreground pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">Portfolio Analytics</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced analytics and market intelligence to help you make informed decisions about your DeFi investments.
            </p>
          </div>

          {/* Analytics Dashboard */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Main Chart Area */}
            <div className="lg:col-span-2">
              <div className="glass-effect rounded-2xl p-8">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-2xl font-bold text-white">Portfolio Performance</h2>
                  <div className="flex items-center space-x-2">
                    <Activity className="w-5 h-5 text-accent" />
                    <span className="text-accent text-sm font-medium">Live Data</span>
                  </div>
                </div>
                
                {/* Mock Chart */}
                <div className="h-64 bg-gray-800/50 rounded-xl flex items-center justify-center border border-gray-700">
                  <div className="text-center">
                    <Activity className="w-12 h-12 text-accent mx-auto mb-4" />
                    <p className="text-gray-400">Interactive chart visualization</p>
                    <p className="text-gray-500 text-sm">Connect your wallet to view live data</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Sidebar */}
            <div className="space-y-6">
              {stats.map((stat) => (
                <StatCard key={stat.id} stat={stat} />
              ))}
            </div>
          </div>

          {/* Additional Analytics Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Market Trends */}
            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-6">Market Trends</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-gray-800/30 rounded-lg">
                  <div>
                    <p className="text-white font-medium">DeFi TVL</p>
                    <p className="text-gray-400 text-sm">Total Value Locked</p>
                  </div>
                  <div className="text-right">
                    <p className="text-accent font-bold">$127.4B</p>
                    <div className="flex items-center text-green-400 text-sm">
                      <TrendingUp className="w-4 h-4 mr-1" />
                      +5.2%
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center p-4 bg-gray-800/30 rounded-lg">
                  <div>
                    <p className="text-white font-medium">Yield Opportunities</p>
                    <p className="text-gray-400 text-sm">Average APY</p>
                  </div>
                  <div className="text-right">
                    <p className="text-primary font-bold">12.8%</p>
                    <div className="flex items-center text-green-400 text-sm">
                      <TrendingUp className="w-4 h-4 mr-1" />
                      +1.4%
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Risk Assessment */}
            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-6">Risk Assessment</h3>
              <div className="space-y-4">
                <div className="p-4 bg-gray-800/30 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-medium">Portfolio Risk</span>
                    <span className="text-yellow-400 font-bold">Medium</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-yellow-400 h-2 rounded-full w-3/5"></div>
                  </div>
                </div>
                
                <div className="p-4 bg-gray-800/30 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-medium">Diversification</span>
                    <span className="text-green-400 font-bold">Good</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-green-400 h-2 rounded-full w-4/5"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    return (
      <div className="min-h-screen bg-background text-foreground pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Analytics Unavailable</h1>
          <p className="text-gray-400">Unable to load analytics data. Please try again later.</p>
        </div>
      </div>
    );
  }
}

function StatCard({ stat }: { stat: Stat }) {
  const { metadata } = stat;
  const displayColor = metadata.display_color || '#3b82f6';
  const trendDirection = metadata.trend_direction?.key || 'neutral';
  
  const getTrendIcon = () => {
    switch (trendDirection) {
      case 'up':
        return <TrendingUp className="w-4 h-4 text-green-400" />;
      case 'down':
        return <TrendingDown className="w-4 h-4 text-red-400" />;
      default:
        return null;
    }
  };

  return (
    <div className="glass-effect rounded-xl p-6">
      <div className="flex items-center justify-between mb-3">
        <h4 className="text-sm font-medium text-gray-300">{metadata.stat_label}</h4>
        {getTrendIcon()}
      </div>
      <p 
        className="text-2xl font-bold mb-2"
        style={{ color: displayColor }}
      >
        {metadata.stat_value}
      </p>
      {metadata.stat_description && (
        <p className="text-xs text-gray-400 leading-relaxed">
          {metadata.stat_description}
        </p>
      )}
    </div>
  );
}