import React from 'react';

const Addresse = props => {

  return (
    <div className="row">
      <form className="medium-4 columns">
        <label>Addresse</label>
        <input onChange={props.handleNameEntered} type="text"/>
      </form>
    </div>
  );

};

export default Addresse;
