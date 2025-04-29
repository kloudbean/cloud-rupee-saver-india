
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { IndianRupee, Mail, Clock } from 'lucide-react';

const SavingsCalculator = () => {
  const [monthlySpend, setMonthlySpend] = useState<number>(500000);
  const [cloudProvider, setCloudProvider] = useState<string>('all');
  const [savings, setSavings] = useState({
    monthly: 0,
    annual: 0,
    percent: 0
  });
  
  const calculateSavings = () => {
    let savingsPercent = 0;
    
    // Different providers have slightly different savings percentages
    switch (cloudProvider) {
      case 'aws':
        savingsPercent = 32;
        break;
      case 'azure':
        savingsPercent = 30;
        break;
      case 'gcp':
        savingsPercent = 28;
        break;
      case 'all':
      default:
        savingsPercent = 30;
        break;
    }
    
    const monthlySavings = (monthlySpend * savingsPercent) / 100;
    const annualSavings = monthlySavings * 12;
    
    setSavings({
      monthly: monthlySavings,
      annual: annualSavings,
      percent: savingsPercent
    });
  };
  
  // Calculate initial savings
  useEffect(() => {
    calculateSavings();
  }, [monthlySpend, cloudProvider]);
  
  // Format number to INR
  const formatINR = (num: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(num);
  };
  
  return (
    <section id="calculator" className="py-16 md:py-24 bg-brand-gray-light">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Calculate Your <span className="text-brand-blue">Cloud Savings</span>
        </h2>
        <p className="text-lg text-center text-gray-600 max-w-2xl mx-auto mb-12">
          See how much your company can save with CloudOptimizeX. No commitment required.
        </p>
        
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8">
              <h3 className="text-xl font-semibold mb-6">Enter your details</h3>
              
              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Monthly cloud spend (INR)
                </label>
                <div className="flex items-center">
                  <div className="relative flex-1">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <IndianRupee className="h-5 w-5 text-gray-400" />
                    </div>
                    <Input
                      type="number"
                      value={monthlySpend}
                      onChange={(e) => setMonthlySpend(Number(e.target.value))}
                      className="pl-10"
                      min="0"
                    />
                  </div>
                </div>
                <Slider
                  value={[monthlySpend]}
                  min={10000}
                  max={10000000}
                  step={10000}
                  onValueChange={(value) => setMonthlySpend(value[0])}
                  className="mt-6"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>₹10,000</span>
                  <span>₹1 Crore</span>
                </div>
              </div>
              
              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Cloud provider
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {[
                    { id: 'all', name: 'All' },
                    { id: 'aws', name: 'AWS' },
                    { id: 'azure', name: 'Azure' },
                    { id: 'gcp', name: 'GCP' },
                  ].map(provider => (
                    <button
                      key={provider.id}
                      className={`py-2 px-4 rounded-md border-2 ${
                        cloudProvider === provider.id
                          ? 'bg-brand-blue text-white border-brand-blue'
                          : 'bg-white text-gray-700 border-gray-200 hover:border-brand-blue hover:text-brand-blue'
                      } transition-colors duration-200`}
                      onClick={() => setCloudProvider(provider.id)}
                    >
                      {provider.name}
                    </button>
                  ))}
                </div>
              </div>
              
              <Button className="w-full btn-secondary py-6">
                Get Detailed Savings Report
              </Button>
              
              <p className="text-center text-sm text-gray-500 mt-4">
                No credit card required. Get your free analysis within 24 hours.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-brand-blue to-brand-blue-dark text-white p-8">
              <h3 className="text-xl font-semibold mb-6">Your estimated savings</h3>
              
              <div className="space-y-8 mb-8">
                <div>
                  <p className="text-white/70 text-sm mb-1 flex items-center">
                    <Clock size={16} className="mr-1" />
                    Monthly Savings
                  </p>
                  <p className="text-3xl font-bold">{formatINR(savings.monthly)}</p>
                </div>
                
                <div>
                  <p className="text-white/70 text-sm mb-1">Annual Savings</p>
                  <p className="text-4xl font-bold">{formatINR(savings.annual)}</p>
                </div>
                
                <div className="bg-white/10 rounded-lg p-4">
                  <p className="text-center">
                    You could save <span className="text-2xl font-bold">{savings.percent}%</span> on your cloud bill
                  </p>
                </div>
              </div>
              
              <div className="pt-6 border-t border-white/20">
                <p className="font-medium mb-4">Ready to start saving?</p>
                <Button className="w-full bg-white text-brand-blue hover:bg-gray-100 flex items-center justify-center py-6">
                  <Mail size={18} className="mr-2" />
                  Book a Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SavingsCalculator;
