export type Product = {
  id: string;
  name: string;
  href: string;
  image?: string;
  imageAlt?: string;
};

export type ProductCategory = {
  id: string;
  title: string;
  description: string;
  products: Product[];
};

export const productCategories: ProductCategory[] = [
  {
    id: "feeding",
    title: "수유용품",
    description: "신생아 수유 준비에 필요한 기본 아이템",
    products: [
      {
        id: "bottle-set",
        name: "PPSU 신생아 젖병 2종 세트",
        href: "#"
      },
      {
        id: "bottle-set-2",
        name: "분유 보관 케이스 3단",
        href: "#"
      },
      {
        id: "bottle-set-3",
        name: "실리콘 젖병 세척솔 세트",
        href: "#"
      },
      {
        id: "bottle-set-4",
        name: "컴팩트 젖병 건조대",
        href: "#"
      },
      {
        id: "feeding-pillow",
        name: "허리 지지 수유 쿠션",
        href: "#"
      },
      {
        id: "burp-cloth",
        name: "순면 트림 패드 5매",
        href: "#"
      },
      {
        id: "formula-dispenser",
        name: "외출용 분유 디스펜서",
        href: "#"
      },
      {
        id: "bottle-warmer",
        name: "저소음 젖병 워머",
        href: "#"
      }
    ]
  },
  {
    id: "sleep",
    title: "수면용품",
    description: "아기의 편안한 잠자리를 위한 수면 환경 아이템",
    products: [
      {
        id: "sleep-sack",
        name: "오가닉 코튼 슬리핑백",
        href: "#"
      },
      {
        id: "baby-pillow",
        name: "신생아 통기성 짱구베개",
        href: "#"
      },
      {
        id: "swaddle",
        name: "모로반사 방지 스와들",
        href: "#"
      },
      {
        id: "crib-mobile",
        name: "우드 감성 침대 모빌",
        href: "#"
      },
      {
        id: "white-noise",
        name: "휴대용 백색소음기",
        href: "#"
      },
      {
        id: "night-light",
        name: "수유등 겸 무드등",
        href: "#"
      },
      {
        id: "cooling-pad",
        name: "사계절 유아 쿨매트",
        href: "#"
      },
      {
        id: "crib-sheet",
        name: "순면 방수 매트리스 커버",
        href: "#"
      }
    ]
  }
];
