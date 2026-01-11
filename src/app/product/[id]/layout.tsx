import { ReactNode } from 'react';

const ProductLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {children}
    </div>
  );
};

export default ProductLayout;