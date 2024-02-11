"use client"
import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";

interface Category {
  id: number;
  name: string;
  image: string;
}

interface IProductsData {
  id?: number;
  title?: string;
  price?: number;
  description?: string;
  category?: Category;
  images?: string[];
}

const getProducts: () => Promise<IProductsData[]> = async () => {
  const res = await fetch("https://api.escuelajs.co/api/v1/products");
  return res.json();
};

export default function MainComponents() {
  const [products, setProducts] = useState<IProductsData[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await getProducts();
        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching products:", error.message);
      }
    };

    fetchProducts();
  }, []);

  return (
    <main>
      <div className="Search">
        <button>
          <CiSearch />
        </button>
        <input type="search" placeholder="...Qidirmoqda" />
      </div>
      <div className="main-container">
        <div className="cards-wrapper">
          {products.map((product) => (
            <div key={product.id} className="card">
              <img src={product.images && product.images[0]} alt="rasm" />
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <span className="catagory-wrapper">{product.category?.name}</span>
              <div className="card-footer">
                <span>${product.price}</span>
                <button>add to card</button>
              </div>
            </div>
          ))}
        </div>
        <div className="katagoriya">
          <div className="info">
            <h4>Katagoriyalar:</h4>
            {products.map((product) => (
              <span key={product.id}>{product.category?.name}</span>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
