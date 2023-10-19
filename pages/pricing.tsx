// ./pages/pricing.tsx
import Pricing from '../components/Pricing';

const plans = [
  {
    name: 'Basic',
    price: {
      monthly: 10,
      annual: 100,
    },
    features: ['Feature 1', 'Feature 2'],
  },
  {
    name: 'Premium',
    price: {
      monthly: 20,
      annual: 200,
    },
    features: ['Feature 1', 'Feature 2', 'Feature 3'],
  },
];

export default function PricingPage() {
  return <Pricing plans={plans} />;
}