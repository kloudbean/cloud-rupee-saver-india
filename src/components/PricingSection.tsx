
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const PricingSection = () => {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Transparent <span className="text-brand-blue">Value-Based</span> Pricing
        </h2>
        <p className="text-lg text-center text-gray-600 max-w-2xl mx-auto mb-12">
          We only succeed when you save. Our simple pricing model ensures we're always aligned with your goals.
        </p>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-brand-blue to-brand-blue-dark rounded-2xl overflow-hidden shadow-xl">
            <div className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="mb-8 md:mb-0 md:mr-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Percentage of Savings Model</h3>
                  <p className="text-white/80 text-lg mb-6">
                    We charge only a percentage of what we save you. No savings means no fee.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Check className="text-brand-orange mr-3 flex-shrink-0" />
                      <p className="text-white">You keep 70% of all cloud savings</p>
                    </div>
                    <div className="flex items-center">
                      <Check className="text-brand-orange mr-3 flex-shrink-0" />
                      <p className="text-white">We retain just 30% as our service fee</p>
                    </div>
                    <div className="flex items-center">
                      <Check className="text-brand-orange mr-3 flex-shrink-0" />
                      <p className="text-white">No upfront costs or implementation fees</p>
                    </div>
                    <div className="flex items-center">
                      <Check className="text-brand-orange mr-3 flex-shrink-0" />
                      <p className="text-white">Zero risk - you only pay when you save</p>
                    </div>
                    <div className="flex items-center">
                      <Check className="text-brand-orange mr-3 flex-shrink-0" />
                      <p className="text-white">Monthly billing with detailed savings reports</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/10 rounded-xl p-6 text-center w-full md:w-auto">
                  <div className="mb-4">
                    <p className="text-white/80 text-sm">Average Monthly Savings</p>
                    <p className="text-4xl font-bold text-white">25-40%</p>
                  </div>
                  <div className="w-full h-px bg-white/20 my-4"></div>
                  <div className="mb-6">
                    <p className="text-white/80 text-sm">Your Share of Savings</p>
                    <p className="text-4xl font-bold text-white">70%</p>
                  </div>
                  <Button className="w-full bg-brand-orange hover:bg-brand-orange-dark text-white">
                    Calculate Your Savings
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="bg-brand-blue-dark/50 p-6 text-center">
              <p className="text-white">
                Enterprise customers with ₹50 lakh+ monthly cloud spend? 
                <Button variant="link" className="text-brand-orange hover:text-brand-orange-light ml-2">
                  Contact us for custom pricing
                </Button>
              </p>
            </div>
          </div>
          
          <div className="mt-12 bg-gray-50 rounded-lg p-6">
            <h4 className="font-semibold text-xl mb-4 text-center">Why Our Pricing Model Works</h4>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Check className="text-brand-blue" size={24} />
                </div>
                <h5 className="font-medium mb-2">Perfect Alignment</h5>
                <p className="text-gray-600 text-sm">We only make money when you save money, creating perfect incentive alignment</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Check className="text-brand-blue" size={24} />
                </div>
                <h5 className="font-medium mb-2">Zero Risk</h5>
                <p className="text-gray-600 text-sm">No upfront fees, contracts, or commitments. You only pay on validated savings</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Check className="text-brand-blue" size={24} />
                </div>
                <h5 className="font-medium mb-2">Continuous Improvement</h5>
                <p className="text-gray-600 text-sm">We're motivated to keep finding new ways to optimize your cloud spend</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
