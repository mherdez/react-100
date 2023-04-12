import { useState } from 'react';

const Team2 = () => {



  const [ turnTeam2, setTurnTeam2 ] = useState( false );
  const haceralgo = () => {
    setTurnTeam2( !turnTeam2 )
  }


  return (
    <div className="team2">
      <h2 onClick={haceralgo}>Team 2</h2>
      <div className={turnTeam2 ? 'box turn' : 'box'} >
        <h3 id='score-team2' className='score-points'>0</h3>
      </div>
    </div>
  );
};

export default Team2;