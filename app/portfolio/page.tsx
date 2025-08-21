import { TrendingUp, TrendingDown, PieChart, BarChart3, Target } from 'lucide-react';

export const metadata = {
  title: 'Portfolio - DeFi Asset Defense Platform',
  description: 'Comprehensive portfolio management and performance tracking',
};

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background text-foreground pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Portfolio Overview</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive portfolio management with advanced analytics and performance tracking.
          </p>
        </div>

        {/* Portfolio Summary */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="glass-effect rounded-xl p-6 text-center">
            <h3 className="text-lg font-semibold text-gray-300 mb-2">Total Value</h3>
            <p className="text-3xl font-bold text-white mb-2">$12,847</p>
            <div className="flex items-center justify-center text-green-400">
              <TrendingUp className="w-4 h-4 mr-1" />
              <span className="text-sm">+5.2%</span>
            </div>
          </div>

          <div className="glass-effect rounded-xl p-6 text-center">
            <h3 className="text-lg font-semibold text-gray-300 mb-2">24h Change</h3>
            <p className="text-3xl font-bold text-green-400 mb-2">+$647</p>
            <div className="flex items-center justify-center text-green-400">
              <TrendingUp className="w-4 h-4 mr-1" />
              <span className="text-sm">+5.31%</span>
            </div>
          </div>

          <div className="glass-effect rounded-xl p-6 text-center">
            <h3 className="text-lg font-semibold text-gray-300 mb-2">Assets</h3>
            <p className="text-3xl font-bold text-white mb-2">12</p>
            <div className="flex items-center justify-center text-blue-400">
              <PieChart className="w-4 h-4 mr-1" />
              <span className="text-sm">Diversified</span>
            </div>
          </div>

          <div className="glass-effect rounded-xl p-6 text-center">
            <h3 className="text-lg font-semibold text-gray-300 mb-2">Risk Score</h3>
            <p className="text-3xl font-bold text-yellow-400 mb-2">6.8</p>
            <div className="flex items-center justify-center text-yellow-400">
              <Target className="w-4 h-4 mr-1" />
              <span className="text-sm">Medium</span>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Performance Chart */}
          <div className="lg:col-span-2">
            <div className="glass-effect rounded-2xl p-8">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-white">Performance History</h2>
                <div className="flex space-x-2">
                  <button className="px-4 py-2 bg-primary/20 text-primary rounded-lg text-sm font-medium">7D</button>
                  <button className="px-4 py-2 text-gray-400 rounded-lg text-sm font-medium hover:bg-white/5">30D</button>
                  <button className="px-4 py-2 text-gray-400 rounded-lg text-sm font-medium hover:bg-white/5">1Y</button>
                </div>
              </div>
              
              {/* Mock Chart */}
              <div className="h-80 bg-gray-800/50 rounded-xl flex items-center justify-center border border-gray-700">
                <div className="text-center">
                  <BarChart3 className="w-16 h-16 text-accent mx-auto mb-4" />
                  <p className="text-gray-400 text-lg mb-2">Portfolio Performance Chart</p>
                  <p className="text-gray-500 text-sm">Interactive chart showing historical performance</p>
                </div>
              </div>
            </div>
          </div>

          {/* Asset Allocation */}
          <div className="space-y-6">
            <div className="glass-effect rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-6">Asset Allocation</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-orange-500 rounded mr-3"></div>
                    <span className="text-gray-300">Bitcoin</span>
                  </div>
                  <span className="text-white font-bold">64.1%</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-blue-500 rounded mr-3"></div>
                    <span className="text-gray-300">Ethereum</span>
                  </div>
                  <span className="text-white font-bold">26.9%</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-purple-500 rounded mr-3"></div>
                    <span className="text-gray-300">DeFi</span>
                  </div>
                  <span className="text-white font-bold">9.0%</span>
                </div>
              </div>
            </div>

            <div className="glass-effect rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-6">Top Performers</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-white font-medium">COMP</p>
                    <p className="text-gray-400 text-sm">Compound</p>
                  </div>
                  <div className="text-right">
                    <p className="text-green-400 font-bold">+24.7%</p>
                    <p className="text-gray-400 text-sm">7d</p>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-white font-medium">AAVE</p>
                    <p className="text-gray-400 text-sm">Aave</p>
                  </div>
                  <div className="text-right">
                    <p className="text-green-400 font-bold">+18.3%</p>
                    <p className="text-gray-400 text-sm">7d</p>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-white font-medium">UNI</p>
                    <p className="text-gray-400 text-sm">Uniswap</p>
                  </div>
                  <div className="text-right">
                    <p className="text-green-400 font-bold">+12.1%</p>
                    <p className="text-gray-400 text-sm">7d</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Holdings Table */}
        <div className="glass-effect rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-8">Holdings</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left text-gray-300 font-medium py-4">Asset</th>
                  <th className="text-left text-gray-300 font-medium py-4">Balance</th>
                  <th className="text-left text-gray-300 font-medium py-4">Value</th>
                  <th className="text-left text-gray-300 font-medium py-4">24h Change</th>
                  <th className="text-left text-gray-300 font-medium py-4">Allocation</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-800">
                  <td className="py-6">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center mr-4">
                        <span className="text-white font-bold">₿</span>
                      </div>
                      <div>
                        <p className="text-white font-medium">Bitcoin</p>
                        <p className="text-gray-400 text-sm">BTC</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-6 text-white">0.2847 BTC</td>
                  <td className="py-6 text-white font-bold">$8,234.50</td>
                  <td className="py-6">
                    <div className="flex items-center text-green-400">
                      <TrendingUp className="w-4 h-4 mr-1" />
                      +3.2%
                    </div>
                  </td>
                  <td className="py-6 text-gray-300">64.1%</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-6">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                        <span className="text-white font-bold">Ξ</span>
                      </div>
                      <div>
                        <p className="text-white font-medium">Ethereum</p>
                        <p className="text-gray-400 text-sm">ETH</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-6 text-white">2.4571 ETH</td>
                  <td className="py-6 text-white font-bold">$3,456.20</td>
                  <td className="py-6">
                    <div className="flex items-center text-green-400">
                      <TrendingUp className="w-4 h-4 mr-1" />
                      +7.1%
                    </div>
                  </td>
                  <td className="py-6 text-gray-300">26.9%</td>
                </tr>
                <tr>
                  <td className="py-6">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center mr-4">
                        <span className="text-white font-bold">◆</span>
                      </div>
                      <div>
                        <p className="text-white font-medium">DeFi Portfolio</p>
                        <p className="text-gray-400 text-sm">Multiple</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-6 text-white">Mixed</td>
                  <td className="py-6 text-white font-bold">$1,156.53</td>
                  <td className="py-6">
                    <div className="flex items-center text-red-400">
                      <TrendingDown className="w-4 h-4 mr-1" />
                      -1.2%
                    </div>
                  </td>
                  <td className="py-6 text-gray-300">9.0%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}