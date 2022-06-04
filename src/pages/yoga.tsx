import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import yogaPic from "../../public/images/yoga.jpg";

export default function YogaPage() {
  return (
    <div>
      <Head>
        <title>Nora Lubberich | Yoga</title>
        <meta
          name="description"
          content="Nora Lubberich personal website | Yoga"
        />

        <meta property="og:title" content="Nora Lubberich | Yoga" />
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
            src={yogaPic}
            placeholder="blur"
            alt="main image"
          />
        </div>

        <div className="page">
          <h1>Yoga</h1>

          <div className="text-2xl mt-8">
            <p>
              Yoga is more than just a routine to improve physical health – it
              is a lifestyle choice and a spiritual practice that has been
              proven to lower overall stress levels and enhance your quality of
              life. For many, yoga also provides a space in which to work on
              developing mental health and wellbeing in a mindful way. In my
              classes I create a safe space for people to tune into their body
              and mind. Gentle movements are paired with carefully selected
              breathing techniques to assist in building the relationship
              between the mental and the physical.
            </p>

            <p className="mt-4">
              By combining mindful, meditative breathing techniques with
              delicate poses and movements, my classes aim to support personal
              growth and help you to find yourself, love yourself and believe in
              yourself more than ever.
            </p>

            <p className="mt-4">
              With more than 500h of training I teach a spectrum of styles:
              Meditation, Yin Yoga, Vinyasa, Pre and Postnatal, Mandala, Rocket,
              Ashtanga, and Yoga for Mental Health.
            </p>

            <p className="mt-4">
              Please{" "}
              <Link href="/get-in-touch">
                <a className="underline hover:text-[#3385ff]">get in touch</a>
              </Link>{" "}
              if you like to try 1-2-1 classes or join my group classes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
