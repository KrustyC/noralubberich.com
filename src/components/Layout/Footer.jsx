import { TwitterIcon } from "@/components/icons/Twitter";
import { InstagramIcon } from "@/components/icons/Instagram";
import { INSTAGRAM_LINK, TWITTER_LINK } from "@/utils/constants";

export const Footer = () => {
  return (
    <footer className="mt-12 pb-16 px-32 flex justify-between">
      <div>
        <p>
          <span className="font-['Open_Sans']">©</span> 2022 Nora Lubberich. All
          rights reserved.
        </p>
      </div>

      <div className="flex items-center">
        <a href={TWITTER_LINK} target="_blank" rel="noopener noreferrer">
          <TwitterIcon className="hover:animate-wiggle h-6 w-6 fill-gray-400 mr-4" />
        </a>
        <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer">
          <InstagramIcon className="hover:animate-wiggle h-6 w-6 fill-gray-400" />
        </a>
      </div>
    </footer>
  );
};
