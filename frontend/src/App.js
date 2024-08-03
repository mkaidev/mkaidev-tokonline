import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <ToastContainer position="top-center" />
      <Header />
      <main className="min-h-[calc(100vh-100px)] pt-16">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
