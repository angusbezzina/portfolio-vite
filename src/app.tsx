import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Footer } from "./components/Footer";

import "./styles/globals.css";

function App() {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center gap-4 px-4 max-w-4xl mx-auto">
      <Header />
      <main className="">
        <Hero title="TBD - Feature graphic" />
      </main>
      <Footer />
    </div>
  );
}

export default App;
