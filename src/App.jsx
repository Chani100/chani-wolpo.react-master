import { useEffect, useState } from "react";

/* toast */
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "../src/css/App.css";
import Router from "./routes/Router";
import { useSelector } from "react-redux";
import useLoggedIn from "./hooks/useLoggedIn";

import { Container } from "react-bootstrap";
import Footer from "./components/Footer";
import Navbars from "./components/Navbarrr";
import LogoutTimer from "./components/Logout";
import { useNavigate } from "react-router-dom";
import ROUTES from "./routes/ROUTES";
import ProtectedRoute from "./components/ProtectedRoute";
const naviget = useNavigate;
const light = {
  palette: {
    mode: "light",
  },
};

const dark = {
  palette: {
    mode: "dark",
  },
};

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const loggedIn = useLoggedIn();
  useEffect(() => {
    (async () => {
      await loggedIn();
      setIsLoading(false);
    })();
  }, []);

  const isDarkTheme = useSelector(
    (bigPie) => bigPie.darkThemeSlice.isDarkTheme
  );
 
  const handleLogout = () => {
    naviget(ROUTES.LOGIN);
  };
  return (
    /* <ThemeProvider theme={isDarkTheme ? createTheme(dark) : createTheme(light)}> */

    <div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
        theme="colored"
      />

      <LogoutTimer onLogout={handleLogout} /> : {/* <ProtectedRoute /> */}

      <header>
        <Navbars />
      </header>

      <main>
        <Router />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
    /* </ThemeProvider>  */
  );
}

export default App;
