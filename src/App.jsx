import { useState } from "react";

import { Route, Switch } from "wouter";
import MainLayout from "./Layout/MainLayout";
import Bookmark from "./Pages/Bookmark";
import Home from "./Pages/Home";
import Random from "./Pages/Random";


function App() {
  return (
    <div className="App">
      <MainLayout>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/random" component={Random} />
          <Route path="/bookmarks" component={Bookmark} />
        </Switch>
      </MainLayout>
    </div>
  );
}

export default App;
