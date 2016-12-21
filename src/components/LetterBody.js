import React, { Component} from 'react';
import Acceptance from './Acceptance';
import Addresse from './Addresse'

class LetterBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Addresse",
      accepted: true
    };
    this.handleAcceptedClick = this.handleAcceptedClick.bind(this);
    this.handleRejectedClick = this.handleRejectedClick.bind(this);
    this.handleNameEntered = this.handleNameEntered.bind(this);
  }

  handleAcceptedClick(event) {
    event.preventDefault();
    if (!this.state.accepted) {
      this.setState({accepted: true});
    }

  }

  handleRejectedClick(event) {
    event.preventDefault();
    if (this.state.accepted) {
      this.setState({accepted: false});
    }
  }

  handleNameEntered(event){
    event.preventDefault();
    let newName = event.target.value
    this.setState({name: newName})
  }



  render(){
    return (
      <div className="row">
        <Addresse
        name={this.state.name}
        handleNameEntered={this.handleNameEntered}
        />
        <div className="row small-12 large-12 columns">
          <button id="accepted" type="button" onClick={this.handleAcceptedClick}>Accepted</button>
          <button id="rejected" type="button" onClick={this.handleRejectedClick}>Rejected</button>
        </div>
        <div>
          <div id="letter" className="large-8 large-centered columns">
            <div className="small-2 small-centered columns">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Hogwarts_coat_of_arms_colored_with_shading.svg/2000px-Hogwarts_coat_of_arms_colored_with_shading.svg.png" />
            </div>
            <div>
              <h1>HOGWARTS SCHOOL OF WITCHCRAFT AND WIZARDRY</h1>
              <h4 id="headmaster">Headmaster: Albus Dumbledore</h4>
              <h4>
                (Order of Merlin, First Class, Grand Sorc., Chf. Warlock, Supreme Mugwump,International Confed. of Wizards)
              </h4>
              <br/>
              <p>Dear {this.state.name},</p>
              <br/>
              <Acceptance
              accepted={this.state.accepted}
              handleAcceptedClick={this.handleAcceptedClick}
              handleRejectedClick={this.handleRejectedClick}
              />
              <br/>
              <p>Your sincerely,</p>
              <p>Minerva McGonagall</p>
              <p>Deputy Headmistress</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default LetterBody;
