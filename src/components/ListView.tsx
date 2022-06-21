import React from 'react';
import { Game } from '../Types';
import ListItem from './ListItem';
import '../styles/ListView.css';

interface ListViewProps {
  games: Game[];
}

function ListView(props: ListViewProps) {
  const noGamesToShow = props.games.length === 0;

  const listItems = props.games.map((game)=>
    <ListItem key={game.gameName} game={game}/>
  );

  if (noGamesToShow){
    return(
      <p>No results found</p>
    )
  }

  return (
    <div className="ListView">
      {listItems}
    </div>
  );
}

export default ListView;
