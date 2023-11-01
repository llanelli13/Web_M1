import React, { useState } from 'react';
import '../components/Style/tree.css';

const ChoicePage = () => {
    const [game, setGame] = useState([
        {
            id: '1',
            text: 'xdbcjhsdvjcsdf',
            diamond: false,
            game: 'game1', // Ajoutez une propriété "game" pour indiquer le jeu
        },
        {
            id: '2',
            text: 'eazef',
            diamond: false,
            game: 'game1',
        },
        {
            id: '3',
            text: 'eazffea',
            diamond: false,
            game: 'game2',
        },
        {
            id: '4',
            text: 'tetza',
            diamond: false,
            game: 'game2',
        },
    ]);

    const handleItemClick = (item) => {
        if (item.children) {
            item.children.push({ id: item.id, text: 'Nouvel élément', diamond: false, game: item.game });
        } else {
            item.children = [{ id: item.id, text: 'Nouvel élément', diamond: false, game: item.game }];
        }
        setGame([...game]);
    };

    const renderTree = (treeData, gameName) => {
        return (
            <ul>
                {treeData
                    .filter((item) => item.game === gameName) // Filtrer les éléments par jeu
                    .map((item) => (
                        <li className={item.text + item.id} onClick={() => handleItemClick(item)}>
                            <div>{item.id}</div>
                            {item.children && item.children.length ? renderTree(item.children, gameName) : ''}
                        </li>
                    ))}
            </ul>
        );
    };

    return (
        <div className="tree-container">
            <div className="tree">{renderTree(game, 'game1')}</div>
            <div className="tree">{renderTree(game, 'game2')}</div>
        </div>
    );
};

export default ChoicePage;
