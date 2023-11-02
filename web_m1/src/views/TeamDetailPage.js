import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Style/TeamDetailPage.css'; // Ajustez le chemin si nécessaire

import teamsData from '../teams.json'; // Remplacez par le chemin correct de votre fichier JSON

function TeamDetailPage() {
  const { teamName } = useParams();
  const [teamDetails, setTeamDetails] = useState(null);

  useEffect(() => {
    // Décoder l'URL pour s'assurer que les caractères spéciaux sont gérés correctement
    const decodedTeamName = decodeURIComponent(teamName);
    // Trouver l'équipe dans le fichier JSON
    const team = teamsData.find((team) => team.name === decodedTeamName);
    console.log(decodedTeamName);
    console.log(team);
    setTeamDetails(team);
  }, [teamName]);


  // Si les détails de l'équipe ne sont pas encore chargés, affichez un message ou un loader
  if (!teamDetails) {
    return <div>Loading...</div>;
  }

  const getTeamLogo = (logoFilename) => {
    return require(`./Logo/${logoFilename}`);
};

  // Supposons que vous avez une fonction `getLogoPath` pour obtenir le chemin du logo
  const logoPath = getTeamLogo(teamDetails.logo);

  return (
    <div className='team-detail-page'>
      <h1>{teamDetails.name}</h1>
      <img src={logoPath} alt={`Logo de ${teamDetails.name}`} />
      <p>Palmarès: {teamDetails.palmares}</p>
      <p>Région: {teamDetails.region}</p>
      {/* Ajoutez ici plus de détails que vous voudriez afficher */}
    </div>
  );
}


export default TeamDetailPage;
