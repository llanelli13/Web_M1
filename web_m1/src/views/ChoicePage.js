import React, { useState } from 'react';
import '../components/Style/tree.css';

const ChoicePage = () => {
    const teamNames = [
        'Team A',
        'Team B',
        'Team C',
        'Team D',
        'Team E',
        'Team F',
        'Team G',
        'Team H',
        'Team I',
        'Team J',
        'Team K',
        'Team L',
        'Team M',
        'Team N',
        'Team O',
        'Team P', 
    ];

    const teamNamesR2 = [
        'Team Q',
        'Team R',
        'Team S',
        'Team T',
        'Team U',
        'Team V',
        'Team W',
        'Team X',
    ];

    const round1Matches = Array.from({ length: 8 }, (_, i) => ({
        id: `match${i + 1}`,
        teamA: null,
        teamB: null,
        winner: null,
    }));

    const [tournament, setTournament] = useState({
        rounds: [
            {
                id: 'round1',
                matches: round1Matches,
            },
            {
                id: 'round2',
                matches: [
                    { id: 'match9', teamA: teamNamesR2[0], teamB: 'Winner1', winner: null },
                    { id: 'match10', teamA: teamNamesR2[1], teamB: 'Winner2', winner: null },
                    { id: 'match11', teamA: teamNamesR2[2], teamB: 'Winner3', winner: null },
                    { id: 'match12', teamA: teamNamesR2[3], teamB: 'Winner4', winner: null },
                    { id: 'match13', teamA: teamNamesR2[4], teamB: 'Winner5', winner: null },
                    { id: 'match14', teamA: teamNamesR2[5], teamB: 'Winner6', winner: null },
                    { id: 'match15', teamA: teamNamesR2[6], teamB: 'Winner7', winner: null },
                    { id: 'match16', teamA: teamNamesR2[7], teamB: 'Winner8', winner: null },
                ],
            },
            {
                id: 'round3',
                matches: [
                    { id: 'match17', teamA: 'Winner9', teamB: 'Winner10', winner: null },
                    { id: 'match18', teamA: 'Winner11', teamB: 'Winner12', winner: null },
                    { id: 'match19', teamA: 'Winner13', teamB: 'Winner14', winner: null },
                    { id: 'match20', teamA: 'Winner15', teamB: 'Winner16', winner: null },
                ],
            },
            {
                id: 'round4',
                matches: [
                    { id: 'match21', teamA: 'Winner17', teamB: 'Winner18', winner: null },
                    { id: 'match22', teamA: 'Winner19', teamB: 'Winner20', winner: null },
                ],
            },
            {
                id: 'round5',
                matches: [
                    { id: 'match23', teamA: 'Winner21', teamB: 'Winner22', winner: null },
                ],
            },
        ],
    });

    // Équipes disponibles pour le round 1
    const [availableTeams, setAvailableTeams] = useState([...teamNames]);
    // Équipes sélectionnées pour le round 1
    const [selectedTeams, setSelectedTeams] = useState([]);

    const handleTeamSelection = (team) => {
        if (selectedTeams.length < 16) {
            // Ajoute l'équipe sélectionnée aux matches du round 1
            const updatedTournament = { ...tournament };
            const round1 = updatedTournament.rounds[0];
            const nextAvailableTeams = availableTeams.filter((t) => t !== team);
            const nextSelectedTeams = [...selectedTeams, team];

            // Trouver le premier match vide dans le round 1
            const emptyMatch = round1.matches.find((match) => !match.teamA || !match.teamB);

            if (emptyMatch) {
                if (!emptyMatch.teamA) {
                    emptyMatch.teamA = team;
                } else {
                    emptyMatch.teamB = team;
                }
            }

            setTournament(updatedTournament);
            setAvailableTeams(nextAvailableTeams);
            setSelectedTeams(nextSelectedTeams);
        }
    };


    const handleWinnerSelection = (roundIndex, matchIndex, winner) => {
        const updatedTournament = { ...tournament };
        updatedTournament.rounds[roundIndex].matches[matchIndex].winner = winner;
    
        if (roundIndex === 0) {
            // Transition du round 1 au round 2 : met à jour la team B du round 2
            const nextRound = updatedTournament.rounds[1];
            const nextMatchIndex = matchIndex;
    
            if (nextRound && nextMatchIndex >= 0 && nextMatchIndex < nextRound.matches.length) {
                const nextMatch = nextRound.matches[nextMatchIndex];
                nextMatch.teamB = winner;
            }
        } else if (roundIndex < 4) {
            // Pour les autres rounds, met à jour la prochaine round normalement
            const nextRound = updatedTournament.rounds[roundIndex + 1];
            const nextMatchIndex = Math.floor(matchIndex / 2);
            if (!nextRound.matches[nextMatchIndex]) {
                nextRound.matches[nextMatchIndex] = { teamA: null, teamB: null, winner: null };
            }
            const nextMatch = nextRound.matches[nextMatchIndex];
    
            if (matchIndex % 2 === 0) {
                nextMatch.teamA = winner;
            } else {
                nextMatch.teamB = winner;
            }
        }
    
        setTournament(updatedTournament);
    };

    const renderTournament = () => {
        return (
            <div className="rounds-container">
                {tournament.rounds.map((round, roundIndex) => (
                    <div key={round.id}>
                        <h2>Round {roundIndex + 1}</h2>
                        {round.matches.map((match, matchIndex) => (
                            <div key={match.id}>
                                {match.teamA !== null && match.teamB !== null && !match.winner && (
                                    <div>
                                        <button
                                            onClick={() => handleWinnerSelection(roundIndex, matchIndex, match.teamA)}
                                        >
                                            {match.teamA}
                                        </button>
                                        vs
                                        <button
                                            onClick={() => handleWinnerSelection(roundIndex, matchIndex, match.teamB)}
                                        >
                                            {match.teamB}
                                        </button>
                                    </div>
                                )}
                                {match.winner && <p>Winner: {match.winner}</p>}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div className="rounds-container">
            <div className="team-list">
                <h2>Teams</h2>
                {availableTeams.map((team) => (
                    <div key={team}>
                        <button onClick={() => handleTeamSelection(team)}>Select {team}</button>
                    </div>
                ))}
            </div>
            {renderTournament()}
        </div>
    );
};

export default ChoicePage;