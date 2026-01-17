
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../data/products';
import { formatCurrency } from '../lib/utils';
import { Check, ArrowLeft, Download, ShieldCheck, Music, Clock, Star, MessageSquare, Send } from 'lucide-react';
import { Category } from '../types';
import { useReviews } from '../context/ReviewContext';
import { useSession } from '../context/AuthContext';

const ProductDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = PRODUCTS.find(p => p.slug === slug);
  const { getAverageRating, getProductReviews, addReview } = useReviews();
  const { session } = useSession();
  
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!product) {
    return (
      <div className="pt-48 pb-24 text-center">
        <h1 className="text-4xl font-bold text-white uppercase">Product Not Found</h1>
        <Link to="/digital-products" className="text-blue-500 font-bold mt-4 block underline">Back to Store</Link>
      </div>
    );
  }

  const { average, count } = getAverageRating(product.slug);
  const reviews = getProductReviews(product.slug);

  const handleReviewSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!session.user || !comment.trim()) return;

    setIsSubmitting(true);
    // Simulate slight delay
    await new Promise(r => setTimeout(r, 600));
    
    addReview({
      productSlug: product.slug,
      userId: session.user.id,
      userName: session.user.name,
      rating,
      comment
    });

    setComment('');
    setRating(5);
    setIsSubmitting(false);
  };

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4">
        <Link to="/digital-products" className="inline-flex items-center space-x-2 text-slate-500 hover:text-white mb-12 transition-colors uppercase tracking-widest text-sm font-bold">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Store</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <div className="space-y-8">
            <div className="aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            </div>

            <div className="bg-slate-900 border border-white/5 p-8 rounded-3xl">
               <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-tight">What's Included</h3>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 {product.whatYouGet.map((item, i) => (
                   <div key={i} className="flex items-start space-x-3 text-sm text-slate-400">
                     <Check className="w-5 h-5 text-blue-500 flex-shrink-0" />
                     <span>{item}</span>
                   </div>
                 ))}
               </div>
            </div>

            {product.category === Category.MP3 && (
              <div className="bg-blue-600/10 border border-blue-500/20 p-8 rounded-3xl grid grid-cols-2 gap-8">
                 <div className="flex items-center space-x-4">
                   <div className="bg-blue-500/20 p-3 rounded-xl"><Music className="w-6 h-6 text-blue-400" /></div>
                   <div>
                     <div className="text-xs text-blue-400 font-bold uppercase tracking-widest">Tracks</div>
                     <div className="text-white font-bold text-xl">{product.trackCount} Songs</div>
                   </div>
                 </div>
                 <div className="flex items-center space-x-4">
                   <div className="bg-blue-500/20 p-3 rounded-xl"><Clock className="w-6 h-6 text-blue-400" /></div>
                   <div>
                     <div className="text-xs text-blue-400 font-bold uppercase tracking-widest">Runtime</div>
                     <div className="text-white font-bold text-xl">{product.runtime}</div>
                   </div>
                 </div>
              </div>
            )}
          </div>

          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-blue-600/20 text-blue-400 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-widest">
                  {product.category}
                </span>
                {count > 0 && (
                  <div className="flex items-center text-yellow-500 gap-1 font-bold">
                    <Star className="w-4 h-4 fill-current" />
                    <span>{average} ({count} reviews)</span>
                  </div>
                )}
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase leading-tight tracking-tight">{product.name}</h1>
              <p className="text-slate-400 text-lg leading-relaxed">{product.longDescription}</p>
            </div>

            <div className="flex items-center justify-between glass p-6 rounded-2xl border border-white/10">
               <div>
                 <div className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-1">Price</div>
                 <div className="text-4xl font-black text-white">{formatCurrency(product.price)}</div>
               </div>
               <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-2xl font-bold text-lg flex items-center space-x-3 transition-all hover:scale-105 shadow-xl shadow-blue-500/20">
                 <Download className="w-6 h-6" />
                 <span>Purchase & Download</span>
               </button>
            </div>

            <div className="space-y-6">
               <div className="flex items-start gap-4">
                 <div className="w-6 h-6 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4" />
                 </div>
                 <div>
                    <h5 className="text-white font-bold text-sm uppercase">Ideal For</h5>
                    <p className="text-slate-400 text-sm">{product.idealFor}</p>
                 </div>
               </div>
               <div className="flex items-start gap-4">
                 <div className="w-6 h-6 bg-blue-500/20 text-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                 </div>
                 <div>
                    <h5 className="text-white font-bold text-sm uppercase">License Usage</h5>
                    <p className="text-slate-400 text-sm">{product.licenseSummary}</p>
                 </div>
               </div>
            </div>

            <div className="pt-8 border-t border-white/5 grid grid-cols-2 gap-4">
               <div className="p-4 bg-slate-900 rounded-xl">
                  <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-1">Format</div>
                  <div className="text-white font-bold text-sm">{product.deliverablesFormat}</div>
               </div>
               <div className="p-4 bg-slate-900 rounded-xl">
                  <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-1">Access</div>
                  <div className="text-white font-bold text-sm uppercase tracking-tight">Instant Delivery</div>
               </div>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 border-t border-white/5 pt-20">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-10">
              <MessageSquare className="w-8 h-8 text-blue-500" />
              <h2 className="text-3xl font-black text-white uppercase tracking-tight">User Feedback</h2>
            </div>

            <div className="space-y-8">
              {reviews.length > 0 ? (
                reviews.map((review) => (
                  <div key={review.id} className="p-8 bg-slate-900/50 border border-white/5 rounded-[2rem] space-y-4">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold uppercase text-xs">
                          {review.userName.charAt(0)}
                        </div>
                        <div>
                          <div className="text-white font-bold tracking-tight">{review.userName}</div>
                          <div className="text-[10px] text-slate-500 uppercase tracking-widest">{review.date}</div>
                        </div>
                      </div>
                      <div className="flex text-yellow-500">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'fill-current' : 'opacity-20'}`} />
                        ))}
                      </div>
                    </div>
                    <p className="text-slate-400 leading-relaxed italic">"{review.comment}"</p>
                  </div>
                ))
              ) : (
                <div className="text-center py-12 bg-slate-900/30 rounded-3xl border border-dashed border-white/10">
                  <p className="text-slate-500 font-bold uppercase tracking-widest text-sm">No reviews yet. Be the first to share your thoughts!</p>
                </div>
              )}
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="sticky top-32">
              <div className="glass p-8 rounded-[2rem] border border-white/10">
                <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-tight">Write a Review</h3>
                
                {session.status === 'authenticated' ? (
                  <form onSubmit={handleReviewSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Your Rating</label>
                      <div className="flex gap-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            onClick={() => setRating(star)}
                            className={`p-2 transition-all hover:scale-110 ${rating >= star ? 'text-yellow-500' : 'text-slate-700'}`}
                          >
                            <Star className={`w-8 h-8 ${rating >= star ? 'fill-current' : ''}`} />
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Feedback</label>
                      <textarea
                        required
                        rows={4}
                        placeholder="Tell others how this asset helped your business..."
                        className="w-full bg-slate-950 border border-white/5 rounded-xl px-4 py-3 text-white focus:border-blue-500 outline-none resize-none text-sm"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                      />
                    </div>

                    <button
                      disabled={isSubmitting}
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-black py-4 rounded-xl flex items-center justify-center space-x-3 transition-all uppercase tracking-widest text-sm"
                    >
                      {isSubmitting ? (
                        <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-white"></div>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Review</span>
                        </>
                      )}
                    </button>
                  </form>
                ) : (
                  <div className="text-center space-y-4">
                    <p className="text-slate-400 text-sm">You must be logged in to leave a review.</p>
                    <Link to="/login" className="inline-block bg-white/5 hover:bg-white/10 text-white px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-widest transition-all">
                      Sign In to Review
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
