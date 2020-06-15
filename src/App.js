import React from 'react';
import './App.css';
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

export default function App() {
    const animals = [
        {
            title: "Giraffe",
            text: "vhfsvjhfdbsgdh oisfbjhsdb djfbg ksdbiu v  dfgpisfpisdg ",
            imgsource:"https://i.pinimg.com/originals/59/30/c8/5930c86254cf1dc8064a63cc4c11f714.jpg",
        },
        {
            title: "Affe",
            text: "vhfsvjhfdbsgdh oisfbjhsdb djfbg ksdbiu v  dfgpisfpisdg ",
            imgsource:"https://i.pinimg.com/originals/59/30/c8/5930c86254cf1dc8064a63cc4c11f714.jpg",
        },
        {
            title: "Biene",
            text: "vhfsvjhfdbsgdh oisfbjhsdb djfbg ksdbiu v  dfgpisfpisdg ",
            imgsource:"https://i.pinimg.com/originals/59/30/c8/5930c86254cf1dc8064a63cc4c11f714.jpg",
        },
        {
            title: "Biene",
            text: "vhfsvjhfdbsgdh oisfbjhsdb djfbg ksdbiu v  dfgpisfpisdg ",
            imgsource:"https://i.pinimg.com/originals/59/30/c8/5930c86254cf1dc8064a63cc4c11f714.jpg",
        },
    ]

  return (
    <div className="App">
        <Header> Cards Collection </Header>
        <MainContent animals={animals}></MainContent>
        <Footer>footer Text</Footer>
    </div>
  );
}

