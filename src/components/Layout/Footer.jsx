import { InstagramIcon } from "@/components/icons/Instagram";
import { INSTAGRAM_LINK } from "@/utils/constants";

export const Footer = () => {
  return (
    <footer className="py-16 w-screen px-8 md:px-24 lg:px-60 flex justify-between items-center">
      <div>
        <p>
          <span className="font-['Open_Sans']">©</span> 2022 Nora Lubberich. All
          rights reserved.
        </p>
      </div>

      <div className="flex items-center">
        <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer">
          <InstagramIcon className="hover:animate-wiggle h-6 w-6 fill-gray-400" />
        </a>
      </div>
    </footer>
  );
};
