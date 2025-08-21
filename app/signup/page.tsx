'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import { Mail, Lock, User, ArrowRight, Shield, Zap, Target, Check } from 'lucide-react';

export default function SignupPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false,
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setCurrentStep(3); // Success step
    setIsSubmitting(false);
  };

  const nextStep = () => {
    if (currentStep < 2) {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Side - Benefits */}
            <div className="space-y-8">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                  <span className="text-gradient">Get Started</span>
                </h1>
                <p className="text-xl text-gray-300">
                  Join thousands of users already protecting and optimizing their DeFi portfolios
                </p>
              </div>

              <div className="space-y-6">
                <BenefitItem 
                  icon={<Shield className="w-6 h-6 text-accent" />}
                  title="Bank-Grade Security"
                  description="Multi-signature wallets and institutional-grade security protocols"
                />
                <BenefitItem 
                  icon={<Zap className="w-6 h-6 text-primary" />}
                  title="Automated Optimization"
                  description="AI-powered portfolio optimization and yield farming strategies"
                />
                <BenefitItem 
                  icon={<Target className="w-6 h-6 text-secondary" />}
                  title="Real-Time Analytics"
                  description="Comprehensive dashboard with live performance metrics"
                />
              </div>

              <div className="glass-effect rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">What You Get</h3>
                <div className="space-y-3">
                  <CheckItem text="$100K insurance coverage per account" />
                  <CheckItem text="Access to 50+ DeFi protocols" />
                  <CheckItem text="24/7 customer support" />
                  <CheckItem text="Advanced portfolio analytics" />
                  <CheckItem text="Automated risk management" />
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="glass-effect rounded-2xl p-8">
              {currentStep === 1 && (
                <AccountDetailsStep 
                  formData={formData}
                  onChange={handleInputChange}
                  onNext={nextStep}
                />
              )}
              
              {currentStep === 2 && (
                <SecurityStep 
                  formData={formData}
                  onChange={handleInputChange}
                  onSubmit={handleSubmit}
                  isSubmitting={isSubmitting}
                />
              )}

              {currentStep === 3 && <SuccessStep />}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function BenefitItem({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0 p-2 rounded-lg glass-effect">{icon}</div>
      <div>
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
}

function CheckItem({ text }: { text: string }) {
  return (
    <div className="flex items-center space-x-3">
      <Check className="w-5 h-5 text-accent flex-shrink-0" />
      <span className="text-gray-300">{text}</span>
    </div>
  );
}

interface FormProps {
  formData: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
    acceptTerms: boolean;
  };
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function AccountDetailsStep({ formData, onChange, onNext }: FormProps & { onNext: () => void }) {
  const isValid = formData.firstName && formData.lastName && formData.email;

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white mb-2">Create Your Account</h2>
        <p className="text-gray-400">Step 1 of 2: Basic Information</p>
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              First Name
            </label>
            <div className="relative">
              <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={onChange}
                className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary focus:bg-white/20 transition-colors"
                placeholder="John"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Last Name
            </label>
            <div className="relative">
              <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={onChange}
                className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary focus:bg-white/20 transition-colors"
                placeholder="Doe"
              />
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Email Address
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={onChange}
              className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary focus:bg-white/20 transition-colors"
              placeholder="john@example.com"
            />
          </div>
        </div>

        <button
          onClick={onNext}
          disabled={!isValid}
          className="w-full bg-gradient-primary text-white py-3 px-6 rounded-lg font-semibold hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center space-x-2"
        >
          <span>Continue</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

function SecurityStep({ formData, onChange, onSubmit, isSubmitting }: FormProps & { onSubmit: (e: React.FormEvent) => void; isSubmitting: boolean }) {
  const isValid = formData.password && formData.confirmPassword && formData.password === formData.confirmPassword && formData.acceptTerms;

  return (
    <form onSubmit={onSubmit}>
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white mb-2">Secure Your Account</h2>
        <p className="text-gray-400">Step 2 of 2: Password & Security</p>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Password
          </label>
          <div className="relative">
            <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={onChange}
              className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary focus:bg-white/20 transition-colors"
              placeholder="Create a strong password"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Confirm Password
          </label>
          <div className="relative">
            <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={onChange}
              className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary focus:bg-white/20 transition-colors"
              placeholder="Confirm your password"
            />
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <input
            type="checkbox"
            name="acceptTerms"
            id="acceptTerms"
            checked={formData.acceptTerms}
            onChange={onChange}
            className="mt-1 w-5 h-5 text-primary bg-white/10 border-white/20 rounded focus:ring-primary focus:ring-2"
          />
          <label htmlFor="acceptTerms" className="text-sm text-gray-300 leading-relaxed">
            I agree to the <a href="#" className="text-primary hover:underline">Terms of Service</a> and 
            <a href="#" className="text-primary hover:underline"> Privacy Policy</a>. I understand that my funds 
            will be secured using industry-standard encryption and security protocols.
          </label>
        </div>

        <button
          type="submit"
          disabled={!isValid || isSubmitting}
          className="w-full bg-gradient-primary text-white py-3 px-6 rounded-lg font-semibold hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center space-x-2"
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              <span>Creating Account...</span>
            </>
          ) : (
            <>
              <span>Create Account</span>
              <ArrowRight className="w-5 h-5" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}

function SuccessStep() {
  return (
    <div className="text-center">
      <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-8">
        <Check className="w-10 h-10 text-white" />
      </div>
      
      <h2 className="text-3xl font-bold text-white mb-4">Welcome to DeFi Asset Defense!</h2>
      <p className="text-gray-300 mb-8">
        Your account has been successfully created. You can now start securing and optimizing your DeFi portfolio.
      </p>

      <div className="space-y-4">
        <button className="w-full bg-gradient-primary text-white py-3 px-6 rounded-lg font-semibold hover:scale-105 transition-transform">
          Access Your Dashboard
        </button>
        
        <button className="w-full glass-effect text-white py-3 px-6 rounded-lg font-semibold hover:bg-white/10 transition-colors">
          Complete Profile Setup
        </button>
      </div>

      <div className="mt-8 p-4 bg-white/5 rounded-lg text-left">
        <h4 className="font-semibold text-white mb-2">Next Steps:</h4>
        <ul className="text-sm text-gray-300 space-y-1">
          <li>• Verify your email address</li>
          <li>• Connect your wallet</li>
          <li>• Set up security preferences</li>
          <li>• Explore available protocols</li>
        </ul>
      </div>
    </div>
  );
}