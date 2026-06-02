import { useState } from "preact/hooks";
import { Footer, Navbar } from "./components";
import {
  Contact,
  CookiePolicy,
  Default,
  Homa,
  Privacy,
  RefundPolicy,
  Terms,
} from "./pages";
import { Router } from "preact-router";

export function App() {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");

  const handleRouteUpdate = () => {
    // We use setTimeout with 0ms to let Preact finish rendering the new page FIRST
    setTimeout(() => {
      if (window.location.hash) {
        // If there's a hash (like #methodology-section), scroll to it
        const element = document.querySelector(window.location.hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        // If there is no hash, scroll to the top of the page (good practice for normal links)
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 0);
  };

  return (
    <>
      <Navbar />
      <Router onChange={handleRouteUpdate}>
        <Homa path={`${base}/`} />
        <Privacy path={`${base}/privacypolicy`} />
        <Terms path={`${base}/terms`} />
        <CookiePolicy path={`${base}/cookiepolicy`} />
        <Contact path={`${base}/contact`} />
        <RefundPolicy path={`${base}/refundpolicy`} />
        <Default default />
      </Router>
      <Footer />
    </>
  );
}
