import React, { Component } from "react";
import KittenCard from "./components/KittenCard";
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Kittens from "./kitten.json";
import "./App.css";




class App extends Component {
  // Set this.state
  state = {
    kittens,
    currentScore: 0,
    topScore: 0,
    correctIncorrect: "",
    clicked: [],
  };
};



  render() {
    return (
      <Wrapper>
        <Nav
          title="React Clicky Game"
          score={this.state.currentScore}
          topScore={this.state.topScore}
          correctIncorrect={this.state.correctIncorrect}
        />

        <Title>
          Click on an image to earn points, but don't click on any more than once!
        </Title>
       
            {this.state.kittens.map(kitten => (
             
                <KittenCard
                  key={kitten.id}
                  handleClick={this.handleClick}
                  handleIncrement={this.handleIncrement}
                  handleReset={this.handleReset}
                  handleShuffle={this.handleShuffle}
                  id={kitten.id}
                  image={kitten.image}
                />
              
            ))}
          
      </Wrapper>
    );
  }
}
export default App;