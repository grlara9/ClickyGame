import React from "react";
import "./style.css";

function Header(props){
    return (
        <div className="header">
            <img className="dbz__logo" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3eb70ccc-e7ad-4e1a-87fa-f97df9ef1c52/d8rx6aw-7aed38dd-576b-47cc-b0b0-a24803f1f2fe.png/v1/fill/w_1024,h_576,strp/dragon_ball_z__dbz__nuevo_logo_by_saodvd_d8rx6aw-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD01NzYiLCJwYXRoIjoiXC9mXC8zZWI3MGNjYy1lN2FkLTRlMWEtODdmYS1mOTdkZjllZjFjNTJcL2Q4cng2YXctN2FlZDM4ZGQtNTc2Yi00N2NjLWIwYjAtYTI0ODAzZjFmMmZlLnBuZyIsIndpZHRoIjoiPD0xMDI0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.8gt4xf5titbIww5jFC2RZcE2AhkKO56icH11KZJ1O-A"
            />

            <div className="header__title">
                <h1>Clicky Game</h1>
            </div>

            <div className="header__scores">
                <span className="header__topline"> Scores: {props.score}</span>
               
               <span className="header__bottonline">Highscore: {props.highscore} </span> 
            </div>
        </div> 
        );
    }

export default Header;