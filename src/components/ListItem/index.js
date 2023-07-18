import { useState, useEffect } from "react";

const ListItem = ({ game = {}, onResultSet }) => {
  const [homeScore, setHomeScore] = useState("");
  const [awayScore, setAwayScore] = useState("");

  useEffect(() => {
    if (homeScore !== "" && awayScore !== "") {
      const data = {
        ...game,
        home_team_score: homeScore,
        away_team_score: awayScore,
      };

      onResultSet({
        game: data,
      });
    }
  }, [homeScore, awayScore]);

  return (
    <li>
      <div className="flex end">
        <img
          style={{ width: "25px", flex: "0 1 3%" }}
          src={game.home_logo}
          alt={`${game.home_team_name}'s logo`}
        />
        <span>{game.home_team_name}</span>
      </div>
      <form>
        <input
          type="number"
          // value={homeScore}
          onChange={(e) => setHomeScore(event.target.value)}
        />
        <input
          type="number"
          // value={awayScore}
          onChange={(e) => setAwayScore(event.target.value)}
        />
      </form>
      <div className="flex ">
        <img
          style={{ width: "25px", flex: "0 1 3%" }}
          src={game.away_logo}
          alt={`${game.away_team_name}'s logo`}
        />
        <span>{game.away_team_name}</span>
      </div>
    </li>
  );
};

export default ListItem;
