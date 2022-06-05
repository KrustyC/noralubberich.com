import Head from "next/head";
import Image from "next/image";
import corporateWellnessPic from "../../public/images/corporate-wellness.jpg";

export default function CorporateWellnessPage() {
  return (
    <div>
      <Head>
        <title>Nora Lubberich | Corporate Wellness</title>
        <meta
          name="description"
          content="Nora Lubberich personal website | Corporate Wellness"
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
            src={corporateWellnessPic}
            placeholder="blur"
            alt="main image"
          />
        </div>

        <div className="page">
          <h1>Corporate Wellness</h1>

          <div className="text-2xl mt-8">
            <p>
              Over the last couple of years there has been a positive shift in
              the way organisations are approaching the health and wellbeing of
              their employees. Many companies are investing in wellness
              programmes to address employees’ wellbeing and mental health.
            </p>

            <p className="mt-8">
              In recent years, I have been working with various companies and
              start ups and have been able to create supportive environments
              where employees feel their wellbeing is actively cared for. This
              has resulted in employees feeling more supported and it
              fundamentally improved work culture and productivity.
            </p>

            <p className="mt-8">
              Mental health and wellbeing should be a major priority in every
              company. I consult organisations on the most effective measures to
              set up a wellbeing programme. This includes creating a bespoke
              medium/long-term roadmap for the company to optimise Mental Health
              and Wellbeing and the overall employee experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
