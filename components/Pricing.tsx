// ./components/Pricing.tsx
import React, { useState } from 'react';

type Plan = {
  name: string;
  price: {
    monthly: number;
    annual: number;
  };
  features: string[];
};

type PricingProps = {
  plans: Plan[];
};

const Pricing: React.FC<PricingProps> = ({ plans }) => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <div>
      <button onClick={() => setIsAnnual(!isAnnual)}>
        {isAnnual ? 'Annual' : 'Monthly'}
      </button>
      {plans.map((plan, index) => (
        <div key={index} className="card">
          <h2>{plan.name}</h2>
          <p>{isAnnual ? plan.price.annual : plan.price.monthly}</p>
          <ul>
            {plan.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <button className="btn btn-primary">Sign Up</button>
        </div>
      ))}
    </div>
  );
};

export default Pricing;