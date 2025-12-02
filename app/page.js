"use client";
import Background from "../components/Nav/Background";
import Layout from "../components/Nav/Layout";
import Header from "../components/Nav/Header";
import Navigation from "../components/Nav/Navigation";
import Home from "../components/Pages/Home";
import Footer from "../components/Footer/Footer";

export default function HomePage() {
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
