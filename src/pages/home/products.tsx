import React from 'react';
import { Product } from '../../types/type';
import { ProductComponent } from '../../components';

interface ProductsProps {
  data: Product[];
}

const Products: React.FC<ProductsProps> = ({ data }) => {
  return (
    <div className="products" style={{ padding: 40, display: 'flex', justifyContent: 'center' }}>
      <div className="product-list" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gridTemplateRows: '1fr 1fr', gap: 20 }}>
        {data.map((product) => (
          <ProductComponent key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;