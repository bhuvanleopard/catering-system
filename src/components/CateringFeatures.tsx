import React from 'react';
import { 
  Calculator, 
  LayoutDashboard, 
  Salad, 
  Users, 
  CheckCircle, 
  Printer 
} from 'lucide-react';

/*
----------------------------------------------------------------------
 MOCK UI COMPONENTS (Internal)
 (These are just for visual representation, as requested)
----------------------------------------------------------------------
*/

/**
 * Mock UI for the Dynamic Pricing Engine
 */
const DynamicPricingMock: React.FC = () => (
  <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-xl transform transition-all hover:scale-105 duration-300">
    <h4 className="font-semibold text-lg text-gray-800 mb-4">Get an Instant Quote</h4>
    <div className="space-y-4">
      <div>
        <label htmlFor="guest-count" className="block text-sm font-medium text-gray-700">
          Guest Count
        </label>
        <div className="flex items-center mt-1">
          <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm h-10">
            <Users className="w-4 h-4" />
          </span>
          <input 
            type="text" 
            id="guest-count"
            value="75" 
            readOnly 
            className="flex-1 block w-full rounded-none border-gray-300 text-center h-10" 
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Dietary Needs</label>
        <div className="flex flex-wrap gap-2 mt-2">
          <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">Vegan (12)</span>
          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Gluten-Free (5)</span>
        </div>
      </div>
      <div className="pt-4 border-t border-gray-200">
        <p className="text-sm text-gray-500">Total Estimate:</p>
        <p className="text-3xl font-bold text-indigo-600">$3,120.00</p>
      </div>
    </div>
  </div>
);

/**
 * Mock UI for the Admin Dashboard
 */
const AdminDashboardMock: React.FC = () => (
  <div className="w-full max-w-md bg-white rounded-lg shadow-xl transform transition-all hover:scale-105 duration-300 overflow-hidden">
    <div className="p-4 bg-gray-800 text-white flex justify-between items-center">
      <h4 className="font-semibold">Admin Dashboard</h4>
      <LayoutDashboard className="w-5 h-5" />
    </div>
    <ul className="divide-y divide-gray-200">
      <li className="p-4 flex justify-between items-center hover:bg-gray-50">
        <div>
          <span className="font-medium text-gray-900">Order #1024 (Pending)</span>
          <p className="text-sm text-gray-600">Client: Bhuvan Gupta</p>
        </div>
        <span className="text-sm text-yellow-600 font-medium">CRM</span>
      </li>
      <li className="p-4 flex justify-between items-center hover:bg-gray-50">
        <div>
          <span className="font-medium text-gray-900">Order #1023 (Confirmed)</span>
          <p className="text-sm text-gray-600">Client: Acme Inc.</p>
        </div>
        <span className="text-sm text-green-600 font-medium">CRM</span>
      </li>
      <li className="p-4 flex justify-between items-center bg-indigo-50 hover:bg-indigo-100">
        <span className="font-medium text-indigo-800">KOT: Order #1023 Kitchen</span>
        <button className="text-xs bg-indigo-600 text-white px-3 py-1 rounded-full flex items-center space-x-1">
          <Printer className="w-3 h-3" />
          <span>Generate</span>
        </button>
      </li>
    </ul>
  </div>
);

/**
 * Mock UI for the Interactive Menu Builder
 */
