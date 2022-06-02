import Image from "next/image";
import Link from "next/link";

export const Activity = ({ description, label, href, imgSrc }) => (
  <div className="flex flex-col">
    <div className="h-[350px] md:h-[450px] w-full relative">
      <Image
        src={imgSrc}
        alt={label}
        placeholder="blur"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
    </div>

    <div className="flex flex-col mt-6">
      <p className="font-bold text-4xl">{label}</p>
      <p className="font-bold text-lg mt-2 pr-8">{description}</p>
      <Link href={href}>
        <a className="button-link w-48 mt-6 justify-end">Read more</a>
      </Link>
    </div>
  </div>
);
