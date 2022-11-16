import { Fade } from "react-awesome-reveal";

const skills = [
  {
    imgUrl: "images/html.svg",
    linkUrl: "https://html.com/",
  },
  {
    imgUrl: "images/css.svg",
    linkUrl: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    imgUrl: "images/js.svg",
    linkUrl: "https://javascript.info/",
  },
  // {
  //   imgUrl: "images/typescript.svg",
  //   linkUrl: "https://www.typescriptlang.org/",
  // },
  {
    imgUrl: "images/react.svg",
    linkUrl: "https://reactjs.org/",
  },
  {
    imgUrl: "images/redux.svg",
    linkUrl: "https://redux-toolkit.js.org/",
  },
  {
    imgUrl: "images/tailwind.svg",
    linkUrl: "https://tailwindcss.com/",
  },
  {
    imgUrl: "images/bootstrap.svg",
    linkUrl: "https://getbootstrap.com/",
  },
  {
    imgUrl: "images/nextjs.svg",
    linkUrl: "https://nextjs.org/",
  },
  {
    imgUrl: "images/scss.svg",
    linkUrl: "https://sass-lang.com/",
  },
  {
    imgUrl: "images/react-router-dom.svg",
    linkUrl: "https://reactrouter.com/",
  },
  {
    imgUrl: "images/react-query.svg",
    linkUrl: "https://tanstack.com/query/v4",
  },
  {
    imgUrl: "images/cplusplus.svg",
    linkUrl: "https://cplusplus.com/doc/tutorial/",
  },
  // {
  //   imgUrl: "images/java.svg",
  //   linkUrl: "https://dev.java/learn/",
  // },
  {
    imgUrl: "images/git.svg",
    linkUrl: "https://git-scm.com/doc",
  },
  {
    imgUrl: "images/antd.svg",
    linkUrl: "https://ant.design/",
  },
];

const SkillCard = ({ data }) => {
  return (
    <Fade
      direction="down"
      triggerOnce
      className={`flex items-center justify-center w-1/6 max-w-[106px] min-w-[80px] aspect-square bg-black border border-themeColor rounded-xl hover:shadow-[0_5px_30px] hover:shadow-themeColor transition-all ease-in duration-400 ${data.class}`}
    >
      <a href={data.linkUrl} target="_blank" rel="noreferrer">
        <img src={data.imgUrl} alt={data.imgUrl} />
      </a>
    </Fade>
  );
};

export const SkillsSection = () => {
  return (
    <section className="pb-24">
      <Fade triggerOnce>
        <h2 className="text-themeColor text-center mb-8">Skills</h2>
      </Fade>
      <div className="flex items-center justify-between flex-wrap gap-11">
        {skills.map((skill, i) => (
          <SkillCard data={skill} key={i} />
        ))}
      </div>
    </section>
  );
};
