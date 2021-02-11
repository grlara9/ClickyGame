import React from "react";
import "./style.css";
function Header(props){
    return (
        <div className="header">
            <div className="title col-auto">{props.children}</div>
            <img className="col-auto" src="images/logo2.jpg"/>
            <div className="scores col-auto">
                Scores: {props.score}
                Highscore: {props.highscore}
            </div>
        </div> 
        );
    }

export default Header;