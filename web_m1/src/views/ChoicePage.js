import React, { useState } from 'react';
import '../components/Style/tree.css';

const ChoicePage = () => {
    const [tournament, setTournament] = useState({
        rounds: [
            {
                id: 'round1',
                matches: Array.from({ length: 16 }, (_, i) => ({
                    id: `match${i + 1}`,
                    teamA: null,
                    teamB: null,
                    winner: null,
                })),
            },
            {
                id: 'round2',
                matches: [
                    { id: 'match9', teamA: 17, teamB: 'Winner1', winner: null },
                    { id: 'match10', teamA: 18, teamB: 'Winner2', winner: null },
                    { id: 'match11', teamA: 19, teamB: 'Winner3', winner: null },
                    { id: 'match12', teamA: 20, teamB: 'Winner4', winner: null },
                    { id: 'match13', teamA: 21, teamB: 'Winner5', winner: null },
                    { id: 'match14', teamA: 22, teamB: 'Winner6', winner: null },
                    { id: 'match15', teamA: 23, teamB: 'Winner7', winner: null },
                    { id: 'match16', teamA: 24, teamB: 'Winner8', winner: null },
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

    const [availableTeams, setAvailableTeams] = useState(Array.from({ length: 16 }, (_, i) => i + 1));
    const [selectedTeams, setSelectedTeams] = useState([]);

    const handleTeamSelection = (team) => {
        if (selectedTeams.length < 16) {
            const updatedTournament = { ...tournament };
            const round1 = updatedTournament.rounds[0];
            const nextAvailableTeams = availableTeams.filter((t) => t !== team);
            const nextSelectedTeams = [...selectedTeams, team];

            const matchIndex = Math.floor(selectedTeams.length / 2);
            const match = round1.matches[matchIndex];
            
            if (match.teamA === null) {
                match.teamA = team;
            } else if (match.teamB === null) {
                match.teamB = team;
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
    
    const renderTeamList = () => {
        return availableTeams.map((team) => (
            <div key={team}>
                <button onClick={() => handleTeamSelection(team)}>Select Team {team}</button>
            </div>
        ));
    };

    const renderTournament = () => {
        return (
            <div className="rounds-container">
                <div className="team-list">
                    <h2>Teams</h2>
                    {renderTeamList()}
                </div>
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

    return <div>{renderTournament()}</div>;
};

export default ChoicePage;