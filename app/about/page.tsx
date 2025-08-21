import Navigation from '@/components/Navigation';
import { Shield, Zap, Target, Users, Award, Globe } from 'lucide-react';

export const metadata = {
  title: 'About Us - DeFi Asset Defense',
  description: 'Learn about our mission to protect and optimize DeFi portfolios through intelligent asset management and cutting-edge technology.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">About DeFi Asset Defense</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              We're pioneering the future of decentralized finance through intelligent asset management, 
              cutting-edge security protocols, and user-centric design that makes DeFi accessible to everyone.
            </p>
          </div>

          {/* Mission Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">Our Mission</h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                To democratize access to advanced DeFi strategies while providing institutional-grade security 
                and performance optimization for individual investors and organizations alike.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                We believe that sophisticated financial tools shouldn't be limited to traditional institutions. 
                Through innovative technology and user-focused design, we're building the infrastructure that 
                will power the next generation of decentralized finance.
              </p>
            </div>
            
            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Platform Stats</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">$2.4B+</div>
                  <div className="text-sm text-gray-400">Total Value Secured</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">50K+</div>
                  <div className="text-sm text-gray-400">Active Users</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">98.5%</div>
                  <div className="text-sm text-gray-400">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-500 mb-2">24/7</div>
                  <div className="text-sm text-gray-400">Support</div>
                </div>
              </div>
            </div>
          </div>

          {/* Core Values */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-center text-white mb-12">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ValueCard 
                icon={<Shield className="w-8 h-8 text-accent" />}
                title="Security First"
                description="Every protocol integration undergoes rigorous security audits and continuous monitoring to protect your assets."
              />
              <ValueCard 
                icon={<Zap className="w-8 h-8 text-primary" />}
                title="Innovation"
                description="We continuously push the boundaries of what's possible in DeFi, delivering cutting-edge features and optimizations."
              />
              <ValueCard 
                icon={<Target className="w-8 h-8 text-secondary" />}
                title="User-Centric"
                description="Every decision is made with our users in mind, ensuring the best possible experience and outcomes."
              />
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-center text-white mb-12">Meet the Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <TeamMember 
                name="Sarah Chen"
                role="CEO & Co-Founder"
                bio="Former Goldman Sachs quantitative analyst with 10+ years in traditional finance and DeFi protocol design."
                image="https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=400&h=400&fit=crop&auto=format,compress"
              />
              <TeamMember 
                name="Marcus Rodriguez"
                role="CTO & Co-Founder"
                bio="Ex-Google software engineer specializing in blockchain infrastructure and smart contract security."
                image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&auto=format,compress"
              />
              <TeamMember 
                name="Dr. Aisha Patel"
                role="Head of Research"
                bio="PhD in Cryptography from MIT, leading research in zero-knowledge proofs and privacy-preserving DeFi protocols."
                image="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&auto=format,compress"
              />
            </div>
          </div>

          {/* Technology Stack */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-center text-white mb-12">Built on Cutting-Edge Technology</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="glass-effect rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center space-x-3">
                  <Globe className="w-8 h-8 text-primary" />
                  <span>Blockchain Integration</span>
                </h3>
                <div className="space-y-4">
                  <TechItem name="Ethereum" description="Primary network for core DeFi protocols" />
                  <TechItem name="Polygon" description="Layer 2 scaling for reduced gas fees" />
                  <TechItem name="Arbitrum" description="Optimistic rollup for faster transactions" />
                  <TechItem name="Cosmos" description="Cross-chain interoperability" />
                </div>
              </div>

              <div className="glass-effect rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center space-x-3">
                  <Award className="w-8 h-8 text-accent" />
                  <span>Security Infrastructure</span>
                </h3>
                <div className="space-y-4">
                  <TechItem name="Multi-Signature Wallets" description="Enhanced security for asset management" />
                  <TechItem name="Time-Lock Contracts" description="Delayed execution for critical operations" />
                  <TechItem name="Formal Verification" description="Mathematical proof of smart contract correctness" />
                  <TechItem name="Real-Time Monitoring" description="24/7 anomaly detection and response" />
                </div>
              </div>
            </div>
          </div>

          {/* Partnerships */}
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-12">Trusted Partners</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
              <PartnerLogo name="Chainlink" />
              <PartnerLogo name="Compound" />
              <PartnerLogo name="Uniswap" />
              <PartnerLogo name="Aave" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function ValueCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="glass-effect rounded-2xl p-8 text-center card-hover">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
      <p className="text-gray-300 leading-relaxed">{description}</p>
    </div>
  );
}

function TeamMember({ name, role, bio, image }: { name: string; role: string; bio: string; image: string }) {
  return (
    <div className="glass-effect rounded-2xl p-8 text-center card-hover">
      <img 
        src={image} 
        alt={name}
        className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
      />
      <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
      <div className="text-accent font-medium mb-4">{role}</div>
      <p className="text-gray-300 text-sm leading-relaxed">{bio}</p>
    </div>
  );
}

function TechItem({ name, description }: { name: string; description: string }) {
  return (
    <div className="flex items-start space-x-3">
      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
      <div>
        <div className="text-white font-medium">{name}</div>
        <div className="text-gray-400 text-sm">{description}</div>
      </div>
    </div>
  );
}

function PartnerLogo({ name }: { name: string }) {
  return (
    <div className="h-16 bg-white/10 rounded-lg flex items-center justify-center">
      <span className="text-white font-bold text-lg">{name}</span>
    </div>
  );
}