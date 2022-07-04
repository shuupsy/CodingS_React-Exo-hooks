import './App.css';
import Personnage from './Personnage';
import Article from './Article';
import { useState } from 'react';

function App() {
  const [perso1, perso2] = useState( {nom: 'Ruan', prenom: 'Sylvaine', age: 28, commune: 'Bruxelles'})

  let rename = () => {
    perso2({ nom: 'Gunther', prenom: 'Maki', age: 6, commune: 'Nantes' })
  }

  const menu = ['beurre', 'pasta', 'citron', 'fromage', 'basilic']

  return (
    <div className="App">
      <h1>COUCOU {perso1.prenom}</h1>
      <Personnage perso={perso1} rename={rename}/>
      <Article menu={menu} />
    </div>
  );
}

export default App;
