import { Activity } from "./Activity";

export const HomeActivities = () => {
  return (
    <section className="px-8 lg:px-40">
      <div className="main-grid">
        <Activity imgSrc="/images/nora.jpeg" label="Yoga" />

        <Activity
          imgSrc="/images/corporate-yoga.jpeg"
          label="Corporate Wellness"
        />

        <Activity imgSrc="/images/nutrition.png" label="Nutrition" />
      </div>
    </section>
  );
};
