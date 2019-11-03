import React from "react";
import "./game.css";

function Game(props){
    return (
        <div className="game" onClick={() => props.clickCount(props.id)}>
            <div className="img-game">
                <img alt={props.name} src={props.image} />
            </div>
        </div>
    );
}
export default Game;