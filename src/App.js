import Content from "./components/Content";
import Ecommerce from "./components/Ecommerce";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";


function App() {
  return (
    <div className="App">
       <Header/>
       <Hero/>
       <Content/>
       <Ecommerce/>
       <Footer/>
    </div>
  );
}

export default App;
