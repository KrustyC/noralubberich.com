import Head from "next/head";
import Image from "next/image";
import { HomeActivities } from "@/components/HomeActivities";
import mainImagePic from '../../public/images/main-image.jpg'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Nora Lubberich</title>
        <meta name="description" content="Generated by create next app" />

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
        <div className="relative h-[700px] w-screen">
          <Image
            layout="fill"
            objectFit="cover"
            quality={100}
            src={mainImagePic}
            placeholder="blur"
            alt="main image"
          />
        </div>

        <div className="py-16">
          <p className="text-3xl w-7/12 mx-auto font-bold">
            {'"'}Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            pretium gravida libero, ac ullamcorper purus ultricies id.
            Suspendisse tincidunt est sed nisl imperdiet blandit. Quisque nec
            justo commodo, vulputate ex at, eleifend mauris. Morbi lobortis diam
            sed ex rhoncus interdum. Praesent tincidunt ornare risus, quis
            sodales sem bibendum eget. {'"'}
          </p>
        </div>

        <HomeActivities />

        <div className="h-80 bg-[#F3F3F3] mt-24 mb-12 flex flex-col justify-center items-center">
          <p className="text-4xl">
            Begin Your Journey To A Better Life With Peace, Love, Beauty, And
            Happiness
          </p>
          <button className="mt-8 text-2xl font-bold px-6 py-4 leading-none border-2 rounded text-black border-black hover:border-transparent hover:text-white hover:bg-black">
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
}
