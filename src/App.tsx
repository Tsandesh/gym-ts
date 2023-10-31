import Navbar from "@/scenses/navbar";
import Home from "@/scenses/home";
import Benifits from "@/scenses/benifits";
import OurClasses from "@/scenses/ourClasses";

import { useEffect, useState } from "react";
import { SelectedPage } from "@/shared/types";

import Footer from "./scenses/footer";
import ContactUs from "./scenses/contactUs";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      } else {
        setIsTopOfPage(false);
      }
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    };
    handleScroll();
  }, []);
  return (
    <div className="app bg-gray-50">
      <Navbar
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        isTopOfPage={isTopOfPage}
      />
      <Home setSelectedPage={setSelectedPage} />
      <Benifits setSelectedPage={setSelectedPage} />
      <OurClasses setSelectedPage={setSelectedPage} />
      <ContactUs setSelectedPage={setSelectedPage} />
      <Footer />
    </div>
  );
}

export default App;
