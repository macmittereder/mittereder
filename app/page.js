import Background from "../components/Nav/Background";
import Header from "../components/Nav/Header";
import Navigation from "../components/Nav/Navigation";
import Home from "../components/Pages/Home";
import Footer from "../components/Footer/Footer";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      <Background />
      <Navigation />
      <Header />
      <Home />
      <Footer />
    </div>
  );
}
