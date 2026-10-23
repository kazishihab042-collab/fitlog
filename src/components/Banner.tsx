import Image from "next/image";
import bannerImage from "@/assets/banner.png";

const Banner = () => {
  return (
    <div className="hero container mx-auto min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <Image
          src={bannerImage}
          alt="Fitness exercise banner"
          width={500}
          height={400}
          className="max-w-sm rounded-lg shadow-2xl"
          priority
        />

        <div>
          <p>WORKOUT LIBRARY</p>
          <h1 className="text-5xl font-bold">
            TRAIN WITH INTENT. LOG EVERY SET.
          </h1>

          <p className="py-6">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today's plan, and watch the week's work add up.
          </p>

          <button className="btn btn-success">Browse Workouts</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
