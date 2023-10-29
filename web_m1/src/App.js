import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/HeaderComponent'; // Adjust path if necessary
import Teams from './views/TeamsPage';
import Rules from './views/RulesPage';
import Results from './views/ResultsPage';
import HomePage from './views/HomePage';
import Profile from './views/ProfilePage';

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/teams" element={<Teams />} />
                <Route path="/rules" element={<Rules />} />
                <Route path="/results" element={<Results />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </div>
    );
}

export default App;
