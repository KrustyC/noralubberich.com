import { Activity } from "./Activity";
import noraPic from "../../../public/images/nora.jpeg";
import corporateWellnessPic from "../../../public/images/corporate-wellness.jpeg";
import nutritionPic from "../../../public/images/nutrition.png";

export const HomeActivities = () => {
  return (
    <section className="px-8 lg:px-40">
      <div className="main-grid">
        <Activity imgSrc={noraPic} label="Yoga" />

        <Activity imgSrc={corporateWellnessPic} label="Corporate Wellness" />

        <Activity imgSrc={nutritionPic} label="Nutrition" />
      </div>
    </section>
  );
};
