import React from "react";

interface Catagory {
  id: number;
  name: string;
  image: string;
}

interface Iproductsdata {
  id?: number;
  title?: string;
  price?: number;
  description?: string;
  catagory?: Catagory;
  images?: string[];
}

interface ProductsCardProps {
  product: Iproductsdata;
}

const ProductsCard: React.FC<ProductsCardProps> = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.images && product.images[0]} alt={product.title} />
      <div className="product-info">
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <span>${product.price}</span>
      </div>
    </div>
  );
};

export default ProductsCard;