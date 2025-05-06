'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

interface AdSenseProps {
  adSlot: string;
  adFormat?: 'auto' | 'fluid' | 'rectangle';
  style?: React.CSSProperties;
  className?: string;
}

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

const AdSense: React.FC<AdSenseProps> = ({ 
  adSlot, 
  adFormat = 'auto',
  style = {},
  className = ''
}) => {
  const pathname = usePathname();

  useEffect(() => {
    const handleRouteChange = () => {
      try {
        if (window.adsbygoogle) {
          window.adsbygoogle.push({});
        }
      } catch (err) {
        console.error('Error pushing ads:', err);
      }
    };

    // Load ad when component mounts
    handleRouteChange();
  }, [pathname]); // Re-run effect when pathname changes

  return (
    <div className={`adsbygoogle-container ${className}`}>
      <span className="text-xs text-gray-500">Advertisement</span>
      <ins
        className="adsbygoogle"
        style={{
          display: 'block',
          ...style,
        }}
        data-ad-client={process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_ID}
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive="true"
      />
    </div>
  );
};

export default AdSense; 