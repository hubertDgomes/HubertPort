import "./App.css";
import Home from "./assets/components/pages/Home";
import Lenis from "lenis";


function App() {
  const lenis = new Lenis({
    autoRaf: true,
  });
  lenis.on("scroll", (e) => {});
  return (
    <>
      <Home />
    </>
  );
}

export default App;
