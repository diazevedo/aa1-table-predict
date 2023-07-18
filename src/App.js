import Table from "./components/table";

import "./styles.css";
import teams from "./data/teams";

export default function App() {
  return (
    <div className="App">
      <h1>AA1 Ladder</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Table />
      {teams.map((team) => {
        return <img src={team.logo} alt={`${team.name}'s logo`} />;
      })}
    </div>
  );
}
