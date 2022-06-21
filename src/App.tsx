import React, { useEffect, useState } from 'react';
import logo from './leovegas.jpeg';
import './App.css';
import Main from './components/Main';
import { Game } from './Types';

function App() {
  const [loading, setLoading] = useState<boolean>(true)
  const [data, setData] = useState<Game[]>([])

  useEffect(() => {
    fetch(
      "https://www.mocky.io/v2/5da99f9f31000036004e0a4e")
      .then((res) => res.json())
      .then((json) => {
        setData(json)
        setLoading(false)
      })
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Games Library</p>
      </header>
      <div className="App-body">
        {loading ?
          <div> loading </div>
          :
          <Main games={data} />
        }

      </div>
    </div>
  );
}

export default App;
