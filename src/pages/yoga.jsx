import Head from "next/head";

export default function YogaPage() {
  return (
    <div>
      <Head>
        <title>Nora Lubberich | Yoga</title>
        <meta
          name="description"
          content="Nors Lubberich personal website | Yoga"
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
        <h1>Yoga</h1>
        <p className="text-xl mt-8">Page under costruction...</p>
      </div>
    </div>
  );
}
