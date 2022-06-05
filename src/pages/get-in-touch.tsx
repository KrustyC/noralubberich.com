import Head from "next/head";
import { ContactForm } from "@/components/ContactForm";
import { MessageIllustration } from "@/components/icons/Message";

export default function GetInTouchPage() {
  return (
    <div>
      <Head>
        <title>Nora Lubberich | Get In Touch</title>
        <meta
          name="description"
          content="Nora Lubberich personal website | Get In Touch"
        />

        <meta property="og:title" content="Nora Lubberich" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://noralubberich.com" />
        <meta
          property="og:image"
          content="https://noralubberich.com/images/rock.jpg"
        />
        
      </Head>

      <div className="flex flex-col lg:flex-row lg:h-[80vh] items-center lg:relative w-full">
        <div className="lg:absolute lg:left-[150px] xl:left-[280px] lg:top-[150px] xl:top-[80px] h-[350px] lg:h-[450px] xl:h-[550px] z-1 opacity-[0.9] mt-2 w-9/12 lg:w-[650px]">
          <MessageIllustration />
        </div>
        <div className="flex flex-1 flex-col px-8 lg:px-8 xl:px-24">
          <h1 className="z-10 font-bold tracking-wider">Let{"'"}s Talk</h1>

          <p className="z-10 w-full lg:w-7/12 mt-3 text-2xl">
            If you would like to have a chat, or even just to say hi, please don
            {"'"}t be shy and get in touch with me. I promise I will get back to
            you soon.
          </p>
        </div>
        <div className="flex w-full lg:w-auto lg:flex-1 justify-center h-full px-8 py-12">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
