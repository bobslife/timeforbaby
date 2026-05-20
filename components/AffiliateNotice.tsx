const notice =
  "이 상품들은 쿠팡 파트너스의 지원을 받아 운영되고 있는 블로그입니다.";

export function AffiliateNotice() {
  return (
    <div className="overflow-hidden border-b border-[#ead8c7] bg-[#4a342c] py-2 text-[#fff8f1]">
      <div className="marquee-track flex w-max whitespace-nowrap text-[0.8rem] font-medium tracking-[-0.01em] sm:text-sm">
        {Array.from({ length: 8 }).map((_, index) => (
          <span key={index} className="px-5">
            {notice}
          </span>
        ))}
      </div>
    </div>
  );
}
