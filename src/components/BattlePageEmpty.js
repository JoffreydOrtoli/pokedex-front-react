import React from 'react';

const BattlePageEmpty = () => {
    return (
        <div>
            <h1 className="battle-title">Arène VS</h1>
            <a href="/battle/fight" className="shuffleBattle shuffleBattle--shuffle">Mélanger</a>
        </div>
    );
};

export default BattlePageEmpty;