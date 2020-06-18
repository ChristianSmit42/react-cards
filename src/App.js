import React from 'react';
import './App.css';
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";



async function fetchAnimalData(){
    const fetchCarnivore = fetch("https://api.jsonbin.io/b/5ee9e20719b60f7aa95be805")
        .then(response=> response.json()).then(json=> json.animals);
    return fetchCarnivore;
}

const herbivore = [
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
];

const carnivore=[
    {
        tile:"loading",
        text:"loading",
        imgsource: "none",
    }
];

export default function App() {
    const [getItems, setItems] = React.useState(carnivore);

    function handleClicksToHerbavore() {
        setItems(herbivore);
    }

    function handleClicksToCarnivore() {
        fetchAnimalData().then(response=> setItems(response));
    }


   /* const carnivore = [
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
    ];*/

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

