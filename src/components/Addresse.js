import React from 'react';

const Addresse = props => {

  return (
    <div className="row">
      <form className="medium-4 columns">
        <label>Addresse</label>
        <input onChange={props.handleNameEntered} type="text"/>
        <div className="row small-12 large-12 columns">
          <button className={props.className1} id="accepted" type="button" onClick={props.handleAcceptedClick}>Accepted</button>
          <button className={props.className} id="rejected" type="button" onClick={props.handleRejectedClick}>Rejected</button>
        </div>
      </form>
    </div>
  );

};

export default Addresse;
