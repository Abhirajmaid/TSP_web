import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Home } from "./pages";
import { BackToTopButton, Footer, NavBar } from "./components/common";


const App = () => {
  const [showButton, setShowButton] = useState(false);
  const route = useLocation();

  window.addEventListener("scroll", () => {
    window.scrollY > 500 ? setShowButton(true) : setShowButton(false);
  });


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [route]);


  return (
    <div>
      <NavBar />
      <div
        className="min-h-screen pb-17"
      >
        {/* <ToastContainer /> */}
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <div className="">
        <Footer />
      </div>
      <BackToTopButton showButton={showButton} />
    </div >

  );
}

export default App;
