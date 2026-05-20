import Image from "next/image";

export function Hero() {
  return (
    <header className="relative bg-[#f6eadc] px-4 pb-8 pt-0 sm:px-6 sm:pb-10">
      <div className="mx-auto w-full max-w-[1120px]">
        <div className="relative aspect-[3/1] w-full overflow-hidden rounded-b-[1.75rem] bg-[#fff3f1] sm:rounded-b-[2.25rem]">
          <Image
            src="/images/main-banner.png"
            alt="Time For Baby 메인 배너"
            fill
            sizes="100vw"
            className="object-contain"
            loading="eager"
            priority
          />
        </div>

        <div className="relative mx-auto -mt-12 flex max-w-[43rem] flex-col items-center px-2 text-center sm:-mt-16">
          <div className="relative h-24 w-24 overflow-hidden rounded-full border-[6px] border-[#f6eadc] bg-white sm:h-32 sm:w-32">
            <Image
              src="/images/logo.png"
              alt="Time For Baby 프로필 아기 일러스트"
              fill
              sizes="128px"
              className="object-cover"
              priority
            />
          </div>

          <div className="mt-4 sm:mt-5">
            <h1 className="text-[1.55rem] font-semibold leading-tight tracking-[-0.01em] text-[#3a2a24] sm:text-[2.45rem]">
              초보{" "}
              <span className="text-[#b76453]">해린맘</span>
              의 육아정보
            </h1>
            <p className="mx-auto mt-3 max-w-[25rem] text-sm leading-6 text-[#7d6559] sm:mt-4 sm:text-base">
              초보 엄마의 시행착오를 줄여주는 현실 육아템 모음
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
