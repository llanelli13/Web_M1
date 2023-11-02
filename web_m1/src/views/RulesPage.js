import React from 'react';
import './Style/RulesPage.css'; 

const Rules = () => {
    return (
        <div className="regulation-page">
          <h1 className="regulation-header">Règlement du Jeu Pick'EM</h1>
          
          <div className="regulation-section">
            <h2 className="regulation-title">1. Objectif du jeu</h2>
            <p className="regulation-content">
              Le but de Pick'EM est de prédire les résultats des matchs de League of Legends. Les joueurs accumulent des points basés sur la précision de leurs prédictions.
            </p>
          </div>
    
          <div className="regulation-section">
            <h2 className="regulation-title">2. Comment jouer</h2>
            <p className="regulation-content">
              Les joueurs doivent sélectionner les équipes qu'ils pensent qu'elles gagneront avant le début de chaque match. Une fois le match commencé, les sélections sont verrouillées et ne peuvent être modifiées.
            </p>
          </div>
    
          <div className="regulation-section">
            <h2 className="regulation-title">3. Attribution des points</h2>
            <p className="regulation-content">
              Les points sont attribués en fonction de la précision des prédictions des joueurs. Une prédiction correcte rapporte un certain nombre de points, qui varie en fonction de la phase du tournoi.
            </p>
          </div>
    
          <div className="regulation-section">
            <h2 className="regulation-title">4. Récompenses</h2>
            <p className="regulation-content">
              Les joueurs qui obtiennent le plus de points à la fin du tournoi recevront des récompenses. Les détails spécifiques des récompenses seront annoncés séparément.
            </p>
          </div>
    
          <div className="regulation-section">
            <h2 className="regulation-title">5. Conditions générales</h2>
            <p className="regulation-content">
              En participant à Pick'EM, les joueurs acceptent de respecter les termes et conditions du jeu. Tout comportement inapproprié ou tentative de tricherie entraînera une disqualification.
            </p>
          </div>
          
        </div>
      );
    }

export default Rules;