const MenuBuilderMock: React.FC = () => (
  <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-xl transform transition-all hover:scale-105 duration-300">
    <h4 className="font-semibold text-lg text-gray-800 mb-4">Build Your Menu</h4>
    <fieldset className="space-y-3">
      <legend className="text-sm font-medium text-gray-700 mb-2">Allergen & Dietary Filters:</legend>
      <div className="flex items-center">
        <input id="vegan" type="checkbox" className="h-4 w-4 text-indigo-600 border-gray-300 rounded" defaultChecked />
        <label htmlFor="vegan" className="ml-2 block text-sm text-gray-900">Vegan</label>
      </div>
      <div className="flex items-center">
        <input id="nut-free" type="checkbox" className="h-4 w-4 text-indigo-600 border-gray-300 rounded" defaultChecked />
        <label htmlFor="nut-free" className="ml-2 block text-sm text-gray-900">Nut-Free</label>
      </div>
      <div className="flex items-center">
        <input id="gluten-free" type="checkbox" className="h-4 w-4 text-indigo-600 border-gray-300 rounded" />
        <label htmlFor="gluten-free" className="ml-2 block text-sm text-gray-900">Gluten-Free</label>
      </div>
    </fieldset>
    <div className="mt-4 pt-4 border-t border-gray-200">
      <h5 className="text-sm font-medium text-gray-700">Valid Selections:</h5>
      <div className="flex items-center justify-between mt-2">
        <span className="text-gray-900">Mushroom Risotto (Vegan)</span>
        <CheckCircle className="w-5 h-5 text-green-500" />
      </div>
      <div className="flex items-center justify-between mt-2">
        <span className="text-red-600 line-through">Peanut Brittle</span>
        <span className="text-xs text-red-700 font-medium">(Logic fail: Nut-Free)</span>
      </div>
    </div>
  </div>
);

/*
----------------------------------------------------------------------
 FEATURE CARD COMPONENT (Internal)
 (A helper component to display each feature)
----------------------------------------------------------------------
*/

interface Feature {
  title: string;
  description: string;
  icon: React.ElementType;
}

interface FeatureCardProps {
  feature: Feature;
  visualMock: React.ReactNode;
  reverse?: boolean;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature, visualMock, reverse = false }) => {
  const Icon = feature.icon;
  const direction = reverse ? 'lg:flex-row-reverse' : 'lg:flex-row';

  return (
    <div className={`flex flex-col ${direction} items-center lg:space-x-12 rounded-xl shadow-lg bg-white overflow-hidden`}>
      {/* --- Text Content --- */}
      <div className="flex-1 p-8 lg:p-12">
        <div className="flex items-center space-x-3 mb-4">
          <Icon className="w-8 h-8 text-indigo-600" aria-hidden="true" />
          <h3 className="text-2xl font-bold text-gray-900">{feature.title}</h3>
        </div>
        <p className="text-gray-700 leading-relaxed">
          {feature.description}
        </p>
      </div>
      
      {/* --- Mock UI Visual --- */}
      <div className="flex-1 w-full bg-gray-100 p-8 lg:p-12 flex items-center justify-center min-h-[350px]">
        {visualMock}
      </div>
    </div>
  );
};

/*
----------------------------------------------------------------------
 MAIN EXPORTED COMPONENT
 (This is the single component you'd import into your app)
----------------------------------------------------------------------
*/

const CateringFeatures: React.FC = () => {
  
  const features: Feature[] = [
    {
      title: "Dynamic Pricing Engine",
      description: "Engineered a dynamic pricing engine that generates instant, customizable quotes based on menu selections, guest count, and dietary needs, significantly streamlining the sales funnel.",
      icon: Calculator,
    },
    {
      title: "Comprehensive Admin Dashboard",
      description: "Architected a full-featured administrative dashboard for seamless order management, client relationship tracking (CRM), and kitchen order ticket (KOT) generation, centralizing core business operations.",
      icon: LayoutDashboard,
    },
    {
      title: "Interactive Menu Builder",
      description: "Implemented an interactive menu builder with real-time allergen and dietary filtering, applying complex business logic to ensure valid selections and enhance the user experience.",
      icon: Salad,
    }
  ];

  return (
    <section className="bg-gray-50 py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* --- Header --- */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            A Platform Built for Catering Excellence
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Core features of our bespoke catering management system.
          </p>
        </div>

        {/* --- Features Grid --- */}
        <div className="space-y-16">
          <FeatureCard 
            feature={features[0]} 
            visualMock={<DynamicPricingMock />} 
          />
          
          <FeatureCard 
            feature={features[1]} 
            visualMock={<AdminDashboardMock />} 
            reverse={true} // Alternating layout
          />
          
          <FeatureCard 
            feature={features[2]} 
            visualMock={<MenuBuilderMock />} 
          />
        </div>

      </div>
    </section>
  );
};

export default CateringFeatures;