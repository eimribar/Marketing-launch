import { useEffect } from 'react'
import './App.css'
import Pages from "@/pages/index.jsx"
import { Toaster } from "@/components/ui/toaster"
import { initializeMarketingData } from "@/data/initializeDemoData"

function App() {
  useEffect(() => {
    // Initialize demo data on first load
    initializeMarketingData().then(result => {
      if (result) {
        console.log('Marketing demo data initialized:', result);
      }
    }).catch(error => {
      console.error('Error initializing demo data:', error);
    });
  }, []);

  return (
    <>
      <Pages />
      <Toaster />
    </>
  )
}

export default App