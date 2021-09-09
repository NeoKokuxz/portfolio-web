import WelcomeSection from "./sections/welcomeSection";
import AboutMeSection from "./sections/aboutmeSection"
import ProjectSection from "./sections/projectSection"
import WordCloudSection from "./sections/wordCloudSection"

function App() {
  return (
    <div className="App">
      <WelcomeSection />
      <AboutMeSection />
      <WordCloudSection />
      <ProjectSection />
    </div>
  );
}

export default App;
