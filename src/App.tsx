import { createPortal } from "react-dom"
import DownloadSection from "./Components/DownloadSection"
import FeaturesSection from "./Components/FeaturesSection"
import HomeSection from "./Components/HomeSection"
import Footer from "./Components/Footer"

function App() {
 
  
  return (
    <>
      <header>
        <h1>Conoce el precio del dolar actualizado!</h1>
      </header>
      <HomeSection />
      <FeaturesSection />
      <DownloadSection />
      {
        createPortal(<Footer />, document.body)
      }
    </>
  )
}

export default App
