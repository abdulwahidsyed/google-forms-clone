import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Router from "./Router";
import { Header } from "./Components/Header/Header";
import { Footer } from "./Components/Footer/Footer";
import { useFetchInitialData } from "./hooks/useFetchInitialData";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  useFetchInitialData();

  return (
    <div className="App">
      <Header />
      <ToastContainer />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
