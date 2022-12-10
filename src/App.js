import {
  AboutMeSection,
  Footer,
  HeroSection,
  ProjectSection,
  SkillsSection,
  // Contact,
} from "./components";
import MainLayout from "./layout/MainLayout";

function App() {
  return (
    <MainLayout className="scroll-smooth">
      <div className="max-w-none md:max-w-[60vw] mx-auto py-5 px-8 md:p-0">
        <HeroSection />
        <AboutMeSection />
        <SkillsSection />
        <ProjectSection />
        {/* <Contact /> */}
        <Footer />
      </div>
    </MainLayout>
  );
}

export default App;
