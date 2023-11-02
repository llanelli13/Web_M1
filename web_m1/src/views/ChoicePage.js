import React, { useState } from 'react';
import '../components/Style/tree.css';

const ChoicePage = () => {
    const teams = [
        'Team 1',
        'Team 2',
        'Team 3',
        'Team 4',
        'Team 5',
        'Team 6',
        'Team 7',
        'Team 8',
        'Team 9',
        'Team 10',
        'Team 11',
        'Team 12',
        'Team 13',
        'Team 14',
        'Team 15',
        'Team 16',
        'Team 17',
        'Team 18',
        'Team 19',
        'Team 20',
        'Team 21',
        'Team 22',
        'Team 23',
        'Team 24',
    ];

    const [selectedTeams, setSelectedTeams] = useState([]);
    const [tournament, setTournament] = useState({
        rounds: [
            {
                id: 'round1',
                matches: [
                    { id: 'match1', teamA: null, teamB: null, winner: null },
                    { id: 'match2', teamA: null, teamB: null, winner: null },
                    { id: 'match3', teamA: null, teamB: null, winner: null },
                    { id: 'match4', teamA: null, teamB: null, winner: null },
                    { id: 'match5', teamA: null, teamB: null, winner: null },
                    { id: 'match6', teamA: null, teamB: null, winner: null },
                    { id: 'match7', teamA: null, teamB: null, winner: null },
                    { id: 'match8', teamA: null, teamB: null, winner: null },
                    { id: 'match9', teamA: null, teamB: null, winner: null },
                    { id: 'match10', teamA: null, teamB: null, winner: null },
                    { id: 'match11', teamA: null, teamB: null, winner: null },
                    { id: 'match12', teamA: null, teamB: null, winner: null },
                ],
            },
        ],
    });

    const handleTeamSelection = (team) => {
        if (selectedTeams.length < 2) {
            setSelectedTeams([...selectedTeams, team]);
        }
    };

    const handleMatchCreation = () => {
        if (selectedTeams.length === 2) {
            const updatedTournament = { ...tournament };
            const nextMatchIndex = updatedTournament.rounds[0].matches.findIndex(
                (match) => !match.teamA && !match.teamB
            );

            if (nextMatchIndex !== -1) {
                updatedTournament.rounds[0].matches[nextMatchIndex].teamA = selectedTeams[0];
                updatedTournament.rounds[0].matches[nextMatchIndex].teamB = selectedTeams[1];
                setSelectedTeams([]);
                setTournament(updatedTournament);
            }
        }
    };

    const handleWinnerSelection = (roundIndex, matchIndex, winner) => {
        const updatedTournament = { ...tournament };
        updatedTournament.rounds[roundIndex].matches[matchIndex].winner = winner;

        if (roundIndex < tournament.rounds.length - 1) {
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
        return tournament.rounds.map((round, roundIndex) => (
            <div key={round.id}>
                <h2>Round {roundIndex + 1}</h2>
                {round.matches.map((match, matchIndex) => (
                    <div key={match.id}>
                        {match.teamA && match.teamB && !match.winner && (
                            <div>
                                <button onClick={() => handleWinnerSelection(roundIndex, matchIndex, match.teamA)}>
                                    {match.teamA}
                                </button>
                                vs
                                <button onClick={() => handleWinnerSelection(roundIndex, matchIndex, match.teamB)}>
                                    {match.teamB}
                                </button>
                            </div>
                        )}
                        {match.winner && <p>Winner: {match.winner}</p>}
                    </div>
                ))}
            </div>
        ));
    };

    return (
        <div className="tree-container">
            <div>
                <h2>Select Teams for Round 1</h2>
                <div>
                    {teams.map((team) => (
                        <div
                            key={team}
                            onClick={() => handleTeamSelection(team)}
                            style={{
                                border: '1px solid #000',
                                margin: '5px',
                                padding: '5px',
                                cursor: 'pointer',
                            }}
                        >
                            {team}
                        </div>
                    ))}
                </div>
                {selectedTeams.length === 2 && (
                    <button onClick={handleMatchCreation}>Create Match</button>
                )}
            </div>
            {renderTournament()}
        </div>
    );
};

export default ChoicePage;
