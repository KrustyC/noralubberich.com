import Image from "next/image";
import Link from "next/link";

export const Activity = ({ label, href, imgSrc }) => (
  <Link href={href}>
    <a>
      <div className="h-[350px] md:h-[650px] w-full relative">
        <Image
          src={imgSrc}
          alt={label}
          placeholder="blur"
          layout="fill"
          objectFit="cover"
          quality={100}
        />

        <div className="absolute top-[10%] lg:top-[300px] left-[50px]">
          <p className="underline uppercase font-bold text-4xl text-white">
            {label}
          </p>
        </div>
      </div>
    </a>
  </Link>
);
