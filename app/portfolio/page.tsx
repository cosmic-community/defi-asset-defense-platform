import { getStats } from '@/lib/cosmic';
import Navigation from '@/components/Navigation';
import type { Stat } from '@/types';
import { PieChart, TrendingUp, TrendingDown, Target, Shield, Zap, DollarSign, BarChart3 } from 'lucide-react';

export const metadata = {
  title: 'Portfolio Management - DeFi Asset Defense',
  description: 'Comprehensive portfolio tracking and optimization tools for your DeFi investments.',
};

export default async function PortfolioPage() {
  try {
    const stats = await getStats();
    const statsData = stats as Stat[];

    return (
      <main className="min-h-screen bg-background text-foreground">
        <Navigation />
        
        <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Page Header */}
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-gradient">Portfolio Management</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive portfolio tracking and optimization tools to maximize your DeFi investment returns
              </p>
            </div>

            {/* Portfolio Overview */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-12">
              <PortfolioValue />
              <PerformanceMetrics stats={statsData} />
            </div>

            {/* Charts and Allocation */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <AllocationChart />
              <PerformanceChart />
            </div>

            {/* Portfolio Positions and Recommendations */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <PortfolioPositions />
              <OptimizationRecommendations />
            </div>
          </div>
        </div>
      </main>
    );
  } catch (error) {
    console.error('Error loading portfolio page:', error);
    return (
      <main className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Portfolio Unavailable</h1>
          <p className="text-muted-foreground">Failed to load portfolio data. Please try again later.</p>
        </div>
      </main>
    );
  }
}

function PortfolioValue() {
  return (
    <div className="lg:col-span-2 glass-effect rounded-2xl p-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <PieChart className="w-8 h-8 text-primary" />
          <h2 className="text-2xl font-bold text-white">Portfolio Value</h2>
        </div>
        <select className="bg-white/10 text-white px-4 py-2 rounded-lg border border-white/20">
          <option>24H</option>
          <option>7D</option>
          <option>30D</option>
          <option>1Y</option>
        </select>
      </div>

      <div className="text-5xl font-bold text-gradient mb-4">
        $127,849.32
      </div>

      <div className="flex items-center space-x-6 mb-8">
        <div className="flex items-center space-x-2">
          <TrendingUp className="w-5 h-5 text-accent" />
          <span className="text-lg font-medium text-accent">+$5,847.23</span>
          <span className="text-sm text-gray-400">(+4.8%)</span>
        </div>
        <span className="text-gray-400">vs last month</span>
      </div>

      <div className="grid grid-cols-3 gap-6 text-center">
        <div>
          <div className="text-xl font-bold text-white">$98.2K</div>
          <div className="text-sm text-gray-400">Invested</div>
        </div>
        <div>
          <div className="text-xl font-bold text-accent">+29.7K</div>
          <div className="text-sm text-gray-400">Profit</div>
        </div>
        <div>
          <div className="text-xl font-bold text-primary">30.2%</div>
          <div className="text-sm text-gray-400">ROI</div>
        </div>
      </div>
    </div>
  );
}

function PerformanceMetrics({ stats }: { stats: Stat[] }) {
  return (
    <div className="lg:col-span-2 grid grid-cols-2 gap-4">
      {stats.slice(0, 4).map((stat, index) => (
        <div key={stat.id} className="glass-effect rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="text-sm text-gray-400">{stat.metadata.stat_label}</div>
            {stat.metadata.trend_direction?.key === 'up' ? (
              <TrendingUp className="w-4 h-4 text-accent" />
            ) : (
              <TrendingDown className="w-4 h-4 text-red-400" />
            )}
          </div>
          <div 
            className="text-2xl font-bold mb-2"
            style={{ color: stat.metadata.display_color }}
          >
            {stat.metadata.stat_value}
          </div>
          <div className="text-xs text-gray-400">{stat.metadata.stat_description}</div>
        </div>
      ))}
    </div>
  );
}

function AllocationChart() {
  const allocations = [
    { name: 'DeFi Protocols', percentage: 45, value: '$57.5K', color: '#3b82f6' },
    { name: 'Stablecoins', percentage: 25, value: '$32.0K', color: '#00ff88' },
    { name: 'Layer 1 Tokens', percentage: 20, value: '$25.6K', color: '#ff6b35' },
    { name: 'LP Tokens', percentage: 10, value: '$12.8K', color: '#8b5cf6' },
  ];

  return (
    <div className="glass-effect rounded-2xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-white">Asset Allocation</h3>
        <Target className="w-6 h-6 text-accent" />
      </div>

      <div className="relative mb-8">
        <div className="w-64 h-64 mx-auto relative">
          <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
            {allocations.map((allocation, index) => {
              const previousPercentages = allocations.slice(0, index).reduce((sum, a) => sum + a.percentage, 0);
              const circumference = 2 * Math.PI * 40;
              const strokeDasharray = `${(allocation.percentage / 100) * circumference} ${circumference}`;
              const strokeDashoffset = -((previousPercentages / 100) * circumference);

              return (
                <circle
                  key={allocation.name}
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke={allocation.color}
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
      </div>

      <div className="space-y-3">
        {allocations.map((allocation) => (
          <div key={allocation.name} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: allocation.color }} />
              <span className="text-sm text-gray-300">{allocation.name}</span>
            </div>
            <div className="text-right">
              <div className="text-sm font-medium text-white">{allocation.percentage}%</div>
              <div className="text-xs text-gray-400">{allocation.value}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PerformanceChart() {
  const performanceData = [
    { month: 'Jan', value: 85 },
    { month: 'Feb', value: 92 },
    { month: 'Mar', value: 78 },
    { month: 'Apr', value: 94 },
    { month: 'May', value: 89 },
    { month: 'Jun', value: 96 },
    { month: 'Jul', value: 103 },
    { month: 'Aug', value: 108 },
    { month: 'Sep', value: 115 },
    { month: 'Oct', value: 122 },
    { month: 'Nov', value: 128 },
    { month: 'Dec', value: 127 },
  ];

  return (
    <div className="glass-effect rounded-2xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-white">Performance History</h3>
        <BarChart3 className="w-6 h-6 text-primary" />
      </div>

      <div className="h-64 relative">
        {/* Chart area */}
        <div className="absolute inset-0 flex items-end justify-between">
          {performanceData.map((data, index) => (
            <div
              key={data.month}
              className="flex-1 mx-1 bg-gradient-to-t from-primary/50 to-primary rounded-t hover:from-primary/70 hover:to-primary/90 transition-all cursor-pointer"
              style={{ height: `${(data.value / 130) * 100}%` }}
              title={`${data.month}: $${data.value}K`}
            />
          ))}
        </div>

        {/* Y-axis labels */}
        <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-xs text-gray-400">
          <span>$130K</span>
          <span>$100K</span>
          <span>$70K</span>
        </div>
      </div>

      {/* X-axis labels */}
      <div className="flex justify-between mt-4 text-xs text-gray-400">
        {performanceData.map((data) => (
          <span key={data.month}>{data.month}</span>
        ))}
      </div>
    </div>
  );
}

function PortfolioPositions() {
  const positions = [
    { 
      protocol: 'Compound', 
      asset: 'USDC', 
      amount: '25,000', 
      value: '$25,000', 
      apy: '4.2%', 
      status: 'earning',
      change: '+$42.50'
    },
    { 
      protocol: 'Uniswap V3', 
      asset: 'ETH/USDC', 
      amount: '15.5 LP', 
      value: '$31,200', 
      apy: '12.8%', 
      status: 'earning',
      change: '+$156.80'
    },
    { 
      protocol: 'Aave', 
      asset: 'WBTC', 
      amount: '0.8', 
      value: '$28,400', 
      apy: '3.1%', 
      status: 'earning',
      change: '+$29.11'
    },
    { 
      protocol: 'Curve', 
      asset: '3pool', 
      amount: '18,500', 
      value: '$18,650', 
      apy: '5.7%', 
      status: 'earning',
      change: '+$35.12'
    },
  ];

  return (
    <div className="glass-effect rounded-2xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-white">Active Positions</h3>
        <div className="flex items-center space-x-2 text-sm text-accent">
          <Zap className="w-4 h-4" />
          <span>All positions earning</span>
        </div>
      </div>

      <div className="space-y-4">
        {positions.map((position, index) => (
          <div key={index} className="p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
            <div className="flex items-center justify-between mb-3">
              <div>
                <div className="text-sm font-medium text-white">{position.protocol}</div>
                <div className="text-xs text-gray-400">{position.asset}</div>
              </div>
              <div className="text-right">
                <div className="text-sm font-medium text-white">{position.value}</div>
                <div className="text-xs text-accent">{position.apy} APY</div>
              </div>
            </div>
            
            <div className="flex items-center justify-between text-xs">
              <span className="text-gray-400">{position.amount}</span>
              <span className="text-accent">{position.change}</span>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full mt-6 py-3 px-6 rounded-lg glass-effect hover:bg-white/10 transition-colors text-sm font-medium text-white">
        View All Positions
      </button>
    </div>
  );
}

function OptimizationRecommendations() {
  const recommendations = [
    {
      type: 'yield',
      title: 'Optimize Yield',
      description: 'Move 5K USDC from Compound to Convex for +2.1% APY',
      impact: '+$315/year',
      risk: 'Low',
      icon: <TrendingUp className="w-5 h-5 text-accent" />
    },
    {
      type: 'risk',
      title: 'Reduce Risk',
      description: 'Diversify concentrated WBTC position across 3 protocols',
      impact: '-15% risk',
      risk: 'Medium',
      icon: <Shield className="w-5 h-5 text-yellow-500" />
    },
    {
      type: 'opportunity',
      title: 'New Opportunity',
      description: 'Frax Finance offering 8.5% APY on stablecoins',
      impact: '+$1,200/year',
      risk: 'Medium',
      icon: <Target className="w-5 h-5 text-primary" />
    },
    {
      type: 'rebalance',
      title: 'Rebalance Portfolio',
      description: 'Your LP position is overweight by 5%',
      impact: 'Better diversification',
      risk: 'Low',
      icon: <DollarSign className="w-5 h-5 text-purple-500" />
    }
  ];

  return (
    <div className="glass-effect rounded-2xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-white">Optimization</h3>
        <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
      </div>

      <div className="space-y-4">
        {recommendations.map((rec, index) => (
          <div key={index} className="p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors cursor-pointer">
            <div className="flex items-start space-x-3">
              <div className="mt-1">{rec.icon}</div>
              <div className="flex-1">
                <div className="text-sm font-medium text-white mb-1">{rec.title}</div>
                <div className="text-xs text-gray-400 mb-2">{rec.description}</div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-accent">{rec.impact}</span>
                  <span className={`text-xs px-2 py-1 rounded ${
                    rec.risk === 'Low' ? 'bg-accent/20 text-accent' :
                    rec.risk === 'Medium' ? 'bg-yellow-500/20 text-yellow-500' :
                    'bg-red-500/20 text-red-500'
                  }`}>
                    {rec.risk} Risk
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full mt-6 bg-gradient-primary text-white py-3 px-6 rounded-lg font-semibold hover:scale-105 transition-transform">
        Optimize Portfolio
      </button>
    </div>
  );
}