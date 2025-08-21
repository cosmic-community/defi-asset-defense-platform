import { Shield, Target, Users, Zap, Award, Globe } from 'lucide-react';

export const metadata = {
  title: 'About - DeFi Asset Defense Platform',
  description: 'Learn about our mission to democratize DeFi portfolio management',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">About DeFi Defense</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We're building the future of decentralized finance with intelligent asset management and defense strategies.
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Our Mission
            </h2>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              To democratize access to sophisticated DeFi portfolio management tools, empowering individuals 
              and institutions to protect and grow their digital assets through intelligent automation and 
              real-time market insights.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              We believe that everyone deserves access to institutional-grade DeFi strategies, not just 
              the privileged few. Our platform levels the playing field by providing advanced analytics, 
              automated defense mechanisms, and seamless protocol integration.
            </p>
          </div>
          <div className="glass-effect rounded-2xl p-8">
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <Shield className="w-12 h-12 text-accent mx-auto mb-3" />
                <h3 className="text-2xl font-bold text-white mb-2">98.2%</h3>
                <p className="text-gray-400 text-sm">Success Rate</p>
              </div>
              <div className="text-center">
                <Users className="w-12 h-12 text-primary mx-auto mb-3" />
                <h3 className="text-2xl font-bold text-white mb-2">50K+</h3>
                <p className="text-gray-400 text-sm">Active Users</p>
              </div>
              <div className="text-center">
                <Globe className="w-12 h-12 text-blue-400 mx-auto mb-3" />
                <h3 className="text-2xl font-bold text-white mb-2">120+</h3>
                <p className="text-gray-400 text-sm">Countries</p>
              </div>
              <div className="text-center">
                <Award className="w-12 h-12 text-yellow-400 mx-auto mb-3" />
                <h3 className="text-2xl font-bold text-white mb-2">$2.1B</h3>
                <p className="text-gray-400 text-sm">Assets Secured</p>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-effect rounded-2xl p-8 text-center hover:scale-105 transition-transform duration-300">
              <Shield className="w-16 h-16 text-accent mx-auto mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">Security First</h3>
              <p className="text-gray-300 leading-relaxed">
                Every feature is built with security as the top priority. Multi-signature wallets, 
                smart contract audits, and advanced encryption protect your assets.
              </p>
            </div>

            <div className="glass-effect rounded-2xl p-8 text-center hover:scale-105 transition-transform duration-300">
              <Zap className="w-16 h-16 text-primary mx-auto mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">Innovation</h3>
              <p className="text-gray-300 leading-relaxed">
                Cutting-edge algorithms and machine learning models provide real-time market analysis 
                and automated defense strategies that adapt to market conditions.
              </p>
            </div>

            <div className="glass-effect rounded-2xl p-8 text-center hover:scale-105 transition-transform duration-300">
              <Target className="w-16 h-16 text-blue-400 mx-auto mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">Transparency</h3>
              <p className="text-gray-300 leading-relaxed">
                Open-source smart contracts, real-time reporting, and complete transaction 
                visibility ensure you always know exactly what's happening with your assets.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
            Leadership Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="glass-effect rounded-2xl p-6 text-center">
              <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">AS</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Alex Smith</h3>
              <p className="text-accent mb-3">CEO & Co-Founder</p>
              <p className="text-gray-300 text-sm">
                Former Goldman Sachs quant with 10+ years in algorithmic trading and DeFi protocol development.
              </p>
            </div>

            <div className="glass-effect rounded-2xl p-6 text-center">
              <div className="w-24 h-24 bg-gradient-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">MJ</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Maria Johnson</h3>
              <p className="text-accent mb-3">CTO & Co-Founder</p>
              <p className="text-gray-300 text-sm">
                Ethereum Foundation veteran and lead architect of several major DeFi protocols with proven security record.
              </p>
            </div>

            <div className="glass-effect rounded-2xl p-6 text-center">
              <div className="w-24 h-24 bg-gradient-success rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">DL</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">David Lee</h3>
              <p className="text-accent mb-3">Head of Security</p>
              <p className="text-gray-300 text-sm">
                Cybersecurity expert with extensive experience in blockchain security audits and penetration testing.
              </p>
            </div>
          </div>
        </div>

        {/* Technology Section */}
        <div className="glass-effect rounded-2xl p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Built on Cutting-Edge Technology
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our platform leverages the latest in blockchain technology, machine learning, 
              and decentralized finance protocols.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-400 text-2xl font-bold">Ξ</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Ethereum</h3>
              <p className="text-gray-400 text-sm">Smart contract foundation</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-400 text-2xl font-bold">◆</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Layer 2</h3>
              <p className="text-gray-400 text-sm">Optimized scaling</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">AI/ML</h3>
              <p className="text-gray-400 text-sm">Intelligent automation</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-orange-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Security</h3>
              <p className="text-gray-400 text-sm">Multi-layer protection</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}