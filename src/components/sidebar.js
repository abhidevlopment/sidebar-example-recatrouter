import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "../components/Home";
import Bubblegum from "../components/Bubblegum";
import Shoelaces from "../components/Shoelaces";
const routes = [
  {
    path: "/",
    exact: true,
    sidebar: () => <div>home</div>,
    main: () => <Home />
  },

  {
    path: "/bubblegum",
    sidebar: () => <div>bubblegum</div>,
    main: () => <Bubblegum />
  },

  {
    path: "/shoelaces",
    sidebar: () => <div>shoelaces</div>,
    // main: () => <div>Shoelaces</div>
    main: () => <Shoelaces />
  }
];

class Sidebar extends Component {
  render() {
    return (
      <Router>
        <div style={{ display: "flex" }}>
          <div
            style={{
              padding: "10px",
              width: "40%",
              background: "#f0f0f0"
            }}
          >
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/bubblegum">Bubblegum</Link>
              </li>
              <li>
                <Link to="/shoelaces">Shoelaces</Link>
              </li>
            </ul>
            {routes.map(route => (
              <Route
                key={route.path}
                path={route.path}
                exact={route.exact}
                component={route.sidebar}
              />
            ))}
          </div>

          <div style={{ flex: 1, display: "10px" }}>
            {routes.map(route => (
              <Route
                key={route.path}
                path={route.path}
                exact={route.exact}
                component={route.main}
              />
            ))}
          </div>
        </div>
      </Router>
    );
  }
}

export default Sidebar;
