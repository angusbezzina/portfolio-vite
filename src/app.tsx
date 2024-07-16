import { About } from "@components/About";
import { Header } from "@components/Header";
import { Hero } from "@components/Hero";
import { Footer } from "@components/Footer";
import { Projects } from "@components/Projects";
import { Providers } from "@components/Providers";

import "./styles/globals.css";

function App() {
  return (
    <Providers>
      <div className="h-full w-full flex flex-col justify-center items-center gap-4 px-4 max-w-6xl mx-auto">
        <Header />
        <main className="h-full w-full bg-secondary">
          <Hero title="TBD - Feature graphic" />
          <About />
          <Projects />
        </main>
        <Footer />
      </div>
    </Providers>
  );
}

export default App;
