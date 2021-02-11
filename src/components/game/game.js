import React from "react";
import "./game.css";

function Game(props){
    
    return (
        <div className="col-md-4 mb-3">
            <div className="game" onClick={() => props.clickCount(props.id)}>
                <div className="img-game">
                    <div className="game-image"></div>
                    { <img alt={props.name} src={props.image} /> }
                </div>
            </div>
        </div>
    );
}
export default Game;