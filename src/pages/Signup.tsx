
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { ArrowRight, Mail, Shield, Check } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center bg-gradient-to-b from-brand-gray-light to-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <div className="flex mb-6">
                <div className="w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center mr-4">
                  <Shield className="text-brand-blue" />
                </div>
                <div className="w-12 h-12 rounded-full bg-brand-orange/10 flex items-center justify-center mr-4">
                  <Mail className="text-brand-orange" />
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Start your cloud savings journey today
              </h1>
              
              <p className="text-lg text-gray-600 mb-8">
                Join hundreds of companies already saving up to 30% on their cloud bills with KloudOptimizeX.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="mt-1 mr-3">
                    <Check className="text-brand-blue" size={20} />
                  </div>
                  <p>Read-only access ensures your infrastructure remains untouched and secure</p>
                </div>
                <div className="flex items-start">
                  <div className="mt-1 mr-3">
                    <Check className="text-brand-blue" size={20} />
                  </div>
                  <p>Set up in minutes without disrupting your operations or requiring meetings</p>
                </div>
                <div className="flex items-start">
                  <div className="mt-1 mr-3">
                    <Check className="text-brand-blue" size={20} />
                  </div>
                  <p>Only pay for validated savings — absolutely zero risk to your organization</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                <p className="font-medium text-gray-800">
                  "KloudOptimizeX helped us reduce our AWS and Azure costs by 32% within the first month. Implementing it was a 10-minute process with zero disruption."
                </p>
                <div className="mt-3 flex items-center">
                  <div className="w-8 h-8 bg-gray-300 rounded-full mr-3"></div>
                  <div>
                    <p className="font-medium">Rajesh Sharma</p>
                    <p className="text-sm text-gray-500">CTO, TechSpark Solutions</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
              <h2 className="text-2xl font-bold mb-6">Create your account</h2>
              
              <form className="space-y-6">
                <Button variant="outline" className="w-full flex items-center justify-center border-gray-300 text-gray-700 py-6">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google" className="w-5 h-5 mr-3" />
                  Continue with Google
                </Button>
                
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-white text-gray-500">OR</span>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Work Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="py-6"
                  />
                </div>
                
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                    Password
                  </label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Create a strong password"
                    className="py-6"
                  />
                </div>
                
                <Button type="submit" className="w-full bg-brand-blue hover:bg-brand-blue-dark text-white py-6">
                  Create Account
                </Button>
                
                <p className="text-center text-sm text-gray-500">
                  By signing up, you agree to our{" "}
                  <Link to="#" className="text-brand-blue hover:underline">Terms of Service</Link> and{" "}
                  <Link to="#" className="text-brand-blue hover:underline">Privacy Policy</Link>
                </p>
              </form>
              
              <div className="mt-8 text-center">
                <p>
                  Already have an account?{" "}
                  <Link to="/login" className="text-brand-blue font-medium hover:underline">
                    Sign in
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Signup;
