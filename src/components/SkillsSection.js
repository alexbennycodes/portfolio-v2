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
  {
    imgUrl: "images/react.svg",
    linkUrl: "https://reactjs.org/",
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
    imgUrl: "images/tailwind.svg",
    linkUrl: "https://tailwindcss.com/",
  },
  {
    imgUrl: "images/bootstrap.svg",
    linkUrl: "https://getbootstrap.com/",
  },
  {
    imgUrl: "images/cplusplus.svg",
    linkUrl: "https://cplusplus.com/doc/tutorial/",
  },
  {
    imgUrl: "images/java.svg",
    linkUrl: "https://dev.java/learn/",
  },
  {
    imgUrl: "images/git.svg",
    linkUrl: "https://git-scm.com/doc",
  },
  {
    imgUrl: "images/antd.svg",
    linkUrl: "https://ant.design/",
  },
  {
    imgUrl: "images/figma.svg",
    linkUrl: "https://www.figma.com/",
    class: "hidden lg:flex",
  },
  {
    imgUrl: "images/photoshop.svg",
    linkUrl: "https://www.adobe.com/in/products/photoshop.html",
    class: "hidden lg:flex",
  },
];

const SkillCard = ({ data }) => {
  return (
    <a
      href={data.linkUrl}
      target="_blank"
      rel="noreferrer"
      className={`flex items-center justify-center w-1/6 max-w-[106px] min-w-[80px] aspect-square bg-black border border-themeColor rounded-xl hover:shadow-[0_5px_30px] hover:shadow-themeColor transition-all ease-in duration-400 ${data.class}`}
    >
      <img src={data.imgUrl} alt={data.imgUrl} className="w-1/2 h-1/2" />
    </a>
  );
};

export const SkillsSection = () => {
  return (
    <section className="pb-24">
      <h2 className="text-themeColor text-center mb-8">Skills</h2>
      <div className="flex items-center justify-between flex-wrap gap-11">
        {skills.map((skill, i) => (
          <SkillCard data={skill} key={i} />
        ))}
      </div>
    </section>
  );
};
