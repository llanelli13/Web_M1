import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Style/Result.css";
import teamsData from "../teams.json";

function ResultsPage() {
  const [filter, setFilter] = useState("");
  const [sortingOption, setSortingOption] = useState(""); // Ajoutez l'état pour l'option de tri

  const filteredTeams = teamsData.filter(
    (team) => !filter || team.region === filter
  );

  const getTeamLogo = (logoFilename) => {
    return require(`../views/Logo/${logoFilename}`);
  };
  const regions = Array.from(new Set(teamsData.map((team) => team.region)));

  // Fonction de tri personnalisée
  const sortTeams = (teams, option) => {
    if (option === "Titre mondial") {
      return teams.slice().sort((a, b) => b["worlds-palmeres-count"] - a["worlds-palmeres-count"]);
    } else if (option === "Titre régional") {
      return teams.slice().sort((a, b) => b["region-palmares-count"] - a["region-palmares-count"]);
    }
    return teams; // Aucun tri spécifique
  };

  const sortedTeams = sortTeams(filteredTeams, sortingOption);

  return (
    <div className="page">
      <div className="container">
        <div className="filter">
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="">Toutes les régions</option>
            {regions.map((region, index) => (
              <option key={index} value={region}>
                {region}
              </option>
            ))}
          </select>
          <select value={sortingOption} onChange={(e) => setSortingOption(e.target.value)}>
            <option value="">Trier par</option>
            <option value="Titre mondial">Titre mondial</option>
            <option value="Titre régional">Titre régional</option>
          </select>
        </div>
        <section className="team-list">
          {sortedTeams.map((team, index) => (
            <div className="big-card" key={index}>
              <Link
                to={{
                  pathname: `/teams/${encodeURIComponent(team.name)}`,
                  state: { team },
                }}
              >
                <div className="team-item">
                  <img
                    src={getTeamLogo(team.logo)}
                    alt={`Logo de ${team.name}`}
                  />
                  <p className="team-name">{team.name}</p>
                </div>
              </Link>
              <div className="card">
                <p className="worlds-palmares">
                  {team["worlds-palmeres-count"]}x World's Champion <div>🏆</div>
                </p>
                <p className="region-palmares">
                  {team["region-palmares-count"]}x {team.region} Champion <div>🥇</div>
                </p>
              </div>
            </div>
          ))}
        </section>

        <div className="palmares">
          {filteredTeams.map((team, index) => (
            <></>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ResultsPage;
