import React, { useState, useEffect } from 'react';

import Menu from './menu/Menu';

import cardsJson from './lor_api/set1-en_us.json';
import cardsJson2 from './lor_api/set1-en_us.json';
import regionsJson from './lor_api/globals-en_us.json';

import './App.css';

export default function App() {
  const cardsJsonFull = cardsJson.concat(cardsJson2);
  const [cards, setCards] = useState(cardsJsonFull);
  const [regions, SetRegions] = useState(regionsJson.regions);

  let text = '';

  function handleFilterCards(value) {
    if(value === ""){
      setCards(cardsJsonFull);
    }else{
      setCards(cardsJsonFull.filter(card => card.regionRef === value));
    }
  }

  return (
    <>
      <Menu />
      <div className="container-cards" >
        <div className="container-filtros">
          <select className="inputs" onChange={event => handleFilterCards(event.target.value)} >
            <option value="">Selecione</option>
            {regions.map(region => <option value={region.nameRef}>{region.name}</option>)}
          </select>
        </div>
        {cards.length === 0 ?  <h4>Não possui Cards.</h4> : ''}
        {cards.map(card => {
            return <img src={card.assets[0].gameAbsolutePath} className="card-img" alt={card.name} title={card.name} />
        })}
      </div>
    </>
  );
}
