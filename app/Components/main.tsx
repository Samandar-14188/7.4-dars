"use client";

import React from "react";
import { CiSearch } from "react-icons/ci";

export interface Iproductsdata {
  id: number;
  nomi: string;
  narx: number;
  bis_register: string;
}
const BASE_URL = "https://react-shop-backend.liara.run";

export const getProducts: () => Promise<Iproductsdata[]> = async () => {
  try {
    const res = await fetch(BASE_URL + "/products?limit=2");
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
  console.log(products);

  return (
    <main>
      <div className="Search">
        <button>
          <CiSearch />
        </button>
        <input type="search" placeholder="...Qidirmoqda" />
      </div>
      <div className="main-container">
        <div className="cards">  </div>

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
