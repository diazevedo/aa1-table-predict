import { useState } from "react";

import ListItem from "../ListItem";

const List = ({ games = [], onResultSet }) => {
  return (
    <ul>
      {games.map(({ attributes: game, hash_id }, index) => {
        return <ListItem game={game} key={hash_id} onResultSet={onResultSet} />;
      })}
    </ul>
  );
};

export default List;
