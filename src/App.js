import {
  AboutMeSection,
  Footer,
  HeroSection,
  ProjectSection,
  SkillsSection,
  Contact,
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
        <Contact />
        <Footer />
      </div>
    </MainLayout>
  );
}

export default App;
