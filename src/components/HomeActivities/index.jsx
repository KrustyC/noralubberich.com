import { Activity } from "./Activity";
import yogaPic from "../../../public/images/yoga.jpg";
import corporateWellnessPic from "../../../public/images/corporate-wellness.jpg";
import nutritionPic from "../../../public/images/nutrition.png";

export const HomeActivities = () => {
  return (
    <section className="px-8 lg:px-40">
      <div className="main-grid">
        <Activity imgSrc={yogaPic} label="Yoga" />

        <Activity imgSrc={corporateWellnessPic} label="Corporate Wellness" />

        <Activity imgSrc={nutritionPic} label="Nutrition" />
      </div>
    </section>
  );
};
