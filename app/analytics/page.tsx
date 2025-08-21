import { getStats, getUIComponent } from '@/lib/cosmic';
import Navigation from '@/components/Navigation';
import type { Stat, UIComponent } from '@/types';
import { TrendingUp, TrendingDown, BarChart3, PieChart, Activity, DollarSign } from 'lucide-react';

export const metadata = {
  title: 'Analytics Dashboard - DeFi Asset Defense',
  description: 'Comprehensive analytics and insights for your DeFi portfolio performance.',
};

export default async function AnalyticsPage() {
  try {
    const [stats, analyticsChart] = await Promise.all([
      getStats(),
      getUIComponent('analytics-chart'),
    ]);

    const statsData = stats as Stat[];
    const chartConfig = analyticsChart as UIComponent | null;

    return (
      <main className="min-h-screen bg-background text-foreground">
        <Navigation />
        
        <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Page Header */}
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-gradient">Analytics Dashboard</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced analytics and market intelligence to help you make informed decisions about your DeFi investments
              </p>
            </div>

            {/* Key Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {statsData.map((stat, index) => (
                <AnalyticsCard key={stat.id} stat={stat} index={index} />
              ))}
            </div>

            {/* Chart Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <div className="glass-effect rounded-2xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-white">Portfolio Performance</h3>
                  <BarChart3 className="w-6 h-6 text-accent" />
                </div>
                <PortfolioChart config={chartConfig} />
              </div>

              <div className="glass-effect rounded-2xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-white">Asset Allocation</h3>
                  <PieChart className="w-6 h-6 text-primary" />
                </div>
                <AssetAllocationChart />
              </div>
            </div>

            {/* Detailed Analytics */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <TransactionHistory />
              <MarketInsights />
              <RiskAnalysis />
            </div>
          </div>
        </div>
      </main>
    );
  } catch (error) {
    console.error('Error loading analytics page:', error);
    return (
      <main className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Analytics Unavailable</h1>
          <p className="text-muted-foreground">Failed to load analytics data. Please try again later.</p>
        </div>
      </main>
    );
  }
}

interface AnalyticsCardProps {
  stat: Stat;
  index: number;
}

function AnalyticsCard({ stat, index }: AnalyticsCardProps) {
  const { metadata } = stat;
  const trendDirection = metadata.trend_direction?.key || 'neutral';
  const displayColor = metadata.display_color || '#3b82f6';

  const getIcon = () => {
    switch (metadata.stat_type?.key) {
      case 'currency':
        return <DollarSign className="w-5 h-5" />;
      case 'percentage':
        return <Activity className="w-5 h-5" />;
      default:
        return <BarChart3 className="w-5 h-5" />;
    }
  };

  return (
    <div className={`glass-effect rounded-xl p-6 animate-float`} style={{ animationDelay: `${index * 0.2}s` }}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2 text-gray-400">
          {getIcon()}
          <span className="text-sm font-medium">{metadata.stat_label}</span>
        </div>
        {trendDirection === 'up' ? (
          <TrendingUp className="w-4 h-4 text-accent" />
        ) : trendDirection === 'down' ? (
          <TrendingDown className="w-4 h-4 text-red-400" />
        ) : null}
      </div>
      
      <div className="text-3xl font-bold mb-2" style={{ color: displayColor }}>
        {metadata.stat_value}
      </div>
      
      <p className="text-sm text-gray-400">{metadata.stat_description}</p>
    </div>
  );
}

function PortfolioChart({ config }: { config: UIComponent | null }) {
  const colors = config?.metadata.configuration?.colors || ['#00ff88', '#3b82f6', '#ff6b35'];
  
  return (
    <div className="h-64 relative">
      {/* Simulated chart */}
      <div className="absolute bottom-0 left-0 right-0 h-full flex items-end justify-between space-x-2">
        {Array.from({ length: 12 }, (_, i) => (
          <div
            key={i}
            className="flex-1 rounded-t opacity-80 hover:opacity-100 transition-opacity cursor-pointer"
            style={{
              backgroundColor: colors[i % colors.length],
              height: `${Math.random() * 80 + 20}%`,
            }}
          />
        ))}
      </div>
      
      {/* Grid lines */}
      <div className="absolute inset-0 pointer-events-none">
        {[25, 50, 75].map((percent) => (
          <div
            key={percent}
            className="absolute left-0 right-0 border-t border-gray-600/30"
            style={{ bottom: `${percent}%` }}
          />
        ))}
      </div>
    </div>
  );
}

