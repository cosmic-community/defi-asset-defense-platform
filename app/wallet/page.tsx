import { getStats } from '@/lib/cosmic';
import Navigation from '@/components/Navigation';
import type { Stat } from '@/types';
import { Wallet, Send, ArrowUpDown, Plus, Settings, Shield, Eye, EyeOff, Copy, ExternalLink } from 'lucide-react';

export const metadata = {
  title: 'DeFi Wallet - Asset Defense',
  description: 'Secure wallet interface with portfolio tracking, yield farming opportunities, and seamless DeFi protocol integration.',
};

export default async function WalletPage() {
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
                <span className="text-gradient">DeFi Wallet</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Secure wallet interface with portfolio tracking, yield farming opportunities, and seamless DeFi protocol integration
              </p>
            </div>

            {/* Wallet Overview */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              <WalletBalance />
              <PortfolioSummary stats={statsData} />
              <QuickActions />
            </div>

            {/* Assets and Transactions */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <AssetsList />
              <TransactionsList />
            </div>
          </div>
        </div>
      </main>
    );
  } catch (error) {
    console.error('Error loading wallet page:', error);
    return (
      <main className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Wallet Unavailable</h1>
          <p className="text-muted-foreground">Failed to load wallet data. Please try again later.</p>
        </div>
      </main>
    );
  }
}

function WalletBalance() {
  return (
    <div className="lg:col-span-2 glass-effect rounded-2xl p-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <Wallet className="w-8 h-8 text-primary" />
          <h2 className="text-2xl font-bold text-white">Total Balance</h2>
        </div>
        <div className="flex items-center space-x-2">
          <button className="p-2 rounded-lg glass-effect hover:bg-white/10 transition-colors">
            <Eye className="w-5 h-5 text-gray-400" />
          </button>
          <button className="p-2 rounded-lg glass-effect hover:bg-white/10 transition-colors">
            <Settings className="w-5 h-5 text-gray-400" />
          </button>
        </div>
      </div>

      <div className="text-5xl font-bold text-gradient mb-4">
        $24,847.93
      </div>

      <div className="flex items-center space-x-4 mb-8">
        <div className="flex items-center space-x-2 text-accent">
          <span className="text-lg font-medium">+$1,247.82</span>
          <span className="text-sm">(+5.2%)</span>
        </div>
        <span className="text-gray-400">24h change</span>
      </div>

      <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
        <span>Wallet Address:</span>
        <div className="flex items-center space-x-2">
          <code className="bg-white/10 px-3 py-1 rounded">0x742d...7aF3</code>
          <button className="p-1 hover:text-white transition-colors">
            <Copy className="w-4 h-4" />
          </button>
          <button className="p-1 hover:text-white transition-colors">
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="flex space-x-4">
        <button className="flex-1 bg-gradient-primary text-white py-3 px-6 rounded-xl font-semibold hover:scale-105 transition-transform flex items-center justify-center space-x-2">
          <Send className="w-5 h-5" />
          <span>Send</span>
        </button>
        <button className="flex-1 glass-effect text-white py-3 px-6 rounded-xl font-semibold hover:bg-white/10 transition-colors flex items-center justify-center space-x-2">
          <ArrowUpDown className="w-5 h-5" />
          <span>Swap</span>
        </button>
        <button className="flex-1 glass-effect text-white py-3 px-6 rounded-xl font-semibold hover:bg-white/10 transition-colors flex items-center justify-center space-x-2">
          <Plus className="w-5 h-5" />
          <span>Receive</span>
        </button>
      </div>
    </div>
  );
}

