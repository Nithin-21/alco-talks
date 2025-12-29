import { useState } from "react";
import Header from "./components/Header";
import BrandsContainer from "./BrandsContainer";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  const [query, setQuery] = useState("");

  const handleLogoClick = () => {
    setQuery("");                       // clear search
    window.scrollTo({                  // scroll back to top
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Header
        query={query}
        onQueryChange={setQuery}
        onLogoClick={handleLogoClick}
      />

      <BrandsContainer query={query} />
      
      <Footer />
    </>
  );
}


export default App;
