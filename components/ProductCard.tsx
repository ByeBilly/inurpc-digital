
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Music, FileJson, FileText, Layout, Star } from 'lucide-react';
import { Product, Category } from '../types';
import { formatCurrency } from '../lib/utils';
import { useReviews } from '../context/ReviewContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { getAverageRating } = useReviews();
  const { average, count } = getAverageRating(product.slug);

  const getIcon = () => {
    switch(product.category) {
      case Category.MP3: return <Music className="w-5 h-5" />;
      case Category.SNAPSHOT: return <Layout className="w-5 h-5" />;
      case Category.PROMPT: return <FileJson className="w-5 h-5" />;
      case Category.MEDIA: return <FileText className="w-5 h-5" />;
      default: return <ShoppingCart className="w-5 h-5" />;
    }
  };

  return (
    <div className="bg-slate-900 border border-white/5 rounded-2xl overflow-hidden hover:border-blue-500/30 transition-all group flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
        <div className="absolute top-4 left-4 bg-blue-600 text-white text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-widest flex items-center space-x-1 shadow-lg">
          {getIcon()}
          <span>{product.category}</span>
        </div>
        {count > 0 && (
          <div className="absolute top-4 right-4 bg-slate-950/80 backdrop-blur-sm text-yellow-500 text-[10px] font-bold px-2 py-1 rounded-md flex items-center space-x-1">
            <Star className="w-3 h-3 fill-current" />
            <span>{average} ({count})</span>
          </div>
        )}
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-white mb-2 leading-tight group-hover:text-blue-400 transition-colors">{product.name}</h3>
        <p className="text-slate-400 text-sm mb-4 line-clamp-2">{product.shortDescription}</p>
        
        <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
          <span className="text-2xl font-black text-white">{formatCurrency(product.price)}</span>
          <Link to={`/digital-products/${product.slug}`} className="bg-white/5 hover:bg-blue-600 hover:text-white text-slate-300 px-4 py-2 rounded-lg text-sm font-bold transition-all">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
