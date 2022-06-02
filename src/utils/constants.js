import yogaPic from "../../public/images/home-yoga.jpeg";
import corporateWellnessPic from "../../public/images/home-corporate-wellness.jpeg";
import nutritionPic from "../../public/images/nutrition.jpeg";

export const PAGE_LINKS = [
  { label: "About Me", to: "/about-me" },
  { label: "Corporate Wellness", to: "/corporate-wellness" },
  { label: "Yoga", to: "/yoga" },
  { label: "Nutrition", to: "/nutrition" },
];

export const ACTIVITIES = [
  {
    label: "Yoga",
    href: "/yoga",
    description:
      "Yoga is more than just a routine to improve physical health – it is a lifestyle choice and a spiritual practice that has been proven to lower overall stress...",
    pic: yogaPic,
  },
  {
    label: "Corporate Wellness",
    href: "/corporate-wellness",
    description:
      "Over the last couple of years there has been a positive shift in the way organisations are approaching the health and wellbeing of their employees...",
    pic: corporateWellnessPic,
  },
  {
    label: "Nutrition",
    description:
      " I began training in nutritional coaching, which enables me to offer a more complete holistic service to my clients...",
    href: "/nutrition",
    pic: nutritionPic,
  },
];

export const INSTAGRAM_LINK = "https://www.instagram.com/nora.lubberich/";
