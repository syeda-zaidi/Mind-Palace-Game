import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import Game from "./components/Game";
import Nav from "./components/Nav";
import Cards from './components/cards';
import Cast from "./cast.json";


function App() {
  return (
    <div>

      <div className="row">
        <Nav />
        </div>
        <div className="imgboxes">
        <Cards name={Cast[0].name} image={Cast[0].image} />
        <Cards name={Cast[0].name} image={Cast[0].image} />
        <Cards name={Cast[0].name} image={Cast[0].image} />
        <Cards />
        </div>
        

    </div>
  );
}

export default App;
