import ButtonGradient from "./assets/svg/ButtonGradient";
import Hero from "./components/Hero";
import Header from "./components/header";
import { Benifits } from "./components/benifits";
import Collabration from "./components/Collabration";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";
import LastSegment from "./components/LastSegment";

const App = () => {
  return (
    <>
      <ButtonGradient />
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benifits />
        <Collabration />
        <Services />
        <Pricing />
        <Roadmap />
        <LastSegment />
      </div>
    </>
  );
};

export default App;
