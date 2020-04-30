import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./styles/main.css";
import Header from "./views/Header/Header";
import ContentPage from "./views/ContentPage/ContentPage";
function App() {
  return (
    <div id="page-wrapper">
      <div id="page">
        <Header />
        <ContentPage></ContentPage>
      </div>
    </div>
  );
}

export default App;
