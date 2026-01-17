
import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { PRODUCTS } from '../data/products';
import { Category } from '../types';
import { Search, SlidersHorizontal } from 'lucide-react';
import { cn } from '../lib/utils';

const Store: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = PRODUCTS.filter(p => {
    const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categories: (Category | 'All')[] = ['All', ...Object.values(Category)];

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4 mb-16 text-center">
        <h1 className="text-4xl md:text-7xl font-black text-white mb-6 uppercase tracking-tight">The Asset <span className="text-blue-500">Vault</span></h1>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
          Plug-and-play digital assets to accelerate your business growth. From royalty-free music to automation snapshots.
        </p>
      </div>

      <div className="container mx-auto px-4 mb-12">
        <div className="flex flex-col md:flex-row gap-6 items-center justify-between glass p-6 rounded-2xl border border-white/10">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
            <input 
              type="text" 
              placeholder="Search assets..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-950 border border-white/5 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-blue-500 transition-all"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-bold transition-all uppercase tracking-tight border",
                  activeCategory === cat 
                    ? "bg-blue-600 border-blue-600 text-white" 
                    : "bg-slate-900 border-white/5 text-slate-400 hover:border-white/20"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))
        ) : (
          <div className="col-span-full py-20 text-center">
             <SlidersHorizontal className="w-16 h-16 mx-auto mb-4 text-slate-700" />
             <h3 className="text-2xl font-bold text-white mb-2 uppercase">No assets found</h3>
             <p className="text-slate-500">Try adjusting your search or filters.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Store;
