
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-b from-brand-gray-light to-white pt-12 pb-16 md:pt-20 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 md:pr-8 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="gradient-text">Cut Your Cloud Bills by 30%</span> Without&nbsp;Commitments
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              India's first cloud cost optimization platform with INR billing and zero lock-in. Save on AWS, Azure, and GCP without sacrificing flexibility.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button className="btn-primary text-lg py-6 px-8 flex items-center">
                Calculate Your Savings
                <ArrowRight size={20} className="ml-2" />
              </Button>
              <Button variant="outline" className="border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white text-lg py-6 px-8">
                Book a Demo
              </Button>
            </div>
            <div className="mt-8 flex items-center">
              <p className="text-brand-blue-dark font-medium mr-4">Trusted by leading Indian companies</p>
              <div className="flex space-x-4 opacity-70">
                <div className="w-16 h-8 bg-gray-300 rounded"></div>
                <div className="w-16 h-8 bg-gray-300 rounded"></div>
                <div className="w-16 h-8 bg-gray-300 rounded"></div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="bg-white rounded-xl shadow-xl p-6 animate-float">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="text-xl font-bold text-brand-blue">Cloud Savings Dashboard</h3>
                  <p className="text-gray-600">Real-time optimization</p>
                </div>
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  30% Savings
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">AWS Costs</span>
                    <div className="flex items-center">
                      <span className="line-through text-gray-500 mr-2">₹5,80,000</span>
                      <span className="text-brand-blue font-bold">₹3,94,400</span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-brand-blue h-2 rounded-full" style={{ width: '68%' }}></div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Azure Costs</span>
                    <div className="flex items-center">
                      <span className="line-through text-gray-500 mr-2">₹4,25,000</span>
                      <span className="text-brand-blue font-bold">₹2,97,500</span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-brand-blue h-2 rounded-full" style={{ width: '70%' }}></div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">GCP Costs</span>
                    <div className="flex items-center">
                      <span className="line-through text-gray-500 mr-2">₹2,40,000</span>
                      <span className="text-brand-blue font-bold">₹1,67,000</span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-brand-blue h-2 rounded-full" style={{ width: '69%' }}></div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 border-t pt-4 flex justify-between items-center">
                <div>
                  <p className="text-gray-600">Monthly Savings</p>
                  <p className="text-2xl font-bold text-brand-orange">₹3,86,100</p>
                </div>
                <Button className="btn-secondary">View Details</Button>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-brand-orange opacity-10 rounded-full"></div>
            <div className="absolute -top-6 -left-6 w-16 h-16 bg-brand-blue opacity-10 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
