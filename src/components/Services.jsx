import Section from "./section"; // 1. Check if used
import Heading from "./Heading"; // 1. Check if used
import { check, service1, service2, service3 } from "../assets"; // 1. Check if used
import { brainwaveServices, brainwaveServicesIcons } from "../constants"; // 1. Check if used
import Generating from "./Generating"; // 1. Check if used
import {
  PhotoChatMessage,
  Gradient,
  VideoBar,
  VideoChatMessage,
} from "../design/Services"; // 1. Check if used

const Services = () => {
  return (
    <Section id="how-to-use">
      <div className="container">
        <Heading
          title="Generation AI Made For Creators"
          text="Brainwave Unlocks The Pontential Of AI-Powered Applications"
        />
      </div>
      <div className="relative flex justify-center">
        <div className="relative z-1 flex items-center w-full mr-5 ml-5 h-[30rem] lg:w-[52rem] xl:w-[65rem] md:block md:w-[38rem] lg:mr-5 lg:ml-5 mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
            <img
              className="w-full h-full object-cover md:object-right"
              width={800}
              height={730}
              src={service1}
              alt=""
            />
          </div>
          <div className="relative z-1 max-w-[17rem] ml-auto text-center">
            <h4 className="h-4 mb-4">Smartest AI</h4>
            <p className="body-2 mb-[3rem] text-n-3">
              Brainwave unlocks the potential of AI-powered applications
            </p>
            <ul className="body-2">
              {brainwaveServices.map(
                (
                  item,
                  index // 7. Check array mapping
                ) => (
                  <li
                    key={index}
                    className="flex items-start py-4 border-t border-n-6"
                  >
                    <img width={24} height={24} src={check} alt="" />
                    <p className="ml-4">{item}</p>
                  </li>
                )
              )}
            </ul>
          </div>
          <Generating className="absolute left-4 right-4 bottom-4 border-n-1/10 border lg:left-1/2" />{" "}
          {/* 3. Check props passing */}
        </div>
      </div>
      <div className="block mx-auto lg:w-[52rem] xl:w-[65rem] md:flex md:justify-center">
        <div className="relative z-1 grid lg:space-x-6 lg:grid-cols-2">
          <div className="relative min-h-[39rem] xl:w-[31rem] lg:w-[26rem] sm:w-full md:w-[38.2rem] ml-5 mr-5 h-full border border-n-1/10 rounded-3xl overflow-hidden">
            <div className="absolute inset-0">
              <img
                src={service2}
                className="h-full w-full object-cover"
                width={630}
                height={750}
                alt=""
              />
            </div>
            <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
              <h4 className="h-4 mb-4">Photo Editing</h4>
              <p className="body-2 mb-[3rem] text-n-3">
                Automatically enhance your photos using our AI app photo editing
                feature. Try it now!
              </p>
              <PhotoChatMessage /> {/* 3. Check props passing */}
            </div>
          </div>
          <div className="p-4 rounded-3xl bg-n-7 overflow-hidden xl:w-[31rem] md:w-[38.2rem] lg:w-[26rem] mr-5 ml-5 mt-5 lg:mt-0 sm:w-full lg:min-h-[39rem]">
            <div className="py-12 px-4 xl:px-8">
              <h4 className="h4 mb-4">Video Generation</h4>
              <p className="body-2 mb-[2rem] text-n-3">
                The world most powerful AI photo and video art genration engine.
                What will you create?
              </p>
              <ul className="flex items-center justify-between">
                {brainwaveServicesIcons.map(
                  (
                    item,
                    index // 7. Check array mapping
                  ) => (
                    <li
                      className={`flex items-center justify-center rounded-2xl ${
                        index === 2
                          ? "w-[3rem] h-[3rem] p-0.25 bg-conic-gradient md:w-[4.5rem] md:h-[4.5rem]"
                          : "flex w-10 h-10 bg-n-6 md:w-15 md:h-15"
                      }`}
                      key={index}
                    >
                      <div
                        className={
                          index === 2
                            ? "flex items-center justify-center w-full h-full bg-n-7 rounded-[1rem]"
                            : ""
                        }
                      >
                        <img src={item} width={24} height={24} alt="" />
                      </div>
                    </li>
                  )
                )}
              </ul>
            </div>
            <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
              <img
                src={service3}
                className="w-full h-full object-cover"
                width={520}
                height={400}
                alt="Scary Robot"
              />
              <VideoChatMessage /> {/* 3. Check props passing */}
              <VideoBar /> {/* 3. Check props passing */}
            </div>
          </div>
        </div>
        <Gradient />
      </div>
    </Section>
  );
};

export default Services;
