const WIN_POINTS = 3;
const DRAW_POINTS = 1;
const LOST_POINTS = 0;

const calculatePoints = ({ scored, conceded }) => {
  if (scored > conceded) {
    return { points: WIN_POINTS };
  }

  if (conceded > scored) {
    return { points: LOST_POINTS };
  }

  return { points: DRAW_POINTS };
};

const setResults = ({ points }) => {
  return {
    won: points === 3 ? 1 : 0,
    drawn: points === 1 ? 1 : 0,
    lost: points === 0 ? 1 : 0,
  };
};

const modifyTeam = ({ team, scored, conceded }) => {
  
  const { points } = calculatePoints({
    scored,
    conceded,
  });

  const { won, drawn, lost } = setResults({ points });
  console.log(team.goals_for + Number(scored));
  return {
    ...team,
    points: team.points + points,
    played: team.played + 1,
    won: team.won + won,
    drawn: team.drawn + drawn,
    lost: team.lost + lost,
    goals_for: team.goals_for + Number(scored),
    goals_against: team.goals_against + Number(conceded),
    goal_difference:
      team.goals_for + Number(scored) - (team.goals_against + Number(conceded)),
    points_per_game: team.points_per_game,
  };
};

export { modifyTeam, calculatePoints };
