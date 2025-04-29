
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, CloudOff, Cloud, Shield, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const GettingStarted = () => {
  const [currentStep, setCurrentStep] = useState(1);
  
  const steps = [
    {
      id: 1,
      name: 'Select Cloud Providers',
      description: 'Choose which cloud platforms you want to optimize'
    },
    {
      id: 2,
      name: 'Connect Accounts',
      description: 'Securely link your cloud accounts with read-only access'
    },
    {
      id: 3,
      name: 'Review Savings',
      description: 'See your projected savings and optimization plan'
    }
  ];
  
  const handleContinue = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-gradient-to-b from-brand-gray-light to-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-10">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Get started with KloudOptimizeX</h1>
              <p className="text-gray-600">Complete these simple steps to start saving on your cloud bills within minutes.</p>
            </div>
            
            {/* Step Indicator */}
            <div className="mb-12">
              <ol className="flex items-center w-full">
                {steps.map((step, index) => (
                  <li key={step.id} className="flex w-full items-center">
                    <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
                      step.id < currentStep ? 'bg-brand-blue text-white' : 
                      step.id === currentStep ? 'bg-brand-blue-light text-white' : 
                      'bg-gray-200 text-gray-600'
                    } shrink-0`}>
                      {step.id < currentStep ? (
                        <CheckCircle className="w-5 h-5" />
                      ) : (
                        <span className="text-sm font-medium">{step.id}</span>
                      )}
                    </div>
                    <div className={`flex w-full items-center ${index === steps.length - 1 ? 'hidden' : ''}`}>
                      <div className={`h-0.5 w-full ${step.id < currentStep ? 'bg-brand-blue' : 'bg-gray-200'} mx-2`}></div>
                    </div>
                    <div className={`hidden md:block ml-2 ${
                      step.id === currentStep ? 'font-medium' : 'text-gray-500'
                    }`}>
                      {step.name}
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            
            {/* Step Content */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              {currentStep === 1 && (
                <div>
                  <h2 className="text-2xl font-bold mb-6">Select your cloud providers</h2>
                  <p className="text-gray-600 mb-8">
                    Choose which cloud platforms you want KloudOptimizeX to optimize. We support multiple providers simultaneously.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
                    <div className="border-2 border-brand-blue rounded-lg p-4 flex flex-col items-center bg-brand-blue/5">
                      <div className="w-16 h-16 mb-4 flex items-center justify-center">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" alt="AWS" className="w-12 h-12" />
                      </div>
                      <h3 className="font-medium mb-2">Amazon Web Services</h3>
                      <div className="mt-auto pt-4">
                        <div className="w-6 h-6 rounded-full bg-brand-blue flex items-center justify-center">
                          <CheckCircle className="text-white" size={14} />
                        </div>
                      </div>
                    </div>
                    
                    <div className="border-2 border-brand-blue rounded-lg p-4 flex flex-col items-center bg-brand-blue/5">
                      <div className="w-16 h-16 mb-4 flex items-center justify-center">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg" alt="Azure" className="w-12 h-12" />
                      </div>
                      <h3 className="font-medium mb-2">Microsoft Azure</h3>
                      <div className="mt-auto pt-4">
                        <div className="w-6 h-6 rounded-full bg-brand-blue flex items-center justify-center">
                          <CheckCircle className="text-white" size={14} />
                        </div>
                      </div>
                    </div>
                    
                    <div className="border-2 border-gray-200 rounded-lg p-4 flex flex-col items-center hover:border-brand-blue hover:bg-brand-blue/5 transition-colors duration-200 cursor-pointer">
                      <div className="w-16 h-16 mb-4 flex items-center justify-center">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg" alt="GCP" className="w-12 h-12" />
                      </div>
                      <h3 className="font-medium mb-2">Google Cloud Platform</h3>
                      <div className="mt-auto pt-4">
                        <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center">
                          <span className="text-gray-600 font-medium text-xs">+</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center pt-4 border-t">
                    <div className="text-gray-500">2/3 providers selected</div>
                    <Button onClick={handleContinue} className="bg-brand-blue hover:bg-brand-blue-dark text-white flex items-center">
                      Continue
                      <ArrowRight className="ml-2" size={16} />
                    </Button>
                  </div>
                </div>
              )}
              
              {currentStep === 2 && (
                <div>
                  <h2 className="text-2xl font-bold mb-6">Connect your accounts</h2>
                  <p className="text-gray-600 mb-8">
                    Follow these steps to securely connect your cloud accounts. We use read-only access to analyze your usage.
                  </p>
                  
                  <div className="space-y-6 mb-8">
                    <div className="border border-gray-200 rounded-lg p-6">
                      <div className="flex items-start">
                        <div className="mr-4">
                          <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" alt="AWS" className="w-8 h-8" />
                        </div>
                        <div>
                          <h3 className="font-medium mb-2">Connect Amazon Web Services</h3>
                          <div className="space-y-4 mt-4">
                            <div className="flex items-start">
                              <div className="mr-3 mt-1">
                                <Shield className="text-brand-blue" size={16} />
                              </div>
                              <div>
                                <p className="text-sm">Create a read-only IAM role in your AWS account</p>
                                <p className="text-xs text-gray-500 mt-1">This allows secure access without compromising control</p>
                              </div>
                            </div>
                            <div className="flex items-start">
                              <div className="mr-3 mt-1">
                                <CloudOff className="text-brand-blue" size={16} />
                              </div>
                              <div>
                                <p className="text-sm">No modifications to your infrastructure</p>
                                <p className="text-xs text-gray-500 mt-1">We only read billing and usage data without touching resources</p>
                              </div>
                            </div>
                            <div className="flex items-start">
                              <div className="mr-3 mt-1">
                                <Clock className="text-brand-blue" size={16} />
                              </div>
                              <div>
                                <p className="text-sm">Takes less than 5 minutes to complete</p>
                                <p className="text-xs text-gray-500 mt-1">Quick setup with our step-by-step guide</p>
                              </div>
                            </div>
                          </div>
                          <Button className="mt-6 bg-brand-blue hover:bg-brand-blue-dark text-white">
                            Connect AWS Account
                          </Button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-6">
                      <div className="flex items-start">
                        <div className="mr-4">
                          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg" alt="Azure" className="w-8 h-8" />
                        </div>
                        <div>
                          <h3 className="font-medium mb-2">Connect Microsoft Azure</h3>
                          <div className="space-y-4 mt-4">
                            <div className="flex items-start">
                              <div className="mr-3 mt-1">
                                <Shield className="text-brand-blue" size={16} />
                              </div>
                              <div>
                                <p className="text-sm">Set up read-only access to your Azure subscription</p>
                                <p className="text-xs text-gray-500 mt-1">Securely connect without administrative permissions</p>
                              </div>
                            </div>
                            <div className="flex items-start">
                              <div className="mr-3 mt-1">
                                <Cloud className="text-brand-blue" size={16} />
                              </div>
                              <div>
                                <p className="text-sm">Monitor both resources and reservations</p>
                                <p className="text-xs text-gray-500 mt-1">Comprehensive view for maximum savings potential</p>
                              </div>
                            </div>
                          </div>
                          <Button className="mt-6 bg-brand-blue hover:bg-brand-blue-dark text-white">
                            Connect Azure Account
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center pt-4 border-t">
                    <Button variant="outline" onClick={() => setCurrentStep(1)}>
                      Back
                    </Button>
                    <Button onClick={handleContinue} className="bg-brand-blue hover:bg-brand-blue-dark text-white flex items-center">
                      Continue
                      <ArrowRight className="ml-2" size={16} />
                    </Button>
                  </div>
                </div>
              )}
              
              {currentStep === 3 && (
                <div>
                  <h2 className="text-2xl font-bold mb-6">Review your savings potential</h2>
                  <p className="text-gray-600 mb-8">
                    Based on our initial analysis, here's what you could save with KloudOptimizeX.
                  </p>
                  
                  <div className="bg-gradient-to-br from-brand-blue/10 to-brand-blue/5 rounded-xl p-6 mb-8">
                    <h3 className="text-xl font-medium mb-4">Estimated Monthly Savings</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <div className="mb-4">
                          <p className="text-sm text-gray-600 mb-1">AWS Current Monthly Spend</p>
                          <p className="text-2xl font-bold">₹5,80,000</p>
                        </div>
                        <div className="mb-4">
                          <p className="text-sm text-gray-600 mb-1">Azure Current Monthly Spend</p>
                          <p className="text-2xl font-bold">₹4,25,000</p>
                        </div>
                        <div className="mb-4">
                          <p className="text-sm text-gray-600 mb-1">Total Cloud Spend</p>
                          <p className="text-2xl font-bold">₹10,05,000</p>
                        </div>
                      </div>
                      
                      <div className="bg-white rounded-lg p-6 shadow-sm">
                        <div className="mb-4">
                          <p className="text-sm text-gray-600 mb-1">Estimated Monthly Savings</p>
                          <p className="text-3xl font-bold text-brand-blue">₹3,01,500</p>
                          <p className="text-brand-orange font-medium">30% of your current spend</p>
                        </div>
                        <div className="mb-4">
                          <p className="text-sm text-gray-600 mb-1">Your Share (70%)</p>
                          <p className="text-2xl font-bold">₹2,11,050</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600 mb-1">KloudOptimizeX Fee (30%)</p>
                          <p className="text-lg">₹90,450</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-brand-orange/10 rounded-lg p-4 mb-8">
                    <div className="flex items-start">
                      <div className="text-brand-orange mr-3 mt-1">
                        <CheckCircle size={20} />
                      </div>
                      <p className="text-gray-800">
                        <span className="font-medium">Pay only for results:</span> Our fee is only applied to validated savings. If you don't save, you don't pay.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center pt-4 border-t">
                    <Button variant="outline" onClick={() => setCurrentStep(2)}>
                      Back
                    </Button>
                    <Button className="bg-brand-orange hover:bg-brand-orange-dark text-white flex items-center">
                      Activate Savings
                      <ArrowRight className="ml-2" size={16} />
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default GettingStarted;
