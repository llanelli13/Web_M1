import React from 'react';
import './Style/HomePage.css'; 

function HomePage() {
  return (
    <div className="home-page">
      <h1 className="home-header">Bienvenue sur Pick'EM!</h1>

      <div className="description-section">
        <p className="description-text">
          Pick'EM est un jeu de prédiction où vous essayez de deviner les résultats des matchs de League of Legends. Testez vos connaissances, défiez vos amis et tentez de remporter des récompenses incroyables!
        </p>
      </div>

      <div className="demo-section">
        <h2 className="demo-title">Comment jouer ?</h2>
        <p className="demo-content">
          Regardez la démo ci-dessous pour comprendre le fonctionnement du jeu. C'est simple, rapide et amusant!
        </p>
        <div>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/1ZJrpFbQ_Lk?si=dy-EOpf1mnStQnkP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>

      <button className="btn-start">Commencer à jouer!</button>
      
    </div>
  );
}

export default HomePage;
