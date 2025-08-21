import { Wallet, Plus, Send, Download, Shield, Activity } from 'lucide-react';

export const metadata = {
  title: 'Wallet - DeFi Asset Defense Platform',
  description: 'Secure wallet interface with portfolio tracking and DeFi protocol integration',
};

export default function WalletPage() {
  return (
    <div className="min-h-screen bg-background text-foreground pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">DeFi Wallet</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Secure wallet interface with portfolio tracking, yield farming opportunities, and seamless DeFi protocol integration.
          </p>
        </div>

        {/* Wallet Connection Status */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-8 py-4 bg-orange-500/20 text-orange-400 rounded-xl border border-orange-500/30">
            <Wallet className="w-5 h-5 mr-3" />
            <span className="font-medium">Connect your wallet to get started</span>
          </div>
        </div>

        {/* Wallet Actions */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 max-w-2xl mx-auto">
          <button className="glass-effect p-6 rounded-xl hover:bg-white/10 transition-all duration-300 text-center group">
            <Plus className="w-8 h-8 text-accent mx-auto mb-3 group-hover:scale-110 transition-transform" />
            <span className="text-white font-medium">Add Funds</span>
          </button>
          
          <button className="glass-effect p-6 rounded-xl hover:bg-white/10 transition-all duration-300 text-center group">
            <Send className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
            <span className="text-white font-medium">Send</span>
          </button>
          
          <button className="glass-effect p-6 rounded-xl hover:bg-white/10 transition-all duration-300 text-center group">
            <Download className="w-8 h-8 text-blue-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
            <span className="text-white font-medium">Receive</span>
          </button>
          
          <button className="glass-effect p-6 rounded-xl hover:bg-white/10 transition-all duration-300 text-center group">
            <Shield className="w-8 h-8 text-green-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
            <span className="text-white font-medium">Secure</span>
          </button>
        </div>

        {/* Portfolio Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Main Portfolio */}
          <div className="lg:col-span-2">
            <div className="glass-effect rounded-2xl p-8">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-white">Portfolio Balance</h2>
                <div className="flex items-center space-x-2">
                  <Activity className="w-5 h-5 text-accent" />
                  <span className="text-accent text-sm font-medium">Live</span>
                </div>
              </div>
              
              {/* Balance Display */}
              <div className="text-center mb-8">
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">$12,847.23</h3>
                <div className="flex items-center justify-center text-green-400">
                  <span className="text-lg font-medium">+$647.12 (+5.2%)</span>
                  <span className="text-sm ml-2">24h</span>
                </div>
              </div>

              {/* Asset Allocation */}
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-gray-800/30 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold">₿</span>
                    </div>
                    <div>
                      <p className="text-white font-medium">Bitcoin</p>
                      <p className="text-gray-400 text-sm">0.2847 BTC</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-white font-bold">$8,234.50</p>
                    <p className="text-green-400 text-sm">+3.2%</p>
                  </div>
                </div>

                <div className="flex justify-between items-center p-4 bg-gray-800/30 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold">Ξ</span>
                    </div>
                    <div>
                      <p className="text-white font-medium">Ethereum</p>
                      <p className="text-gray-400 text-sm">2.4571 ETH</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-white font-bold">$3,456.20</p>
                    <p className="text-green-400 text-sm">+7.1%</p>
                  </div>
                </div>

                <div className="flex justify-between items-center p-4 bg-gray-800/30 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold">◆</span>
                    </div>
                    <div>
                      <p className="text-white font-medium">DeFi Tokens</p>
                      <p className="text-gray-400 text-sm">Mixed Portfolio</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-white font-bold">$1,156.53</p>
                    <p className="text-red-400 text-sm">-1.2%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Stats */}
          <div className="space-y-6">
            <div className="glass-effect rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-4">Yield Farming</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400 text-sm">Active Pools</span>
                  <span className="text-white font-bold">3</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400 text-sm">Total Staked</span>
                  <span className="text-white font-bold">$4,250</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400 text-sm">Est. APY</span>
                  <span className="text-accent font-bold">12.4%</span>
                </div>
              </div>
            </div>

            <div className="glass-effect rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-4">Security</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">Multi-sig</span>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">2FA Enabled</span>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">Cold Storage</span>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
              </div>
            </div>

            <div className="glass-effect rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-4">Recent Activity</h3>
              <div className="space-y-3">
                <div className="text-sm">
                  <p className="text-white">Swap ETH → USDC</p>
                  <p className="text-gray-400">2 hours ago</p>
                </div>
                <div className="text-sm">
                  <p className="text-white">Stake in Pool</p>
                  <p className="text-gray-400">1 day ago</p>
                </div>
                <div className="text-sm">
                  <p className="text-white">Harvest Rewards</p>
                  <p className="text-gray-400">3 days ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Connect Wallet CTA */}
        <div className="text-center">
          <button className="bg-gradient-primary text-white px-12 py-4 rounded-xl text-lg font-semibold hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-primary/25">
            Connect Wallet
          </button>
          <p className="text-gray-400 text-sm mt-4">
            Supports MetaMask, WalletConnect, and other major wallets
          </p>
        </div>
      </div>
    </div>
  );
}