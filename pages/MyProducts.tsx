import React from 'react';
import { useSession } from '../context/AuthContext';
import { PRODUCTS } from '../data/products';
import { Download, ShoppingBag, Terminal, Music, Layout, FileJson, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Category } from '../types';

const MyProducts: React.FC = () => {
  const { session } = useSession();
  const user = session.user;
  
  if (!user) return null;

  const myProducts = PRODUCTS.filter(p => user.purchasedProductSlugs.includes(p.slug));

  const getIcon = (cat: Category) => {
    switch(cat) {
      case Category.MP3: return <Music className="w-5 h-5" />;
      case Category.SNAPSHOT: return <Layout className="w-5 h-5" />;
      case Category.PROMPT: return <FileJson className="w-5 h-5" />;
      default: return <Download className="w-5 h-5" />;
    }
  };

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-2 uppercase tracking-tight">Your <span className="text-blue-500">Assets</span></h1>
          <p className="text-slate-400">High-performance tools currently plugged into your business.</p>
        </div>

        {myProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {myProducts.map((product) => (
              <div key={product.slug} className="glass p-8 rounded-[2rem] border border-white/10 flex flex-col hover:border-blue-500/30 transition-all">
                <div className="flex items-center gap-4 mb-6">
                   <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center text-blue-500 border border-white/5">
                      {getIcon(product.category)}
                   </div>
                   <div>
                     <div className="text-[10px] text-blue-400 font-bold uppercase tracking-widest">{product.category}</div>
                     <h3 className="text-white font-bold tracking-tight">{product.name}</h3>
                   </div>
                </div>
                
                <p className="text-slate-400 text-sm mb-8 flex-grow">{product.shortDescription}</p>
                
                <div className="space-y-3">
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2 transition-all uppercase tracking-widest text-sm shadow-lg shadow-blue-500/10">
                    <Download className="w-4 h-4" />
                    Download Files
                  </button>
                  <Link to={`/digital-products/${product.slug}`} className="w-full flex items-center justify-center gap-2 text-slate-500 hover:text-white font-bold py-2 transition-all uppercase tracking-widest text-[10px]">
                    View Product Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-20 bg-slate-900 border border-white/5 rounded-[3rem] text-center max-w-2xl mx-auto px-12">
             <ShoppingBag className="w-16 h-16 mx-auto mb-6 text-slate-700" />
             <h2 className="text-2xl font-black text-white uppercase mb-4 tracking-tight">Your Vault is Empty</h2>
             <p className="text-slate-500 mb-8 leading-relaxed">You haven't purchased any premium snapshots or media packs yet. Start scaling your business with our battle-tested assets.</p>
             <Link to="/digital-products" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-bold uppercase tracking-widest transition-all inline-flex items-center gap-2">
               Browse Store
               <ArrowRight className="w-4 h-4" />
             </Link>
          </div>
        )}

        <div className="mt-20 p-10 bg-slate-900/50 rounded-[3rem] border border-white/5 flex flex-col md:flex-row items-center gap-12">
           <div className="flex-shrink-0 w-20 h-20 bg-blue-600/20 text-blue-500 rounded-[2rem] flex items-center justify-center">
             <Terminal className="w-10 h-10" />
           </div>
           <div className="flex-grow">
             <h4 className="text-xl font-black text-white uppercase mb-2">Need a custom snapshot?</h4>
             <p className="text-slate-400 text-sm">Our engineering team can build custom enterprise automation logic tailored to your specific industry constraints.</p>
           </div>
           <Link to="/contact" className="w-full md:w-auto bg-white/5 border border-white/10 hover:border-blue-500/50 text-white px-8 py-4 rounded-2xl font-bold uppercase tracking-widest transition-all text-sm whitespace-nowrap">
             Request Build
           </Link>
        </div>
      </div>
    </div>
  );
};

export default MyProducts;