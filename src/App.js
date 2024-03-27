import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Router from "./Router";
import { Header } from "./Components/Header/Header";
import { Footer } from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
