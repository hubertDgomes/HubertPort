import "./App.css";
import Home from "./assets/components/pages/Home";
import Lenis from 'lenis'
import Header from "./assets/components/layouts/Header";
import Footer from "./assets/components/layouts/Footer";

function App() {
const lenis = new Lenis({
  autoRaf: true,
});
lenis.on('scroll', (e) => {
  console.log(e);
});
  return (
    <>
      <Home/>  
    </>
  );
}

export default App;
