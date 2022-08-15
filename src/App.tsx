import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List';
import AddToList from './components/AddToList';

export interface IState {
  people: {
    name: string;
    url: string;
    age: number;
    note?: string;
  }[]                      // array of people objects
}


function App() {
  const [people,setPeople] = useState<IState["people"]>([
    {
      name: "LeBron James",
      url: "https://www.nba.com/",
      age: 36,
      note: "basketball player"
    }
  ])


  return (
    <div className="App">
      <h1>People Invited to my Party</h1>
      <p>A simple React App with typescript. Create a list of players. No delete or update</p>
      <List people={people}/>
      <AddToList setPeople={setPeople} people={people}/>
    </div>
  );
}

export default App;