function PortfolioSummary({ stats }: { stats: Stat[] }) {
  return (
    <div className="glass-effect rounded-2xl p-6">
      <div className="flex items-center space-x-3 mb-6">
        <Shield className="w-6 h-6 text-accent" />
        <h3 className="text-xl font-semibold text-white">Portfolio Health</h3>
      </div>

      <div className="space-y-4">
        {stats.slice(0, 3).map((stat) => (
          <div key={stat.id} className="flex items-center justify-between">
            <span className="text-sm text-gray-400">{stat.metadata.stat_label}</span>
            <span 
              className="text-sm font-medium"
              style={{ color: stat.metadata.display_color }}
            >
              {stat.metadata.stat_value}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-accent/10 rounded-xl border border-accent/20">
        <div className="flex items-center space-x-2 mb-2">
          <div className="w-2 h-2 bg-accent rounded-full" />
          <span className="text-sm font-medium text-accent">Risk Level: Low</span>
        </div>
        <p className="text-xs text-gray-400">Your portfolio is well-diversified with minimal risk exposure.</p>
      </div>
    </div>
  );
}

function QuickActions() {
  const actions = [
    { name: 'Stake ETH', icon: '🥩', description: 'Earn 5.2% APY' },
    { name: 'Provide Liquidity', icon: '💧', description: 'Up to 12% APY' },
    { name: 'Yield Farm', icon: '🌾', description: 'Multiple pools' },
    { name: 'Borrow USDC', icon: '💰', description: '3.8% APR' },
  ];

  return (
    <div className="glass-effect rounded-2xl p-6">
      <h3 className="text-xl font-semibold text-white mb-6">Quick Actions</h3>
      
      <div className="space-y-3">
        {actions.map((action, index) => (
          <button
            key={index}
            className="w-full p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-left"
          >
            <div className="flex items-center space-x-3">
              <span className="text-2xl">{action.icon}</span>
              <div>
                <div className="text-sm font-medium text-white">{action.name}</div>
                <div className="text-xs text-gray-400">{action.description}</div>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

function AssetsList() {
  const assets = [
    { symbol: 'ETH', name: 'Ethereum', balance: '8.234', value: '$18,423.45', change: '+5.2%', color: '#627eea' },
    { symbol: 'BTC', name: 'Bitcoin', balance: '0.156', value: '$4,892.33', change: '+2.1%', color: '#f7931a' },
    { symbol: 'USDC', name: 'USD Coin', balance: '1,247.89', value: '$1,247.89', change: '0.0%', color: '#2775ca' },
    { symbol: 'UNI', name: 'Uniswap', balance: '45.67', value: '$284.26', change: '+8.9%', color: '#ff007a' },
  ];

  return (
    <div className="glass-effect rounded-2xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-white">Assets</h3>
        <button className="text-sm text-primary hover:text-primary/80 transition-colors">
          View All
        </button>
      </div>

      <div className="space-y-4">
        {assets.map((asset, index) => (
          <div key={index} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-white/5 transition-colors cursor-pointer">
            <div 
              className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm"
              style={{ backgroundColor: asset.color }}
            >
              {asset.symbol.slice(0, 2)}
            </div>
            <div className="flex-1">
              <div className="text-sm font-medium text-white">{asset.symbol}</div>
              <div className="text-xs text-gray-400">{asset.name}</div>
            </div>
            <div className="text-right">
              <div className="text-sm font-medium text-white">{asset.balance}</div>
              <div className="text-xs text-gray-400">{asset.value}</div>
            </div>
            <div className={`text-sm font-medium ${asset.change.startsWith('+') ? 'text-accent' : 'text-gray-400'}`}>
              {asset.change}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function TransactionsList() {
  const transactions = [
    { 
      type: 'Send', 
      asset: 'ETH', 
      amount: '-0.5 ETH', 
      to: '0x742d...7aF3', 
      time: '2 min ago',
      status: 'confirmed',
      hash: '0xabc123...'
    },
    { 
      type: 'Swap', 
      asset: 'USDC → UNI', 
      amount: '1,000 USDC', 
      to: 'Uniswap V3', 
      time: '1 hour ago',
      status: 'confirmed',
      hash: '0xdef456...'
    },
    { 
      type: 'Stake', 
      asset: 'ETH', 
      amount: '+2.0 ETH', 
      to: 'Lido', 
      time: '3 hours ago',
      status: 'confirmed',
      hash: '0x789xyz...'
    },
    { 
      type: 'Receive', 
      asset: 'USDC', 
      amount: '+500 USDC', 
      to: '0x123a...9bC7', 
      time: '1 day ago',
      status: 'confirmed',
      hash: '0x456abc...'
    },
  ];

  return (
    <div className="glass-effect rounded-2xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-white">Recent Transactions</h3>
        <button className="text-sm text-primary hover:text-primary/80 transition-colors">
          View All
        </button>
      </div>

      <div className="space-y-4">
        {transactions.map((tx, index) => (
          <div key={index} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-white/5 transition-colors cursor-pointer">
            <div className={`w-2 h-2 rounded-full ${tx.status === 'confirmed' ? 'bg-accent' : 'bg-yellow-500'}`} />
            <div className="flex-1">
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium text-white">{tx.type}</span>
                <span className="text-xs text-gray-400">{tx.asset}</span>
              </div>
              <div className="text-xs text-gray-400">{tx.to}</div>
            </div>
            <div className="text-right">
              <div className="text-sm font-medium text-white">{tx.amount}</div>
              <div className="text-xs text-gray-400">{tx.time}</div>
            </div>
            <button className="p-1 opacity-0 group-hover:opacity-100 transition-opacity">
              <ExternalLink className="w-4 h-4 text-gray-400 hover:text-white" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}