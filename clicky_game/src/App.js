import React, {Component} from "react";
import Header from "./components/Header";
import BodyContent from "./components/BodyContent";
import CharacterCard from "./components/CharacterCard";
import character from "./cards.json";
import Footer from "./components/Footer";

// function App () {
//     return (
//         <div>
//             <Header />
//             <BodyContent />
//         </div>
//     );
// }

//sets state to 0 or empty
class App extends Component {
    state = {
      character,
      clickedCharacter: [],
      score: 0
    };
  
  //when you click on a card ... the fish is taken out of the array
    imageClick = event => {
      const currentCharacter = event.target.alt;
      const characterAlreadyClicked =
        this.state.clickedCharacter.indexOf(currentCharacter) > -1;
  
  //if you click on a fish that has already been selected, the game is reset and cards reordered
      if (characterAlreadyClicked) {
        this.setState({
          character: this.state.character.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          clickedCharacter: [],
          score: 0
        });
          alert("You lose. Play again?");
  
  //if you click on an available fish, your score is increased and cards reordered
      } else {
        this.setState(
          {
            character: this.state.character.sort(function(a, b) {
              return 0.5 - Math.random();
            }),
            clickedCharacter: this.state.clickedCharacter.concat(
              currentCharacter
            ),
            score: this.state.score + 1
          },
  //if you get all 12 fish corrent you get a congrats message and the game resets        
          () => {
            if (this.state.score === 12) {
              alert("Yay! You Win!");
              this.setState({
                character: this.state.character.sort(function(a, b) {
                  return 0.5 - Math.random();
                }),
                clickedCharacter: [],
                score: 0
              });
            }
          }
        );
      }
    };
  
  //the order of components to be rendered: navbar, jumbotron, friendcard, footer 
    render() {
      return (
        <div>
          <Header 
            score={this.state.score}
          />
          <BodyContent />
          <div className="wrapper">
            {this.state.character.map(character => (
              <CharacterCard
                imageClick={this.imageClick}
                id={character.id}
                key={character.id}
                image={character.image}
              />
            ))}
          </div>
          <Footer />
        </div>
      );
    }
  }

export default App;