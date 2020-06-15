import React from 'react';
import './App.css';
import Header from "./components/Header";
import MainContent from "./components/MainContent";

export default function App() {
  return (
    <div className="App">
      <Header> Cards Collection </Header>
        <MainContent title={"Animal Collection"}></MainContent>
    </div>
  );
}

