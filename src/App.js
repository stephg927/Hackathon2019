import React, {Component} from 'react';
import './App.css';
import Card from './Card/Card';
import Button from './Button/Button';

class App extends Component {
  constructor(props){
    super(props);
    this.updateCard = this.updateCard.bind(this);
    this.state = {
      cards: [
        {id: 1, clue: "famous boxer", word: "ali", explanation: "he boxed"},
        {id: 2, clue: "lake", word: "erie", explanation: "it's a lake ok"},
        {id: 3, clue: "milks fave cookie", word: "oreo", explanation: "oreos go good with milk"},
      ],
      currentCard: {}
      }
    }
    componentWillMount(){
      const currentCards = this.state.cards;
      this.setState({
        cards: currentCards,
        currentCard: this.getRandomCard(currentCards)
      })
    }
    
    getRandomCard(currentCards){
      var card = currentCards[Math.floor(Math.random() * currentCards.length)]
      return(card);
  }
  updateCard(){
    const currentCards = this.state.cards;
    this.setState({
      currentCard: this.getRandomCard(currentCards)
    })
  }
  render(){
    return (
      <div className="App">
        <div className="cardSection">
          <Card clue={this.state.currentCard.clue} 
            word={this.state.currentCard.word} 
            explanation={this.state.currentCard.explanation}
          />
        </div>
        <div className="rightButtonSeciont">
          <Button drawCard={this.updateCard}
          />
        </div>        
        <div className="wrongButtonSeciont">
          <Button drawCard={this.updateCard}
          />
        </div>         
      </div>
    );
  }
}

export default App;
