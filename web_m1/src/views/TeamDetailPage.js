import React from 'react';
import { useLocation } from 'react-router-dom';
import './Style/TeamDetailPage.css';

function TeamDetailPage() {
    const location = useLocation();
    const team = location.state?.team;

    if (!team) {
        return <div>Informations sur l'équipe non disponibles</div>;
    }

    return (
        <div className="team-detail">
            <img src={team.logo} alt={`Logo de ${team.name}`} />
            <p className="name">{team.name}</p>
            <p>{team.palmares}</p>
            <p>{team.region}</p>
            {/* Vous pouvez ajouter d'autres détails ici */}
        </div>
    );
}

export default TeamDetailPage;
