import Image from "next/image";
import type { Product } from "@/data/products";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <a
      href={product.href}
      className="group flex min-h-[14.25rem] flex-col rounded-[1.1rem] border border-[#ead8c7] bg-[#fffdf9] p-2.5 text-left shadow-[0_10px_26px_rgba(126,83,66,0.08)] transition duration-300 hover:-translate-y-1.5 hover:border-[#debca7] hover:shadow-[0_18px_38px_rgba(126,83,66,0.14)] focus:outline-none focus:ring-2 focus:ring-[#c56f5d] focus:ring-offset-2 focus:ring-offset-[#f6eadc] sm:min-h-[17rem] sm:rounded-[1.25rem] sm:p-3.5 lg:min-h-[19rem]"
    >
      <div className="relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-[0.85rem] bg-[#f7eadc] sm:rounded-2xl">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.imageAlt ?? product.name}
            width={320}
            height={320}
            className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="relative h-full w-full overflow-hidden bg-[linear-gradient(135deg,#fff8f1_0%,#f3decd_52%,#e9c3b2_100%)]">
            <span className="absolute left-[14%] top-[18%] h-10 w-10 rounded-full border border-white/70 bg-white/35 sm:h-14 sm:w-14" />
            <span className="absolute bottom-[13%] right-[15%] h-14 w-14 rounded-full bg-[#d4937d]/20 blur-sm sm:h-20 sm:w-20" />
            <span className="absolute inset-x-4 bottom-4 h-px bg-[#c98772]/35" />
            <span className="absolute left-5 top-5 h-1.5 w-12 rounded-full bg-white/65" />
          </div>
        )}
      </div>
      <strong className="mt-3.5 text-[0.92rem] font-semibold leading-snug text-[#3a2a24] sm:mt-4 sm:text-lg">
        {product.name}
      </strong>
      <span className="mt-auto pt-3 text-xs font-semibold text-[#b46f5c] transition group-hover:text-[#8f4f41] sm:pt-4 sm:text-sm">
        자세히 보기 →
      </span>
    </a>
  );
}
