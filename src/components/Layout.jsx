import "../index.css";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function Layout({setSection}) {
  return (
    <>
        <Navigation setSection={setSection}/>
        <main id="main">
          <Outlet />
        </main>
        <Footer/>
    </>
  );
}
