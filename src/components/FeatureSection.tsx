
import { Shield, IndianRupee, Clock } from 'lucide-react';

const FeatureSection = () => {
  return (
    <section id="features" className="section-container">
      <h2 className="section-title">
        Why Indian Companies <span className="text-brand-blue">Choose Us</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
      
      <div className="mt-20 p-8 bg-brand-gray-light rounded-2xl">
        <h3 className="text-2xl font-bold text-center mb-6">Designed for the Indian Market</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {indiaFeatures.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 mb-4 rounded-full flex items-center justify-center bg-brand-blue/10 text-brand-blue">
                <feature.icon size={24} />
              </div>
              <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ title, description, image, gradient }: {
  title: string;
  description: string;
  image: string;
  gradient: string;
}) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className={`h-48 ${gradient} flex items-center justify-center`}>
        <div className="w-32 h-32 bg-gray-200 rounded-md"></div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const features = [
  {
    title: "No Commitments Required",
    description: "Get all the benefits of Reserved Instances and Savings Plans without making any long-term commitments.",
    image: "reserved-instances.svg",
    gradient: "bg-gradient-to-r from-blue-50 to-blue-100"
  },
  {
    title: "30% Average Savings",
    description: "Our customers save an average of 30% on their monthly cloud bills across AWS, Azure, and GCP.",
    image: "savings-graph.svg",
    gradient: "bg-gradient-to-r from-orange-50 to-orange-100"
  },
  {
    title: "5-Minute Integration",
    description: "Connect your cloud accounts in minutes with our secure, read-only integration. No changes to your infrastructure.",
    image: "quick-integration.svg",
    gradient: "bg-gradient-to-r from-green-50 to-green-100"
  }
];

const indiaFeatures = [
  {
    icon: IndianRupee,
    title: "INR Billing",
    description: "Get consolidated bills in INR with no currency fluctuation risk."
  },
  {
    icon: Shield,
    title: "GST Compliance",
    description: "Complete GST reconciliation and reporting built-in."
  },
  {
    icon: Clock,
    title: "Indian Business Hours",
    description: "Support available during IST working hours."
  },
  {
    title: "Multiple Languages",
    icon: () => (<span className="text-lg font-bold">हि</span>),
    description: "Support in English, Hindi and regional languages."
  }
];

export default FeatureSection;
