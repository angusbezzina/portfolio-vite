import { About } from "@components/About";
import { Contact } from "@components/Contact";
import { ChatbotPopover } from "@components/chatbot";
import { Experiments } from "@components/Experiments";
import { Header } from "@components/Header";
import { Hero } from "@components/Hero";
import { Footer } from "@components/Footer";
import { Projects } from "@components/Projects";
import { Providers } from "@components/Providers";
import { StarField } from "@components/scenes";

import "./styles/globals.css";

function App() {
  return (
    <Providers>
      <div className="relative h-full w-full flex flex-col justify-center items-center">
        <StarField className="h-full w-full absolute top-0 left-0 min-h-[100svh]" />
        <div className="h-full w-full flex flex-col justify-center items-center gap-4 md:px-8 max-w-6xl mx-auto z-0">
          <Header />
          <main className="h-full w-full z-10">
            <Hero />
            <div className="w-full h-full flex flex-col justify-start items-start space-y-12 md:space-y-24">
              <About />
              <Projects />
              <Experiments />
              <Contact />
            </div>
          </main>
        </div>
        <ChatbotPopover className="z-40 self-end sticky bottom-4 mb-2 right-4 md:right-8 shrink-0 bg-foreground text-background rounded-lg shadow-lg hidden md:flex items-center justify-center transition-all" />
        <Footer />
      </div>
    </Providers>
  );
}

export default App;
