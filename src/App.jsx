import "./App.css";
import Header from "./components/header/Header";
import NavigationMenu from "./components/navigation/NavigationMenu";
import Content from "./components/content/Content";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="container">
      <Header />
      <NavigationMenu />
      <Content />
      <Footer />
    </div>
  );
}
