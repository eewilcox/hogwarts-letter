import React, { Component} from 'react';
import Acceptance from './Acceptance';

class LetterBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Dear Addresse,",
      accepted: true
    };
    this.handleAcceptedClick = this.handleAcceptedClick.bind(this);
    this.handleRejectedClick = this.handleRejectedClick.bind(this);
  }

  handleAcceptedClick(event) {
    if (!this.state.accepted) {
      this.setState({accepted: true});
    }

  }

  handleRejectedClick(event) {
    if (this.state.accepted) {
      this.setState({accepted: false});
    }
  }



  render(){
    return (
      <div className="row">
        <div id="letter" className="small-8 large-centered columns">
          <div className="small-2 small-centered columns">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Hogwarts_coat_of_arms_colored_with_shading.svg/2000px-Hogwarts_coat_of_arms_colored_with_shading.svg.png" />
          </div>
          <div>
            <h1>HOGWARTS SCHOOL OF WITCHCRAFT AND WIZARDRY</h1>
            <h4 id="headmaster">Headmaster: Albus Dumbledore</h4>
            <h4>
              (Order of Merlin, First Class, Grand Sorc., Chf. Warlock, Supreme Mugwump,International Confed. of Wizards)
            </h4>
            <p>{this.state.name}</p>
            <Acceptance
            accepted={this.state.accepted}
            handleAcceptedClick={this.handleAcceptedClick}
            handleRejectedClick={this.handleRejectedClick}
            />
            <p>Your sincerely,</p>
            <p>Minerva McGonagall</p>
            <p>Deputy Headmistress</p>
          </div>
        </div>
      </div>
    );
  }
};

export default LetterBody;
