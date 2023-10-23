import { useState, useEffect } from "react";
import DesktopPage from "./components/Desktop/DesktopPage/DesktopPage.tsx";
import MobilePage from "./components/Mobile/MobilePage/MobilePage.tsx";

const App = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <>{isMobile ? <MobilePage /> : <DesktopPage />}</>;
};

export default App;
