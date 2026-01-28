
import React from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import { PLATFORM_PLANS } from '../data/plans';
import { cn, formatCurrency } from '../lib/utils';

const PricingTable: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
      <div className="md:col-span-3 text-center mb-8">
        <h3 className="text-2xl font-bold text-white uppercase tracking-tight">Managed Service Subscriptions</h3>
        <p className="text-slate-400">Ongoing support, automation, and growth acceleration.</p>
      </div>
      {PLATFORM_PLANS.map((plan) => (
        <div
          key={plan.id}
          className={cn(
            "relative p-8 rounded-3xl border flex flex-col",
            plan.highlighted
              ? "bg-slate-900 border-blue-500 ring-4 ring-blue-500/10"
              : "bg-slate-950 border-white/5"
          )}
        >
          {plan.highlighted && (
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-widest">
              Most Popular
            </div>
          )}

          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
            <p className="text-slate-400 text-sm">{plan.tagline}</p>
          </div>

          <div className="mb-8">
            <div className="flex items-baseline">
              <span className="text-4xl font-extrabold text-white">{formatCurrency(plan.priceFrom)}</span>
              <span className="text-slate-500 text-sm ml-2">/mo</span>
            </div>
            <p className="text-slate-500 text-xs mt-2 italic">Ideal for: {plan.idealFor}</p>
          </div>

          <div className="flex-grow space-y-4 mb-8">
            {plan.features.map((feature, i) => (
              <div key={i} className="flex items-start space-x-3 text-sm text-slate-300">
                <Check className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </div>

          <Link
            to="/book-demo"
            className={cn(
              "w-full text-center py-4 rounded-xl font-bold transition-all",
              plan.highlighted
                ? "bg-blue-600 hover:bg-blue-700 text-white"
                : "bg-white/10 hover:bg-white/20 text-white"
            )}
          >
            {plan.ctaLabel}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default PricingTable;
