import React from 'react';
import ContentLoader from 'react-content-loader';

const MyLoader = (props: any) => (
  <ContentLoader
    speed={2}
    width={400}
    height={480}
    viewBox="0 0 400 480"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <rect x="-1" y="16" rx="29" ry="29" width="390" height="380" />
    <rect x="-1" y="421" rx="28" ry="28" width="390" height="58" />
  </ContentLoader>
);

export default MyLoader;
