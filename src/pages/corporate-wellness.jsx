import Head from "next/head";

export default function CorporateWellnessPage() {
  return (
    <div>
      <Head>
        <title>Nora Lubberich | Corporate Wellness</title>
        <meta
          name="description"
          content="Nors Lubberich personal website | Corporate Wellness"
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

      <div className="flex flex-col h-[650px] justify-center items-center">
        <h1>Corporate Wellness</h1>
        <p className="text-xl mt-8">Page under costruction...</p>
      </div>
    </div>
  );
}
