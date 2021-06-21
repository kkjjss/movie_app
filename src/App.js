import React from "react";
import { HashRouter, Route } from "react-router-dom";
import About from "./routes/about"
import Home from "./routes/home"
import Navigation from "./routes/navigation"

function App() {
  return <HashRouter>
    <Navigation path="/" component={Navigation} />
    <Route path="/" exact={true} component={Home} />
    <Route path="/about" component={About} />
  </HashRouter>
}

export default App;