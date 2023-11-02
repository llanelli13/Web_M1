import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Style/TeamsPage.css';
import teamsData from '../teams.json';

function TeamsPage() {
    const [filter, setFilter] = useState("");

    const filteredTeams = teamsData.filter(team => !filter || team.region === filter);

    const getTeamLogo = (logoFilename) => {
        // Vous pouvez également utiliser une importation dynamique avec Webpack si require ne fonctionne pas
        return require(`./Logo/${logoFilename}`);
    };

    // Obtenez une liste unique des régions pour le filtre
    const regions = Array.from(new Set(teamsData.map(team => team.region)));

    return (
        <div className='page'>
            <div className='container'>
                {/* Ajout d'un sélecteur pour les régions */}
                <div className='filter'>
                    <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                        <option value="">Toutes les régions</option>
                        {regions.map((region, index) => (
                            <option key={index} value={region}>
                                {region}
                            </option>
                        ))}
                    </select>
                </div>
                <section className="teams">
                    {filteredTeams.map((team, index) => (
                        <Link key={index} to={{ pathname: `/teams/${encodeURIComponent(team.name)}`, state: { team } }}>
                            <div className="team-card">
                                <img src={getTeamLogo(team.logo)} alt={`Logo de ${team.name}`} />
                                <p className="name">{team.name}</p>
                                <p className="palmares">{team.palmares}</p>
                                <p className="region">{team.region}</p>
                            </div>
                        </Link>
                    ))}
                </section>
            </div>
        </div>
    );
}

export default TeamsPage;
