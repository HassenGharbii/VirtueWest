import { maindashboard } from "../assets/images";
import { Button } from "../components";

const SuperQuality = () => {
  return (
    <>
      <div id="about-us" className="h-[93px]"></div>
      <section className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
        <div className="flex flex-1 flex-col">
          <h2
            className="font-palanquin text-4xl capitalize 
          font-bold lg:max-w-lg"
          >
            We Build You
            <span className="text-coral-red inline-block mt-3">&nbsp;Smart</span>
            <br />
            <span className="text-coral-red inline-block mt-3">Dashboards</span>
          </h2>
          <p className="mt-4 lg:max-w-lg info-text">
            Delivering modern, data-driven solutions, our expertly designed dashboards are made to
            enhance your workflow—giving you powerful insights with style and clarity.
          </p>
          <p className="mt-6 lg:max-w-lg info-text">
            We focus on usability, speed, and design to help your team make better decisions, faster.
          </p>
          <div className="mt-11">
            <Button label="View Details" />
          </div>
        </div>
        <div className="flex flex-1 justify-center items-center">
          <img
            src={maindashboard}
            alt="dashboard preview"
            width={570}
            height={522}
            className="object-contain"
          />
        </div>
      </section>
    </>
  );
};

export default SuperQuality;
