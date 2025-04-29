
import { Check } from 'lucide-react';

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-brand-blue text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          How <span className="text-brand-orange">CloudOptimizeX</span> Works
        </h2>
        
        <p className="text-xl text-center max-w-3xl mx-auto mb-16 text-white/80">
          Our commitment pooling model is simple yet powerful. We leverage economies of scale to pass savings directly to you.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 relative">
              <div className="absolute -top-5 -left-2 w-12 h-12 bg-brand-orange rounded-full text-white text-xl font-bold flex items-center justify-center">
                {index + 1}
              </div>
              <h3 className="text-xl font-bold mb-4 mt-3">{step.title}</h3>
              <p className="text-white/80 mb-6">{step.description}</p>
              <ul className="space-y-3">
                {step.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-2 mt-1 text-brand-orange">
                      <Check size={16} />
                    </span>
                    <span className="text-white/80">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold mb-4 text-center">Security & Compliance Guarantee</h3>
          <p className="text-lg mb-6 text-center text-white/80">
            Our platform maintains the highest security standards with SOC 2 compliance and implements least-privilege access.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="bg-white/10 p-4 rounded-lg">
              <p className="font-medium">SOC 2 Compliant</p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <p className="font-medium">ISO 27001</p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <p className="font-medium">GDPR & PDPA Ready</p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <p className="font-medium">Read-Only Access</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const steps = [
  {
    title: "Connect",
    description: "Securely link your cloud accounts with read-only access",
    benefits: [
      "No changes to your infrastructure",
      "5-minute setup process",
      "Military-grade encryption",
      "Works with AWS, Azure, and GCP",
    ]
  },
  {
    title: "Optimize",
    description: "Our platform applies discounts from our commitment pool",
    benefits: [
      "Automatic discount application",
      "No manual intervention required",
      "Real-time optimization",
      "Custom rules & policies available",
    ]
  },
  {
    title: "Save",
    description: "See immediate savings of 20-30% on your next cloud bill",
    benefits: [
      "Consolidated INR billing",
      "Transparent cost breakdown",
      "GST-compliant invoices",
      "Monthly savings reports",
    ]
  },
];

export default HowItWorks;
