import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Bloglist from "./pages/Bloglist";
import BlogDetails from "./pages/BlogDetails";
import "font-awesome/css/font-awesome.min.css";
import "./App.scss";
import Paperslist from "./pages/PapersList";
import PaperDetails from "./pages/PaperDetails";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Homepage />
        </Route>
        <Route path="/blogs" component={Bloglist} exact />
        <Route path="/blogs/blog-details/:id/:title" component={BlogDetails} />
        <Route path="/papers" component={Paperslist} exact />
        <Route path="/paper/:urlTitle/" component={PaperDetails} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
