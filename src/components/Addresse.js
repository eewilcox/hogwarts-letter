import React from 'react';

const Addresse = props => {
  return (
    <div className="row">
      <form className="medium-12 columns">
        <label className="medium-6 columns">Addresse</label>
        <input className="medium-2 columns" type="text" placeholder="" />

        <div>
          <button className="small-2 large-2 columns left" type="button" onClick={props.handleButtonClick}>Accepted</button>
          <button className="small-2 large-2 columns" type="button"   onClick={props.handleButtonClick}>Rejected</button>
        </div>
      </form>
    </div>
  );
};

export default Addresse;
