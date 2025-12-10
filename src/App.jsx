import { Routes, Route } from "react-router-dom";

import Header from "./components/layout/header/header";
import Footer from "./components/layout/footer/footer";

import Home from "./components/layout/main/Home";
import BeAVolunteer from "./components/layout/main/BeAVolunteer";

const AppRoutes = () => {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/seja-voluntario" element={<BeAVolunteer />}></Route>
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default AppRoutes;
