import React from "react";
import "./Nav.css";

const Nav = props => (
  <nav>
    <ul>
      <li className="brand">
        <a href="/kitten-click-game/">{props.title}</a>
      </li>
      <li id="rw" >{props.correctIncorrect}</li>


      <li className="">Score - Top: {props.topScore} | Current: {props.score}</li>

    </ul>
  </nav>
);

export default Nav;