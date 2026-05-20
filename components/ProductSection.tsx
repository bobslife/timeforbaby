"use client";

import { useState } from "react";
import type { Product } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";

type ProductSectionProps = {
  title: string;
  description: string;
  products: Product[];
};

export function ProductSection({
  title,
  description,
  products
}: ProductSectionProps) {
  const [isOpen, setIsOpen] = useState(false);
  const previewProducts = products.slice(0, 4);

  return (
    <>
      <section className="mt-8 sm:mt-10">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <h3 className="text-[1.45rem] font-semibold leading-tight text-[#3a2a24] sm:text-3xl">
              {title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-[#7d6559] sm:text-base">
              {description}
            </p>
          </div>
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="shrink-0 rounded-full border border-[#d9b9a5] bg-[#fffaf4] px-3.5 py-2 text-xs font-semibold text-[#8f4f41] shadow-[0_8px_20px_rgba(126,83,66,0.08)] transition hover:-translate-y-0.5 hover:border-[#c98b76] hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#c56f5d] focus:ring-offset-2 focus:ring-offset-[#f6eadc] sm:px-4 sm:text-sm"
          >
            전체 상품보기
          </button>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {previewProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {isOpen ? (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-[#2c201c]/45 px-4 py-4 backdrop-blur-sm sm:items-center sm:py-8"
          role="dialog"
          aria-modal="true"
          aria-labelledby={`${title}-modal-title`}
          onClick={() => setIsOpen(false)}
        >
          <div
            className="max-h-[86vh] w-full max-w-[42rem] overflow-hidden rounded-[1.5rem] border border-[#ead8c7] bg-[#fffaf4] shadow-[0_24px_70px_rgba(47,31,25,0.28)] lg:max-w-[min(92vw,1200px)]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 border-b border-[#ead8c7] px-5 py-4">
              <div>
                <h2
                  id={`${title}-modal-title`}
                  className="text-xl font-semibold text-[#3a2a24]"
                >
                  {title} 전체 상품
                </h2>
                <p className="mt-1 text-sm leading-6 text-[#7d6559]">
                  {description}
                </p>
              </div>
              <button
                type="button"
                aria-label="전체 상품 팝업 닫기"
                onClick={() => setIsOpen(false)}
                className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-[#e3caba] bg-white text-xl leading-none text-[#8f4f41] transition hover:border-[#c98b76] focus:outline-none focus:ring-2 focus:ring-[#c56f5d]"
              >
                ×
              </button>
            </div>
            <div className="max-h-[68vh] overflow-y-auto px-4 py-4 sm:px-5">
              <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
