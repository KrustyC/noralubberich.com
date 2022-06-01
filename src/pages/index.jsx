import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Activities } from "@/components/Activities";
import mainImagePic from "../../public/images/main-image.jpg";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Nora Lubberich</title>
        <meta
          name="description"
          content="Nors Lubberich personal website | Yoga practitioner"
        />

        <meta property="og:title" content="Nora Lubberich" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://noralubberich.com" />
        <meta
          property="og:image"
          content="https://noralubberich.com/images/rock.jpg"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col">
        <div className="header">
          <Image
            layout="fill"
            objectFit="cover"
            quality={100}
            src={mainImagePic}
            placeholder="blur"
            alt="main image"
          />
        </div>

        <div className="py-12 md:py-60 bg-[#FEECF6]">
          <p className="text-2xl md:text-3xl w-10/12 lg:w-7/12 mx-auto font-bold py-8">
            {'"'}Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            pretium gravida libero, ac ullamcorper purus ultricies id.
            Suspendisse tincidunt est sed nisl imperdiet blandit. Quisque nec
            justo commodo, vulputate ex at, eleifend mauris. Morbi lobortis diam
            sed ex rhoncus interdum. Praesent tincidunt ornare risus, quis
            sodales sem bibendum eget.{'"'}
          </p>
        </div>

        <Activities />

        <div className="h-80 bg-[#F3F3F3] flex flex-col justify-center items-center">
          <p className="text-2xl md:text-3xl text-center px-4">
            Realize deeply that the present moment is all you have. Make the NOW
            the primary focus of your life.
          </p>
          <Link href="/get-in-touch">
            <a className="mt-8 button-link big">Get in Touch</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
