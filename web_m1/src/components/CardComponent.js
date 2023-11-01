// TeamCard.js
import React from 'react';

function TeamCard({ team }) {
    return (
        <div className="team-card">
            <img src={team.logo} alt={team.name} className="team-logo" />
            <h2>{team.name}</h2>
        </div>
    );
}

export default TeamCard;
