import React from 'react';
import s from './Features.module.scss';

interface FeaturesProps {
  features: string[];
}

const Features: React.FC<FeaturesProps> = ({ 
  features 
}) => {
   return(
    <div className={s.featuresContainer}>
      <div className={s.featuresGrid}> 
        {features.map((feature, index) => (
          <div key={index} className={s.featureRow}>
          <div className={s.featureLabel}>{feature}</div>
          {/* <div className={s.specValue}>{specs.country}</div> */}
        </div>
        ))}
      </div>
    </div>
  );
};

export default Features;