import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List';
import AddToList from './components/AddToList';

export interface IState {
  people: {
    name: string
    age: number
    url: string
    note?: string
  }[]
}

function App() {

  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Seat leon fr",
      url: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcf-cdn-v2.seat.at%2Fmedia%2FKwc_Basic_Image_Component.csTheme_Model_Colors_Slider_Child_Component%253Echild_large%2F22390-207707-slider-135820-large%2Fdh-1109-8ef4d7%2F9f69a8fb%2F1686043523%2Fnew-seat-leon-nevada-white-colour-configuration.png&tbnid=fdpln8UkiElUKM&vet=12ahUKEwih_Zfsh-v_AhUDLewKHd_MAsoQMygAegUIARC_AQ..i&imgrefurl=https%3A%2F%2Fwww.seat.si%2Fleon%2Fleon&docid=eZ8tHNkWnyMTtM&w=1109&h=555&q=seat%20leon%20fr&ved=2ahUKEwih_Zfsh-v_AhUDLewKHd_MAsoQMygAegUIARC_AQ",
      age: 4,
      note: "Ima preveč prevoženih"
    }
  ])

  return (
    <div className="App">
      <h1>Avti v mojem ožjem izboru</h1>
      <List people={people}/>
      <AddToList people={people} setPeople={setPeople}/>
    </div>
  );
}

export default App;
