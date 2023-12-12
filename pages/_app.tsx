import NavigationBar from "./components/NavigationBar" 
import LinkableImageSection from "./components/LinkableImageSection"
import "../pages/style.css"
import ItineraryCarousel from "./components/ItineraryCarousel"
import CallToActionSection from "./components/CallToActionSection"
import * as React from 'react';



export default function App() {
  return (
    <div>
        <NavigationBar /> 
        <LinkableImageSection />
        <CallToActionSection />
        <ItineraryCarousel />
   </div>
  )
}
