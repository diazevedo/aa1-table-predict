import texts from "../../data/text";

const Table = ({ body }) => {
  return (
    <table className="styled-table">
      <thead>
        <tr>
          {texts.headers_mobile.map((header, index) => {
            return <th key={index}>{header}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {body.map(({ hash_id, attributes: team }, index) => {
          return (
            <tr key={hash_id}>
              <td></td>
              <td>
                <img
                  style={{ width: "25px" }}
                  src={team.logo}
                  alt={`${team.team_name}'s logo`}
                />
              </td>
              <td className="no-className">{team.team_name}</td>
              <td>{team.points}</td>
              <td>{team.played}</td>
              <td>{team.won}</td>
              <td>{team.drawn}</td>
              <td>{team.lost}</td>
              <td>{team.byes}</td>
              <td>{team.forfeits}</td>
              <td>{team.goals_for}</td>
              <td>{team.goals_against}</td>
              <td>{team.goal_difference}</td>
              <td>{team.points_per_game}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
