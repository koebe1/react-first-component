import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Popular from "./components/popular";
import Battle from "./components/battle";
import Results from "./components/results";
import { ThemeProvider } from "./context/theme";
import Nav from "./components/nav";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: "dark",
      toggleTheme: () => {
        this.setState(({ theme }) => ({
          theme: theme === "light" ? "dark" : "light"
        }));
      }
    };
  }

  render() {
    return (
      <Router>
        <ThemeProvider value={this.state}>
          <div className={this.state.theme}>
            <div className="container">
              <Nav />
              <Route exact path="/" component={Popular} />
              <Route exact path="/battle" component={Battle} />
              <Route exact path="/battle/results" component={Results} />
            </div>
          </div>
        </ThemeProvider>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
