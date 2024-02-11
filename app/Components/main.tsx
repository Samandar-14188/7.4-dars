
import React from "react";
import { CiSearch } from "react-icons/ci";
import ProductsCard from "./ProductsCard";

interface Catagory {
  id:number;
  name:string;
  image:string;
}
interface Iproductsdata {
  id?: number;
  title?: string;
  price?: number;
  description?:string;
  catagory?:Catagory;
  images?:string[]
}



 const getProducts: () => Promise<Iproductsdata[]> = async () => {
  try {
    const res = await fetch("https://api.escuelajs.co/api/v1/products ");
    if (!res.ok) {
      throw new Error("Mahsulotlarni olib bolmadi");
    }
    return res.json();
  } catch (error) {
    console.error("Mahsulotlarni olishda xatolik:", error);
    return [];
  }
};

export default function MainComponents() {
  const products = getProducts();
  
  return (
    <main>
      <div className="Search">
        <button>
          <CiSearch />
        </button>
        <input type="search" placeholder="...Qidirmoqda" />
      </div>
      <div className="main-container">
        {products.map((product) => (
          <ProductsCard key={product.id} product={product} />
        ))}
        
        <div className="katagoriya">
          <div className="info">
            <h4>Katagoriyalar:</h4>
            <span>Hammasi</span>
            <span>Kiyimi</span>
            <span>Elektronika</span>
            <span>Mebel</span>
            <span>Oyoq kiyimlar</span>
            <span>Turli xil</span>
          </div>
        </div>
      </div>
    </main>
  );
}
