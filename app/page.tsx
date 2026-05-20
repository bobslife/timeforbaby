import { AffiliateNotice } from "@/components/AffiliateNotice";
import { Hero } from "@/components/Hero";
import { ProductSection } from "@/components/ProductSection";
import { productCategories } from "@/data/products";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f6eadc]">
      <AffiliateNotice />
      <Hero />
      <div className="relative bg-[#f6eadc] pb-20 sm:pb-28">
        <div className="mx-auto w-full max-w-[1240px] px-5 pt-2 sm:px-8 sm:pt-4 lg:px-10">
          {productCategories.map((category) => (
            <ProductSection
              key={category.id}
              title={category.title}
              description={category.description}
              products={category.products}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
