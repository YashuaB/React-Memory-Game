import React, { Component } from "react"
import KittenCard from "./components/KittenCard"
import Nav from "./components/Nav"
import Wrapper from "./components/Wrapper"
import Title from "./components/Title"
import kitten from "./kitten.json"



function randomKitten(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]
  }
  return array;
}

class App extends Component {
  
  state = {
    kitten,
    currentScore: 0,
    topScore: 0,
    correctIncorrect: "",
    clicked: [],
  }

  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement()
      this.setState({ clicked: this.state.clicked.concat(id) })
    } else {
      this.handleReset()
    }
  }

  handleIncrement = () => {
    const newScore = this.state.currentScore + 1
    this.setState({
      currentScore: newScore,
      correctIncorrect: "You guessed correctly!"
    })
    if (newScore >= this.state.topScore) {
      this.setState({ topScore: newScore })
    }
    else if (newScore === 12) {
      this.setState({ correctIncorrect: "You win!" })
    }
    this.handleShuffle()
  }

  handleReset = () => {
    this.setState({
      currentScore: 0,
      topScore: this.state.topScore,
      correctIncorrect: "You guessed incorrectly!",
      clicked: []
    })
    this.handleShuffle()
  }

  handleShuffle = () => {
    let shuffledkitten = randomKitten(kitten)
    this.setState({ kitten: shuffledkitten })
  }

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
        
            {this.state.kitten.map(kitten => (
              
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
    )
  }
}
export default App