import { useState } from "react";

import Table from "./components/Table";
import List from "./components/List";

import { modifyTeam, calculatePoints } from "./utils";

import "./styles.css";
import ladder from "./data/table";
import gamesData from "./data/games";

const gamesPerDate = gamesData.data.reduce((games, game) => {
  const day = game.attributes.date.split(" ")[0];
  games[day] = games[day] ?? [];
  games[day].push(game);
  return games;
}, {});

// const groups = gamesData.data.groupBy((obj) => obj.attributes.date);
// console.log({ groups });
// agrupar por data os proximos jogos
// fazer as fixtures assim
// add no proprio table procurando por team_code
// nao eh tao profundo que tenho que passar os dados entao ta ook

// vou ter que ter um component list
// Ele pega a primeira data do primeiro jogo e coloca como title

export default function App() {
  const [table, setTable] = useState(ladder);
  const [fixtures, setFixtures] = useState(gamesPerDate);

  const changeTableData = ({ game }) => {
    const { home_team_code, away_team_code, home_team_score, away_team_score } =
      game;

    const newTable = table.map(({ hash_id, attributes: team }) => {
      let teamNew = { ...team };
      if (team.team_code === home_team_code) {
        teamNew = modifyTeam({
          team,
          scored: home_team_score,
          conceded: away_team_score,
        });
      }

      if (team.team_code === away_team_code) {
        teamNew = modifyTeam({
          team,
          scored: away_team_score,
          conceded: home_team_score,
        });
      }

      return { hash_id, attributes: teamNew, type: "tables" };
    });

    newTable.sort((team_a, team_b) => {
      return team_b.attributes.points - team_a.attributes.points;
    });

    setTable(newTable);
  };

  return (
    <div className="App">
      <h1>AA1 Ladder</h1>
      <Table body={table} />
      {Object.keys(fixtures).map((date, index) => (
        <div key={index} className="content">
          <h3>{new Date(date).toDateString()}</h3>
          <List games={fixtures[date]} onResultSet={changeTableData} />
        </div>
      ))}
    </div>
  );
}
