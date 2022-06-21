import React from 'react';
import { Game } from '../Types';
import '../styles/ListItem.css';

interface ListItemProps {
  game: Game;
}

function ListItem(props: ListItemProps) {
  const { categories, gameName, gamePreviewUrl, gameThumbnail, language, slug } = props.game;

  // fetch("https://"+gameThumbnail)
  //   .then((res) => {
  //     console.log(res)
  //   })

  return (
    <div className="ListItem">
      <a href={gamePreviewUrl} className="game-content">
        <div className="thumbnail">
          <img src={gameThumbnail}/>
        </div>
        <p>{gameName}</p>
      </a>
    </div>
  );
}

export default ListItem;
