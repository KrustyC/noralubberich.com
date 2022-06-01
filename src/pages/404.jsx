import Link from "next/link";
import { MeditationIllustration } from "@/components/icons/Meditation";

export default function FourOhFour() {
  return (
    <div className="flex flex-col justify-center items-center pt-16 pb-4">
      <div className="h-[450px]">
        <MeditationIllustration />
      </div>
      <div className="flex flex-col items-center mt-8">
        <p className="text-xl italic text-center">
          There is peace is here... <br />
          But not the page you are looking for :)
        </p>
        <Link href="/">
          <a className="button-link big mt-4">Go back home</a>
        </Link>
      </div>
    </div>
  );
}
