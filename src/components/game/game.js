import React from "react";
import "./game.css";

function Game(props){
    
    let backgroundStyles = {
        backgroundImage:`url(${props.image}`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "auto",
        height: "15rem",
        width: "15rem",
        cursor: "pointer"
    }

    return (
        <div className="col-md-4 mb-3">
            <div className="game" onClick={() => props.clickCount(props.id)}>
                <div className="img-game">
                    <div className="game-image" style={backgroundStyles}></div>
                    {/* <img alt={props.name} src={props.image} /> */}
                </div>
            </div>
        </div>
    );
}
export default Game;