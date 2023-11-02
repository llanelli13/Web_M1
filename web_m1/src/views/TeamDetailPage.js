import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Style/TeamDetailPage.css';
import teamsData from '../teams.json';

function TeamDetailPage() {
  const { teamName } = useParams();
  const [teamDetails, setTeamDetails] = useState(null);

  useEffect(() => {
    const decodedTeamName = decodeURIComponent(teamName);
    const team = teamsData.find((team) => team.name === decodedTeamName);
    console.log(decodedTeamName);
    console.log(team);
    setTeamDetails(team);
  }, [teamName]);

  if (!teamDetails) {
    return <div>Loading...</div>;
  }

  const getTeamLogo = (logoFilename) => {
    return require(`./Logo/${logoFilename}`);
  };
  const logoPath = getTeamLogo(teamDetails.logo);

  return (
    <div className='team-detail-page'>
      <div className='team-detail'>
        <h1>{teamDetails.name}</h1>
        <img src={logoPath} alt={`Logo de ${teamDetails.name}`} className="team-logo" />
        <p>Palmarès: {teamDetails.palmares}</p>
        <p>Joue en : {teamDetails.region}</p> 
      </div>

  
        <h2>Réseaux sociaux</h2>
        <div className="social-media-links">
          {teamDetails.socials && teamDetails.socials.map(sm => (
            <a key={sm.name} href={sm.lien} target="_blank" rel="noopener noreferrer">
              <img src={require(`./Icons/${sm.icon}`)} alt={sm.name} className="social-icon" />
            </a>
          ))}
        </div>

        <h2>Joueurs</h2>
          <ul className="player-list">
          {teamDetails.players.map(player => (
            <li key={player.name} className="player-item">
              <img src={logoPath} alt={`Logo de ${teamDetails.name}`} className="player-logo" />
              <span className="player-name">{player.name}</span> - <span className="player-role">{player.role}</span>
            </li>
          ))}
        </ul>
    </div>
  );
}


export default TeamDetailPage;