function AssetAllocationChart() {
  const assets = [
    { name: 'ETH', percentage: 45, color: '#627eea' },
    { name: 'BTC', percentage: 30, color: '#f7931a' },
    { name: 'USDC', percentage: 15, color: '#2775ca' },
    { name: 'Other', percentage: 10, color: '#8b5cf6' },
  ];

  return (
    <div className="h-64 flex items-center justify-center">
      <div className="relative w-48 h-48">
        <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
          {assets.map((asset, index) => {
            const previousPercentages = assets.slice(0, index).reduce((sum, a) => sum + a.percentage, 0);
            const circumference = 2 * Math.PI * 40;
            const strokeDasharray = `${(asset.percentage / 100) * circumference} ${circumference}`;
            const strokeDashoffset = -((previousPercentages / 100) * circumference);

            return (
              <circle
                key={asset.name}
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke={asset.color}
                strokeWidth="8"
                strokeDasharray={strokeDasharray}
                strokeDashoffset={strokeDashoffset}
                className="opacity-80 hover:opacity-100 transition-opacity cursor-pointer"
              />
            );
          })}
        </svg>
        
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl font-bold text-white">100%</span>
          <span className="text-sm text-gray-400">Allocated</span>
        </div>
      </div>
      
      <div className="ml-8 space-y-2">
        {assets.map((asset) => (
          <div key={asset.name} className="flex items-center space-x-3">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: asset.color }} />
            <span className="text-sm text-gray-300">{asset.name}</span>
            <span className="text-sm font-medium text-white">{asset.percentage}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function TransactionHistory() {
  const transactions = [
    { type: 'Swap', asset: 'ETH → USDC', amount: '-0.5 ETH', time: '2 min ago', status: 'completed' },
    { type: 'Stake', asset: 'USDC Pool', amount: '+1,000 USDC', time: '1 hour ago', status: 'completed' },
    { type: 'Withdraw', asset: 'Compound', amount: '+50 COMP', time: '3 hours ago', status: 'completed' },
    { type: 'Deposit', asset: 'Aave', amount: '-2,000 USDT', time: '1 day ago', status: 'pending' },
  ];

  return (
    <div className="glass-effect rounded-2xl p-6">
      <h3 className="text-xl font-semibold text-white mb-6">Recent Transactions</h3>
      <div className="space-y-4">
        {transactions.map((tx, index) => (
          <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
            <div className="flex items-center space-x-3">
              <div className={`w-2 h-2 rounded-full ${tx.status === 'completed' ? 'bg-accent' : 'bg-yellow-500'}`} />
              <div>
                <div className="text-sm font-medium text-white">{tx.type}</div>
                <div className="text-xs text-gray-400">{tx.asset}</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm font-medium text-white">{tx.amount}</div>
              <div className="text-xs text-gray-400">{tx.time}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MarketInsights() {
  const insights = [
    { title: 'Gas Fees', value: '12 gwei', trend: 'down', color: 'text-accent' },
    { title: 'TVL Growth', value: '+5.2%', trend: 'up', color: 'text-accent' },
    { title: 'Yield Rates', value: '8.4% APY', trend: 'up', color: 'text-accent' },
    { title: 'Risk Score', value: 'Low', trend: 'neutral', color: 'text-primary' },
  ];

  return (
    <div className="glass-effect rounded-2xl p-6">
      <h3 className="text-xl font-semibold text-white mb-6">Market Insights</h3>
      <div className="space-y-4">
        {insights.map((insight, index) => (
          <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-white/5">
            <span className="text-sm text-gray-300">{insight.title}</span>
            <div className="flex items-center space-x-2">
              <span className={`text-sm font-medium ${insight.color}`}>{insight.value}</span>
              {insight.trend === 'up' && <TrendingUp className="w-4 h-4 text-accent" />}
              {insight.trend === 'down' && <TrendingDown className="w-4 h-4 text-red-400" />}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function RiskAnalysis() {
  const riskFactors = [
    { name: 'Smart Contract', level: 'Low', percentage: 15, color: 'bg-accent' },
    { name: 'Liquidity', level: 'Medium', percentage: 35, color: 'bg-yellow-500' },
    { name: 'Market Volatility', level: 'High', percentage: 70, color: 'bg-red-500' },
    { name: 'Regulatory', level: 'Low', percentage: 20, color: 'bg-accent' },
  ];

  return (
    <div className="glass-effect rounded-2xl p-6">
      <h3 className="text-xl font-semibold text-white mb-6">Risk Analysis</h3>
      <div className="space-y-4">
        {riskFactors.map((risk, index) => (
          <div key={index}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-300">{risk.name}</span>
              <span className="text-sm font-medium text-white">{risk.level}</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div
                className={`h-2 rounded-full ${risk.color}`}
                style={{ width: `${risk.percentage}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}