
import './App.css'
import Banner from './Components/Banner/Banner'
import CTA from './Components/CTA/CTA'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'
import Pricing from './Components/Pricing/Pricing'
import Stats from './Components/Stats/Stats'
import Steps from './Components/Steps/Steps'

const pricingPromise = async () => {
  const res = await fetch('/pricing.json');
  return res.json();
}

const pricingData = pricingPromise();

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Stats />


      <Steps />
      <Pricing pricingData={pricingData} />
      

      <CTA />
      <Footer />
     
    </>
  )
}

export default App
