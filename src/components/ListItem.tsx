import React from 'react';
import { Game } from '../Types';
import '../styles/ListItem.css';

interface ListItemProps {
  game: Game;
}

function ListItem(props: ListItemProps) {
  const { gameName, gamePreviewUrl, gameThumbnail } = props.game;

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
