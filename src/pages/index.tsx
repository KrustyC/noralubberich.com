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
          content="Nora Lubberich personal website | Wellbeing Consultant"
        />

        <meta property="og:title" content="Nora Lubberich" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://noralubberich.com" />
        <meta
          property="og:image"
          content="https://noralubberich.com/images/rock.jpg"
        />
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

        <div className="py-12 md:py-72 bg-[#FEECF6]">
          <p className="text-2xl md:text-3xl w-10/12 lg:w-7/12 lg:w-1/2 mx-auto font-bold">
            {'"'}Step into the pathway with me and feel nourished, balanced and
            empowered. Take a holistic approach to your wellbeing and find
            connection to yourself, others and all that you do - a mindset that
            can have real, positive effects on your life.{'"'}
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
