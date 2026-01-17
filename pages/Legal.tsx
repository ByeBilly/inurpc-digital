
import React from 'react';
import { useParams } from 'react-router-dom';

const Legal: React.FC = () => {
  const { type } = useParams<{ type: string }>();
  const isPrivacy = type === 'privacy';

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-black text-white mb-8 uppercase tracking-tight">
          {isPrivacy ? 'Privacy Policy' : 'Terms of Service'}
        </h1>
        <div className="prose prose-invert prose-blue max-w-none text-slate-400 space-y-6">
          <p className="text-lg">Last Updated: October 2023</p>
          
          <h2 className="text-2xl font-bold text-white uppercase tracking-tight">1. Overview</h2>
          <p>
            Welcome to InurPC Digital. These legal terms govern your use of the InurPC Platform (SaaS) and your purchase of digital assets from our store. By accessing our services, you agree to be bound by these terms.
          </p>

          <h2 className="text-2xl font-bold text-white uppercase tracking-tight">2. Digital Assets License</h2>
          <p>
            All digital products, including MP3 packs, snapshots, and sequences, are sold under a royalty-free commercial license. This allows you to use them in your own marketing, content, and client work. However, standalone resale of the assets themselves is strictly prohibited.
          </p>

          <h2 className="text-2xl font-bold text-white uppercase tracking-tight">3. Subscription Services</h2>
          <p>
            The InurPC Platform is billed on a recurring monthly or annual basis. You may cancel at any time via your billing portal. No refunds are provided for partial months of service.
          </p>

          <h2 className="text-2xl font-bold text-white uppercase tracking-tight">4. Data Ownership</h2>
          <p>
            You own 100% of your lead and customer data. InurPC Digital provides the infrastructure to process and store this data, but we do not own it nor do we sell it to third parties.
          </p>

          <h2 className="text-2xl font-bold text-white uppercase tracking-tight">5. Limitation of Liability</h2>
          <p>
            InurPC Digital provides tools and assets designed to assist in business growth. We do not guarantee specific financial outcomes or revenue results. Use of our tools is at your own commercial risk.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Legal;
