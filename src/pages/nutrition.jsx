import Head from "next/head";
import Image from "next/image";
import nutritionPic from "../../public/images/nutrition.jpeg";

export default function NutritionPage() {
  return (
    <div>
      <Head>
        <title>Nora Lubberich | Nutrition</title>
        <meta
          name="description"
          content="Nora Lubberich personal website | Nutrition"
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
            src={nutritionPic}
            placeholder="blur"
            alt="main image"
          />
        </div>

        <div className="page">
          <h1>Nutrition</h1>

          <div className="text-2xl mt-12">
            <p>Coming soon - stay tuned.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
