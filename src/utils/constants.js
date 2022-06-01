import yogaPic from "../../public/images/yoga.jpg";
import corporateWellnessPic from "../../public/images/corporate-wellness.jpg";
import nutritionPic from "../../public/images/nutrition.jpeg";
import aboutMePic from "../../public/images/about-me.jpg";

export const PAGE_LINKS = [
  { label: "About Me", to: "about-me" },
  { label: "Corporate Wellness", to: "corporate-wellness" },
  { label: "Yoga", to: "yoga" },
  { label: "Nutrition", to: "nutrition" },
];

export const ACTIVITIES = [
  { label: "Yoga", href: "/yoga", pic: yogaPic },
  {
    label: "Corporate Wellness",
    href: "/corporate-wellness",
    pic: corporateWellnessPic,
  },
  { label: "Nutrition", href: "/nutrition", pic: nutritionPic },
  { label: "About Me", href: "/about-me", pic: aboutMePic },
];

export const INSTAGRAM_LINK = "https://www.instagram.com/nora.lubberich/";
