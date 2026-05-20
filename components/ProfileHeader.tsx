import Image from "next/image";

export function ProfileHeader() {
  return (
    <section className="relative -mt-20 flex flex-col items-center px-5 text-center sm:-mt-24">
      <div className="relative h-28 w-28 overflow-hidden rounded-full border-[7px] border-[#f6eadc] bg-white sm:h-36 sm:w-36">
        <Image
          src="/images/logo.png"
          alt="Time For Baby 프로필 아기 일러스트"
          fill
          sizes="144px"
          className="object-cover"
          priority
        />
      </div>
      <div className="mt-5 max-w-[34rem]">
        <h2 className="text-2xl font-semibold leading-tight text-[#3a2a24] sm:text-4xl">
          초보{" "}
          <span className="rounded-full bg-[#fff7ef] px-2.5 py-1 text-[#c56f5d] shadow-[inset_0_0_0_1px_rgba(197,111,93,0.16)]">
            해린맘
          </span>
          의 육아정보
        </h2>
        <p className="mx-auto mt-4 max-w-[25rem] text-sm leading-6 text-[#7d6559] sm:text-base">
          초보 엄마의 시행착오를 줄여주는 현실 육아템 모음
        </p>
      </div>
    </section>
  );
}
