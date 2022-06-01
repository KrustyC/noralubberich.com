import Head from "next/head";
import Image from "next/image";
import aboutMePic from "../../public/images/about-me.jpg";

export default function AboutMePage() {
  return (
    <div>
      <Head>
        <title>Nora Lubberich | About Me</title>
        <meta
          name="description"
          content="Nora Lubberich personal website | About Me"
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
            src={aboutMePic}
            placeholder="blur"
            alt="main image"
          />
        </div>

        <div className="page">
          <h1>About Me</h1>

          <div className="text-2xl mt-12">
            <p>Hi, I’m Nora.</p>
            <p className="mt-8">
              I’m a Wellbeing consultant, yoga and mindfulness teacher and soon
              to be nutrition coach. I’m passionate about helping my clients
              achieve greater wellbeing and improve mental health.
            </p>

            <p className="mt-8">
              My teaching method is using a holistic approach to wellbeing
              including mindfulness, movement and nutrition. While working as a
              Wellbeing Consultant I realised quite quickly that in order to
              achieve a healthier lifestyle I need to include nutrition in my
              offerings. I began training in nutritional coaching, which enables
              me to offer a more complete holistic service to my clients. I
              assist my clients to achieve long lasting goals by integrating
              realistic and sustainable lifestyle changes and healthier patterns
              in order for them to live a more fulfilled, happy, and healthy
              life.
            </p>

            <p className="mt-8">
              I started my yoga and mindfulness journey about 10 years ago when
              I was studying dance. I was introduced to yoga and meditation and
              found the sense of peace that I gained from a steady practice very
              healing and empowering.
            </p>

            <p className="mt-8">
              I learned to develop a positive relationship with my mind and body
              and this has helped me to overcome some of my most difficult
              times. Yoga and mindfulness has helped me to find balance and to
              live a happy and healthy life. It inspires me to live each moment
              more mindfully, and that’s what I am on a mission to teach to
              everyone.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
