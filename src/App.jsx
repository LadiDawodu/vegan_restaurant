import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Container from "./Components/Container.jsx";
import Body from "./Components/Body/Body.jsx";
import SideMenu from "./Components/SideMenu/SideMenu.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import { auth } from "../src/js/firebase.jsx";

function App() {
  const [authenticated, setAuthenticated] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      console.debug("user has changed", user);
      if (user) {
        setAuthenticated(true);
      } else {
        setAuthenticated(false);
      }
    });

    return () => unsubscribe();
  }, []);

  if (authenticated === undefined) {
    console.log("no user");
    return "Woow";
  }

  console.log("authenticated:", authenticated);

  return (
    <Router>
      <div className="flex items-center justify-center">
        <Navbar authenticated={authenticated} />

        <Routes>
          <Route path="/" element={<Container />}>
            {/* Nested routes */}
            <Route index element={<Body authenticated={authenticated} />} />

            <Route
              path="/menu"
              element={
                authenticated !== undefined && (
                  <SideMenu authenticated={authenticated} />
                )
              }
            />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export { App };
