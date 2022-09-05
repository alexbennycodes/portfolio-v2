import { AboutMeSection, HeroSection, SkillsSection } from "./components";
import MainLayout from "./layout/MainLayout";

function App() {
  return (
    <MainLayout>
      <div className="max-w-none md:max-w-[60vw] mx-auto p-7 md:p-0">
        <HeroSection />
        <AboutMeSection />
        <SkillsSection />
      </div>
    </MainLayout>
  );
}

export default App;
