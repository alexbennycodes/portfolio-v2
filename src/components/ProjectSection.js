import { Fade } from "react-awesome-reveal";
import { Button } from "./Button";

const ProjectCard = ({ data, index }) => {
  return (
    <Fade direction={index % 2 === 0 ? "left" : "right"} triggerOnce>
      <div className="flex flex-wrap w-full mx-auto mb-20">
        <div
          className={`bg-cover bg-center w-full lg:w-2/5 h-64 lg:h-auto aspect-video relative ${
            index % 2 === 0 ? "lg:order-first" : "lg:order-last"
          }`}
          style={{
            backgroundImage: `url(${data.imgUrl})`,
          }}
        ></div>

        <div className=" w-full lg:w-3/5">
          <div
            className={`h-full mx-auto px-3 lg:px-0 lg:pt-6 relative ${
              index % 2 === 0 ? "lg:-ml-6" : "lg:-mr-6"
            }`}
          >
            <div className="bg-darkThemeColor lg:h-full lg:min-h-[272px] px-4 py-6 -mt-6 lg:mt-0 relative mb-4 lg:mb-0  items-start text-white flex flex-col justify-center">
              <div className="w-full lg:border-right lg:border-solid text-center lg:text-left">
                <h3 className="text-themeColor text-2xl font-serif mb-2">
                  {data.title}
                </h3>
                <div className="mb-2">
                  {data.tags.map((tag, i) => (
                    <span
                      className="inline-block bg-themeColor text-[0.7rem] px-2 rounded-full uppercase mr-3"
                      key={i}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="w-full">
                <p className="text-sm lg:text-md">{data.desc}</p>
              </div>

              <div className="mt-4">
                <Button className="mr-3" link={data.liveLink}>
                  Live
                </Button>
                <Button className="mr-3" link={data.codeLink}>
                  Code
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
};

const projectData = [
  {
    title: "World Almanac",
    imgUrl: "images/project2.jpg",
    tags: ["React", "React Query", "React router dom", "Tailwind", "Axios"],
    desc: "World Almanac is an application that allows you to view detailed information about all of the countries in the world. You may also filter by area and use the search option to locate the nation you're searching for. The relevant data is retrieved via the Rest Countries API.",
    liveLink: "https://world-almanac.vercel.app/",
    codeLink: "https://github.com/alexbennycodes/world-almanac-react",
  },
  {
    title: "Weather App",
    imgUrl: "images/project4.png",
    tags: ["React", "Tailwind css", "Luxon Library"],
    desc: "The best weather and forecast app built with the OpenWeather API. It displays the current weather as well as hourly and daily forecasts. It has a search function and can display the weather in the user's current location. It provides both Celsius and Fahrenheit temperatures.",
    liveLink: "https://alexbennycodes.github.io/weather-app/",
    codeLink: "https://github.com/alexbennycodes/weather-app",
  },
  {
    title: "Wordle Clone",
    imgUrl: "images/project1.jpeg",
    tags: ["Html", "scss", "Javascript"],
    desc: "A clone of the popular Wordle Game with the added feature of unlimited play without a daily restriction. It's also responsive, so you can play it on both your smartphone and your PC. Give it a go and let me know what you think.",
    liveLink: "https://alexbennycodes.github.io/wordle-clone/",
    codeLink: "https://github.com/alexbennycodes/wordle-clone",
  },
];

export const ProjectSection = () => {
  return (
    <section className="py-44" id="projects">
      <Fade triggerOnce>
        <h2 className="text-center text-themeColor mb-16">Projects</h2>
      </Fade>
      {projectData.map((data, i) => (
        <ProjectCard data={data} key={i} index={i} />
      ))}
    </section>
  );
};
