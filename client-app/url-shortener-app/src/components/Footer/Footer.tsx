import * as React from 'react';

type IFooterProps = object

const Footer: React.FunctionComponent<IFooterProps> = () => {
  return (
    <div className='bg-slate-900 text-white text-base text-center py-5'>
        Copyright &#169; URLShortener | Chieke Chdinma Judith
    </div>
  );
};

export default Footer;
