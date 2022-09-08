import {
  AboutMeSection,
  Footer,
  HeroSection,
  ProjectSection,
  SkillsSection,
} from "./components";
import MainLayout from "./layout/MainLayout";

function App() {
  return (
    <MainLayout>
      <div className="max-w-none md:max-w-[60vw] mx-auto p-5 md:p-0">
        <HeroSection />
        <AboutMeSection />
        <SkillsSection />
        <ProjectSection />
        <Footer/>
      </div>
    </MainLayout>
  );
}

export default App;
