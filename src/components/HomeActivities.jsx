import Image from "next/image";

export const HomeActivities = () => {
  return (
    <div className="main-grid">
      <div className="activity relative">
        <Image
          layout="fill"
          objectFit="cover"
          quality={100}
          src="/images/nora.jpeg"
          alt="Nora"
        />

        <div className="absolute top-[300px] left-[50px]">
          <p className="underline uppercase font-bold text-4xl text-white">
            Yoga
          </p>
        </div>
      </div>

      <div className="activity relative">
        <Image
          layout="fill"
          objectFit="cover"
          quality={100}
          src="/images/corporate-yoga.jpeg"
          alt="corporate wellness"
        />

        <div className="absolute top-[300px] left-[50px]">
          <p className="underline uppercase font-bold text-4xl text-white">
            Coroporate Wellness
          </p>
        </div>
      </div>

      <div className="activity relative">
        <Image
          layout="fill"
          objectFit="cover"
          quality={100}
          src="/images/nutrition.png"
          alt="nutrition"
        />

        <div className="absolute top-[300px] left-[50px]">
          <p className="underline uppercase font-bold text-4xl text-white">
            Nutrition
          </p>
        </div>
      </div>
    </div>
  );
};
