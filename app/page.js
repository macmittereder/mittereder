"use client";

import { useEffect } from "react";
import ReactGA from "react-ga4";
import Background from "../components/Nav/Background";
import Layout from "../components/Nav/Layout";
import Header from "../components/Nav/Header";
import Navigation from "../components/Nav/Navigation";
import Home from "../components/Pages/Home";
import Footer from "../components/Footer/Footer";

ReactGA.initialize("G-3QVK5N1Q3E");

export default function HomePage() {
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: "/" });
  }, []);

  return (
    <>
      <Background />
      <Layout>
        <Navigation />
        <Header />
        <Home />
        <Footer />
      </Layout>
    </>
  );
}
