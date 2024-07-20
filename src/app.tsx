import { About } from "@components/About";
import { Contact } from "@components/Contact";
import { Experiments } from "@components/Experiments";
import { Header } from "@components/Header";
import { Hero } from "@components/Hero";
import { Footer } from "@components/Footer";
import { Projects } from "@components/Projects";
import { Providers } from "@components/Providers";

import "./styles/globals.css";

function App() {
  return (
    <Providers>
      <div className="h-full w-full flex flex-col justify-center items-center gap-4 md:px-8 max-w-6xl mx-auto">
        <Header />
        <main className="h-full w-full bg-secondary">
          <Hero title="TBD - Feature graphic" />
          <div className="w-full h-full flex flex-col justify-start items-start space-y-12 md:space-y-24">
            <About />
            <Projects />
            <Experiments />
            <Contact />
          </div>
        </main>
      </div>
      <Footer />
    </Providers>
  );
}

export default App;
