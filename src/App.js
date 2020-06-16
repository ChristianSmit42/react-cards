import React from 'react';
import './App.css';
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Navigation from "./components/Navigation";

export default function App() {
    const herbavore = [
        {
            title: "Giraffe",
            text: "vhfsvjhfdbsgdh oisfbjhsdb djfbg ksdbiu v  dfgpisfpisdg ",
            imgsource: "https://i.pinimg.com/originals/59/30/c8/5930c86254cf1dc8064a63cc4c11f714.jpg",
        },
        {
            title: "Affe",
            text: "vhfsvjhfdbsgdh oisfbjhsdb djfbg ksdbiu v  dfgpisfpisdg ",
            imgsource: "https://i.pinimg.com/originals/59/30/c8/5930c86254cf1dc8064a63cc4c11f714.jpg",
        },
        {
            title: "Biene",
            text: "vhfsvjhfdbsgdh oisfbjhsdb djfbg ksdbiu v  dfgpisfpisdg ",
            imgsource: "https://i.pinimg.com/originals/59/30/c8/5930c86254cf1dc8064a63cc4c11f714.jpg",
        },
        {
            title: "Kuh",
            text: "vhfsvjhfdbsgdh oisfbjhsdb djfbg ksdbiu v  dfgpisfpisdg ",
            imgsource: "https://i.pinimg.com/originals/59/30/c8/5930c86254cf1dc8064a63cc4c11f714.jpg",
        },
    ]

    const carnivore = [
        {
            title: "Hund",
            text: "vhfsvjhfdbsgdh oisfbjhsdb djfbg ksdbiu v  dfgpisfpisdg ",
            imgsource: "https://i.pinimg.com/originals/59/30/c8/5930c86254cf1dc8064a63cc4c11f714.jpg",
        },
        {
            title: "Löwe",
            text: "vhfsvjhfdbsgdh oisfbjhsdb djfbg ksdbiu v  dfgpisfpisdg ",
            imgsource: "https://i.pinimg.com/originals/59/30/c8/5930c86254cf1dc8064a63cc4c11f714.jpg",
        },
        {
            title: "Mensch",
            text: "vhfsvjhfdbsgdh oisfbjhsdb djfbg ksdbiu v  dfgpisfpisdg ",
            imgsource: "https://i.pinimg.com/originals/59/30/c8/5930c86254cf1dc8064a63cc4c11f714.jpg",
        },
        {
            title: "Krokodil",
            text: "vhfsvjhfdbsgdh oisfbjhsdb djfbg ksdbiu v  dfgpisfpisdg ",
            imgsource: "https://i.pinimg.com/originals/59/30/c8/5930c86254cf1dc8064a63cc4c11f714.jpg",
        },
    ]

    const [getItems, setItems] = React.useState(carnivore);

    function handleClicksToHerbavore(){
        setItems(herbavore);
    }
    function handleClicksToCarnivore(){
        setItems(carnivore);
    }


    return (
        <div className="App">
            <Header> Cards Collection
                <Navigation>
                    <button onClick={handleClicksToCarnivore}>Carnivore</button>
                    <button onClick={handleClicksToHerbavore}>Herbavore</button>
                </Navigation>
            </Header>
            <MainContent animals={getItems}></MainContent>
            <Footer>footer Text</Footer>
        </div>
    );
}

