import { AboutMeSection, HeroSection } from "./components";
import MainLayout from "./layout/MainLayout";

function App() {
  return (
    <MainLayout>
      <HeroSection />
      <AboutMeSection />
    </MainLayout>
  );
}

export default App;
