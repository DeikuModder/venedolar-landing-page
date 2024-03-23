import Download from "./components/Download";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Presentation from "./components/Presentation";

function App() {
  return (
    <>
      <Header />
      <main>
        <Presentation />
        <Features />
        <Download />
      </main>
      <Footer />
    </>
  );
}

export default App;
