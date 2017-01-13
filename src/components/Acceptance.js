import React from 'react';

const Acceptance = props => {
  let admittance = <div><p>We are pleased to inform you that you have a place at Hogwarts School of Witchcraft and Wizardry. Please find enclosed a list of all necessary books and equipment.</p><br/><p> Term begins on 1 September. We await your owl by no later than 31 July.</p></div>;

  if (!props.accepted) {
    admittance = <p>We regret to inform you that we are unable to offer you a place at HogwartsSchool of Witchcraft and Wizardry. After reviewing your application and Github profile, we recognize that you are indeed a 'coding wizard'. Unfortunately, we have concluded that you do not have actual magical abilities, which you must have to be admitted into Hogwarts.</p>
  }


  return(
    <div>
      {admittance}
    </div>
  )
}

export default Acceptance;
