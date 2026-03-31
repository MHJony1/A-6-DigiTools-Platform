
import { useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import CTA from './Components/CTA/CTA'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'
import Pricing from './Components/Pricing/Pricing'
import Products from './Components/Product/Products'
import Stats from './Components/Stats/Stats'
import Steps from './Components/Steps/Steps'

// pricing card data fectching
const pricingPromise = async () => {
  const res = await fetch('/pricing.json');
  return res.json();
}
const pricingData = pricingPromise();

// products card data fetching
const productsPromise = async () => {
  const res = await fetch('/products.json');
  return res.json();
}
const productsData = productsPromise(); 


function App() {
  const [cart, setCart] = useState([]);
  return (
    <>
      <Navbar cartCount={cart.length} />
      <Banner />
      <Stats />

      <Products productsData={productsData} cart={cart} setCart={setCart} />


      <Steps />
      <Pricing pricingData={pricingData} />
      

      <CTA />
      <Footer />
     
    </>
  )
}

export default App
