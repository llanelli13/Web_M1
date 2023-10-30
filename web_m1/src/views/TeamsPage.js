// TeamsPage.js
import React, { useState, useEffect } from 'react';
import TeamCard from '../components/CardComponent';
import './Style/TeamsPage.css';

function TeamsPage() {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        // Récupération des données des équipes depuis votre API
        fetch('/api/teams')
            .then(response => response.json())
            .then(data => setTeams(data));
    }, []);

    return (
        <div className="teams-page">
            <header>
                <nav>
                    <a href="/">Equipes</a>
                    <a href="/rules">Règlement</a>
                    <a href="/results">Résultat</a>
                </nav>
            </header>

            <section className="filters">
                {/* Vous pouvez ajouter des filtres ici plus tard si nécessaire */}
                Filters:
            </section>

            <section className="teams-list">
                {teams.map(team => <TeamCard key={team.id} team={team} />)}
            </section>
        </div>
    );
}

export default TeamsPage;
